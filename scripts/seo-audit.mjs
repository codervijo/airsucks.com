#!/usr/bin/env node
// Post-build SEO audit over the prerendered output in dist/client/.
//
//   node scripts/seo-audit.mjs            # human report, exit 1 on errors
//   node scripts/seo-audit.mjs --json     # machine-readable
//
// Checks: titles / descriptions / H1s (present, unique, length), canonical ==
// URL, og:url, noindex, JSON-LD parses, internal links resolve (and aren't
// redirect hops), sitemap ⇄ pages parity, orphan pages, thin pages, and
// near-duplicate pages (5-word shingle Jaccard). Dependency-free on purpose.
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("../dist/client/", import.meta.url).pathname;
const SITE = "https://airsucks.com";
const JSON_OUT = process.argv.includes("--json");
const THIN_WORDS = 400;
const DUP_THRESHOLD = 0.3;

if (!existsSync(ROOT)) {
  console.error(`✗ ${ROOT} not found — run the build first`);
  process.exit(1);
}

// ─── collect pages ───────────────────────────────────────────────────────────
function walk(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}
const htmlFiles = walk(ROOT).filter((f) => f.endsWith("index.html"));
const urlOf = (f) => "/" + relative(ROOT, f).replace(/index\.html$/, "");

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
const attr = (tag, name) => tag.match(new RegExp(`${name}="([^"]*)"`))?.[1];

function parse(html) {
  const head = html.split("</head>")[0];
  const body = html.split("<body")[1] ?? "";
  const title = decode(head.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  const metas = [...head.matchAll(/<meta [^>]*>/g)].map((m) => m[0]);
  const desc = decode(
    attr(metas.find((m) => m.includes('name="description"')) ?? "", "content") ?? "",
  );
  const ogUrl = attr(metas.find((m) => m.includes('property="og:url"')) ?? "", "content");
  const robots = attr(metas.find((m) => m.includes('name="robots"')) ?? "", "content") ?? "";
  const canonical = attr(head.match(/<link rel="canonical"[^>]*>/)?.[0] ?? "", "href");
  const jsonLd = [
    ...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
  ].map((m) => m[1]);
  // Visible text only: drop scripts/styles, then tags.
  const visible = decode(
    body
      .replace(/<script[\s\S]*?<\/script>/g, " ")
      .replace(/<style[\s\S]*?<\/style>/g, " ")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();
  // Main content = inside <main>, minus header/footer chrome.
  const mainHtml = body.split("<main")[1]?.split("</main>")[0] ?? body;
  const mainText = decode(
    mainHtml.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();
  const h1s = [...body.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) =>
    decode(m[1].replace(/<[^>]+>/g, "")).trim(),
  );
  const hrefs = [...body.matchAll(/<a [^>]*href="([^"]+)"/g)].map((m) => decode(m[1]));
  return { title, desc, ogUrl, robots, canonical, jsonLd, visible, mainText, h1s, hrefs };
}

const pages = htmlFiles.map((f) => ({ url: urlOf(f), file: f, ...parse(readFileSync(f, "utf8")) }));
const byUrl = new Map(pages.map((p) => [p.url, p]));

// ─── redirects + sitemap ─────────────────────────────────────────────────────
const redirects = new Map();
const redirectsFile = join(ROOT, "_redirects");
if (existsSync(redirectsFile)) {
  for (const line of readFileSync(redirectsFile, "utf8").split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const [from, to, code] = t.split(/\s+/);
    redirects.set(from, { to, code });
  }
}
const sitemapXml = existsSync(join(ROOT, "sitemap.xml"))
  ? readFileSync(join(ROOT, "sitemap.xml"), "utf8")
  : "";
const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
  m[1].replace(SITE, ""),
);

// ─── checks ──────────────────────────────────────────────────────────────────
const errors = [];
const warns = [];
const err = (url, msg) => errors.push({ url, msg });
const warn = (url, msg) => warns.push({ url, msg });

const inbound = new Map(pages.map((p) => [p.url, 0]));
const seen = { title: new Map(), desc: new Map(), h1: new Map() };
const record = (kind, key, url) => {
  if (!key) return;
  const list = seen[kind].get(key) ?? [];
  list.push(url);
  seen[kind].set(key, list);
};

for (const p of pages) {
  if (!p.title) err(p.url, "missing <title>");
  else if (p.title.length > 70)
    warn(p.url, `title ${p.title.length} chars (may truncate): "${p.title}"`);
  if (!p.desc) err(p.url, "missing meta description");
  else if (p.desc.length < 70 || p.desc.length > 170)
    warn(p.url, `description ${p.desc.length} chars`);
  if (p.h1s.length !== 1) err(p.url, `${p.h1s.length} <h1> elements`);
  const expected = SITE + p.url;
  if (p.canonical !== expected) err(p.url, `canonical ${p.canonical} ≠ ${expected}`);
  if (p.ogUrl && p.ogUrl !== expected) err(p.url, `og:url ${p.ogUrl} ≠ ${expected}`);
  // noindex is allowed (intentional placeholders, e.g. /calculate/ until v5)
  // but such pages must stay out of the sitemap — checked below.
  p.noindex = /noindex/i.test(p.robots);
  for (const raw of p.jsonLd) {
    try {
      const data = JSON.parse(raw);
      const items = data["@graph"] ?? [data];
      for (const it of items) {
        if (it["@type"] === "BreadcrumbList") {
          const last = it.itemListElement?.at(-1)?.item;
          if (last !== expected) err(p.url, `BreadcrumbList last item ${last} ≠ page URL`);
        }
        if (it["@type"] === "FAQPage")
          warn(p.url, "FAQPage schema present (no rich result eligibility for this site)");
      }
    } catch (e) {
      err(p.url, `invalid JSON-LD: ${e.message}`);
    }
  }
  record("title", p.title, p.url);
  record("desc", p.desc, p.url);
  record("h1", p.h1s[0], p.url);

  for (const href of new Set(p.hrefs)) {
    if (/^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("#"))
      continue;
    const path = href.split("#")[0].split("?")[0];
    if (!path.startsWith("/")) continue;
    if (redirects.has(path)) {
      err(p.url, `links to redirected URL ${href} → ${redirects.get(path).to}`);
      continue;
    }
    const target = path.endsWith("/") ? path : null;
    if (!target) {
      // Static assets are fine; page links without a slash cost a redirect hop.
      if (existsSync(join(ROOT, path))) continue;
      if (byUrl.has(path + "/")) warn(p.url, `link without trailing slash (redirect hop): ${href}`);
      else err(p.url, `broken link: ${href}`);
      continue;
    }
    if (!byUrl.has(target)) err(p.url, `broken link: ${href}`);
    else if (target !== p.url) inbound.set(target, inbound.get(target) + 1);
  }

  const words = p.mainText.split(" ").filter(Boolean).length;
  p.words = words;
  if (p.url.startsWith("/smells/") && words < THIN_WORDS)
    warn(p.url, `thin: ${words} words in <main>`);
}

for (const [kind, map] of Object.entries(seen)) {
  for (const [key, urls] of map)
    if (urls.length > 1) err(urls.join(", "), `duplicate ${kind}: "${key}"`);
}
for (const [url, n] of inbound)
  if (url !== "/" && n === 0 && !byUrl.get(url).noindex)
    err(url, "orphan: no internal links point here");

// sitemap parity
for (const u of sitemapUrls) if (!byUrl.has(u)) err(u, "in sitemap but no prerendered page");
for (const p of pages) {
  const listed = sitemapUrls.includes(p.url);
  if (p.noindex && listed) err(p.url, "noindex page is listed in the sitemap");
  else if (!p.noindex && !listed) err(p.url, "page not in sitemap");
}
if (new Set(sitemapUrls).size !== sitemapUrls.length) err("sitemap.xml", "duplicate <loc> entries");

// near-duplicates (main content only, so shared chrome doesn't count)
const shingles = (text) => {
  const w = text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const s = new Set();
  for (let i = 0; i + 5 <= w.length; i++) s.add(w.slice(i, i + 5).join(" "));
  return s;
};
const sh = pages.map((p) => ({ url: p.url, s: shingles(p.mainText) }));
const similar = [];
for (let i = 0; i < sh.length; i++) {
  for (let j = i + 1; j < sh.length; j++) {
    const a = sh[i].s;
    const b = sh[j].s;
    if (!a.size || !b.size) continue;
    let inter = 0;
    for (const x of a) if (b.has(x)) inter++;
    const jac = inter / (a.size + b.size - inter);
    if (jac >= 0.15) similar.push({ a: sh[i].url, b: sh[j].url, jaccard: +jac.toFixed(3) });
    if (jac >= DUP_THRESHOLD)
      err(`${sh[i].url} ~ ${sh[j].url}`, `near-duplicate content (Jaccard ${jac.toFixed(2)})`);
  }
}
similar.sort((x, y) => y.jaccard - x.jaccard);

// ─── report ──────────────────────────────────────────────────────────────────
const summary = {
  pages: pages.length,
  sitemapUrls: sitemapUrls.length,
  errors: errors.length,
  warnings: warns.length,
};
if (JSON_OUT) {
  console.log(
    JSON.stringify(
      {
        summary,
        errors,
        warns,
        similar,
        pages: pages.map((p) => ({
          url: p.url,
          title: p.title,
          words: p.words,
          inbound: inbound.get(p.url),
        })),
      },
      null,
      2,
    ),
  );
} else {
  console.log(`SEO audit — ${pages.length} pages, ${sitemapUrls.length} sitemap URLs\n`);
  for (const p of [...pages].sort((a, b) => a.url.localeCompare(b.url))) {
    console.log(
      `  ${String(p.words).padStart(5)}w  in:${String(inbound.get(p.url)).padStart(2)}  ${p.url.padEnd(34)} ${p.noindex ? "[noindex] " : ""}${p.title}`,
    );
  }
  console.log("\nMost similar page pairs (5-word shingle Jaccard, main content):");
  for (const s of similar.slice(0, 8)) console.log(`  ${s.jaccard.toFixed(3)}  ${s.a}  ~  ${s.b}`);
  if (!similar.length) console.log("  none ≥ 0.15");
  console.log("");
  for (const e of errors) console.log(`✗ ${e.url} — ${e.msg}`);
  for (const w of warns) console.log(`↷ ${w.url} — ${w.msg}`);
  console.log(`\n${errors.length ? "✗" : "✓"} ${errors.length} errors, ${warns.length} warnings`);
}
process.exit(errors.length ? 1 : 0);
