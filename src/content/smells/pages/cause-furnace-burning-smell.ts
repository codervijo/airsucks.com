import { GAS_SAFETY, SOURCES } from "../reference";
import type { SmellPage } from "../types";

// v3.G cause page #7. Targets "heater smells like burning" (1.3K US/mo) and
// "furnace burning smell" (590), both KD 0 — DataForSEO, 2026-11-07. SERP
// (2026-11-07): the top organic slot was an unrelated Pinterest page; AI
// Overview + PAA ("Should I be worried if I smell burning?", "Why does my
// electric heater smell like burning?", "Is there a smell before an
// electrical fire?"). Manufacturer windows for normal dust burn-off differ
// (Trane: fades quickly; Carrier: 30 min to a few hours), so the page gives
// the range with attribution rather than one number.
export const causeFurnaceBurningSmell: SmellPage = {
  path: "/smells/causes/furnace-burning-smell/",
  about: "furnace-dust-burnoff",
  family: "burning",
  label: "Heater burning smell",
  title: "Heater Smells Like Burning? Normal vs. Shut It Off",
  description:
    "Burning smell when the heat comes on? How to tell harmless dust burn-off from an electrical, motor, or gas problem, and when to shut the furnace off and call.",
  h1: "Heater or furnace smells like burning: when it's normal, and when to shut it off",
  targets: [
    "heater smells like burning",
    "furnace burning smell",
    "why does my heater smell like burning when first turned on",
    "electric heater smells like burning",
    "heater smells like burning plastic",
    "should i be worried if i smell burning",
  ],
  quickAnswer:
    "A dusty, toasty burning smell the first few times the heat runs each fall is normal: dust that settled on the furnace's heat exchanger or electric elements over the summer is burning off. Manufacturers say it should fade. Trane says quickly, and Carrier says anywhere from about 30 minutes to a few hours. A smell that lasts longer, gets stronger, or smells like hot plastic, rubber, or wiring is not dust. Turn the system off at the thermostat and call HVAC. A rotten-egg smell is a possible gas leak: leave and call from outside.",
  urgency: "routine",
  safety: {
    title: "When a heating smell means act now",
    when: [
      "Smoke from vents or the furnace, or a hot plastic, rubber, or electrical smell",
      "A rotten-egg or sulfur smell near a gas furnace, water heater, or meter",
      "A CO alarm sounding, or headaches, dizziness, or nausea that ease when you go outside",
      "A space heater's cord, plug, or outlet that's hot to the touch or discolored",
    ],
    actions: [
      "Smoke or flames: get out and call 911.",
      "Hot plastic or electrical smell: turn the heat off at the thermostat, switch off the furnace's power if it's safe to reach, and call HVAC.",
      "Rotten eggs: leave now, don't touch switches, and call the gas utility or 911 from outside.",
      "CO alarm or symptoms: get everyone outside into fresh air and call 911 or the fire department.",
    ],
    note: GAS_SAFETY.note,
  },
  causes: [
    {
      cause: "furnace-dust-burnoff",
      likelihood: "most common",
      note: "Dusty, toasty smell the first time or two the heat runs for the season, from every vent, fading as the system runs. Normal.",
    },
    {
      cause: "dirty-filter",
      likelihood: "common",
      note: "A clogged filter makes the burn-off smell worse and longer, and starves the furnace of air so it runs hotter. Change it before the first cold night.",
    },
    {
      cause: "hvac-blower-motor",
      likelihood: "less common",
      note: "A hot electrical or burning-rubber smell that doesn't fade, sometimes with a hum, squeal, or weak airflow. An overheating blower motor or capacitor.",
    },
    {
      cause: "electrical-overheating",
      likelihood: "less common",
      note: "Hot plastic or fishy smell at a baseboard heater, a wall heater, or an outlet a space heater is plugged into. Wiring or a connection overheating.",
    },
    {
      cause: "appliance-overheating",
      likelihood: "less common",
      note: "A space heater that smells hot: dust on its element, something too close to it, or the heater itself failing.",
    },
  ],
  compare: {
    headers: ["The smell", "What it usually is", "What to do"],
    rows: [
      [
        "Dusty, like toast, first heat of the season, from all vents",
        "Dust burning off",
        "New filter, crack a window, let it run",
      ],
      [
        "Same dusty smell, but still there after a day",
        "Heavy dust, clogged filter, or something sitting on the heat exchanger",
        "Turn off, check filter, call HVAC",
      ],
      [
        "Hot plastic, rubber, or wiring",
        "Blower motor, wiring, or a foreign object near the burner",
        "Turn off now; call HVAC",
      ],
      [
        "Rotten eggs or sulfur",
        "Possible gas leak",
        "Leave and call from outside",
      ],
      [
        "Oily or smoky, oil-fired furnace",
        "Burner or oil leak problem",
        "Turn off if strong; call the oil service tech",
      ],
      [
        "Hot or burning near a space heater",
        "Dust on the element, something too close, or a hot cord or outlet",
        "Unplug; check clearance and the outlet",
      ],
    ],
  },
  decision: [
    {
      question: "Is there smoke, a rotten-egg smell, or a CO alarm?",
      yes: "Follow the safety box above: get out first, then call.",
      href: "/smells/gas/",
      no: "Keep going.",
    },
    {
      question: "Is this the first heat of the season (or the first after a long break), and does it smell like dust?",
      yes: "Almost certainly burn-off. Put in a fresh filter, open a window, and let it run. Recheck in a few hours.",
      no: "Keep going.",
    },
    {
      question: "Does it smell like hot plastic, rubber, or wiring, or has a dusty smell lasted past a day?",
      yes: "Turn the system off and call HVAC. Don't keep running it to see if it clears.",
      href: "/smells/burning-plastic/",
      no: "Keep going.",
    },
    {
      question: "Is it a space heater, baseboard heater, or wall heater?",
      yes: "Unplug or switch it off, let it cool, and check what's near it and the cord and outlet (below).",
      no: "If you can't place it, have the furnace inspected. A smell you can't explain is worth a service call.",
    },
  ],
  checks: [
    {
      title: "Change the filter first",
      how: "Pull the furnace filter. A grey, clogged filter both adds to the smell and makes the furnace run hotter. ENERGY STAR recommends checking it monthly during the heating season. Put in a clean one of the right size before running the heat again.",
    },
    {
      title: "Time it",
      how: "Note when the smell starts and how long it lasts. Dust burn-off is strongest in the first minutes of the first heating cycles and gets weaker each time. A smell that's the same or stronger on day two isn't dust.",
    },
    {
      title: "Smell the vents, then the furnace",
      how: "If every vent smells the same and faintly, it's in the system's airflow. If one room smells strongly and others don't, look in that room for a space heater, a baseboard heater with something on it, or something lying on a floor register. At the furnace itself, a hot electrical smell near the blower compartment points to the motor.",
    },
    {
      title: "Look around the furnace and registers",
      how: "Look for anything stored too close to the furnace, such as boxes, laundry, or paint cans, and anything that's fallen onto a floor register or into a duct opening: toys, paper, a sock. Things that fall into floor vents can end up near hot parts.",
    },
    {
      title: "Check space heater cords and outlets",
      how: "With a space heater running, carefully feel the plug and the outlet faceplate after a few minutes. Warm is normal; hot, discolored, or melted is not. CPSC says to plug space heaters directly into a wall outlet, never an extension cord or power strip, and to keep them at least three feet from drapes, furniture, and bedding.",
    },
  ],
  sections: [
    {
      heading: "Why a furnace smells the first time you turn it on",
      body: [
        "Over the cooling season, dust settles on everything inside the furnace, including the heat exchanger on a gas furnace and the heating elements in an electric furnace or heat strip. The first time the burners light or the elements glow, that dust scorches. The smell rides the airflow to every room. It's the same reason a toaster or an oven smells the first time you use it after a while.",
        "Manufacturers describe it consistently but put different times on it. Trane says the smell should go away relatively quickly. Carrier says it usually lasts anywhere from about 30 minutes to a few hours, and that if it lasts longer or gets stronger, the system should be checked. New furnaces have their own first-run smell as coatings and oils cure. Trane says that should fade within about an hour, and to call the installer if it persists or you see smoke.",
      ],
    },
    {
      heading: "When it isn't dust",
      body: [
        "The shape of the smell tells you most of what you need. Dust is dry and toasty, everywhere at once, and fades. A hot plastic or rubber smell, or the sharp smell of overheated wiring, is a different thing: Trane calls a burning-plastic smell a sign of an electrical problem and a big safety hazard, and Carrier links it to overheated blower motors and damaged wiring. Turn the heat off rather than waiting it out.",
        "A smell that's oily or smoky on an oil-fired furnace can mean a burner or oil leak problem, which Carrier says to shut down if it's strong or persistent. A rotten-egg smell is never burning dust. Natural gas and propane are odorized to smell that way so you notice leaks. And remember that carbon monoxide has no smell at all, which is why the CO alarm, not your nose, is the safety check for a gas furnace.",
      ],
    },
    {
      heading: "Space heaters and baseboard heaters",
      body: [
        "Portable and baseboard heaters smell the same way at first use, for the same reason: dust on the element. Vacuum the heater (unplugged and cool) and the fins of baseboard heaters before the season starts. What isn't normal is a hot-plastic smell, a cord or plug that's hot, or an outlet that's discolored. Those are overheating connections, and they're fire risks.",
        "CPSC's guidance is short and worth following exactly: keep space heaters at least three feet from drapes, furniture, and bedding; plug them straight into a wall outlet, never an extension cord or power strip; and don't leave them running unattended. Furniture or curtains too close to a baseboard heater also scorch and smell.",
      ],
    },
    {
      heading: "Making the first-heat smell shorter",
      body: [
        "Put in a fresh filter and run the heat for the first time on a mild day with a couple of windows cracked. That gets the burn-off done when you can air the house out. ENERGY STAR recommends a heating check-up by a contractor every fall. A service visit cleans the burners and checks the blower, the wiring, and the venting, and catches the electrical and combustion problems before the first cold night.",
      ],
    },
    {
      heading: "Three first cold nights",
      body: [
        "A gas furnace that smelled like burning toast through the whole house the first evening it ran. The filter was months overdue. A new filter and an open window, and by the next morning there was no smell at all.",
        "An electric furnace with heat strips that smelled 'like something electrical' and didn't fade by day two. The technician found a heat strip connection that had been overheating and had scorched its insulation. Turning it off when the smell didn't fade was the right call.",
        "The failure case: a bedroom that smelled of burning every night, blamed on the furnace and ignored as 'dust'. It was a space heater plugged into a power strip behind the bed, with the strip's plug overheating. CPSC's rules exist for exactly this. The heater went straight into a wall outlet and the bedding was moved back.",
      ],
    },
  ],
  diyStops: [
    "Any hot plastic, rubber, or electrical smell from the furnace, vents, or a heater. Turn it off and call.",
    "A dusty smell that's still there after a day, or getting stronger.",
    "Smoke, a rotten-egg smell, or a CO alarm. Get out and call from outside.",
    "A hot, discolored, or melted outlet, plug, or cord. Stop using it and call an electrician.",
  ],
  whoToCall: [
    {
      trade: "hvac",
      when: "A burning smell that doesn't fade, any electrical or rubber smell from the furnace, or the annual fall check-up.",
    },
    {
      trade: "electrician",
      when: "A hot or discolored outlet, a baseboard heater connection that smells, or repeated tripped breakers with a burning smell.",
    },
    { trade: "gas-utility", when: "Any rotten-egg smell. Call from outside." },
    { trade: "emergency-911", when: "Smoke, fire, or a CO alarm with symptoms." },
  ],
  faq: [
    {
      q: "Why does my heater smell like burning when first turned on?",
      a: "Dust settles on the heat exchanger or heating elements while the heat is off, and burns off the first few times it runs. It's normal if it smells dusty and fades. Trane says quickly, Carrier says within about 30 minutes to a few hours. Put in a clean filter and open a window.",
    },
    {
      q: "Should I be worried if I smell burning?",
      a: "Not if it's the dusty first-heat smell and it fades. Do worry if it smells like hot plastic, rubber, or wiring, if it doesn't fade or gets stronger, or if you see smoke. Then turn the heat off and call HVAC, or get out and call 911 for smoke.",
    },
    {
      q: "Why does my electric space heater smell like burning?",
      a: "Usually dust on the element, especially at first use each season. If it smells like hot plastic, check that nothing is within three feet of it (CPSC's guidance), that it's plugged straight into a wall outlet and not a power strip or extension cord, and that the plug and outlet aren't hot. Stop using any heater with a hot or damaged cord.",
    },
    {
      q: "Is there a smell before an electrical fire?",
      a: "Often, yes: a hot plastic, burning rubber, or sometimes fishy smell from overheating insulation, frequently near an outlet, switch, light fixture, or appliance. It's a warning to act on immediately. Turn off and unplug what you can, check outlets and cover plates for heat or discoloration, and call an electrician.",
    },
    {
      q: "How long should a new furnace smell?",
      a: "Trane says a new furnace's first-run odor, from coatings and lubricants curing, should fade within about an hour. If it persists or there's smoke, call the installer.",
    },
    {
      q: "Can a dirty furnace filter cause a burning smell?",
      a: "It can make one worse. A clogged filter traps dust that can burn off, and it restricts airflow so the furnace runs hotter. It's the first thing to check before calling anyone.",
    },
  ],
  related: [
    {
      title: "Burning plastic or electrical smell",
      href: "/smells/burning-plastic/",
      hint: "Outlets, wiring, appliances",
    },
    {
      title: "Smell gas in the house?",
      href: "/smells/gas/",
      hint: "Rotten eggs is never dust",
    },
    {
      title: "Fishy smell in the house",
      href: "/smells/fishy/",
      hint: "Often an overheating outlet",
    },
    {
      title: "Dirty sock syndrome",
      href: "/smells/causes/dirty-sock-syndrome/",
      hint: "Heat pump smells sour, not burnt",
    },
  ],
  sources: [
    SOURCES.traneBurningSmell,
    SOURCES.carrierBurningSmell,
    SOURCES.cpscHeaters2023,
    SOURCES.energyStarMaintenance,
    SOURCES.cpscCo,
  ],
  diagnose: { family: "burning", location: "hvac-vents" },
  updated: "2026-11-07",
};
