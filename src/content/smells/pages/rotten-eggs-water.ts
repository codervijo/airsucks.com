import { SOURCES } from "../reference";
import type { SmellPage } from "../types";

// Context page under /smells/rotten-eggs/ for the water-only version: hot water
// (water heater anode + sulfur bacteria) vs every tap (well water) vs the
// drain posing as the water. Treatment claims follow the Minnesota Department
// of Health guidance cited below.
export const rottenEggsWater: SmellPage = {
  path: "/smells/rotten-eggs/water/",
  family: "rotten-egg",
  label: "Water",
  title: "Hot Water Smells Like Rotten Eggs? Causes and Fixes",
  description:
    "Hot water smells like rotten eggs or sulfur? A two-glass test tells you if it's the water heater, well water, or the drain, and which fix lasts.",
  h1: "Why your hot water smells like rotten eggs, and how to make it stop",
  targets: [
    "hot water smells like rotten eggs",
    "water smells like rotten eggs how to fix",
    "water smells like sulfur when first turned on",
    "water heater rotten egg smell dangerous",
    "cold water smells like rotten eggs",
    "new hot water heater smells like rotten eggs",
  ],
  quickAnswer:
    "If only the hot water smells like rotten eggs, the water heater is making it. Sulfur bacteria in the warm tank react with the heater's magnesium anode rod and give off hydrogen sulfide. Flushing and disinfecting the tank help for a while. The lasting fix is usually a different anode: aluminum or a powered anode. If the hot and cold water both smell and you're on a private well, the sulfur is in the groundwater and needs water treatment. If the water itself smells fine away from the sink, the drain is the source, not the water.",
  urgency: "routine",
  causes: [
    {
      cause: "water-heater-anode",
      likelihood: "most common",
      note: "Hot water only, at every hot tap in the house. Often worse after a vacation or after a new heater is installed.",
    },
    {
      cause: "well-water-sulfur",
      likelihood: "common",
      note: "Private wells only. Hot and cold both smell, at every faucet, and silverware or fixtures may tarnish black.",
    },
    {
      cause: "drain-biofilm",
      likelihood: "common",
      note: "The look-alike: smell comes from the drain while the water runs, so it seems like the water. Water in a glass carried to another room smells fine.",
    },
  ],
  compare: {
    headers: ["Glass test result", "Where it's coming from", "What fixes it"],
    rows: [
      [
        "Hot glass smells, cold doesn't, at every hot tap",
        "Water heater",
        "Flush and disinfect, then change the anode",
      ],
      [
        "Hot and cold both smell, private well",
        "Groundwater or the well",
        "Water test, then treatment",
      ],
      [
        "Hot and cold both smell, city water",
        "Your plumbing, or rarely the supply",
        "Call the water utility, then a plumber",
      ],
      [
        "Neither glass smells, but the sink does",
        "The drain or overflow",
        "Clean the drain",
      ],
      [
        "Smells for the first few seconds, then clears",
        "Water standing in the pipes or tank",
        "Same as the matching row above. Note which tap",
      ],
    ],
  },
  decision: [
    {
      question:
        "Is there a gas smell near the water heater itself, not just at the taps, or a hissing sound?",
      yes: "That's a possible gas leak, not a water problem. Leave and call the utility from outside.",
      href: "/smells/gas/",
      no: "Keep going.",
    },
    {
      question:
        "Carry a glass of hot and a glass of cold to another room. Do both smell fine, even though the sink smells?",
      yes: "It's the drain, not the water. Clean the drain and overflow.",
      href: "/smells/sewage/bathroom/",
      no: "The water is the source. Keep going.",
    },
    {
      question: "Does only the hot glass smell?",
      yes: "Water heater. Start with a flush, then plan an anode change.",
      no: "Both smell. Keep going.",
    },
    {
      question: "Are you on a private well?",
      yes: "Get the water tested before buying any treatment.",
      no: "Call your water utility. City water rarely smells of sulfur at every tap.",
    },
  ],
  checks: [
    {
      title: "Do the two-glass test properly",
      how: "After the water hasn't been used for a few hours, fill one glass from the hot tap and one from the cold. Walk them to another room, away from the sink and its drain, and smell each one. Doing this away from the sink is the whole trick. Otherwise the drain fools you.",
    },
    {
      title: "Check more than one tap",
      how: "Repeat at a second bathroom and the kitchen. Hot water smelling at every hot tap means the water heater. Smell at only one tap points to that fixture's drain or a dead-end section of pipe.",
    },
    {
      title: "Note the timing",
      how: "Does it smell for the first few seconds and then clear? That's water that sat in the tank or pipes. Strong after a trip or first thing in the morning? Same story: bacteria have had time to work. Constant even after running the tap for minutes points to the supply.",
    },
    {
      title: "Look for black tarnish",
      how: "Black stains on silverware, chrome fixtures, or copper pipes are a sign of hydrogen sulfide in the water itself. That points toward the supply, usually a well, rather than just the water heater.",
    },
    {
      title: "Check what kind of water heater you have",
      how: "A tank heater has an anode rod; its label usually tells you whether it's gas or electric. A tankless heater doesn't use one, so a sulfur smell with a tankless unit points to the well, a water softener, or the plumbing instead.",
    },
  ],
  sections: [
    {
      heading: "What's making the smell",
      body: [
        "Hydrogen sulfide is the rotten-egg gas. In homes it shows up in water three ways: it's naturally present in some groundwater, it's made by sulfur bacteria living in a well or the plumbing, or it's made inside the water heater. The water heater is the one that catches people out. A tank heater is a warm, still environment where sulfur bacteria do well. Most tanks also contain a magnesium anode rod that protects the steel tank from corrosion, and that rod helps turn sulfate in the water into hydrogen sulfide.",
        "That's why the smell is so specific: hot water only, every hot tap, worse when water has been sitting. The cold water never passes through the tank, so it's fine.",
      ],
    },
    {
      heading: "Fixing a water heater that smells, easiest first",
      body: [
        "Flush the tank. Draining a few gallons out of the bottom valve clears sediment, and some of the smell with it. It's a short-term fix, but it tells you whether you're on the right track.",
        "Disinfect it. A chlorine-bleach treatment of the tank can kill the sulfur bacteria, but if any survive, the smell can return within a few weeks. Follow the heater manufacturer's instructions, or have a plumber do it. You're working with a pressurized tank connected to gas or 240-volt power.",
        "Heat-treat it. Public-health guidance describes raising the tank to 160°F (71°C) for several hours to kill the bacteria, then flushing it. This is risky. The pressure-relief valve has to be working, anyone using a tap during that time can be scalded, and the thermostat must go back down afterward. Treat it as a job for a plumber or the manufacturer's support line, not a weekend experiment.",
        "Change the anode. This is the fix that usually lasts. Swap the magnesium anode for an aluminum (often aluminum-zinc) or a powered anode. A powered anode protects the tank electrically and doesn't feed the reaction. Don't just pull the old anode out and leave it out. That can shorten the heater's life a lot. Removing a stuck anode takes a large socket and a lot of torque, and it can shift the tank, so most people hire a plumber.",
      ],
    },
    {
      heading: "When it's the well, not the heater",
      body: [
        "If hot and cold both smell at every tap and you're on a private well, the sulfur is in the water supply. In most cases the smell isn't a sign that the water is unsafe to drink. But a change in taste or smell is exactly when public-health agencies recommend testing a well, at least for coliform bacteria and nitrate, and testing is the only way to choose the right treatment.",
        "Treatment depends on how much sulfide the test finds. Activated carbon filters handle low levels. Oxidizing filters, such as manganese greensand, or aeration or chlorination systems with filtration, handle higher ones. Shock-chlorinating the well can clear sulfur bacteria, but they're stubborn once established and the work is usually done by a licensed well contractor. If the smell started after a water softener or other treatment unit went in, the bacteria may be living in that unit, and its installer or manufacturer has the disinfection procedure.",
      ],
    },
    {
      heading: "A new water heater that smells like rotten eggs",
      body: [
        "A new tank arrives with a fresh magnesium anode, which is the most reactive it will ever be, so a new heater can start smelling within weeks on water that never smelled before. It isn't a defective heater. The same anode swap fixes it. Ask the installer about it before it's installed if your old one ever smelled.",
      ],
    },
    {
      heading: "How the glass test sorts three typical homes",
      body: [
        "City water, a three-week vacation, and a hot-water-only smell on the first shower back: a tank flush cut it to almost nothing, but it crept back over a month. The plumber replaced the magnesium anode with an aluminum-zinc one and the smell didn't return.",
        "A private well where both taps smelled and the chrome fixtures had gone dull and dark: the owner was about to buy a carbon filter online. The water test came back with sulfide at a level a carbon filter would have saturated quickly. An oxidizing filter sized to the test result fixed it, and the same test confirmed the water had no coliform bacteria.",
        "The one that wasn't the water: a homeowner replaced the anode after reading that hot water causes sulfur smells, and the bathroom sink still smelled every time the hot tap ran. A glass of hot water carried to the kitchen smelled of nothing. The smell was the sink drain and overflow, warmed by the hot water. Cleaning them fixed it. The anode had been fine all along. That's why the glass test comes first.",
      ],
    },
  ],
  diyStops: [
    "Anode removal or replacement on a gas or electric heater, unless you've done it before.",
    "Any heat-treatment of the tank above its normal setting.",
    "Choosing well treatment without a lab test.",
    "Shock-chlorinating a well, or anything involving a well pit.",
    "A gas smell near the heater itself rather than from the taps.",
  ],
  whoToCall: [
    {
      trade: "plumber",
      when: "Anode replacement, tank disinfection, or a heater that keeps smelling after a flush.",
    },
    {
      trade: "home-inspector",
      when: "You're buying a house on a well and want the water tested before you close.",
    },
    {
      trade: "gas-utility",
      when: "The smell is at the heater itself, not the taps, and it might be gas.",
    },
    { trade: "diy", when: "The two-glass test, tank flushing, and cleaning a smelly drain." },
  ],
  faq: [
    {
      q: "Why does my hot water smell like rotten eggs but the cold water doesn't?",
      a: "Because only the hot water goes through the water heater. Sulfur bacteria in the warm tank and the magnesium anode rod together produce hydrogen sulfide. The cold water bypasses the tank, so it doesn't smell.",
    },
    {
      q: "Is it safe to shower if my water smells like rotten eggs?",
      a: "From a water heater, the smell is a nuisance rather than a sign the water is contaminated. On a private well, the smell usually isn't a safety problem either. It is a good reason to have the well tested, because you can't smell most of what a water test checks for. A strong sulfur smell in a closed, unventilated bathroom is a reason to open a window.",
    },
    {
      q: "Why does my water smell like sulfur when I first turn it on?",
      a: "Water that sat in the tank or pipes gives bacteria time to make hydrogen sulfide, so the first water out smells and then clears. Note whether it's the hot tap only (water heater), both taps (supply or plumbing), or one fixture (that fixture's drain or pipe).",
    },
    {
      q: "Is a rotten egg smell from the water heater dangerous?",
      a: "A smell from the hot water is the anode reaction, not a gas leak. A smell around the water heater, especially a gas one, with the taps off is different: treat that as a possible gas leak, leave, and call the utility from outside.",
    },
    {
      q: "Why does my hot water smell like rotten eggs after a vacation?",
      a: "Hot water sat still in the tank for days, which is when the bacteria and the anode reaction build up the most. Run the hot taps for a few minutes. If it keeps coming back with normal use, the anode change is the long-term fix.",
    },
    {
      q: "Can a water softener make the water smell like rotten eggs?",
      a: "It can. Sulfur bacteria sometimes colonize softeners and other treatment units. If the smell started after one was installed, or both hot and cold smell only after the water passes through it, the installer or manufacturer can tell you how to disinfect it.",
    },
  ],
  related: [
    {
      title: "Rotten egg or sulfur smell in the house",
      href: "/smells/rotten-eggs/",
      hint: "Gas, drains, batteries",
    },
    {
      title: "Sewer smell in the bathroom",
      href: "/smells/sewage/bathroom/",
      hint: "If it's the drain, not the water",
    },
    {
      title: "Smells like gas but no leak was found",
      href: "/smells/gas-but-no-leak/",
      hint: "After the utility cleared it",
    },
    { title: "All smells", href: "/smells/", hint: "Browse by odor" },
  ],
  sources: [SOURCES.mdhSulfur],
  diagnose: { family: "rotten-egg", location: "bathroom" },
  updated: "2026-10-29",
};
