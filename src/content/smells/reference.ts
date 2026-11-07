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
  epaRadon: {
    title: "Radon",
    url: "https://www.epa.gov/radon",
    publisher: "U.S. EPA",
  },
  mdhSulfur: {
    title: "Hydrogen Sulfide and Sulfur Bacteria in Well Water",
    url: "https://www.health.state.mn.us/communities/environment/water/wells/waterquality/hydrosulfide.html",
    publisher: "Minnesota Department of Health",
  },
  // v3.F — sources for the four claims flagged in the v2 decisions log.
  iucGasSafety: {
    title: "Natural Gas and Propane Gas Safety (Safety Minute, July 2026)",
    url: "https://iuc.iowa.gov/media/2195/download",
    publisher: "Iowa Utilities Commission",
  },
  amerigasSafety: {
    title: "Propane Safety Tips",
    url: "https://www.amerigas.com/about-propane/propane-safety",
    publisher: "AmeriGas",
  },
  vtBoxwood: {
    title: "Selecting Landscape Plants: Boxwoods",
    url: "https://www.pubs.ext.vt.edu/426/426-603/426-603.html",
    publisher: "Virginia Cooperative Extension (Virginia Tech)",
  },
  humanePetStains: {
    title: "How to Remove Pet Stains and Odors Naturally",
    url: "https://www.humaneworld.org/resources/how-remove-pet-stains-and-odors",
    publisher: "Humane World for Animals",
  },
  samsungWasherOdor: {
    title: "Washing machine or laundry smells bad",
    url: "https://www.samsung.com/us/support/troubleshoot/TSG10007246/",
    publisher: "Samsung US Support",
  },
  lgWasherOdor: {
    title: "LG Washer — Troubleshooting Odor / Buildup",
    url: "https://www.lg.com/us/support/help-library/lg-washer-troubleshooting-odor-buildup--1337716047757",
    publisher: "LG US Support",
  },
  epaRadonReduction: {
    title: "Consumer's Guide to Radon Reduction: How to Fix Your Home",
    url: "https://www.epa.gov/sites/default/files/2016-12/documents/2016_consumers_guide_to_radon_reduction.pdf",
    publisher: "U.S. EPA",
  },
  zoellerManual: {
    title: "Sump pump owner's manual (FM2298), maintenance schedule",
    url: "https://zoellerpumps.com/wp-content/uploads/sites/3/2024/02/fm2298.pdf",
    publisher: "Zoeller Pump Company",
  },
  oshaH2s: {
    title: "Hydrogen Sulfide — Hazards",
    url: "https://www.osha.gov/hydrogen-sulfide/hazards",
    publisher: "U.S. OSHA",
  },
  carrierBurningSmell: {
    title: "Burning Smell in House? Discover How To Get Rid of It",
    url: "https://www.carrier.com/residential/en/us/products/furnaces/burning-smell-in-house/",
    publisher: "Carrier",
  },
  traneBurningSmell: {
    title: "Help! My Furnace Smells Like Burning",
    url: "https://www.trane.com/residential/en/resources/troubleshooting/gas-furnaces/furnace-smells-like-burning/",
    publisher: "Trane",
  },
  cpscHeaters2023: {
    title: "CPSC Warns Consumers to be Cautious When Using Space Heaters, Furnaces and Fireplaces This Winter",
    url: "https://www.cpsc.gov/Newsroom/News-Releases/2023/CPSC-Warns-Consumers-to-be-Cautious-When-Using-Space-Heaters-Furnaces-and-Fireplaces-This-Winter",
    publisher: "U.S. CPSC",
  },
  cdcRodentCleanup: {
    title: "How to Clean Up After Rodents",
    url: "https://www.cdc.gov/healthy-pets/rodent-control/clean-up.html",
    publisher: "U.S. CDC",
  },
  cdcRodentSealUp: {
    title: "How to Seal Up to Prevent Rodents",
    url: "https://www.cdc.gov/healthy-pets/rodent-control/seal-up.html",
    publisher: "U.S. CDC",
  },
  nachiPlumbingTerms: {
    title: "Plumbing Terms",
    url: "https://www.nachi.org/plumbing-terms.htm",
    publisher: "InterNACHI (International Association of Certified Home Inspectors)",
  },
  hvacSchoolDirtySock: {
    title: "What Causes Dirty Sock Syndrome?",
    url: "https://www.hvacrschool.com/what-causes-dirty-sock-syndrome/",
    publisher: "HVAC School",
  },
  energyStarMaintenance: {
    title: "Maintenance Checklist",
    url: "https://www.energystar.gov/saveathome/heating-cooling/maintenance-checklist",
    publisher: "ENERGY STAR (U.S. EPA / DOE)",
  },
  epaDuctCleaning: {
    title: "Should You Have the Air Ducts in Your Home Cleaned?",
    url: "https://www.epa.gov/indoor-air-quality-iaq/should-you-have-air-ducts-your-home-cleaned",
    publisher: "U.S. EPA",
  },
  epa608: {
    title: "Section 608 Technician Certification",
    url: "https://www.epa.gov/section608/section-608-technician-certification-0",
    publisher: "U.S. EPA",
  },
  epaAcRefrigerants: {
    title: "Substitutes in Residential and Light Commercial Air Conditioning and Heat Pumps",
    url: "https://www.epa.gov/snap/substitutes-residential-and-light-commercial-air-conditioning-and-heat-pumps",
    publisher: "U.S. EPA (SNAP program)",
  },
  epaHfcSectors: {
    title: "Technology Transitions HFC Restrictions by Sector",
    url: "https://www.epa.gov/hfcs/technology-transitions-hfc-restrictions-sector",
    publisher: "U.S. EPA",
  },
  oshaRefrigeration: {
    title: "Hazards during the Repair and Maintenance of Refrigeration Systems on Vessels (fact sheet)",
    url: "https://www.osha.gov/sites/default/files/publications/OSHA3836.pdf",
    publisher: "U.S. OSHA",
  },
  geSealedSystem: {
    title: "Refrigerator — Puncture in the Sealed System",
    url: "https://products.geappliances.com/appliance/gea-support-search-content?contentId=16703",
    publisher: "GE Appliances",
  },
  achrDirtySock: {
    title: "Dirty Sock Syndrome: What It Is, How to Prevent It",
    url: "https://www.achrnews.com/articles/127583-dirty-sock-syndrome-what-it-is-how-to-prevent-it",
    publisher: "ACHR News",
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
