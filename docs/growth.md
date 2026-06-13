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
cd ~/work/projects/sites/portfolio && make run ARGS="gsc sync"
```

Then read the row for `airsucks.com`. Or pull from
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
- **Status:** active
- **KPI:** indexed-page count + impressions (GSC `coverage_state`)
- **Baseline:** 0 impressions; GSC homepage = "Crawled – currently not indexed" (2026-06-12 snapshot); only 1 URL inspected.
- **Action:** Diagnosed *why* Google isn't indexing. Wayback shows airsucks.com was a **parked domain for its entire history** — domain-name-as-title parking page (2013), empty/JS-parking (2014–15), 302 parking-redirects (2018–2025); never a real site. Relaunched with real content ~2026-05-11. **No sign of prior spam/penalty** — clean but *cold*: Google's decade-long prior is "low-value parking → ignore," so fresh content reads as "Crawled – not indexed" until it's convinced the domain changed. Plan to counter the stale prior: (1) SSR all routes + per-route title/meta [delegate pending]; (2) complete sitemap from the route tree + submit in GSC; (3) Request Indexing + IndexNow (enabled); (4) content depth + a few inbound links + weeks of consistency.
- **Result:** TBD — review 2026-07-11 (re-check GSC `coverage_state`)
- **Learning:** TBD — does a long-parked domain re-index once real content + explicit re-crawl signals land? Reusable for other parked/aftermarket domains in the fleet.
