# airsucks.com — Build Spec v1

## Project Context

airsucks.com is a diagnostic platform for home air problems. Three pillars, one brand, one engine.

- **Pillar A — Machines (v1, this spec):** vacuums first; later air purifiers, dehumidifiers, HVAC, fans
- **Pillar B — Quality (v2, ~months 6–12):** odors, mold, IAQ, ventilation
- **Pillar C — Engineering (v3, ~months 12–18):** CFM, duct sizing, return air, room balance

This document specs **v1 only: the vacuum diagnostic engine**. The architecture must be pillar-agnostic from day one so v2 and v3 reuse the same engine, data model, and SEO infrastructure without rewrites.

## Goals & Non-Goals

**Goals**
- Ship a working vacuum diagnostic engine + pSEO grid in 6–8 weeks at ~6 hrs/week
- Get indexed in Google Search Console and start accruing impressions on long-tail brand+model+symptom queries
- First Amazon Associates approval and at least one tracked affiliate conversion within 90 days of launch
- Architecture extensible to pillars B and C without rebuild

**Non-goals (do not build in v1)**
- User accounts / login (anonymous use only)
- UGC / community / submitted fixes (defer to v2)
- Mobile app
- Real-time anything
- Comparison tools ("which vacuum is best") — separate effort
- The other two pillars

## Brand & Voice

- **Domain:** airsucks.com
- **Tone:** irreverent, on-your-side, no-bullshit, technically accurate
- **Homepage H1:** `What's wrong with your air?`
- **Subhead:** `Diagnose vacuums, odors, and airflow problems in under 60 seconds.`
- **The tool is the hero.** Above the fold = H1 + subhead + pillar picker. No carousel, no featured articles, no stock photos. AirHelp's homepage pattern: tool starts immediately.

## Tech Stack

- **Framework:** Astro (SSG) with React islands for the diagnostic engine
- **Styling:** Tailwind CSS
- **Database:** Supabase (Postgres; auth and storage deferred to v2)
- **Hosting:** Vercel
- **Analytics:** Plausible (or PostHog if event tracking gets complex)
- **Email:** Resend or Buttondown (results delivery + newsletter)
- **SEO:** `@astrojs/sitemap`, JSON-LD structured data, Search Console from day one

### Critical SSG rule

All content pages must be statically generated or server-rendered. Never ship a client-side-rendered shell — Googlebot cannot index it. (Lesson from lamillrentals.) The diagnostic engine UI is a React island inside an SSG page; the page renders fully in HTML, the island hydrates on top. Verify by viewing page source — diagnostic content must be in the raw HTML.

## Architecture: Pillar-Agnostic Engine

The engine accepts a generic input schema and returns a generic output schema. v1 implements the `machine` pillar; v2 and v3 plug in their own corpora without engine changes.

```ts
type DiagnosticInput = {
  pillar: 'machine' | 'quality' | 'engineering';
  subject_type: string;        // 'vacuum' | 'room' | 'duct' | ...
  subject_slug: string;        // 'dyson-v8-animal'
  symptom_slug: string;        // 'no-suction'
  conditions: Record<string, string | number | boolean>;
                               // pillar-specific qualifiers from follow-up questions
}

type DiagnosticOutput = {
  causes: RankedCause[];       // ranked by probability
  urgency: 1 | 2 | 3 | 4 | 5;  // 5 = stop, call a pro/911
  fixes: Fix[];
  affiliate_parts: AffiliateLink[];
  call_a_pro?: ProRouting;
  repair_vs_replace?: RepairVsReplace;
  share_url: string;
}
```

The engine itself is a rules evaluator over a structured corpus. Not ML, not LLM-at-runtime. Deterministic, fast, debuggable, AI-Overview-resistant.

## Data Model (Supabase / Postgres)

```sql
-- Pillar 1 entities
create table brands (
  id uuid primary key,
  slug text unique not null,             -- 'dyson'
  name text not null,                    -- 'Dyson'
  pillar text not null default 'machine',
  subject_type text not null,            -- 'vacuum'
  parent_company text,
  customer_service_url text,
  created_at timestamptz default now()
);

create table models (
  id uuid primary key,
  brand_id uuid references brands(id),
  slug text not null,                    -- 'v8-animal'
  name text not null,                    -- 'V8 Animal'
  release_year int,
  msrp_usd numeric,
  category text,                         -- 'cordless-stick' | 'upright' | 'robot' | ...
  spec_json jsonb,                       -- model-specific specs
  unique (brand_id, slug)
);

create table symptoms (
  id uuid primary key,
  slug text unique not null,             -- 'no-suction'
  display_name text not null,            -- 'No / weak suction'
  subject_type text not null,            -- 'vacuum'
  question_tree_json jsonb not null      -- follow-up question definitions
);

create table causes (
  id uuid primary key,
  slug text unique not null,             -- 'clogged-filter'
  display_name text not null,
  description_md text not null,
  difficulty int not null,               -- 1 (easy) to 5 (call a pro)
  urgency int not null default 1
);

create table rules (
  id uuid primary key,
  symptom_id uuid references symptoms(id),
  cause_id uuid references causes(id),
  applies_when_json jsonb not null,      -- condition-matcher
  base_probability numeric not null,     -- 0.0 to 1.0; engine reweights
  per_brand_overrides_json jsonb         -- some brands have known issues
);

create table fixes (
  id uuid primary key,
  cause_id uuid references causes(id),
  slug text not null,
  display_name text not null,
  steps_md text not null,
  estimated_time_minutes int,
  video_url text,
  unique (cause_id, slug)
);

create table affiliate_parts (
  id uuid primary key,
  cause_id uuid references causes(id),
  brand_id uuid references brands(id),
  model_id uuid references models(id),   -- null = applies to all models of brand
  part_type text not null,               -- 'filter' | 'belt' | 'brush-roll' | 'battery'
  display_name text not null,
  affiliate_url text not null,           -- Amazon associate link
  price_usd numeric,
  is_oem boolean default false
);

-- Future: outcomes table for the moat-in-waiting
create table case_outcomes (
  id uuid primary key,
  brand_id uuid references brands(id),
  model_id uuid references models(id),
  symptom_id uuid references symptoms(id),
  cause_id uuid references causes(id),
  resolution text,                       -- 'fixed' | 'replaced' | 'gave-up'
  user_reported boolean default false,
  source_url text,
  reported_at timestamptz default now()
);
```

`question_tree_json` schema example for `no-suction`:

```json
{
  "questions": [
    {
      "id": "filter_checked",
      "text": "Have you checked or cleaned the filter recently?",
      "options": ["yes-clean", "yes-dirty", "no", "where-is-it"]
    },
    {
      "id": "canister_full",
      "text": "Is the canister or bag close to full?",
      "options": ["yes", "no", "unsure"]
    },
    {
      "id": "blockage_visible",
      "text": "Any visible blockage in the hose, wand, or brush roll?",
      "options": ["yes", "no", "checked-clear"]
    }
  ]
}
```

## Route Taxonomy

```
/                                              homepage + pillar picker
/diagnose                                      same as /, alternate entry
/diagnose/vacuum                               vacuum pillar landing
/diagnose/vacuum/[brand]                       brand hub (e.g. /diagnose/vacuum/dyson)
/diagnose/vacuum/[brand]/[model]               model page
/diagnose/vacuum/[brand]/[model]/[symptom]     pSEO money page — diagnostic pre-filled
/diagnose/vacuum/symptom/[symptom]             symptom-only entry (brand-agnostic)
/parts/[brand]/[model]                         affiliate parts page per model
/repair-vs-replace                             utility calculator (standalone)
/about                                         credibility / methodology
/contact
/sitemap.xml                                   auto-generated
```

**Reserved for v2/v3 (not built but routes namespaced):**

```
/diagnose/odor/...
/diagnose/airflow/...
/calculate/...
```

## v1 Scope: Brands, Models, Symptoms

**Brands (10):** Dyson, Shark, Bissell, Hoover, Eureka, Miele, iRobot (Roomba), Roborock, Black+Decker, Tineco

**Models per brand:** top 3 by sales volume → 30 model pages

**Symptoms (5):** no-suction, brush-won't-spin, won't-turn-on, smells-bad, overheating-or-cutting-out

**Diagnostic combinations:** 30 models × 5 symptoms = 150 — but rules are brand- and symptom-scoped with model overrides, so the actual rules count is ~80–120 entries.

**pSEO money pages at launch:** ~150 model+symptom combos. Most won't rank initially; the long tail compounds over 6–12 months.

## Page Templates

### Homepage (`/`)

```
[H1]     What's wrong with your air?
[Sub]    Diagnose vacuums, odors, and airflow problems in under 60 seconds.
[Tool]   [ Vacuum ] [ Odors ] [ Airflow ]   ← v1 only "Vacuum" is active;
                                              others say "Coming soon" with email capture
[Below]  How it works (3 steps, ~80 words)
[Below]  About / methodology (~120 words)
[Footer] Sitemap, contact, affiliate disclosure
```

### Symptom landing (`/diagnose/vacuum/symptom/no-suction`)

```
[H1]     My vacuum has no suction. Now what?
[Sub]    Pick your brand to get model-specific causes ranked by likelihood.
[Tool]   [Brand picker → Model picker → Diagnostic flow]
[Below]  General causes of suction loss (~300 words original content)
[Below]  When to repair vs replace (link to calculator)
```

### Model + symptom page (`/diagnose/vacuum/dyson/v8-animal/no-suction`) — pSEO money page

```
[H1]     Dyson V8 Animal: no suction — diagnostic
[Sub]    Most common causes ranked, plus parts you'll need.
[Tool]   [Diagnostic engine pre-filled with brand=dyson, model=v8-animal, symptom=no-suction]
[Below]  Ranked causes (output from engine, statically rendered for SEO)
[Below]  Parts table with affiliate links
[Below]  Repair vs replace verdict (engine output)
[Below]  ~300 words original written content specific to this model+symptom
[Below]  Related: other Dyson V8 issues, other no-suction symptoms across brands
```

**Critical:** the diagnostic engine output must be present in the static HTML for SEO. The React island only handles the interactive *follow-up* questions; the initial ranked-causes view is server-rendered.

## Diagnostic Engine Logic

Input: `brand`, `model`, `symptom`, `conditions` (from follow-up questions).

1. Look up all `rules` where `symptom_id` matches.
2. For each rule, evaluate `applies_when_json` against `conditions`. Rules that don't apply are dropped.
3. Compute probability for each remaining cause:
   - Start with `base_probability`
   - Apply `per_brand_overrides_json` if matching brand
   - Apply model-specific overrides if defined in `spec_json`
4. Rank causes by probability, descending.
5. For each top cause, gather:
   - Fixes (from `fixes` table)
   - Affiliate parts (from `affiliate_parts`, scoped brand+model where possible)
6. Compute `urgency` as max urgency across top 3 causes.
7. Compute `repair_vs_replace` if `model.msrp_usd` and aggregated repair cost both available.
8. Return `DiagnosticOutput`.

Probability math is intentionally simple. Resist the temptation to make it ML.

## Monetization Integration

- **Amazon Associates:** apply day 1. Affiliate links appear on every diagnostic output and parts page. Tag every link with the page slug as the tracking ID so per-page revenue is attributable.
- **Email capture:** "Send me my diagnostic report" button on results page. Single newsletter list, segmented by pillar interest via `interest_tags` column on Resend/Buttondown.
- **Repair vs replace replacement links:** when verdict is "replace," surface top-3 affiliate links to replacement vacuums in same price tier.
- **Defer to v2:** Wirecutter-style "best of" pages, comparison engines, manufacturer relationships.

## SEO Requirements

- Every page has a unique `<title>`, `<meta description>`, and canonical URL.
- JSON-LD structured data: `Article` schema on content pages, `FAQPage` on pages with Q&A, `HowTo` on fix instructions, `Product` on parts pages.
- `@astrojs/sitemap` auto-generates `sitemap.xml`.
- Search Console verified at launch; sitemap submitted; URL inspection used on first 5 money pages to force crawl.
- Internal linking: every model page links to every symptom for that model; every symptom page links to all brands; brand pages link to all models. Resulting in a tight internal-link graph.
- Page speed: Lighthouse > 90 on mobile for all pSEO pages. Astro defaults are fine if React island is properly client:visible loaded.
- `robots.txt` allows everything; no accidental disallow.

## v1 Milestones & Kill Switch

| Week | Milestone |
|------|-----------|
| 1 | Astro project scaffolded, Tailwind set up, Supabase schema applied, GSC verified |
| 2 | Diagnostic engine v0 working for one symptom (no-suction) across all 10 brands |
| 3 | All 5 symptoms wired; 30 model pages generated; affiliate links populated |
| 4 | Homepage + pillar picker + email capture; Amazon Associates approval submitted |
| 5 | Original content written for top 30 money pages (~300 words each = ~9k words) |
| 6 | Sitemap submitted; first 5 URLs force-crawled via GSC URL inspection |
| 8 | Internal link graph reviewed; structured data audit; soft launch |
| 12 | First indexed pages should appear in GSC; review CTR on those that do |
| 26 (Month 6) | **Kill switch:** if monthly organic sessions < 1,000 *and* zero affiliate conversions, pivot or park |

## What "Done" Looks Like for v1

- Visitor lands on `/`, picks "Vacuum," picks brand, picks model, picks symptom.
- Engine runs in <500ms, returns 3 ranked causes with fixes and parts.
- Visitor clicks an affiliate part link OR provides email for full report OR clicks "repair vs replace."
- Page renders in HTML for SEO; engine output cached and pre-rendered for the 150 most common combinations.
- Sitemap is in GSC, impressions chart is non-empty by month 2.

If those things work, v2 starts.

## Project

<1-2 sentence description — fill in what airsucks.com does and who the
user is. The stack uses the sites/* workspace shared infra: Vite or
Astro + pnpm + Cloudflare Pages, with Makefile forwarding to the
central builder at `~/work/projects/builder/`.>

## Commands

```bash
# Build / dev (forwards to the parent Makefile)
make deps           # install deps via the central builder
make dev            # local dev server
make build          # production build → dist/

# Deploy
git push            # Cloudflare Pages auto-builds on push to main
```

