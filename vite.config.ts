// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { execSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import type { Plugin } from "vite";

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
      mkdirSync(outDir, { recursive: true });
      writeFileSync(
        join(outDir, "version.json"),
        JSON.stringify({ schema: 1, commit, built_at: builtAt }) + "\n",
      );
      // eslint-disable-next-line no-console
      console.log(
        `[lamill version-stamp] ${commit.slice(0, 12)} @ ${builtAt}`,
      );
    },
  };
}
// ─── end version-stamp ───────────────────────────────────────────────────────

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [versionStamp()],
  },
});
