import { SOURCES } from "../reference";
import type { SmellPage } from "../types";

// v3.G cause page #8. Targets "p trap smell" (480 US/mo) and "dry p trap
// smell" (320), both KD 0 — DataForSEO, 2026-11-07. SERP (2026-11-07): the
// organic results were off-topic; AI Overview + PAA ("How to get rid of smell
// from dry P-trap?", "What are the first signs of sewer gas poisoning?") and
// related "p trap smell dangerous", "shower drain smells but not clogged"
// (that one is /smells/sewage/bathroom/'s target — link, don't compete).
// /smells/sewage/ covers sewer gas broadly; this page is the trap itself:
// every way it loses its seal, the drains people forget, and the fixes.
export const causePTrap: SmellPage = {
  path: "/smells/causes/p-trap/",
  about: "dry-p-trap",
  family: "sewage",
  label: "P-trap smell",
  title: "P-Trap Smell? Why Drains Dry Out and How to Stop It",
  description:
    "Sewer smell from a drain nobody uses? Why P-traps lose their water seal, the drains people forget, the one-minute fix, and what to do when it keeps coming back.",
  h1: "P-trap smell: why a drain lets sewer gas in, and how to stop it",
  targets: [
    "p trap smell",
    "dry p trap smell",
    "how to get rid of smell from dry p trap",
    "p trap smell dangerous",
    "how long does it take for a p trap to dry out",
    "floor drain smells like sewer",
  ],
  quickAnswer:
    "Every drain has a trap, the U-shaped bend under a sink or built into a shower, tub, floor drain, or toilet, that holds a little water as a seal against sewer gas. When that water disappears, the drain becomes an open pipe from the sewer. The usual reason is simple evaporation in a drain nobody uses: a guest bath, a basement floor drain or shower, a utility sink. Run water for a minute, or pour a bucket into a floor drain, and the smell should be gone within hours. If a trap keeps emptying even though the drain is used, something is pulling or leaking the water out, and that needs fixing.",
  urgency: "routine",
  causes: [
    {
      cause: "dry-p-trap",
      likelihood: "most common",
      note: "Sewer smell from a drain that isn't used for weeks: a guest bath, a basement shower or floor drain, a laundry sink, or a whole house after a long trip. Running water fixes it on the spot.",
    },
    {
      cause: "drain-biofilm",
      likelihood: "common",
      note: "If the drain is used every day and still smells, the trap isn't dry. The smell is slime in the drain, the trap, or the sink's overflow hole.",
    },
    {
      cause: "sewer-vent-blocked",
      likelihood: "less common",
      note: "A trap that empties within days even though you refill it, with gurgling when other fixtures drain, is being siphoned. That's a vent problem.",
    },
    {
      cause: "toilet-wax-ring",
      likelihood: "less common",
      note: "If the smell is at the base of a toilet and the bowl holds water fine, it's the seal under the toilet, not a trap.",
    },
  ],
  compare: {
    headers: ["What you notice", "What's happening", "Fix"],
    rows: [
      [
        "Smell from an unused drain; gone after running water",
        "Trap dried out by evaporation",
        "Run water regularly; trap primer or seal for floor drains",
      ],
      [
        "Trap empties within days, gurgling when other drains run",
        "Siphoning: vent problem or an S-trap",
        "Plumber to check the vent or re-plumb the trap",
      ],
      [
        "Water under the sink, cabinet floor damp, trap keeps emptying",
        "Leaking trap or slip nut",
        "Tighten or replace the trap",
      ],
      [
        "Drain used daily but still smells",
        "Slime in the drain, trap, or overflow",
        "Clean the trap and overflow",
      ],
      [
        "Floor drain smells after a dry, hot spell or heating season",
        "Faster evaporation in dry air",
        "Refill more often; seal insert",
      ],
    ],
  },
  decision: [
    {
      question: "Is sewage or grey water coming up out of a drain?",
      yes: "That's a blockage, not a dry trap. Stop running water and call a plumber.",
      href: "/smells/sewage/",
      no: "Keep going.",
    },
    {
      question: "Did running water or pouring a bucket into the drain make the smell go away within a few hours?",
      yes: "It was a dry trap. Keep it topped up (below).",
      no: "Keep going.",
    },
    {
      question: "Does the trap keep emptying even though it's used, or do you hear gurgling when other drains run?",
      yes: "It's being siphoned or it's leaking. Check under the sink for drips, then check the vent.",
      href: "/smells/causes/plumbing-vent/",
      no: "Keep going.",
    },
    {
      question: "Is the smell at a drain that's used every day?",
      yes: "Clean the drain, the trap, and the overflow hole. It's slime, not a dry trap.",
      href: "/smells/sewage/bathroom/",
      no: "Work through the full sewer smell guide.",
    },
  ],
  checks: [
    {
      title: "Make a list of every drain",
      how: "Walk the house and count them: every sink, tub, and shower, every toilet, basement floor drains, a laundry or utility sink, the standpipe behind the washer, a wet bar, a basement shower nobody uses. The forgotten drain is nearly always the one that smells.",
    },
    {
      title: "Refill them all",
      how: "Run each sink, tub, and shower for 30 seconds or so, flush every toilet, and pour a bucket of water slowly into each floor drain. Then wait a few hours with the house closed up. If the smell is gone, it was a dry trap. You just found the source and fixed it.",
    },
    {
      title: "Look under the sink",
      how: "With a flashlight, look at the trap and the slip nuts that hold it together while water runs. A slow drip, a damp cabinet floor, or a crust of mineral deposits at a joint means the trap is leaking. A trap that leaks loses its seal, and the cabinet smells musty too.",
    },
    {
      title: "Check the shape of the trap",
      how: "A proper trap is a U-bend followed by a horizontal pipe into the wall. If the pipe after the U goes straight down into the floor instead, it's an S-trap, an old style that InterNACHI notes forms a perfect siphon. Water draining from that sink can pull its own trap empty.",
    },
    {
      title: "Watch a refilled trap for a few days",
      how: "If a trap you refilled smells again within a few days and the drain isn't being used, something is pulling the water out: a vent problem, a leak, or a string of hair hanging over the trap wicking water away. Note how fast it comes back; it tells a plumber which it is.",
    },
  ],
  sections: [
    {
      heading: "How a trap works, and how it fails",
      body: [
        "InterNACHI, the home inspectors' association, defines a trap as a fitting that holds a liquid seal to keep sewer gases out without blocking the flow of waste. The water sitting in the bend is the whole barrier between your bathroom and the sewer. It refreshes every time the drain is used.",
        "InterNACHI lists the ways a trap loses that seal. Evaporation is the one you can see coming: a drain nobody uses slowly dries out, faster in hot, dry air or a heated basement in winter. Siphonage is when draining water pulls the seal out, either from the fixture's own drain (as in an S-trap) or from water rushing past in a shared pipe. Back-pressure is when a big flush pushes air ahead of it and blows the seal up out of the trap. Capillary action is when hair, string, or lint hanging over the trap wicks the water out like a candle wick. Wind across the roof vent can rock the water in a trap. Only evaporation is fixed by simply adding water; the others come back until their cause is fixed.",
      ],
    },
    {
      heading: "The drains people forget",
      body: [
        "Basement floor drains are the classic. They're installed to catch a water heater leak or a flood that may never come, so nothing ever runs into them. A basement or guest shower used twice a year, a laundry sink, a wet bar, a mudroom sink, and the standpipe behind the washing machine are the others. A house left empty for a long trip dries out every trap at once, and comes back smelling like a sewer.",
        "Two less obvious ones: an old floor drain under a furnace or water heater that's partly hidden, and a drain left open during a remodel, where the trap was removed or the pipe capped badly. Both look like 'no drain here' until you get down on the floor with a flashlight.",
      ],
    },
    {
      heading: "Keeping a trap full",
      body: [
        "For most drains, the fix is a habit: run the water in unused fixtures every couple of weeks, and pour a bucket into floor drains every month or so, more often in dry winter air. Some plumbers add a small amount of mineral oil on top of a refilled floor-drain trap to slow evaporation. It floats and holds the water in.",
        "For floor drains that will never be used, there are permanent fixes. A plumber can fit a trap seal insert, a one-way device that drops into the drain and closes when nothing is flowing, or a trap primer, which feeds a little water into the trap automatically, often from a nearby water line. These are standard parts and a small job.",
        "For traps that keep losing their seal from siphoning, back-pressure, or an S-trap, the fix is in the plumbing: clearing or adding a vent, or re-plumbing the trap so it drains correctly. A leaking trap under a sink is often just a loose slip nut or a worn washer, a simple DIY repair.",
      ],
    },
    {
      heading: "Is a dry trap smell dangerous?",
      body: [
        "Sewer gas includes hydrogen sulfide, the source of the rotten-egg smell. A whiff from a dry trap in an occupied house is low-level and mostly a nuisance, but it shouldn't be ignored. OSHA notes that prolonged exposure even at low levels may cause nausea, headaches, or loss of sleep, and that at much higher concentrations people lose the ability to smell it at all. So a smell that suddenly 'goes away' while you're still standing in a closed room isn't proof it's gone.",
        "If the smell is strong, or anyone feels dizzy, nauseous, or gets a headache, open windows, get out of the space, and refill the traps once it's aired out. If it smells like rotten eggs near a gas appliance or the meter, treat it as gas: leave and call the utility from outside. We don't give medical advice; talk to a doctor if symptoms don't clear in fresh air.",
      ],
    },
    {
      heading: "Three drains",
      body: [
        "A finished basement that smelled like sewage every winter and never in summer. The floor drain in the utility room was dry: the furnace kept the basement warm and dry all season, and the trap evaporated in weeks. A bucket of water fixed it every time; a trap seal insert fixed it for good.",
        "A guest bathroom that smelled two days after every refill. The sink had a slow drip at the slip nut under the trap, and the cabinet floor was swollen. Tightening the nut didn't hold. A new trap kit did, and the smell and the musty cabinet both went.",
        "The failure case: a laundry room sink that kept smelling despite being refilled every few days. The owner kept adding water. A plumber found the sink was on an S-trap with no vent, so draining the sink siphoned its own trap nearly empty every time. Re-plumbing it with a proper trap and vent was the only fix.",
      ],
    },
  ],
  diyStops: [
    "A trap that empties within days even though you refill it, or gurgling elsewhere when it drains.",
    "An S-trap, a missing trap, or a drain left open during a remodel.",
    "Fitting a trap primer that ties into a water line.",
    "Sewage coming up a drain, or a smell that refilling every trap doesn't touch.",
  ],
  whoToCall: [
    {
      trade: "plumber",
      when: "Traps that keep emptying, S-traps, vent problems, trap primers or seal inserts, and leaks you can't fix with a slip nut.",
    },
    {
      trade: "diy",
      when: "Refilling traps, cleaning drains and overflows, tightening slip nuts, and replacing a simple sink trap.",
    },
  ],
  faq: [
    {
      q: "How do I get rid of the smell from a dry P-trap?",
      a: "Refill it: run the sink, tub, or shower for 30 seconds or so, flush the toilet, or pour a bucket of water slowly into a floor drain. The smell should clear within a few hours as the room airs out. For a drain that dries out again and again, a trap seal insert or a trap primer keeps it sealed permanently.",
    },
    {
      q: "How long does it take for a P-trap to dry out?",
      a: "It depends on the drain and the air: a deep floor-drain trap in a cool, humid basement can last a long time, while a shallow sink trap in a warm, dry house in winter dries much faster. The practical answer is to run every unused fixture every couple of weeks and check floor drains monthly. If a trap empties in days, it isn't evaporation.",
    },
    {
      q: "Is a P-trap smell dangerous?",
      a: "A faint smell from a dry trap is mostly a nuisance and a sign of a broken seal. A strong smell isn't something to sit in: sewer gas contains hydrogen sulfide, and OSHA notes prolonged exposure can cause nausea and headaches. Ventilate, refill the traps, and if anyone feels unwell or it smells like rotten eggs near a gas appliance, get out and call.",
    },
    {
      q: "Can a P-trap dry out if the sink is used every day?",
      a: "Not from evaporation. If a daily-use drain smells of sewer, either the trap is being siphoned (vent problem or S-trap), it's leaking, or the smell is slime in the drain or overflow rather than sewer gas. Check under the sink for drips first.",
    },
    {
      q: "Why does my floor drain smell like sewer?",
      a: "Almost always because its trap has dried out. Floor drains are rarely used, so nothing refills them. Pour a bucket of water in slowly. If it keeps happening, ask a plumber about a trap seal insert or a trap primer.",
    },
    {
      q: "Does a shower drain have a P-trap?",
      a: "Yes. Every shower and tub drain has a trap below the floor. You can't see it, but it works the same way. A guest or basement shower that's rarely used dries out like any other trap. Running it for a minute every couple of weeks keeps it sealed.",
    },
  ],
  related: [
    {
      title: "House smells like sewage",
      href: "/smells/sewage/",
      hint: "Every sewer gas source, in order",
    },
    {
      title: "Bathroom smells like sewer",
      href: "/smells/sewage/bathroom/",
      hint: "Shower drains, sinks, toilets",
    },
    {
      title: "Clogged plumbing vent",
      href: "/smells/causes/plumbing-vent/",
      hint: "If traps keep emptying",
    },
    {
      title: "Washing machine smells",
      href: "/smells/causes/washing-machine/",
      hint: "The standpipe trap behind the washer",
    },
    {
      title: "Rotten egg or sulfur smell",
      href: "/smells/rotten-eggs/",
      hint: "Sewer gas vs. gas leak",
    },
    {
      title: "Smell gas in the house?",
      href: "/smells/gas/",
      hint: "When in doubt, treat it as gas",
    },
    {
      title: "Smells like gas but no leak",
      href: "/smells/gas-but-no-leak/",
      hint: "After the utility found nothing",
    },
    {
      title: "Skunk smell in the house",
      href: "/smells/skunk/",
      hint: "Sewer gas can read as skunk",
    },
    {
      title: "Sump pump smell",
      href: "/smells/causes/sump-pump/",
      hint: "If the floor drain is next to the pit",
    },
    {
      title: "Musty smell in the basement",
      href: "/smells/musty/basement/",
      hint: "Floor drains and sump pits",
    },
    {
      title: "Musty smell but no visible mold",
      href: "/smells/musty/no-visible-mold/",
      hint: "Hidden damp",
    },
    {
      title: "Dead animal smell",
      href: "/smells/dead-animal/",
      hint: "If it's rotten and sweet",
    },
  ],
  sources: [SOURCES.nachiPlumbingTerms, SOURCES.oshaH2s],
  diagnose: { family: "sewage", location: "basement" },
  updated: "2026-11-07",
};
