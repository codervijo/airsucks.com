import { GAS_SAFETY, SOURCES } from "../reference";
import type { SmellPage } from "../types";

// Skunk smell indoors. Opens with the gas look-alike: the mercaptan odorant in
// natural gas and propane reads as "skunky" to many people.
export const skunk: SmellPage = {
  path: "/smells/skunk/",
  family: "skunk",
  label: "Skunk smell",
  title: "Skunk Smell in House: Gas Leak or Actual Skunk?",
  description:
    "Skunk smell inside but no skunk in sight? Rule out a gas leak first, then find whether a skunk is under the house or a drain is venting sewer gas.",
  h1: "Skunk smell in your house: rule out gas, then find the skunk",
  targets: ["skunk smell in house", "house smells like skunk at night", "skunk smell but no skunk"],
  quickAnswer:
    "The odorant added to natural gas and propane smells skunky to many people, so treat a skunk smell indoors as possible gas until you've ruled that out. If it's strongest near a gas appliance or the meter, or it showed up suddenly and doesn't fade, leave and call the gas utility from outside. If it's strongest outdoors, near the foundation or crawlspace vents, and worse at night, it's very likely a real skunk that sprayed under or near the house. A skunk smell that hangs around one drain or an unused bathroom is often sewer gas from a dried-out trap.",
  urgency: "urgent",
  safety: GAS_SAFETY,
  causes: [
    {
      cause: "skunk-nearby",
      likelihood: "most common",
      note: "Most indoor skunk smell comes from a skunk that sprayed under a deck, porch, or crawlspace, or right outside a window or vent.",
    },
    {
      cause: "natural-gas-leak",
      likelihood: "common",
      note: "Listed high because the consequences are serious, not because it's usual. Mercaptan is often described as skunky.",
    },
    {
      cause: "dry-p-trap",
      likelihood: "common",
      note: "Sewer gas from an unused drain can read as skunk to some noses, especially in a basement or guest bath.",
    },
    {
      cause: "propane-leak",
      likelihood: "less common",
      note: "Only if the home or an appliance runs on propane.",
    },
    {
      cause: "outdoor-gas-source",
      likelihood: "less common",
      note: "A skunky smell that's strongest at the meter or the street is a utility call, not a wildlife call.",
    },
    { cause: "sewer-vent-blocked", likelihood: "rare", note: "If drains also gurgle." },
  ],
  compare: {
    headers: ["Clue", "Points to", "Do this"],
    rows: [
      [
        "Strongest near the stove, furnace, water heater, or meter",
        "Gas leak",
        "Leave and call the utility",
      ],
      ["Hissing near a gas line or appliance", "Gas leak", "Leave and call the utility"],
      [
        "Strongest outside, at night, near deck or crawlspace vents",
        "Real skunk",
        "Wildlife control",
      ],
      [
        "Pet came in smelling; scratching or digging at the foundation",
        "Real skunk",
        "Wash the pet, then check under the house",
      ],
      ["Only near one drain or an unused bathroom", "Dry drain trap", "Run water in the drain"],
      ["Started with nearby digging or street work", "Outdoor gas", "Call the utility"],
    ],
  },
  decision: [
    {
      question:
        "Is it strongest near a gas appliance, gas line, or meter — or did it come on suddenly and strongly indoors?",
      yes: "Treat it as gas: leave and call from outside.",
      href: "/smells/gas/",
      no: "Keep going.",
    },
    {
      question:
        "Is it stronger outside than inside, especially at night or near the foundation, deck, or crawlspace vents?",
      yes: "A skunk is likely living or spraying near the house. Ventilate and call wildlife control.",
      no: "Keep going.",
    },
    {
      question: "Is it concentrated at one drain, a floor drain, or a rarely used bathroom?",
      yes: "Refill the trap with water and see if it clears within a few hours.",
      href: "/smells/sewage/",
      no: "Keep going.",
    },
    {
      question: "Did the gas utility already check and find nothing?",
      yes: "Work through the other sulfur-type sources.",
      href: "/smells/gas-but-no-leak/",
    },
  ],
  checks: [
    {
      title: "Decide gas or not, from where it's strongest",
      how: "Without flipping switches, note whether the smell is stronger at the kitchen, utility room, or meter, or stronger at windows, doors, and floor vents on one side of the house. If you're unsure, don't experiment — leave and call the utility.",
    },
    {
      title: "Walk the outside perimeter",
      how: "In daylight, walk the foundation, the deck and porch edges, the crawlspace vents, and around any shed. Look for fresh digging, a hole under a slab or step, or a spot where the smell is overwhelming.",
    },
    {
      title: "Check the pets",
      how: "A dog or cat that got sprayed carries the smell through the house on everything it touches. Smell the pet's head and neck first — that's where spray usually lands.",
    },
    {
      title: "Run water in every drain",
      how: "Run sinks, tubs, and showers for 30 seconds each, and pour a bucket of water into basement floor drains. A smell that disappears within a few hours was a dry trap.",
    },
  ],
  sections: [
    {
      heading: "Getting skunk smell out of the house",
      body: [
        "Skunk spray is oily and clings to fabric, so the plan is to clear the air and then wash what absorbed it.",
        "First, open windows on opposite sides of the house and run box fans pointing outward to push air through. If the smell is coming in through crawlspace or foundation vents, run the HVAC fan only after the outside source is gone — otherwise you're pulling more of it in. Wash curtains, bedding, throws, and clothes that were in the affected rooms. Wipe hard surfaces near where it entered. Replace the HVAC filter once the source is gone, since it holds the smell.",
        "Masking sprays don't work well against skunk. A smell that lingers in a room after a week usually means a fabric or carpet in there is still holding it.",
      ],
    },
    {
      heading: "Why it smells like skunk at night",
      body: [
        "Skunks are mostly active from dusk to dawn, so a smell that shows up in the evening and fades by midday fits a skunk that's living nearby or passing through. A closed-up house at night can also concentrate a smell that slipped in earlier. A smell that's just as strong at noon, and strongest indoors, points away from wildlife and back toward gas or a drain.",
      ],
    },
  ],
  diyStops: [
    "Any chance it's gas: leaving and calling is the only DIY step.",
    "A skunk living under the deck, porch, shed, or in the crawlspace — don't trap or corner it yourself.",
    "Smell that persists after refilling drain traps — a vent or sewer line may be involved.",
  ],
  whoToCall: [
    { trade: "gas-utility", when: "Any doubt at all that it's gas. Call from outside." },
    { trade: "propane-supplier", when: "Your home or appliances run on propane." },
    {
      trade: "wildlife-control",
      when: "A skunk is under the house, deck, or shed. They remove it and seal the entry.",
    },
    {
      trade: "plumber",
      when: "The smell comes from drains and refilling the traps didn't fix it.",
    },
  ],
  faq: [
    {
      q: "Can a gas leak smell like skunk?",
      a: "Yes. Natural gas and propane are given an odorant so leaks are noticeable, and many people describe it as skunky rather than rotten eggs. If you're not sure, assume gas, leave, and call from outside.",
    },
    {
      q: "Why does my house smell like skunk but there's no skunk?",
      a: "A skunk may have sprayed under the house or nearby without being seen, or the smell is gas or sewer gas from a dry drain trap. Where it's strongest tells you which: outside and at night suggests a skunk, near gas appliances suggests gas, at a drain suggests the trap.",
    },
    {
      q: "How long does skunk smell last in a house?",
      a: "It depends on how close the spray was and what absorbed it. Air that's ventilated clears fastest; fabrics and carpets hold it until they're washed or cleaned. If the smell keeps coming back, the skunk is probably still nearby.",
    },
    {
      q: "Should I run the AC or furnace fan to clear it?",
      a: "Only once the source outside is gone and you've ruled out gas. Running the fan while a skunk is under the house can pull the smell in through gaps and ducts, and the filter will hold onto it — change it afterward.",
    },
  ],
  related: [
    { title: "I smell gas", href: "/smells/gas/", hint: "What to do right now" },
    {
      title: "Gas smell but no leak found",
      href: "/smells/gas-but-no-leak/",
      hint: "After the utility checks",
    },
    { title: "House smells like sewage", href: "/smells/sewage/", hint: "Drains, traps, vents" },
    {
      title: "House smells like rotten eggs",
      href: "/smells/rotten-eggs/",
      hint: "Other sulfur sources",
    },
  ],
  sources: [SOURCES.agaGas, SOURCES.propaneSafety, SOURCES.cpscCo],
  diagnose: { family: "skunk" },
  updated: "2026-10-02",
};
