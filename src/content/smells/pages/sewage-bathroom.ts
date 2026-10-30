import type { SmellPage } from "../types";

// Location variant of /smells/sewage/. The house-wide page covers the order of
// checks; this one works one room, fixture by fixture, and answers the
// "shower drain smells but isn't clogged" and "comes and goes" queries.
export const sewageBathroom: SmellPage = {
  path: "/smells/sewage/bathroom/",
  family: "sewage",
  label: "Bathroom",
  title: "Bathroom Smells Like Sewer? Fixture-by-Fixture Fix",
  description:
    "Sewer smell in the bathroom: test each drain, the sink overflow, the toilet seal, and the vent one at a time, and know what each result means and fixes.",
  h1: "Sewer smell in the bathroom: how to find which fixture it's coming from",
  targets: [
    "sewer smell in bathroom",
    "bathroom smells like sewage",
    "shower drain smells but not clogged",
    "sewer smell in bathroom comes and goes",
    "bathroom sink drain smells like sewage",
    "sewer smell in bathroom but no leak",
  ],
  quickAnswer:
    "A bathroom sewer smell means sewer gas is getting past one of the room's seals: a drain trap, the toilet's wax ring, or the vent that keeps traps full. The quickest way to find it is to test one fixture at a time. Run water into every drain, clean the sink overflow, rock the toilet, then flush and watch the other drains. Most bathroom sewer smells turn out to be a dry trap, slime in a drain, or a failed toilet seal, all fixable in an afternoon. If drains gurgle or the smell follows flushing, it's the vent, and that's a plumber job.",
  urgency: "soon",
  safety: {
    title: "Stop and get help instead if",
    when: [
      "Sewage comes up in the tub or shower when the toilet is flushed or the washer drains",
      "The smell is overpowering, or someone in the room feels dizzy or nauseous",
      "The bathroom has a gas water heater or furnace closet and the smell is more rotten egg than sewer",
    ],
    actions: [
      "Backups: stop using every fixture in the house and call a plumber. A backup in the lowest tub usually means the main line is blocked.",
      "Strong smell or feeling unwell: open the window, run the exhaust fan, leave the room, and get fresh air.",
      "Possible gas: leave the house and call the gas utility from outside.",
    ],
    note: "A sewer smell can't warn you about carbon monoxide, which has no smell. Keep CO alarms working.",
  },
  causes: [
    {
      cause: "dry-p-trap",
      likelihood: "most common",
      note: "Guest baths, a second vanity sink nobody uses, a tub used only for bathing kids, or any bathroom left empty during a trip.",
    },
    {
      cause: "drain-biofilm",
      likelihood: "most common",
      note: "The usual answer when a shower or sink drain smells but drains fine: slime and hair on the drain walls, plus gunk in the sink overflow channel.",
    },
    {
      cause: "toilet-wax-ring",
      likelihood: "common",
      note: "Smell strongest at floor level beside the toilet. Often follows a toilet that was reset, a new floor, or a toilet that rocks.",
    },
    {
      cause: "sewer-vent-blocked",
      likelihood: "common",
      note: "Points this way when the smell follows a flush and the sink or tub gurgles.",
    },
    {
      cause: "sewer-line-crack",
      likelihood: "less common",
      note: "When every fixture checks out. A cracked drain or vent pipe inside the wall or under the floor.",
    },
  ],
  compare: {
    headers: ["When and where you smell it", "Most likely", "First thing to try"],
    rows: [
      [
        "After the bathroom sat unused for a while; fades once the fixtures are used",
        "Dry trap",
        "Run every drain for 30 seconds",
      ],
      [
        "Nose right at the shower or sink drain; drains fine",
        "Slime in the drain",
        "Pull the strainer or stopper and scrub",
      ],
      [
        "Under the sink rim, at the little overflow hole",
        "Dirty overflow channel",
        "Flush the overflow with hot water and a brush",
      ],
      [
        "Floor level beside the toilet; toilet rocks or caulk is stained",
        "Failed wax ring",
        "Rock test, then replace the ring",
      ],
      [
        "Right after flushing; sink or tub gurgles",
        "Blocked or failed vent",
        "Plumber",
      ],
      [
        "Every fixture checks out and it's still there",
        "Cracked pipe in the wall or floor",
        "Smoke test by a plumber",
      ],
    ],
  },
  decision: [
    {
      question: "Does sewage come up in the tub or shower when you flush or drain something?",
      yes: "That's a blockage, not a smell problem. Stop using water and call a plumber.",
      no: "Keep going.",
    },
    {
      question: "Did the smell go away a few hours after you ran water into every drain?",
      yes: "A trap was drying out. Use that fixture every week or two, or have a trap seal added.",
      no: "Keep going.",
    },
    {
      question: "With a drain covered overnight, is the smell gone in the morning?",
      yes: "That drain is the source. Clean it, then check that it has a working trap.",
      no: "Move on to the toilet.",
    },
    {
      question: "Does the toilet rock, or is the smell strongest at its base?",
      yes: "Replace the wax ring, and the closet bolts if they're corroded.",
      no: "Keep going.",
    },
    {
      question: "When you flush, does the sink or tub gurgle or its trap water drop?",
      yes: "The vent isn't doing its job. Call a plumber.",
      href: "/smells/sewage/",
      no: "Ask a plumber for a smoke test to find a hidden crack.",
    },
  ],
  checks: [
    {
      title: "Refill, then wait",
      how: "Run the sink, tub, and shower for 30 seconds each and flush the toilet twice. If there's a floor drain, pour a bucket of water in. Then leave the door shut for a few hours. If the smell is gone when you come back, a trap had dried out, and you're done.",
    },
    {
      title: "Cover one drain at a time",
      how: "Still smells? Put plastic wrap over the shower drain and tape the edges, or set a wet washcloth in the sink and close the stopper. Leave it overnight. If the room smells clean in the morning, you've found the drain. If not, move the cover to the next drain and repeat. This one test settles most bathroom sewer-smell arguments.",
    },
    {
      title: "Open the shower drain",
      how: "Unscrew or pry up the strainer. Pull out the hair and slime with a plastic drain-cleaning strip, then scrub the inside of the drain pipe with a bottle brush and dish soap. Finish with very hot tap water. If you shine a light down and don't see standing water a few inches below, that drain may be missing a working trap.",
    },
    {
      title: "Clean the sink overflow",
      how: "Smell the small hole under the sink rim. That channel collects soap scum and never gets rinsed. Push a bottle brush or pipe cleaner into it, then pour hot water slowly into the hole until it runs clear in the drain.",
    },
    {
      title: "Rock the toilet",
      how: "Straddle the bowl and gently push it side to side. Any movement, a gap at the base, or yellow, black, or soft caulk means the seal underneath may have failed. Smell at floor level behind the toilet. That's where a leaking wax ring vents.",
    },
    {
      title: "Flush and watch the other drains",
      how: "Have someone flush while you watch the water in the sink and tub drains. Bubbling, gurgling, or the water level dropping means the drain system is pulling air through the traps instead of through the vent.",
    },
  ],
  sections: [
    {
      heading: "Why the bathroom is where sewer smells start",
      body: [
        "Every fixture in a bathroom has a trap: a bend in the pipe that holds a few inches of water as a plug against sewer gas. A bathroom has three or four of them in one small room, plus the toilet's own seal against the floor. That's more places for a seal to fail than anywhere else in the house. The room is also small and often closed, so a little gas is easy to notice.",
        "A working trap only fails in a few ways. It dries out, because water evaporates when the fixture isn't used. It gets siphoned, when a rush of water elsewhere pulls it down the pipe. Or slime grows on the pipe walls above the water line, where the trap can't block it. Each of these leaves a different pattern, and that's what the checks above are sorting out.",
      ],
    },
    {
      heading: "Shower drain smells, but it isn't clogged",
      body: [
        "This is the most common bathroom version, and it's almost never the sewer. Hair, soap, and skin oils build a slimy mat on the strainer and the first few inches of pipe. Bacteria in that slime make the sulfur-sewer smell. The water still drains because the mat is thin, but it smells every time warm water hits it.",
        "Pouring bleach down the drain doesn't fix it, because the slime is stuck to the walls above the water. Physically scrubbing does. Pull the strainer, strip out the hair, and brush the pipe. An enzyme drain cleaner used overnight helps keep it from growing back. If the smell comes back within days, a shower installed without a proper trap is the next suspect. This is more common in older homes and some DIY remodels, and a plumber can check it with a camera.",
      ],
    },
    {
      heading: "Bathroom sink smells like sewage",
      body: [
        "Check the overflow before blaming the drain. Most sinks have a channel from the hole under the rim down into the drain, and it holds stale water and soap residue. Next is the pop-up stopper. Pull it out, because the rod underneath collects a black, smelly sludge. Then check under the cabinet. An S-shaped trap, a slip nut that's loose and weeping, or a small air admittance valve (a one-way vent cap on the drain under some sinks) that has stuck open can all let gas in.",
      ],
    },
    {
      heading: "When it comes and goes",
      body: [
        "A smell right after someone showers or bathes next door means one fixture is siphoning another's trap. That's a venting problem. A smell after the bathroom sat empty for days is evaporation. A smell that's worse when the exhaust fan or a range hood is running means the house is pulling air in through the weakest path, often a half-dry trap. Worse on windy days points to the roof vent. Keep a rough note of when it happens. It usually points straight at one of these.",
      ],
    },
    {
      heading: "Three typical bathroom cases, including one DIY can't fix",
      body: [
        "A guest bath that smelled like sewer after the owners came back from a three-week trip: running each fixture for a minute fixed it within the hour. The tub trap had dried out first, because a tub's trap is shallow and the room got afternoon sun. To keep it from happening again, they now run water in the guest bath every couple of weeks. Some plumbers suggest a spoonful of mineral oil on top of the trap water before a long trip to slow evaporation.",
        "A main bathroom that smelled faintly at floor level, worse in the mornings: the caulk around the toilet had turned yellow and the toilet moved slightly when pushed. Under it, the wax ring was flattened on one side from a new tile floor that raised the floor height. A new ring with an extension spacer and new bolts ended it.",
        "The one that didn't yield to DIY: the owner cleaned every drain, replaced the wax ring, and the smell kept coming back right after flushes. The sink gurgled each time. A plumber found the air admittance valve under the vanity had stuck open, and a section of the roof vent was blocked. Cleaning drains could never have fixed that. Gurgling plus smell after flushing means stop scrubbing and call.",
      ],
    },
    {
      heading: "What not to do",
      body: [
        "Don't mix bleach with ammonia or acid drain cleaners trying to kill the smell. The fumes are dangerous in a small bathroom. Don't keep pouring chemical drain openers into a drain that isn't clogged. They don't remove the slime on the pipe walls and are hard on old pipes. And don't cover the smell with air fresheners while you wait. You'll lose the clue you need to find which fixture it is.",
      ],
    },
  ],
  diyStops: [
    "Sewage backing up into the tub, shower, or floor drain.",
    "Gurgling drains or a smell that follows flushing: vents and roof work are plumber jobs.",
    "A cracked toilet flange, rotted subfloor, or a toilet that won't sit level.",
    "A drain with no visible trap water, or a shower that may have been installed without a trap.",
    "Every fixture checks out and it still smells. That needs a camera or smoke test.",
  ],
  whoToCall: [
    {
      trade: "plumber",
      when: "Vent problems, a missing or failed trap, an air admittance valve, a toilet flange repair, or a backup.",
    },
    {
      trade: "sewer-specialist",
      when: "A smoke test or camera inspection to find a hidden crack in the walls or under the floor.",
    },
    { trade: "diy", when: "Dry traps, drain slime, the sink overflow, and most wax-ring swaps." },
  ],
  faq: [
    {
      q: "How do I get rid of the sewer smell in my bathroom?",
      a: "Refill every trap by running water, then scrub the shower drain, the sink stopper, and the overflow. If the toilet rocks or the smell is at its base, replace the wax ring. That combination fixes most bathrooms. If the smell follows flushing or the drains gurgle, the vent needs a plumber.",
    },
    {
      q: "How do I find out where the sewer smell is coming from?",
      a: "Cover one drain at a time overnight, using plastic wrap taped over the shower drain or a wet cloth in the sink with the stopper closed. When the room stops smelling, you've found the drain. If none of them changes anything, check the toilet seal and then ask a plumber for a smoke test.",
    },
    {
      q: "Why does my bathroom smell like sewage but there's no leak?",
      a: "Most bathroom sewer smells have no visible leak. Gas gets past a trap that dried out, slime in a drain, or a toilet seal that no longer seals tightly. None of these drips. A vent problem also causes smell without any water on the floor.",
    },
    {
      q: "Is a sewer smell in the bathroom dangerous?",
      a: "A faint smell from a dry trap or a dirty drain is mostly a sign that a seal has failed. A strong smell, sewage backing up, or anyone feeling unwell is different: ventilate, leave the room, and get a plumber. If it smells more like rotten eggs near a gas appliance, treat it as possible gas.",
    },
    {
      q: "Why does my bathroom smell like sewage at night?",
      a: "Usually because nothing gets used for hours, so a weak trap dries or a slow siphon has time to empty it. The door and window are often closed, so the smell builds up. It also happens if a fan or furnace runs at night and pulls air through the drains. Run the fixtures before bed and see whether it stops.",
    },
    {
      q: "What do plumbers recommend for smelly drains?",
      a: "Mechanical cleaning first: pull the strainer or stopper and scrub out the slime and hair. Then an enzyme drain treatment to keep it from regrowing. For drains that dry out, a trap primer or a trap-seal insert. For repeat smells after flushing, they'll check the vent and any air admittance valves.",
    },
  ],
  related: [
    {
      title: "Sewer smell anywhere in the house",
      href: "/smells/sewage/",
      hint: "Vents, lines, septic",
    },
    {
      title: "Hot water smells like rotten eggs",
      href: "/smells/rotten-eggs/water/",
      hint: "If the shower water itself smells",
    },
    {
      title: "Rotten egg or sulfur smell",
      href: "/smells/rotten-eggs/",
      hint: "Rule out gas",
    },
    {
      title: "Musty smell in one room",
      href: "/smells/musty/room/",
      hint: "Damp bathroom, not sewer",
    },
  ],
  diagnose: { family: "sewage", location: "bathroom" },
  updated: "2026-10-29",
};
