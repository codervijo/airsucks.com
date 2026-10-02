import { SOURCES } from "../reference";
import type { SmellPage } from "../types";

// Consolidated room + bedroom page: "why does my room smell musty" is almost
// always a bedroom, so a separate /bedroom/ page would duplicate it
// (docs/prd.md § v2.A).
export const mustyRoom: SmellPage = {
  path: "/smells/musty/room/",
  family: "musty",
  label: "In one room",
  title: "Why Does My Room Smell Musty? Bedroom Causes & Fixes",
  description:
    "One room or bedroom smells musty while the rest of the house is fine? Here's how to find the spot — closet, bed, carpet, window, or wall — and fix it.",
  h1: "Why your room (or bedroom) smells musty — and how to fix it",
  targets: ["why does my room smell musty", "bedroom smells musty", "musty smell in bedroom"],
  quickAnswer:
    "When only one room smells musty, the moisture is in that room. The usual culprits are a closet or dresser against a cold outside wall, a mattress that can't breathe, a carpet pad that got wet, or condensation on the windows. Less often it's a slow leak in the wall. Close the door overnight, then sniff the closet, under the bed, behind furniture, and the carpet at floor level. Wherever it's strongest, that's your source.",
  urgency: "routine",
  causes: [
    {
      cause: "closet-condensation",
      likelihood: "most common",
      note: "Closets and furniture on exterior walls block warm air, so the wall behind them stays cold and damp. It's the classic bedroom mildew spot.",
    },
    {
      cause: "mattress-bedding",
      likelihood: "common",
      note: "If the smell is worst at the bed in the morning, check under the mattress — especially one on the floor or a solid platform.",
    },
    {
      cause: "wet-carpet-pad",
      likelihood: "common",
      note: "A past spill, pet accident, or steam cleaning can leave the pad damp long after the surface feels dry.",
    },
    {
      cause: "window-condensation",
      likelihood: "common",
      note: "Bedrooms with the door closed overnight collect a lot of moisture from breathing, and it lands on the coldest glass.",
    },
    {
      cause: "high-humidity",
      likelihood: "common",
      note: "A closed-up room can run noticeably more humid than the rest of the house.",
    },
    {
      cause: "hidden-leak",
      likelihood: "less common",
      note: "Suspect it if the room shares a wall with a bathroom, has a window above it, or sits below a roof valley.",
    },
    {
      cause: "stored-items",
      likelihood: "less common",
      note: "Boxes under the bed, old books, a thrifted dresser.",
    },
    { cause: "surface-mold", likelihood: "less common" },
  ],
  compare: {
    headers: ["Where it's strongest", "Likely cause", "First move"],
    rows: [
      [
        "Inside the closet or on clothes",
        "Condensation on an outside wall",
        "Empty the closet floor; check the back wall",
      ],
      [
        "At the bed, worst in the morning",
        "Mattress can't breathe",
        "Lift the mattress and look underneath",
      ],
      ["Floor level in one area", "Damp carpet pad", "Paper-towel press test"],
      ["Near the window", "Condensation on sills and tracks", "Check tracks and curtain hems"],
      ["Along one wall, with stains", "Leak inside the wall", "Check the other side of that wall"],
    ],
  },
  decision: [
    {
      question: "Does the room smell noticeably worse after the door's been shut overnight?",
      yes: "Moisture builds up when the room is closed — breathing, a humidifier, drying laundry. Measure humidity in the room, and dehumidify or ventilate.",
      no: "It's more likely a fixed source. Keep going.",
    },
    {
      question: "Is the smell strongest inside a closet or behind a piece of furniture?",
      yes: "Pull everything a few inches off the exterior wall and look at the wall and the back of the furniture.",
      no: "Keep going.",
    },
    {
      question:
        "Did anything get wet in this room — a spill, a pet accident, carpet cleaning, a leak?",
      yes: "Check the carpet pad and the subfloor under that spot.",
      no: "Keep going.",
    },
    {
      question: "Does the room share a wall with a bathroom or sit under a roof problem?",
      yes: "Treat it as a possible hidden leak.",
      href: "/smells/musty/no-visible-mold/",
      no: "If every room smells a little, it isn't a one-room problem.",
    },
  ],
  checks: [
    {
      title: "Closed-door test",
      how: "Close the room overnight with a hygrometer inside. Compare the morning reading with the hallway. A room well above 60% when the rest of the house isn't is generating or trapping moisture.",
    },
    {
      title: "Pull and look",
      how: "Move the dresser, headboard, and bookcase a few inches off the outside walls. Shine a flashlight on the wall and on the furniture backs for gray or black spotting.",
    },
    {
      title: "Under the mattress",
      how: "Lift the mattress and smell and look at the underside and the base. Dark spotting or a damp feel means it can't breathe.",
    },
    {
      title: "Carpet press test",
      how: "Press a dry paper towel hard into the carpet where it smells. Then lift a corner at the tack strip and check the pad and subfloor.",
    },
    {
      title: "Windows and sills",
      how: "Look at the window tracks, sills, and the bottom of the curtains. Water droplets on the glass in the morning means too much moisture in the room.",
    },
  ],
  sections: [
    {
      heading: "Why bedrooms in particular go musty",
      body: [
        "A bedroom is a small, closed box with a person in it for eight hours. Breath and skin add moisture overnight. Close the door and turn off the airflow, and that moisture settles on the coldest surfaces: exterior walls, windows, the back of a closet, the underside of the mattress. Add a dresser flat against the wall or a mattress on the floor and you've built a place for mildew to grow where nobody looks.",
        "That's why the fix is usually airflow plus drying rather than heavy cleaning: a few inches of gap behind furniture, a ventilated bed base, a cracked door or a fan, and humidity held in the 30–50% range EPA recommends.",
      ],
    },
  ],
  diyStops: [
    "Drywall that is soft, stained, or crumbling — that's water, not just condensation.",
    "Mold covering more than about 10 square feet (EPA's rough threshold for doing it yourself).",
    "A carpet pad and subfloor that are saturated or stained underneath.",
  ],
  whoToCall: [
    {
      trade: "water-damage",
      when: "The wall or floor is wet from a leak you can't see the source of.",
    },
    { trade: "plumber", when: "The room backs onto a bathroom and the wall is damp." },
    { trade: "flooring", when: "The pad and subfloor need to come out." },
    { trade: "mold-remediation", when: "Growth is larger than about 10 sq ft or inside the wall." },
  ],
  faq: [
    {
      q: "Why does my bedroom smell musty but the rest of the house doesn't?",
      a: "The moisture is local to that room: the closet, the bed, the carpet, the window, or a wall. Bedrooms are closed up for hours with a person breathing in them, which is often enough to tip one spot into mildew.",
    },
    {
      q: "Why does my room smell musty in the morning?",
      a: "Overnight moisture from breathing builds up when the door is closed. If it eases once the room airs out, the fix is ventilation and lower humidity. If it's there all day, look for a fixed source.",
    },
    {
      q: "Can a mattress smell musty?",
      a: "Yes, especially one on the floor or on a solid platform. The underside stays damp and grows mildew. Light surface mildew on the base can be cleaned; a mattress with growth inside should be replaced.",
    },
    {
      q: "Will a dehumidifier in the bedroom fix it?",
      a: "It fixes humidity-driven mustiness and helps everything dry. It won't fix a wet carpet pad or a leak, and it won't remove mildew that's already growing behind furniture.",
    },
    {
      q: "My closet smells musty and so do my clothes. What do I do?",
      a: "Empty it, look at the back wall and floor, and clean any mildew. Wash the clothes. Then keep the door open or louvered and leave a gap at the back. If the wall is wet rather than just cold, look for a leak.",
    },
  ],
  related: [
    {
      title: "Musty smell in the whole house",
      href: "/smells/musty/",
      hint: "If it's not just one room",
    },
    {
      title: "Musty but no visible mold",
      href: "/smells/musty/no-visible-mold/",
      hint: "Hidden moisture",
    },
    {
      title: "Musty smell from the AC",
      href: "/smells/musty/ac/",
      hint: "If it comes from the vent",
    },
    {
      title: "House smells like cat pee",
      href: "/smells/cat-pee/",
      hint: "If it's sharper than musty",
    },
  ],
  sources: [SOURCES.epaMold],
  diagnose: { family: "musty", location: "bedroom" },
  updated: "2026-10-02",
};
