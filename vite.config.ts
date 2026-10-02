// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { execSync } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import type { Plugin } from "vite";
import { smellPaths } from "./src/content/smells/index";

// ─── v15.C version-stamp ─────────────────────────────────────────────────────
// Inline copy from ~/work/projects/builder/vite-version-stamp.ts (canonical).
// Keep in sync when the canonical file changes. CF Pages / Vercel / GitHub
// Actions deploy environments don't have the builder repo on disk, so the
// plugin source lives inside each site repo to survive `git clone` at deploy.
//
// Emits `dist/version.json` containing `{schema:1, commit, built_at}` at
// build close-out. Commit-SHA resolution: native git → CF_PAGES_COMMIT_SHA →
// VERCEL_GIT_COMMIT_SHA → GITHUB_SHA → literal "unknown".
//
// Paired with lamill CHECK_144 has-version-stamp (deploy/warn) which fetches
// `<domain>/version.json` on the live URL and validates shape.
function versionStamp(): Plugin {
  let outDir = "dist";
  return {
    name: "lamill-version-stamp",
    apply: "build",
    configResolved(c) {
      outDir = c.build?.outDir ?? "dist";
    },
    closeBundle() {
      // Vite 6+ builds each environment (client, ssr) separately, but
      // configResolved fires once, so `outDir` alone points at whichever
      // environment resolved last (here dist/server). That left
      // dist/client/version.json missing in production. Prefer the current
      // environment's own outDir.
      const envOutDir: string | undefined = (
        this as unknown as { environment?: { config?: { build?: { outDir?: string } } } }
      ).environment?.config?.build?.outDir;
      const dir = envOutDir ?? outDir;
      let commit = "unknown";
      try {
        commit = execSync("git rev-parse HEAD", {
          encoding: "utf-8",
          stdio: ["ignore", "pipe", "ignore"],
        }).trim();
      } catch {
        commit =
          process.env.CF_PAGES_COMMIT_SHA ||
          process.env.VERCEL_GIT_COMMIT_SHA ||
          process.env.GITHUB_SHA ||
          "unknown";
      }
      const builtAt = new Date().toISOString();
      const payload = JSON.stringify({ schema: 1, commit, built_at: builtAt }) + "\n";
      // Write to the build outDir (Astro serves dist/), AND to the client
      // subdir when it exists — TanStack Start / Vite-SSR (CF Workers) serve
      // dist/client/, so without this the live /version.json is unserved and
      // soft-200s the app HTML, breaking lamill's deploy-fresh (CHECK_144/145).
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, "version.json"), payload);
      const clientDir = join(dir, "client");
      if (existsSync(clientDir)) {
        writeFileSync(join(clientDir, "version.json"), payload);
      }
      // eslint-disable-next-line no-console
      console.log(`[lamill version-stamp] ${commit.slice(0, 12)} @ ${builtAt}`);
    },
  };
}
// ─── end version-stamp ───────────────────────────────────────────────────────

// ─── SEO: prerender every route to crawlable static HTML ─────────────────────
// The whole site is static (no per-request data), so we statically prerender all
// routes at build time. Each route already exports head:{} with a unique title +
// meta description; prerendering renders that head + the route body into a real
// HTML file (dist/client/<route>/index.html) instead of shipping a CSR shell.
// Cloudflare serves the static file directly; src/server.ts SSR remains the
// fallback for anything not prerendered. Without this, `vite build` emits no
// static HTML and only "/" gets server-rendered at runtime — the rest reach
// Googlebot as an empty shell (the site's #1 indexing blocker).
//
// `pages` is the canonical route list: it drives BOTH the prerender targets and
// the generated sitemap (TanStack's buildSitemap reads startConfig.pages — and
// any auto-discovered/crawled page gets appended to it too). We list every route
// explicitly and turn OFF the two implicit discovery paths:
//   - crawlLinks: false               — don't follow in-page <a> links
//   - autoStaticPathsDiscovery: false — don't derive paths from the route tree
// Both are on by default and, left on, they discovered a trailing-slash
// "/diagnose/" (from the diagnose layout route) alongside "/diagnose" and emitted
// BOTH into the sitemap — a duplicate-URL signal we don't want. Explicit list =
// deterministic sitemap. Tradeoff: a new route in src/routes must
// be added to PAGES below to be prerendered/listed (intentional — see
// docs/delegate-notes.md).
//
// Options are forwarded verbatim to tanstackStart() by the lovable wrapper
// (mergeConfig over its defaults) — this is the supported path; we are NOT adding
// the tanstackStart plugin manually.
const SITE_HOST = "https://airsucks.com";

// Paths carry a trailing slash to match the served 200 URLs (CF serves
// dist/client/<route>/index.html at /<route>/) and the per-route self-
// referential canonicals — so the sitemap lists the canonical URLs instead of
// non-slash ones that 307-redirect. Homepage stays "/".
const PAGES = [
  { path: "/", sitemap: { priority: 1.0, changefreq: "weekly" } },
  { path: "/diagnose/", sitemap: { priority: 0.9, changefreq: "weekly" } },
  { path: "/diagnose/vacuum/", sitemap: { priority: 0.8, changefreq: "weekly" } },
  { path: "/diagnose/smell/", sitemap: { priority: 0.9, changefreq: "weekly" } },
  { path: "/diagnose/airflow/", sitemap: { priority: 0.8, changefreq: "weekly" } },
  // v2.G: placeholder until v5 (Engineering) builds real calculators. Still
  // prerendered (keeps its URL, serves noindex HTML) but kept out of the sitemap.
  { path: "/calculate/", sitemap: { exclude: true } },
  // Prerendered only so scripts/postbuild.mjs can copy it to dist/client/404.html.
  // Without a top-level 404.html, Cloudflare Pages treats the site as an SPA
  // and answers every unknown URL with index.html + 200 (soft 404s).
  { path: "/not-found/", sitemap: { exclude: true } },
  { path: "/learn/", sitemap: { priority: 0.7, changefreq: "weekly" } },
  { path: "/about/", sitemap: { priority: 0.5, changefreq: "monthly" } },
  // v2 — /smells/ silo. The hub is listed here; every page in the smell
  // registry (src/content/smells/index.ts) is appended automatically, so a new
  // smell page is a data entry, not an edit to this list.
  { path: "/smells/", sitemap: { priority: 0.9, changefreq: "weekly" } },
  ...smellPaths().map((path) => ({
    path,
    sitemap: {
      priority: path.split("/").filter(Boolean).length > 2 ? 0.7 : 0.8,
      changefreq: "monthly" as const,
    },
  })),
];

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    pages: PAGES,
    prerender: {
      enabled: true,
      crawlLinks: false,
      autoStaticPathsDiscovery: false,
      failOnError: true,
    },
    sitemap: { enabled: true, host: SITE_HOST },
  },
  vite: {
    plugins: [versionStamp()],
  },
});
