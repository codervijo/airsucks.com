// Cause library — the single source of truth for "what could this smell be?".
//
// Pages reference causes by id and add context (ranking + notes); the
// /diagnose/smell/ engine scores the same entries. Editing a cause here
// updates every page and the tool at once.
//
// `engine.base` is an editorial 1–5 weight for how often the cause explains
// its smell in ordinary homes, judged from trade guidance. It is a relative
// ordering aid, not a measured probability, and is never shown to visitors.
import type { Cause } from "./types";

export const CAUSES: Cause[] = [
  // ─── Gas / combustion ─────────────────────────────────────────────────────
  {
    id: "natural-gas-leak",
    name: "Natural gas leak",
    summary:
      "Natural gas has no smell of its own. Utilities add mercaptan, an odorant that smells like rotten eggs or sulfur, so leaks are noticeable.",
    families: ["gas", "rotten-egg", "skunk"],
    signs: [
      "Strongest near the stove, furnace, water heater, dryer, or gas meter",
      "Hissing or whistling near a line or appliance",
      "Smell came on suddenly and doesn't fade with ventilation",
    ],
    checks: [
      "Do not hunt for the leak. If the smell is strong or you're unsure, leave and call from outside.",
      "A faint smell right at the stove: check whether a burner knob was left on without lighting. If so, turn it off and air the room — and leave and call if the smell doesn't clear quickly.",
    ],
    fixes: [
      "The utility (natural gas) or supplier (propane) finds and isolates the leak.",
      "A licensed plumber or gas fitter repairs the line or appliance connection.",
    ],
    diyLimit:
      "There is no DIY step beyond leaving and calling. Don't use soapy-water tests indoors while the smell is present.",
    trade: "gas-utility",
    urgency: "emergency",
    page: "/smells/gas/",
    engine: {
      base: 4,
      locations: {
        kitchen: 2,
        "near-appliance": 3,
        basement: 1,
        "whole-house": 1,
        garage: 1,
        "outside-near-house": 1,
      },
      timing: { constant: 1, "since-a-change": 1 },
      observations: {
        "gas-appliances": 3,
        "hissing-sound": 5,
        "headache-dizziness": 3,
        "utility-found-no-leak": -6,
        propane: -1,
      },
    },
  },
  {
    id: "propane-leak",
    name: "Propane leak",
    summary:
      "Propane is odorized like natural gas, with a rotten-egg or skunk-like smell. It is heavier than air, so it collects low — basements, crawlspaces, floor level.",
    families: ["gas", "rotten-egg", "skunk"],
    signs: [
      "Home or appliance runs on a propane tank",
      "Smell strongest low down or near the tank, regulator, or an appliance",
    ],
    checks: [
      "Leave, then close the tank's main valve (clockwise) only if you can reach it safely.",
      "Call your propane supplier or 911 from a safe distance.",
    ],
    fixes: [
      "Your supplier or a qualified technician leak-tests and repairs the system before relighting.",
    ],
    diyLimit:
      "Beyond closing the tank valve on the way out, nothing — don't relight pilots yourself after a leak.",
    trade: "propane-supplier",
    urgency: "emergency",
    page: "/smells/gas/",
    engine: {
      base: 1,
      locations: {
        basement: 2,
        "crawlspace-or-under-floor": 2,
        "near-appliance": 2,
        "outside-near-house": 1,
      },
      observations: {
        propane: 8,
        "hissing-sound": 4,
        "headache-dizziness": 2,
        "utility-found-no-leak": -2,
      },
    },
  },
  {
    id: "outdoor-gas-source",
    name: "Gas smell drifting in from outside",
    summary:
      "Odorant from the meter, a neighbor's line, street work, or a pipeline can drift through open windows, vents, or the dryer duct.",
    families: ["gas", "rotten-egg"],
    signs: [
      "Smell is stronger outdoors or near the meter than inside",
      "Comes and goes with the wind, or started when nearby digging began",
    ],
    checks: [
      "Note where outside it is strongest, then call the gas utility — outdoor leaks are their job too.",
    ],
    fixes: ["The utility locates and repairs outdoor and street leaks."],
    diyLimit: "Report it; don't dig, touch the meter, or probe around lines.",
    trade: "gas-utility",
    urgency: "urgent",
    page: "/smells/gas/",
    engine: {
      base: 1,
      locations: { "outside-near-house": 5, "whole-house": 1 },
      timing: { "comes-and-goes": 2 },
      observations: { "utility-found-no-leak": -2 },
    },
  },

  // ─── Sewer / drains ───────────────────────────────────────────────────────
  {
    id: "dry-p-trap",
    name: "Dried-out drain trap",
    summary:
      "Every drain has a U-shaped trap that holds water as a seal against sewer gas. If a fixture goes unused for weeks, the water evaporates and sewer gas comes straight up.",
    families: ["sewage", "rotten-egg", "gas"],
    signs: [
      "Smell is near a guest bath, basement floor drain, unused shower, or utility sink",
      "Started after a trip, or in a room nobody uses",
      "Goes away after running water",
    ],
    checks: [
      "Run water in every sink, tub, and shower for 30 seconds, and pour a bucket of water into floor drains.",
      "Flush toilets that rarely get used.",
      "Wait a few hours. If the smell is gone, it was a dry trap.",
    ],
    fixes: [
      "Run water in rarely used fixtures every couple of weeks.",
      "For floor drains that dry out constantly, a plumber can fit a trap primer or a trap-seal insert.",
    ],
    diyLimit:
      "If refilling the traps doesn't stop it within a day, the problem is past the trap — call a plumber.",
    trade: "plumber",
    urgency: "routine",
    page: "/smells/sewage/",
    engine: {
      base: 5,
      locations: { basement: 2, bathroom: 3, laundry: 2, "one-room": 1 },
      timing: { "comes-and-goes": 1, "since-a-change": 1 },
      observations: { "unused-drain": 6, "utility-found-no-leak": 3 },
    },
  },
  {
    id: "sewer-vent-blocked",
    name: "Blocked or damaged plumbing vent",
    summary:
      "Roof vent pipes let sewer gas escape outdoors and let drains breathe. A blocked vent (nests, leaves, ice) can pull water out of traps and push gas indoors.",
    families: ["sewage", "rotten-egg"],
    signs: [
      "Drains gurgle or bubble, especially when a toilet flushes",
      "Water levels in toilet bowls drop or fluctuate",
      "Smell in several rooms, worse on windy days",
    ],
    checks: [
      "Flush a toilet and listen at nearby sinks and tubs for gurgling.",
      "Look at the roof vent from the ground with binoculars for a nest or debris (don't climb onto the roof).",
    ],
    fixes: ["A plumber clears the vent stack or repairs a cracked or disconnected vent pipe."],
    diyLimit: "Roof work and snaking vents are a job for a plumber.",
    trade: "plumber",
    urgency: "soon",
    page: "/smells/sewage/",
    engine: {
      base: 3,
      locations: { bathroom: 2, "whole-house": 2 },
      timing: { "running-water-or-flushing": 3, "comes-and-goes": 1 },
      observations: { "gurgling-drains": 6 },
    },
  },
  {
    id: "toilet-wax-ring",
    name: "Failed toilet seal (wax ring)",
    summary:
      "The wax ring under a toilet seals it to the drain. When it fails, sewer gas — and sometimes water — escapes at the base.",
    families: ["sewage"],
    signs: [
      "Smell strongest at the toilet base",
      "Toilet rocks, or there's staining or soft flooring around it",
      "Water seeps from the base after flushing",
    ],
    checks: [
      "Smell right at the floor joint around the toilet.",
      "Gently rock the toilet: any movement suggests a broken seal.",
      "Check the ceiling below an upstairs toilet for stains.",
    ],
    fixes: [
      "Pull the toilet and replace the wax ring (or a wax-free seal); tighten the closet bolts.",
    ],
    diyLimit:
      "A handy homeowner can swap a wax ring. A rotted subfloor or cracked flange needs a plumber.",
    trade: "plumber",
    urgency: "soon",
    page: "/smells/sewage/",
    engine: {
      base: 3,
      locations: { bathroom: 5 },
      timing: { constant: 1, "running-water-or-flushing": 2 },
      observations: { "water-damage-or-leak": 3 },
    },
  },
  {
    id: "drain-biofilm",
    name: "Slime in a sink drain or overflow",
    summary:
      "Hair, soap, and food residue build up a bacterial film inside drains and sink overflow holes. It can smell like sewage or rotten eggs without any sewer problem.",
    families: ["sewage", "rotten-egg", "fishy"],
    signs: [
      "Smell is right at one sink or shower, strongest with your nose at the drain",
      "The drain is slow",
      "The overflow hole under the sink rim smells when you sniff it",
    ],
    checks: [
      "Sniff the drain opening, then the overflow hole, separately.",
      "Pull the pop-up stopper — it's often coated in sludge.",
    ],
    fixes: [
      "Clean the stopper; scrub the drain and overflow with a long brush.",
      "Flush with very hot water. Use an enzyme drain cleaner for ongoing buildup.",
    ],
    diyLimit: "If cleaning doesn't change the smell, look for a trap or vent problem.",
    trade: "diy",
    urgency: "routine",
    page: "/smells/sewage/",
    engine: {
      base: 4,
      locations: { bathroom: 3, kitchen: 3, laundry: 1 },
      timing: { "running-water-or-flushing": 2, constant: 1 },
    },
  },
  {
    id: "sewer-line-crack",
    name: "Cracked or leaking sewer line",
    summary:
      "A broken drain line under a slab, in a crawlspace, or inside a wall leaks sewage and gas into the structure.",
    families: ["sewage", "rotten-egg"],
    signs: [
      "Persistent sewer smell that refilling traps doesn't touch",
      "Damp spots, stains, or lush grass along the sewer line route",
      "Recurring backups or slow drains throughout the house",
    ],
    checks: [
      "Rule out traps, wax rings, and vents first.",
      "Look for wet areas in the crawlspace or basement along drain pipes (from a safe vantage point — don't crawl through sewage).",
    ],
    fixes: [
      "A sewer specialist runs a camera inspection or smoke test to find the break.",
      "Repair by spot dig, pipe lining, or replacement.",
    ],
    diyLimit: "Locating a hidden line break needs camera or smoke-test equipment.",
    trade: "sewer-specialist",
    urgency: "soon",
    page: "/smells/sewage/",
    engine: {
      base: 2,
      locations: { basement: 2, "crawlspace-or-under-floor": 4, "whole-house": 1 },
      timing: { constant: 2 },
      observations: { "water-damage-or-leak": 2, "gurgling-drains": 1 },
    },
  },
  {
    id: "sump-ejector-pit",
    name: "Sewage ejector or sump pit",
    summary:
      "Basement bathrooms often drain into a sealed ejector pit that pumps waste up to the sewer. A loose lid, failed seal, or stuck pump lets odor out. Sump pits can also smell when stagnant.",
    families: ["sewage", "musty", "rotten-egg"],
    signs: ["Smell centered on a basement pit with a lid", "Pump runs constantly or not at all"],
    checks: [
      "Check that the ejector lid is bolted down with its gasket in place.",
      "Pour water into a dry sump pit to see if the smell eases.",
    ],
    fixes: [
      "Reseal the lid; make sure the pit vent runs outdoors.",
      "Have a plumber service or replace a failing ejector pump.",
    ],
    diyLimit: "Opening a sewage ejector pit or servicing its pump is a plumber's job.",
    trade: "plumber",
    urgency: "soon",
    page: "/smells/sewage/",
    engine: { base: 2, locations: { basement: 5 } },
  },
  {
    id: "septic-problem",
    name: "Septic system problem",
    summary:
      "A full tank, failing drain field, or cracked tank lid can push odor into the yard and back up through drains.",
    families: ["sewage"],
    signs: [
      "On a septic system",
      "Smell outdoors over the tank or drain field, soggy ground, or slow drains house-wide",
    ],
    checks: ["Check when the tank was last pumped; look for pooling water over the drain field."],
    fixes: ["Have the tank pumped and inspected; a septic contractor assesses the drain field."],
    diyLimit: "Never open a septic tank or enter one — its gases can be deadly.",
    trade: "sewer-specialist",
    urgency: "soon",
    page: "/smells/sewage/",
    engine: {
      base: 1,
      locations: { "outside-near-house": 4, "whole-house": 1 },
      timing: { "after-rain-or-humid": 1 },
    },
  },

  // ─── Water ────────────────────────────────────────────────────────────────
  {
    id: "water-heater-anode",
    name: "Water heater reaction (sulfur in hot water)",
    summary:
      "Sulfate-reducing bacteria in a water heater react with the anode rod and produce hydrogen sulfide, so the hot water smells like rotten eggs.",
    families: ["rotten-egg"],
    signs: [
      "Only the hot water smells; cold water from the same faucet is fine",
      "Worse after the heater has sat unused, or after a vacation",
    ],
    checks: [
      "Fill one glass with hot water and one with cold, step away from the sink, and smell each.",
      "Check whether the smell appears at every hot tap (water heater) or just one (that fixture's drain).",
    ],
    fixes: [
      "Flush the water heater.",
      "Have a plumber replace the magnesium anode with an aluminum-zinc or powered anode.",
      "Ask a plumber about sanitizing the tank.",
    ],
    diyLimit:
      "Anode replacement on a gas or electric heater is usually a plumber job — you're working with gas lines or 240V and a pressurized tank.",
    trade: "plumber",
    urgency: "routine",
    page: "/smells/rotten-eggs/",
    engine: {
      base: 3,
      locations: { bathroom: 2, kitchen: 2, "near-appliance": 1 },
      timing: { "hot-water-only": 9, "running-water-or-flushing": 2 },
      observations: { "utility-found-no-leak": 2 },
    },
  },
  {
    id: "well-water-sulfur",
    name: "Hydrogen sulfide in well water",
    summary:
      "Groundwater can carry dissolved hydrogen sulfide. You smell it at every tap, hot and cold.",
    families: ["rotten-egg"],
    signs: ["Home is on a private well", "Both hot and cold water smell, at every faucet"],
    checks: ["Compare hot and cold glasses at several taps; have the well water tested."],
    fixes: [
      "Water treatment, e.g. aeration, oxidizing filters, or chlorination, sized to the test results.",
    ],
    diyLimit: "Choose treatment from a lab test, not a guess.",
    trade: "plumber",
    urgency: "routine",
    page: "/smells/rotten-eggs/",
    engine: {
      base: 1,
      timing: { "running-water-or-flushing": 3 },
      observations: { "well-water": 9, "utility-found-no-leak": 1 },
    },
  },
  {
    id: "hidden-leak",
    name: "Hidden water leak",
    summary:
      "A slow leak from a supply line, drain, roof, or window keeps materials inside walls, ceilings, or floors wet. Mold and mildew grow and the smell leaks out.",
    families: ["musty"],
    signs: [
      "Smell strongest at one wall, ceiling patch, or cabinet",
      "Stains, bubbling paint, warped trim, or soft flooring",
      "Water bill crept up, or the meter moves with everything off",
    ],
    checks: [
      "Open sink base cabinets and look and feel for damp wood.",
      "Turn off all water and watch the meter for 30 minutes — movement means a leak.",
      "Sniff along baseboards near bathrooms, kitchens, and exterior walls.",
    ],
    fixes: [
      "Stop the leak first.",
      "Dry or remove wet materials; drywall that stayed wet for days usually has to be cut out.",
    ],
    diyLimit:
      "Opening walls is fine for small areas. Large or long-running leaks need a water-damage pro with moisture meters.",
    trade: "water-damage",
    urgency: "soon",
    page: "/smells/musty/no-visible-mold/",
    engine: {
      base: 4,
      locations: { "one-room": 2, bathroom: 2, kitchen: 2, bedroom: 1, "whole-house": 1 },
      timing: { constant: 2 },
      observations: { "water-damage-or-leak": 6, "visible-mold": 2 },
    },
  },

  // ─── Moisture / mold ──────────────────────────────────────────────────────
  {
    id: "high-humidity",
    name: "Indoor humidity too high",
    summary:
      "Above about 60% relative humidity, mildew grows on fabrics, carpets, closets, and cold surfaces. The whole house can smell faintly musty with no single source.",
    families: ["musty"],
    signs: [
      "Smell everywhere, worse in humid weather or when the house is closed up",
      "Condensation on windows; clammy air; towels that never dry",
    ],
    checks: [
      "Put a hygrometer (an inexpensive humidity gauge) in the smelly area for 24 hours.",
      "EPA guidance: keep indoor humidity below 60%, ideally 30–50%.",
    ],
    fixes: [
      "Run a dehumidifier, and AC in summer.",
      "Use bathroom and kitchen exhaust fans; vent the dryer outdoors.",
      "Wash or dry-clean fabrics that picked up the smell.",
    ],
    diyLimit:
      "If you can't get below 60% with a dehumidifier, find the moisture source (basement, crawlspace, leaks).",
    trade: "diy",
    urgency: "routine",
    page: "/smells/musty/",
    engine: {
      base: 5,
      locations: { "whole-house": 3, basement: 2, bedroom: 1, "one-room": 1 },
      timing: { "after-rain-or-humid": 4, "night-or-closed-up": 2, constant: 1 },
      observations: { "high-humidity": 6 },
    },
  },
  {
    id: "damp-basement",
    name: "Damp basement or foundation seepage",
    summary:
      "Below-grade walls and slabs wick groundwater, and cool basement surfaces collect condensation in summer. Damp concrete, stored cardboard, and carpet then grow mildew.",
    families: ["musty"],
    signs: [
      "Musty smell starts in the basement and drifts upstairs",
      "White chalky deposits (efflorescence), damp spots, or water lines on walls",
      "Worse after rain or in humid months",
    ],
    checks: [
      "Tape a 1-foot square of plastic sheet to the wall or floor for 48 hours. Moisture under it means water is coming through the concrete; moisture on top means humid air is condensing on it.",
      "Check that gutters and downspouts discharge well away from the foundation.",
    ],
    fixes: [
      "Fix grading and gutters first — it's cheap and often enough.",
      "Run a basement dehumidifier.",
      "Get stored items off the floor and out of cardboard.",
    ],
    diyLimit: "Active seepage or standing water needs a waterproofing contractor.",
    trade: "waterproofing",
    urgency: "soon",
    page: "/smells/musty/basement/",
    engine: {
      base: 4,
      locations: { basement: 7, "whole-house": 1 },
      timing: { "after-rain-or-humid": 4, constant: 1 },
      observations: { "high-humidity": 2, "water-damage-or-leak": 2 },
    },
  },
  {
    id: "crawlspace-moisture",
    name: "Damp crawlspace",
    summary:
      "Warm air rising through a house pulls crawlspace air up through the floor. If the crawlspace is damp, its musty air ends up on your main floor.",
    families: ["musty"],
    signs: [
      "House is on a crawlspace; smell is strongest at floor level or near floor registers",
      "Worse in summer and after rain",
    ],
    checks: [
      "From the access hatch, look for standing water, bare dirt with no vapor barrier, or sagging insulation (don't crawl in if there's standing water or animal activity).",
    ],
    fixes: [
      "Ground vapor barrier, drainage, and in many cases encapsulation with a dehumidifier.",
      "Seal ductwork in the crawlspace.",
    ],
    diyLimit: "Encapsulation and drainage are contractor work.",
    trade: "waterproofing",
    urgency: "soon",
    page: "/smells/musty/",
    engine: {
      base: 3,
      locations: { "crawlspace-or-under-floor": 7, "whole-house": 2 },
      timing: { "after-rain-or-humid": 3 },
    },
  },
  {
    id: "surface-mold",
    name: "Mold or mildew growing on surfaces",
    summary:
      "Visible growth on drywall, grout, window frames, ceilings, or stored items is both the source and the evidence.",
    families: ["musty"],
    signs: ["Black, green, white, or gray speckled growth", "Growth near a moisture source"],
    checks: [
      "Measure the affected area.",
      "Under about 10 square feet (roughly 3 ft × 3 ft), EPA guidance says most homeowners can clean it themselves.",
    ],
    fixes: [
      "Fix the moisture first.",
      "Scrub hard surfaces with detergent and water, and dry completely (EPA).",
      "Porous materials like ceiling tiles and carpet that have gone moldy may have to be thrown away.",
    ],
    diyLimit:
      "More than about 10 sq ft, mold after significant water damage, or mold you suspect is in the HVAC system: bring in a professional.",
    trade: "mold-remediation",
    urgency: "soon",
    page: "/smells/musty/",
    engine: {
      base: 3,
      locations: { bathroom: 2, basement: 2, bedroom: 1, "one-room": 1 },
      observations: { "visible-mold": 9, "high-humidity": 1 },
    },
  },
  {
    id: "wet-carpet-pad",
    name: "Carpet or pad that got wet",
    summary:
      "A spill, pet accident, leak, or wet carpet cleaning can soak the pad. The surface dries but the pad stays damp and goes musty.",
    families: ["musty", "pet-urine"],
    signs: [
      "Smell strongest at floor level in one area",
      "Worse on humid days or after carpet cleaning",
    ],
    checks: [
      "Press a dry paper towel hard into the carpet — dampness shows up.",
      "Lift a corner at the tack strip and check the pad and subfloor.",
    ],
    fixes: [
      "Dry the area fully with fans and a dehumidifier.",
      "Replace pad that stayed wet more than a day or two, or that is stained.",
    ],
    diyLimit: "Large areas or any sewage-contaminated carpet go to a restoration company.",
    trade: "water-damage",
    urgency: "soon",
    page: "/smells/musty/room/",
    engine: {
      base: 3,
      locations: { "one-room": 3, bedroom: 2, basement: 2 },
      timing: { "after-rain-or-humid": 2, "since-a-change": 2 },
      observations: { "water-damage-or-leak": 3 },
    },
  },
  {
    id: "closet-condensation",
    name: "Condensation behind furniture or in closets",
    summary:
      "Exterior walls are colder than the room. Where a dresser, bed, or closet blocks airflow, moisture condenses on the wall and mildew grows out of sight.",
    families: ["musty"],
    signs: [
      "Smell strongest in a closet or behind furniture on an outside wall",
      "Clothes or shoes in that closet smell musty",
    ],
    checks: [
      "Pull furniture a few inches off exterior walls and look at the wall and the back of the furniture.",
      "Empty the closet floor; check the back corners and wall base.",
    ],
    fixes: [
      "Leave a gap of a few inches behind furniture.",
      "Keep closet doors open or louvered; dehumidify.",
      "Clean light mildew and wash affected clothes.",
    ],
    diyLimit: "Wet or crumbling drywall means a leak or insulation problem — get it inspected.",
    trade: "diy",
    urgency: "routine",
    page: "/smells/musty/room/",
    engine: {
      base: 3,
      locations: { bedroom: 4, "one-room": 3 },
      timing: { "night-or-closed-up": 2, "after-rain-or-humid": 1, constant: 1 },
      observations: { "high-humidity": 2 },
    },
  },
  {
    id: "mattress-bedding",
    name: "Damp mattress or bedding",
    summary:
      "People release moisture overnight. A mattress on the floor, a solid platform, or a closed-up bedroom keeps the underside damp and mildewy.",
    families: ["musty"],
    signs: [
      "Smell strongest at the bed, worst in the morning",
      "Mattress sits directly on the floor or a solid base",
    ],
    checks: ["Lift the mattress and look and smell underneath; check for dark spotting."],
    fixes: [
      "Use a slatted or ventilated base.",
      "Air the room daily and wash bedding weekly.",
      "Replace a mattress with mold growth inside it.",
    ],
    diyLimit: "A mattress with mold growth can't really be cleaned — replace it.",
    trade: "diy",
    urgency: "routine",
    page: "/smells/musty/room/",
    engine: { base: 2, locations: { bedroom: 6 }, timing: { "night-or-closed-up": 3 } },
  },
  {
    id: "window-condensation",
    name: "Window condensation and sill mildew",
    summary:
      "Cold glass collects water in heating season. Sills, tracks, and curtains stay wet and grow mildew.",
    families: ["musty"],
    signs: [
      "Water on the inside of windows in the morning",
      "Black spotting on sills, tracks, or the bottom of curtains",
    ],
    checks: ["Look at window tracks and the backs of curtains."],
    fixes: [
      "Lower indoor humidity; open curtains during the day.",
      "Clean tracks and wash curtains.",
    ],
    diyLimit: "Rotted sills or failed window seals need a window contractor.",
    trade: "diy",
    urgency: "routine",
    page: "/smells/musty/room/",
    engine: {
      base: 2,
      locations: { bedroom: 3, "one-room": 2 },
      timing: { "night-or-closed-up": 2 },
      observations: { "high-humidity": 2 },
    },
  },
  {
    id: "bathroom-ventilation",
    name: "Bathroom without enough ventilation",
    summary:
      "Showers put a lot of water into the air. Without a working exhaust fan, grout, caulk, towels, and the ceiling stay damp and smell of mildew.",
    families: ["musty"],
    signs: [
      "Mildew on grout, caulk, or the ceiling",
      "Mirror stays fogged a long time; towels never dry",
    ],
    checks: [
      "Hold a single square of toilet paper to the running fan grille — it should cling.",
      "Check that the fan vents outdoors, not into the attic.",
    ],
    fixes: [
      "Run the fan during showers and for about 20 minutes after.",
      "Clean or replace a weak fan; re-caulk mildewed joints.",
    ],
    diyLimit: "Rerouting a fan duct through the attic or roof is contractor work.",
    trade: "diy",
    urgency: "routine",
    page: "/smells/musty/room/",
    engine: {
      base: 3,
      locations: { bathroom: 6 },
      observations: { "visible-mold": 2, "high-humidity": 2 },
    },
  },
  {
    id: "front-load-washer",
    name: "Front-load washer gasket or drum",
    summary:
      "The door gasket and drum of front-loaders trap water and detergent residue. Biofilm grows, and clothes and the laundry room smell musty.",
    families: ["musty", "sewage"],
    signs: [
      "Clothes smell musty right out of the washer",
      "Dark residue in the folds of the door gasket",
    ],
    checks: ["Pull back the gasket folds and look; smell the detergent drawer."],
    fixes: [
      "Clean the gasket and drawer; run the washer's cleaning cycle.",
      "Leave the door and drawer open between loads.",
    ],
    diyLimit:
      "Persistent smell after cleaning can be a slow drain or the drain pump — appliance repair.",
    trade: "appliance-repair",
    urgency: "routine",
    page: "/smells/musty/",
    engine: { base: 2, locations: { laundry: 7 } },
  },
  {
    id: "stored-items",
    name: "Stored items that absorbed dampness",
    summary:
      "Cardboard, old books, upholstered furniture, and boxed clothing soak up humidity and hold onto mildew odor long after the air dries.",
    families: ["musty"],
    signs: ["Smell is strongest near storage", "Old furniture or books smell musty up close"],
    checks: ["Move suspect items out of the room for a few days and see if the room improves."],
    fixes: [
      "Move storage into plastic bins, off the floor.",
      "Air out, clean, or discard items that keep smelling.",
    ],
    diyLimit: "None — this is a sorting job.",
    trade: "diy",
    urgency: "routine",
    page: "/smells/musty/basement/",
    engine: {
      base: 2,
      locations: { basement: 3, "one-room": 2, garage: 2 },
      timing: { "after-rain-or-humid": 1 },
    },
  },

  // ─── HVAC ─────────────────────────────────────────────────────────────────
  {
    id: "ac-coil-drain",
    name: "AC evaporator coil or condensate drain",
    summary:
      "Your AC pulls water out of the air on a cold coil, which drains through a pan and line. Dust plus constant moisture grows biofilm. Run the system and it blows a musty or dirty-sock smell.",
    families: ["musty"],
    signs: [
      "Smell comes out of vents when the AC starts, then may fade",
      "Water around the indoor unit, or a drain line that never drips outside",
    ],
    checks: [
      "Smell a supply vent right as the AC kicks on.",
      "Check the condensate line outlet outside or at the pump — it should drip while cooling.",
      "Replace the air filter.",
    ],
    fixes: [
      "Clear the condensate line (many have a cleanout tee you can flush).",
      "An HVAC tech cleans the coil and pan.",
    ],
    diyLimit: "Coil cleaning means opening the air handler — HVAC tech.",
    trade: "hvac",
    urgency: "soon",
    page: "/smells/musty/ac/",
    engine: {
      base: 4,
      locations: { "hvac-vents": 7, "whole-house": 2 },
      timing: { "hvac-running": 7 },
    },
  },
  {
    id: "mold-in-ducts",
    name: "Mold in ductwork or the air handler",
    summary:
      "Leaky ducts in a damp crawlspace or attic, or chronic condensation, can grow mold inside the system. It then gets distributed every time the fan runs.",
    families: ["musty"],
    signs: [
      "Musty smell in every room whenever the fan runs",
      "Visible growth on the vent registers or inside the air handler",
    ],
    checks: [
      "Remove a supply register and look inside the duct with a flashlight.",
      "EPA advises not running an HVAC system you know or suspect is contaminated with mold — it can spread mold through the house.",
    ],
    fixes: [
      "Fix the moisture source.",
      "A qualified contractor cleans or replaces the contaminated components.",
    ],
    diyLimit: "Duct and air-handler mold is professional work.",
    trade: "hvac",
    urgency: "soon",
    page: "/smells/musty/ac/",
    engine: {
      base: 2,
      locations: { "hvac-vents": 5, "whole-house": 2 },
      timing: { "hvac-running": 5 },
      observations: { "visible-mold": 2 },
    },
  },
  {
    id: "oversized-ac",
    name: "AC that cools without drying the air",
    summary:
      "An oversized or misconfigured AC hits the thermostat setting fast and shuts off before it has removed much moisture. The house is cool but clammy and musty.",
    families: ["musty"],
    signs: ["Short AC cycles", "Cool but sticky air; humidity stays above 60% in summer"],
    checks: [
      "Watch a hygrometer during AC season.",
      "Time the cycles — very short, frequent cycles are a clue.",
    ],
    fixes: [
      "Run a dehumidifier.",
      "An HVAC tech can adjust fan speed or settings, or size equipment properly at replacement.",
    ],
    diyLimit: "Equipment changes are HVAC work.",
    trade: "hvac",
    urgency: "routine",
    page: "/smells/musty/ac/",
    engine: {
      base: 2,
      locations: { "whole-house": 2, "hvac-vents": 1 },
      timing: { "hvac-running": 2 },
      observations: { "high-humidity": 3 },
    },
  },
  {
    id: "dirty-filter",
    name: "Overdue HVAC air filter",
    summary:
      "A loaded filter holds dust, pet dander, and moisture. Air pulled through it picks up a stale or dusty-musty smell.",
    families: ["musty", "pet-urine"],
    signs: ["Filter is gray or matted", "Smell is at all vents, mild but constant"],
    checks: ["Pull the filter and look at it."],
    fixes: [
      "Replace it. With pets, check it monthly.",
      "Use the filter rating your system is designed for.",
    ],
    diyLimit: "None.",
    trade: "diy",
    urgency: "routine",
    page: "/smells/musty/ac/",
    engine: {
      base: 2,
      locations: { "hvac-vents": 3, "whole-house": 2 },
      timing: { "hvac-running": 3 },
      observations: { "pets-in-home": 1 },
    },
  },

  // ─── Burning / electrical ─────────────────────────────────────────────────
  {
    id: "electrical-overheating",
    name: "Overheating outlet, switch, fixture, or wiring",
    summary:
      "Loose connections and overloaded circuits heat up. The plastic and insulation give off a burning-plastic smell — often described as fishy, or even like urine — well before any visible smoke.",
    families: ["burning", "fishy", "pet-urine"],
    signs: [
      "Smell near an outlet, switch, light fixture, power strip, or the panel",
      "Cover plate warm to the touch, discolored, or scorched",
      "Lights flicker, breakers trip, or you hear buzzing",
    ],
    checks: [
      "Smoke, sparks, or visible scorching: leave and call 911.",
      "Otherwise, carefully feel cover plates with the back of your hand — don't open anything.",
      "Unplug what's on a suspect outlet, and switch off its breaker if the panel is safe to reach.",
    ],
    fixes: ["An electrician replaces failed devices and corrects loose or overloaded wiring."],
    diyLimit:
      "Beyond switching off the breaker, nothing — warm or scorched electrical parts are electrician work, today.",
    trade: "electrician",
    urgency: "urgent",
    page: "/smells/burning-plastic/",
    engine: {
      base: 4,
      locations: { "one-room": 2, kitchen: 1, bedroom: 1, "whole-house": 1 },
      timing: { "comes-and-goes": 2, constant: 1 },
      observations: { "flicker-or-buzz": 7, "smoke-or-heat": 7, "no-pets": 2 },
    },
  },
  {
    id: "furnace-dust-burnoff",
    name: "Dust burning off the furnace (first heat of the season)",
    summary:
      "Dust settles on the heat exchanger or electric elements over summer. The first time the heat runs, it burns off with a dusty, burning smell.",
    families: ["burning"],
    signs: [
      "Starts the first few times the heat comes on for the season",
      "Smells like burning dust rather than plastic or rubber, and fades within a few hours",
    ],
    checks: [
      "Replace the filter and let the system run with a window cracked.",
      "Note whether the smell fades. It should.",
    ],
    fixes: ["Nothing beyond a fresh filter; annual furnace service reduces it."],
    diyLimit:
      "If it persists past a day, smells like plastic or rubber, or the burner looks wrong, shut the system off and call HVAC.",
    trade: "diy",
    urgency: "routine",
    page: "/smells/burning-plastic/",
    engine: {
      base: 4,
      locations: { "hvac-vents": 3, "whole-house": 2 },
      timing: { "heat-first-on": 9 },
    },
  },
  {
    id: "hvac-blower-motor",
    name: "Failing HVAC blower motor or electrical part",
    summary:
      "An overheating blower motor, capacitor, or wiring in the furnace or air handler produces a hot electrical or burning-rubber smell through the vents.",
    families: ["burning", "fishy"],
    signs: [
      "Smell through vents every time the fan runs, not just at season start",
      "Humming, squealing, or a fan that struggles to start",
    ],
    checks: [
      "Turn the system off at the thermostat and the service switch, and note whether the smell stops.",
    ],
    fixes: ["HVAC tech diagnoses and replaces the failing motor, capacitor, or wiring."],
    diyLimit: "Shut it off and call — don't run a system that smells electrical.",
    trade: "hvac",
    urgency: "urgent",
    page: "/smells/burning-plastic/",
    engine: {
      base: 2,
      locations: { "hvac-vents": 5, "whole-house": 1 },
      timing: { "hvac-running": 5 },
      observations: { "smoke-or-heat": 2 },
    },
  },
  {
    id: "appliance-overheating",
    name: "Appliance overheating (dryer, motor, heater)",
    summary:
      "Dryers with lint-packed vents, failing appliance motors, space heaters near fabric, and old lamps produce burning smells from the device itself.",
    families: ["burning"],
    signs: [
      "Smell starts when one appliance runs",
      "Dryer takes longer than usual to dry; the exterior vent flap barely opens",
    ],
    checks: [
      "Run appliances one at a time and sniff.",
      "Clean the dryer lint screen and check the outside vent flap with the dryer running.",
    ],
    fixes: [
      "Clean the full dryer vent run.",
      "Stop using an appliance that smells hot and have it repaired or replaced.",
    ],
    diyLimit: "Motor or heating-element faults are appliance-repair work.",
    trade: "appliance-repair",
    urgency: "urgent",
    page: "/smells/burning-plastic/",
    engine: {
      base: 3,
      locations: { laundry: 5, "near-appliance": 5, kitchen: 2 },
      timing: { "comes-and-goes": 1 },
      observations: { "smoke-or-heat": 3 },
    },
  },
  {
    id: "plastic-on-heat",
    name: "Something plastic touching a heat source",
    summary:
      "A utensil on a dishwasher heating element, a container on a warm stovetop or toaster, or a toy against a baseboard heater melts and smells.",
    families: ["burning"],
    signs: [
      "A sharp melted-plastic smell right after cooking, dishwashing, or turning on a heater",
    ],
    checks: [
      "Look at the dishwasher's bottom element, the stovetop, the toaster or oven, and anything near heaters or lamps.",
    ],
    fixes: ["Remove the item once it's cool and ventilate. Scrape cooled residue off the element."],
    diyLimit: "If residue keeps smoking or the element is damaged, call appliance repair.",
    trade: "diy",
    urgency: "soon",
    page: "/smells/burning-plastic/",
    engine: {
      base: 3,
      locations: { kitchen: 5, "near-appliance": 3 },
      timing: { "since-a-change": 2 },
    },
  },

  // ─── Pets / urine / animals ───────────────────────────────────────────────
  {
    id: "hidden-pet-urine",
    name: "Old pet urine in carpet, pad, or subfloor",
    summary:
      "Urine soaks through carpet into the pad and subfloor. Dried salts re-release odor whenever humidity rises, sometimes years after the pet is gone.",
    families: ["pet-urine"],
    signs: [
      "Ammonia or cat-pee smell that gets worse on humid days or after carpet cleaning",
      "Previous owners or tenants had pets",
    ],
    checks: [
      "In a dark room, scan the floor and wall bases with a UV (black) light. Dried urine often fluoresces.",
      "Smell close to the floor along baseboards, corners, and under furniture.",
    ],
    fixes: [
      "Treat with an enzyme cleaner, applied deeply enough to reach the pad.",
      "Replace saturated pad.",
      "Seal stained subfloor with an odor-blocking primer before new flooring.",
    ],
    diyLimit:
      "Saturated subfloor or tack strips mean pulling the carpet — a flooring contractor job for most people.",
    trade: "flooring",
    urgency: "routine",
    page: "/smells/cat-pee/",
    engine: {
      base: 4,
      locations: { "one-room": 3, bedroom: 2, basement: 1, "whole-house": 1 },
      timing: { "after-rain-or-humid": 3, constant: 1 },
      observations: { "previous-pets": 6, "pets-in-home": 3, "no-pets": 1 },
    },
  },
  {
    id: "rodent-urine",
    name: "Mice or rats",
    summary:
      "Mouse and rat urine has a strong, stale ammonia smell that builds up inside walls, cabinets, attics, and behind appliances.",
    families: ["pet-urine", "musty"],
    signs: [
      "Droppings in cabinets, drawers, or behind the stove or fridge",
      "Scratching at night; chewed packaging",
    ],
    checks: [
      "Inspect under sinks, behind appliances, and in pantry corners with a flashlight.",
      "Don't sweep or vacuum droppings dry — wet them with disinfectant first and wear gloves.",
    ],
    fixes: [
      "Trap the mice or rats and seal entry gaps.",
      "Clean contaminated areas following public-health cleanup guidance.",
    ],
    diyLimit: "Ongoing activity, nests in walls or attic, or rats: call pest control.",
    trade: "pest-control",
    urgency: "soon",
    page: "/smells/cat-pee/",
    engine: {
      base: 3,
      locations: { kitchen: 3, garage: 2, basement: 2, "one-room": 1 },
      timing: { "night-or-closed-up": 1 },
      observations: { "rodent-signs": 8, "no-pets": 3 },
    },
  },
  {
    id: "boxwood-shrubs",
    name: "Boxwood shrubs near the house",
    summary:
      "Some boxwood varieties give off a smell many people describe as cat urine, especially in spring and warm, damp weather. It drifts in through open windows.",
    families: ["pet-urine"],
    signs: ["Smell is stronger outdoors near the hedges", "Seasonal, and worse with windows open"],
    checks: [
      "Close the windows on that side for a day and see if it stops; sniff the shrubs directly.",
    ],
    fixes: ["Keep windows on that side closed in peak season, or replace the shrubs."],
    diyLimit: "None.",
    trade: "diy",
    urgency: "routine",
    page: "/smells/cat-pee/",
    engine: {
      base: 1,
      locations: { "outside-near-house": 7 },
      timing: { "comes-and-goes": 2, "after-rain-or-humid": 1 },
      observations: { "no-pets": 2 },
    },
  },
  {
    id: "dog-fabrics",
    name: "Dog odor stored in fabrics and soft surfaces",
    summary:
      "Skin oils and dander collect in dog beds, couches, rugs, curtains, and car seats. Each one holds smell, and together they become the house smell.",
    families: ["pet-urine"],
    signs: ["Smell strongest at the dog's favorite spots", "Visitors notice it more than you do"],
    checks: [
      "Sniff the dog bed, couch cushions, and rugs up close.",
      "Check when the HVAC filter was last changed.",
    ],
    fixes: [
      "Wash dog bedding and covers weekly; deep-clean couches and rugs.",
      "Change the HVAC filter more often.",
      "Bathe the dog on a schedule your vet recommends.",
    ],
    diyLimit: "None — mostly routine.",
    trade: "diy",
    urgency: "routine",
    page: "/smells/dog/",
    engine: {
      base: 4,
      locations: { "whole-house": 2, "one-room": 2 },
      observations: { "pets-in-home": 5 },
    },
  },
  {
    id: "pet-health-odor",
    name: "A change in the pet itself",
    summary:
      "A dog that suddenly smells much stronger — ears, skin, mouth, or the rear end — often has something a vet should look at.",
    families: ["pet-urine", "fishy"],
    signs: [
      "The dog smells strongly even right after a bath",
      "A fishy smell from the dog's rear; scratching, head shaking, or licking",
    ],
    checks: ["Smell the dog's ears, mouth, paws, and coat separately."],
    fixes: ["Vet visit."],
    diyLimit: "Medical causes are for the vet — we don't diagnose pets.",
    trade: "veterinarian",
    urgency: "soon",
    page: "/smells/dog/",
    engine: { base: 2, locations: { "whole-house": 1 }, observations: { "pets-in-home": 3 } },
  },
  {
    id: "skunk-nearby",
    name: "A skunk sprayed near or under the house",
    summary:
      "Skunk spray is extremely potent. A skunk under a deck, porch, or crawlspace — or one that sprayed nearby — can scent the inside of the house through vents and gaps.",
    families: ["skunk"],
    signs: [
      "Smell strongest outside or at night, when skunks are active",
      "Digging near the foundation, deck, or shed; a pet that came in smelling",
    ],
    checks: [
      "Walk the outside at the foundation, deck, and crawlspace vents and check where it's strongest.",
      "Make sure it isn't gas first — if it's strongest inside near a gas appliance, treat it as gas.",
    ],
    fixes: [
      "Ventilate; wash fabrics that picked it up.",
      "Have wildlife control humanely remove a resident skunk and seal the access point.",
    ],
    diyLimit: "Don't trap or corner a skunk yourself.",
    trade: "wildlife-control",
    urgency: "routine",
    page: "/smells/skunk/",
    engine: {
      base: 4,
      locations: { "outside-near-house": 4, "crawlspace-or-under-floor": 4, garage: 1 },
      timing: { "night-or-closed-up": 3, "comes-and-goes": 1 },
      observations: { "pets-in-home": 1, "gas-appliances": -1 },
    },
  },
  {
    id: "dead-animal",
    name: "Dead animal in a wall, attic, or crawlspace",
    summary:
      "A mouse, rat, or bird that died inside a wall or ceiling produces a sickly-sweet, rotten smell. It peaks over days and fades over a few weeks.",
    families: ["sweet-chemical", "rotten-egg"],
    signs: [
      "Rotten or sickly-sweet smell concentrated on one wall or ceiling area",
      "Flies appearing indoors; recent rodent activity",
    ],
    checks: [
      "Sniff along walls to find the strongest spot; check attics, crawlspaces, and behind appliances.",
    ],
    fixes: [
      "Remove the animal if you can reach it (wear gloves).",
      "Otherwise pest control can locate and remove it; ventilate while it fades.",
    ],
    diyLimit: "Opening walls or entering attics with insulation: pest control or a handyman.",
    trade: "pest-control",
    urgency: "routine",
    page: "/smells/rotten-eggs/",
    engine: {
      base: 2,
      locations: { "one-room": 2, garage: 2, "crawlspace-or-under-floor": 2, basement: 1 },
      timing: { "since-a-change": 2, constant: 1 },
      observations: { "rodent-signs": 4 },
    },
  },
  {
    id: "battery-overcharge",
    name: "Overcharging lead-acid battery",
    summary:
      "A failing or overcharged lead-acid battery — UPS backup, sump-pump backup, golf cart, or a car on a charger — can vent hydrogen sulfide with a rotten-egg smell.",
    families: ["rotten-egg"],
    signs: [
      "Smell near a battery backup unit, battery charger, or in the garage",
      "Battery case swollen or hot",
    ],
    checks: [
      "Find any lead-acid batteries in the house; feel the case from a distance for heat (don't touch a swollen one).",
    ],
    fixes: [
      "Disconnect the charger at the outlet if it's safe to reach.",
      "Replace the battery and have the charger checked.",
    ],
    diyLimit:
      "A hot, swollen, or hissing battery: ventilate, keep away, and call the fire department if it's smoking.",
    trade: "electrician",
    urgency: "urgent",
    page: "/smells/rotten-eggs/",
    engine: {
      base: 1,
      locations: { garage: 4, basement: 2, "near-appliance": 2 },
      observations: { "smoke-or-heat": 2 },
    },
  },

  // ─── Sweet / chemical ─────────────────────────────────────────────────────
  {
    id: "new-materials-voc",
    name: "New paint, flooring, furniture, or cleaners",
    summary:
      "Fresh paint, adhesives, vinyl flooring, foam furniture, and strong cleaners off-gas a chemical or solvent smell for days to weeks.",
    families: ["sweet-chemical"],
    signs: [
      "Started after a renovation, a delivery, or deep cleaning",
      "Strongest in the room with the new item",
    ],
    checks: [
      "Ventilate and see if it fades over days. Make sure products weren't mixed (bleach plus ammonia is dangerous).",
    ],
    fixes: ["Ventilate; run fans; let new items air out in a garage or outdoors where possible."],
    diyLimit:
      "If you feel unwell, leave the area and ventilate; contact Poison Control or a clinician if symptoms persist.",
    trade: "diy",
    urgency: "routine",
    engine: {
      base: 3,
      locations: { "one-room": 2, bedroom: 1 },
      timing: { "since-a-change": 5 },
      observations: { "recent-renovation": 8 },
    },
  },
  {
    id: "refrigerant-leak",
    name: "Refrigerant leak",
    summary:
      "Some people notice a faint sweet or chloroform-like smell near an AC, heat pump, or refrigerator that is leaking refrigerant. Cooling gets weaker over time.",
    families: ["sweet-chemical"],
    signs: [
      "AC or fridge cooling poorly",
      "Ice on the refrigerant line or indoor coil; hissing at the unit",
    ],
    checks: [
      "Check whether cooling has dropped off; look for ice or oily residue at line connections.",
    ],
    fixes: ["An HVAC or appliance tech leak-tests, repairs, and recharges the system."],
    diyLimit: "Refrigerant work requires a certified technician.",
    trade: "hvac",
    urgency: "soon",
    engine: {
      base: 2,
      locations: { "hvac-vents": 3, "near-appliance": 3, kitchen: 1 },
      timing: { "hvac-running": 3 },
      observations: { "hissing-sound": 2 },
    },
  },
  {
    id: "heating-glycol-leak",
    name: "Boiler or hydronic heating fluid leak",
    summary:
      "Hot-water heating systems that use glycol antifreeze can leak a sweet, syrupy smell, often noticed near the boiler or baseboard heaters when the heat is on.",
    families: ["sweet-chemical"],
    signs: [
      "Sweet smell near the boiler or radiators/baseboards",
      "Drips, residue, or falling pressure on the boiler gauge",
    ],
    checks: [
      "Look for wet spots or residue at the boiler and along the piping; note the pressure gauge.",
    ],
    fixes: ["A heating contractor finds and repairs the leak and tops up the fluid."],
    diyLimit: "Hydronic systems are pressurized and hot — HVAC/plumbing work.",
    trade: "hvac",
    urgency: "soon",
    engine: {
      base: 1,
      locations: { basement: 2, "near-appliance": 3 },
      timing: { "heat-first-on": 2, "hvac-running": 2 },
    },
  },
];

const byId = new Map(CAUSES.map((c) => [c.id, c]));

export function causeById(id: string): Cause {
  const c = byId.get(id);
  if (!c) throw new Error(`unknown cause id: ${id}`);
  return c;
}

export function hasCause(id: string): boolean {
  return byId.has(id);
}
