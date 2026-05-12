# PRD — airsucks.com

Phase tracking for the airsucks.com diagnostic platform. Canonical
spec lives in [`CLAUDE.md`](CLAUDE.md); this file tracks what's
shipped, in flight, and queued.

Versioning convention (from `AI_AGENTS.md`):
- **`vN`** — major capability tier (a whole pillar)
- **`vN.X`** — phase letter within a tier (A, B, C, …)
- **`vN.X.Y`** — numeric sub-phase for follow-up work

---

## Problem

Indoor air problems — vacuum suction loss, musty smells, weak HVAC,
room imbalances — are poorly served by search. Results lean on
affiliate-spam roundups, vendor "guides" that double as product
pitches, and Reddit threads with no schema. Real diagnostic help
(flowcharts, rule-based reasoning, repair-vs-replace logic) exists
on a few niche forums but isn't packaged for search.

airsucks.com closes the gap with a **deterministic rules-based
diagnostic engine** — pillar-agnostic from day one, vacuums first.
Visitor picks pillar → subject → symptom → answers a few follow-ups
→ gets ranked causes, fixes, affiliate parts, and a repair-vs-replace
verdict in under 60 seconds.

## Users

**Primary:** homeowners and DIYers troubleshooting a specific
appliance problem right now — search-driven traffic on long-tail
queries like `dyson v8 no suction` or `shark navigator brush won't
spin`. Anonymous, no login.

**Secondary:** small-shop appliance-repair contractors using the
diagnostic as a quick reference.

**Not the target:** industrial HVAC engineers, pure product-buying
intent ("best vacuum 2026" — served better by Wirecutter/Amazon),
allergy/medical claims (YMYL — explicitly out of scope).

## Non-goals (v1)

Do not build:
- User accounts / login
- UGC / community / user-submitted fixes (defer to v2)
- Mobile app
- Real-time anything
- "Which vacuum is best" comparison tools
- Pillars B (Quality) and C (Engineering)

## Kill switch

**Month 6** (Week 26): if monthly organic sessions < 1,000 **and**
zero affiliate conversions, pivot or park. Don't keep grinding
without signal.

---

## v1 — Vacuum diagnostic engine

**Status:** in progress
**Target:** ship in 6–8 weeks at ~6 hrs/week. Engine runs <500ms,
returns 3 ranked causes with fixes + affiliate parts. 150 pSEO money
pages (10 brands × 3 models × 5 symptoms) indexed in GSC.

### Phase table

| Phase | Feature                                                           | Type      | Status |
|-------|-------------------------------------------------------------------|-----------|--------|
| v1.A  | Astro project scaffold + Tailwind + pnpm Makefile path            | Infra     | [ ]    |
| v1.A  | Supabase project + schema applied (brands…case_outcomes)          | Infra     | [ ]    |
| v1.A  | Search Console verified; sitemap stub submitted                   | SEO       | [ ]    |
| v1.A  | Vercel project wired up; preview deploys working                  | Infra     | [ ]    |
| v1.B  | `DiagnosticInput` / `DiagnosticOutput` types + engine skeleton    | Engine    | [ ]    |
| v1.B  | Rules evaluator: filter, rank, urgency, fix lookup                | Engine    | [ ]    |
| v1.B  | `no-suction` corpus: rules + causes + fixes across 10 brands      | Corpus    | [ ]    |
| v1.B  | React island for follow-up questions (SSG initial view)           | Engine    | [ ]    |
| v1.C  | Remaining 4 symptoms wired: brush-won't-spin, won't-turn-on,      | Corpus    | [ ]    |
|       | smells-bad, overheating-or-cutting-out                            |           |        |
| v1.C  | 30 model pages generated (10 brands × top 3 models each)          | pSEO      | [ ]    |
| v1.C  | `affiliate_parts` populated; Amazon links tagged per-slug         | Revenue   | [ ]    |
| v1.C  | 150 model+symptom money pages building from corpus                | pSEO      | [ ]    |
| v1.D  | Homepage: H1 + subhead + pillar picker (Vacuum live; Odors/       | UI        | [ ]    |
|       | Airflow "coming soon" w/ email capture)                           |           |        |
| v1.D  | Email capture + results-by-email flow (Resend or Buttondown)      | Revenue   | [ ]    |
| v1.D  | Amazon Associates application submitted                           | Revenue   | [ ]    |
| v1.D  | `/repair-vs-replace` standalone calculator                        | Tool      | [ ]    |
| v1.E  | Original content: ~300 words on top 30 money pages (~9k words)    | Content   | [ ]    |
| v1.E  | JSON-LD structured data: Article, FAQPage, HowTo, Product         | SEO       | [ ]    |
| v1.E  | Internal link graph: brand↔model↔symptom triangulation            | SEO       | [ ]    |
| v1.E  | `@astrojs/sitemap` final; force-crawl first 5 money pages         | SEO       | [ ]    |
| v1.E  | Lighthouse > 90 on mobile for pSEO pages                          | Perf      | [ ]    |
| v1.E  | Soft launch                                                       | Launch    | [ ]    |
| v1.F  | First indexed pages appear in GSC; review CTR                     | Measure   | [ ]    |
| v1.F  | First tracked affiliate conversion                                | Measure   | [ ]    |
| v1.F  | Month-6 kill-switch evaluation                                    | Decision  | [ ]    |

---

## Phase detail

### v1.A — Foundation (Week 1)

Goal: deploy pipeline + database + indexing infra exist before any
product work.

- [ ] Astro project scaffolded in repo (supersedes the Lovable Vite
      export — keep around as historical reference, but build v1 in
      Astro per spec)
- [ ] Tailwind configured
- [ ] Central-builder Makefile path verified (`make deps` / `make
      dev` / `make build`)
- [ ] Supabase project provisioned
- [ ] Schema applied: `brands`, `models`, `symptoms`, `causes`,
      `rules`, `fixes`, `affiliate_parts`, `case_outcomes` (see
      [`CLAUDE.md`](CLAUDE.md))
- [ ] `wrangler.jsonc` removed or marked superseded; Vercel project
      wired up
- [ ] Google Search Console: domain verified, sitemap stub submitted
- [ ] `robots.txt` allows everything; no accidental disallow

### v1.B — Engine MVP for one symptom (Week 2)

Goal: prove the engine works end-to-end on `no-suction` before
expanding the corpus.

- [ ] `DiagnosticInput` / `DiagnosticOutput` TypeScript types
- [ ] Engine: rules filter (`applies_when_json` matcher)
- [ ] Engine: probability computation with brand/model overrides
- [ ] Engine: cause ranking + urgency aggregation across top 3
- [ ] Corpus: `no-suction` symptom + question tree
- [ ] Corpus: ~8–12 causes (clogged-filter, full-canister, hose-
      blockage, brush-roll-tangle, battery-degraded, motor-failure,
      seal-leak, etc.)
- [ ] Corpus: per-brand override rules for the 10 v1 brands
- [ ] Corpus: fixes for each cause (steps_md, time, optional video)
- [ ] SSG: initial ranked-causes view server-rendered into static
      HTML (verify by viewing page source — must not be a CSR shell)
- [ ] React island: follow-up question UI hydrating on top

### v1.C — Full symptom coverage + pSEO grid (Week 3)

Goal: 150 money pages built, affiliate links wired, ready for content.

- [ ] Corpus: `brush-won't-spin` rules/causes/fixes
- [ ] Corpus: `won't-turn-on` rules/causes/fixes
- [ ] Corpus: `smells-bad` rules/causes/fixes
- [ ] Corpus: `overheating-or-cutting-out` rules/causes/fixes
- [ ] 10 brand hub pages (`/diagnose/vacuum/[brand]`)
- [ ] 30 model pages (`/diagnose/vacuum/[brand]/[model]`)
- [ ] 150 model+symptom money pages
      (`/diagnose/vacuum/[brand]/[model]/[symptom]`)
- [ ] 5 symptom-only entry pages
      (`/diagnose/vacuum/symptom/[symptom]`)
- [ ] `affiliate_parts` table populated: filters, belts, brush-rolls,
      batteries scoped to brand/model where possible
- [ ] Affiliate links tagged with page slug as tracking ID

### v1.D — Homepage + monetization plumbing (Week 4)

Goal: a visitor can land on `/`, find their problem, and click
through to a money-making outcome.

- [ ] Homepage: H1 `What's wrong with your air?`, subhead, pillar
      picker. Vacuum live; Odors/Airflow "Coming soon" with email
      capture
- [ ] Tool-first layout — no carousel, no featured articles, no
      stock photos (AirHelp pattern)
- [ ] "How it works" 3-step explainer (~80 words)
- [ ] About / methodology block (~120 words)
- [ ] Footer: sitemap, contact, affiliate disclosure
- [ ] "Send me my diagnostic report" email capture on results page
- [ ] Resend or Buttondown configured; single list; `interest_tags`
      column segmented by pillar
- [ ] Amazon Associates application submitted (Day 1 of week 4)
- [ ] `/repair-vs-replace` standalone calculator
- [ ] "Replace" verdict surfaces top-3 affiliate links to replacement
      vacuums in same price tier
- [ ] `/about` page (credibility + methodology)
- [ ] `/contact` page

### v1.E — Content + SEO ship (Weeks 5–8)

Goal: real content on the highest-opportunity pages, full structured
data, sitemap submitted, soft launch.

- [ ] ~300 words original content per page, top 30 money pages
      (~9k words total). Specific to that model+symptom — no generic
      filler.
- [ ] JSON-LD: `Article` on content pages
- [ ] JSON-LD: `FAQPage` on pages with Q&A blocks
- [ ] JSON-LD: `HowTo` on fix instruction blocks
- [ ] JSON-LD: `Product` on parts pages
- [ ] Per-page unique `<title>`, `<meta description>`, canonical URL
- [ ] Internal link graph audit: every model page links to every
      symptom for that model; every symptom page links to all brands;
      brand pages link to all models
- [ ] `@astrojs/sitemap` final output reviewed
- [ ] First 5 money pages force-crawled via GSC URL inspection
- [ ] Lighthouse mobile > 90 on all pSEO pages (verify React island
      uses `client:visible`)
- [ ] Soft launch (no PR push — just let it bake in GSC)

### v1.F — Indexing & evaluation (Weeks 9–26)

Goal: measure whether the strategy is working before investing more.

- [ ] Week 12: first indexed pages appear in GSC; review CTR on
      those that do; note which symptom/brand combos are surfacing
- [ ] Tracked affiliate conversions ≥ 1 by Day 90
- [ ] Month-6 kill-switch evaluation:
      - Organic sessions ≥ 1,000/mo? AND affiliate conversions > 0?
      - If yes → start v2 (Quality pillar)
      - If no → pivot or park

---

## v2 — Quality pillar (months 6–12, speculative)

**Status:** not started. Gated on v1 hitting the Month-6 thresholds.

Reuses the engine, data model, and SEO infrastructure. New corpus,
new subject types, new routes under `/diagnose/odor/...`.

Likely subjects: rooms (musty smell, basement odor), HVAC system as
a whole (mold in ducts), bathroom ventilation. Likely tools:
musty-smell diagnostic flowchart, IAQ symptom triage.

Adds (preliminary):
- `case_outcomes` table actually populated (moat-in-waiting)
- UGC / submitted-fixes flow (if v1 anonymous engagement justifies it)
- Newsletter expansion using v1's `interest_tags`

---

## v3 — Engineering pillar (months 12–18, speculative)

**Status:** not started. Gated on v2.

Calculators and sizing tools for CFM, duct sizing, return air, room
balance. Routes under `/diagnose/airflow/...` and `/calculate/...`.

---

## Cross-cutting (any phase)

Hard avoids — never ship these:
- Client-side-rendered content pages (Googlebot can't index them —
  lesson from lamillrentals)
- ML or LLM-at-runtime in the diagnostic engine (deterministic
  rules only — AI-Overview-resistant, debuggable, fast)
- AQI-style head-term listicles
- YMYL medical/health claims about indoor air
- Manufactured backlinks or fake author profiles
- Wirecutter-style "best of" comparison pages in v1 (defer to v2)
