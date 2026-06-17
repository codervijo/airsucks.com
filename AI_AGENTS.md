# AI_AGENTS.md — airsucks.com

## Overview

airsucks.com is a **diagnostic platform for home air problems**. Three pillars, one brand, one engine. The tool is the hero: visitors pick a pillar → subject → symptom and get ranked causes, fixes, and affiliate parts in under 60 seconds.

- **Pillar A — Machines (v1, in progress):** vacuums first; later air purifiers, dehumidifiers, HVAC, fans
- **Pillar B — Quality (v2, ~months 6–12):** odors, mold, IAQ, ventilation
- **Pillar C — Engineering (v3, ~months 12–18):** CFM, duct sizing, return air, room balance

The architecture is pillar-agnostic from day one: the engine evaluates rules over a structured corpus and accepts a generic `DiagnosticInput` / `DiagnosticOutput` schema. v2 and v3 plug in new corpora without engine changes.

Canonical build spec: [`docs/CLAUDE.md`](docs/CLAUDE.md). Read it before scaffolding pages, data, or agents.

---

## Brand & voice

- **Domain:** airsucks.com
- **Tone:** irreverent, on-your-side, no-bullshit, technically accurate
- **Homepage H1:** "What's wrong with your air?"
- **Subhead:** "Diagnose vacuums, odors, and airflow problems in under 60 seconds."
- **Homepage rule:** no carousel, no featured articles, no stock photos. Pillar picker above the fold. AirHelp-style tool-first pattern.

---

## Stack

- **Framework:** Astro (SSG) with React islands for interactive parts of the diagnostic engine
- **Styling:** Tailwind CSS
- **Database:** Supabase (Postgres). Auth and storage deferred to v2.
- **Hosting:** Vercel
- **Analytics:** Plausible (or PostHog if event tracking gets complex)
- **Email:** Resend or Buttondown — results delivery + newsletter
- **SEO:** `@astrojs/sitemap`, JSON-LD structured data, Search Console from day one
- **Package manager:** pnpm (portfolio-wide convention). Use the central builder via the project Makefile (`make deps` / `make dev` / `make build`).

> The earlier WordPress + Cloudflare Workers plan is **superseded**. The current implementation is Astro SSG on Vercel + Supabase. The Lovable-derived Vite/React export still lives in the repo as historical scaffolding; the v1 build will be done in Astro per the spec.

### Critical SSG rule

All content pages must be statically generated or server-rendered. **Never ship a client-side-rendered shell** — Googlebot cannot index it (lesson from lamillrentals). The diagnostic engine's initial ranked-causes view must be in the static HTML; the React island only hydrates for follow-up questions. Verify by viewing page source.

---

## Site history & SEO state (as of 2026-06-13)

Read this before any SEO/indexing work — it explains why the site gets 0 impressions.

- **Domain is aged + long-parked, not new.** Wayback shows airsucks.com was a **parked domain for ~15 years** (domain-name-as-title parking page 2013; empty/JS-parking 2014–15; 302 parking-redirects 2018–2025) — never a real site. Relaunched with real content **~2026-05-11**. **No prior spam/penalty** — clean but *cold*: Google's decade-long prior is "low-value parking → ignore," so fresh content re-indexes slowly and skeptically.
- **⚠ Stack drift — the deployed site VIOLATES the Critical SSG rule above.** The spec says Astro SSG, but what's actually deployed is the **TanStack Start (Vite/React)** export. Result (verified by `curl`/view-source): only `/` server-renders; the sub-routes `/diagnose`, `/diagnose/airflow|vacuum|odor`, `/learn`, `/calculate`, `/about` return an **empty CSR shell — no `<title>`, no body content**. This is precisely the "Googlebot can't index a CSR shell" failure the rule warns about. **Resolve before any content work:** either finish the planned Astro rebuild, or make the current TanStack app fully SSR every route (a `lamill project delegate` SSR task is in flight).
- **Current GSC state (2026-06-12 snapshot):** homepage = **"Crawled – currently not indexed"** (Google saw it, declined — cold-domain + thin); only 1 URL inspected. **Sitemap lists only the homepage** (`/sitemap.xml` = 1 `<loc>`) — the real routes aren't discoverable. **`[content]` in `lamill.toml` is empty** — no SEO identity, so rankmill can't audit-with-intent or `generate` a content plan yet.
- **Plan to earn indexing** (counters the parked-prior): (1) SSR all routes + per-route title/meta; (2) complete sitemap from the route tree + submit in GSC; (3) Request Indexing + IndexNow (enabled); (4) configure `[content]`; (5) content depth + a few inbound links + weeks of consistency. Full diagnosis + review dates: `docs/growth.md` (2026-06-13 entry).

---

## Working memory — Claude instructions

- The canonical spec is `docs/CLAUDE.md`. When a strategy, schema, or scope decision is accepted by the user, update `docs/CLAUDE.md` first and this file second (only if pillar/agent/stack-level info changed).
- Phase tracking lives in `docs/prd.md`. Update it when phases ship or scope changes.
- If a decision contradicts something in this file (or in `docs/CLAUDE.md`), update — don't leave stale info in place.

---

## v1 scope (locked)

- **Brands (10):** Dyson, Shark, Bissell, Hoover, Eureka, Miele, iRobot (Roomba), Roborock, Black+Decker, Tineco
- **Models per brand:** top 3 by sales volume → 30 model pages
- **Symptoms (5):** no-suction, brush-won't-spin, won't-turn-on, smells-bad, overheating-or-cutting-out
- **pSEO money pages at launch:** ~150 model+symptom combos (30 × 5)
- **Rule corpus:** ~80–120 rules (brand- and symptom-scoped, with model overrides)

Route taxonomy, page templates, engine logic, and the full Supabase schema are in `docs/CLAUDE.md`. Don't duplicate them here.

### Non-goals for v1 (do not build)

- User accounts / login (anonymous use only)
- UGC / community / submitted fixes (defer to v2)
- Mobile app
- Real-time anything
- "Which vacuum is best" comparison tools
- Pillars B and C

### Kill switch

Month 6: if monthly organic sessions < 1,000 **and** zero affiliate conversions, pivot or park.

---

## Agent roles

Five roles, scoped to the v1 vacuum diagnostic build. Adapt over time as v2/v3 land.

1. **SEO & Content Strategist**
   - Owns the pSEO grid (150 money pages), internal-link graph, JSON-LD plan (`Article`, `FAQPage`, `HowTo`, `Product`), and GSC ops (verification, sitemap, URL inspection on first 5 money pages).
   - Writes ~300 words of original content per top-30 money page (~9k words total for week-5 milestone).
   - Hard avoids: AQI-style head-term listicles; YMYL medical/health claims about indoor air.

2. **Diagnostic Engine Developer**
   - Builds the rules evaluator (deterministic, not ML, not LLM-at-runtime).
   - Implements the React island for follow-up questions on top of the server-rendered initial ranked-causes view.
   - Targets <500ms engine runtime; pre-renders output for the 150 most common combinations.

3. **Data & Corpus Curator**
   - Populates `brands`, `models`, `symptoms`, `causes`, `rules`, `fixes`, `affiliate_parts` in Supabase.
   - Maintains `question_tree_json` per symptom.
   - Sources affiliate links (Amazon Associates), tagging each with page slug for per-page revenue attribution.

4. **Monetization Strategist**
   - Day-1 Amazon Associates application; first tracked conversion within 90 days of launch.
   - Email capture on results page (Resend/Buttondown), single list segmented by `interest_tags` per pillar.
   - "Repair vs replace" replacement-vacuum affiliate placements when verdict = replace.
   - Defer to v2: Wirecutter-style "best of" pages, comparison engines, manufacturer deals.

5. **Domain Portfolio Manager** (shared across the portfolio — lives in `hybridautopart.com/AI_AGENTS.md`)
   - Cross-site conventions, hard avoids, versioning.

---

## Building

```bash
cd sites/airsucks.com
make deps         # → pnpm install via the central builder
make dev          # local dev server
make build        # production build → dist/
```

`pnpm dev` / `pnpm build` work too, but the Makefile path is the conformance-tracked one.

## Deployment

- **Platform:** Vercel (per spec). The repo still contains a `wrangler.jsonc` from the Lovable scaffold — superseded; do not deploy to Cloudflare Workers.
- **Live URL:** https://airsucks.com/ (after Vercel project is wired up).
- **Last deployed commit:** not yet deployed.

---

## Owner profile

- **Name:** Vik Thomas (pen name) — Lamill Web Systems / lamill.io
- **Background:** Embedded systems / motor control engineer
- **Web skills:** WordPress (learning), React/Vite (capable), HTML/CSS (basic), Astro (learning as part of this build)
- **Time available:** ~6 hrs/week for the v1 build (6–8 week target)
- **Dev workflow:** Local dev → build → push (Vercel auto-deploys)

See `hybridautopart.com/AI_AGENTS.md` for the full portfolio context — airsucks.com is the "Build" entry under the suction/vacuum/airflow niche.

---

## Out of scope / don't touch

- Mocked-up "AI-generated diagnostics" at runtime — the engine is a deterministic rules evaluator, period
- Client-side-rendered content pages (Googlebot can't index them)
- YMYL health/medical claims about indoor air
- Manufactured backlinks or fake author profiles
- Anything contradicting the owner's portfolio-wide hard avoids documented in `hybridautopart.com/AI_AGENTS.md`

---

## Versioning

Two-level convention (see `sites/portfolio/AI_AGENTS.md` for the canonical statement):

- **`vN`** — major capability tier (SemVer-MAJOR semantics). v1 = vacuum diagnostic engine. v2 = Quality pillar. v3 = Engineering pillar.
- **`vN.X`** — phase letter within a tier (A, B, C, …) for internal slicing.
- **`vN.X.Y`** — numeric sub-phase for follow-up work after `vN.X` shipped.

Track current phase + completed work in `docs/prd.md`.

## Building info

This project's `Makefile` forwards every target to `../Makefile`
(the sites/ workspace) which delegates per-stack work to the central
builder at `~/work/projects/builder/`. Common: `make deps`, `make dev`,
`make build`. Don't duplicate build logic per-site.

## Deployment info

Cloudflare Pages. Push to `main` triggers an auto-build via the
`wrangler.jsonc` config; build output is `dist/`. Custom domain
configured via the CF Pages dashboard.

## Summary

*one paragraph: what this site is, what it does*

(to be filled in)

## Audience

*one sentence: who this is for (broad demographic)*

(to be filled in)

## ICP

*the specific ideal customer — demographics, pain points, what they use today. More detail than Audience: Audience is the broad demo ("homeowners with EV chargers"), ICP is the specific targetable subset ("Tesla owners in CA who installed in last 90d, paid $2k+")*

(to be filled in)

## Goals

*1-2 sentences: primary business / product goal*

(to be filled in)

## Tech stack

*frontend stack (Astro / Vite / etc.) + key deps*

(to be filled in by bootstrap template renderer)

## Content strategy

*what content this site needs — page types, initial topics, format mix (long-form vs reference vs tool)*

(to be filled in)

## Conventions

*pnpm-only, Vite ≥6, deferred-decisions log, project-specific quirks*

(to be filled in by bootstrap template renderer)
