import { SOURCES } from "../reference";
import type { SmellPage } from "../types";

export const mustyAc: SmellPage = {
  path: "/smells/musty/ac/",
  family: "musty",
  label: "From the AC",
  title: "Musty Smell From AC: Why It Happens & How to Fix It",
  description:
    "AC or heat pump blows a musty, dirty-sock smell when it turns on? Learn the coil, drain, filter, and duct causes, what to check, and when to call HVAC.",
  h1: "Musty smell from the AC or heat pump: causes and fixes",
  targets: [
    "musty smell from ac",
    "ac smells musty when turned on",
    "dirty sock smell from ac",
    "heat pump smells musty",
  ],
  quickAnswer:
    "An AC that blows musty air almost always has biofilm growing where the system stays wet: the evaporator coil, the drain pan, or a clogged condensate line. The classic version is a dirty-sock smell for the first few minutes after the AC or heat pump starts. Change the filter, confirm the condensate line is draining, and if the start-up smell persists, have an HVAC tech clean the coil and pan. If it smells musty all the time and you can see growth at the registers, stop running it and get it inspected — EPA advises against running a system you suspect is contaminated with mold.",
  urgency: "soon",
  causes: [
    {
      cause: "ac-coil-drain",
      likelihood: "most common",
      note: "A burst of dirty-sock smell at start-up that fades after a few minutes is the textbook sign of coil and drain-pan biofilm.",
    },
    {
      cause: "dirty-filter",
      likelihood: "common",
      note: "Cheap to rule out, and a loaded filter feeds the coil the dust that biofilm grows on.",
    },
    {
      cause: "mold-in-ducts",
      likelihood: "less common",
      note: "More likely when ducts run through a damp crawlspace or attic, or the smell is constant whenever the fan runs.",
    },
    {
      cause: "oversized-ac",
      likelihood: "less common",
      note: "If the house feels cool but clammy, the AC may not be running long enough to dry the air.",
    },
    {
      cause: "crawlspace-moisture",
      likelihood: "less common",
      note: "Leaky return ducts in a crawlspace pull damp air straight into the system.",
    },
    {
      cause: "damp-basement",
      likelihood: "less common",
      note: "Same story with a basement air handler and leaky returns.",
    },
    {
      cause: "hvac-blower-motor",
      likelihood: "rare",
      note: "Not musty — but if the smell is hot or electrical rather than damp, treat it as this.",
    },
  ],
  compare: {
    headers: ["When it smells", "Likely source", "What to do"],
    rows: [
      [
        "First few minutes after start-up, then fades",
        "Coil and drain-pan biofilm",
        "Clear drain; schedule coil cleaning",
      ],
      [
        "Constantly, whenever the fan runs",
        "Ducts or air handler",
        "Inspect registers; HVAC inspection",
      ],
      [
        "With water around the indoor unit",
        "Clogged condensate drain",
        "Clear the line; check the pan and the float switch",
      ],
      [
        "House cool but clammy, smell everywhere",
        "AC not removing moisture",
        "Hygrometer; HVAC settings",
      ],
      [
        "Burning or electrical, not damp",
        "Motor or wiring",
        "Shut it off; see the burning-smell page",
      ],
    ],
  },
  decision: [
    {
      question: "Is the filter gray, matted, or past its change date?",
      yes: "Replace it, run the system for a day, and re-check. Sometimes that's enough.",
      no: "Keep going.",
    },
    {
      question: "Does the condensate line drip outside (or the pump run) while the AC is cooling?",
      yes: "The drain is moving. The biofilm is more likely on the coil or pan.",
      no: "The line is probably clogged. Flush it at the cleanout tee, and check for water in the pan.",
    },
    {
      question: "Does the smell fade a few minutes after start-up?",
      yes: "Classic coil biofilm. Book an HVAC coil and drain-pan cleaning.",
      no: "Constant smell points to ducts or the air handler. Keep going.",
    },
    {
      question: "Can you see growth on registers or inside the duct opening?",
      yes: "Stop running the system and get it inspected (EPA guidance).",
      no: "Check the crawlspace or basement where ducts run.",
      href: "/smells/musty/basement/",
    },
  ],
  checks: [
    {
      title: "Start-up sniff",
      how: "Stand at a supply register and turn the AC on. Note whether the smell hits in the first minutes and fades, or stays.",
    },
    {
      title: "Filter",
      how: "Pull the filter and check it against light. Replace it if it's gray or bowed. With pets, check monthly.",
    },
    {
      title: "Condensate line",
      how: "Find where the line ends outside or at a condensate pump. It should drip steadily during cooling. Many lines have a capped tee near the unit for flushing.",
    },
    {
      title: "Look at the registers",
      how: "Remove a supply register and shine a flashlight into the duct. Dust is normal; fuzzy or spotted growth isn't.",
    },
    {
      title: "Humidity during AC season",
      how: "Keep a hygrometer in the main living area. AC should hold the house under 60% (EPA's recommended ceiling); if it can't, it isn't drying the air.",
    },
  ],
  sections: [
    {
      heading: 'What is "dirty sock syndrome"?',
      body: [
        "It's the trade nickname for the funky, gym-locker smell some ACs and heat pumps blow for the first few minutes of a cycle. The cause is biofilm — bacteria and mold growing in the film of water and dust on the indoor coil. Heat pumps are known for it because the coil goes through wet and dry phases as the system switches modes.",
        "The fix is cleaning the coil and drain pan, keeping the filter fresh, and making sure the condensate drains freely. Spraying air freshener into the return just perfumes the biofilm.",
      ],
    },
  ],
  diyStops: [
    "Opening the air handler to clean the coil — it's HVAC work, with electrical and refrigerant parts inside.",
    "Visible growth inside ducts or the air handler. EPA advises not running the system until it's addressed.",
    "Water overflowing the pan or a float switch that keeps shutting the system off.",
  ],
  whoToCall: [
    {
      trade: "hvac",
      when: "Coil and drain-pan cleaning, a clogged drain you can't clear, or duct inspection.",
    },
    {
      trade: "mold-remediation",
      when: "Confirmed mold growth inside the ducts or the air handler.",
    },
    {
      trade: "waterproofing",
      when: "Ducts run through a wet crawlspace that keeps feeding the system moisture.",
    },
  ],
  faq: [
    {
      q: "Why does my AC smell musty when I first turn it on?",
      a: "Moisture and dust on the evaporator coil and drain pan grow biofilm between cycles. When the blower starts, it pushes that smell out until the coil gets going. A coil and pan cleaning and a clear drain usually fix it.",
    },
    {
      q: "Is a musty AC smell dangerous?",
      a: "It means something is growing in a wet part of the system, which you should fix. If you see mold at the registers or inside the system, EPA advises not running it until it's addressed. For health questions, see a clinician.",
    },
    {
      q: "Can I clean the AC coil myself?",
      a: "The outdoor condenser can be hosed off gently. The indoor evaporator coil sits inside the air handler with electrical parts nearby — that's usually a job for an HVAC tech.",
    },
    {
      q: "Will changing the filter fix a musty AC smell?",
      a: "Sometimes, if the filter itself was the source. Usually it helps but doesn't finish the job, because the smell lives on the coil and in the pan downstream of the filter.",
    },
    {
      q: "Why does my heat pump smell like dirty socks in heating mode?",
      a: "Heat pumps cycle the indoor coil between wet (cooling or defrost) and warm. Biofilm on the coil gets warmed and blown out — same cause as in summer, same fix.",
    },
  ],
  related: [
    {
      title: "Musty smell in the whole house",
      href: "/smells/musty/",
      hint: "If vents aren't the only source",
    },
    {
      title: "Musty smell in the basement",
      href: "/smells/musty/basement/",
      hint: "Where the air handler lives",
    },
    {
      title: "Burning plastic smell",
      href: "/smells/burning-plastic/",
      hint: "If it's hot, not damp",
    },
    {
      title: "Musty but no visible mold",
      href: "/smells/musty/no-visible-mold/",
      hint: "Hidden moisture",
    },
  ],
  sources: [SOURCES.epaMold, SOURCES.epaMoldCleanup],
  diagnose: { family: "musty", location: "hvac-vents" },
  updated: "2026-10-02",
};
