export type DiagnosticResult = {
  id: string;
  title: string;
  causes: string[];
  diyChecks: string[];
  toolsParts: string[];
  callPro: string[];
  related: { title: string; to: string }[];
};

export const PROBLEMS = [
  { id: "smell", label: "Bad smell", icon: "👃" },
  { id: "airflow", label: "Weak airflow", icon: "🌬️" },
  { id: "dust", label: "Too much dust", icon: "✨" },
  { id: "machine", label: "Machine not working", icon: "🛠️" },
] as const;

export const LOCATIONS = [
  { id: "vacuum", label: "Vacuum" },
  { id: "bedroom", label: "Bedroom" },
  { id: "bathroom", label: "Bathroom" },
  { id: "kitchen", label: "Kitchen" },
  { id: "vent", label: "HVAC vent" },
  { id: "house", label: "Whole house" },
  { id: "appliance", label: "Appliance" },
] as const;

export const SYMPTOMS_BY_PROBLEM: Record<string, { id: string; label: string }[]> = {
  smell: [
    { id: "musty", label: "Musty" },
    { id: "burning", label: "Burning smell" },
    { id: "sour", label: "Sour smell" },
    { id: "pet", label: "Pet smell" },
  ],
  airflow: [
    { id: "weak-suction", label: "Weak suction" },
    { id: "vent-weak", label: "Vent barely blowing" },
    { id: "stale", label: "Stale air" },
  ],
  dust: [
    { id: "dust-blowing", label: "Dust blowing out" },
    { id: "stale", label: "Stale air" },
  ],
  machine: [
    { id: "weak-suction", label: "Weak suction" },
    { id: "burning", label: "Burning smell" },
    { id: "dust-blowing", label: "Dust blowing out" },
  ],
};

export const CONDITIONS = [
  { id: "recent", label: "Started recently" },
  { id: "rain", label: "Worse after rain" },
  { id: "hvac", label: "Worse when HVAC runs" },
  { id: "filter", label: "Filter recently changed" },
  { id: "pets", label: "Pets in the home" },
  { id: "one-room", label: "One room only" },
  { id: "whole-house", label: "Whole house issue" },
];

const RESULTS: Record<string, DiagnosticResult> = {
  "vacuum-burning": {
    id: "vacuum-burning",
    title: "Vacuum burning smell",
    causes: [
      "Belt slipping or broken",
      "Brush roller jammed with hair or string",
      "Motor overheating from clogged filter",
    ],
    diyChecks: [
      "Unplug the vacuum before inspecting anything",
      "Check the brush roller for hair, string, or debris",
      "Inspect the belt for stretching, cracks, or breakage",
      "Clean or replace the filter",
      "Let the motor cool for 30+ minutes before retesting",
    ],
    toolsParts: ["Replacement belt", "Replacement filter", "Scissors or seam ripper", "Compressed air"],
    callPro: ["Smoke appears", "Electrical smell persists after cleaning", "Vacuum trips a circuit breaker"],
    related: [
      { title: "Vacuum lost suction", to: "/diagnose/vacuum" },
      { title: "Filter clogged", to: "/diagnose/vacuum" },
    ],
  },
  "bedroom-musty": {
    id: "bedroom-musty",
    title: "Musty bedroom smell",
    causes: [
      "Poor ventilation",
      "Moisture trapped in carpet, mattress, or walls",
      "HVAC airflow imbalance",
      "Dirty filter or duct issue",
    ],
    diyChecks: [
      "Check humidity (aim for 30–50%)",
      "Smell near vents to localize the source",
      "Inspect windows and walls for moisture or staining",
      "Replace HVAC filter",
      "Run a fan or dehumidifier for 24 hours",
    ],
    toolsParts: ["Hygrometer", "HVAC filter (correct MERV)", "Dehumidifier", "Enzyme cleaner"],
    callPro: ["Visible mold growth larger than a dinner plate", "Persistent wet drywall", "Sewage or gas smell"],
    related: [
      { title: "House smells stale", to: "/diagnose/odor" },
      { title: "Vent barely blows", to: "/diagnose/airflow" },
    ],
  },
  "vacuum-weak-suction": {
    id: "vacuum-weak-suction",
    title: "Vacuum lost suction",
    causes: [
      "Full bag or canister",
      "Clogged hose or wand",
      "Dirty pre-motor or HEPA filter",
      "Cracked seal or loose attachment",
    ],
    diyChecks: [
      "Empty the bag or canister",
      "Detach hose and shine a light through to find clogs",
      "Wash or replace filters",
      "Check seals around the canister and attachments",
    ],
    toolsParts: ["Replacement filter", "Replacement hose", "Soft brush"],
    callPro: ["Motor whines or won't start", "Sparking from the motor housing"],
    related: [
      { title: "Vacuum smells like burning", to: "/diagnose/vacuum" },
      { title: "Brush not spinning", to: "/diagnose/vacuum" },
    ],
  },
  "vent-weak": {
    id: "vent-weak",
    title: "Vent barely blowing",
    causes: [
      "Clogged HVAC filter",
      "Closed or blocked dampers",
      "Undersized return air",
      "Duct leakage or disconnect",
    ],
    diyChecks: [
      "Replace the HVAC filter",
      "Check that supply and return vents aren't blocked by furniture",
      "Open dampers in the basement or attic",
      "Feel duct connections for leaking air",
    ],
    toolsParts: ["HVAC filter", "Foil mastic tape", "Anemometer (optional)"],
    callPro: ["Ice on the indoor coil", "Burning smell from the air handler", "No air movement at all"],
    related: [
      { title: "One room hotter than the rest", to: "/diagnose/airflow" },
      { title: "Return air problem", to: "/diagnose/airflow" },
    ],
  },
  generic: {
    id: "generic",
    title: "General air quality issue",
    causes: [
      "Poor ventilation",
      "Dirty or undersized filter",
      "Humidity out of range",
      "Localized contaminant source",
    ],
    diyChecks: [
      "Replace your HVAC filter",
      "Open windows for 15 minutes to flush stale air",
      "Check humidity with a hygrometer",
      "Walk room-to-room to find the strongest source",
    ],
    toolsParts: ["HVAC filter", "Hygrometer", "Air purifier"],
    callPro: ["Symptoms persist for weeks", "You suspect mold or combustion gases"],
    related: [
      { title: "Browse all diagnostics", to: "/diagnose" },
    ],
  },
};

export function diagnose(input: {
  problem: string;
  location: string;
  symptom: string;
}): DiagnosticResult {
  const { problem, location, symptom } = input;
  if (location === "vacuum" && symptom === "burning") return RESULTS["vacuum-burning"];
  if (location === "vacuum" && symptom === "weak-suction") return RESULTS["vacuum-weak-suction"];
  if (symptom === "musty") return RESULTS["bedroom-musty"];
  if (symptom === "vent-weak" || (problem === "airflow" && location === "vent")) return RESULTS["vent-weak"];
  return RESULTS.generic;
}
