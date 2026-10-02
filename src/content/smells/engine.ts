// /diagnose/smell/ engine — deterministic scoring over the cause library.
//
// Flow: odor family → where → when → observations → red flags (override) →
// ranked causes → next action. No ML, no LLM, no randomness: the same answers
// always give the same result, and every rule is readable data.
import { CAUSES } from "./causes";
import { GAS_SAFETY, familyById } from "./reference";
import type {
  Cause,
  LocationId,
  ObservationId,
  OdorFamilyId,
  SafetyBlock,
  TimingId,
  Urgency,
} from "./types";

export type Answers = {
  family?: OdorFamilyId;
  location?: LocationId;
  timing: TimingId[];
  observations: ObservationId[];
};

export const EMPTY_ANSWERS: Answers = { timing: [], observations: [] };

// ─── Question data ──────────────────────────────────────────────────────────

export const LOCATION_OPTIONS: { id: LocationId; label: string }[] = [
  { id: "whole-house", label: "All over the house" },
  { id: "one-room", label: "One room or one spot" },
  { id: "bedroom", label: "Bedroom or closet" },
  { id: "basement", label: "Basement" },
  { id: "crawlspace-or-under-floor", label: "Under the floor / crawlspace" },
  { id: "bathroom", label: "Bathroom" },
  { id: "kitchen", label: "Kitchen" },
  { id: "laundry", label: "Laundry room" },
  { id: "hvac-vents", label: "Coming out of the vents" },
  { id: "near-appliance", label: "Near an appliance or water heater" },
  { id: "garage", label: "Garage" },
  { id: "outside-near-house", label: "Outside, near the house" },
];

export const TIMING_OPTIONS: { id: TimingId; label: string }[] = [
  { id: "constant", label: "All the time" },
  { id: "comes-and-goes", label: "Comes and goes" },
  { id: "hvac-running", label: "When the AC or heat runs" },
  { id: "heat-first-on", label: "First time the heat runs this season" },
  { id: "after-rain-or-humid", label: "After rain or on humid days" },
  { id: "hot-water-only", label: "Only from hot water" },
  { id: "running-water-or-flushing", label: "When water runs or toilets flush" },
  { id: "night-or-closed-up", label: "At night, or when the house is closed up" },
  { id: "since-a-change", label: "Started after a change (trip, repair, delivery)" },
];

/** Observations, each shown only for the families where it helps. */
export const OBSERVATION_OPTIONS: {
  id: ObservationId;
  label: string;
  families: OdorFamilyId[] | "all";
}[] = [
  {
    id: "hissing-sound",
    label: "Hissing or whistling near a gas line or appliance",
    families: ["gas", "rotten-egg", "skunk", "sweet-chemical"],
  },
  {
    id: "headache-dizziness",
    label: "People feel dizzy, nauseous, or headachy indoors",
    families: "all",
  },
  {
    id: "smoke-or-heat",
    label: "Smoke, scorch marks, or something hot to the touch",
    families: ["burning", "fishy", "rotten-egg", "pet-urine"],
  },
  {
    id: "flicker-or-buzz",
    label: "Lights flicker, buzzing, or breakers tripping",
    families: ["burning", "fishy", "pet-urine"],
  },
  {
    id: "gas-appliances",
    label: "Home has gas appliances (stove, furnace, water heater, dryer)",
    families: ["gas", "rotten-egg", "skunk"],
  },
  { id: "propane", label: "Home uses a propane tank", families: ["gas", "rotten-egg", "skunk"] },
  {
    id: "utility-found-no-leak",
    label: "The gas utility already checked and found no leak",
    families: ["gas", "rotten-egg", "skunk"],
  },
  {
    id: "unused-drain",
    label: "A sink, shower, or floor drain rarely gets used",
    families: ["sewage", "rotten-egg", "gas"],
  },
  {
    id: "gurgling-drains",
    label: "Drains gurgle or toilet water levels drop",
    families: ["sewage", "rotten-egg"],
  },
  { id: "well-water", label: "Home is on a private well", families: ["rotten-egg"] },
  { id: "visible-mold", label: "Visible mold or mildew somewhere", families: ["musty"] },
  {
    id: "water-damage-or-leak",
    label: "Known leak, stains, or water damage",
    families: ["musty", "sewage"],
  },
  { id: "high-humidity", label: "Humidity is high (clammy air, wet windows)", families: ["musty"] },
  { id: "pets-in-home", label: "Pets live here", families: ["pet-urine", "musty", "skunk"] },
  { id: "previous-pets", label: "Previous owners or tenants had pets", families: ["pet-urine"] },
  { id: "no-pets", label: "No pets, ever", families: ["pet-urine", "fishy"] },
  {
    id: "rodent-signs",
    label: "Droppings, scratching, or chewed packaging",
    families: ["pet-urine", "sweet-chemical", "rotten-egg"],
  },
  {
    id: "recent-renovation",
    label: "Recent painting, flooring, or new furniture",
    families: ["sweet-chemical"],
  },
  { id: "only-i-smell-it", label: "Nobody else can smell it", families: "all" },
];

export function observationsFor(family: OdorFamilyId | undefined) {
  if (!family) return [];
  return OBSERVATION_OPTIONS.filter((o) => o.families === "all" || o.families.includes(family));
}

// ─── Red flags (override the ranked list) ───────────────────────────────────

export type RedFlag = {
  id: string;
  level: "emergency" | "urgent" | "caution";
  block: SafetyBlock;
};

const FIRE_BLOCK: SafetyBlock = {
  title: "Possible fire or electrical hazard",
  when: ["Smoke, sparks, flames, or a scorched or hot outlet, switch, or appliance"],
  actions: [
    "Get everyone out of the house.",
    "Call 911 from outside.",
    "Don't go back in for belongings, and don't open hot doors.",
  ],
  note: "Smoke alarms should be on every level and in and outside sleeping areas.",
};

const ELECTRICAL_BLOCK: SafetyBlock = {
  title: "Treat this as an electrical problem today",
  when: [
    "A burning, fishy, or urine-like smell together with flickering lights, buzzing, or tripping breakers",
  ],
  actions: [
    "Switch off the breaker for that area if the panel is safe to reach.",
    "Don't use that outlet or fixture, and don't touch anything that's hot or discolored.",
    "Call a licensed electrician today. If smoke appears, leave and call 911.",
  ],
};

const UNWELL_BLOCK: SafetyBlock = {
  title: "People feel unwell indoors",
  when: ["Dizziness, nausea, or headaches that ease when you go outside"],
  actions: [
    "Get everyone, including pets, into fresh air now.",
    "If a CO alarm is sounding, anyone is confused or very drowsy, or symptoms are severe, call 911.",
    "Don't go back in until the source is found by your utility, the fire department, or a qualified technician.",
  ],
  note: "Carbon monoxide has no smell, so a smell can't rule it in or out. Keep CO alarms on every level and outside sleeping areas.",
};

export function redFlags(a: Answers): RedFlag[] {
  const obs = new Set(a.observations);
  const flags: RedFlag[] = [];
  const gasLike = a.family === "gas" || a.family === "rotten-egg" || a.family === "skunk";
  const cleared = obs.has("utility-found-no-leak");

  if (gasLike) {
    const strongSigns =
      obs.has("hissing-sound") ||
      obs.has("headache-dizziness") ||
      a.family === "gas" ||
      (obs.has("gas-appliances") && (a.location === "near-appliance" || a.location === "kitchen"));
    if (!cleared && strongSigns) {
      flags.push({ id: "gas", level: "emergency", block: GAS_SAFETY });
    } else {
      flags.push({
        id: "gas-caution",
        level: "caution",
        block: {
          title: cleared ? "If it comes back stronger, call again" : "Rule out gas first",
          when: cleared
            ? [
                "The smell returns stronger, spreads, or you hear hissing — a leak can start after an inspection",
              ]
            : ["This smell can be the odorant added to natural gas and propane"],
          actions: cleared
            ? [
                "Leave and call the gas utility again from outside. Calling again is the right move.",
              ]
            : GAS_SAFETY.actions,
          note: GAS_SAFETY.note,
        },
      });
    }
  }

  if (obs.has("smoke-or-heat")) flags.push({ id: "fire", level: "emergency", block: FIRE_BLOCK });
  else if (
    obs.has("flicker-or-buzz") &&
    (a.family === "burning" || a.family === "fishy" || a.family === "pet-urine")
  ) {
    flags.push({ id: "electrical", level: "urgent", block: ELECTRICAL_BLOCK });
  }

  if (obs.has("headache-dizziness") && !flags.some((f) => f.id === "gas")) {
    flags.push({ id: "unwell", level: "emergency", block: UNWELL_BLOCK });
  }
  return flags;
}

// ─── Scoring ────────────────────────────────────────────────────────────────

export type ScoredCause = {
  cause: Cause;
  score: number;
  match: "Strong match" | "Possible" | "Less likely";
  /** Human-readable reasons the answers pointed here. */
  because: string[];
};

const LOC_LABEL = Object.fromEntries(LOCATION_OPTIONS.map((o) => [o.id, o.label]));
const TIME_LABEL = Object.fromEntries(TIMING_OPTIONS.map((o) => [o.id, o.label]));
const OBS_LABEL = Object.fromEntries(OBSERVATION_OPTIONS.map((o) => [o.id, o.label]));

export function scoreCause(c: Cause, a: Answers): { score: number; because: string[] } {
  const e = c.engine;
  let score = e.base;
  const because: string[] = [];
  if (a.location && e.locations?.[a.location]) {
    const w = e.locations[a.location]!;
    score += w;
    if (w >= 3) because.push(`Where: ${LOC_LABEL[a.location].toLowerCase()}`);
  }
  for (const t of a.timing) {
    const w = e.timing?.[t];
    if (w) {
      score += w;
      if (w >= 3) because.push(`When: ${TIME_LABEL[t].toLowerCase()}`);
    }
  }
  for (const o of a.observations) {
    const w = e.observations?.[o];
    if (w) {
      score += w;
      if (w >= 3) because.push(OBS_LABEL[o]);
    }
  }
  return { score, because };
}

export function rankCauses(a: Answers, limit = 5): ScoredCause[] {
  if (!a.family) return [];
  const scored = CAUSES.filter((c) => c.families.includes(a.family!))
    .map((c) => ({ cause: c, ...scoreCause(c, a) }))
    .filter((s) => s.score > 0)
    // Stable, deterministic: score desc, then urgency (more urgent first), then id.
    .sort(
      (x, y) =>
        y.score - x.score ||
        URGENCY_RANK[x.cause.urgency] - URGENCY_RANK[y.cause.urgency] ||
        x.cause.id.localeCompare(y.cause.id),
    )
    .slice(0, limit);
  const top = scored[0]?.score ?? 0;
  return scored.map((s) => ({
    ...s,
    match:
      s.score >= top * 0.75 ? "Strong match" : s.score >= top * 0.45 ? "Possible" : "Less likely",
  }));
}

const URGENCY_RANK: Record<Urgency, number> = { emergency: 0, urgent: 1, soon: 2, routine: 3 };

export function overallUrgency(flags: RedFlag[], ranked: ScoredCause[]): Urgency {
  if (flags.some((f) => f.level === "emergency")) return "emergency";
  if (flags.some((f) => f.level === "urgent")) return "urgent";
  const top = ranked.filter((r) => r.match === "Strong match");
  return top.reduce<Urgency>(
    (acc, r) => (URGENCY_RANK[r.cause.urgency] < URGENCY_RANK[acc] ? r.cause.urgency : acc),
    "routine",
  );
}

/** One-sentence next step from the result. */
export function nextAction(flags: RedFlag[], ranked: ScoredCause[]): string {
  const emergency = flags.find((f) => f.level === "emergency");
  if (emergency) return emergency.block.actions[0];
  const urgent = flags.find((f) => f.level === "urgent");
  if (urgent) return urgent.block.actions[0];
  const top = ranked[0];
  if (!top)
    return "Run the general checks on the smell's page, or start over with a different description.";
  return top.cause.checks[0];
}

export function familyLabel(id: OdorFamilyId) {
  return familyById(id).label;
}

/** Note when the answers suggest an odor only one person perceives. */
export const ONLY_ME_NOTE =
  "If nobody else in the home can smell it, after you've ruled out gas, it's worth mentioning to a clinician. Smell changes have many ordinary explanations, and we can't assess them.";
