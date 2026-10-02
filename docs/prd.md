# PRD — airsucks.com

Phase tracking for the airsucks.com diagnostic platform. Canonical
spec lives in [`CLAUDE.md`](CLAUDE.md); this file tracks what's
shipped, in flight, and queued.

Versioning convention (canonical statement:
`sites/portfolio/AI_AGENTS.md` § Versioning):
- **`vN`** — major capability tier (a whole pillar)
- **`vN.X`** — phase letter within a tier (A, B, C, …). Each phase is a
  shippable slice. **`vN.A` is always the planning / decisions-lock
  phase**; build work starts at `.B`.
- **Two levels only — never `vN.X.Y`.** Follow-up work inside a tier
  pushes later phase letters down to make room.

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

**Status:** paused — re-sequenced behind v2 (2026-10-02). The phase
table below predates two facts: the live site is TanStack Start, not
Astro, and keyword research put the larger opportunity in household
smells (see v2). The table is kept as written for history. Resume
here only after v2 ships, re-planning it against the live stack.
**Target (original):** ship in 6–8 weeks at ~6 hrs/week. Engine runs <500ms,
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

## v2 — Smells & odor diagnosis (Quality pillar, pulled forward)

**Status:** v2.A–E built and validated locally 2026-10-02 (not yet deployed); v2.F–L planned — see § v2 decisions log. Pulled ahead of v1 by
operator direction; the old "gated on v1 Month-6 thresholds" condition
is waived.

**Why now.** Operator keyword research (Ahrefs, 2026-10) found 9,000+
matching household-smell keywords, about 100K+ aggregate US monthly
volume before tighter filtering, and many at KD 0–3. Examples
(operator-supplied figures):

| Query | US vol | KD |
|---|---|---|
| musty smell in house | 2.4K | 3 |
| how to get rid of musty smell in house | 2.1K | 0 |
| musty smell in basement | 1.3K | 1 |
| why does my house smell musty | 1.2K | 0 |
| why does my room smell musty | 1.1K | 0 |
| house smells like rotten eggs | 1K | 1 |
| house smells musty but no mold | 800 | 0 |
| house smells like gas but no leak | 800 | 0 |
| how to get rid of musty smell | 800 | 0 |
| musty smell from AC | 450 | 0 |
| house smells like dog | 450 | 1 |
| house smells like cat pee but I can't find it | 450 | 0 |
| my house smells like sewage | 400 | 0 |
| who to call for musty smell in house (CPC ~$2.50) | 300 | 0 |

**Advantage over competitors:** structured diagnosis, not a blog. The
chain is symptom → location → circumstances → ranked likely causes →
safe checks → fix → when DIY stops → which trade to call.

### v2 phase table

| Phase | Status | Feature |
|---|---|---|
| v2.A | ☑ | **Kickoff / decisions lock (2026-10-02).** URL map, consolidation rules, data model, safety posture, structured-data policy, migration of `/diagnose/odor/`. See § v2.A decisions. |
| v2.B | ☑ | **Smell knowledge base + SEO primitives.** Typed, structured data under `src/content/smells/`: odor families, locations, a shared cause library (causes are entities, reused by pages and the engine), trades, urgency. Shared SEO helpers: canonical, BreadcrumbList, Article JSON-LD, head builder. The route manifest drives prerendering and the sitemap, so a new page is a data entry, not a hand-edited `PAGES` list. |
| v2.C | ☑ | **`/smells/` silo, Phase-1 pages.** Hub plus 12 problem pages (§ v2 URL inventory). One splat route renders every page from data. Each page has: quick answer, safety block where relevant, ranked likely causes, a distinguishing-signs table, a decision path, safe checks, fixes, when DIY stops, who to call, urgency, FAQ, and related pages. |
| v2.D | ☑ | **`/diagnose/smell/` interactive diagnostic.** Steps: odor family → where → when → observations → ranked causes, red-flag override, safe checks, next action, links into `/smells/` pages. Deterministic scoring over the same cause library (no ML, no LLM at runtime). |
| v2.E | ☑ | **Integration, migration, validation.** Header, footer and homepage entry points; `/diagnose/odor/` 301 → `/diagnose/smell/`; site-wide `trailingSlash: 'always'`; a post-build SEO audit script (`scripts/seo-audit.mjs`) checking titles, H1s, metas, canonicals, schema, broken links, sitemap parity and near-duplicate detection; unit tests for data integrity and the engine. |
| v2.F | ☐ | **Credibility cleanup (blocks deploy).** Remove the non-functional homepage email capture; replace the disabled "Find local pros (coming soon)" button with the cause's real trade guidance; add a mobile header menu with Smells; pin CI to pnpm 10 to match the lockfile. |
| v2.G | ☐ | **Deploy + indexing push.** Deploy; verify `/diagnose/odor/` 301 and the 22 sitemap URLs live; resubmit the sitemap; Request Indexing for `/smells/` + the top-5 target pages; IndexNow ping; confirm `lamill.toml [content]` (updated 2026-10-02) is picked up by rankmill. |
| v2.H | ☐ | **Soak + measure (28 days after deploy).** Search Console per page: indexed state, impressions, positions, queries. Fill in the Result for the 2026-10-02 `growth.md` entry. Decide the v2.J cluster from the data. |
| v2.I | ☐ | **Cause pages + per-page content chunks.** `/smells/causes/<cause>/` for the 44 library causes. Cause cards on odor pages get shorter and link to their cause page. Content data is code-split per page, since the silo passes ~60 pages here. |
| v2.J | ☐ | **Second ring of odor pages**, chosen by v2.H data from the shortlist in § v2.F–v2.L phase detail. Each page is one data file and must pass the audit's similarity check. |
| v2.K | ☐ | **v2 continue/stop review.** Compare against v2.H; recommend scaling, holding, or returning to v1. |
| v2.L | ☐ | **"Who to call" lead path** — gated: only after v2.K says continue *and* smell pages show commercial queries in GSC. Partner choice happens then. |

### v2.A decisions

- **Stack: keep TanStack Start + prerender.** The site is indexed
  (7/8 URLs, 2026-10-02); an Astro rebuild would reset that. The v1
  Astro spec in `docs/CLAUDE.md` is superseded on this point.
- **URL scheme:** `/smells/<odor>/` for odor pages and
  `/smells/<odor>/<context>/` for location/condition variants.
  Trailing slash everywhere (matches the served static files and the
  existing canonicals).
- **Consolidation (one page per search intent):**
  - `/smells/musty/` is the "musty smell in house" page. It absorbs
    *musty smell in house*, *how to get rid of musty smell (in house)*
    and *why does my house smell musty*. There is no separate
    `/smells/musty/house/`: identical intent would mean
    near-duplicates.
  - `/smells/musty/room/` covers *why does my room smell musty* and
    *bedroom smells musty*. The searcher is almost always talking
    about a bedroom, so a separate `/bedroom/` page would duplicate it.
  - Kept separate because the intent differs: `rotten-eggs` ("what is
    this smell?" — gas is ruled out first), `gas` ("I smell gas — what
    do I do right now?"), `gas-but-no-leak` ("the utility found
    nothing — now what?").
- **Hub:** `/smells/` exposes the taxonomy by odor family. Each family
  card shows its sub-pages; it is not a flat link dump.
- **Ranking language:** causes are ranked with qualitative likelihood
  labels (*most common / common / less common / rare*) based on
  trade guidance and context. No percentages and no fabricated
  statistics. The methodology is stated on-page.
- **Safety posture:** gas, burning/electrical, sewer gas and mold
  pages open with a visually separate "leave / call now" block before
  any troubleshooting. Carbon monoxide is odorless, and every
  safety-relevant page says so and points at CO alarms. Health
  content stays out (YMYL): we only say "see a clinician", never give
  diagnoses.
- **Structured data:** `BreadcrumbList` on every silo page; `Article`
  (publisher = Organization, no person author, real `dateModified`)
  on content pages; `WebApplication` on the diagnostic tool. **No
  `FAQPage` JSON-LD** on new pages: Google limited FAQ rich results to
  authoritative government/health sites in Aug 2023, so the markup
  adds nothing here. FAQs stay as visible content.
- **No fake expertise:** no invented authors, credentials or reviews.
  Where guidance comes from a public body (EPA mold guidance), cite it
  and link it.
- **Migration:** `/diagnose/odor/` (a thin category page) → 301 to
  `/diagnose/smell/` via `public/_redirects`. Every internal link
  to it is updated.

### v2 URL inventory (Phase 1)

`/smells/`, `/smells/musty/`, `/smells/musty/room/`,
`/smells/musty/basement/`, `/smells/musty/ac/`,
`/smells/musty/no-visible-mold/`, `/smells/rotten-eggs/`,
`/smells/sewage/`, `/smells/gas/`, `/smells/gas-but-no-leak/`,
`/smells/skunk/`, `/smells/cat-pee/`, `/smells/dog/`,
`/smells/burning-plastic/`, `/diagnose/smell/`.

### v2 decisions log (2026-10-02, operator-delegated)

The operator asked Claude to "make calls wherever you can". Each call
below can be overridden; overriding one moves the affected phase.

- **`lamill.toml [content]` → smells identity — DONE.** Changed to
  `primary_keyword = "musty smell in house"`, smell queries in
  `secondary_keywords`, and the ICP/urgency/penalty rewritten for
  smells. Vacuum terms are kept as secondary, since v1 pages still
  exist.
- **Homepage email capture → REMOVE (v2.F).** It posts nowhere and
  promises a PDF that doesn't exist. That's a false promise on a site
  that sells trust. Re-add only when a provider and the checklist
  exist (not scheduled).
- **"Find local pros (coming soon)" → REPLACE (v2.F).** Show the
  trade-to-call guidance the cause data already has. A disabled
  "coming soon" button is a dead end.
- **Lead-gen partner → DEFERRED to v2.L.** It's gated on traffic, so
  no partner is chosen until there is something to monetize.
- **Mobile nav → BUILD (v2.F).** On phones the header shows only
  "Start diagnosis", so the silo is invisible on the device most
  searchers use.
- **CI pnpm → pin 10 (v2.F).** The lockfile is pnpm-10 format; CI
  pins 9.
- **Content claims flagged for verification → KEEP, hedged.** These
  are phrased as "often" or "some", with no figures:
  - heat pumps and "dirty sock" smell
  - urine glowing under UV light
  - boxwood shrubs smelling like cat pee
  - the gas odorant reading as "skunky"

  A sourcing pass happens in v2.I (cause pages need citations anyway).
- **Order: deploy before building more (v2.G → v2.H before v2.I/J).**
  Phase-1 pages need indexing time, and their data should pick the
  next cluster. Building more first risks scaling the wrong family.

### v2 open items (operator)

- None blocking. The v2.L partner choice is deliberately deferred.

### v2.F–v2.L phase detail

**v2.F — Credibility cleanup (blocks deploy).** Pre-existing
non-functional UI ships to every visitor, so it goes before any
deploy:
- Homepage: delete `EmailCapture` (`src/routes/index.tsx`).
- `ProHelpCard` (`src/components/diagnostic-cards.tsx`): replace the
  disabled button with "Who to call" text drawn from the result.
- Mobile header: a disclosure menu (Diagnose · Smells · Calculate ·
  Learn · About), with no JS-only content and the links in the HTML.
- `.github/workflows/ci.yml`: `pnpm/action-setup` version 9 → 10.
- Gates: `pnpm test`, build, `pnpm seo:audit` at 0 errors, and the
  Playwright mobile pass.

**v2.G — Deploy + indexing push.** Deploying is the operator's call.
After deploy:
- `curl -sI https://airsucks.com/diagnose/odor/` returns 301 →
  `/diagnose/smell/`.
- Spot-check 3 `/smells/` pages' live HTML for title, canonical and
  JSON-LD.
- Resubmit the sitemap in Search Console.
- Request Indexing for `/smells/`, `/smells/musty/`,
  `/smells/rotten-eggs/`, `/smells/musty/basement/`,
  `/smells/gas-but-no-leak/` and `/smells/musty/no-visible-mold/`.
- Ping IndexNow.

**v2.H — Soak + measure.** At deploy +28 days, use
`uv run portfolio project seo airsucks.com --refresh` plus GSC page
and query exports. Record in `growth.md`:
- indexed count for `/smells/*`
- impressions and position per page
- which odor family surfaces first
- the queries we don't have pages for (input to v2.J)

**v2.I — Cause pages + per-page chunks.**
- Route `/smells/causes/$cause/`, rendered from `CAUSES`.
- Each page gets: what it is, signs, safe checks, fixes, DIY limit,
  who to call, and "smells this causes" (back-links to every odor
  page that ranks it).
- Odor-page cause cards drop the full checks/fixes and link instead,
  which lowers sibling-page similarity.
- Content split per page via a path-keyed dynamic import.
- Add citations for the claims flagged in the decisions log.
- Done when: audit clean, max similarity under 0.20, and each smell
  page loads only its own content chunk.

**v2.J — Second ring.** Shortlist (operator Ahrefs data first,
v2.H queries second):
- sewer smell in bathroom
- musty smell in closet / clothes
- house smells after rain
- AC smells like vinegar
- fishy smell in house (electrical)
- dead animal smell in wall
- new carpet / paint chemical smell
- house smells like urine (no pets)

Intent-overlap check against existing pages before writing: merge
rather than duplicate.

**v2.K — Continue/stop review.** Inputs: v2.H plus 4 more weeks.
Recommend scaling v2, holding, or resuming v1 (vacuum). The v1
Month-6 kill switch stays as written for v1.

**v2.L — Lead path.** Only if v2.K says continue *and* GSC shows
commercial queries ("who to call…", "… near me", "… cost"). Choose the
partner or network then, and add a PRD row for the integration.

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
