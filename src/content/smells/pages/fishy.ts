import { SOURCES } from "../reference";
import type { SmellPage } from "../types";

// "Fishy smell in house" with no fish cooked. Electrical overheating is ranked
// first and gets the safety block because it's the cause people most need to
// catch; the non-electrical sources (drains, appliances, pets, a dead mouse)
// cover the "not electrical" queries.
export const fishy: SmellPage = {
  path: "/smells/fishy/",
  family: "fishy",
  label: "Fishy smell",
  title: "Fishy Smell in House? Check the Electrical First",
  description:
    "A fishy smell in the house with no fish around is often an overheating outlet, switch, or fixture. How to check safely, and what else it can be.",
  h1: "Fishy smell in the house: how to tell if it's electrical, and what else it can be",
  targets: [
    "fishy smell in house",
    "sudden fishy smell in house",
    "fishy smell in house not electrical",
    "fishy smell in house electrical",
    "how to tell if fishy smell is electrical",
    "fishy smell in house at night",
  ],
  quickAnswer:
    "A fishy smell in a house where nobody cooked fish is often an electrical part overheating. When outlets, switches, breakers, and light fixtures get too hot, the plastics and resins in them give off a smell people describe as fish or urine, often before anything smells burnt. Check that first: feel cover plates in the smelly room, look for discoloration, and notice any flicker or buzzing. If the electrical checks out, the usual sources are a garbage disposal or drain, a dishwasher filter, the fridge drip pan, a pet, or a mouse that died nearby.",
  urgency: "urgent",
  safety: {
    title: "If it might be electrical",
    when: [
      "Smoke, sparks, a crackling or sizzling sound, or a flame anywhere",
      "An outlet, switch, or dimmer that's warm, brown, or melted around the slots",
      "Lights flickering or dimming, or a breaker that keeps tripping in that part of the house",
      "The smell is strongest at the electrical panel",
    ],
    actions: [
      "Smoke, sparks, or flame: get everyone out and call 911 from outside. Don't try to find it.",
      "Warm or discolored device and no smoke: switch that circuit off at the panel if you can reach it safely. Don't pull a plug out of an outlet that's hot.",
      "Stop using that circuit, and call a licensed electrician today, not next week.",
      "If the smell is at the panel itself, keep away from it and call the electrician or your utility.",
    ],
    note: "Carbon monoxide doesn't smell fishy or like anything else, so this smell can't tell you whether CO is present. Keep CO alarms on every level.",
  },
  causes: [
    {
      cause: "electrical-overheating",
      likelihood: "most common",
      note: "The leading answer when there's no fish and no obvious kitchen source. A loose wire connection, an overloaded outlet or power strip, a failing dimmer, or a fixture running hotter bulbs than it's rated for.",
    },
    {
      cause: "drain-biofilm",
      likelihood: "common",
      note: "Kitchen version: the garbage disposal's rubber splash guard, the disposal chamber, the dishwasher's filter, or a sink drain. Smell strongest at the sink.",
    },
    {
      cause: "pet-health-odor",
      likelihood: "common",
      note: "In homes with a dog or cat: a sharp, fishy smell that follows the pet around, or is strongest where it sleeps.",
    },
    {
      cause: "dead-animal",
      likelihood: "less common",
      note: "Some people describe the early smell of a dead mouse as fishy. Concentrated at one wall or cabinet; often flies appear.",
    },
    {
      cause: "hvac-blower-motor",
      likelihood: "less common",
      note: "Only when the furnace or air handler runs, coming from the vents.",
    },
  ],
  compare: {
    headers: ["What you notice", "Points to", "Do this"],
    rows: [
      [
        "Strongest near an outlet, switch, light, or power strip; warm cover plate",
        "Overheating electrical part",
        "Circuit off, electrician today",
      ],
      [
        "Strongest at the electrical panel",
        "Breaker or panel connection",
        "Keep away, call an electrician",
      ],
      [
        "Comes from the vents only when the heat or AC runs",
        "Blower motor or HVAC electrical part",
        "System off, call HVAC",
      ],
      [
        "Strongest at the kitchen sink or dishwasher",
        "Disposal, drain, or dishwasher filter",
        "Clean them",
      ],
      [
        "Follows a pet, or is strongest on its bed",
        "Pet anal glands or another pet health issue",
        "Vet",
      ],
      [
        "One wall or cabinet; flies; getting worse over days",
        "Dead mouse or other animal",
        "Find it, or let it fade",
      ],
    ],
  },
  decision: [
    {
      question: "Any smoke, sparks, sizzling, or a hot or discolored outlet or switch?",
      yes: "Follow the safety steps above: out and 911 for smoke, circuit off and an electrician otherwise.",
      no: "Keep going, and recheck by touch if the smell gets stronger.",
    },
    {
      question: "Is it only when the furnace or AC runs, and coming from the vents?",
      yes: "Turn the system off and call an HVAC technician.",
      href: "/smells/burning-plastic/",
      no: "Keep going.",
    },
    {
      question: "Is it strongest in the kitchen, at the sink or dishwasher?",
      yes: "Clean the disposal splash guard, the drain, and the dishwasher filter.",
      no: "Keep going.",
    },
    {
      question: "Do you have a dog or cat, and does the smell follow it?",
      yes: "Book a vet visit. Anal glands are the classic fishy-pet cause.",
      href: "/smells/dog/",
      no: "Sniff along walls and cabinets for one strong spot. That's usually a dead mouse.",
    },
  ],
  checks: [
    {
      title: "Walk the room with your nose, then your hand",
      how: "Find the room where it's strongest, then the wall. Hold the back of your hand near each outlet, switch, and dimmer cover. Don't press on them. Normal ones are room temperature. Warm, brown or yellowed plastic, or a faint crackle means stop and follow the safety steps.",
    },
    {
      title: "Look behind furniture and at power strips",
      how: "Pull out the couch, bed, and desk in that room. Overloaded power strips, extension cords under rugs, and plugs that don't fit snugly in an outlet are common culprits that nobody sees. A plug that's loose in its outlet makes a poor connection, and a poor connection heats up.",
    },
    {
      title: "Check the lights",
      how: "Look at ceiling fixtures and recessed lights in the area. A bulb with a higher wattage than the fixture's label allows, or a dimmer running LED bulbs it isn't rated for, can overheat the fixture or the switch. Discolored glass or a darkened ring around a fixture is a sign.",
    },
    {
      title: "Smell the panel",
      how: "Stand near the breaker panel and smell, without opening it. A fishy or hot smell there, or a breaker that feels warm through the door, is an electrician call.",
    },
    {
      title: "Then work the kitchen",
      how: "If the electrical seems fine, smell the sink drain and the disposal opening. Lift and wipe the underside of the rubber splash guard; it's often the source. Pull and rinse the dishwasher filter, and check the fridge drip pan behind the bottom grille.",
    },
  ],
  sections: [
    {
      heading: "Why an electrical problem smells like fish",
      body: [
        "Outlets, switches, breakers, and many fixtures are made with heat-resistant plastics and resins. They're designed not to burn at normal temperatures, but when a connection is loose or a circuit is overloaded, the part slowly gets too hot. As those materials start to break down, they give off compounds with a fishy or urine-like smell. The smell often shows up well before anything chars or smokes, which is why it's worth taking seriously. It's an early warning, and the fix at that stage is usually a replaced outlet, switch, or connection.",
        "That's also why it can come and go. The part only overheats when something on that circuit draws enough current: a space heater, a hair dryer, a window AC, or lights on a dimmer in the evening.",
      ],
    },
    {
      heading: "A sudden fishy smell at night",
      body: [
        "Evenings and nights are when lighting, TVs, space heaters, and electric blankets run longest, so an overheating part on one of those circuits shows up then. If the smell appears when you turn on the heat for the first time in the season, it's more often dust burning off the furnace. That usually smells dusty and burnt rather than fishy, and it fades within a day. A fishy smell that comes with the heat, or keeps coming back, points to something electrical in the heating equipment or on that circuit.",
      ],
    },
    {
      heading: "Fishy smell that isn't electrical",
      body: [
        "If every device in the room is cool and nothing flickers, the next suspects are in the kitchen. The garbage disposal's splash guard and chamber hold food residue that turns fishy. So does the dishwasher filter, and the drip pan under the fridge collects spills and condensation. Bins and recycling with seafood packaging are the obvious ones people forget.",
        "With pets, a sharp fishy smell that follows a dog or cat around is often its anal glands, and sometimes a dental or skin problem. A vet visit settles it. A smell concentrated at one wall that strengthens over a few days and then fades, often with flies, is usually a dead mouse.",
      ],
    },
    {
      heading: "What tracking it down usually looks like",
      body: [
        "A living room that smelled faintly of fish every evening for a week: the dimmer controlling the recessed lights felt warm and had yellowed at the edges. The bulbs were LEDs, the dimmer was an old one built for incandescent bulbs, and the connection behind it had loosened. An electrician replaced the dimmer and tightened the connection, and the smell ended.",
        "A kitchen that smelled of fish with nobody cooking it: every outlet was cool. The underside of the disposal's splash guard and the dishwasher filter were coated in residue. Cleaning both took twenty minutes and fixed it.",
        "The one that took too long: a family deodorized the kitchen for weeks, sure it was the trash. The smell was actually strongest in a bedroom next to it, at an outlet behind the bed where a space heater had been plugged in all winter. The outlet face had browned. It was replaced before it failed, but checking the outlets first would have caught it weeks earlier.",
      ],
    },
  ],
  diyStops: [
    "Any warm, discolored, buzzing, or crackling outlet, switch, dimmer, fixture, or panel.",
    "Opening electrical boxes or the panel. Leave that to a licensed electrician.",
    "A smell from the vents when the furnace or AC runs.",
    "A dead animal inside a wall or ceiling you can't reach.",
  ],
  whoToCall: [
    {
      trade: "electrician",
      when: "The smell is near outlets, switches, lights, or the panel, or anything feels warm.",
    },
    {
      trade: "emergency-911",
      when: "Smoke, sparks, flames, or a burning smell that's getting stronger.",
    },
    { trade: "hvac", when: "It comes from the vents when the furnace or air handler runs." },
    {
      trade: "appliance-repair",
      when: "It's coming from a dishwasher, fridge, or other appliance and cleaning didn't help.",
    },
    { trade: "veterinarian", when: "The smell follows a pet." },
    { trade: "pest-control", when: "You suspect a dead mouse or rat inside a wall or cabinet." },
  ],
  faq: [
    {
      q: "How can I tell if a fishy smell is electrical?",
      a: "Track it to the room and wall where it's strongest, then feel the outlet and switch covers with the back of your hand. Warmth, brown or yellow discoloration, buzzing, flickering lights, or a breaker that trips are the signs. If the smell gets stronger when a particular light or appliance is on, that's the circuit.",
    },
    {
      q: "Is a fishy smell in the house dangerous?",
      a: "If it's electrical, it can be. It's an early sign of a part overheating, which is how electrical fires start. That's why you check it first and call an electrician the same day. Non-electrical sources like drains or a pet aren't dangerous, just unpleasant.",
    },
    {
      q: "Does carbon monoxide smell like fish?",
      a: "No. Carbon monoxide has no smell at all. A fishy smell won't tell you anything about CO either way, which is why CO alarms matter.",
    },
    {
      q: "Why does my house smell fishy but it's not electrical?",
      a: "Most often it's the kitchen: the garbage disposal splash guard, the drain, the dishwasher filter, or the fridge drip pan. In pet homes, a fishy smell that follows the animal usually means anal glands. A strong smell at one wall that fades after a week or two is usually a dead mouse.",
    },
    {
      q: "Why do I smell fish when the heat comes on?",
      a: "First-heat dust burning off the furnace smells dusty, not fishy, and fades in a day. A fishy smell from the vents when the heat runs points to an overheating motor or electrical part in the equipment. Turn the system off and have it checked.",
    },
    {
      q: "How do I get rid of a fishy smell in the house?",
      a: "Find and fix the source. Odor sprays won't help, and with electrical causes they hide the warning. For cooking smells, ventilate and simmer water with vinegar or citrus. For the disposal and drains, clean the splash guard and run ice and citrus peel through the disposal.",
    },
  ],
  related: [
    {
      title: "Burning plastic or electrical smell",
      href: "/smells/burning-plastic/",
      hint: "When it smells hot, not fishy",
    },
    {
      title: "House smells like cat pee",
      href: "/smells/cat-pee/",
      hint: "The other electrical look-alike",
    },
    {
      title: "Dead animal smell in the house",
      href: "/smells/dead-animal/",
      hint: "One wall, getting stronger",
    },
    { title: "House smells like dog", href: "/smells/dog/", hint: "Pet odors" },
  ],
  sources: [SOURCES.cpscCo],
  diagnose: { family: "fishy" },
  updated: "2026-10-29",
};
