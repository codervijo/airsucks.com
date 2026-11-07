import { SOURCES } from "../reference";
import type { SmellPage } from "../types";

// v3.G cause page #3. Targets "mold in air ducts" (2.9K US/mo, KD 2) —
// DataForSEO, 2026-11-07. SERP (2026-11-07): remediation franchises, duct
// cleaners, HVAC contractors, Reddit; related searches "is mold on air vents
// dangerous", "spray to kill mold in air ducts", "will mold in air ducts
// spread". Every ranking page sells the fix. This one leans on EPA's duct
// cleaning guide: confirm it, fix the moisture, and know what not to buy.
// No health claims beyond EPA's own wording (YMYL).
export const causeMoldInDucts: SmellPage = {
  path: "/smells/causes/mold-in-ducts/",
  about: "mold-in-ducts",
  family: "musty",
  label: "Mold in air ducts",
  title: "Mold in Air Ducts: How to Tell, and What Fixes It",
  description:
    "Musty air from the vents, or dark spots on a register? How to tell if it's really mold in the ducts, what causes it, and what EPA says before you pay to clean.",
  h1: "Mold in air ducts: how to tell if it's really there, and what actually fixes it",
  targets: [
    "mold in air ducts",
    "signs of mold in air ducts",
    "what causes mold in air ducts",
    "is mold on air vents dangerous",
    "spray to kill mold in air ducts",
    "will mold in air ducts spread",
  ],
  quickAnswer:
    "Most of what people call mold in the air ducts is either growth on the AC's coil and drain pan, or mildew on the vent covers from condensation, not mold through the ductwork itself. Real duct mold needs a steady moisture source: a cooling coil that drips into the duct, leaky ducts in a humid attic or crawlspace, or a house that stays above about 60% humidity. Find and fix that first, because EPA's guidance is blunt: if the cause isn't corrected, the mold comes back. Then clean or replace what's contaminated. Moldy fiberglass duct board or lining can't be cleaned, only replaced.",
  urgency: "soon",
  causes: [
    {
      cause: "ac-coil-drain",
      likelihood: "most common",
      note: "The usual real source of 'duct mold'. The cooling coil is wet every time the AC runs, and a dirty coil or a pan that doesn't drain grows a film that every vent then smells of.",
    },
    {
      cause: "high-humidity",
      likelihood: "common",
      note: "Dark speckles on the vent covers, especially ceiling vents in summer. Cold supply air meets humid room air at the grille, water condenses, and mildew grows on the cover and the first inch of duct.",
    },
    {
      cause: "mold-in-ducts",
      likelihood: "common",
      note: "Growth inside the ductwork itself: leaky ducts running through a humid attic or crawlspace, duct board or lined duct that got wet, or a coil that's been dripping into the supply plenum.",
    },
    {
      cause: "oversized-ac",
      likelihood: "less common",
      note: "A system that cools fast and shuts off before it dries the air. The house stays cool but clammy, which keeps ducts and vents damp.",
    },
    {
      cause: "dirty-filter",
      likelihood: "less common",
      note: "A loaded filter smells stale and lets dust coat the coil, which then holds moisture. Cheap to rule out first.",
    },
  ],
  compare: {
    headers: ["What you see or smell", "Most likely", "What fixes it"],
    rows: [
      [
        "Black or grey speckles on the vent covers and ceiling around them; summer only",
        "Condensation at the grille",
        "Lower humidity, seal and insulate the duct boot, clean the covers",
      ],
      [
        "Musty smell at every vent when the AC starts, fades after a few minutes",
        "Coil and drain pan",
        "Coil and drain pan cleaning, clear the drain",
      ],
      [
        "Growth you can see well inside a duct, or on the inside of the air handler",
        "Mold in the system",
        "Moisture fix, then professional cleaning or replacement",
      ],
      [
        "Musty air from one or two rooms only; ducts run through a damp crawlspace or hot attic",
        "Leaky or sweating ducts in that run",
        "Seal and insulate that run; replace wet duct",
      ],
      [
        "Stale, dusty smell at all vents, nothing visible",
        "Overdue filter, dust",
        "New filter; check the coil",
      ],
    ],
  },
  decision: [
    {
      question: "Is there visible growth covering a large area inside the air handler or ducts, or is the duct lining wet?",
      yes: "Don't keep running the system. EPA advises against running an HVAC system you know or suspect is contaminated with mold, because it can spread mold through the house. Call HVAC.",
      no: "Keep going.",
    },
    {
      question: "Are the spots only on the vent covers and the ceiling or wall right around them?",
      yes: "Condensation at the grille. Clean the covers and fix the humidity and the duct connection. Duct cleaning won't stop it.",
      no: "Keep going.",
    },
    {
      question: "Does the smell come mostly when the AC first starts, and fade after a few minutes?",
      yes: "The coil and drain pan are the likely source, not the ducts.",
      href: "/smells/causes/dirty-sock-syndrome/",
      no: "Keep going.",
    },
    {
      question: "Is the musty smell in the house even with the system off?",
      yes: "The HVAC is spreading it, not making it. Look for the source in the house.",
      href: "/smells/musty/no-visible-mold/",
      no: "Have the system inspected, and ask to be shown what they find.",
    },
  ],
  checks: [
    {
      title: "Start with the filter",
      how: "Pull it and look. A grey, matted, or damp filter is a source of stale smell on its own, and it means dust has been reaching the coil. Replace it before judging anything else.",
    },
    {
      title: "Look into a few supply vents",
      how: "Unscrew a register or two, including one near the air handler and one at the far end of the house. Use a flashlight and a phone camera at arm's length. Dust is grey and even. Growth tends to be patchy, sometimes fuzzy, and clustered where things get wet. Feel the duct: damp or sweating metal is the real finding.",
    },
    {
      title: "Check the air handler, with the power off",
      how: "At the furnace or air handler, switch off the power and take off the access panel above or around the coil if it comes off without tools. Look at the coil face, the drain pan below it, and the inside of the cabinet. Standing water, slime, or growth here explains most whole-house musty smells.",
    },
    {
      title: "Measure the humidity",
      how: "Run a hygrometer for a few days in summer. EPA recommends keeping indoor humidity below 60%, ideally 30–50%. A house that sits above that will keep growing mildew at the vents however clean the ducts are.",
    },
    {
      title: "Follow the ducts, if you can see them",
      how: "In the attic, basement, or crawlspace, look for disconnected or crushed flex duct, missing insulation, and ducts that are wet on the outside. A duct sweating into a crawlspace soaks its own insulation and anything below it.",
    },
  ],
  sections: [
    {
      heading: "How mold gets into ductwork",
      body: [
        "Mold in a duct needs the same thing it needs anywhere: moisture that stays. Ducts carry air, not water, so something has to wet them. The usual culprits are a cooling coil that's dirty or has a blocked drain, so water carries over into the supply side; ducts running through a humid crawlspace or a hot attic, where leaks pull in damp air or the cold duct sweats; duct board or lined duct that got wet once and never dried; and a house kept humid by an oversized AC or no dehumidification.",
        "Dust is the food, and every system has some. That's why moisture control, not cleaning, is the fix. EPA says it directly: if the conditions that caused the mold aren't corrected, it will grow back.",
      ],
    },
    {
      heading: "Is it mold, and is it in the ducts?",
      body: [
        "EPA's guidance is that you can't confirm mold just by looking: a positive identification takes an expert and sometimes lab analysis. In practice, the more useful question is where it is. Spots on the register cover, or on the ceiling around it, are almost always condensation at the grille. They're easy to clean and aren't evidence of mold deeper in the system. Growth on the coil and in the pan is common, and it's an HVAC maintenance job. Growth spread along the inside of the ducts, especially away from the air handler, is the case where cleaning or replacing duct is actually needed.",
        "If a duct-cleaning company says it found mold, EPA's advice is to ask them to show it to you. Many sections of a duct system aren't visible to you, which is exactly why a photo or a look through their camera is a reasonable request.",
      ],
    },
    {
      heading: "What fixes it, and what EPA says to be careful with",
      body: [
        "Fix the moisture first: clean the coil and clear the drain, seal and insulate duct runs in the attic or crawlspace, and get the humidity under control. Then deal with the growth. Sheet-metal ducts can be cleaned. EPA, NADCA (the duct cleaning trade association), and NAIMA (the insulation manufacturers' association) all say wet or moldy fiberglass duct board or duct lining can't be effectively cleaned and should be replaced. EPA also says steam cleaning and other wet methods shouldn't be used on any kind of ductwork.",
        "Sprays, foggers, and coatings are where people overspend. EPA notes that no products are registered as biocides for fiberglass duct board or lined ducts. On bare metal, a biocide should only be used to the label after the provider has shown you the growth, and EPA suggests you and your pets stay out while it's applied. EPA also says sealants should never be used to cover actively growing mold, wet duct liner, or debris. A fog that makes the house smell clean for a week without fixing the coil or the leak is money spent on the symptom.",
        "Duct cleaning itself isn't a routine maintenance item. EPA recommends it only as needed, and it gives a short list for hiring: get written estimates from at least three providers, check references and licenses, make sure they follow NADCA standards, and avoid anyone selling sweeping health benefits.",
      ],
    },
    {
      heading: "Cleaning the vent covers yourself",
      body: [
        "Spots on registers and grilles are a normal DIY clean. Turn the system off, unscrew the cover, and scrub it in a sink or tub with detergent and water, which is EPA's recommended method for mold on hard surfaces. Dry it fully before it goes back. Wipe the first few inches of the duct opening you can reach. If the spots come back within weeks, that's your sign the humidity or the duct connection at that vent needs fixing. Stop and call a pro if growth extends deep into the duct, the duct is wet, or the area involved is large. EPA's rule of thumb is that a homeowner can usually handle mold covering less than about 10 square feet.",
      ],
    },
    {
      heading: "Three houses",
      body: [
        "A two-story house with black speckles on every upstairs ceiling vent each August. A duct cleaner quoted for 'mold remediation'. The ducts were clean. The vents sat in a hot attic with crushed insulation around the boots, and the house was at 65% humidity. Re-insulating the boots and adding a dehumidifier stopped it; the covers just needed washing.",
        "A ranch house that smelled musty from two bedroom vents only. Those runs went through a vented crawlspace, and one flex duct had come off its collar and had been blowing cold air into the crawlspace and sucking in damp air for a season. The inside of that run was growing. That section was replaced, the connection sealed, and the smell went with it.",
        "The failure case: a house that paid for duct cleaning and an antimicrobial fog twice in a year. Both times it smelled fine for about a month. The cause was a slow, partly blocked condensate drain that kept the pan wet all summer. Clearing and treating the drain line and cleaning the coil fixed what the duct work never could.",
      ],
    },
  ],
  diyStops: [
    "Growth inside the air handler, on the coil, or spread along the inside of the ducts.",
    "Wet or moldy fiberglass duct board, duct liner, or flex duct. It needs replacing, not cleaning.",
    "Mold covering more than about 10 square feet, or anyone in the house with symptoms they link to it.",
    "A contractor recommending biocides, fogging, or sealants. Ask to see the growth and check it against EPA's guidance first.",
  ],
  whoToCall: [
    {
      trade: "hvac",
      when: "Coil and drain pan cleaning, drain line clearing, duct sealing and insulation, and humidity control.",
    },
    {
      trade: "mold-remediation",
      when: "Confirmed growth through the ductwork or air handler, or a large area. Hire to NADCA standards.",
    },
    { trade: "diy", when: "Filter changes, cleaning vent covers, and measuring humidity." },
  ],
  faq: [
    {
      q: "Is mold on air vents dangerous?",
      a: "EPA's guidance is that molds can cause health problems, and that inhaling or touching mold may cause allergic reactions in sensitive people. Spots on a vent cover are usually a small area you can clean, but don't ignore them, and fix the moisture behind them. If anyone in the home has symptoms they link to the house, talk to a doctor. We don't give medical advice.",
    },
    {
      q: "Will mold in air ducts spread?",
      a: "It can be carried through the house when the fan runs, which is why EPA advises not running a system you know or suspect is contaminated. It only keeps growing where it stays damp, so drying the system out, by fixing the coil, drain, leaks, and humidity, is what stops it.",
    },
    {
      q: "Is there a spray that kills mold in air ducts?",
      a: "Sprays and foggers don't fix the moisture, so growth comes back. EPA notes that no biocides are registered for fiberglass duct board or lined ducts. On bare metal, a biocide should be used only after the growth has been shown to you and strictly per the label. Cleaning or replacing the contaminated parts is the real fix.",
    },
    {
      q: "How often should air ducts be cleaned?",
      a: "EPA doesn't recommend routine duct cleaning, only when it's needed: substantial visible mold growth in hard-surface ducts, vermin, or heavy dust and debris actually coming out of the vents.",
    },
    {
      q: "Can I clean mold out of the ducts myself?",
      a: "You can clean the vent covers and the duct opening you can reach. Inside the ducts and the air handler, it's professional work: it needs equipment that keeps what's dislodged from being blown through the house, and fiberglass duct material has to be replaced rather than cleaned.",
    },
    {
      q: "Will a UV light in the air handler fix it?",
      a: "UV lamps are sold to keep growth down on the coil and drain pan. They don't clean growth that's already in the ducts, and they don't fix a clogged drain, leaky ducts, or high humidity. Treat one as an add-on after the moisture is fixed, not a cure.",
    },
  ],
  related: [
    {
      title: "Dirty sock syndrome",
      href: "/smells/causes/dirty-sock-syndrome/",
      hint: "Smell at start-up that fades",
    },
    {
      title: "Musty smell from the AC",
      href: "/smells/musty/ac/",
      hint: "Coil, drain pan, and filter",
    },
    {
      title: "Musty smell but no visible mold",
      href: "/smells/musty/no-visible-mold/",
      hint: "If it smells with the system off",
    },
    {
      title: "Musty smell in the house",
      href: "/smells/musty/",
      hint: "Whole-house moisture",
    },
    {
      title: "Musty smell in the basement",
      href: "/smells/musty/basement/",
      hint: "Damp crawlspaces and basements",
    },
    {
      title: "What does Freon smell like?",
      href: "/smells/causes/refrigerant-leak/",
      hint: "If the vent smell is chemical, not musty",
    },
  ],
  sources: [SOURCES.epaDuctCleaning, SOURCES.epaMold, SOURCES.epaMoldCleanup],
  diagnose: { family: "musty", location: "hvac-vents" },
  updated: "2026-11-07",
};
