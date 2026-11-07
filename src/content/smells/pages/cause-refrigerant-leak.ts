import { SOURCES } from "../reference";
import type { SmellPage } from "../types";

// v3.G cause page #2. Targets "what does freon smell like" (2.9K US/mo, KD 0)
// and "refrigerant leak smell" (390) — DataForSEO, 2026-11-07. SERP
// (2026-11-07): HVAC contractor blogs, Quora, Reddit, a Facebook group. PAA:
// "Can a refrigerant leak make you sick?", "Can I stay in my house with a
// refrigerant leak?", "Does R134a smell?". The chemical page already has a
// short refrigerant section; this page answers the smell question in full and
// sends solvent/VOC smells back there.
export const causeRefrigerantLeak: SmellPage = {
  path: "/smells/causes/refrigerant-leak/",
  about: "refrigerant-leak",
  family: "sweet-chemical",
  label: "Refrigerant (Freon) leak",
  title: "What Does Freon Smell Like? Refrigerant Leak Signs",
  description:
    "Freon and modern refrigerants barely smell at all. What a leak can smell like, the signs that matter more than smell, and whether it's safe to stay home.",
  h1: "What does Freon smell like? Usually nothing, and that's the problem",
  targets: [
    "what does freon smell like",
    "refrigerant leak smell",
    "what does a refrigerant leak smell like",
    "what does freon smell like in a house",
    "can a refrigerant leak make you sick",
    "can i stay in my house with a refrigerant leak",
  ],
  quickAnswer:
    "Refrigerant (\"Freon\" is a brand name people use for all of them) has little or no smell. When people do notice one, they describe it as faintly sweet, like chloroform, or like nail polish remover, and often it's the oil that circulates with the refrigerant rather than the gas. Because so many leaks have no smell, the reliable signs are an AC or heat pump that cools less than it used to, ice on the indoor coil or the copper lines, oily residue at a fitting, and a hiss at the unit. A small leak at a home AC or fridge isn't usually a reason to leave, but if anyone feels dizzy or short of breath, get fresh air first, and have a certified technician find and fix the leak.",
  urgency: "soon",
  safety: {
    title: "When a chemical smell means get out first",
    when: [
      "Anyone feels dizzy, light-headed, short of breath, or has a headache that eases outside",
      "A large, sudden release: a loud hiss, a visible fog at the unit, or frost forming fast on a line",
      "A rotten-egg or sulfur smell, which is not refrigerant and may be gas",
      "A burning, hot-plastic, or fishy smell near the unit or an outlet",
    ],
    actions: [
      "Get everyone into fresh air and open windows and doors on your way out if it's safe to.",
      "Turn the AC or heat pump off at the thermostat. Don't stay in a small, closed room with the indoor unit.",
      "For a rotten-egg smell, leave and call the gas utility or 911 from outside. Don't touch switches.",
      "Call an HVAC or appliance technician. Refrigerant repair needs a certified tech.",
    ],
    note: "Refrigerant vapor is heavier than air. In a small closed space, such as a utility closet, a basement, or a room with the indoor unit, it can build up near the floor and push out oxygen. OSHA lists dizziness as the early warning sign.",
  },
  causes: [
    {
      cause: "new-materials-voc",
      likelihood: "most common",
      note: "The usual 'nail polish' or solvent smell in a house is new paint, flooring, furniture, or a product in a cabinet, not the AC. It's strongest in one room and fades over days.",
    },
    {
      cause: "refrigerant-leak",
      likelihood: "common",
      note: "A faint sweet or chemical smell at the vents or the indoor unit, plus weaker cooling, ice on the lines, or a hiss. The smell alone isn't proof. The cooling problem is the better clue.",
    },
    {
      cause: "ac-coil-drain",
      likelihood: "common",
      note: "If the AC smell is musty, damp, or like dirty socks, it's growth on the coil or in the drain pan, not refrigerant.",
    },
    {
      cause: "heating-glycol-leak",
      likelihood: "less common",
      note: "A sweet, syrupy smell when the heat is on in a house with a boiler and radiators or baseboards is more likely glycol heating fluid than refrigerant.",
    },
    {
      cause: "electrical-overheating",
      likelihood: "less common",
      note: "A sharp chemical, hot-plastic, or fishy smell at the unit, an outlet, or a breaker panel is electrical. Don't wait on it.",
    },
  ],
  compare: {
    headers: ["What you notice", "Points to", "Next step"],
    rows: [
      [
        "Faint sweet or chemical smell at the vents, AC isn't keeping up, ice on the lines",
        "Refrigerant leak",
        "AC off, call HVAC",
      ],
      [
        "Nail polish or paint smell, strongest in one room, something new in it",
        "Off-gassing from new materials or products",
        "Ventilate, remove the source",
      ],
      ["Musty, damp, 'dirty socks' from the vents", "Coil or drain pan growth", "Coil and drain cleaning"],
      [
        "Sweet, syrupy smell near the boiler or baseboards when the heat is on",
        "Glycol heating fluid leak",
        "Heating contractor",
      ],
      [
        "Hot plastic, burning, or fishy, near the unit or an outlet",
        "Electrical overheating",
        "Power off, electrician or HVAC today",
      ],
      [
        "Fridge stopped cooling, a hiss or oily spot at the back",
        "Fridge sealed-system leak",
        "Appliance repair",
      ],
    ],
  },
  decision: [
    {
      question: "Does anyone feel dizzy, sick, or short of breath, or is it a rotten-egg smell?",
      yes: "Fresh air first. For rotten eggs, leave and call the gas utility from outside.",
      href: "/smells/gas/",
      no: "Keep going.",
    },
    {
      question: "Is the AC or heat pump cooling or heating less well than it used to, or is there ice on the lines?",
      yes: "A refrigerant leak is likely, whatever it smells like. Turn the system off and call HVAC.",
      no: "Keep going.",
    },
    {
      question: "Is the smell musty or like dirty socks?",
      yes: "That's the coil or the drain pan, not refrigerant.",
      href: "/smells/causes/dirty-sock-syndrome/",
      no: "Keep going.",
    },
    {
      question: "Has anything new come into the house: paint, flooring, furniture, cleaning or hobby products?",
      yes: "Start with those. Most solvent smells are off-gassing.",
      href: "/smells/chemical/",
      no: "Have the system checked anyway. A slow leak can smell before cooling drops off.",
    },
  ],
  checks: [
    {
      title: "Compare the cooling, not just the smell",
      how: "Hold your hand at a supply vent after the AC has been running a while. Then think back: is the system running longer than last summer, or struggling on days it used to handle? A leak lowers the charge gradually, so 'it's not as cold as it used to be' is the most common sign people have, and the one they ignore.",
    },
    {
      title: "Look for ice and oil",
      how: "With the system running, look at the larger insulated copper line at the outdoor unit and, if you can see it, the indoor coil. Frost or ice on either, in summer, is a classic low-refrigerant sign. With the system off, look at the brass service valves and visible joints for an oily, dirty-looking spot. Refrigerant carries oil, and oil collects dust where it leaks out.",
    },
    {
      title: "Listen at both units",
      how: "A hiss or bubbling sound at the indoor coil, the outdoor unit, or along the lines can be refrigerant escaping. A loud hiss and a sudden drop in cooling is a bigger leak: turn the system off.",
    },
    {
      title: "Find where the smell is strongest",
      how: "Walk from room to room, then to the indoor unit (attic, closet, basement) and the vents. Refrigerant vapor is heavier than air, so a smell from the indoor unit tends to sit low in that space. A smell that's strongest in one room, far from the system, is more likely something in that room.",
    },
    {
      title: "Check the fridge and any window or portable units",
      how: "Refrigerators, freezers, window units, and dehumidifiers all have sealed refrigerant systems. A fridge that's warm inside with the compressor running, a hiss at the back, or an oily spot under it is a sealed-system problem for appliance repair.",
    },
  ],
  sections: [
    {
      heading: "Why refrigerant is so hard to smell",
      body: [
        "Home air conditioners, heat pumps, and refrigerators use refrigerants chosen partly because they're stable and low in toxicity. Most have no strong smell. OSHA's guidance on refrigeration work describes the common ones as giving off vapor with a faint sweet odor, and GE describes the refrigerants in its fridges as odorless. So what people smell during a leak is often faint, and sometimes it's the compressor oil that travels with the refrigerant and leaks out with it, not the gas itself.",
        "That's why HVAC blogs list half a dozen descriptions: sweet, chloroform, nail polish, ether, even 'like cut grass'. No single smell reliably means refrigerant. A nail-polish smell with perfectly good cooling is usually something else in the house. A faint sweet smell from the vents plus an AC that can't keep up is very likely a leak.",
      ],
    },
    {
      heading: "Which refrigerant is in your system",
      body: [
        "The label on the outdoor unit's data plate names it. Many existing systems use R-410A, and older ones may still use R-22. Under EPA's HFC rules, new home AC and heat pump systems installed from January 1, 2025 must use lower-impact refrigerants, with an exception for systems built from components made before that date. EPA lists R-454B and R-32, two common replacements, as ASHRAE class A2L: lower flammability, approved for new equipment only, with conditions attached.",
        "That matters for repairs, not for smell. A2L systems need technicians and parts rated for them, and a system can only be charged with the refrigerant it was designed for. Refrigerators commonly use R-134a or isobutane (R-600a). Isobutane is flammable, but a household fridge holds a small charge.",
      ],
    },
    {
      heading: "Is it safe to stay in the house?",
      body: [
        "For the typical slow leak in a central AC or heat pump, yes. The amount escaping into a whole house at once is small. The risk rises in small, closed spaces: refrigerant is heavier than air and can displace oxygen near the floor. OSHA names dizziness as the early warning sign, with more serious effects at high exposures. So if the smell is strong in a closet or basement where the indoor unit sits, or anyone feels dizzy or short of breath, ventilate and get out of that space.",
        "Don't touch frosted lines or liquid refrigerant. It's cold enough to cause frostbite on skin, which GE also warns about for fridge leaks. And keep open flames away from a known leak. When refrigerant reaches a flame or a very hot surface it breaks down into acidic, irritating fumes. OSHA flags this for welding and brazing near refrigerant, and it's also why a leak near a gas furnace burner can smell sharp and acrid rather than sweet.",
      ],
    },
    {
      heading: "What fixing it actually involves",
      body: [
        "Refrigerant work is for certified technicians: EPA's Section 608 program certifies the people who service equipment that can release refrigerant, and a home system needs gauges, recovery equipment, and the right refrigerant. This isn't a DIY job. The tech should confirm low charge with gauges, find the leak (electronic detector, bubble solution, or UV dye), repair it, pull a vacuum, and recharge to the manufacturer's spec. Ask where the leak was and what was done to it.",
        "Be wary of 'topping it off' every summer without finding the leak. The refrigerant you pay for leaks out again, and running low on charge can freeze the coil and overwork the compressor. If the leak is in an old indoor coil, replacing the coil, or the system if it's near the end of its life, can be the cheaper long-term answer.",
      ],
    },
    {
      heading: "Three homes, three answers",
      body: [
        "A heat pump that 'smelled like chemicals' at the bedroom vents and had been running nonstop for weeks without reaching the thermostat setting: the larger line at the outdoor unit was frosted over. The technician found a pinhole leak in the indoor coil. The smell was faint, but the cooling and the ice were the giveaways.",
        "A kitchen that smelled like nail polish remover for a week, blamed on the fridge. The fridge was cold and quiet. The smell was strongest under the sink, where a can of solvent-based adhesive had a split lid. Bagging it and airing the cabinet fixed it in a day.",
        "The failure case: an AC 'recharged' two summers in a row with no leak search. Each time it cooled for a few months, then faded. The third technician leak-tested it, found a corroded fitting at the outdoor unit, and fixed it for less than one of the recharges had cost.",
      ],
    },
  ],
  diyStops: [
    "Any suspected refrigerant leak. Testing, repair, and recharging are for a certified HVAC or appliance technician.",
    "Frost on the lines or coil: turn the system off and leave the ice alone.",
    "A fridge or freezer that's warm with the compressor running, or a hiss from the back.",
    "Dizziness, headache, or shortness of breath in the house: ventilate and get out of the space first.",
  ],
  whoToCall: [
    {
      trade: "hvac",
      when: "Weaker cooling or heating, ice on the lines, a hiss at the unit, or a sweet chemical smell at the vents.",
    },
    {
      trade: "appliance-repair",
      when: "A refrigerator, freezer, or window unit that's stopped cooling or is hissing.",
    },
    {
      trade: "electrician",
      when: "A burning, hot-plastic, or fishy smell at an outlet, switch, or the panel.",
    },
    { trade: "gas-utility", when: "Any rotten-egg or sulfur smell. Call from outside." },
  ],
  faq: [
    {
      q: "Can a refrigerant leak make you sick?",
      a: "A slow leak from a home AC or fridge rarely releases enough to matter in an open, ventilated house. In a small, closed space, refrigerant can build up and displace oxygen, and OSHA lists dizziness as the early warning sign. If anyone feels dizzy, short of breath, or has a headache, get fresh air, turn the system off, and call a technician. Seek medical help for symptoms that don't clear quickly outdoors.",
    },
    {
      q: "Can I stay in my house with a refrigerant leak?",
      a: "Usually, yes, if the leak is small and the house is ventilated. Turn the AC off until it's repaired, keep the space with the indoor unit aired out, and avoid open flames near it. Leave if the smell is strong in a closed room, there's a loud hiss or fog at the unit, or anyone has symptoms.",
    },
    {
      q: "Does R-410A or R-134a have a smell?",
      a: "Very little. Both are generally described as having little or no odor, and GE describes the refrigerants in its refrigerators, R-134a among them, as odorless. If you notice a faint sweet or chemical smell during a leak, it may be the compressor oil carried with the refrigerant. Don't rely on your nose to rule a leak in or out.",
    },
    {
      q: "What does a Freon leak smell like in a car?",
      a: "Car AC refrigerant is just as faint, so a strong sweet smell inside a car is more often engine coolant (a heater core leak, often with fogged windows), and a musty smell is growth on the evaporator. A car AC that blows warm and has been recharged before is the better sign of a refrigerant leak.",
    },
    {
      q: "How long does it take for refrigerant smell to go away?",
      a: "Refrigerant itself doesn't linger once the space is aired out and the leak has stopped. If a 'refrigerant smell' hangs around for days, it's probably something else: oil residue at the leak, off-gassing from something new, or growth on the coil.",
    },
    {
      q: "Can I add refrigerant myself?",
      a: "Not to a home central AC or heat pump. That's work for a technician certified under EPA's Section 608 program, and adding refrigerant without fixing the leak only delays the next failure. Newer systems with A2L refrigerants also need A2L-rated tools and procedures.",
    },
  ],
  related: [
    {
      title: "Chemical or nail polish smell in the house",
      href: "/smells/chemical/",
      hint: "Paint, glue, solvents, off-gassing",
    },
    {
      title: "Dirty sock syndrome",
      href: "/smells/causes/dirty-sock-syndrome/",
      hint: "Musty smell from the AC or heat pump",
    },
    {
      title: "Musty smell from the AC",
      href: "/smells/musty/ac/",
      hint: "Coil, drain pan, ducts",
    },
    {
      title: "Burning plastic or electrical smell",
      href: "/smells/burning-plastic/",
      hint: "If it smells hot",
    },
    {
      title: "Smell gas in the house?",
      href: "/smells/gas/",
      hint: "Rotten eggs is never refrigerant",
    },
  ],
  sources: [
    SOURCES.epa608,
    SOURCES.oshaRefrigeration,
    SOURCES.epaAcRefrigerants,
    SOURCES.epaHfcSectors,
    SOURCES.geSealedSystem,
  ],
  diagnose: { family: "sweet-chemical", location: "hvac-vents" },
  updated: "2026-11-07",
};
