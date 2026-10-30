import { SOURCES } from "../reference";
import type { SmellPage } from "../types";

// "Acetone / nail polish / paint thinner smell in house." Off-gassing and
// stored products first, then the refrigerant claim every HVAC blog makes,
// stated with the hedge it needs. Electrical overheating is in the cause list
// (some parts smell chemical before they smell burnt), so the page carries a
// safety block. Health questions stay at "leave, ventilate, Poison Control".
export const chemical: SmellPage = {
  path: "/smells/chemical/",
  family: "sweet-chemical",
  label: "Chemical smell",
  title: "Chemical Smell in House? Acetone, Paint Thinner & More",
  description:
    "A nail-polish, acetone, or paint-thinner smell in the house: new materials, stored products, a refrigerant leak, or something hot. How to tell them apart.",
  h1: "Chemical smell in the house: what an acetone or paint-thinner smell usually means",
  targets: [
    "acetone smell in house",
    "house smells like paint thinner or nail polish",
    "why does my house smell like paint thinner",
    "weird chemical smell in house all of a sudden",
    "sweet chemical smell in house",
    "chemical smell in house not gas",
  ],
  quickAnswer:
    "A solvent, acetone, or paint-thinner smell in a house most often comes from something giving off fumes: fresh paint, finish, glue, new flooring or furniture, or a product that's leaking in a cabinet or the garage. If nothing has changed and the smell comes from the vents or near the AC, heat pump, or fridge, a refrigerant leak is the next suspect, especially if cooling has gotten weaker. A chemical smell near an outlet, switch, or appliance that's warm is electrical and needs checking today. If anyone feels dizzy, sick, or gets a headache, leave and ventilate first.",
  urgency: "soon",
  safety: {
    title: "Get out first if",
    when: [
      "Anyone feels dizzy, light-headed, nauseous, or gets a headache that eases outside",
      "The smell is strong and spreading, and you can't tell where it's coming from",
      "It's near an outlet, switch, panel, or appliance that's warm, buzzing, or discolored",
      "It has a rotten-egg or sulfur note mixed in, which could be gas",
    ],
    actions: [
      "Get people and pets out into fresh air, opening windows on the way only if it's quick.",
      "Feeling unwell: call Poison Control (1-800-222-1222 in the US) or 911 if it's severe.",
      "Possible gas: don't touch switches. Call the gas utility from outside.",
      "Electrical: switch that circuit off at the panel if it's safe to reach, and call an electrician.",
    ],
    note: "Carbon monoxide has no smell, so a chemical smell (or no smell) tells you nothing about CO. Keep CO alarms working.",
  },
  causes: [
    {
      cause: "new-materials-voc",
      likelihood: "most common",
      note: "Paint, stain, polyurethane, adhesives, vinyl or laminate flooring, foam furniture and mattresses, and strong cleaners. Also stored paint thinner, nail polish remover, or fuel cans that are leaking or weren't closed.",
    },
    {
      cause: "refrigerant-leak",
      likelihood: "common",
      note: "Points this way if the smell is at the vents, indoor coil, or fridge, and cooling has dropped off.",
    },
    {
      cause: "electrical-overheating",
      likelihood: "less common",
      note: "Overheating wiring, control boards, and some appliance parts can smell chemical or like hot plastic before anything looks burnt.",
    },
    {
      cause: "heating-glycol-leak",
      likelihood: "less common",
      note: "Homes with a boiler and radiators or baseboards: a sweet, syrupy chemical smell when the heat is on.",
    },
    {
      cause: "surface-mold",
      likelihood: "less common",
      note: "Some molds give off solvent-like compounds. Usually comes with damp, a musty edge, and a place that stays wet.",
    },
    {
      cause: "drain-biofilm",
      likelihood: "less common",
      note: "A sharp, solvent-like smell right at one sink drain is occasionally bacterial buildup in the drain.",
    },
    {
      cause: "rodent-urine",
      likelihood: "less common",
      note: "If 'chemical' really means ammonia: urine from mice, or from a pet.",
    },
  ],
  compare: {
    headers: ["Where and when", "Most likely", "Next step"],
    rows: [
      [
        "Started after painting, refinishing, new flooring, furniture, or a delivery",
        "Off-gassing",
        "Ventilate; it should fade over days to weeks",
      ],
      [
        "Strongest at one cabinet, closet, or the garage",
        "A stored product leaking or open",
        "Find the container; seal or remove it",
      ],
      [
        "From the vents or near the AC, heat pump, or fridge; cooling is weaker",
        "Refrigerant leak",
        "HVAC or appliance tech",
      ],
      [
        "Near an outlet, switch, or appliance that's warm",
        "Overheating electrical part",
        "Circuit off, electrician today",
      ],
      [
        "Sweet and syrupy, only when the boiler runs",
        "Heating fluid leak",
        "Heating technician",
      ],
      [
        "Sharp ammonia, worse when humid",
        "Urine (pets or mice)",
        "Cat-pee page",
      ],
    ],
  },
  decision: [
    {
      question: "Is anyone feeling unwell, or is there a rotten-egg note, or a warm outlet or appliance?",
      yes: "Follow the safety steps above before looking any further.",
      href: "/smells/gas/",
      no: "Keep going.",
    },
    {
      question: "Has anything new come into the house, or been painted, finished, glued, or cleaned in the past few weeks?",
      yes: "Off-gassing. Ventilate hard and let it fade. Move new items to a garage to air out if you can.",
      no: "Keep going.",
    },
    {
      question: "Can you narrow it to one cabinet, closet, or the garage?",
      yes: "Check every container there: cans, bottles, aerosols, fuel, and anything with a loose lid.",
      no: "Keep going.",
    },
    {
      question: "Is it strongest at the vents or a cooling appliance, and has cooling gotten weaker?",
      yes: "Have a technician leak-test the AC, heat pump, or fridge.",
      no: "Check the boiler (if you have one), then the drains, then for damp spots.",
    },
  ],
  checks: [
    {
      title: "Write down what changed",
      how: "List anything new in the last month: paint or finish, flooring, cabinets, a mattress or sofa, a new appliance, a deep clean, or a hobby project. Chemical smells are usually tied to a change, and people forget the small ones, like a can of stain opened in the basement.",
    },
    {
      title: "Search the storage spots",
      how: "Open the cabinet under the kitchen and bathroom sinks, the laundry shelf, the garage, the basement workbench, and the furnace area. Check lids on paint thinner, acetone, adhesives, wood finish, and fuel cans. Look for a sticky ring or a stain under any container.",
    },
    {
      title: "Smell the vents with the system on, then off",
      how: "Run the AC or heat pump for ten minutes and smell at a supply vent and at the indoor unit. Then switch it off and wait. A smell that comes and goes with the system points to the HVAC. Check whether the air coming out is as cool as usual, and look for ice on the copper line outside.",
    },
    {
      title: "Feel outlets and appliances near the smell",
      how: "With the back of your hand, check cover plates, power strips, and the sides of appliances where the smell is strongest. Warmth, discoloration, or a faint buzz means the safety steps above.",
    },
    {
      title: "Check the boiler and radiators",
      how: "If you have hot-water heat, look at the boiler, pipes, and baseboards for drips or a sticky residue, and note the pressure gauge. A slowly falling pressure with a sweet smell points to a leak.",
    },
  ],
  sections: [
    {
      heading: "Why so many things smell like nail polish remover",
      body: [
        "Acetone, toluene, xylene, and similar solvents are in paints, stains, finishes, adhesives, nail products, and many cleaners. They evaporate easily at room temperature, which is how they dry. That's why fresh materials smell for a while and then stop. People's noses lump them all together as 'nail polish' or 'paint thinner,' so the description alone won't tell you which product it is. Where and when it started will.",
        "Off-gassing is strongest in the first days and fades as the material cures. Warmth and closed windows make it stronger, so the same new floor can smell much worse on a hot afternoon with the house shut up than on a cool, breezy morning.",
      ],
    },
    {
      heading: "The refrigerant question",
      body: [
        "HVAC companies often list a nail-polish or sweet chemical smell as a sign of a refrigerant leak. Treat it as a clue, not proof. Modern refrigerants have little smell, and not everyone notices one. What makes a refrigerant leak likely is the combination: the smell at the vents or the unit, plus cooling that's weaker than it used to be, ice on the coil or the line, or a hissing at the unit. Refrigerant work needs a certified technician. You can't top it up or patch it yourself.",
        "In winter, a heat pump runs the same refrigerant circuit to heat the house, which is one reason people notice a chemical smell from the vents in cold weather too.",
      ],
    },
    {
      heading: "A sudden chemical smell with nothing new",
      body: [
        "If nothing changed and the smell appeared suddenly, go back over the safety list first: warm outlets or appliances, a sulfur note, or anyone feeling unwell. Then look for something that got knocked over or started leaking: a container in the garage, a hobby supply, a car leaking fuel in an attached garage, or a neighbor painting or spraying with the wind toward your windows. A smell that seems to follow a person rather than a place is a question for a clinician, not the house.",
      ],
    },
    {
      heading: "Getting rid of a chemical smell",
      body: [
        "Ventilation does most of the work. Open windows on opposite sides of the house, put a box fan in one window blowing out, and keep it running while the smell is strong. An air purifier helps only if it has a thick activated-carbon filter. A HEPA filter alone traps particles, not fumes. Baking soda and coffee grounds absorb very little.",
        "Remove or seal the source. Take open cans and rags with solvent on them outside. Rags soaked in some oil-based finishes can self-heat, so follow the product's disposal instructions and don't bunch them up in a bin. New furniture and rugs off-gas faster in a garage or a warm, ventilated room. If it's a refrigerant, fluid, or electrical leak, ventilation buys time while the repair happens. It isn't the fix.",
      ],
    },
    {
      heading: "Typical cases, including one that wasn't off-gassing",
      body: [
        "A strong nail-polish smell upstairs, two days after a bedroom floor was refinished: the finish was still curing. With the room closed off and a window fan blowing out, it faded over about two weeks.",
        "A paint-thinner smell in the kitchen with no project in progress: the cabinet under the sink held a can of mineral spirits with a lid that hadn't been pressed back down. Moving it to the garage ended the smell within a day.",
        "The one that wasn't: a faint sweet chemical smell at the bedroom vents all summer, blamed on new carpet. The carpet was two years old. The AC had been struggling to keep the house cool, and the technician found a slow refrigerant leak at the indoor coil. The weaker cooling was the clue that had been there all along.",
      ],
    },
  ],
  diyStops: [
    "Anyone feeling unwell from the smell.",
    "Any sign of electrical overheating: warmth, discoloration, buzzing, or a tripping breaker.",
    "A suspected refrigerant leak. Only a certified technician can test and repair it.",
    "A boiler or hydronic system that's losing pressure.",
    "Fuel leaking from a vehicle, generator, or tank in an attached garage.",
  ],
  whoToCall: [
    {
      trade: "hvac",
      when: "The smell comes from the vents or the AC or heat pump, or cooling has gotten weaker.",
    },
    {
      trade: "appliance-repair",
      when: "It's coming from a refrigerator or freezer, or another appliance.",
    },
    { trade: "electrician", when: "It's near outlets, switches, or the panel, or anything feels warm." },
    {
      trade: "emergency-911",
      when: "Someone is seriously unwell, or there's smoke or a fire.",
    },
    { trade: "diy", when: "Off-gassing from new materials and stored products: ventilate and seal." },
  ],
  faq: [
    {
      q: "What would make my house smell like acetone?",
      a: "Most often something that contains solvents: nail polish remover, paint, stain, finish, glue, or new flooring and furniture off-gassing. If nothing like that is in the house, check the AC, heat pump, and fridge for a refrigerant leak, and check outlets and appliances for overheating.",
    },
    {
      q: "Is an acetone or paint-thinner smell in the house dangerous?",
      a: "A faint smell from fresh paint or a new floor usually just needs ventilation while it fades. A strong smell, or one that makes anyone dizzy, nauseous, or gives them a headache, is a reason to leave and ventilate, and to call Poison Control if symptoms continue. A chemical smell near something electrical needs an electrician the same day.",
    },
    {
      q: "Why does my house smell like paint thinner when nothing has been painted?",
      a: "Check for stored products first: a loose lid or a leaking can under a sink or in the garage. Then the AC or fridge for a refrigerant leak, and any warm outlet or appliance. Also consider a neighbor painting or spraying nearby.",
    },
    {
      q: "Does a refrigerant leak smell like nail polish?",
      a: "Some people describe it that way, and HVAC companies often say so, but modern refrigerants have little smell and many leaks go unnoticed by nose. Weaker cooling, ice on the coil or line, and a hissing at the unit are more reliable signs.",
    },
    {
      q: "Why does my house smell like chemicals at night?",
      a: "Windows are closed and the house warms up from the day, so off-gassing builds up. The AC or heat also tends to run, which can bring a refrigerant smell through the vents. If the smell is only in the bedroom, look at anything new in that room: a mattress, rug, or furniture.",
    },
    {
      q: "How long does a new-paint or new-floor chemical smell last?",
      a: "It's strongest in the first few days and fades as the material cures. The exact time depends on the product and how well the room is ventilated, so check the product's label. Strong ventilation shortens it. Closing the room up and heating it makes it last longer.",
    },
  ],
  related: [
    {
      title: "Burning plastic or electrical smell",
      href: "/smells/burning-plastic/",
      hint: "When it smells hot",
    },
    {
      title: "House smells like cat pee or ammonia",
      href: "/smells/cat-pee/",
      hint: "If 'chemical' means ammonia",
    },
    {
      title: "Dead animal smell in the house",
      href: "/smells/dead-animal/",
      hint: "If it's sweet and rotten",
    },
    {
      title: "Musty smell from the AC",
      href: "/smells/musty/ac/",
      hint: "Other HVAC smells",
    },
  ],
  sources: [SOURCES.cpscCo],
  diagnose: { family: "sweet-chemical" },
  updated: "2026-10-29",
};
