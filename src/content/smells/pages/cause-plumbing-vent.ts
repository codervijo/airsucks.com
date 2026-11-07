import { SOURCES } from "../reference";
import type { SmellPage } from "../types";

// v3.G cause page #5. Targets "plumbing vent clogged" (1.9K US/mo, KD 0) and
// "clogged plumbing vent symptoms" (590) — DataForSEO, 2026-11-07. SERP
// (2026-11-07): plumbing franchise blogs, Reddit, YouTube. PAA: "Will a
// toilet flush if the vent is clogged?", "How do you tell if your sewer vent
// pipe is clogged?", "...without getting on the roof?", "Can I pour water
// down my vent pipe?". The gap: every page assumes it's the vent. This one
// starts by telling a vent problem from a main-line clog or a dry trap.
export const causePlumbingVent: SmellPage = {
  path: "/smells/causes/plumbing-vent/",
  about: "sewer-vent-blocked",
  family: "sewage",
  label: "Clogged plumbing vent",
  title: "Clogged Plumbing Vent? Symptoms, Tests, and Fixes",
  description:
    "Gurgling drains, a toilet that won't hold water, sewer smell on windy days? How to tell a clogged plumbing vent from a drain clog, and how it gets cleared.",
  h1: "Clogged plumbing vent: how to tell it's the vent, and how it gets fixed",
  targets: [
    "plumbing vent clogged",
    "clogged plumbing vent symptoms",
    "how do you tell if your sewer vent pipe is clogged",
    "will a toilet flush if the vent is clogged",
    "how to unclog a plumbing vent without getting on the roof",
    "is a clogged vent pipe dangerous",
  ],
  quickAnswer:
    "Your drains need air to flow, and the vent pipe through the roof supplies it. When the vent is blocked by leaves, a nest, ice, or debris, draining water pulls air from the nearest trap instead. You hear gurgling, toilets bubble or their water level drops, drains run slow, and the water that seals each trap gets sucked out, letting sewer gas into the house. The tell is that these symptoms show up at fixtures other than the one you're using. The fix is clearing the vent from the roof with a hose or auger, which is a plumber's job unless you're comfortable and safe on a roof. If every drain is slow and the lowest one backs up, suspect the main sewer line instead.",
  urgency: "soon",
  causes: [
    {
      cause: "sewer-vent-blocked",
      likelihood: "most common",
      note: "Gurgling or bubbling at one fixture when another drains, a toilet bowl whose water level drops on its own, and a sewer smell that's worse on windy days. Most likely after a storm, in fall leaf season, or in a hard freeze.",
    },
    {
      cause: "dry-p-trap",
      likelihood: "common",
      note: "A sewer smell from one drain, with no gurgling, is usually just a trap that dried out from lack of use. Run water for a minute first. If it comes back within days and you hear gurgling, the vent may be what's emptying it.",
    },
    {
      cause: "sewer-line-crack",
      likelihood: "less common",
      note: "If every drain in the house is slow and the lowest fixture (a basement drain, a ground-floor shower) backs up when you run water elsewhere, it's a main-line clog or a broken line, not the vent.",
    },
    {
      cause: "septic-problem",
      likelihood: "less common",
      note: "On a septic system, house-wide gurgling and slow drains with a smell in the yard point to the tank or drain field.",
    },
  ],
  compare: {
    headers: ["What happens", "Points to", "Next step"],
    rows: [
      [
        "Sink gurgles when the toilet flushes; toilet bowl level drops overnight",
        "Blocked vent",
        "Clear the vent from the roof",
      ],
      [
        "Every drain slow, lowest drain backs up when others run",
        "Main sewer line clog or break",
        "Plumber with a main-line auger or camera",
      ],
      [
        "One drain slow, the rest fine",
        "Clog in that fixture's drain",
        "Clear that drain; vent is probably fine",
      ],
      [
        "Sewer smell from one unused drain, no gurgling",
        "Dry trap",
        "Run water; add a little mineral oil on top",
      ],
      [
        "Problems began after a remodel; one fixture always gurgles",
        "Missing or undersized vent, or a failed air admittance valve",
        "Plumber to check the venting at that fixture",
      ],
    ],
  },
  decision: [
    {
      question: "Is sewage backing up out of a floor drain, tub, or toilet?",
      yes: "Stop using water and call a plumber now. That's a drain blockage, not the vent.",
      href: "/smells/sewage/",
      no: "Keep going.",
    },
    {
      question: "Is every drain in the house slow?",
      yes: "Likely the main sewer line. A plumber needs to clear or camera it.",
      no: "Keep going.",
    },
    {
      question: "Do you hear gurgling at a fixture when a different one drains, or does a toilet's water level drop on its own?",
      yes: "Classic vent symptoms. Check the roof vent (from the ground first) and call a plumber to clear it.",
      no: "Keep going.",
    },
    {
      question: "Is the smell only at one drain that's rarely used?",
      yes: "Refill the trap. If it keeps drying out fast, the vent is worth checking.",
      href: "/smells/causes/p-trap/",
      no: "Work through the full sewer smell guide.",
    },
  ],
  checks: [
    {
      title: "The flush-and-listen test",
      how: "Have someone flush the toilet, or run a full tub drain, while you stand at the nearest sink or shower with the room quiet. A gurgle, a burp of air, or water rising and dropping in that fixture's drain means air is being pulled through its trap, which is what happens when the vent can't supply it.",
    },
    {
      title: "Watch the toilet bowl",
      how: "Mark the water level in a toilet bowl with a piece of tape, then run a full sink, tub, or washer drain nearby. If the bowl level drops, or it's lower the next morning, its trap is being siphoned. Wind gusting across a blocked or short vent can do the same on its own.",
    },
    {
      title: "Look at the vent from the ground",
      how: "Find the vent pipe or pipes on the roof (usually above the bathrooms) and look at the openings with binoculars. Leaves, a nest, a ball, a heavy frost cap in winter, or a cap someone put on are all easy to spot. You don't need to climb up to rule them in or out.",
    },
    {
      title: "Check for air admittance valves",
      how: "Some sinks, especially kitchen islands and basement bathrooms, have an air admittance valve instead of a roof vent: a plastic cap on a short pipe under the sink or in the wall. These one-way valves let air in when water drains. One that sticks shut causes gurgling; one that sticks open lets sewer gas out under the sink.",
    },
    {
      title: "Rule out a simple clog",
      how: "If only one fixture is slow, clear that drain first: remove and clean the stopper, clean the trap, or snake the line. A vent problem rarely affects just the fixture that's slow and nothing else.",
    },
  ],
  sections: [
    {
      heading: "What the vent actually does",
      body: [
        "Every fixture has a trap, the U-bend under a sink or built into a toilet, that holds a plug of water. InterNACHI, the home inspectors' association, defines a trap as a seal that keeps sewer gases out without blocking the flow of waste. The vent is the other half of the system. Your drain pipes are connected to pipes that run up through the roof and let air into the system as water runs down, and let gas out above the house. InterNACHI states the purpose plainly: plumbing is vented to prevent trap seal loss.",
        "Without that air, two things happen. Water rushing down a drain creates suction that pulls the water out of nearby traps (siphonage), and a big flush pushes a slug of water down the stack that pressurizes the air ahead of it, which can blow a trap seal up into a fixture (back-pressure). InterNACHI also lists evaporation and wind as ways a trap loses its water. Either way, an empty trap is an open pipe from the sewer into the room.",
      ],
    },
    {
      heading: "Why vents get blocked",
      body: [
        "Most blockages are at the top: leaves and pine needles, bird and squirrel nests, wasp nests, a tennis ball, roofing debris left after a reroof, or a cap or screen that's clogged. In hard freezes, warm moist air rising out of the vent can freeze at the opening and close it with frost, which clears when the weather warms. Less often the problem is inside: a vent pipe that was cut, disconnected, or never connected during a remodel, or a horizontal vent run that sags and holds water.",
        "That's why the timing matters. Gurgling that started after a windstorm, in leaf season, during a cold snap, or right after a roof job points straight at the vent.",
      ],
    },
    {
      heading: "How it gets cleared, and the roof question",
      body: [
        "From the roof: look down the vent with a flashlight and pull out anything you can reach. Then run water from a garden hose down the pipe. If it backs up, there's a blockage, and an auger fed down from the top clears it. That's the standard method, and it's straightforward for a plumber with roof access and the right equipment.",
        "Should you go up yourself? Only on a roof you can walk safely, in dry weather, with a properly set ladder and someone holding it. Steep, wet, icy, or two-story roofs are a plumber's job. Don't pour chemical drain cleaner down a vent: it can sit in the pipe, it won't reach a nest, and it's dangerous for whoever opens the line next. If you can't or won't go on the roof, a plumber can sometimes run a camera or auger up from a cleanout inside, depending on how the house is plumbed.",
        "Afterward, a screen or vent cap that keeps critters out without restricting airflow helps, but it must be one made for plumbing vents and kept clear, or it becomes the blockage. In very cold climates, a plumber can deal with vents that frost over repeatedly.",
      ],
    },
    {
      heading: "Three houses",
      body: [
        "A bathroom sink that gurgled every time the toilet flushed, and a faint sewer smell on windy days. The vent on the roof had a wad of leaves and a small nest at the top. A plumber cleared it with a hose and an auger in under an hour, and the gurgling stopped that day.",
        "A basement shower that backed up with grey water every time the washer drained, with gurgling at the upstairs sinks. The owners assumed the vent was blocked. It wasn't: the main sewer line had a root intrusion near the street. The gurgling was air being pushed through the system ahead of a blocked main. A camera inspection found it.",
        "The failure case: a kitchen island sink in a remodel that smelled like sewage under the cabinet. A plumber had cleared the roof vents twice. The island had no roof vent at all. It used an air admittance valve under the sink that had stuck partly open. Replacing the valve fixed it for the cost of a part.",
      ],
    },
  ],
  diyStops: [
    "Any roof that's steep, wet, icy, two-story, or that you're not comfortable walking.",
    "Sewage backing up out of any drain. That's a drain or main-line blockage.",
    "Gurgling that started after a remodel, or venting you can't find. It may be missing or miswired.",
    "Drains slow throughout the house, or a smell that refilling traps and clearing the vent don't fix.",
  ],
  whoToCall: [
    {
      trade: "plumber",
      when: "Clearing a roof vent, replacing an air admittance valve, or checking venting after a remodel.",
    },
    {
      trade: "sewer-specialist",
      when: "All drains slow, the lowest drain backs up, or a camera inspection of the main line.",
    },
    {
      trade: "diy",
      when: "The flush-and-listen test, checking the vent from the ground, and refilling traps.",
    },
  ],
  faq: [
    {
      q: "How do you tell if your sewer vent pipe is clogged?",
      a: "Listen for gurgling at a sink or tub when a toilet flushes or another drain empties, watch for a toilet whose water level drops on its own, and notice whether sewer smells come and go with the wind. Slow drains at more than one fixture without an obvious clog is another sign. Look at the roof vent opening with binoculars for leaves, a nest, or frost.",
    },
    {
      q: "Will a toilet flush if the vent is clogged?",
      a: "Usually yes, but poorly: the flush may be weak or slow, the bowl may bubble or gurgle, and other fixtures nearby may gurgle as the toilet drains. The bigger problem is that the rush of water can siphon the traps of nearby sinks and tubs, letting sewer gas in.",
    },
    {
      q: "Can I unclog a plumbing vent without getting on the roof?",
      a: "Sometimes. If you can see the blockage from the ground and reach it safely with a ladder, you may be able to clear it at the opening. Otherwise, a plumber may be able to auger or camera the vent from a cleanout inside, depending on how your house is plumbed. In many houses the roof is still the practical way in, and that's what you're paying a plumber for.",
    },
    {
      q: "Can I pour water down my vent pipe?",
      a: "Yes, a garden hose down the vent is the standard test and often clears light debris. If the water backs up and fills the pipe, there's a solid blockage that needs an auger. Don't pour drain chemicals down a vent.",
    },
    {
      q: "Is a clogged vent pipe dangerous?",
      a: "It's usually a nuisance first: gurgling, slow drains, and sewer smell. The concern is that empty traps let sewer gas into the house, and sewer gas contains hydrogen sulfide and can carry methane. Don't ignore a strong or constant sewer smell. If it's rotten-egg strong and you can't tell whether it's gas, treat it as gas: leave and call the utility from outside.",
    },
    {
      q: "What does an air admittance valve do?",
      a: "It's a one-way valve used where a fixture isn't connected to a roof vent, common on kitchen islands and in basement bathrooms. It opens to let air in when water drains and closes to keep sewer gas in. They can fail stuck shut (gurgling) or stuck open (sewer smell under the sink), and replacing one is a quick job.",
    },
  ],
  related: [
    {
      title: "P-trap smell",
      href: "/smells/causes/p-trap/",
      hint: "Why a drain loses its seal",
    },
    {
      title: "House smells like sewage",
      href: "/smells/sewage/",
      hint: "Every sewer gas source, in order",
    },
    {
      title: "Bathroom smells like sewer",
      href: "/smells/sewage/bathroom/",
      hint: "Fixture by fixture",
    },
    {
      title: "Rotten egg or sulfur smell",
      href: "/smells/rotten-eggs/",
      hint: "Sewer gas vs. gas leak",
    },
    {
      title: "Smells like gas but no leak",
      href: "/smells/gas-but-no-leak/",
      hint: "When the utility found nothing",
    },
    {
      title: "Skunk smell in the house",
      href: "/smells/skunk/",
      hint: "Sewer gas can read as skunk",
    },
    {
      title: "Washing machine smells",
      href: "/smells/causes/washing-machine/",
      hint: "Sewage smell at the washer drain",
    },
  ],
  sources: [SOURCES.nachiPlumbingTerms],
  diagnose: { family: "sewage", location: "bathroom" },
  updated: "2026-11-07",
};
