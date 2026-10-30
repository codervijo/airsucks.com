import type { SmellPage } from "../types";

// "What does a dead mouse smell like" + "house smells like something died".
// Answers the identification question first, then finding it, then the
// can't-find-it path (wait it out well), then prevention. Health questions are
// kept to handling precautions: no medical claims (docs/prd.md § v2.A).
export const deadAnimal: SmellPage = {
  path: "/smells/dead-animal/",
  family: "sweet-chemical",
  label: "Dead animal smell",
  title: "Dead Mouse Smell in House? Find It or Wait It Out",
  description:
    "What a dead mouse or rat smells like, how to find it in a wall, ceiling, or duct, and what to do when you can't reach it: what helps and how long it lasts.",
  h1: "What does a dead mouse smell like? How to find it, and what to do if you can't",
  targets: [
    "what does a dead mouse smell like",
    "my house smells like something died",
    "dead mouse smell but can't find it",
    "will dead mouse smell go away on its own",
    "dead animal smell in house",
    "will vinegar get rid of dead animal smell",
  ],
  quickAnswer:
    "A dead mouse smells like rotting meat with a sickly-sweet edge. Some people also describe it as like rotten eggs or cabbage at first. It's concentrated in one spot and gets stronger over several days before it fades. You'll often see flies gathering at a window or light in that room. Find the strongest spot along walls, cabinets, and floors, then check behind appliances, in the attic or crawlspace, and in heating and AC ducts. If it's sealed inside a wall, the smell fades on its own over a few weeks for a mouse, longer for something bigger. Ventilation and odor absorbers make that time bearable.",
  urgency: "routine",
  causes: [
    {
      cause: "dead-animal",
      likelihood: "most common",
      note: "Usually a mouse or rat. Squirrels, birds, and bats in attics and chimneys smell stronger and longer.",
    },
    {
      cause: "rodent-urine",
      likelihood: "common",
      note: "Live mice smell different: musky and urine-like, steady rather than rising and fading. Often both are going on.",
    },
    {
      cause: "drain-biofilm",
      likelihood: "less common",
      note: "The look-alike at one sink or floor drain: a rotten smell that never fades and is strongest with your nose at the drain.",
    },
    {
      cause: "dry-p-trap",
      likelihood: "less common",
      note: "A rotten, sewer-like smell from a basement floor drain or an unused bathroom can pass for 'something died.'",
    },
  ],
  compare: {
    headers: ["What you notice", "Most likely", "What to do"],
    rows: [
      [
        "Rotten-sweet, one spot, getting stronger over days; flies indoors",
        "Recently dead mouse or rat",
        "Find it, or ventilate and wait",
      ],
      [
        "Stronger whenever the heat or AC runs, in several rooms",
        "Animal in a duct or return",
        "HVAC tech or pest control",
      ],
      [
        "Ceiling or upper wall; noises in the attic before",
        "Larger animal in the attic",
        "Wildlife control",
      ],
      [
        "Near the fireplace",
        "Bird or animal in the chimney",
        "Chimney sweep or wildlife control",
      ],
      [
        "Musky, urine-like, steady; droppings",
        "Live mice",
        "Pest control",
      ],
      [
        "At one drain; never fades",
        "Drain slime or dry trap",
        "Run water, clean the drain",
      ],
    ],
  },
  decision: [
    {
      question: "Does it smell like rot and rotten eggs together near a gas appliance or line?",
      yes: "Don't assume it's an animal. Rule out gas first: leave and call the utility from outside.",
      href: "/smells/gas/",
      no: "Keep going.",
    },
    {
      question: "Is the smell strongest right at a sink, tub, or floor drain?",
      yes: "Probably the drain. Run water into it and clean it before tearing into walls.",
      href: "/smells/sewage/",
      no: "Keep going.",
    },
    {
      question: "Does it spread through the house when the heating or AC runs?",
      yes: "Check the return grilles and the ducts closest to the strongest smell.",
      no: "Keep going.",
    },
    {
      question: "Can you narrow it to one wall, cabinet, or ceiling area?",
      yes: "Check every way into that space: behind and under appliances, the cabinet base, the attic or crawlspace above or below.",
      no: "Ventilate, use odor absorbers, and give it a week. The strongest spot becomes clearer as the smell peaks.",
    },
  ],
  checks: [
    {
      title: "Find the strongest spot, low and high",
      how: "Walk the house room by room with doors open, then go back to the worst room and smell along the walls at floor level and at head height. Mice usually die low: behind baseboards, under cabinets, in the floor cavity. Rats, squirrels, and birds die high: in ceilings and attics. Put your nose near outlet covers and gaps around pipes. Air from inside the wall comes out there.",
    },
    {
      title: "Follow the flies",
      how: "Blowflies find a carcass within days and show up at the nearest window or light. A cluster of flies on one window, or appearing from one cabinet, is the best pointer you'll get.",
    },
    {
      title: "Pull out the appliances",
      how: "Slide out the fridge, stove, washer, and dryer, and pull the toe-kick panel off the bottom of the dishwasher. These are warm, sheltered spots near food, and they're where mice most often end up. Check under the sink and inside the base of nearby cabinets too.",
    },
    {
      title: "Check the HVAC",
      how: "If the smell gets stronger when the heat or AC runs, take the cover off the return grille nearest the worst smell and look in with a flashlight. Check the furnace or air handler's filter area. Don't run the system longer than necessary while the smell is bad; it spreads it everywhere.",
    },
    {
      title: "Look for stains and other signs",
      how: "A carcass inside a wall or ceiling can leave a damp, yellow-brown stain on drywall after some days. Check traps you've set, and look in the attic and crawlspace with a flashlight if they're safe to enter.",
    },
  ],
  sections: [
    {
      heading: "How the smell changes over time",
      body: [
        "In the first day or two, many people don't notice anything, or they notice a faint, odd, slightly sulfurous or cabbage-like smell. Over the next several days it builds into the unmistakable rotten, sweet, heavy smell, often strong enough to fill the room. Then it fades as the body dries out. For a mouse in a wall, that usually means it's mostly gone in a few weeks. A rat takes longer, and a squirrel, bird, or anything bigger takes longer still.",
        "That pattern is the best way to tell it apart from other rotten smells. A dead animal rises and then fades. A smell from a drain, a sewer leak, or a gas problem doesn't follow that curve. If 'something died' and the smell is still the same a month later, it probably isn't an animal.",
      ],
    },
    {
      heading: "When you can't find it",
      body: [
        "Sometimes the honest answer is to wait it out. Cutting into drywall to find a mouse often costs more than it's worth, and the smell would fade by the time the repair is painted. A pest-control or wildlife technician can sometimes pinpoint it with a probe or a small inspection hole before you commit to opening the wall.",
        "While you wait: ventilate with windows open and a fan blowing out. Close off the room if you can. Set out activated charcoal, which absorbs odors rather than covering them. A bowl of white vinegar or baking soda absorbs a little, but don't expect much against a strong smell. Enzyme odor products sprayed into the gaps around outlets or pipes on that wall can help. Air fresheners only add perfume on top of the rot.",
      ],
    },
    {
      heading: "Removing it safely",
      body: [
        "Wear disposable gloves, and ideally a mask. Spray the carcass and the area around it with a household disinfectant and let it soak for several minutes. Don't sweep or vacuum droppings or nesting material dry, because that puts dust in the air. Pick it up with a bag turned inside out over your hand, seal it in a second bag, and put it in an outdoor trash can. Then disinfect the spot and wash your hands thoroughly, even after wearing gloves. Clean up any body fluids that soaked into a surface with an enzyme cleaner. If you have questions about your own health after handling an animal or its droppings, ask a clinician.",
      ],
    },
    {
      heading: "Stopping it from happening again",
      body: [
        "Poison baits are a common reason a mouse dies inside a wall. The poison works slowly, so the mouse goes back to its nest to die, which is often somewhere you can't reach. Snap traps placed along walls kill quickly where you can find and remove the mouse.",
        "Long-term, the fix is to keep them out. Seal gaps where pipes and wires enter the house, the space under doors and garage doors, and openings around vents, using steel wool or metal mesh plus sealant, because mice chew through foam alone. Make sure the chimney and attic vents have caps or screens.",
      ],
    },
    {
      heading: "Typical cases, including one that wasn't an animal",
      body: [
        "A kitchen with a rotten smell that got worse over four days, and flies on the window above the sink: the fridge came out, and the mouse was behind it near the compressor, where it was warm. Removing it and cleaning the spot ended the smell within a day.",
        "A whole-house smell that came and went: it was strongest every time the furnace kicked on. The cause was a mouse in the return duct right behind the grille in the hallway. The tell was that the smell spread through every room only while the blower ran.",
        "The one that wasn't: a homeowner spent three weeks sure that something had died in the basement, and the smell never faded. It was a floor drain whose trap had dried out, letting sewer gas in. A bucket of water fixed it in minutes. A smell that doesn't fade isn't a dead animal.",
      ],
    },
  ],
  diyStops: [
    "The carcass is inside a wall, ceiling, or floor you'd have to cut into.",
    "A larger animal (raccoon, squirrel, bird, bat) in the attic, chimney, or walls.",
    "Signs of an active rodent infestation: lots of droppings, chewing, or noise.",
    "The smell is in the ductwork and you can't reach it from a grille.",
    "Insulation-filled attics or crawlspaces that aren't safe to move around in.",
  ],
  whoToCall: [
    {
      trade: "pest-control",
      when: "To find and remove a dead mouse or rat you can't reach, and to deal with a live infestation.",
    },
    {
      trade: "wildlife-control",
      when: "Squirrels, birds, bats, or raccoons in the attic, walls, or chimney, and sealing their way in.",
    },
    {
      trade: "hvac",
      when: "The animal is in the ductwork or air handler and you can't reach it from a grille.",
    },
    { trade: "diy", when: "Anything you can reach: behind appliances, in cabinets, in traps." },
  ],
  faq: [
    {
      q: "How long does a dead mouse smell last?",
      a: "Usually a few weeks for a mouse. It peaks over several days and then fades as the body dries out. A rat, squirrel, or bird lasts longer. Warm, humid weather makes it stronger while it lasts.",
    },
    {
      q: "What do I do if I smell a dead mouse but can't find it?",
      a: "Narrow it down by smelling along walls low and high, follow any flies, and pull out the appliances nearby. If it's sealed in a wall, either have pest control pinpoint it or wait it out with ventilation and activated charcoal. It will fade.",
    },
    {
      q: "Will the dead mouse smell go away on its own?",
      a: "Yes. As the carcass dries out, the smell fades, usually within a few weeks for a mouse. If the smell hasn't changed after a month, look for another source like a drain or sewer leak.",
    },
    {
      q: "Does vinegar get rid of a dead animal smell?",
      a: "Only a little. A bowl of vinegar absorbs some odor from the air, and diluted vinegar is fine for wiping the spot after removal. Activated charcoal and enzyme odor products do more, and nothing works as well as removing the animal.",
    },
    {
      q: "Who do you call for a dead animal smell in the house?",
      a: "Pest control for mice and rats. Wildlife control for squirrels, birds, bats, and anything in the attic or chimney. An HVAC technician if it's in the ductwork. Many pest-control companies will locate and remove a carcass as a one-time job.",
    },
    {
      q: "Can a dead mouse smell like rotten eggs or sewage?",
      a: "It can have a sulfurous edge, especially early on, so people sometimes mistake it for a sewer or gas smell. The difference is the pattern: a dead mouse is in one spot and fades over weeks. Rule out gas if the smell is near a gas appliance, and check drains if it's strongest at one.",
    },
  ],
  related: [
    {
      title: "Rotten egg or sulfur smell",
      href: "/smells/rotten-eggs/",
      hint: "Rule out gas and drains",
    },
    {
      title: "House smells like cat pee",
      href: "/smells/cat-pee/",
      hint: "Live mice and urine",
    },
    {
      title: "Fishy smell in the house",
      href: "/smells/fishy/",
      hint: "Another one-spot smell",
    },
    { title: "Sewer smell in the house", href: "/smells/sewage/", hint: "If it never fades" },
  ],
  diagnose: { family: "sweet-chemical" },
  updated: "2026-10-29",
};
