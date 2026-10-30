// House-showing smell checklist (docs/prd.md § v3.E). Data only; rendered by
// src/routes/smells.checklist.tsx and printed via its print stylesheet. Every
// `href` must be a real smell page (enforced in src/__tests__/smells.test.ts).

export type ChecklistItem = {
  /** What to do or notice, phrased as a checkbox line. */
  check: string;
  /** What it usually means if you find it. */
  means: string;
  /** Guide for that smell. */
  href?: string;
};

export type ChecklistArea = {
  id: string;
  heading: string;
  /** One line on why this area matters at a showing. */
  why: string;
  items: ChecklistItem[];
};

export const CHECKLIST_AREAS: ChecklistArea[] = [
  {
    id: "arrival",
    heading: "The first breath at the front door",
    why: "Your nose adapts within minutes, so the first ten seconds inside are the most honest you'll get.",
    items: [
      {
        check: "Stop just inside the door and breathe in before anyone starts talking.",
        means: "Musty, sewer, smoke, or pet smells you notice now are real. Ten minutes later you may stop noticing them.",
      },
      {
        check: "Note any strong air freshener, candle, plug-in, or baking smell.",
        means: "Often just staging. But heavy scent in one room, or in a basement, can be covering a damp or pet problem.",
      },
      {
        check: "Note whether windows are open in cold or wet weather.",
        means: "Airing a house out right before a showing can hide a smell that comes back once it's closed up.",
      },
    ],
  },
  {
    id: "kitchen",
    heading: "Kitchen",
    why: "Sinks, disposals, and appliances are where hidden leaks and rotten smells start.",
    items: [
      {
        check: "Open the cabinet under the sink and smell. Look for stains, warping, or a damp floor.",
        means: "A musty or sour smell under the sink is usually a slow drain or supply leak.",
        href: "/smells/musty/no-visible-mold/",
      },
      {
        check: "Run the hot tap for a minute, then smell the water in a glass away from the sink.",
        means: "A rotten-egg smell from the hot water only is the water heater. It's fixable, but worth knowing.",
        href: "/smells/rotten-eggs/water/",
      },
      {
        check: "Smell around the fridge and stove at floor level.",
        means: "A rotten-sweet smell at one spot can be a dead mouse; a musky urine smell, live ones.",
        href: "/smells/dead-animal/",
      },
      {
        check: "If there's gas cooking, notice any sulfur or rotten-egg smell near the stove.",
        means: "Don't investigate. Mention it to the agent, and the utility should check it before anything else.",
        href: "/smells/gas/",
      },
    ],
  },
  {
    id: "bathrooms",
    heading: "Bathrooms",
    why: "More drain traps and seals than any other room, and the classic place for sewer smells.",
    items: [
      {
        check: "Smell each sink, tub, and shower drain, and the floor beside the toilet.",
        means: "Sewer smell at one drain is often a dry trap or slime. At the toilet base, a failed seal.",
        href: "/smells/sewage/bathroom/",
      },
      {
        check: "Rock the toilet gently with your knee. Look for stained or soft flooring around it.",
        means: "Movement or a soft floor means the seal, and possibly the subfloor, needs work.",
        href: "/smells/sewage/bathroom/",
      },
      {
        check: "Flush and listen to the sink and tub next to it.",
        means: "Gurgling after a flush points to a venting problem, which is a plumber job.",
        href: "/smells/sewage/",
      },
      {
        check: "Turn on the exhaust fan and look at the ceiling and caulk lines.",
        means: "A weak fan plus dark spots on the ceiling or caulk means the bathroom stays damp.",
        href: "/smells/musty/room/",
      },
    ],
  },
  {
    id: "bedrooms",
    heading: "Bedrooms and closets",
    why: "Closets on outside walls and rooms that are closed up hide mildew and old pet odors.",
    items: [
      {
        check: "Open every closet, especially on outside walls, and smell the back corners.",
        means: "A musty closet means moisture on that wall, from condensation or a leak behind it.",
        href: "/smells/musty/closet/",
      },
      {
        check: "Smell the carpet at floor level along walls and in corners.",
        means: "An ammonia or cat-pee smell low down is usually old pet urine in the pad or subfloor.",
        href: "/smells/cat-pee/",
      },
      {
        check: "Feel outlets and switch plates near any odd fishy or hot-plastic smell.",
        means: "Warm cover plates or a fishy smell can mean an overheating electrical part.",
        href: "/smells/fishy/",
      },
    ],
  },
  {
    id: "basement",
    heading: "Basement and crawlspace",
    why: "Below-grade spaces are where water gets in, and where sellers most often mask smells.",
    items: [
      {
        check: "Smell as you walk down the stairs, before your nose adjusts.",
        means: "An earthy, musty smell means damp. The question is whether it's humidity or water coming in.",
        href: "/smells/musty/basement/",
      },
      {
        check: "Look at the base of the walls and floor for tide lines, white crust, or fresh paint on one patch.",
        means: "Stains and white mineral deposits show where water has come in. Fresh paint on one patch can hide them.",
        href: "/smells/musty/basement/",
      },
      {
        check: "Find the floor drain and the sump or ejector pit, and smell near each one.",
        means: "Sewer smell from a floor drain is often just a dry trap. From a pit, check that the lid is sealed.",
        href: "/smells/sewage/",
      },
      {
        check: "Check for a running dehumidifier and look at its bucket.",
        means: "A full bucket or a dehumidifier running hard tells you how damp the space really is.",
        href: "/smells/musty/",
      },
    ],
  },
  {
    id: "systems",
    heading: "Heating, cooling, and the water heater",
    why: "Turning the system on is the quickest way to find smells that only show up when it runs.",
    items: [
      {
        check: "Ask to run the AC or heat for a few minutes, and smell at a vent.",
        means: "Musty air from the vents points to the AC coil or drain. A chemical or sweet smell can be a refrigerant or fluid leak.",
        href: "/smells/musty/ac/",
      },
      {
        check: "Smell around the furnace and water heater.",
        means: "Any sulfur or rotten-egg smell near a gas appliance needs a utility or plumber check before you buy.",
        href: "/smells/gas/",
      },
      {
        check: "Look at the HVAC filter if you can get to it.",
        means: "A filthy filter suggests the system hasn't been maintained, and can be a musty smell source by itself.",
        href: "/smells/musty/ac/",
      },
    ],
  },
  {
    id: "outside",
    heading: "Outside and the garage",
    why: "Some indoor smells start outside, and the garage is where products and batteries live.",
    items: [
      {
        check: "On septic, walk over the tank and drain field and smell; look for soggy or extra-green patches.",
        means: "A sewage smell or soggy ground over the field is a septic problem, which can be expensive.",
        href: "/smells/sewage/",
      },
      {
        check: "Smell the garage for fuel, solvent, or a rotten-egg smell near batteries.",
        means: "Stored products leak. A rotten-egg smell near a battery or charger means it may be overheating.",
        href: "/smells/chemical/",
      },
    ],
  },
];

/** Signs a smell is being covered up. */
export const MASKING_SIGNS: string[] = [
  "Several plug-in fresheners or candles in one room, especially a basement or closet.",
  "Fresh paint on one wall section, a ceiling patch, or the lower part of basement walls.",
  "New carpet or rugs in just one room, or rugs placed over an area of flooring.",
  "Windows open and fans running on a cold or rainy day.",
  "A seller who asks you not to open certain closets or cabinets.",
];

/** Things a nose can't check: why the buyer still needs alarms and tests. */
export const CANT_SMELL: { item: string; detail: string }[] = [
  {
    item: "Carbon monoxide",
    detail: "Has no smell at all. Check that there are working CO alarms on every level and near bedrooms, and budget for them if not.",
  },
  {
    item: "Radon",
    detail: "EPA notes you can't see or smell it, and testing is the only way to know the level. Ask whether the home has been tested, or test during the inspection period.",
  },
  {
    item: "Most well-water problems",
    detail: "Many contaminants have no smell or taste. On a private well, get a lab test, not just a sniff test.",
  },
];

export const ASK_SELLER: string[] = [
  "Has there ever been water in the basement or crawlspace? When, and what was done?",
  "Have you had any plumbing, sewer, or septic work? Is the septic pumped on a schedule?",
  "Have pets lived here? Were any carpets or floors replaced because of them?",
  "Has anyone smoked inside?",
  "Any mold remediation, and is there paperwork?",
  "How old are the furnace, AC, and water heater?",
];

export const ASK_INSPECTOR: string[] = [
  "Check the areas where you noticed a smell, and tell the inspector exactly where.",
  "A sewer camera scope of the main line if the house is older or had any sewer smell.",
  "Moisture readings in the basement, crawlspace, and any musty closet or wall.",
  "A radon test, if the home hasn't had a recent one.",
  "A water test if the home is on a private well.",
];
