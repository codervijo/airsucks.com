# AI_AGENTS.md — airsucks.com

## Overview

airsucks.com is a WordPress-hosted content site in the suction / vacuum / airflow / indoor-air niche. It will host AI-assisted long-form content alongside a small set of interactive React/Vite tools (diagnostic flowcharts, calculators, sizing tools) embedded as WordPress plugins — same pattern as hybridautopart.com.

This file defines the AI agent roles, pillars, and workflows for managing and growing the site.

> **Status:** scaffolding only. Pillars, monetization plan, and content strategy are TBD — fill in once decided. Do not infer them from the domain name alone.

---

## Working memory — Claude instructions

- **After any strategy, insight, or decision is accepted by the user**, update `seo/CLAUDE.md` (once the SEO subtree is created) to reflect it. This keeps future sessions context-complete without relying on conversation history.
- Until `seo/CLAUDE.md` exists, capture decisions in `docs/prd.md` and update this file's pillar / strategy sections.
- If a decision contradicts something already in this file, update it — don't leave stale information in place.

---

## Stack

- **CMS:** WordPress (host TBD — likely GoDaddy Managed WordPress to match the rest of the portfolio)
- **SEO plugin:** Yoast SEO (free) — TBD, confirm before launch
- **Interactive tools:** React + Vite, compiled to static JS/CSS, packaged as WordPress shortcode plugins, deployed via SFTP — same pattern as hybridautopart.com's PSD simulator
- **Content pipelines:** Python 3 + OpenAI-compatible API — to be lifted from hybridautopart.com once content strategy is locked

---

## Project structure

```
airsucks.com/
├── docs/                       # PRD, prompts log, strategy docs
│   ├── prd.md                  # Phase-based feature tracking
│   └── Prompts.md              # Prompt history log
├── AI_AGENTS.md                # This file
├── README.md
├── .gitignore
└── (seo/ — to be added once content strategy is locked)
```

The eventual `seo/` subtree will mirror hybridautopart.com's layout (`pipelines/`, `lib/`, `wp_plugins/`, `data/`, `CLAUDE.md`). Don't pre-create it — wait for the content plan.

---

## Content pillars

> **TBD.** Three pillars to be defined. Hints surfaced in early sessions (musty-smell diagnostics, airflow/CFM, dehumidifier sizing, make/model HVAC pSEO) are *prompts for discussion, not decisions*. Confirm pillars with the owner before scaffolding keyword research, content briefs, or pSEO schemas.

Hard avoids (carry over from owner's portfolio policy):
- AQI-style head-term listicles
- YMYL medical/health claims about indoor air

---

## Owner profile

- **Name:** Vik Thomas (pen name) — Lamill Web Systems / lamill.io
- **Background:** Embedded systems / motor control engineer
- **Web skills:** WordPress (learning), React/Vite (capable), HTML/CSS (basic)
- **Time available:** ~4 hours/week
- **Dev workflow:** Local dev → build → SFTP/SSH deploy

See `hybridautopart.com/AI_AGENTS.md` for the full portfolio context — airsucks.com is the "Build" entry under the suction/vacuum niche.

---

## Agent roles

> **TBD.** Adapt the five-agent structure from hybridautopart.com's AI_AGENTS.md once pillars and monetization are decided:
> 1. SEO & Content Strategist
> 2. React/Vite Developer (for the tools listed in `docs/prd.md`)
> 3. WordPress Manager
> 4. Domain Portfolio Manager (shared across portfolio — lives in hybridautopart's AI_AGENTS.md)
> 5. Monetization Strategist

---

## Building info

Stack: Vite + React + TypeScript, scaffolded from a Lovable export
(originally named `air-fixer`). Configured for Cloudflare Workers
deploy via `wrangler.jsonc` (note: `wrangler.jsonc`'s `name` is still
the Lovable placeholder `tanstack-start-app` — change before deploy).

Package manager is **pnpm** (per portfolio-wide convention; the
Lovable export's `bun.lock` was removed by the bootstrap's CF safety
fixes). Build via the central builder Makefile:

```bash
cd sites/airsucks.com
make deps         # → pnpm install via the central builder
make dev          # → pnpm dev (vite dev server)
make build        # → pnpm build (vite build → dist/)
```

Direct pnpm equivalents work too (`pnpm dev`, `pnpm build`), but
the Makefile path is the conformance-tracked one.

Note: the WordPress-based strategy captured above in `## Stack`
reflects the original 2025-era plan. The v1 implementation landing
now is the Lovable-derived React app; WordPress integration (if it
happens) is downstream.

## Deployment info

- **Platform**: Cloudflare Workers (per `wrangler.jsonc`).
- **Live URL**: https://airsucks.com/ (after deploy completes).
- **Deploy trigger**: `pnpm wrangler deploy` (or run `portfolio new
  deploy airsucks.com` to set up the GitHub repo + Cloudflare project
  connection in one step).
- **Last deployed commit**: not yet deployed.

## Out of scope / don't touch

- Publishing to WordPress without owner review pass
- Creating backlinks artificially or building fake author profiles
- YMYL health/medical claims
- Anything contradicting the owner's portfolio-wide hard avoids documented in `hybridautopart.com/AI_AGENTS.md`

## Versioning

This project follows the two-level versioning convention canonical
to the portfolio (see `sites/portfolio/AI_AGENTS.md` for the full
statement):

- **`vN`** — major capability tier (SemVer-MAJOR semantics).
- **`vN.X`** — phase letter within a tier (A, B, C, …) for
  internal slicing.
- **`vN.X.Y`** — numeric sub-phase for follow-up work that lands
  after `vN.X` shipped.

Track current phase + completed work in `docs/prd.md`.

