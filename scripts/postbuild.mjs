#!/usr/bin/env node
// Post-build fixups for Cloudflare Pages (runs as part of `pnpm build`).
//
// 1. 404.html: Pages serves a top-level 404.html with a real 404 status for
//    unknown URLs. Without one it assumes an SPA and returns index.html + 200
//    for *everything* (soft 404s, and /version.json served as HTML). We
//    prerender /not-found/ and copy it into place.
// 2. version.json must be in the deployed directory (dist/client) for
//    lamill's deploy-freshness checks.
//
// Fails the build if either is missing, so a regression can't ship silently.
import { existsSync, readFileSync, writeFileSync } from "node:fs";

const CLIENT = new URL("../dist/client/", import.meta.url).pathname;
let ok = true;

const notFound = `${CLIENT}not-found/index.html`;
if (existsSync(notFound)) {
  // Ship 404.html as plain static HTML: strip the app's module scripts, so the
  // router never hydrates against an unknown URL (which renders different
  // markup → React hydration error #418). Links are plain <a>, and the mobile
  // menu is a native <details>, so nothing on the page needs JS.
  const html = readFileSync(notFound, "utf8")
    .replace(/<link rel="modulepreload"[^>]*>/g, "")
    .replace(/<script[^>]*type="module"[^>]*><\/script>/g, "")
    .replace(/<script class="\$tsr"[\s\S]*?<\/script>/g, "")
    .replace(/<script>\(function\(a,f\)[\s\S]*?<\/script>/g, "");
  if (/type="module"|\$_TSR/.test(html)) {
    console.error("✗ postbuild: failed to strip app scripts from 404.html");
    ok = false;
  }
  writeFileSync(`${CLIENT}404.html`, html);
  console.log("✓ postbuild: dist/client/404.html written from /not-found/ (static, no hydration)");
} else {
  console.error("✗ postbuild: dist/client/not-found/index.html missing — is /not-found/ in PAGES?");
  ok = false;
}

if (existsSync(`${CLIENT}version.json`)) {
  console.log("✓ postbuild: dist/client/version.json present");
} else {
  console.error("✗ postbuild: dist/client/version.json missing — check the version-stamp plugin");
  ok = false;
}

process.exit(ok ? 0 : 1);
