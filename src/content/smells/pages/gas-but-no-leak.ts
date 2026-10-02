import { GAS_SAFETY, SOURCES } from "../reference";
import type { SmellPage } from "../types";

// After-the-utility page. Assumes a no-leak visit already happened; organized
// as an elimination order. Distinct from /smells/rotten-eggs/ (first-contact
// "what is this?") and /smells/gas/ (act now).
export const gasButNoLeak: SmellPage = {
  path: "/smells/gas-but-no-leak/",
  family: "gas",
  label: "Gas smell, no leak",
  title: "House Smells Like Gas but No Leak? What It Is",
  description:
    "The gas company found no leak but you still smell gas? What utilities typically check, what they don't, and the elimination order for the real source.",
  h1: "House smells like gas, but the utility found no leak",
  targets: [
    "house smells like gas but no leak",
    "smell gas but no leak",
    "gas smell but gas company found nothing",
  ],
  quickAnswer:
    "If the utility tested and found no gas, the likeliest culprit is sewer gas: hydrogen sulfide from a dry drain trap or drain slime smells almost the same as the gas odorant. Next is a water heater reacting with its anode rod, which only affects hot water. Work through the list in order: refill traps, do the hot-versus-cold water test, check outside, then batteries, animals, and new materials. If the smell comes back stronger or near a gas appliance, call the utility again — a no-leak result is for that moment only.",
  urgency: "soon",
  safety: {
    title: "Call the utility again if…",
    when: [
      "The smell returns stronger, or shows up near a gas appliance, the meter, or a line",
      "You hear hissing, or anyone feels dizzy or unwell",
      "It's a different smell or a different place than what was checked",
    ],
    actions: [
      ...GAS_SAFETY.actions.slice(0, 2),
      "Call your gas utility or 911 from outside and tell them it's a repeat call.",
    ],
    note: GAS_SAFETY.note,
  },
  causes: [
    {
      cause: "dry-p-trap",
      likelihood: "most common",
      note: "Top suspect after a no-leak visit — sewer gas is the classic gas impostor.",
    },
    {
      cause: "drain-biofilm",
      likelihood: "most common",
      note: "Sulfur smell right at one sink or shower drain.",
    },
    {
      cause: "water-heater-anode",
      likelihood: "common",
      note: "Only when hot water runs, at every hot tap.",
    },
    {
      cause: "outdoor-gas-source",
      likelihood: "common",
      note: "Drifts in from outside — your utility may not have checked a neighbor's line or the street.",
    },
    { cause: "sewer-vent-blocked", likelihood: "common", note: "If drains gurgle." },
    {
      cause: "well-water-sulfur",
      likelihood: "less common",
      note: "Private wells: hot and cold both smell.",
    },
    {
      cause: "dead-animal",
      likelihood: "less common",
      note: "Rotten-sweet, at one wall or ceiling, fades over weeks.",
    },
    { cause: "battery-overcharge", likelihood: "rare", note: "Near a battery backup or charger." },
    {
      cause: "new-materials-voc",
      likelihood: "rare",
      note: "A chemical smell some people read as gas, after paint, flooring, or furniture.",
    },
  ],
  compare: {
    headers: ["If the smell…", "Check next"],
    rows: [
      ["Is gone after running water everywhere", "It was a dry trap — done"],
      ["Comes from the drain, not the water", "Clean drain and overflow"],
      ["Is only in hot water", "Water heater anode"],
      [
        "Is stronger outdoors or with windows open",
        "Outside source — call the utility about outdoors",
      ],
      ["Comes with gurgling drains", "Plumbing vent"],
      ["Is rotten-sweet at one wall", "Dead animal"],
      ["Started after a renovation or delivery", "New materials off-gassing"],
    ],
  },
  decision: [
    {
      question: "Is the smell back, stronger, or near a gas appliance?",
      yes: "Call the utility again from outside. Don't work this list.",
      no: "Start the elimination order.",
    },
    {
      question: "After refilling every trap, is the smell gone within a few hours?",
      yes: "Dry trap. Keep water in rarely used drains.",
      href: "/smells/sewage/",
      no: "Keep going.",
    },
    {
      question: "Does only hot water smell (two-glass test)?",
      yes: "Water heater. A plumber can swap the anode rod.",
      href: "/smells/rotten-eggs/",
      no: "Keep going.",
    },
    {
      question: "Is it stronger outside the house?",
      yes: "Report it to the utility as an outdoor odor.",
      no: "Check batteries, look for rodents or a dead animal, and think about recent renovations.",
    },
  ],
  checks: [
    {
      title: "Ask what the utility checked",
      how: "Utility technicians typically test the air, the meter, the service line, and accessible appliance connections. Ask whether they checked every gas appliance and whether they checked outside. Note the date and time of the visit.",
    },
    {
      title: "Refill every trap",
      how: "Run each sink, tub, and shower for 30 seconds, flush every toilet, and pour water into floor drains. Then wait a few hours with the house closed up.",
    },
    {
      title: "Two-glass water test",
      how: "Hot glass and cold glass, smelled away from the sink. Hot only → water heater. Both → water supply. Neither → drains.",
    },
    {
      title: "Smell log",
      how: "For a few days, note when and where you smell it: morning or night, after showers, with the HVAC on, windy days. Patterns point at the source — and help the utility or a plumber if you call back.",
    },
    {
      title: "Outside walk",
      how: "Walk the perimeter, the meter area, and the street. A stronger smell outside means an outdoor source.",
    },
  ],
  sections: [
    {
      heading: "Why a no-leak visit doesn't end the question",
      body: [
        "The technician tested what was there at that moment. Intermittent sources — a trap that dries out every few weeks, a vent that misbehaves on windy days, a water heater that smells after sitting overnight — may not be present during the visit. That's why a smell log helps. It's also why a returning or stronger smell is a reason to call again, not to second-guess yourself.",
      ],
    },
    {
      heading: "If only you can smell it",
      body: [
        "If nobody else in the home smells it, the utility found nothing, and the smell follows you from room to room, mention it to a clinician. Smell perception can change for many reasons. This isn't something to diagnose online — just don't rule it out.",
      ],
    },
  ],
  diyStops: [
    "The smell returns stronger or near a gas appliance — that's a utility call, not DIY.",
    "Anode replacement, vent clearing, and camera inspections — plumber work.",
    "An overheating or swollen battery.",
  ],
  whoToCall: [
    { trade: "gas-utility", when: "The smell comes back, gets stronger, or is outdoors." },
    { trade: "plumber", when: "Traps keep drying out, drains gurgle, or hot water smells." },
    { trade: "sewer-specialist", when: "A smoke test to find where sewer gas is escaping." },
    { trade: "pest-control", when: "You suspect a dead animal in a wall or ceiling." },
  ],
  faq: [
    {
      q: "Can sewer gas smell like natural gas?",
      a: "Yes. Sewer gas contains hydrogen sulfide, and the odorant in natural gas is another sulfur compound. Most people can't tell them apart by smell, which is why a dry drain trap is the most common answer after a no-leak visit.",
    },
    {
      q: "The gas company found nothing, but I still smell it. Should I call again?",
      a: "Yes, if it returns stronger, appears near an appliance, or you hear hissing. Tell them it's a repeat call and when you notice it most.",
    },
    {
      q: "Why do I smell gas only at night or in the morning?",
      a: "Closed-up houses concentrate smells. Traps also dry out slowly, and water heaters smell after sitting. A log of when it happens usually narrows it down.",
    },
    {
      q: "Could my water heater smell like gas even if it's electric?",
      a: "Yes. The rotten-egg smell from the anode rod reaction comes from the water, not from gas, so electric heaters can do it too.",
    },
  ],
  related: [
    { title: "I smell gas — what to do now", href: "/smells/gas/", hint: "If it comes back" },
    {
      title: "House smells like rotten eggs",
      href: "/smells/rotten-eggs/",
      hint: "Hot vs cold water test",
    },
    { title: "House smells like sewage", href: "/smells/sewage/", hint: "Traps, vents, toilets" },
    { title: "Skunk smell in the house", href: "/smells/skunk/", hint: "Another gas look-alike" },
  ],
  sources: [SOURCES.agaGas, SOURCES.cpscCo],
  diagnose: { family: "gas" },
  updated: "2026-10-02",
};
