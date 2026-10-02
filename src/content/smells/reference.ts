// Reference data: odor families, trades, and the public sources we cite.
import type { OdorFamily, OdorFamilyId, SourceRef, Trade, TradeId } from "./types";

export const FAMILIES: OdorFamily[] = [
  {
    id: "gas",
    label: "Natural gas or propane",
    describedAs: ["natural gas", "propane", "sulfur with a chemical edge"],
    page: "/smells/gas/",
    safetyFirst: "If you think it's natural gas or propane, leave first and diagnose later.",
  },
  {
    id: "rotten-egg",
    label: "Rotten eggs / sulfur",
    describedAs: ["rotten eggs", "sulfur", "struck matches"],
    page: "/smells/rotten-eggs/",
    safetyFirst: "A rotten-egg smell can be a gas leak. Rule that out before anything else.",
  },
  {
    id: "burning",
    label: "Burning / electrical",
    describedAs: ["burning plastic", "hot electrical", "burning dust", "melting rubber"],
    page: "/smells/burning-plastic/",
    safetyFirst: "If you see smoke, sparks, or a scorched outlet, get out and call 911.",
  },
  {
    id: "sewage",
    label: "Sewage / sewer gas",
    describedAs: ["sewer", "septic", "toilet", "drain"],
    page: "/smells/sewage/",
  },
  {
    id: "musty",
    label: "Musty / mildew",
    describedAs: ["musty", "mildew", "damp basement", "wet towels", "dirty socks", "earthy"],
    page: "/smells/musty/",
  },
  {
    id: "pet-urine",
    label: "Pet / urine",
    describedAs: ["cat pee", "ammonia", "wet dog", "dog", "mousy"],
    page: "/smells/cat-pee/",
  },
  {
    id: "skunk",
    label: "Skunk",
    describedAs: ["skunk", "skunky", "burnt rubber with sulfur"],
    page: "/smells/skunk/",
    safetyFirst: "A skunk-like smell indoors can be natural gas. Rule that out first.",
  },
  {
    id: "fishy",
    label: "Fishy",
    describedAs: ["fishy", "rotting fish", "urine-like from an outlet"],
    safetyFirst:
      "A fishy smell with no fish around is a classic sign of an overheating electrical part.",
  },
  {
    id: "sweet-chemical",
    label: "Chemical, sweet, or unusual",
    describedAs: [
      "paint or solvent",
      "new carpet or furniture",
      "sickly sweet",
      "chloroform-like",
      "rotting",
    ],
  },
];

export const familyById = (id: OdorFamilyId): OdorFamily => {
  const f = FAMILIES.find((x) => x.id === id);
  if (!f) throw new Error(`unknown odor family: ${id}`);
  return f;
};

export const TRADES: Record<TradeId, Trade> = {
  "emergency-911": {
    id: "emergency-911",
    name: "911 / fire department",
    does: "Responds to smoke, fire, and gas emergencies.",
  },
  "gas-utility": {
    id: "gas-utility",
    name: "Your gas utility's emergency line",
    does: "Checks for natural gas leaks. Call its emergency number, not the billing line.",
  },
  "propane-supplier": {
    id: "propane-supplier",
    name: "Your propane supplier",
    does: "Checks propane tanks, lines, and appliances for leaks.",
  },
  plumber: {
    id: "plumber",
    name: "Plumber",
    does: "Drains, traps, toilets, vents, water heaters, and leaking supply lines.",
  },
  "sewer-specialist": {
    id: "sewer-specialist",
    name: "Sewer / drain specialist",
    does: "Camera inspection and smoke testing of sewer lines and vents.",
  },
  hvac: {
    id: "hvac",
    name: "HVAC technician",
    does: "Furnaces, air conditioners, coils, condensate drains, blowers, and ducts.",
  },
  electrician: {
    id: "electrician",
    name: "Licensed electrician",
    does: "Outlets, switches, wiring, panels, and light fixtures.",
  },
  "mold-remediation": {
    id: "mold-remediation",
    name: "Mold remediation company",
    does: "Contains and removes mold growth too large or too hidden to handle yourself.",
  },
  "water-damage": {
    id: "water-damage",
    name: "Water damage / restoration company",
    does: "Finds wet materials with moisture meters and dries structures out.",
  },
  waterproofing: {
    id: "waterproofing",
    name: "Basement waterproofing contractor",
    does: "Foundation seepage, drainage, sump systems, and crawlspace encapsulation.",
  },
  "wildlife-control": {
    id: "wildlife-control",
    name: "Wildlife control",
    does: "Removes skunks, raccoons, and other animals under decks, sheds, and crawlspaces.",
  },
  "pest-control": {
    id: "pest-control",
    name: "Pest control",
    does: "Finds and removes mice and rats, and seals entry points.",
  },
  "appliance-repair": {
    id: "appliance-repair",
    name: "Appliance repair",
    does: "Dryers, washers, dishwashers, refrigerators, and ranges.",
  },
  flooring: {
    id: "flooring",
    name: "Flooring contractor",
    does: "Pulls carpet and pad, seals or replaces contaminated subfloor.",
  },
  veterinarian: {
    id: "veterinarian",
    name: "Veterinarian",
    does: "Checks a pet whose own smell changed suddenly.",
  },
  "home-inspector": {
    id: "home-inspector",
    name: "Home inspector",
    does: "A whole-house look when you can't localize a problem.",
  },
  diy: {
    id: "diy",
    name: "You (DIY)",
    does: "Most smell sources are found and fixed without a pro.",
  },
};

export const SOURCES = {
  epaMold: {
    title: "A Brief Guide to Mold, Moisture and Your Home",
    url: "https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home",
    publisher: "U.S. EPA",
  },
  epaMoldCleanup: {
    title: "Mold Cleanup in Your Home",
    url: "https://www.epa.gov/mold/mold-cleanup-your-home",
    publisher: "U.S. EPA",
  },
  cpscCo: {
    title: "Carbon Monoxide Information Center",
    url: "https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Carbon-Monoxide-Information-Center",
    publisher: "U.S. CPSC",
  },
  agaGas: {
    title: "Using Natural Gas Safely",
    url: "https://www.aga.org/natural-gas/safety/using-natural-gas-safely/",
    publisher: "American Gas Association",
  },
  propaneSafety: {
    title: "Safety Guide for Propane Users",
    url: "https://propane.com/safety/safety-guide-for-propane-users/",
    publisher: "Propane Education & Research Council",
  },
  phmsaLeak: {
    title: "Pipeline Leak Recognition and What to Do",
    url: "https://www.phmsa.dot.gov/safety-awareness/pipeline/pipeline-leak-recognition-and-what-do",
    publisher: "U.S. DOT PHMSA",
  },
} satisfies Record<string, SourceRef>;

/** The standard "leave and call" block for any page where gas is in play.
 *  Wording follows AGA + propane-industry guidance (see SOURCES). */
export const GAS_SAFETY = {
  title: "If you smell gas right now",
  when: [
    "A rotten-egg, sulfur, or skunk smell that's strong, sudden, or near a gas appliance or line",
    "A hissing or whistling sound near a gas line, meter, or appliance",
    "Anyone in the home feels dizzy, nauseous, or has a headache that eases outside",
  ],
  actions: [
    "Get everyone out now. Don't stop to find the source.",
    "Don't flip switches, unplug things, use a flashlight, light anything, or start a car in an attached garage — any spark can ignite gas.",
    "On propane, close the tank's main valve (turn clockwise) only if you can do it safely on your way out.",
    "From outside, well away from the house, call your gas utility's emergency line or 911 (propane: your supplier or 911).",
    "Don't go back in until the utility, supplier, or fire department says it's safe.",
  ],
  note: "Carbon monoxide has no smell at all, so a smell test can't rule it out. Keep CO alarms on every level and outside sleeping areas.",
};
