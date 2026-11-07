import { SOURCES } from "../reference";
import type { SmellPage } from "../types";

// v3.G cause page #6. Targets "mouse urine smell" (880 US/mo), "mouse pee
// smell" (880) and "rat urine smell" (480), all KD 0 — DataForSEO,
// 2026-11-07. SERP (2026-11-07) is a mismatch: a pet-odor product page,
// human-urine health pages, Reddit. PAA: "Will the smell of mouse urine ever
// go away?", "Is mouse urine smell bad for you?", "How long does mouse urine
// remain infectious?". Cleanup steps follow CDC's current page exactly
// (bleach 1.5 cups/gallon ≈ 1:9, 5-minute soak, air out 30 minutes).
export const causeMouseUrine: SmellPage = {
  path: "/smells/causes/mouse-urine/",
  about: "rodent-urine",
  family: "pet-urine",
  label: "Mouse urine smell",
  title: "Mouse Urine Smell: Confirm It, Clean It Safely",
  description:
    "A sharp ammonia smell in cabinets or walls, and no pets? How to tell it's mice or rats, the CDC way to clean urine and droppings, and how to stop it coming back.",
  h1: "Mouse urine smell: how to tell it's mice, and how to get rid of it safely",
  targets: [
    "mouse urine smell",
    "mouse pee smell",
    "rat urine smell",
    "mouse urine smell in house",
    "how to get rid of mouse urine smell in walls",
    "does mouse urine smell go away",
  ],
  quickAnswer:
    "Mouse and rat urine smells sharp and stale, like ammonia or an uncleaned pet cage, and it's strongest in closed spaces: kitchen cabinets, under the sink, behind the stove or fridge, the pantry, closets, and the attic. One stray mouse rarely makes a smell you notice, so a lingering odor usually means mice have been using the same paths for a while. Confirm it by finding droppings, gnaw marks, or a nest. Then remove the mice, seal the way they got in, and clean up the way CDC recommends. Don't sweep or vacuum droppings: wet them with disinfectant first. The smell goes when the soaked materials are cleaned or replaced, not before.",
  urgency: "soon",
  causes: [
    {
      cause: "rodent-urine",
      likelihood: "most common",
      note: "A sharp ammonia smell with droppings nearby, scratching at night, or chewed packaging. Mice urinate constantly as they move, so the smell follows their runways along walls and behind appliances.",
    },
    {
      cause: "hidden-pet-urine",
      likelihood: "common",
      note: "In a house that's had cats or dogs, now or under a previous owner, old urine in carpet pad or subfloor smells similar and comes back in humid weather. No droppings points this way.",
    },
    {
      cause: "dead-animal",
      likelihood: "common",
      note: "If the smell turned sweet and rotten, got stronger over a few days, and is focused on one spot in a wall or ceiling, a mouse has likely died there, often after poison bait.",
    },
    {
      cause: "boxwood-shrubs",
      likelihood: "less common",
      note: "A cat-pee smell that comes in through open windows in warm, humid weather, with boxwoods planted outside, is the shrubs. Crush a leaf to check.",
    },
  ],
  compare: {
    headers: ["What you notice", "Most likely", "Next step"],
    rows: [
      [
        "Sharp ammonia smell in a cabinet or pantry; small dark droppings",
        "Mice",
        "Trap, seal entry points, clean per CDC",
      ],
      [
        "Musky, heavier smell; larger droppings; noises in the attic or walls",
        "Rats",
        "Pest control; seal larger gaps",
      ],
      [
        "Urine smell near carpet or baseboards, no droppings, past pets",
        "Old pet urine",
        "UV light hunt, enzyme cleaner, pad replacement",
      ],
      [
        "Sweet, rotten smell from one spot, getting stronger",
        "A dead mouse in the wall",
        "Find it or wait it out",
      ],
      [
        "Smell comes in through windows in warm weather, boxwoods outside",
        "The shrubs",
        "Close those windows on warm days",
      ],
    ],
  },
  decision: [
    {
      question: "Has the smell turned sweet and rotten, and is it focused on one spot?",
      yes: "That's a dead animal, not urine.",
      href: "/smells/dead-animal/",
      no: "Keep going.",
    },
    {
      question: "Can you find droppings, gnaw marks, or nesting material near where it smells?",
      yes: "It's rodents. Trap, seal, and clean (below). Heavy activity, an attic or wall nest, or rats: call pest control.",
      no: "Keep going.",
    },
    {
      question: "Have there been cats or dogs in the house, now or with a previous owner?",
      yes: "Old pet urine is the likelier source. Hunt for it with a UV light.",
      href: "/smells/cat-pee/",
      no: "Set a couple of snap traps along the wall where it smells. A catch within a few nights settles it.",
    },
  ],
  checks: [
    {
      title: "Look for droppings with a flashlight",
      how: "Check the back corners of lower cabinets, under the sink, behind and under the stove and fridge, the pantry floor, drawers, and along the wall in the garage and basement. Mouse droppings are small, dark, and pointed, like large grains of rice; rat droppings are much bigger. Fresh ones are dark and soft; old ones are grey and crumbly. Don't touch or sweep them.",
    },
    {
      title: "Find their runways",
      how: "Mice travel along walls, not across open floor. Look for smudgy grease marks along baseboards and around holes, chewed food packaging, shredded paper, insulation, or fabric (nesting material), and gnaw marks on wood or plastic. A UV flashlight in a dark room can show dried urine trails along these paths.",
    },
    {
      title: "Listen at night",
      how: "Scratching or scurrying in walls, ceilings, or the attic after the house goes quiet is a strong sign. Mice and rats are mostly active at night.",
    },
    {
      title: "Check the outside where pipes and wires enter",
      how: "CDC lists the places to look: gaps around pipes, utility lines, and vents, around doors and windows without weather stripping, between the foundation and the ground, and up at the roof, eaves, and soffits. CDC notes a mouse can fit through a hole the width of a pencil.",
    },
  ],
  sections: [
    {
      heading: "Why mouse pee smells so strong",
      body: [
        "Mice don't use one spot. They urinate in small amounts constantly as they move and mark their paths, so a household of mice lays down urine trails along every wall they travel. As it dries and breaks down, it gives off ammonia. In a closed cabinet, a wall cavity, or a warm attic, that builds up into the sharp, stale smell people notice. Rats leave more per animal, with a heavier, muskier smell.",
        "That's also why the smell doesn't leave with the mice. Urine soaks into cabinet bases, particleboard, drywall paper, insulation, and cardboard. Until those are cleaned, sealed, or replaced, warmth and humidity keep releasing it.",
      ],
    },
    {
      heading: "Cleaning up safely, the CDC way",
      body: [
        "Rodent urine and droppings can carry hantavirus and other diseases, so CDC's cleanup steps are specific, and the most important one is what not to do: don't sweep or vacuum urine, droppings, or nests. That can stir virus-carrying particles into the air. Instead, open doors and windows for 30 minutes before you start, and put on rubber or plastic gloves.",
        "Spray the urine and droppings until very wet with an EPA-registered disinfectant or a bleach solution, which CDC gives as 1.5 cups of household bleach in 1 gallon of water. Let it soak for 5 minutes, or as long as the disinfectant label says. Wipe it up with paper towels, throw them in a covered garbage can, then mop or sponge the area with disinfectant. Wash your gloved hands with soap and water or disinfectant before taking the gloves off, then wash your hands again.",
        "For the rest: CDC says to shampoo carpets and upholstery with a commercial disinfectant or use a commercial-grade steam cleaner, and to launder bedding and clothing in hot water with detergent. Insulation soaked with urine and droppings goes into plastic bags for removal. For a heavy infestation, rodents in the heating and cooling ducts, or anywhere you can't safely reach, get a professional.",
      ],
    },
    {
      heading: "Getting the smell out for good",
      body: [
        "After the disinfecting cleanup, the lingering smell lives in whatever soaked it up. Hard, sealed surfaces clean up fully. Porous materials are the problem: a stained particleboard cabinet floor, the paper face of drywall, cardboard, and insulation. Replace what's cheap to replace: shelf liner, cabinet floor panels, boxes. Seal stained wood and drywall with a stain-blocking primer once it's clean and dry. An enzyme cleaner made for urine helps on surfaces that can take it, after the disinfecting step.",
        "In walls and attics, the honest answer is that the smell fades slowly once the mice are gone and the access is sealed. Badly soiled attic insulation is often removed and replaced, which is a job for a pest control or insulation company with the right protective equipment.",
      ],
    },
    {
      heading: "Stopping them coming back",
      body: [
        "Sealing up does more than trapping. CDC's method is steel wool in small holes with caulk or spray foam around it to hold it in. Caulk or foam alone isn't enough. For larger gaps, use lath screen or metal, cement, hardware cloth, or metal sheeting. Go around pipes under sinks, where utility lines come through walls, behind appliances, and outside at the foundation and roofline.",
        "Inside, trap rather than poison where you can. A poisoned mouse often dies inside a wall, and then you're dealing with the rotten smell of a dead animal on top of the urine. Store food, pet food, and birdseed in sealed containers, and fix the dripping trap or leak under the sink, which is a water source for them.",
      ],
    },
    {
      heading: "Three kitchens",
      body: [
        "A sink cabinet that smelled like ammonia every time it was opened. Behind the trash can were droppings and a gnawed gap around the drain pipe where it came through the wall. Steel wool and caulk in the gap, three snap traps, and a CDC-style cleanup, plus a new piece of shelf liner, fixed it within two weeks.",
        "A pantry that smelled faintly of urine in a house with no pets and no visible droppings. A UV flashlight showed trails along the back of the bottom shelf, and a trap caught two mice in two nights. They were coming up through a gap behind the dishwasher.",
        "The failure case: a homeowner who put out poison bait in the attic. The mice stopped showing up, then, a week later, the guest bedroom smelled like something had died. Two mice had died in the wall. The urine smell in the attic stayed too, because the soiled insulation was never removed. Both problems took longer and cost more than trapping and sealing would have.",
      ],
    },
  ],
  diyStops: [
    "Heavy activity, nests in the walls or attic, or rats. That's pest control.",
    "Soiled attic or wall insulation. Removal needs proper protective equipment.",
    "Rodents in the heating and cooling ducts. CDC says to call a professional.",
    "Anyone in the house who feels unwell after cleaning or exposure. Tell a doctor about the rodents.",
  ],
  whoToCall: [
    {
      trade: "pest-control",
      when: "Ongoing activity, rats, nests in walls or attics, or entry points you can't find or reach.",
    },
    {
      trade: "hvac",
      when: "Signs of rodents in the ducts or air handler, after pest control has removed them.",
    },
    {
      trade: "diy",
      when: "Trapping, sealing small gaps, and a CDC-style cleanup of cabinets and floors.",
    },
  ],
  faq: [
    {
      q: "Will the smell of mouse urine ever go away?",
      a: "Yes, once the mice are gone and what they soaked is cleaned or replaced. On hard surfaces it clears after a proper cleanup. In cabinets made of particleboard, drywall, cardboard, and insulation it lingers until those are replaced or sealed. In walls you can't reach, it fades slowly over weeks to months once the activity stops.",
    },
    {
      q: "Is mouse urine smell bad for you?",
      a: "The ammonia smell itself is mainly an irritant, but rodent urine and droppings can carry diseases, including hantavirus. That's why CDC's cleanup rules matter: air the space out, wear gloves, wet everything with disinfectant before wiping, and never sweep or vacuum it dry. If anyone feels unwell after exposure, tell a doctor about the rodents. We don't give medical advice.",
    },
    {
      q: "How can I tell if it's mouse urine or cat urine?",
      a: "They smell similar. Location and evidence tell them apart: mice leave droppings and gnaw marks, and the smell is in cabinets, walls, and along runways. Cat urine is usually in carpets, corners, and furniture, in a house that has or had a cat. A UV light shows both, but mouse trails run along walls in thin lines.",
    },
    {
      q: "How do I get rid of mouse urine smell in walls?",
      a: "Stop the mice first: trap them and seal the entry points. Then clean what you can reach, from cabinet bases to outlets and gaps, using CDC's disinfect-then-wipe method. If the smell is strong and lasting, the insulation or drywall in that cavity may need opening up and replacing. That's work for a pest control or restoration company.",
    },
    {
      q: "Does mouse urine smell worse in summer?",
      a: "Often, yes. Warmth and humidity make dried urine release more odor, and attics and closed cabinets get warm. A smell that comes back every summer after you thought it was gone usually means soaked material that was never removed.",
    },
  ],
  related: [
    {
      title: "House smells like cat pee",
      href: "/smells/cat-pee/",
      hint: "Including with no cat",
    },
    {
      title: "Dead mouse smell",
      href: "/smells/dead-animal/",
      hint: "When it turns rotten",
    },
    {
      title: "Chemical or ammonia smell",
      href: "/smells/chemical/",
      hint: "If it's sharper than urine",
    },
    {
      title: "House smells like dog",
      href: "/smells/dog/",
      hint: "Pet odors in fabric and floors",
    },
  ],
  sources: [SOURCES.cdcRodentCleanup, SOURCES.cdcRodentSealUp, SOURCES.humanePetStains],
  diagnose: { family: "pet-urine", location: "kitchen" },
  updated: "2026-11-07",
};
