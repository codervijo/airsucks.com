import { GAS_SAFETY, SOURCES } from "../reference";
import type { SmellPage } from "../types";

// "What is this smell?" page. Gas is ruled out first (safety block), then the
// everyday sulfur sources. Distinct from /smells/gas/ (act-now) and
// /smells/gas-but-no-leak/ (utility already cleared it).
export const rottenEggs: SmellPage = {
  path: "/smells/rotten-eggs/",
  family: "rotten-egg",
  label: "Rotten egg smell",
  title: "House Smells Like Rotten Eggs? Causes & What to Do",
  description:
    "A rotten-egg or sulfur smell at home: rule out a gas leak first, then use the hot-vs-cold water test and drain checks to find the real source fast.",
  h1: "Why your house smells like rotten eggs (and how to find it)",
  targets: ["house smells like rotten eggs", "rotten egg smell in house", "sulfur smell in house"],
  quickAnswer:
    "Rotten eggs means sulfur: either the odorant added to natural gas and propane, or hydrogen sulfide from drains, water, or bacteria. Treat it as gas until you've ruled that out. If it's strong, sudden, or near a gas appliance, leave and call from outside. If it's faint and tied to water — one drain, or only the hot water — it's almost always a dried-out drain trap or the water heater. A two-glass test (hot vs cold) settles the water question in a minute.",
  urgency: "urgent",
  safety: GAS_SAFETY,
  causes: [
    {
      cause: "natural-gas-leak",
      likelihood: "common",
      note: "Not the most frequent cause, but always the first to rule out. The odorant added to gas is designed to smell exactly like this.",
    },
    {
      cause: "dry-p-trap",
      likelihood: "most common",
      note: "The everyday answer when the smell is near a rarely used sink, shower, or floor drain.",
    },
    {
      cause: "water-heater-anode",
      likelihood: "most common",
      note: "If only the hot water smells, this is almost certainly it.",
    },
    {
      cause: "drain-biofilm",
      likelihood: "common",
      note: "Smell sits right at one drain or the sink overflow hole.",
    },
    {
      cause: "well-water-sulfur",
      likelihood: "common",
      note: "Only on private wells — and both hot and cold water smell.",
    },
    { cause: "sewer-vent-blocked", likelihood: "less common", note: "Comes with gurgling drains." },
    {
      cause: "propane-leak",
      likelihood: "less common",
      note: "Propane homes only; collects low to the floor.",
    },
    {
      cause: "dead-animal",
      likelihood: "less common",
      note: "More rotten-sweet than pure sulfur, concentrated at one wall.",
    },
    {
      cause: "battery-overcharge",
      likelihood: "rare",
      note: "Near a UPS, sump-backup battery, or charger in the garage.",
    },
  ],
  compare: {
    headers: ["Where / when you smell it", "Likely source", "Urgency"],
    rows: [
      [
        "Near the stove, furnace, water heater, or meter — strong or sudden",
        "Gas leak",
        "Leave and call now",
      ],
      ["Only from hot water, at every hot tap", "Water heater", "Routine"],
      ["Hot and cold water, every tap, private well", "Well water sulfur", "Routine"],
      ["One unused bathroom or basement floor drain", "Dry drain trap", "Routine"],
      ["Right at one sink drain or overflow hole", "Drain slime", "Routine"],
      ["Near a battery backup or charger", "Overcharging battery", "Urgent"],
      ["One wall, rotten-sweet, flies around", "Dead animal", "Routine"],
    ],
  },
  decision: [
    {
      question: "Is it strong, sudden, near a gas appliance or line — or is anyone feeling unwell?",
      yes: "Stop here. Leave and call your gas utility or 911 from outside.",
      href: "/smells/gas/",
      no: "Keep going, but stop and leave if it gets stronger.",
    },
    {
      question: "Does it only show up when water runs?",
      yes: "Do the two-glass test below to split hot water, cold water, and drains.",
      no: "Keep going.",
    },
    {
      question: "Is it strongest at one drain or in a room nobody uses?",
      yes: "Refill the trap and clean the drain — see the sewage page if it persists.",
      href: "/smells/sewage/",
      no: "Keep going.",
    },
    {
      question: "Did the gas utility already check and find nothing?",
      yes: "Work the elimination list for cleared homes.",
      href: "/smells/gas-but-no-leak/",
    },
  ],
  checks: [
    {
      title: "Rule out gas first",
      how: "If the smell is strong, sudden, or near anything that burns gas, don't investigate — follow the safety steps above. When unsure, report it — gas-safety guidance is to always call rather than assume.",
    },
    {
      title: "Two-glass test (hot vs cold)",
      how: "Fill one glass from the hot tap and one from the cold tap. Carry them away from the sink and smell each. Hot only → water heater. Both → the water supply (common on wells). Neither, but the sink smells → the drain, not the water.",
    },
    {
      title: "Refill every trap",
      how: "Run water for 30 seconds in every sink, tub, and shower, flush rarely used toilets, and pour a bucket of water into basement floor drains. Give it a few hours.",
    },
    {
      title: "Sniff the drain and overflow separately",
      how: "Put your nose at the drain opening, then at the overflow hole under the sink rim. Slime in either one smells like sulfur or sewage without any sewer problem.",
    },
    {
      title: "Check batteries and the garage",
      how: "Look for lead-acid batteries — UPS units, sump-pump backups, golf carts, or a car on a charger. A hot or swollen case with a sulfur smell means unplug the charger if it's safe, ventilate, and keep away.",
    },
  ],
  sections: [
    {
      heading: "Why gas and drains smell the same",
      body: [
        "Natural gas and propane are odorized with mercaptan, a sulfur compound chosen because it smells like rotten eggs. Drains, sewers, and some water supplies produce hydrogen sulfide, another sulfur compound with nearly the same smell. Your nose can't reliably tell them apart. That's why location and timing — near a gas appliance or near water — matter more than the smell itself.",
      ],
    },
    {
      heading: "Fixing a smelly water heater",
      body: [
        "The smell comes from bacteria in the tank reacting with the anode rod, a metal rod that protects the tank from corrosion. Flushing the tank helps for a while. The lasting fix is usually swapping the standard magnesium anode for an aluminum-zinc or powered anode, and sometimes sanitizing the tank. Because it means working on a pressurized tank connected to gas or 240V power, most people have a plumber do it. Don't remove the anode without replacing it — it protects the tank.",
      ],
    },
  ],
  diyStops: [
    "Any chance it's gas: leaving and calling is the only DIY step.",
    "Anode rod replacement or tank sanitizing — a plumber job for most people.",
    "Refilled traps and cleaned drains didn't help within a day.",
    "A hot, swollen, or hissing battery.",
  ],
  whoToCall: [
    { trade: "gas-utility", when: "Any time you suspect gas. Call from outside the house." },
    { trade: "propane-supplier", when: "You heat or cook with propane and suspect a leak." },
    { trade: "plumber", when: "Hot water smells, traps keep drying out, or drains gurgle." },
    {
      trade: "pest-control",
      when: "The smell is rotten-sweet at one wall and you suspect a dead animal.",
    },
    { trade: "electrician", when: "A battery backup or charger is overheating." },
  ],
  faq: [
    {
      q: "Should I call the gas company for a rotten egg smell?",
      a: "Yes, if there's any chance it's gas — especially if it's strong, sudden, or near a gas appliance. Call from outside. If it turns out to be a drain or the water heater, nothing is lost.",
    },
    {
      q: "Why does only my hot water smell like rotten eggs?",
      a: "Bacteria in the water heater react with the anode rod and make hydrogen sulfide. Flushing the tank helps temporarily. Replacing the anode with a different type usually fixes it.",
    },
    {
      q: "Why does my bathroom smell like rotten eggs?",
      a: "Most often a dry trap in a shower, tub, or sink that isn't used, or slime in the drain and overflow. Run the water and clean the drain. If it stays, check the toilet seal and the vent.",
    },
    {
      q: "Can a rotten egg smell come and go?",
      a: "Yes. Dry traps refill when someone uses the fixture, water heater smells follow hot-water use, and blocked vents depend on wind and flushing. A gas smell that comes and goes still needs a call to the utility.",
    },
    {
      q: "Is there a gas detector I can use?",
      a: "Plug-in natural gas and propane alarms exist and can be a useful backup, especially for people with a weak sense of smell. They don't replace calling the utility when you smell gas.",
    },
  ],
  related: [
    { title: "I smell gas — what to do now", href: "/smells/gas/", hint: "Act-now steps" },
    {
      title: "Smells like gas but the utility found no leak",
      href: "/smells/gas-but-no-leak/",
      hint: "Elimination order",
    },
    { title: "House smells like sewage", href: "/smells/sewage/", hint: "Traps, vents, toilets" },
    { title: "Skunk smell in the house", href: "/smells/skunk/", hint: "Also a gas look-alike" },
  ],
  sources: [SOURCES.agaGas, SOURCES.cpscCo],
  diagnose: { family: "rotten-egg" },
  updated: "2026-10-02",
};
