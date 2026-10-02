import { SOURCES } from "../reference";
import type { SmellPage } from "../types";

// Flagship page. Absorbs: musty smell in house · how to get rid of musty smell
// in house · why does my house smell musty · how to get rid of musty smell.
// There is deliberately no /smells/musty/house/ — same intent (docs/prd.md § v2.A).
export const musty: SmellPage = {
  path: "/smells/musty/",
  family: "musty",
  label: "Musty smell",
  title: "Musty Smell in House: Find the Source & Get Rid of It",
  description:
    "Why your house smells musty, how to find where it's coming from in about an hour, and how to get rid of it for good — plus when it's mold and who to call.",
  h1: "Musty smell in your house: find the source and get rid of it",
  targets: [
    "musty smell in house",
    "how to get rid of musty smell in house",
    "why does my house smell musty",
    "how to get rid of musty smell",
    "who to call for musty smell in house",
  ],
  quickAnswer:
    "A musty smell is mold or mildew growing somewhere damp. Indoor humidity above about 60% is the usual cause; the rest are a specific wet spot like a leak, basement, crawlspace, or AC drain. Air fresheners won't fix it. Find the moisture, dry it out, and clean or replace what grew mildew. Start with an inexpensive hygrometer: if humidity is over 60%, dehumidify first. If it's normal, the source is local and you can sniff it out room by room.",
  urgency: "soon",
  causes: [
    {
      cause: "high-humidity",
      likelihood: "most common",
      note: "If the smell is everywhere but faint, and worse in summer or when the house is shut, humidity is the first suspect.",
    },
    {
      cause: "damp-basement",
      likelihood: "most common",
      note: "In homes with basements, the smell often starts downstairs and rises through the house.",
    },
    {
      cause: "crawlspace-moisture",
      likelihood: "common",
      note: "In crawlspace homes, damp crawlspace air is pulled up through the floor.",
    },
    {
      cause: "ac-coil-drain",
      likelihood: "common",
      note: "If the smell comes out of the vents when the AC runs, start with the AC — see the AC page.",
    },
    {
      cause: "hidden-leak",
      likelihood: "common",
      note: "A localized smell near a bathroom, kitchen, or wall points here.",
    },
    { cause: "surface-mold", likelihood: "common" },
    { cause: "wet-carpet-pad", likelihood: "less common" },
    {
      cause: "front-load-washer",
      likelihood: "less common",
      note: "If it's mostly the laundry room and the clothes.",
    },
    { cause: "stored-items", likelihood: "less common" },
  ],
  compare: {
    headers: ["What you notice", "Most likely source", "Go to"],
    rows: [
      ["Faint everywhere, worse on humid days", "Humidity over 60%", "Hygrometer + dehumidifier"],
      ["Strongest in the basement or downstairs", "Basement moisture", "Basement page"],
      ["Strongest near floor registers, no basement", "Crawlspace", "Check the crawlspace"],
      ["Blows out of vents when AC starts", "AC coil or drain", "AC page"],
      ["One room or one wall", "Leak, closet, carpet", "Musty room page"],
      ["Musty but you can't see any mold", "Hidden moisture", "No-visible-mold page"],
      ["Clothes smell musty after washing", "Washer gasket", "Clean the washer"],
    ],
  },
  decision: [
    {
      question: "Is indoor humidity over 60% (measured, not guessed)?",
      yes: "Dehumidify to 30–50% for a week. If the smell fades, that was it. Then find out why the house runs damp.",
      no: "The source is local. Keep going.",
    },
    {
      question: "Is it strongest at the vents, and only when the HVAC runs?",
      yes: "It's the AC coil, the drain, or the ducts.",
      href: "/smells/musty/ac/",
      no: "Keep going.",
    },
    {
      question: "Is it strongest in the basement or on the lowest floor?",
      yes: "It's basement moisture.",
      href: "/smells/musty/basement/",
      no: "Keep going.",
    },
    {
      question: "Is it concentrated in one room?",
      yes: "Work that room systematically.",
      href: "/smells/musty/room/",
      no: "Keep going.",
    },
    {
      question: "No visible mold anywhere, humidity normal, still musty?",
      yes: "Look for hidden moisture.",
      href: "/smells/musty/no-visible-mold/",
    },
  ],
  checks: [
    {
      title: "Measure humidity (24 hours)",
      how: "Put a digital hygrometer on the main floor, and another in the basement if you have one. EPA guidance is to keep indoor humidity below 60%, ideally 30–50%.",
    },
    {
      title: "Do a sniff walk",
      how: "Go outside for 10 minutes to reset your nose, then walk in and go room by room, top to bottom. Note where the smell is strongest. Open closets and sink cabinets, and smell at floor level.",
    },
    {
      title: "Check the usual wet spots",
      how: "Look under every sink, behind the toilets, around the water heater, the washer, and window sills, and along the base of exterior walls. You're looking for stains, damp wood, bubbling paint, and dark spotting.",
    },
    {
      title: "Run the HVAC test",
      how: "Smell a supply vent right as the AC or heat starts, then again after 10 minutes. A burst of musty air at start-up points at the coil, the drain, or the ducts.",
    },
    {
      title: "Check the lowest level",
      how: "Basement: look for damp walls, white mineral deposits, and cardboard on the floor. Crawlspace: look in from the hatch for standing water or a missing vapor barrier.",
    },
  ],
  sections: [
    {
      heading: "How to get rid of a musty smell for good",
      body: [
        "Odor products don't solve this. Musty smell is a by-product of something growing on a damp surface, so it comes back until the surface stays dry. The order that works:",
        "1. Stop the water: fix the leak, the gutter, the AC drain, or the missing vapor barrier. 2. Dry the air: run a dehumidifier to bring humidity to 30–50% and keep it there. 3. Clean or remove what grew: EPA guidance says to scrub hard surfaces with detergent and water and dry them completely; porous materials like carpet pad, ceiling tiles, and cardboard that went moldy usually have to go. 4. Then deodorize what's left: wash fabrics, air out furniture, and change the HVAC filter.",
        "If you do steps 3 and 4 without 1 and 2, the smell is usually back within weeks.",
      ],
    },
    {
      heading: "Is a musty smell always mold?",
      body: [
        "Usually it's mold or mildew. Mildew is the everyday name for surface mold on damp fabrics and grout. Sometimes it's simply damp: wet concrete, wet cardboard, a wet carpet pad. Either way it points to moisture. For visible growth, EPA says testing is usually unnecessary: if you can see it, deal with it and the moisture behind it.",
      ],
    },
  ],
  diyStops: [
    "Visible mold larger than about 10 square feet (roughly 3 × 3 ft) — EPA guidance points you to a professional.",
    "Mold after a major leak or flood, or drywall that stayed wet for days.",
    "You suspect mold inside the HVAC system. EPA advises not running it until it's dealt with.",
    "Water coming through foundation walls or standing in the crawlspace.",
  ],
  whoToCall: [
    {
      trade: "water-damage",
      when: "You found a leak and materials are wet. They dry the structure and measure moisture behind walls.",
    },
    {
      trade: "mold-remediation",
      when: "Visible growth over about 10 sq ft, or mold behind walls.",
    },
    { trade: "hvac", when: "The smell comes from the vents or the air handler." },
    { trade: "waterproofing", when: "The basement or crawlspace takes on water." },
    { trade: "home-inspector", when: "You've done the checks and still can't localize it." },
  ],
  faq: [
    {
      q: "Why does my house suddenly smell musty?",
      a: "Something changed the moisture balance: a stretch of humid weather, a new leak, a clogged AC drain, or the house being closed up for a trip or a season. Measure humidity first, then check for anything that got wet recently.",
    },
    {
      q: "Can a dehumidifier get rid of a musty smell?",
      a: "Often, yes — if humidity is the cause. It won't fix a leak or remove mold that's already growing. If humidity is under 60% and it still smells, look for a local source.",
    },
    {
      q: "Do air purifiers or air fresheners help?",
      a: "They can reduce the smell in the air for a while, but they don't touch the source. The smell returns when you stop.",
    },
    {
      q: "Should I test for mold?",
      a: "EPA's guidance: if mold is visible, sampling is usually unnecessary. Testing makes more sense when there's a strong musty smell and no visible growth, and even then, finding the moisture matters more.",
    },
    {
      q: "Who do I call for a musty smell in my house?",
      a: "It depends on the source: a plumber or water-damage company for leaks, an HVAC tech for vents and AC, a waterproofing contractor for basements and crawlspaces, and mold remediation for large or hidden growth. If you can't pin it down, a home inspector can do a whole-house look.",
    },
  ],
  related: [
    {
      title: "Musty smell in one room",
      href: "/smells/musty/room/",
      hint: "Bedroom, closet, carpet",
    },
    {
      title: "Musty smell in the basement",
      href: "/smells/musty/basement/",
      hint: "Seepage, condensation, storage",
    },
    { title: "Musty smell from the AC", href: "/smells/musty/ac/", hint: "Coil, drain, ducts" },
    {
      title: "Musty smell but no visible mold",
      href: "/smells/musty/no-visible-mold/",
      hint: "Hidden moisture",
    },
    {
      title: "House smells like sewage",
      href: "/smells/sewage/",
      hint: "If it's more sewer than damp",
    },
  ],
  sources: [SOURCES.epaMold, SOURCES.epaMoldCleanup],
  diagnose: { family: "musty", location: "whole-house" },
  updated: "2026-10-02",
};
