import { SOURCES } from "../reference";
import type { SmellPage } from "../types";

// v3.G cause page #1. Targets "washing machine smells" (5.4K US/mo, KD 0),
// "washing machine smells like mildew" (3.6K) and "front load washer smell"
// (1.3K) — DataForSEO, 2026-11-07. SERP (2026-11-07): YouTube, Pinterest,
// small cleaning blogs; related search "top load washing machine smells like
// sewage", so the page splits by what the smell is, not just "clean it".
export const causeWashingMachine: SmellPage = {
  path: "/smells/causes/washing-machine/",
  about: "front-load-washer",
  family: "musty",
  label: "Smelly washing machine",
  title: "Washing Machine Smells? Fix Mildew, Sewage or Burning",
  description:
    "Washer smells like mildew, sewage, or something burning? Find which part is causing it, clean the spots a tub-clean cycle misses, and stop it coming back.",
  h1: "Why your washing machine smells, and how to fix it for good",
  targets: [
    "washing machine smells",
    "washing machine smells like mildew",
    "front load washer smell",
    "top load washing machine smells like sewage",
    "how to get rid of bad smell in washing machine",
    "clothes smell bad after washing",
  ],
  quickAnswer:
    "A musty or mildew smell almost always means residue and standing water inside the machine: the door gasket, the detergent drawer, the drain pump filter, or the underside of the drum, where a cleaning cycle doesn't fully reach. Clean those parts by hand, run the tub-clean cycle, then cut back on detergent and softener and leave the door open between loads. A sewage or rotten-egg smell is different: it usually comes from the drain the washer empties into, not the washer. A burning smell beyond a new machine's first few loads means stop using it until it's checked.",
  urgency: "routine",
  causes: [
    {
      cause: "front-load-washer",
      likelihood: "most common",
      note: "Musty or sour smell from the drum, gasket, or drawer. Front-loaders are the classic case because the door seals airtight, but top-loaders build up the same slime under the tub, where you can't see it.",
    },
    {
      cause: "dry-p-trap",
      likelihood: "common",
      note: "Sewage smell around the washer, especially in a laundry room that sits unused for days. The trap under the standpipe the washer drains into has dried out or been siphoned, and sewer gas comes up through it.",
    },
    {
      cause: "drain-biofilm",
      likelihood: "common",
      note: "Rotten-egg or swampy smell that's worst while the washer drains. Lint and soap scum line the standpipe and drain line, and the warm wash water stirs the smell up.",
    },
    {
      cause: "sewer-vent-blocked",
      likelihood: "less common",
      note: "Sewage smell plus gurgling from a nearby sink or tub when the washer empties. Without a working vent, the big rush of drain water pulls the water out of traps.",
    },
    {
      cause: "appliance-overheating",
      likelihood: "rare",
      note: "Hot-rubber or electrical burning smell during the spin or drain. A slipping drive belt, a failing motor or pump, or a damaged power cord.",
    },
  ],
  compare: {
    headers: ["What it smells like", "Where it's strongest", "Most likely source"],
    rows: [
      [
        "Musty, mildew, damp towel",
        "Inside the drum, the gasket, the drawer; the clothes",
        "Residue and biofilm in the washer",
      ],
      [
        "Sour or 'old dishcloth', even after a clean cycle",
        "Bottom front of a front-loader",
        "Drain pump filter holding dirty water",
      ],
      [
        "Sewage or rotten eggs",
        "Behind the washer, at the drain box or floor drain",
        "Dry or siphoned trap, or a dirty standpipe",
      ],
      [
        "Sewage only while it drains, plus a gurgle elsewhere",
        "Laundry room and a nearby sink or tub",
        "Drain or vent problem: plumber",
      ],
      [
        "Hot rubber or burning plastic",
        "Underneath or behind the machine during spin",
        "Belt, motor, pump, or wiring: stop using it",
      ],
    ],
  },
  decision: [
    {
      question: "Does it smell like burning, or is there smoke or a hot-plastic smell?",
      yes: "Stop the cycle, unplug the washer, and don't use it again until it's been checked. A new machine's first couple of loads are the only exception.",
      href: "/smells/burning-plastic/",
      no: "Keep going.",
    },
    {
      question: "Is it a sewage or rotten-egg smell, strongest behind the washer rather than in the drum?",
      yes: "It's the drain, not the washer. Refill the trap and check the drain hose (below).",
      no: "Keep going.",
    },
    {
      question: "Do the clothes come out smelling sour or musty, or does the drum smell when you open it?",
      yes: "It's buildup inside the machine. Do the full clean below, filter included.",
      no: "If the whole laundry room smells musty but the washer doesn't, look at the room: humidity, a leak, or a dryer that isn't drying.",
      href: "/smells/musty/",
    },
  ],
  checks: [
    {
      title: "Put your head in the drum, then smell the drawer",
      how: "With the door open and the machine off, smell inside the drum, then pull the detergent drawer all the way out and smell the empty cavity it slides into. A smell that's strongest there is buildup inside the washer. If the drum and drawer smell fine but the floor behind the machine doesn't, it's the drain.",
    },
    {
      title: "Pull back the gasket on a front-loader",
      how: "Fold back the rubber door seal all the way round, especially the bottom. Grey or black film, hair, lint, coins, and a puddle of grey water in the bottom fold are all common. This is where most front-loader smell lives.",
    },
    {
      title: "Open the drain pump filter",
      how: "On most front-loaders it's behind a small panel at the bottom front corner. Wait until the water has cooled, lay down towels, put a shallow pan underneath, and drain it with the small hose if there is one before unscrewing the filter. Expect a surprising amount of murky water, plus lint and lost socks. A clogged filter leaves dirty water sitting in the machine between washes.",
    },
    {
      title: "Check the drain hose and the standpipe",
      how: "Pull the washer out and look at where the drain hose goes. It should hook loosely into the standpipe, not be pushed far down it or taped in airtight. Samsung's support guidance is that a hose shoved too far down the standpipe can siphon drain water back into the washer, causing a sewage smell. Your install manual gives the maximum depth.",
    },
    {
      title: "Pour water down the standpipe",
      how: "If the smell is sewage, pour a bucket of water slowly down the standpipe (or the laundry room floor drain). That refills a dried-out trap. If the smell fades within an hour, that was it.",
    },
  ],
  sections: [
    {
      heading: "Why washers start to smell",
      body: [
        "A washer is warm, wet, and dark, and every load leaves behind a little detergent, fabric softener, skin oils, and lint. In the places that never fully drain or dry, such as the folds of the gasket, the drawer cavity, the pump filter, and the outer tub you never see, that residue becomes food for bacteria and mold. The slime they form is what you smell.",
        "Modern machines make this more likely, not less. Front-loaders seal airtight to save water, so nothing dries once the door is shut. High-efficiency machines use very little water, so extra detergent doesn't rinse away. And washing mostly on cold, which saves energy, doesn't fully dissolve some detergents. LG's support guidance names cold-water washing as a cause of buildup and odor in the dispenser.",
      ],
    },
    {
      heading: "The full clean, in order",
      body: [
        "1. Gasket: wipe out the folds with warm water and a little dish soap or the cleaner your manual names, using an old toothbrush for the creases. Pick out hair and lint; anything caught there holds water against the seal. 2. Drawer: pull it out (most have a release tab), soak it in hot soapy water, and scrub the cavity it sits in, including the roof, where mold hides. 3. Pump filter: drain and clean it as described above, rinse it, and screw it back in firmly so it doesn't leak.",
        "4. Tub clean: run the machine's tub-clean or self-clean cycle empty, with a washer-cleaner tablet or the bleach dose your manual specifies. Samsung's support page recommends running Self Clean about once a month or every 30–40 loads, and LG recommends a monthly tub clean. 5. Dry it: wipe the gasket and drum dry and leave the door and drawer open until it's fully dry inside.",
        "Never mix bleach with vinegar, ammonia, or any other cleaner in the same cycle. It releases toxic gas. If you want to try both, run them as separate cycles with a plain rinse between.",
      ],
    },
    {
      heading: "Top-loaders: where the smell hides",
      body: [
        "A top-loader doesn't have a gasket, so people assume it can't get moldy. But the drum you see sits inside an outer tub, and the gap between them collects the same film of residue, out of sight. Signs are dark flecks on clean clothes and a smell that's strongest when the tub is filling. Run the clean-washer or tub-clean cycle with the lid closed. On older top-loaders without one, use the hottest, largest, longest cycle with the cleaner your manual allows, and let it soak partway through. Clean under the rim and the agitator cap if it lifts off, and leave the lid up afterward.",
      ],
    },
    {
      heading: "Stopping it from coming back",
      body: [
        "Use less detergent than you think. HE machines need very little, and the line in the drawer is a maximum, not a target. Samsung's guidance warns that too much detergent, and fabric softener in general, cause the soap-scum buildup that turns into odor. Liquid softener is the worst offender. Try dryer balls or a half dose.",
        "Take wet laundry out as soon as the cycle ends. Wipe the gasket dry after the last load of the day. Leave the door and the drawer cracked open between washes. Run a hot wash now and then if your fabrics allow it. Keep up the monthly tub clean and clean the pump filter every month or two. If the washer is noticeably out of level, fix that too. Samsung notes that water and additives don't drain properly when the washer isn't level, leaving residue behind.",
      ],
    },
    {
      heading: "Three washers, three different answers",
      body: [
        "A two-year-old front-loader whose towels smelled sour even right out of the dryer: the gasket looked fine from the front, but the bottom fold held a puddle of grey water and a sock. The pump filter was half blocked. Cleaning both, cutting the detergent to a third, and stopping fabric softener cleared it in two weeks.",
        "A top-loader in a basement laundry room that 'smelled like sewage' every time it drained. Two tub-clean cycles and a bottle of cleaner did nothing, because the washer wasn't the problem. The drain hose had been pushed deep into the standpipe and was siphoning, and the trap below it was nearly dry. Re-seating the hose loosely and topping up the trap fixed it the same day.",
        "The failure case: a front-loader cleaned four times in a month that still stank. The owner was washing everything on cold with pods, which also meant using a full pod for half loads. The buildup came back as fast as it was cleaned off. Switching to a measured liquid at the right dose and one warm wash a week was what finally stopped it.",
      ],
    },
  ],
  diyStops: [
    "A burning, hot-rubber, or electrical smell after the first few loads of a new machine, or any smoke.",
    "Water leaking from under the washer, or a pump filter that won't seal.",
    "Smell persists after a full clean, filter included. It can be a failing pump or a slow drain inside the machine.",
    "Sewage smell that refilling the trap doesn't fix, or that comes with gurgling drains elsewhere.",
  ],
  whoToCall: [
    {
      trade: "appliance-repair",
      when: "Burning smells, leaks, drain errors, or a smell that survives a full clean.",
    },
    {
      trade: "plumber",
      when: "Sewage smell from the standpipe or floor drain that a refilled trap doesn't fix, or gurgling elsewhere.",
    },
    { trade: "diy", when: "Gasket, drawer, filter, tub clean, and detergent changes." },
  ],
  faq: [
    {
      q: "How do I get rid of the bad smell in my washing machine?",
      a: "Clean the parts a cycle can't reach first: the folds of the door gasket, the detergent drawer and its cavity, and the drain pump filter. Then run the tub-clean cycle with a washer cleaner or the bleach dose in your manual, and leave the door open to dry. Running the cleaning cycle alone usually leaves the smell in the filter and gasket.",
    },
    {
      q: "Why does my washer smell like sewage or rotten eggs?",
      a: "Usually the drain, not the washer. The trap under the standpipe can dry out or get siphoned, letting sewer gas up, and a drain hose pushed too far into the standpipe can siphon drain water back into the machine. Pour water down the standpipe and re-seat the hose loosely. If it comes back, or other drains gurgle, call a plumber.",
    },
    {
      q: "Why do my clothes smell bad after washing?",
      a: "The usual reasons are buildup inside the washer, too much detergent or softener that doesn't rinse out, overloading so clothes don't get clean, and wet laundry left sitting in the drum. Clothes that smell fine out of the washer but musty out of the dryer point to the dryer: a blocked vent leaves them slightly damp.",
    },
    {
      q: "How often should I clean my washing machine?",
      a: "Samsung recommends a self-clean cycle about once a month or every 30–40 loads, and LG recommends a monthly tub clean. Wipe the gasket after the last load of the day and clean the pump filter every month or two, more often with pets or lots of towels.",
    },
    {
      q: "Can I use vinegar and baking soda to clean my washer?",
      a: "Many people do, but check your manual first. Some manufacturers specify their own cleaner or a bleach dose for the clean cycle. Never put vinegar and bleach in the same cycle. Whatever you use, the hand-cleaning of the gasket, drawer, and filter matters more than the product.",
    },
    {
      q: "My new washer smells like burning. Is that normal?",
      a: "A slight smell during the first couple of cycles can be normal as new parts settle in; Samsung's support page says so too. If it continues after that, smells strongly, or comes with smoke, stop using it and get it serviced.",
    },
  ],
  related: [
    {
      title: "Musty smell in the house",
      href: "/smells/musty/",
      hint: "When it's more than the laundry room",
    },
    {
      title: "Musty smell in the basement",
      href: "/smells/musty/basement/",
      hint: "Basement laundry rooms",
    },
    {
      title: "House smells like sewage",
      href: "/smells/sewage/",
      hint: "Traps, vents, and sewer lines",
    },
    {
      title: "Musty smell in a closet",
      href: "/smells/musty/closet/",
      hint: "Clothes that smell after storage",
    },
    {
      title: "Burning plastic smell",
      href: "/smells/burning-plastic/",
      hint: "If it smells hot or electrical",
    },
  ],
  sources: [SOURCES.samsungWasherOdor, SOURCES.lgWasherOdor],
  diagnose: { family: "musty", location: "laundry" },
  updated: "2026-11-07",
};
