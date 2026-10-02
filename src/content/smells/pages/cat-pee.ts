import type { SmellPage } from "../types";

// "House smells like cat pee but I can't find it" — including no-cat homes.
// The electrical look-alike gets its own safety block: overheating outlets and
// fixtures give off a urine/fishy smell.
export const catPee: SmellPage = {
  path: "/smells/cat-pee/",
  family: "pet-urine",
  label: "Cat pee smell",
  title: "House Smells Like Cat Pee but You Can't Find It",
  description:
    "Cat-pee or ammonia smell with no obvious source — or no cat? How to hunt it down with a UV light, what else smells like urine, and when it's electrical.",
  h1: "House smells like cat pee and you can't find it",
  targets: [
    "house smells like cat pee but I can't find it",
    "cat pee smell in house no cat",
    "ammonia smell in house",
  ],
  quickAnswer:
    "The usual answer is old urine you can't see: from your cat, a previous owner's pet, or mice. Dried urine soaks into carpet pad and subfloor and re-releases its smell whenever humidity rises, which is why it seems to come and go. A UV flashlight in a dark room finds most of it. If there's no pet history, check for mice and for boxwood shrubs near open windows. One look-alike matters for safety: an overheating outlet, switch, or light fixture can give off a urine-like or fishy smell. If the smell is near anything electrical, check that first.",
  urgency: "routine",
  safety: {
    title: "If the smell is near an outlet, switch, or light",
    when: [
      "Smoke, sparks, flames, or a scorched or melted outlet or fixture",
      "A cover plate that's warm to the touch or discolored",
      "Lights flickering, buzzing from a switch or outlet, or a breaker that keeps tripping",
    ],
    actions: [
      "Smoke, sparks, or flames: get everyone out and call 911 from outside.",
      "No smoke, but a warm or discolored outlet or flickering: switch off that circuit's breaker if the panel is safe to reach, and don't touch or unplug anything that's hot.",
      "Call a licensed electrician today. Don't use that circuit until it's checked.",
    ],
    note: "Overheating electrical parts are often described as smelling fishy or like urine before they smell like burning.",
  },
  causes: [
    {
      cause: "hidden-pet-urine",
      likelihood: "most common",
      note: "Includes previous owners' or tenants' pets. Urine in the pad or subfloor can outlast the pet by years.",
    },
    {
      cause: "rodent-urine",
      likelihood: "common",
      note: "The top suspect in homes with no pet history, especially in kitchens, garages, and closets.",
    },
    {
      cause: "electrical-overheating",
      likelihood: "less common",
      note: "Rare as a cause of 'cat pee' smell, but the one you can't afford to miss.",
    },
    {
      cause: "wet-carpet-pad",
      likelihood: "less common",
      note: "Damp carpet pad smells sour and can reactivate old urine in it.",
    },
    {
      cause: "boxwood-shrubs",
      likelihood: "less common",
      note: "If the smell comes in through windows on one side of the house and is seasonal.",
    },
  ],
  compare: {
    headers: ["Clue", "Likely source", "Next step"],
    rows: [
      [
        "Worse on humid days or after carpet cleaning",
        "Old urine in carpet pad or subfloor",
        "UV light hunt",
      ],
      [
        "You moved in recently; previous owners had pets",
        "Previous pet urine",
        "UV light along walls and corners",
      ],
      ["Droppings, chewed packaging, scratching at night", "Mice or rats", "Pest control"],
      [
        "Near an outlet, switch, or light; flicker or buzzing",
        "Overheating electrical part",
        "Breaker off, electrician",
      ],
      [
        "Stronger outside, near hedges, with windows open",
        "Boxwood shrubs",
        "Close those windows for a day",
      ],
      [
        "Sharp ammonia near the litter box only",
        "Litter box itself",
        "Clean and replace the litter",
      ],
    ],
  },
  decision: [
    {
      question:
        "Is the smell near an outlet, switch, light fixture, or power strip — or do lights flicker or buzz?",
      yes: "Treat it as electrical: breaker off, electrician today.",
      href: "/smells/burning-plastic/",
      no: "Keep going.",
    },
    {
      question: "Has any cat or dog lived in the home, now or before you?",
      yes: "Do the UV hunt below; it finds most old urine.",
      no: "Look for mice first: droppings under sinks and behind appliances.",
    },
    {
      question: "Is it worse on humid days?",
      yes: "That's typical of urine salts in the pad or subfloor rehydrating.",
      no: "Keep going.",
    },
    {
      question: "Is it strongest at windows on one side, and seasonal?",
      yes: "Check for boxwood shrubs outside those windows.",
    },
  ],
  checks: [
    {
      title: "Run a UV flashlight hunt after dark",
      how: "Turn off the lights and wait a minute for your eyes to adjust. Sweep a UV (black light) flashlight slowly across the floor, along baseboards, room corners, door frames, and the lower part of walls and furniture. Dried urine often shows up as a dull yellow-green glow. Mark each spot with painter's tape. Other things glow too, so smell-check each one up close.",
    },
    {
      title: "Smell low",
      how: "Get your nose near the floor along walls, in closets, under beds, and behind furniture. Cats favor corners and vertical surfaces; floor-level smell is much stronger than standing height.",
    },
    {
      title: "Look for mice",
      how: "With a flashlight, check under sinks, behind the stove and fridge, pantry corners, and drawers. Rice-sized droppings or chewed packaging confirm it. Don't sweep droppings dry — wet them with disinfectant first and wear gloves.",
    },
    {
      title: "Check outlets and fixtures by touch",
      how: "With the back of your hand, feel cover plates and dimmer switches in the smelly area. Warm, discolored, or crackling means the safety steps above — don't open anything.",
    },
    {
      title: "Test the windows",
      how: "If the smell seems to come and go with fresh air, close the windows on one side for a day and see whether it stops.",
    },
  ],
  sections: [
    {
      heading: "Getting rid of cat urine smell once you've found it",
      body: [
        "Regular cleaners and odor sprays mostly don't work on urine. The smell comes back because the residue is still in the material. Enzyme cleaners made for pet urine break that residue down — but only where they reach. Soak the spot generously so it reaches as deep as the urine did, keep it damp for the time on the label, then let it air-dry fully.",
        "Carpet is the hard case. If the UV light shows a large stain, or the smell comes back after enzyme treatment, the pad underneath is saturated. Pull back the carpet: replace the stained pad, treat the subfloor with enzyme cleaner, and once it's dry, seal it with an odor-blocking primer before the pad goes back down.",
        "Avoid steam cleaning or heat on urine spots before treating them. Heat can set the smell into the fibers.",
      ],
    },
  ],
  diyStops: [
    "Any sign of electrical overheating: warmth, discoloration, flicker, buzzing, or a tripping breaker.",
    "Urine soaked through to the subfloor or into the tack strips across a large area.",
    "Ongoing mouse or rat activity, nests in walls or the attic, or any sign of rats.",
  ],
  whoToCall: [
    { trade: "electrician", when: "The smell is near outlets, switches, lights, or the panel." },
    { trade: "pest-control", when: "You find droppings or hear scratching." },
    {
      trade: "flooring",
      when: "The pad or subfloor is saturated and needs pulling, sealing, or replacing.",
    },
  ],
  faq: [
    {
      q: "Why does my house smell like cat pee when I don't have a cat?",
      a: "The most common reasons are a previous owner's pet (urine in the carpet pad or subfloor), mice, or boxwood shrubs near open windows. Less often, it's an overheating electrical part — check outlets and fixtures near the smell.",
    },
    {
      q: "What does an ammonia smell in the house mean?",
      a: "Most often old urine, from pets or rodents, or an overdue litter box. Ammonia-based cleaners also leave the smell. If it's sharp and near something electrical, treat it as possible overheating.",
    },
    {
      q: "Why does the cat pee smell get worse when it's humid?",
      a: "Dried urine leaves salts that pull moisture from the air. When they get damp, they release their smell again. That's why a stain can seem gone for months, then come back on a rainy week.",
    },
    {
      q: "Can mold smell like cat pee?",
      a: "Some people describe certain musty smells as urine-like, but mold usually reads as earthy or damp. If UV finds nothing and there are no mice, check for moisture too.",
    },
  ],
  related: [
    {
      title: "Burning plastic or electrical smell",
      href: "/smells/burning-plastic/",
      hint: "The electrical look-alike",
    },
    { title: "House smells like dog", href: "/smells/dog/", hint: "Pet odor in fabrics" },
    {
      title: "Musty smell in one room",
      href: "/smells/musty/room/",
      hint: "Damp carpet and closets",
    },
    { title: "All smells", href: "/smells/", hint: "Browse by odor" },
  ],
  diagnose: { family: "pet-urine" },
  updated: "2026-10-02",
};
