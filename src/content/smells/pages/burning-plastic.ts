import { SOURCES } from "../reference";
import type { SmellPage } from "../types";

// Burning plastic / electrical smell. Safety-first page: the fire and electrical
// block comes before any troubleshooting.
export const burningPlastic: SmellPage = {
  path: "/smells/burning-plastic/",
  family: "burning",
  label: "Burning plastic smell",
  title: "Burning Plastic Smell in House: What to Do Now",
  description:
    "Burning plastic or electrical smell at home? When to get out and call 911, how to find the source safely, and how to tell normal furnace dust from danger.",
  h1: "Burning plastic or electrical smell in your house",
  targets: [
    "burning plastic smell in house",
    "electrical burning smell in house",
    "burning smell when heat turns on",
    "fishy smell in house electrical",
  ],
  quickAnswer:
    "A burning-plastic smell with no obvious cause is usually something electrical overheating: an outlet, switch, light fixture, power strip, appliance motor, or the furnace blower. Electrical parts often smell fishy before they smell like burning. If there's smoke, sparks, or a scorched or hot outlet, get out and call 911. If there's no smoke, find the source by smell and touch, switch off that circuit, and get an electrician or technician the same day. One common exception is harmless: a dusty burning smell the first few times the heat runs each season, which fades within hours.",
  urgency: "urgent",
  safety: {
    title: "Stop and act now if",
    when: [
      "You see smoke, flames, or sparks, or the smell is getting stronger",
      "An outlet, switch, plug, or cord is scorched, melted, or hot to the touch",
      "A smoke alarm is sounding",
    ],
    actions: [
      "Get everyone out and call 911 from outside. Don't try to find the source first.",
      "If there's no smoke, but an outlet or switch is warm or discolored or lights flicker: switch off that circuit's breaker if the panel is safe to reach. Don't unplug or touch anything that's hot.",
      "Call a licensed electrician today, and don't use that circuit until it's checked.",
      "Burning smell from the furnace or air handler: turn the system off at the thermostat and call an HVAC technician.",
    ],
    note: "Carbon monoxide has no smell, so a burning smell can't warn you about it. Keep working smoke alarms and CO alarms on every level and outside sleeping areas.",
  },
  causes: [
    {
      cause: "electrical-overheating",
      likelihood: "most common",
      note: "The usual source when the smell isn't tied to an appliance or the heat coming on.",
    },
    {
      cause: "furnace-dust-burnoff",
      likelihood: "most common",
      note: "Only fits if it's the first heat of the season and the smell is dusty, not plastic, and fading.",
    },
    {
      cause: "appliance-overheating",
      likelihood: "common",
      note: "Dryers are the classic case — lint in the vent run builds heat.",
    },
    {
      cause: "plastic-on-heat",
      likelihood: "common",
      note: "Sharp, sudden smell right after running the dishwasher, oven, or toaster, or turning on a heater.",
    },
    {
      cause: "hvac-blower-motor",
      likelihood: "less common",
      note: "Hot electrical or rubber smell through the vents every time the fan runs.",
    },
  ],
  compare: {
    headers: ["What it smells like / when", "Likely source", "Normal?"],
    rows: [
      ["Dusty burning, first heat of the season, fades in hours", "Dust on the furnace", "Yes"],
      [
        "Plastic, rubber, or fishy, near an outlet or light",
        "Overheating electrical part",
        "No — electrician",
      ],
      ["Through the vents every time the fan runs", "Blower motor or wiring", "No — HVAC"],
      ["Only when one appliance runs", "That appliance", "No — stop using it"],
      [
        "Sudden, right after cooking or the dishwasher",
        "Plastic on a heating element",
        "Usually minor",
      ],
      ["Fishy with no fish in the house", "Overheating electrical part", "No — electrician"],
    ],
  },
  decision: [
    {
      question: "Any smoke, sparks, scorch marks, or a hot outlet?",
      yes: "Get out and call 911 now.",
      no: "Keep going, carefully.",
    },
    {
      question:
        "Did it start the first time the heat ran this season, smell dusty, and fade within a few hours?",
      yes: "That's normal dust burn-off. Change the filter. If it persists past a day or smells like plastic, call HVAC.",
      no: "Keep going.",
    },
    {
      question: "Does it only happen when one appliance is running?",
      yes: "Stop using that appliance and have it repaired. For a dryer, clean the whole vent run.",
      no: "Keep going.",
    },
    {
      question:
        "Is it strongest near an outlet, switch, fixture, or power strip — or do lights flicker?",
      yes: "Switch off that breaker and call an electrician today.",
    },
  ],
  checks: [
    {
      title: "Find where it's strongest",
      how: "Walk room to room, smelling near outlets, switches, light fixtures, lamps, power strips, chargers, and appliances. Don't open anything.",
    },
    {
      title: "Touch-test cover plates",
      how: "Use the back of your hand on outlet and switch plates, dimmers, and plugs in the area. A plate that's warm when nothing heavy is plugged in, or any discoloration, means breaker off and an electrician.",
    },
    {
      title: "Run appliances one at a time",
      how: "If the smell comes and goes, note what's running when it appears: dryer, dishwasher, microwave, space heater, furnace fan. Then stop using the suspect.",
    },
    {
      title: "Check the dishwasher and stovetop",
      how: "Look at the bottom heating element of the dishwasher and around burners, the toaster, and the oven for melted plastic.",
    },
    {
      title: "Check the furnace filter",
      how: "A very dirty filter makes the system run hot and adds to the burning-dust smell at season start.",
    },
  ],
  sections: [
    {
      heading: "Burning smell when the heat turns on",
      body: [
        "Most heating systems smell like burning dust the first few times they run after summer. Dust settles on the burner, heat exchanger, or electric elements and burns off. It should smell dusty, not like plastic or rubber, and fade within a few hours.",
        "It's not the normal burn-off if: the smell lasts beyond the first day, smells like plastic, rubber, or hot wiring, comes back every time the fan runs, or comes with odd noises. Turn the system off at the thermostat and call an HVAC technician. Any fuel-burning furnace should also have a working CO alarm nearby, since CO gives no smell.",
      ],
    },
    {
      heading: "Why electrical problems can smell fishy",
      body: [
        "Many outlets, switches, and fixtures contain plastics that give off a fishy or urine-like smell when they overheat, often before anything smells like burning. A fishy smell in a room with no fish, garbage, or pet source is worth checking at the outlets and lights.",
      ],
    },
  ],
  diyStops: [
    "Any smoke, sparks, scorching, or a hot outlet or switch — leave and call 911.",
    "Any warm, discolored, buzzing, or crackling electrical device — breaker off, electrician.",
    "Burning smell from the furnace or air handler that isn't the brief season-start dust smell.",
    "Opening outlets, switches, panels, or appliance housings.",
  ],
  whoToCall: [
    { trade: "emergency-911", when: "Smoke, flames, sparks, or a smoke alarm." },
    {
      trade: "electrician",
      when: "The smell is at outlets, switches, fixtures, or the panel, or lights flicker.",
    },
    { trade: "hvac", when: "The smell comes through the vents when the system runs." },
    { trade: "appliance-repair", when: "It happens only when one appliance runs." },
  ],
  faq: [
    {
      q: "Should I call 911 for a burning smell with no smoke?",
      a: "If you can't find the source and the smell is strong or getting stronger, yes — fire departments respond to unexplained burning smells. If you've found a warm outlet with no smoke, switch off its breaker and call an electrician right away.",
    },
    {
      q: "Is a burning smell from the furnace normal?",
      a: "A dusty smell the first few times it runs each season is normal and fades within hours. A plastic, rubber, or electrical smell, or one that keeps coming back, is not — turn it off and call HVAC.",
    },
    {
      q: "What does an electrical burning smell smell like?",
      a: "Usually hot or burning plastic. Many people also describe a fishy or urine-like smell from overheating outlets and fixtures before there's a burning smell.",
    },
    {
      q: "Can I keep using an outlet that smelled hot once?",
      a: "No. Overheating means a loose connection or failing device, and it tends to get worse. Leave the circuit off until an electrician checks it.",
    },
  ],
  related: [
    {
      title: "House smells like cat pee",
      href: "/smells/cat-pee/",
      hint: "The urine-like electrical smell",
    },
    { title: "I smell gas", href: "/smells/gas/", hint: "If it's sulfur, not plastic" },
    { title: "Musty smell from the AC", href: "/smells/musty/ac/", hint: "Other vent smells" },
    { title: "All smells", href: "/smells/", hint: "Browse by odor" },
  ],
  sources: [SOURCES.cpscCo],
  diagnose: { family: "burning" },
  updated: "2026-10-02",
};
