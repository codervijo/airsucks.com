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

**Status:** v2.A–F done 2026-10-02 (not yet deployed); v2.H–J queued. v2 is scoped to *prove* the smell silo (build, deploy, measure, decide); scale-out moved to v3, monetization to v4. Pulled ahead of v1 by
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
| v2.F | ☑ | **Credibility cleanup (2026-10-02).** Removed the non-functional homepage email capture; replaced the disabled "Find local pros (coming soon)" button with per-result who-to-call guidance; removed the fake "Find it" part links + affiliate disclosure (no affiliate links exist); fixed the legacy wizard's mold threshold to EPA's ~10 sq ft; added a mobile header menu (native `<details>`); CI pinned to pnpm 10. |
| v2.G | ☑ | **Retire placeholder pages (2026-10-02).** `/learn/` and `/calculate/` are whole "Coming soon" pages, live and indexed. `/learn/` becomes the guides index, listing the real `/smells/` guides by family. `/calculate/` drops out of nav, footer and sitemap and gets `noindex` until v5 (Engineering) builds real calculators. |
| v2.H | ☐ | **Deploy + indexing push.** Deploy; verify `/diagnose/odor/` 301 and every sitemap URL live; resubmit the sitemap; Request Indexing for `/smells/` + the top-5 target pages; IndexNow ping; confirm `lamill.toml [content]` (updated 2026-10-02) is picked up by rankmill. |
| v2.I | ☐ | **Soak + measure (28 days after deploy).** Search Console per page: indexed state, impressions, positions, queries. Fill in the Result for the 2026-10-02 `growth.md` entry. |
| v2.J | ☐ | **Continue/stop review.** From v2.I data: start v3 (scale smells), hold, or resume v1 (vacuums). Closes v2. |

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
- **Lead-gen partner → DEFERRED to v4.** It's gated on traffic, so
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

  A sourcing pass happens in v3.B (cause pages need citations anyway).
- **Placeholder pages → `/learn/` repurposed, `/calculate/` noindexed
  (v2.G).** Found after v2.F. Both are "Coming soon" pages with no
  real content. `/learn/` can carry real content today (the smell
  guides). The calculators belong to the Engineering pillar (v5), so
  `/calculate/` is hidden rather than faked. Not redirected: it keeps
  its URL for v5.
- **Tier split (operator, 2026-10-02): v2 proves, v3 scales, v4
  monetizes.** v2 keeps only what's needed to ship Phase 1 and judge
  it (F–I). Cause pages, per-page chunks and the second ring of odor
  pages → v3. The who-to-call lead path → v4. The Engineering pillar
  (formerly v3) → v5.
- **Order: deploy before building more (v2.H → v2.I → v2.J before v3).**
  Phase-1 pages need indexing time, and their data should pick the
  next cluster. Building more first risks scaling the wrong family.

### v2 open items (operator)

- None blocking. The v4 partner choice is deliberately deferred.

### v2.F–v2.J phase detail

**v2.F — Credibility cleanup — done 2026-10-02.**
- Gates: `tsc` 0 errors, 21 tests passing, build of 22 prerendered
  pages, SEO audit 0/0.
- Playwright mobile pass: no overflow or console errors on 19 pages,
  the menu navigates and closes, and no dead buttons in the results.

**v2.G — Retire placeholder pages — done 2026-10-02.**
- `/learn/`: replace the "Coming soon" cards with a guides index built
  from the smell registry (one source of truth, so it never goes
  stale). Keep its URL, title and canonical. Retitle the meta to
  match.
- `/calculate/`: remove it from header, footer, mobile menu and
  homepage links; take it out of `PAGES`, which drops it from the
  sitemap; add `<meta name="robots" content="noindex">`. Keep the
  route for v5.
- Audit: it must not flag the noindexed page. The audit's sitemap
  parity check needs an allowlist for intentionally unlisted pages.
- Gates as for v2.F.
- Result:
  - `/learn/` is a 249-word guides index linking all 13 smell guides
    and 4 diagnostics. Retitled "Guides to Home Air & Smell Problems",
    with a BreadcrumbList. It isn't in the audit's top-similarity
    pairs, so it doesn't duplicate the `/smells/` hub.
  - `/calculate/` is `noindex, follow`, unlinked, and excluded from
    the sitemap (`sitemap: { exclude: true }`) but still prerendered.
  - Sitemap: 21 URLs.
  - Nav label "Learn" → "Guides".
  - The audit now allows intentional noindex pages, and errors if one
    lands in the sitemap.

**v2.H — Deploy + indexing push.** Deploying is the operator's call.
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
- **Results (2026-10-02):**
  - ✓ Deployed: `ddd0d80` live at 19:21 UTC via Cloudflare **Pages**
    (project `airsucks-com`, build `pnpm run build` → `dist/client`,
    every deploy since June succeeded). The portfolio tool misreported
    this as "Workers" / "IN_PROGRESS since 2026-06-17" (logged as a
    portfolio bug).
  - ✓ `/diagnose/odor/` and `/diagnose/odor` → 301 → `/diagnose/smell/`.
  - ✓ Sitemap is live with 21 URLs, and all 21 return 200 with a
    self-canonical and their JSON-LD. `/calculate/` is
    `noindex, follow`.
  - ✓ Sitemap resubmitted to GSC (`--force` refetch).
  - ✓ IndexNow pinged 15 new URLs.
  - ☐ **Operator:** Request Indexing (GSC UI only; there's no API) for
    the 6 URLs above.
  - ☑ **Soft 404s fixed (locally, 2026-10-02; not yet deployed).**
    - Cause: Pages treats a deploy with no top-level `404.html` as an
      SPA and answers every unknown URL with `index.html` + 200. That
      also served `/version.json` as HTML, and the version stamp
      wasn't writing `dist/client/version.json` anyway: its
      single-`outDir` design picked `dist/server` under Vite's
      multi-environment build.
    - Fix: `/not-found/` is prerendered (noindex, out of the sitemap),
      and `scripts/postbuild.mjs` copies it to `dist/client/404.html`
      with the app scripts stripped (no hydration mismatch; its links
      and menu work without JS). The version stamp writes to each
      environment's own `outDir`. `postbuild` fails the build if
      either file is missing.
    - Shared `NotFoundComponent` (`src/components/not-found.tsx`) now
      links to the smells hub and the diagnostics.
    - Verify after deploy: `curl -s -o /dev/null -w '%{http_code}'
      https://airsucks.com/smells/not-a-real-page/` returns 404, and
      `/version.json` parses as JSON.
  - ☐ Confirm rankmill reads the new `lamill.toml [content]`.

**v2.I — Soak + measure.** At deploy +28 days, use
`uv run portfolio project seo airsucks.com --refresh` plus GSC page
and query exports. Record in `growth.md`:
- indexed count for `/smells/*`
- impressions and position per page
- which odor family surfaces first
- the queries we don't have pages for (input to v3.C)

**v2.J — Continue/stop review.** Outcomes:
- (a) `/smells/` pages indexed and earning impressions → open v3;
- (b) indexed but no impressions → hold, and extend the soak one more
  28-day window;
- (c) not indexed → diagnose indexing before any new content.

The v1 Month-6 kill switch stays as written for v1.

---

## v3 — Smells at scale

**Status:** not started. Gated on v2.J outcome (a).

Grow the `/smells/` silo from 13 to roughly 60+ pages without thin or
near-duplicate content. Ordered by what Phase 1 taught.

### v3 phase table

| Phase | Status | Feature |
|---|---|---|
| v3.A | ☐ | **Kickoff / decisions lock.** Read v2.I data: which family earns impressions, which queries lack pages. Lock the v3.C shortlist and the cause-page URL scheme. |
| v3.B | ☐ | **Cause pages + per-page content chunks.** `/smells/causes/<cause>/` for the 44 library causes; shorter cause cards on odor pages that link to them; per-page code-split content; citations for the flagged claims (§ v2 decisions log). |
| v3.C | ☐ | **Second ring of odor pages**, chosen in v3.A from the shortlist below. |
| v3.D | ☐ | **Soak + measure.** Search Console at +28 days. Also decide whether v4 starts (needs commercial queries in GSC). |

### v3 phase detail

**v3.B — Cause pages + per-page chunks.**
- Route `/smells/causes/$cause/`, rendered from `CAUSES`.
- Each page gets: what it is, signs, safe checks, fixes, DIY limit,
  who to call, and "smells this causes" (back-links to every odor
  page that ranks it).
- Odor-page cause cards drop the full checks/fixes and link instead.
  That lowers sibling-page similarity, which was 0.26 at its highest
  in v2.
- Content split per page via a path-keyed dynamic import (today all
  smell content is one 32 KB gz chunk).
- Done when: audit clean, max similarity under 0.20, and each smell
  page loads only its own content.

**v3.C — Second ring.** Shortlist (operator Ahrefs data first, v2.I
queries second):
- sewer smell in bathroom
- musty smell in closet / clothes
- house smells after rain
- AC smells like vinegar
- fishy smell in house (electrical)
- dead animal smell in wall
- new carpet / paint chemical smell
- house smells like urine (no pets)

Intent-overlap check against existing pages before writing: merge
rather than duplicate. Each page is one data file in
`src/content/smells/pages/`, plus a registry line.

---

## v4 — "Who to call" lead path (monetization)

**Status:** not started. Gated on v3.D showing commercial queries in
GSC ("who to call…", "… near me", "… cost") on smell pages.

Signal so far: *who to call for musty smell in house* — 300/mo, KD 0,
CPC ~$2.50 (operator Ahrefs data). The who-to-call blocks already on
every smell page are the natural placement.

### v4 phase table

| Phase | Status | Feature |
|---|---|---|
| v4.A | ☐ | **Kickoff / decisions lock.** Partner or network choice (lead-gen network vs. direct local trades vs. affiliate), disclosure wording, which trades/pages qualify, and how to keep safety blocks free of monetization. |
| v4.B | ☐ | **Integration** on the who-to-call blocks of qualifying pages and the diagnostic result. |
| v4.C | ☐ | **Measure.** Clicks, leads, revenue per page; keep or remove. |

---

## v5 — Engineering pillar (speculative)

**Status:** not started. Gated on v3/v4 outcomes.

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
