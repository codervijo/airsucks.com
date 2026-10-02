import { SOURCES } from "../reference";
import type { SmellPage } from "../types";

export const mustyBasement: SmellPage = {
  path: "/smells/musty/basement/",
  family: "musty",
  label: "In the basement",
  title: "Musty Smell in Basement: Causes & How to Get Rid of It",
  description:
    "Basement smells musty? Find out if water is coming through the walls or condensing on them, what else down there smells, and how to dry it out for good.",
  h1: "Musty basement smell: what's causing it and how to get rid of it",
  targets: [
    "musty smell in basement",
    "how to get rid of musty smell in basement",
    "basement smells musty",
  ],
  quickAnswer:
    "Basements smell musty because they're below ground: concrete wicks groundwater in, and in summer, humid air condenses on the cool walls and floor. Cardboard, carpet, and anything stored on the slab soaks that up and grows mildew. Get the humidity down with a dehumidifier, get stored stuff off the floor, and do the plastic-sheet test. It tells you whether water is coming through the concrete (a drainage problem) or condensing on it (a humidity problem). They have different fixes.",
  urgency: "soon",
  causes: [
    {
      cause: "damp-basement",
      likelihood: "most common",
      note: "Seepage and condensation on below-grade walls is the default explanation for a musty basement.",
    },
    {
      cause: "high-humidity",
      likelihood: "most common",
      note: "Basements often sit well above 60% humidity in summer even with no leaks at all.",
    },
    {
      cause: "stored-items",
      likelihood: "common",
      note: "Cardboard boxes, old books, and upholstered furniture on the slab are mildew sponges.",
    },
    {
      cause: "sump-ejector-pit",
      likelihood: "common",
      note: "A dry or stagnant sump pit, or a poorly sealed ejector lid, smells musty to sewer-ish.",
    },
    {
      cause: "wet-carpet-pad",
      likelihood: "common",
      note: "Carpet laid directly on a slab stays damp from below — finished basements are prone to it.",
    },
    {
      cause: "surface-mold",
      likelihood: "less common",
      note: "On drywall, wood framing, and the backs of stored items, rather than on bare concrete.",
    },
    {
      cause: "dry-p-trap",
      likelihood: "less common",
      note: "A basement floor drain that has dried out — more sewer than musty.",
    },
    {
      cause: "front-load-washer",
      likelihood: "less common",
      note: "If the laundry lives down there.",
    },
  ],
  compare: {
    headers: ["What you see", "What it means", "Fix direction"],
    rows: [
      [
        "Damp under the plastic-sheet test",
        "Water moving through the concrete",
        "Gutters, grading, drainage, waterproofing",
      ],
      [
        "Damp on top of the plastic sheet",
        "Humid air condensing on cold concrete",
        "Dehumidify, insulate, air-seal",
      ],
      [
        "White chalky crust on the walls",
        "Minerals left by water moving through",
        "Same as seepage — fix the water",
      ],
      [
        "Water lines or puddles after rain",
        "Active leaking",
        "Downspouts first, then a waterproofing contractor",
      ],
      ["Smell centered on a pit with a lid", "Sump or ejector pit", "Reseal or refill it"],
    ],
  },
  decision: [
    {
      question: "Is basement humidity over 60% on a hygrometer?",
      yes: "Run a dehumidifier sized for the space, set to 50%, draining to a floor drain or pump. Most of the smell often goes with it.",
      no: "Humidity alone isn't it. Keep going.",
    },
    {
      question: "After 48 hours, is there moisture under the taped plastic sheet?",
      yes: "Water is coming through the concrete. Start outside: downspouts, gutters, grading.",
      no: "If moisture is on top of the sheet, it's condensation — dehumidify and stop warm, humid air reaching cold surfaces.",
    },
    {
      question: "Is the smell sewer-like, or centered on a drain or pit?",
      yes: "Check the floor drain trap and the pit lids.",
      href: "/smells/sewage/",
      no: "Keep going.",
    },
    {
      question: "Is the basement finished with carpet or drywall over the concrete?",
      yes: "Check the carpet pad and the bottom of the drywall. Finished surfaces hide the moisture.",
      no: "Clear stored items off the floor and re-check in a week.",
    },
  ],
  checks: [
    {
      title: "Plastic-sheet test (48 hours)",
      how: "Tape a 1-foot square of plastic sheet tightly to the wall and another to the floor. Moisture underneath means water is wicking through; moisture on top means condensation.",
    },
    {
      title: "Walk the outside after rain",
      how: "Check that downspouts discharge several feet from the foundation, gutters aren't overflowing, and soil slopes away from the house.",
    },
    {
      title: "Hygrometer for a week",
      how: "Leave a hygrometer in the basement and note the readings in the morning and evening. Above 60% means humidity control is part of the fix (EPA guidance).",
    },
    {
      title: "Inventory the floor",
      how: "Look at what's sitting directly on the slab: cardboard, rugs, furniture, paper. Smell the bottoms.",
    },
    {
      title: "Check the pits and drains",
      how: "Pour a bucket of water into the floor drain. Check that the sump pit isn't bone dry and the ejector lid is sealed and bolted.",
    },
  ],
  sections: [
    {
      heading: "How to get rid of the musty smell in a basement",
      body: [
        "Work from the outside in. Outside: downspout extensions and grading are the cheapest fix and often remove most of the water. Inside: a dehumidifier held around 50%, with storage moved onto shelves or into plastic bins. Then clean what grew: scrub hard surfaces with detergent and water and dry them (EPA); discard moldy cardboard and carpet pad.",
        "If the plastic-sheet test still shows water coming through after the outside fixes, or water shows up after every storm, call a waterproofing contractor. Interior drainage, sump systems, and wall treatments are their work. Painting a sealer over damp walls on its own rarely stops seepage.",
      ],
    },
  ],
  diyStops: [
    "Standing water or water that appears after every rain.",
    "Cracks that leak, or foundation walls that bow or shift.",
    "Mold over more than about 10 square feet, especially on finished walls (EPA's DIY threshold).",
    "A sewage ejector pit that needs opening or pump work.",
  ],
  whoToCall: [
    {
      trade: "waterproofing",
      when: "Water comes through the walls or floor, or the sump system can't keep up.",
    },
    { trade: "plumber", when: "A floor drain, sump, or ejector pit is the source." },
    { trade: "mold-remediation", when: "Large growth on finished walls or framing." },
    {
      trade: "home-inspector",
      when: "You want an independent read before paying for waterproofing.",
    },
  ],
  faq: [
    {
      q: "Is a musty basement normal?",
      a: "It's common, but it's not something to live with. It means moisture, and moisture is what lets mold grow on anything stored or finished down there. Most basements can be kept smell-free with drainage fixes and a dehumidifier.",
    },
    {
      q: "What's the fastest way to get rid of a musty basement smell?",
      a: "Run a dehumidifier, get everything off the floor, throw out moldy cardboard, and open it up to air out on a dry day. That clears a lot within days, but it comes back unless the water source is fixed.",
    },
    {
      q: "Does a musty basement smell mean there's mold?",
      a: "Often, yes — on stored items, wood, or drywall. Bare concrete itself doesn't feed mold much, but dust and organic material on it does. If you can see growth, EPA says testing is usually unnecessary.",
    },
    {
      q: "Why does my basement smell musty only in summer?",
      a: "Warm, humid outdoor air reaches the cool basement walls and floor and condenses. That's a humidity problem more than a leak. Dehumidify and keep basement windows shut on muggy days.",
    },
    {
      q: "Can the basement make the whole house smell musty?",
      a: "Yes. Air rises from the basement into living spaces, and leaky ductwork in the basement can pull basement air into the HVAC system.",
    },
  ],
  related: [
    {
      title: "Musty smell in the whole house",
      href: "/smells/musty/",
      hint: "If it's spread upstairs",
    },
    {
      title: "House smells like sewage",
      href: "/smells/sewage/",
      hint: "Floor drains and ejector pits",
    },
    {
      title: "Musty but no visible mold",
      href: "/smells/musty/no-visible-mold/",
      hint: "Hidden moisture",
    },
    {
      title: "House smells like rotten eggs",
      href: "/smells/rotten-eggs/",
      hint: "If it's sulfur, not damp",
    },
  ],
  sources: [SOURCES.epaMold, SOURCES.epaMoldCleanup],
  diagnose: { family: "musty", location: "basement" },
  updated: "2026-10-02",
};
