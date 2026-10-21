# Growth Log — airsucks.com

> **What this file is for:** an honest, append-only log of growth experiments
> on this site — what was tried, what was measured, what happened. The data
> source is GSC; this file narrates *why*. Future-you (or future-Claude)
> reads this when deciding what to try next, both on this site and on
> related sister sites.

## How to use this (workflow — re-read this when you forget)

**Add an entry whenever you do something growth-relevant.** That includes:
shipping new content, structural SEO changes (sitemap, schema, redirects,
internal linking), tech changes that affect crawl/indexing, marketing
pushes, backlink campaigns. *Not* every code commit — just things you'd
want to point at when GSC numbers move (or fail to).

**Each entry is a hypothesis you can be wrong about.** Commit to a
measurable KPI and an observation window before acting — otherwise "did
this work?" is just a feeling.

### Lifecycle of one entry

1. **Day of action** — append a new dated H2 with `Status: active`, the
   hypothesis, the KPI you'll watch, current baseline numbers, what you
   did, and the date to review (default: today + 28 days, matching GSC's
   reporting window).
2. **Review day** — pull current GSC numbers, compute delta vs baseline.
   Fill in **Result** and **Learning**. Set **Status** to `shipped` (worked,
   keep going), `failed` (didn't pay off, abandon), or extend the review
   another window if results are ambiguous.
3. **Never rewrite older entries.** Wrong hypotheses are the most valuable
   data — they tell you what NOT to repeat on the next site. Append, don't
   edit.

### Where to get the numbers

```bash
cd ~/work/projects/sites/portfolio && uv run portfolio project seo airsucks.com
```

Prints the GSC 28d row (impressions / clicks / CTR / position) plus
URL Inspection coverage for the sitemap URLs. Add `--refresh` to bypass
the 24h cache. Or pull from
https://search.google.com/search-console directly.

### Format

```
## YYYY-MM-DD — <one-line hypothesis or action>
- **Status:** active | testing | shipped | failed | abandoned
- **KPI:** <what GSC metric / query / page>
- **Baseline:** <numbers at start>
- **Action:** <what was done; 1-2 lines>
- **Result:** <numbers after window; "TBD — review YYYY-MM-DD" until then>
- **Learning:** <why it worked / didn't; what to try next; "TBD" until reviewed>
```

---

## 2026-05-09 — site scaffolded; growth log started
- **Status:** active
- **KPI:** any GSC traffic — clicks, impressions, indexed-page count
- **Baseline:** 0 clicks / 0 impressions (just deployed)
- **Action:** project scaffolded via `portfolio new bootstrap`; first deploy
  pending. After deploy: verify in GSC as `sc-domain:airsucks.com` and submit
  the sitemap.
- **Result:** TBD — review 2026-06-06
- **Learning:** TBD

## 2026-06-13 — Domain was parked ~15 years before the May relaunch — cold-start indexing drag
- **Status:** shipped
- **KPI:** indexed-page count + impressions (GSC `coverage_state`)
- **Baseline:** 0 impressions; GSC homepage = "Crawled – currently not indexed" (2026-06-12 snapshot); only 1 URL inspected.
- **Action:** Diagnosed *why* Google isn't indexing. Wayback shows airsucks.com was a **parked domain for its entire history** — domain-name-as-title parking page (2013), empty/JS-parking (2014–15), 302 parking-redirects (2018–2025); never a real site. Relaunched with real content ~2026-05-11. **No sign of prior spam/penalty** — clean but *cold*: Google's decade-long prior is "low-value parking → ignore," so fresh content reads as "Crawled – not indexed" until it's convinced the domain changed. Plan to counter the stale prior: (1) SSR all routes + per-route title/meta [delegate pending]; (2) complete sitemap from the route tree + submit in GSC; (3) Request Indexing + IndexNow (enabled); (4) content depth + a few inbound links + weeks of consistency.
- **Result:** Reviewed 2026-10-02 (late; due 2026-07-11). Indexing recovered: **7/8 sitemap URLs `submitted_indexed`** (`/`, `/diagnose/`, `/diagnose/odor/`, `/diagnose/airflow/`, `/calculate/`, `/learn/`, `/about/`). Holdout: `/diagnose/vacuum/` = "Discovered – currently not indexed". `/diagnose` (no slash) = "Page with redirect" — benign, the trailing-slash canonical is indexed. Sitemap 8 URLs, submitted, fetched 2026-09-26. GSC 28d: **11 impressions, 0 clicks, avg position 29.8**.
- **Learning:** Yes — a long-parked domain with no penalty re-indexes once routes serve real prerendered HTML + a complete sitemap + re-crawl signals (steps 1–3). The gap is now content, not indexability: 8 thin pages earn near-zero impressions. Ironically the one unindexed page is `/diagnose/vacuum/` — the v1 pillar — so it needs internal links from `/` and real depth (the v1 engine/pSEO grid). Reusable for parked/aftermarket domains in the fleet: fix rendering + sitemap first, expect indexing within weeks, then traffic is a content problem.

## 2026-10-02 — v2: /smells/ silo (13 pages) + /diagnose/smell/ to turn indexing into impressions
- **Status:** active
- **KPI:** GSC impressions + indexed count for `/smells/*` and `/diagnose/smell/`; first clicks on target queries (*musty smell in house*, *house smells like rotten eggs*, *house smells musty but no mold*, *house smells like gas but no leak*, *musty smell in basement*).
- **Baseline (2026-10-02, GSC 28d):** site-wide 11 impressions, 0 clicks, avg position 29.8; 7/8 sitemap URLs indexed; 0 `/smells/` URLs (pages didn't exist).
- **Action:** Added a structured smell knowledge base (44-cause library, 13 problem pages + hub, deterministic smell diagnostic), BreadcrumbList + Article JSON-LD, sitemap 8 → 22 URLs, `/diagnose/odor/` 301 → `/diagnose/smell/`. Targets come from operator Ahrefs research (9K+ keywords, many KD 0–3; see `docs/prd.md` § v2). Deployed 2026-10-02 19:21 UTC (`ddd0d80`); sitemap force-resubmitted to GSC, IndexNow pinged 15 URLs; manual Request Indexing on the hub + top 5 pending.
- **Result:** TBD — review 2026-10-30 (28 days after deploy; shift the date if deploy slips)
- **Learning:** TBD — does a cold, recently re-indexed domain rank low-KD smell queries on structured diagnostic content within one GSC window? Which odor family earns impressions first, to steer v3.C?

## 2026-10-20 — v2 mid-soak snapshot (deploy +18d): smell pages get impressions, but on deep pages
- **Status:** active (interim reading of the 2026-10-02 entry; that entry's Result is still due 2026-10-30)
- **KPI:** same as 2026-10-02: impressions, indexed count, and query/page mix for `/smells/*`.
- **Baseline:** 2026-10-02 entry — 11 impressions, 0 clicks, position 29.8, 0 `/smells/` URLs.
- **Action:** No site change. Pulled GSC 28d (2026-09-19 → 2026-10-17) by date, page, query, and query+page through `portfolio.gsc.query_with_dims`, plus `uv run portfolio project seo airsucks.com --refresh`.
- **Result (interim):**
  - Site-wide: **102 impressions, 0 clicks, position 63.7.** About 3 impressions in the 2 weeks before deploy; about 35 in the week of 10-04 → 10-10; about 64 in the week of 10-11 → 10-17.
  - Coverage: 9 of the top 10 inspected URLs are indexed, including `/smells/`, `/smells/gas/`, `/smells/rotten-eggs/` and `/diagnose/smell/`. Sitemap: 21 URLs, fetched OK.
  - `/diagnose/vacuum/` regressed from "Discovered – not indexed" (10-02) to `url_is_unknown_to_google`.
  - By page (impressions / avg position):
    - `/smells/rotten-eggs/` 49 / 71
    - `/smells/burning-plastic/` 19 / 50
    - `/smells/musty/room/` 7 / 70
    - `/smells/musty/` 6 / 82
    - `/smells/musty/basement/` 6 / 82
    - `/smells/dog/` 5 / 36
    - `/smells/gas/` 4 / 54
    - `/smells/sewage/` 3 / 32
    - `/smells/musty/no-visible-mold/` 2 / 40
    - `/smells/gas-but-no-leak/` 1 / 15
    - `/smells/cat-pee/` 1 / 8
    - Non-smell pages (`/`, `/about/`, `/learn/`, `/diagnose/`) rank 2–6, but only on brand-like queries ("air suc").
  - 57 distinct queries, almost all with 1–7 impressions. Top: "rotten egg smell" (7, position 88), "room smells musty" (5, 70), "rotten egg smell in house" (5, 69).
  - Best positions come from narrow, situational queries:
    - "my house smells like gas but no leak" 15
    - "plastic smell in house not burning" 37
    - "house smells like wet dog" 43
  - No query appears on two pages.
- **Learning (provisional — small sample, re-read at the 10-30 review):**
  - Indexing is no longer the limit; ranking depth is. v2.J looks like (a) or (b), not (c).
  - The order families surface in doesn't match the Ahrefs plan. The primary target (musty) sits at positions 81–100. Rotten eggs (sulfur) and burning plastic surface first. KD 0–3 didn't mean easy ranking for this domain.
  - Google is testing the pages on broad head terms (positions 70–100). The narrow "X but no Y" queries rank best, which supports one-page-per-intent and points v3.C toward situational pages.
  - The gas / rotten-eggs / gas-but-no-leak intent split holds: each draws its own queries.
