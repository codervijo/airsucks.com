import { SOURCES } from "../reference";
import type { SmellPage } from "../types";

// "House smells like dog" — a cleaning-and-sources page, not a pet-health page.
export const dog: SmellPage = {
  path: "/smells/dog/",
  family: "pet-urine",
  label: "Dog smell",
  title: "House Smells Like Dog? Find the Source and Clear It",
  description:
    "Why a house smells like dog even when it's clean — the fabrics, filters, and damp air that hold it — plus a room-by-room plan to get rid of it.",
  h1: "House smells like dog: where it's hiding and how to clear it",
  targets: [
    "house smells like dog",
    "how to get rid of dog smell in house",
    "house smells like wet dog",
  ],
  quickAnswer:
    "Dog smell builds up in soft things, not in the air. Skin oils and dander collect in dog beds, couches, rugs, curtains, and the HVAC filter, and each one releases a little smell. Humid weather makes it stronger — that's the wet-dog smell. Washing the dog alone rarely fixes a house. Wash or deep-clean every soft surface the dog uses, change the HVAC filter, and keep humidity in check. If the dog itself suddenly smells much stronger than usual, that's a vet question, not a cleaning one.",
  urgency: "routine",
  causes: [
    {
      cause: "dog-fabrics",
      likelihood: "most common",
      note: "The dog bed, the couch, and the rug by the door usually account for most of it.",
    },
    {
      cause: "dirty-filter",
      likelihood: "common",
      note: "With a dog, the filter loads with dander fast and spreads the smell through every vent.",
    },
    {
      cause: "high-humidity",
      likelihood: "common",
      note: "Damp air brings out wet-dog smell from everything that has absorbed it.",
    },
    {
      cause: "hidden-pet-urine",
      likelihood: "less common",
      note: "Accidents in carpet that were cleaned on top but soaked into the pad.",
    },
    {
      cause: "wet-carpet-pad",
      likelihood: "less common",
      note: "Wet paws and wet-cleaned carpet that never fully dried.",
    },
    {
      cause: "pet-health-odor",
      likelihood: "less common",
      note: "If the dog itself smells much stronger than it used to, even right after a bath.",
    },
  ],
  compare: {
    headers: ["What you notice", "Likely source", "Fix"],
    rows: [
      ["Strongest at the dog bed, couch, or one rug", "Fabrics", "Wash or deep-clean"],
      ["Same faint smell at every vent", "HVAC filter", "Replace it, and check monthly"],
      ["Much worse on rainy or humid days", "Humidity bringing it out", "Dehumidify"],
      ["Sharp or ammonia-like in one spot", "Old urine in carpet", "Enzyme cleaner; check the pad"],
      ["The dog smells strong right after a bath", "The dog, not the house", "Vet visit"],
    ],
  },
  decision: [
    {
      question: "Does the dog itself smell strongly, even right after a bath?",
      yes: "Have a vet take a look. Cleaning the house won't change it.",
      no: "Keep going — it's the house holding the smell.",
    },
    {
      question: "Is there a sharp, ammonia-like spot rather than a general doggy smell?",
      yes: "Treat it as urine: find it with a UV light and use enzyme cleaner.",
      href: "/smells/cat-pee/",
      no: "Keep going.",
    },
    {
      question: "Is the smell at every vent and worse when the system runs?",
      yes: "Replace the HVAC filter now.",
      no: "Keep going.",
    },
    {
      question: "Is it much worse on humid days, with a musty note?",
      yes: "Get humidity down. A musty note may also mean damp carpet or a moisture problem.",
      href: "/smells/musty/",
    },
  ],
  checks: [
    {
      title: "Reset your nose first",
      how: "You stop noticing your own home's smell. Step outside for 10 minutes, or ask a visitor where it's strongest.",
    },
    {
      title: "Smell the soft surfaces up close",
      how: "Dog bed, couch cushions (including underneath), rugs, curtains, car seats, and blankets. Make a list in order of strength — that's your cleaning order.",
    },
    {
      title: "Pull the HVAC filter",
      how: "A gray, matted filter with hair in it is spreading smell to every room.",
    },
    {
      title: "Check humidity",
      how: "A hygrometer reading above 60% means everything that has absorbed dog smell will keep releasing it.",
    },
  ],
  sections: [
    {
      heading: "Room-by-room plan to get rid of dog smell",
      body: [
        "Dog's sleeping spot: wash the bed cover and any blankets in hot water, and wash the bed insert itself if the label allows. A bed foam that still smells after washing is cheaper to replace than to fight. Going forward, wash covers weekly.",
        "Living room: vacuum couch cushions, under them, and the frame. Wash removable covers. Sprinkle baking soda on fabric upholstery and rugs, leave it for several hours, then vacuum thoroughly. Wash curtains and throws. Rugs the dog lies on need a deep clean — make sure they dry completely, because a damp rug smells worse.",
        "Floors: vacuum often with a machine that has a clean filter. A vacuum with a dirty filter or bin blows dog smell back into the room. Mop hard floors along baseboards, where hair and dirt collect.",
        "Entry and laundry: wipe wet paws at the door; wash towels used on the dog separately and dry them fully.",
        "Whole house: change the HVAC filter, and keep checking it monthly while you have a dog. Run the system fan for a while after a big clean to move air through the new filter. Keep humidity at 30–50%.",
        "The dog: regular brushing outdoors takes loose hair and dander out of the house before it lands. Ask your vet how often baths make sense for your dog.",
      ],
    },
  ],
  diyStops: [
    "The dog smells markedly different or stronger than usual — that's a vet visit.",
    "Urine soaked through carpet into the pad or subfloor across a large area.",
    "A musty smell under the dog smell, or humidity you can't get below 60% — find the moisture source.",
  ],
  whoToCall: [
    {
      trade: "veterinarian",
      when: "The dog's own smell changed suddenly or is strong right after bathing.",
    },
    { trade: "flooring", when: "Old urine has gone into the pad or subfloor." },
    {
      trade: "hvac",
      when: "The smell comes from the vents even after a new filter, or ducts are full of hair.",
    },
  ],
  faq: [
    {
      q: "Why does my house smell like dog even though I clean?",
      a: "The smell lives in soft materials and the HVAC filter more than on floors. Cleaning surfaces without washing the dog bed, couch covers, rugs, and curtains — and changing the filter — leaves most of the source in place.",
    },
    {
      q: "Why does my house smell like wet dog when it rains?",
      a: "Humidity brings out smell that fabrics and carpets have absorbed, the same way a damp dog smells stronger than a dry one. Lowering humidity and washing the soft surfaces the dog uses usually tames it.",
    },
    {
      q: "Do air purifiers help with dog smell?",
      a: "A purifier can catch airborne dander and reduce the smell in one room, but the source in fabrics stays. Use it alongside cleaning, not instead of it.",
    },
    {
      q: "How often should I change the HVAC filter with a dog?",
      a: "Check it monthly and change it when it looks loaded. Dogs, especially heavy shedders, fill filters much faster than the package interval suggests.",
    },
  ],
  related: [
    { title: "House smells like cat pee", href: "/smells/cat-pee/", hint: "Finding hidden urine" },
    { title: "Musty smell in house", href: "/smells/musty/", hint: "If there's a damp note" },
    { title: "Musty smell from the AC", href: "/smells/musty/ac/", hint: "When vents smell" },
    { title: "All smells", href: "/smells/", hint: "Browse by odor" },
  ],
  sources: [SOURCES.epaMold],
  diagnose: { family: "pet-urine" },
  updated: "2026-10-02",
};
