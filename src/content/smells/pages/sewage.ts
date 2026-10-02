import { SOURCES } from "../reference";
import type { SmellPage } from "../types";

export const sewage: SmellPage = {
  path: "/smells/sewage/",
  family: "sewage",
  label: "Sewage smell",
  title: "House Smells Like Sewage? Find the Leak in Order",
  description:
    "Sewer smell in the house or bathroom: the order to check traps, drains, toilet seals, vents, and lines — and when sewer gas means ventilate and get out.",
  h1: "Sewer smell in your house: where it's coming from and how to stop it",
  targets: ["my house smells like sewage", "sewer smell in house", "sewer smell in bathroom"],
  quickAnswer:
    "Sewer smell means gas from the drain system is getting past a seal it shouldn't. Most of the time the cheapest seal has failed: a drain trap that dried out, slime in a sink drain, or the wax ring under a toilet. Work in that order — refill every trap, clean the smelly drain, check the toilet base — before suspecting vents or a broken sewer line. A plumber or a camera or smoke test finds what's left.",
  urgency: "soon",
  safety: {
    title: "When sewer gas means leave first",
    when: [
      "The smell is overpowering, or people in the home feel dizzy, nauseous, or get headaches",
      "Sewage is backing up into tubs, floor drains, or the basement",
      "It smells more like rotten eggs near a gas appliance — that could be gas, not sewer",
    ],
    actions: [
      "Open windows and doors, and get people and pets out of the area.",
      "If anyone feels unwell, get fresh air and call 911 if it's severe.",
      "If it might be gas, follow the gas steps: leave and call the utility from outside.",
      "Stop running water if drains are backing up, and call a plumber.",
      "Never climb into a septic tank, sewer manhole, or pit — the gases inside can overcome a person quickly.",
    ],
    note: "Carbon monoxide has no smell. A sewer smell can't tell you about CO — keep CO alarms working.",
  },
  causes: [
    {
      cause: "dry-p-trap",
      likelihood: "most common",
      note: "Guest baths, basement floor drains, and unused showers are the classic spots.",
    },
    {
      cause: "drain-biofilm",
      likelihood: "most common",
      note: "If the smell sits right at one sink or shower drain.",
    },
    {
      cause: "toilet-wax-ring",
      likelihood: "common",
      note: "Smell at the toilet base, sometimes a rocking toilet or stained floor.",
    },
    {
      cause: "sewer-vent-blocked",
      likelihood: "common",
      note: "Gurgling drains and smell in several rooms.",
    },
    {
      cause: "sump-ejector-pit",
      likelihood: "common",
      note: "Basement bathrooms that drain into a pumped pit.",
    },
    {
      cause: "front-load-washer",
      likelihood: "less common",
      note: "Laundry-room sewage smell is often the washer or its standpipe.",
    },
    {
      cause: "sewer-line-crack",
      likelihood: "less common",
      note: "When everything above checks out and the smell persists.",
    },
    {
      cause: "septic-problem",
      likelihood: "less common",
      note: "Septic homes: outdoor smell, soggy ground, slow drains house-wide.",
    },
  ],
  compare: {
    headers: ["Clue", "Points to", "Fix level"],
    rows: [
      ["Unused bathroom or floor drain; gone after running water", "Dry trap", "DIY, 5 minutes"],
      ["Strongest with your nose at one drain or overflow", "Drain slime", "DIY cleaning"],
      ["At the toilet base; toilet rocks or floor is stained", "Wax ring", "DIY or plumber"],
      ["Drains gurgle when a toilet flushes", "Blocked vent", "Plumber"],
      ["Basement, near a lidded pit", "Ejector or sump pit", "Plumber"],
      ["Persistent everywhere; damp spots along pipes", "Cracked line", "Camera or smoke test"],
      ["Outside, soggy ground over the tank or field", "Septic", "Septic contractor"],
    ],
  },
  decision: [
    {
      question: "Does running water in every fixture make it go away within a few hours?",
      yes: "Dry trap. Run water in rarely used drains every couple of weeks.",
      no: "Keep going.",
    },
    {
      question: "Is it strongest at one drain or the sink overflow hole?",
      yes: "Clean the stopper, drain, and overflow. Enzyme cleaner for buildup.",
      no: "Keep going.",
    },
    {
      question: "Is it strongest at a toilet base?",
      yes: "Check whether the toilet rocks, then replace the wax ring.",
      no: "Keep going.",
    },
    {
      question: "Do drains gurgle, or do toilet water levels change by themselves?",
      yes: "A vent is likely blocked — call a plumber.",
      no: "Ask a plumber for a camera inspection or smoke test of the lines.",
    },
  ],
  checks: [
    {
      title: "Refill every trap in the house",
      how: "Run each sink, tub, and shower for 30 seconds, flush every toilet, and pour a bucket of water into basement floor drains and laundry standpipes.",
    },
    {
      title: "Find the strongest spot",
      how: "After refilling, walk the house. Smell at drain openings, at toilet bases, and under sinks. The source is usually within a few feet of where it's strongest.",
    },
    {
      title: "Toilet check",
      how: "Gently push the toilet side to side. Any rocking, a stained or soft floor, or water at the base after flushing points to a failed seal.",
    },
    {
      title: "Listen for gurgling",
      how: "Flush the toilet and listen at the nearest sink and tub. Gurgling or bubbling means the drain system isn't venting properly.",
    },
    {
      title: "Basement pits",
      how: "If there's a sewage ejector pit, confirm the lid is bolted down with its seal intact. Don't open it.",
    },
  ],
  sections: [
    {
      heading: "Sewer smell in the bathroom only",
      body: [
        "Bathrooms concentrate the cheap failures: a shower trap that dried out, a sink overflow full of slime, a toilet seal that gave up. Check in that order. If a bathroom smells right after someone showers in the next room, suspect a vent problem, because fixtures sharing a drain can pull each other's traps dry.",
      ],
    },
    {
      heading: "Why vinegar and baking soda only sometimes work",
      body: [
        "They can loosen light buildup in a drain, so the drain-slime cause sometimes improves. They do nothing for a dry trap (water does), a failed toilet seal, a blocked vent, or a cracked line. If the smell returns within days, move on to the next check.",
      ],
    },
  ],
  diyStops: [
    "Sewage backing up anywhere in the house.",
    "Gurgling drains or a suspected vent blockage — roof work is a plumber job.",
    "The toilet flange is cracked or the floor around it is soft.",
    "Traps, drains, and toilet are ruled out and it still smells — it needs a camera or smoke test.",
    "Anything involving opening a septic tank or ejector pit.",
  ],
  whoToCall: [
    { trade: "plumber", when: "Toilet seals, vents, ejector pumps, trap primers, and backups." },
    {
      trade: "sewer-specialist",
      when: "Camera inspection or smoke test to find a hidden line break.",
    },
    {
      trade: "water-damage",
      when: "Sewage soaked flooring or drywall — contaminated materials need proper removal.",
    },
    { trade: "gas-utility", when: "It might be gas: a rotten-egg smell near a gas appliance." },
  ],
  faq: [
    {
      q: "Why does my house smell like sewage all of a sudden?",
      a: "Usually a trap dried out — after a trip, or in a bathroom nobody uses — or something changed in the drains, like a clog that's starting to siphon traps. Refill every trap first; it's the cheapest test.",
    },
    {
      q: "Is sewer gas in the house dangerous?",
      a: "A faint whiff from a dry trap is mainly a nuisance and a sign of a broken seal. A strong smell, or people feeling unwell, is different: ventilate, get out, and call for help. Never enter a septic tank or pit.",
    },
    {
      q: "Why does my basement floor drain smell like sewage?",
      a: "Floor drains are rarely used, so their trap water evaporates. Pour in a bucket of water. If it keeps drying out, a plumber can install a trap primer or a trap-seal insert.",
    },
    {
      q: "Can a plumber find a sewer smell?",
      a: "Yes. Beyond checking traps and seals, plumbers and drain specialists use cameras inside the lines and smoke tests, which push harmless smoke into the system so it shows up wherever gas escapes.",
    },
  ],
  related: [
    {
      title: "House smells like rotten eggs",
      href: "/smells/rotten-eggs/",
      hint: "If it's more sulfur than sewer",
    },
    {
      title: "Smells like gas but no leak found",
      href: "/smells/gas-but-no-leak/",
      hint: "Sewer gas is the usual answer",
    },
    {
      title: "Musty smell in the basement",
      href: "/smells/musty/basement/",
      hint: "Damp, not sewer",
    },
    { title: "All smells", href: "/smells/", hint: "Browse by smell" },
  ],
  sources: [SOURCES.cpscCo],
  diagnose: { family: "sewage" },
  updated: "2026-10-02",
};
