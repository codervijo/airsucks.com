# PRD — airsucks.com

> **Status:** scaffolding only. Phases below are placeholders modeled on hybridautopart.com's PRD structure. Replace TBD items with real features once content pillars and monetization are decided.

---

## Problem

Indoor air quality, vacuum/suction performance, HVAC airflow — the
"why does my air suck?" cluster of consumer questions — is poorly
served by existing content. Search results lean heavily on
affiliate-spam roundups, vendor-published "guides" that double as
product pitches, and Reddit threads with no schema. Real diagnostic
help (flowcharts, sizing calculators, "is this normal" tooling)
exists in a few niche forums but isn't packaged for search.

This site addresses that gap with topic-organized content paired with
interactive diagnostic tools — same "content + tool" hybrid pattern
that works on `hybridautopart.com`. v1 starts with the Lovable-
scaffolded React app (the `air-fixer` diagnostic). Content layer
follows once pillars are locked.

## Users

Primary: homeowners and DIYers troubleshooting suction / airflow /
indoor-air problems — vacuum loss, weak HVAC, musty smells, room
imbalances. Search-driven traffic, not subscribers.

Secondary: small-shop HVAC / appliance-repair contractors who want
quick reference diagnostics or sizing rules without digging through
manufacturer docs.

Not the target: industrial HVAC engineers (different vocabulary +
scale), pure product-buying intent (better served by Amazon /
Wirecutter), allergy/medical claims (YMYL — explicitly out of scope
per AI_AGENTS.md).

---

## V1 — Foundation
**Status:** Not started

| Phase | Feature | Type | Status |
|-------|---------|------|--------|
| P1 | Define three content pillars | Strategy | [ ] |
| P1 | Keyword research — 60 seeds (20 per pillar), real SERP-verified KD | Research | [ ] |
| P1 | Competitor map — top 5 ranking domains per pillar | Research | [ ] |
| P1 | pSEO data schema — make/model appliance + HVAC pages | Schema | [ ] |
| P1 | Tool spec — musty-smell diagnostic flowchart | Tool | [ ] |
| P1 | Tool spec — airflow / CFM calculator | Tool | [ ] |
| P1 | Tool spec — "do I need a dehumidifier" sizing tool | Tool | [ ] |
| P1 | Reusable content brief template (diagnostic intent, AEO block, schema) | Template | [ ] |
| P1 | First-draft spoke article — pillar 1 highest-opportunity keyword | Content | [ ] |
| P1 | First-draft spoke article — pillar 2 highest-opportunity keyword | Content | [ ] |
| P1 | First-draft spoke article — pillar 3 highest-opportunity keyword | Content | [ ] |
| P1 | WordPress site setup (host, theme, Yoast, schema) | Infra | [ ] |
| P1 | Amazon Associates application | Revenue | [ ] |

---

## Phase 1 — Foundation
Target: site exists, pillars locked, first 3 spoke articles published, first tool live

### Strategy & research
- [ ] Confirm three pillars (no inference from domain — owner decision)
- [ ] Keyword research: 60 seeds (20/pillar) with SERP-verified KD; bias to KD < 30
- [ ] Competitor map per pillar: top 5 domains, DR estimate, depth pattern, monetization, biggest gap
- [ ] Document hard avoids (AQI head-terms, YMYL) explicitly in `AI_AGENTS.md`

### Content infrastructure
- [ ] Reusable content brief template — diagnostic intent, H2 structure for AI Overviews / featured snippets, must-cover entities, schema markup, internal links, affiliate placements, AEO direct-answer block (40–60 words)
- [ ] pSEO data schema for make/model appliance + HVAC pages — columns must generate genuinely unique content per row, with sourcing notes per field

### First content drops
- [ ] Spoke article — pillar 1 (highest-opportunity keyword)
- [ ] Spoke article — pillar 2 (highest-opportunity keyword)
- [ ] Spoke article — pillar 3 (highest-opportunity keyword)

### First tool
- [ ] Musty-smell diagnostic flowchart — full functional spec (inputs, logic, outputs, affiliate hooks, outreach angle)
- [ ] React/Vite implementation as WordPress shortcode plugin
- [ ] Deploy + dedicated launch post

### WordPress setup
- [ ] Host decision (GoDaddy Managed vs other)
- [ ] Theme + Yoast + breadcrumbs + Article schema enabled
- [ ] Amazon Associates account approved

---

## Phase 2 — Content Machine
Target: TBD visits/month — fill in once Phase 1 baseline exists

- [ ] Lift `seo/` pipeline scaffolding from hybridautopart.com
- [ ] CFM calculator tool (spec → build → ship)
- [ ] Dehumidifier sizing tool (spec → build → ship)
- [ ] pSEO page generation — first 50 make/model rows
- [ ] Content velocity — 3 posts/week
- [ ] Internal cross-linking pipeline

---

## Phase 3 — Authority & Scale
**Status:** Speculative

- [ ] Backlink strategy (HARO, resource-page outreach)
- [ ] Display ad eligibility (Mediavine at 10K sessions/mo)
- [ ] Newsletter
- [ ] Cross-portfolio internal linking (where topics overlap with hybridautopart, iotbastion)
