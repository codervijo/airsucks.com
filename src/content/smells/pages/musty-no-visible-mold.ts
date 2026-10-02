import { SOURCES } from "../reference";
import type { SmellPage } from "../types";

export const mustyNoVisibleMold: SmellPage = {
  path: "/smells/musty/no-visible-mold/",
  family: "musty",
  label: "No visible mold",
  title: "House Smells Musty but No Mold? Where to Look",
  description:
    "Musty smell but no mold in sight? Mold hides in walls, under floors, in ducts, and crawlspaces. Here's how to track down hidden moisture before it spreads.",
  h1: "House smells musty but you can't find any mold",
  targets: [
    "house smells musty but no mold",
    "musty smell but no visible mold",
    "musty smell no mold found",
  ],
  quickAnswer:
    "You don't need to see mold for it to be there — or the smell can be plain damp without much growth yet. When nothing's visible, the moisture is usually behind something: inside a wall from a slow leak, under flooring, in the crawlspace, or in the AC coil and ducts. Humidity above 60% also makes fabrics and carpets smell musty with no visible growth. Measure humidity, run the water-meter leak test, and narrow it down by area. Finding the moisture finds the smell.",
  urgency: "soon",
  causes: [
    {
      cause: "hidden-leak",
      likelihood: "most common",
      note: "Slow drips from supply lines, drains, toilets, and windows wet the inside of walls and cabinets out of sight.",
    },
    {
      cause: "high-humidity",
      likelihood: "most common",
      note: "Fabrics, carpet, and dust pick up a musty smell above 60% humidity long before mold is visible.",
    },
    {
      cause: "ac-coil-drain",
      likelihood: "common",
      note: "The coil and drain pan are hidden inside the air handler — a top suspect if the smell follows the HVAC.",
    },
    {
      cause: "crawlspace-moisture",
      likelihood: "common",
      note: "Nobody looks in the crawlspace, but its air rises into the living space.",
    },
    { cause: "wet-carpet-pad", likelihood: "common", note: "Damp pad under dry-feeling carpet." },
    { cause: "mold-in-ducts", likelihood: "less common" },
    {
      cause: "closet-condensation",
      likelihood: "less common",
      note: "Behind furniture and inside closets is visible — just not where people look.",
    },
    {
      cause: "dry-p-trap",
      likelihood: "less common",
      note: "Some people describe sewer gas as musty or earthy. Refilling traps rules it out cheaply.",
    },
  ],
  compare: {
    headers: ["Clue", "Where the moisture probably is", "How to confirm"],
    rows: [
      [
        "Water meter moves with all water off",
        "Leaking supply line in a wall or floor",
        "Meter test, then a plumber",
      ],
      [
        "Smell only when the HVAC runs",
        "Coil, drain pan, or ducts",
        "Start-up sniff; check the condensate drain",
      ],
      [
        "Strongest at floor level",
        "Carpet pad, subfloor, crawlspace",
        "Paper-towel press; look in from the crawlspace hatch",
      ],
      [
        "Strongest at one wall or cabinet",
        "Leak inside the wall",
        "Look for stains and swelling; a moisture meter",
      ],
      [
        "Everywhere, worse on humid days",
        "Humidity, not a single source",
        "Hygrometer over a few days",
      ],
    ],
  },
  decision: [
    {
      question: "Is indoor humidity over 60%?",
      yes: "Dehumidify to 30–50% for a week. If the smell fades, you didn't have hidden mold — you had damp air.",
      no: "Keep going.",
    },
    {
      question: "With every faucet and appliance off, does the water meter move over 30 minutes?",
      yes: "You have a supply-side leak somewhere. Call a plumber to locate it.",
      no: "Supply lines are probably fine; drain leaks don't show on the meter. Keep going.",
    },
    {
      question: "Does the smell come from the vents when the system runs?",
      yes: "Start with the AC.",
      href: "/smells/musty/ac/",
      no: "Keep going.",
    },
    {
      question: "Is the smell strongest on the lowest floor or near floor registers?",
      yes: "Check the basement or crawlspace.",
      href: "/smells/musty/basement/",
      no: "Map the house room by room and check the walls that share plumbing.",
    },
  ],
  checks: [
    {
      title: "Water-meter leak test",
      how: "Turn off every faucet, the ice maker, the washer, and irrigation. Note the meter reading or watch the leak indicator for 30 minutes. Any movement means a supply leak.",
    },
    {
      title: "Map the smell",
      how: "Sniff each room with fresh nose breaks outside. Mark the strongest spots on a rough floor plan — hidden sources usually show up as a cluster.",
    },
    {
      title: "Plumbing walls",
      how: "Check walls behind and below bathrooms, the kitchen sink, the dishwasher, the washer, and the water heater. Look for paint bubbles, baseboard swelling, and soft drywall.",
    },
    {
      title: "Under sinks and appliances",
      how: "Empty the sink base cabinets and feel the cabinet floors. Pull the fridge and dishwasher toe-kicks and shine a light underneath.",
    },
    {
      title: "Crawlspace or attic glance",
      how: "From the hatch, look for standing water, wet insulation, a missing vapor barrier, or roof-leak staining. Don't crawl in if there's water or animal activity.",
    },
  ],
  sections: [
    {
      heading: "Should you test for mold when you can't see it?",
      body: [
        "EPA's general position is that if mold is visible, sampling is usually unnecessary. When it isn't visible, testing can confirm that something is growing — but it rarely tells you where, and the fix is the same either way: find the moisture.",
        "If you do bring someone in, a water-damage or remediation company with moisture meters and thermal imaging can often find wet framing behind drywall without opening walls. That's usually more useful than an air sample.",
      ],
    },
  ],
  diyStops: [
    "The water meter shows a leak you can't find.",
    "A moisture reading or stain shows a wet wall or subfloor.",
    "You suspect mold inside the HVAC system. EPA advises not running it until it's checked.",
    "Opening walls in an area with suspected mold over about 10 sq ft.",
  ],
  whoToCall: [
    { trade: "plumber", when: "The meter test fails, or you suspect a drain leak in a wall." },
    {
      trade: "water-damage",
      when: "To locate wet materials with moisture meters or thermal imaging, and dry them.",
    },
    { trade: "hvac", when: "The smell follows the AC or furnace." },
    {
      trade: "home-inspector",
      when: "You want a whole-house look before committing to a specific trade.",
    },
  ],
  faq: [
    {
      q: "Can you have a musty smell without mold?",
      a: "Yes. Damp materials and high humidity alone can smell musty. But a musty smell means moisture, and persistent moisture usually leads to mold, so it's worth finding either way.",
    },
    {
      q: "Where does mold hide in a house?",
      a: "Inside walls behind showers and sinks, under flooring, behind furniture on exterior walls, in crawlspaces and attics, and inside the AC coil, drain pan, and ducts.",
    },
    {
      q: "Is a mold test worth it if I can't see mold?",
      a: "Sometimes, but it rarely finds the source. Finding the moisture — leaks, humidity, crawlspace water — is what solves it. EPA notes that visible mold usually doesn't need sampling.",
    },
    {
      q: "Why does my house smell musty after rain?",
      a: "Rain raises humidity and can push water into basements, crawlspaces, and through roof or window leaks. A smell that tracks the weather points at one of those.",
    },
  ],
  related: [
    {
      title: "Musty smell in the whole house",
      href: "/smells/musty/",
      hint: "Start here if you haven't",
    },
    {
      title: "Musty smell from the AC",
      href: "/smells/musty/ac/",
      hint: "Hidden coil and duct moisture",
    },
    {
      title: "Musty smell in the basement",
      href: "/smells/musty/basement/",
      hint: "Seepage and condensation",
    },
    { title: "House smells like sewage", href: "/smells/sewage/", hint: "If it's earthy-sewer" },
  ],
  sources: [SOURCES.epaMold, SOURCES.epaMoldCleanup],
  diagnose: { family: "musty", location: "whole-house" },
  updated: "2026-10-02",
};
