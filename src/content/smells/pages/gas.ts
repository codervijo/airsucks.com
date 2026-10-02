import { GAS_SAFETY, SOURCES } from "../reference";
import type { SmellPage } from "../types";

// Act-now page. Safety block first; look-alike guidance only after it.
export const gas: SmellPage = {
  path: "/smells/gas/",
  family: "gas",
  label: "Gas smell",
  title: "Smell Gas in Your House? What to Do Right Now",
  description:
    "Smell natural gas or propane at home? The steps to take right now, what not to touch, who to call, and what happens after the utility arrives.",
  h1: "Smell gas in the house? Do this now",
  targets: ["smell gas in house what to do", "gas smell in house", "propane smell in house"],
  quickAnswer:
    "Get everyone out, don't touch switches or anything that can spark, and call your gas utility or 911 from outside — propane homes call the supplier or 911. Don't try to find the leak yourself. Calling when you're not sure is the right call — the gas industry's own guidance is to always report a gas smell and not assume someone else will. Everything else on this page comes after that call.",
  urgency: "emergency",
  safety: GAS_SAFETY,
  causes: [
    {
      cause: "natural-gas-leak",
      likelihood: "most common",
      note: "In a home with gas service, a gas smell is treated as a leak until the utility says otherwise.",
    },
    {
      cause: "propane-leak",
      likelihood: "most common",
      note: "In propane homes. Propane settles low, so check basements and floor level from a distance — don't go looking.",
    },
    {
      cause: "outdoor-gas-source",
      likelihood: "common",
      note: "Stronger outside or near the meter; still the utility's job.",
    },
    {
      cause: "dry-p-trap",
      likelihood: "less common",
      note: "Sewer gas is the most common look-alike — but only once gas is ruled out.",
    },
    {
      cause: "water-heater-anode",
      likelihood: "less common",
      note: "A look-alike only if the smell is tied to hot water.",
    },
  ],
  compare: {
    headers: ["Situation", "What to do"],
    rows: [
      ["Strong smell anywhere inside", "Leave, then call from outside"],
      ["Hissing near a line, meter, or appliance", "Leave, then call from outside"],
      ["Smell outdoors near the meter or street", "Move away and call the utility"],
      [
        "Faint smell right at the stove, a burner knob left on",
        "Knob off, open windows, leave the room — call if it doesn't clear quickly",
      ],
      [
        "Smell only when hot water runs, never near appliances",
        "Probably the water heater — see the rotten-egg page",
      ],
      ["Utility came and found no leak", "See the no-leak page"],
    ],
  },
  decision: [
    {
      question: "Is the smell strong, or is there hissing, or does anyone feel unwell?",
      yes: "Leave now and call from outside. Nothing else first.",
      no: "Keep going — but if in doubt, leave and call anyway.",
    },
    {
      question: "Is it faint and only at the stove, with a burner knob left on?",
      yes: "Turn the knob off, open windows, and leave the room. If the smell doesn't clear quickly, follow the leave-and-call steps.",
      no: "Call the utility. A faint gas smell with no obvious reason still needs a check.",
    },
    {
      question: "Has the utility already checked and found no leak?",
      yes: "Work through the look-alikes.",
      href: "/smells/gas-but-no-leak/",
    },
  ],
  checks: [
    {
      title: "From outside: make the call",
      how: "Call your gas utility's emergency number, or 911. On propane, call your supplier or 911. Tell them where you smelled it and whether you heard hissing.",
    },
    {
      title: "Keep everyone out",
      how: "Wait at a distance — not in the attached garage, and don't start a car in it. Don't go back in for belongings or pets.",
    },
    {
      title: "After it's cleared: relight safely",
      how: "If the gas was shut off, let the utility or a qualified technician restore it and relight pilots. Propane systems need a leak check before appliances go back into use.",
    },
    {
      title: "Check your CO alarms",
      how: "Carbon monoxide has no smell, so the gas smell tells you nothing about CO. Make sure alarms are on every level and outside sleeping areas.",
    },
  ],
  sections: [
    {
      heading: "What happens when the utility arrives",
      body: [
        "A technician uses a gas detector to check the air, the meter, and the line into the house, and usually the connections at your gas appliances. If they find a leak, they shut off the gas to the leaking part or the whole house and tell you what has to be repaired. Leaks on your side of the meter are typically repaired by a licensed plumber or gas fitter, at your cost. Follow their instructions about when it's safe to go back in.",
      ],
    },
    {
      heading: "Gas or not gas? Only after it's safe",
      body: [
        "Sewer gas, a smelly water heater, and some drain problems can smell almost exactly like the odorant added to gas. That's why location matters. A smell near a gas appliance, the meter, or a gas line is treated as gas. A smell that's only at a drain, or only from hot water, is more likely the plumbing. But you don't need to work that out before calling — a no-leak visit is a good result, not a wasted one.",
      ],
    },
  ],
  diyStops: [
    "There is no DIY for a suspected gas leak beyond leaving, closing a propane tank valve on the way out if it's safe, and calling.",
    "Don't use soapy water, matches, or a flashlight to hunt for leaks indoors.",
    "Don't relight pilots or restore gas yourself after a shut-off unless the utility tells you it's fine.",
  ],
  whoToCall: [
    { trade: "gas-utility", when: "Natural gas: any time you smell it. Call from outside." },
    { trade: "propane-supplier", when: "Propane: call your supplier from a safe distance." },
    {
      trade: "emergency-911",
      when: "You can't reach the utility or supplier, or anyone is unwell.",
    },
    {
      trade: "plumber",
      when: "After a leak is found on your side of the meter — a licensed plumber or gas fitter repairs it.",
    },
  ],
  faq: [
    {
      q: "Should I open windows if I smell gas?",
      a: "Don't stay behind to do it. The priority is getting out without causing a spark. Opening a door on your way out is fine. Hunting for windows to open is not.",
    },
    {
      q: "Can I use my phone inside if I smell gas?",
      a: "Industry safety guidance says to call from outside, away from the building, and not to use phones or anything electrical inside where gas may be present.",
    },
    {
      q: "Is a small gas smell near the stove normal?",
      a: "A brief whiff when a burner lights can happen. A smell that lingers, or appears with the burners off, is not normal — call the utility.",
    },
    {
      q: "Does the gas company charge to check for a leak?",
      a: "Policies vary by utility, so ask yours — but never let cost stop you from calling. Repairs to lines and appliances on your side of the meter are usually your responsibility.",
    },
    {
      q: "What does propane smell like?",
      a: "Like natural gas: rotten eggs, sulfur, or skunk. Propane is heavier than air, so it can collect near the floor and in basements.",
    },
  ],
  related: [
    {
      title: "Smells like gas but no leak found",
      href: "/smells/gas-but-no-leak/",
      hint: "After the utility visit",
    },
    {
      title: "House smells like rotten eggs",
      href: "/smells/rotten-eggs/",
      hint: "Sulfur sources, ranked",
    },
    { title: "Skunk smell in the house", href: "/smells/skunk/", hint: "Gas can smell skunky" },
    {
      title: "Burning plastic smell",
      href: "/smells/burning-plastic/",
      hint: "Electrical hazards",
    },
  ],
  sources: [SOURCES.agaGas, SOURCES.propaneSafety, SOURCES.phmsaLeak, SOURCES.cpscCo],
  diagnose: { family: "gas" },
  updated: "2026-10-02",
};
