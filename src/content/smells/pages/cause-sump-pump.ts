import { SOURCES } from "../reference";
import type { SmellPage } from "../types";

// v3.G cause page #9. Targets "sump pump smell" (590 US/mo, KD 0) —
// DataForSEO, 2026-11-07. SERP (2026-11-07): Reddit, basement waterproofers,
// plumbers, JustAnswer; related "sump pump smells like sewage", "...rotten
// eggs", "...after heavy rain", "is sump pump smell toxic"; PAA "What can I
// put in my sump pump to get rid of the smell?", "Is it okay to pour vinegar
// in my sump pump?". Gaps filled here: sump vs sewage ejector (different
// problem, different fix), and the radon angle (EPA: sumps are radon routes;
// a capped sump can be the radon suction point).
export const causeSumpPump: SmellPage = {
  path: "/smells/causes/sump-pump/",
  about: "sump-ejector-pit",
  family: "sewage",
  label: "Sump pump smell",
  title: "Sump Pump Smell: Musty, Rotten Egg, or Sewage?",
  description:
    "Basement smells from the sump pit? Tell a sump from a sewage ejector, what each smell means, how to clean and seal the pit, and when it's a plumber's job.",
  h1: "Sump pump smell: what it means, and how to clean and seal the pit",
  targets: [
    "sump pump smell",
    "sump pump smells like sewage",
    "sump pump smells like rotten eggs",
    "what can i put in my sump pump to get rid of the smell",
    "is it okay to pour vinegar in my sump pump",
    "sump pump smells after heavy rain",
  ],
  quickAnswer:
    "A sump pit holds groundwater, so its usual smell is musty or swampy: standing water, silt, and slime sitting in an open pit. A rotten-egg smell often comes from bacteria feeding on soap film, common when a washer drains into the pit. A real sewage smell usually means one of two things: the pit isn't a sump at all but a sewage ejector (sealed lid, vent pipe, toilet or shower drains into it) with a broken seal, or sewage is reaching the groundwater around the house. Clean the pit, make sure the pump actually empties it, and cover it with a sealed lid. Sewage ejectors and suspected sewer leaks are a plumber's job.",
  urgency: "soon",
  causes: [
    {
      cause: "sump-ejector-pit",
      likelihood: "most common",
      note: "Musty, swampy, or sour smell from an open or loosely covered pit: standing water, silt, and slime, or a pump that leaves water sitting. On a sealed sewage ejector, a lid or gasket that's loose.",
    },
    {
      cause: "drain-biofilm",
      likelihood: "common",
      note: "Rotten-egg smell after laundry days, where a washer or laundry sink drains into the sump. Soap scum coats the pit walls and feeds sulfur-producing bacteria.",
    },
    {
      cause: "dry-p-trap",
      likelihood: "common",
      note: "If the smell is really a basement floor drain or an unused shower next to the pit, its dried-out trap is letting sewer gas up.",
    },
    {
      cause: "damp-basement",
      likelihood: "less common",
      note: "If the whole basement smells musty, and the pit is only part of it, the pit is a symptom: the basement is damp.",
    },
    {
      cause: "sewer-line-crack",
      likelihood: "less common",
      note: "A true sewage smell in a sump pit that collects only groundwater can mean a leaking sewer or septic line is reaching the soil around the foundation.",
    },
  ],
  compare: {
    headers: ["What you smell", "Most likely", "What fixes it"],
    rows: [
      [
        "Musty, swampy, stagnant",
        "Standing water, silt, slime in an open pit",
        "Clean the pit, check the pump empties it, sealed lid",
      ],
      [
        "Rotten eggs, worst after laundry",
        "Soap film feeding bacteria",
        "Scrub the pit; reroute or filter laundry water if allowed",
      ],
      [
        "Sewage, at a pit with a bolted lid and a vent pipe",
        "Sewage ejector seal or vent problem",
        "Plumber: reseal the lid, check the vent and pump",
      ],
      [
        "Sewage, at an open groundwater sump",
        "Sewer or septic leak reaching the soil",
        "Plumber or sewer specialist; camera inspection",
      ],
      [
        "Hot or burning, pump running constantly",
        "Pump motor overheating or stuck",
        "Unplug; plumber to check or replace the pump",
      ],
      [
        "Musty after heavy rain",
        "Groundwater stirring up silt, or a pit that's barely keeping up",
        "Clean the pit; check the pump and discharge",
      ],
    ],
  },
  decision: [
    {
      question: "Does the pit have a bolted, sealed lid and a vent pipe, and does a basement toilet, shower, or laundry drain into it?",
      yes: "It's a sewage ejector, not a sump. A sewage smell means a seal, vent, or pump problem. Don't open it yourself; call a plumber.",
      no: "It's a sump (groundwater). Keep going.",
    },
    {
      question: "Is the smell raw sewage, at an open sump that only collects groundwater?",
      yes: "Sewage shouldn't be in the groundwater. Call a plumber or sewer specialist to check the sewer or septic line.",
      href: "/smells/sewage/",
      no: "Keep going.",
    },
    {
      question: "Is the pump running constantly, not running at all, or smelling hot?",
      yes: "Unplug it and call a plumber. A failing pump is also a flooding risk.",
      no: "Keep going.",
    },
    {
      question: "Is it musty, swampy, or rotten-egg?",
      yes: "Clean the pit and cover it. That fixes most cases.",
      no: "Smell the floor drains and the rest of the basement. The pit may not be the source.",
      href: "/smells/musty/basement/",
    },
  ],
  checks: [
    {
      title: "Figure out which kind of pit it is",
      how: "A sump is usually an open or loosely covered basin in the basement floor that collects groundwater from drain tile, with a pump that sends it outside. A sewage ejector has a bolted, gasketed lid, a vent pipe going up through the house, and receives waste from a basement bathroom or laundry. The difference decides everything that follows.",
    },
    {
      title: "Look into the sump (not an ejector)",
      how: "With a flashlight, check how much water sits in the bottom between pump cycles, whether there's silt, gravel, or debris, a grey or slimy film on the walls, or anything that fell in. A clean sump has a little clear water and not much else.",
    },
    {
      title: "Test the pump",
      how: "Slowly pour a bucket or two of water into the sump until the float rises. The pump should kick on, empty the pit, and shut off. Zoeller's owner's manual suggests testing the system and checking for unobstructed float movement every six months, and listening for the check valve to close when the pump stops. Water rushing back into the pit after the pump stops means the check valve isn't holding.",
    },
    {
      title: "Check what else drains into it",
      how: "Look at the pipes entering the pit. A washer or laundry sink draining into a sump is a common source of soap film and rotten-egg smell. Whether that's allowed depends on local code, so ask a plumber before you reroute anything.",
    },
    {
      title: "Smell the neighbors",
      how: "Get down and smell the basement floor drain, the drain in an unused basement shower, and the area around the water heater. If one of those is stronger than the pit, it's a dry trap, not the sump.",
    },
  ],
  sections: [
    {
      heading: "Sump or sewage ejector? Why it matters",
      body: [
        "Both are pits in the basement floor with a pump, so people call both a sump. A sump handles groundwater that drain tile collects around the foundation. It shouldn't smell like sewage because there's no sewage in it, only water, silt, and whatever grows in a damp dark pit. A sewage ejector handles waste from fixtures below the sewer line, like a basement toilet, shower, or laundry. It's built sealed and vented outside, precisely because it's full of sewage.",
        "So a sewage smell at an ejector is a seal, vent, or pump problem: a lid that isn't bolted down, a gasket that's failed, a vent that's blocked or disconnected. A sewage smell at a groundwater sump is more serious and less common: it can mean a sewer or septic line is leaking into the soil around the house. Both need a plumber.",
      ],
    },
    {
      heading: "Cleaning a sump pit",
      body: [
        "Unplug the pump first, and don't plug it back in until you're done and dry. Scoop out debris, silt, and gravel from the bottom with a small bucket or a wet-dry shop vacuum. Scrub the walls of the basin with a long-handled brush and detergent and water to get the slime and soap film off. Lift the pump out if your setup allows, and rinse the intake screen and the float. Then refill with clean water, plug the pump back in, and run it through a cycle.",
        "As for what to pour in: a scrub and a flush does more than any additive. A dilute bleach rinse is commonly used to knock back bacteria in the pit itself. Don't mix bleach with vinegar or ammonia cleaners, ever, and rinse it out before the pump discharges it outdoors. Many people pour vinegar in. It's mild, but it won't remove the film that's actually causing the smell. Sump deodorizer tablets mask the smell for a while, but the film comes back.",
      ],
    },
    {
      heading: "Seal the lid",
      body: [
        "An open sump is an open hole into the soil under your house, and that air comes up with the smell. A solid, sealed sump lid, with openings for the discharge pipe and cord sealed with grommets or caulk, keeps the smell and the damp in the pit. Most basements are better off with one.",
        "There's a second reason, and it has no smell at all: radon. EPA's Consumer's Guide to Radon Reduction lists sumps among the openings that radon enters through, and describes sump-hole suction, a capped sump that keeps draining water while serving as the radon system's suction point. If you've never tested for radon and you have an open sump, a radon test is cheap and worth doing. Sealing the pit helps, but EPA doesn't treat sealing on its own as a radon fix.",
      ],
    },
    {
      heading: "Keeping it fresh",
      body: [
        "Test the pump every few months and before the rainy season; Zoeller's manual suggests every six months. Clean the pit once or twice a year, or after heavy silt. Keep the lid sealed. If a washer drains into the sump and local code allows a change, ask a plumber about routing it to a proper drain. And if the pit sits full of stagnant water because the float is set high or the check valve leaks back, have it adjusted.",
      ],
    },
    {
      heading: "Three basements",
      body: [
        "A finished basement that smelled like a swamp every August. The sump had an open lid, a foot of silt, and slime on every wall. Cleaning it and fitting a sealed lid with grommets for the pipe and cord cleared the smell in a day.",
        "A rotten-egg smell that hit every laundry day. The washer drained into the sump, and the pit was coated in grey soap film. A good scrub fixed it for a few months; the plumber rerouting the washer to the house drain fixed it for good.",
        "The failure case: a homeowner who poured bleach into the 'sump' twice a week for a sewage smell. It was a sewage ejector serving the basement bathroom, and its lid gasket had perished, so it was venting into the room. The bleach did nothing. A new gasket and properly torqued lid bolts did.",
      ],
    },
  ],
  diyStops: [
    "Opening or servicing a sewage ejector pit. It's full of sewage and sealed for a reason.",
    "A sewage smell at a groundwater-only sump. A sewer or septic leak needs locating.",
    "A pump that runs constantly, won't start, or smells hot. It's also a flooding risk.",
    "Rerouting a washer or other drain out of the sump. Check local code with a plumber.",
  ],
  whoToCall: [
    {
      trade: "plumber",
      when: "Sewage ejector seals and vents, failing pumps and check valves, and rerouting drains.",
    },
    {
      trade: "sewer-specialist",
      when: "Sewage smell in a groundwater sump: a camera inspection of the sewer line.",
    },
    {
      trade: "waterproofing",
      when: "A sump that can't keep up, or a damp basement beyond the pit.",
    },
    { trade: "diy", when: "Cleaning the sump, testing the pump, and fitting a sealed lid." },
  ],
  faq: [
    {
      q: "What can I put in my sump pump to get rid of the smell?",
      a: "Start with cleaning, not an additive: unplug the pump, scoop out the silt, scrub the walls, and flush with clean water. A dilute bleach rinse is commonly used on the pit itself, never mixed with other cleaners. Tablets and deodorizers only mask it. A sealed lid keeps whatever smell is left in the pit.",
    },
    {
      q: "Is it okay to pour vinegar in my sump pump?",
      a: "It won't hurt, but it won't fix much either. The smell comes from slime and soap film on the pit walls, which a brush removes and vinegar doesn't. Never use vinegar and bleach together.",
    },
    {
      q: "Why does my sump pump smell like sewage?",
      a: "If it has a bolted lid and a basement bathroom drains into it, it's a sewage ejector, and the smell means a loose lid, failed gasket, or vent problem. If it's a groundwater sump, sewage smell can mean a sewer or septic line is leaking into the soil. Either way, call a plumber.",
    },
    {
      q: "Why does my sump pump smell after heavy rain?",
      a: "Rain fills the pit faster and stirs up silt and organic debris, and a pump that's struggling can leave water sitting. Clean the pit, test the pump, and check that the discharge outside isn't blocked or draining back toward the house.",
    },
    {
      q: "Is a sump pump smell dangerous?",
      a: "A musty pit is mostly a nuisance and a sign of damp. A sewage or rotten-egg smell means sewer gas or hydrogen sulfide, which you shouldn't sit in: ventilate and fix the source. And an open sump can let in radon, which has no smell at all, so test for radon if you have an open pit.",
    },
  ],
  related: [
    {
      title: "Musty smell in the basement",
      href: "/smells/musty/basement/",
      hint: "When the pit is only part of it",
    },
    {
      title: "House smells like sewage",
      href: "/smells/sewage/",
      hint: "Traps, ejectors, vents, sewer lines",
    },
    {
      title: "P-trap smell",
      href: "/smells/causes/p-trap/",
      hint: "Dry floor drains next to the pit",
    },
    {
      title: "Washing machine smells",
      href: "/smells/causes/washing-machine/",
      hint: "If the washer drains into the sump",
    },
    {
      title: "Rotten egg or sulfur smell",
      href: "/smells/rotten-eggs/",
      hint: "Sulfur sources, ranked",
    },
  ],
  sources: [SOURCES.epaRadonReduction, SOURCES.epaRadon, SOURCES.zoellerManual, SOURCES.oshaH2s],
  diagnose: { family: "sewage", location: "basement" },
  updated: "2026-11-07",
};
