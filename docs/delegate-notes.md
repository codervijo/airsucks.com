# Delegate notes — airsucks.com

> Append-only scratchpad for `lamill project delegate` runs. Each entry records
> what worked and the dead-ends so the next delegate doesn't re-discover them.
> Newest entry at the bottom.

## 2026-06-14 — Prerender every route to crawlable HTML + complete sitemap (SSR/SEO blocker)

**Goal:** every route emits crawlable HTML (real `<title>`, meta description,
visible body text) instead of a CSR shell; `/sitemap.xml` lists all 8 routes.

### What worked (the fix)

The stack is **TanStack Start (Vite/React)**, wrapped by
`@lovable.dev/vite-tanstack-config`. TanStack Start has **built-in prerendering
AND sitemap generation** — no nitro, no extra plugin, no manual prerender script
needed. The whole site is static (no per-request data), so we statically
prerender all routes at build time.

Single change in `vite.config.ts`: pass options through the wrapper's
`tanstackStart` key (the wrapper does `mergeConfig(defaults, options.tanstackStart)`
and forwards to `tanstackStart()` — this is the supported path; you are NOT
adding the plugin manually, so the "do NOT add tanstackStart manually" warning
does not apply):

```ts
tanstackStart: {
  server: { entry: "server" },
  pages: PAGES,                 // explicit list of all 8 routes; drives prerender + sitemap
  prerender: {
    enabled: true,
    crawlLinks: false,              // see dead-end #2
    autoStaticPathsDiscovery: false,// see dead-end #2
    failOnError: true,              // fail the build if any route errors while prerendering
  },
  sitemap: { enabled: true, host: "https://airsucks.com" },
}
```

`PAGES` is `[{ path, sitemap: { priority, changefreq } }]` for each of:
`/ , /diagnose, /diagnose/vacuum, /diagnose/odor, /diagnose/airflow,
/calculate, /learn, /about`.

Build output (`vite build` / `pnpm build`): a static
`dist/client/<route>/index.html` per route (each with its route's real head +
body — the routes already export `head:{}` with titles/meta, so no source edits
were needed) plus a generated `dist/client/sitemap.xml`. Cloudflare serves the
static file directly; `src/server.ts` SSR stays as the fallback. Build log prints
`[prerender] Prerendered 8 pages:` and `[sitemap] Writing sitemap XML`.

Also removed the hand-written stub `public/sitemap.xml` (1 `<loc>`) — the build
now generates the real one. (`dist/` is gitignored; the prerender output is
regenerated at deploy, so the committed change is just `vite.config.ts` +
the stub removal.)

### Where the API actually lives (so you don't grep blindly)

- Option schema: `node_modules/@tanstack/start-plugin-core/dist/esm/schema.d.ts`
  — top-level `prerender`, `pages[]`, `sitemap{ enabled, host, outputPath }`,
  plus `spa{}`.
- Prerender runs from the **vite plugin's `buildApp` post hook**
  (`.../dist/esm/vite/plugins.js` → `post-server-build.js` → `prerenderWithVite`):
  it spins up a `vite preview` of the built **server** environment and fetches
  each page, writing HTML to the client outDir. **No nitro needed** — the lovable
  wrapper's `nitro` auto-off (non-Lovable env) does NOT disable prerender.
- Sitemap built by `.../dist/esm/build-sitemap.js` from `startConfig.pages`
  (NOT from crawl results — so the explicit `pages` list is what controls
  sitemap contents).

### Dead-ends / gotchas

1. **`npm` is not on the host** (host node is v12, too old for Vite 7). Builds run
   in the **`sites1` Docker image** (volta node@22 + pnpm). Run non-interactively:
   ```bash
   docker run --rm -v "$PWD":/usr/src/app -w /usr/src/app sites1 bash -lc \
     'export VOLTA_HOME=/root/.volta; export PATH=$VOLTA_HOME/bin:$PATH; pnpm build'
   ```
   Docker runs as root → `dist/` ends up root-owned; `chown -R $(id -u):$(id -g) dist`
   afterward or the host `rm -rf dist` fails with permission errors.

2. **`crawlLinks` AND `autoStaticPathsDiscovery` both default to `true`** and BOTH
   inject a trailing-slash `/diagnose/` (from the `diagnose` layout route) into the
   sitemap alongside `/diagnose` → 9 locs with a duplicate URL. Turning off
   `crawlLinks` alone is NOT enough — `autoStaticPathsDiscovery` (in
   `.../dist/esm/prerender.js`, `?? true`) still does it. Set **both `false`** and
   list every route explicitly for a deterministic, exactly-8-entry sitemap.
   Tradeoff: a new route in `src/routes` must be added to `PAGES` to be
   prerendered/listed.

3. **`pnpm build` / `pnpm install` fails with `ERR_PNPM_IGNORED_BUILDS`** (pnpm 11
   gates build scripts for `esbuild`, `sharp`, `workerd`). This blocks
   `make run` / `make build` / deploy, not just prerender. Fix: add to
   `package.json`:
   ```json
   "pnpm": { "onlyBuiltDependencies": ["esbuild", "sharp", "workerd"] }
   ```
   (Bypass for a one-off build only: `node node_modules/vite/bin/vite.js build`,
   which skips the install gate — but the real fix is the package.json field.)

4. **Generated files regenerate on every build.** `src/routeTree.gen.ts` gets
   rewritten by the build (the newer installed plugin adds a `declare module
   '@tanstack/react-start'` Register block). Per task constraint, restore it after
   building: `git checkout -- src/routeTree.gen.ts`.

### Verification (all passed)

- `pnpm build` exits 0; `[prerender] Prerendered 8 pages`.
- Each of the 8 routes' raw built HTML has a unique non-empty `<title>`, a
  `<meta name="description">`, and 145–420 words of visible body text.
- `dist/client/sitemap.xml` lists exactly the 8 routes (no missing, no extras,
  no trailing-slash dupes).
