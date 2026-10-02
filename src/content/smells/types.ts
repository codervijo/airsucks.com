// Smell knowledge base — shared types.
//
// Everything in /smells/ and /diagnose/smell/ renders from data typed here.
// Causes are entities (causes.ts) reused by every page and by the diagnostic
// engine; pages (pages/*.ts) compose them with context-specific ranking and
// notes. Keep this file free of JSX and `@/` imports: vite.config.ts imports
// the page registry to build the prerender + sitemap list.

export type OdorFamilyId =
  | "musty"
  | "rotten-egg"
  | "sewage"
  | "gas"
  | "burning"
  | "fishy"
  | "pet-urine"
  | "skunk"
  | "sweet-chemical";

export type LocationId =
  | "whole-house"
  | "one-room"
  | "bedroom"
  | "basement"
  | "crawlspace-or-under-floor"
  | "bathroom"
  | "kitchen"
  | "laundry"
  | "hvac-vents"
  | "near-appliance"
  | "garage"
  | "outside-near-house";

export type TimingId =
  | "constant"
  | "hvac-running"
  | "heat-first-on"
  | "after-rain-or-humid"
  | "hot-water-only"
  | "running-water-or-flushing"
  | "comes-and-goes"
  | "night-or-closed-up"
  | "since-a-change";

export type ObservationId =
  | "visible-mold"
  | "water-damage-or-leak"
  | "high-humidity"
  | "gurgling-drains"
  | "unused-drain"
  | "pets-in-home"
  | "no-pets"
  | "previous-pets"
  | "hissing-sound"
  | "smoke-or-heat"
  | "flicker-or-buzz"
  | "headache-dizziness"
  | "only-i-smell-it"
  | "well-water"
  | "gas-appliances"
  | "propane"
  | "recent-renovation"
  | "rodent-signs"
  | "utility-found-no-leak";

/** How urgent acting on a cause is. Drives badge colour + copy. */
export type Urgency = "emergency" | "urgent" | "soon" | "routine";

/** Qualitative likelihood — never a percentage (see docs/prd.md § v2.A). */
export type Likelihood = "most common" | "common" | "less common" | "rare";

export type TradeId =
  | "emergency-911"
  | "gas-utility"
  | "propane-supplier"
  | "plumber"
  | "sewer-specialist"
  | "hvac"
  | "electrician"
  | "mold-remediation"
  | "water-damage"
  | "waterproofing"
  | "wildlife-control"
  | "pest-control"
  | "appliance-repair"
  | "flooring"
  | "veterinarian"
  | "home-inspector"
  | "diy";

export type Trade = {
  id: TradeId;
  name: string;
  /** One line: what this trade actually does for a smell problem. */
  does: string;
};

export type Cause = {
  id: string;
  name: string;
  /** One or two sentences: what is physically happening. */
  summary: string;
  /** Odor families this cause can produce. The engine never ranks a cause
   *  for a family not listed here. */
  families: OdorFamilyId[];
  /** Signs that point toward this cause over its look-alikes. */
  signs: string[];
  /** Safe checks a homeowner can do. Unsafe steps never go here. */
  checks: string[];
  /** What fixes it, in the order you'd try. */
  fixes: string[];
  /** Where DIY should stop. */
  diyLimit: string;
  trade: TradeId;
  urgency: Urgency;
  /** The /smells/ page that covers this cause best, if any. */
  page?: string;
  /** Diagnostic-engine scoring. `base` is an editorial 1–5 weight for how
   *  often this cause explains the family in ordinary homes; boosts add
   *  context. Scores are only compared with each other — never shown. */
  engine: {
    base: number;
    locations?: Partial<Record<LocationId, number>>;
    timing?: Partial<Record<TimingId, number>>;
    observations?: Partial<Record<ObservationId, number>>;
  };
};

export type RankedCause = {
  cause: string; // Cause.id
  likelihood: Likelihood;
  /** Page-specific note: why it ranks here in this context. */
  note?: string;
};

export type DecisionStep = {
  question: string;
  yes: string;
  no?: string;
  /** Optional page link for the "yes" branch. */
  href?: string;
};

export type FaqItem = { q: string; a: string };

export type LinkRef = { title: string; href: string; hint?: string };

export type SourceRef = { title: string; url: string; publisher: string };

export type SafetyBlock = {
  title: string;
  /** When to stop troubleshooting and act now. */
  when: string[];
  /** What to do, in order. */
  actions: string[];
  /** Optional footnote, e.g. "CO has no smell". */
  note?: string;
};

export type SmellPage = {
  /** Canonical path with leading + trailing slash, e.g. "/smells/musty/room/". */
  path: string;
  family: OdorFamilyId;
  /** <title> (brand suffix is added by the head builder). */
  title: string;
  description: string;
  h1: string;
  /** Short label for breadcrumbs, cards and nav. */
  label: string;
  /** Queries this page is built to answer (docs/audit only — not rendered
   *  as a keyword list). */
  targets: string[];
  /** Answer-first paragraph shown above the fold. */
  quickAnswer: string;
  urgency: Urgency;
  safety?: SafetyBlock;
  causes: RankedCause[];
  /** "Which one is it?" comparison table. */
  compare?: { headers: string[]; rows: string[][] };
  decision?: DecisionStep[];
  /** Page-level checks, in the order to do them. */
  checks: { title: string; how: string }[];
  /** Prose sections for anything the structured blocks don't cover. */
  sections?: { heading: string; body: string[] }[];
  /** When DIY stops — page-level summary. */
  diyStops: string[];
  /** Who to call, in the context of this page. */
  whoToCall: { trade: TradeId; when: string }[];
  faq: FaqItem[];
  related: LinkRef[];
  sources?: SourceRef[];
  /** Pre-selects the odor family on /diagnose/smell/. */
  diagnose: { family: OdorFamilyId; location?: LocationId };
  /** ISO date the content was last materially reviewed. */
  updated: string;
};

export type OdorFamily = {
  id: OdorFamilyId;
  label: string;
  /** How people describe it — helps the visitor self-identify. */
  describedAs: string[];
  /** Hub page for this family, if one exists. */
  page?: string;
  /** Shown on the hub + engine step 1 when this family has a safety gate. */
  safetyFirst?: string;
};
