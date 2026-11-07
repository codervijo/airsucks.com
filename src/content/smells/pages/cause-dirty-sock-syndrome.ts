import { SOURCES } from "../reference";
import type { SmellPage } from "../types";

// v3.G cause page #4. Targets "dirty sock syndrome" (2.4K US/mo, KD 0) —
// DataForSEO, 2026-11-07. SERP (2026-11-07): a UV/coating vendor, local HVAC
// blogs, Reddit, StackExchange, an HVAC School Facebook post. This page is the
// deep dive on the AC coil + drain pan cause (ac-coil-drain);
// /smells/musty/ac/ stays the broad "AC smells musty" page and links here.
export const causeDirtySockSyndrome: SmellPage = {
  path: "/smells/causes/dirty-sock-syndrome/",
  about: "ac-coil-drain",
  family: "musty",
  label: "Dirty sock syndrome",
  title: "Dirty Sock Syndrome: Why Your AC Smells, and the Fix",
  description:
    "AC or heat pump blows a dirty-sock smell when it starts? What's growing on the coil, why heat pumps get it, what cleaning fixes, and what to skip.",
  h1: "Dirty sock syndrome: the AC smell that comes from the coil, and how to get rid of it",
  targets: [
    "dirty sock syndrome",
    "dirty sock smell from ac",
    "heat pump smells like dirty socks",
    "ac smells like feet when first turned on",
    "dirty sock syndrome fix",
    "is dirty sock syndrome harmful",
  ],
  quickAnswer:
    "Dirty sock syndrome is the trade name for a sour, locker-room smell that blows out of the vents for the first few minutes after an AC or heat pump starts, especially when it switches from heating to cooling. It comes from microbes growing on the dust that builds up on the damp indoor coil and in the drain pan. When the system sits off or runs in heat mode, that film dries out; when the coil gets wet again, the smell is released. Heat pumps in humid climates get it most because their coil never gets hot enough to kill the growth. The fix is cleaning the coil, the drain pan, and the blower, keeping the drain flowing and the filter fresh, then keeping the coil from going dirty again.",
  urgency: "soon",
  causes: [
    {
      cause: "ac-coil-drain",
      likelihood: "most common",
      note: "Growth on the indoor coil and in the drain pan. The classic sign is timing: worst when the system first starts or changes mode, fading after a few minutes of running.",
    },
    {
      cause: "dirty-filter",
      likelihood: "common",
      note: "A loaded or poor-fitting filter lets dust coat the coil, which is what the microbes feed on. It also smells stale on its own.",
    },
    {
      cause: "mold-in-ducts",
      likelihood: "less common",
      note: "If the smell stays strong the whole time the fan runs and doesn't fade, or one run of ducts smells worse than the rest, the growth may be past the coil.",
    },
    {
      cause: "high-humidity",
      likelihood: "less common",
      note: "A house that stays humid keeps the coil, the pan, and the insulation inside the air handler damp longer, so the film regrows fast after cleaning.",
    },
    {
      cause: "dead-animal",
      likelihood: "rare",
      note: "A sudden, rotten, sweetish smell at the vents is not dirty socks. A mouse or other animal in the return or the air handler is the usual reason.",
    },
  ],
  compare: {
    headers: ["When you smell it", "What it points to", "Next step"],
    rows: [
      [
        "First few minutes after the AC starts, then fades",
        "Coil film releasing as it wets: dirty sock syndrome",
        "Coil, pan, and blower cleaning",
      ],
      [
        "Spring and fall, when it heats at night and cools by day",
        "Same cause, triggered by switching modes",
        "Same: cleaning, then prevention",
      ],
      [
        "The whole time the fan runs, with or without heat or cooling",
        "Wet insulation, a dirty blower, or duct growth",
        "Inspection beyond the coil",
      ],
      [
        "Only during heating, and it doesn't fade",
        "Usually not dirty sock syndrome",
        "Check drain, insulation, and ducts",
      ],
      [
        "Suddenly, sweet-rotten and getting worse",
        "Dead animal in the system",
        "Locate and remove it",
      ],
    ],
  },
  decision: [
    {
      question: "Is the smell strongest in the first few minutes after the system starts, then fading?",
      yes: "That's the textbook pattern. Keep going to rule out the easy fixes first.",
      no: "Probably something else in the system or the house. Start with the wider AC smell page.",
      href: "/smells/musty/ac/",
    },
    {
      question: "Is the filter overdue, or is there standing water at the indoor unit or a drain line that never drips?",
      yes: "Replace the filter and clear the drain now. That alone sometimes fixes a mild case.",
      no: "Keep going.",
    },
    {
      question: "Has the coil been professionally cleaned in the last couple of years?",
      yes: "If the smell came back fast, ask about coil coatings, better filtration, or a UV-C lamp at the coil, and check the humidity.",
      no: "Book a coil, pan, and blower cleaning. That's the fix for most cases.",
    },
  ],
  checks: [
    {
      title: "Time the smell",
      how: "Stand at a vent close to the indoor unit and switch the system from off to cooling. Dirty sock syndrome is strongest in the first minutes and fades as the coil gets fully wet and the air flushes through. Write down when it happens: right after starting, when switching modes, or all the time. A tech will want to know.",
    },
    {
      title: "Change the filter",
      how: "ENERGY STAR advises checking the filter monthly and changing it when it's dirty. A filter that's loaded, bent, or doesn't fill its slot lets dust onto the coil. Note the size and type so you can buy the right one every time.",
    },
    {
      title: "Check the condensate drain",
      how: "In cooling mode, the drain line should drip outside or into a floor drain or condensate pump. No drip on a humid day, water standing in the pan, or a wet floor around the unit means the drain is slow or blocked. ENERGY STAR notes that a plugged drain can cause water damage and affect indoor humidity.",
    },
    {
      title: "Look at the coil and pan, power off",
      how: "Switch off the power to the air handler. If there's an access panel to the coil that opens without tools, look at the coil face for a grey mat of dust and the pan underneath for slime or standing water. Many coils are sealed in, which is fine; leave it for the tech.",
    },
    {
      title: "Measure the humidity",
      how: "If the house sits well above 50–60% in summer, the coil and pan never dry out fully, and the smell will come back after cleaning. A hygrometer tells you whether humidity control is part of the fix.",
    },
  ],
  sections: [
    {
      heading: "What's actually growing on the coil",
      body: [
        "Your indoor coil is the coldest surface in the house when the AC runs, so water condenses on it all summer, and it catches whatever dust gets past the filter. That damp dust is food. Trade coverage in ACHR News traces the smell to microbes breaking down the debris that builds up there, the same kind of decay that makes a sink drain stink. HVAC School describes the timing: the film dries on the coil while the system is off or heating, and the smell comes off when it gets wet again at startup.",
        "Heat pumps get it more than furnace systems for a simple reason: the same indoor coil does the heating. A furnace's heat dries and cooks that coil area. A heat pump's coil runs warm, not hot, which ACHR describes as not hot enough to kill the growth. HVAC School notes it's almost exclusively a humid-climate problem. ACHR reported that complaints cluster in the spring and fall 'shoulder' seasons, when systems heat at night and cool by day.",
      ],
    },
    {
      heading: "What fixes it",
      body: [
        "Cleaning the right parts, not just the coil face. HVAC School's list is both sides of the evaporator coil, the return box, the drain pan, and the blower wheel, plus checking for standing water, dirty filters, gaps in the return ducts, and pests. A dirty blower wheel holds the same film and smells long after the coil is clean.",
        "Use coil cleaners made for evaporator coils, not bleach or harsh household chemicals. Whatever goes on the coil ends up in the air you breathe, and bleach can corrode the coil. HVAC School is pointed about both. Then make sure the drain line is clear all the way out, and fix any return duct gaps that pull dusty attic or crawlspace air past the filter.",
      ],
    },
    {
      heading: "Keeping it from coming back",
      body: [
        "Filtration is the long-term fix, because a clean coil stays clean only if dust doesn't reach it. HVAC School recommends MERV 8 or better, 4-inch filters where the system allows. Make sure the filter fits its slot with no gaps, and check that a higher-MERV filter suits your system's blower, since too restrictive a filter can starve airflow. ENERGY STAR recommends an annual pre-season check, cooling in the spring, which is the time to have the coil and drain looked at.",
        "For systems that keep coming back, there are two add-ons. Coil coatings, factory or aftermarket, which HVAC School says give fairly reliable results. And UV-C lamps aimed at the coil and pan, which ACHR News has called the best around-the-clock option. HVAC School adds that UV-C works only very close to the surface it shines on and the bulbs need regular replacement. Neither makes up for a blocked drain or a missing filter.",
      ],
    },
    {
      heading: "Is it harmful?",
      body: [
        "We don't give medical advice. Dirty sock syndrome is microbial growth inside the equipment, and EPA's general guidance on mold is that it can cause allergic reactions in sensitive people. If someone in the house has symptoms they link to the HVAC, have the system cleaned and talk to a doctor. Either way, the smell is a maintenance signal: a coil coated in growth also moves less heat, so cooling suffers too.",
      ],
    },
    {
      heading: "Three systems",
      body: [
        "A six-year-old heat pump in a humid coastal house that stank for ten minutes every morning in April and October and was fine all summer. Coil and blower cleaning, a new properly sized filter, and a dehumidifier set to 50% stopped it. The owner now books the cleaning before spring each year.",
        "An AC that smelled like feet only in the first week of summer. The drain pan was holding an inch of water because the drain line was partly clogged with algae. Clearing the line and adding a pan treatment fixed it; the coil itself was in decent shape.",
        "The failure case: a system that had the coil sprayed with a store-bought foaming cleaner twice a year. The smell kept returning within weeks. The blower wheel had never been cleaned and was caked, and a return duct in the attic had come loose, pulling attic dust straight past the filter. Fixing the return and cleaning the blower ended it.",
      ],
    },
  ],
  diyStops: [
    "Opening the air handler beyond a tool-free filter or access door. Coils, blowers, and wiring are HVAC work.",
    "Water overflowing the pan, a float switch shutting the system off, or water damage at the unit.",
    "Visible growth inside the air handler or ducts beyond the coil.",
    "A smell that's rotten and sweet, or gets worse by the day. Have the system checked for a dead animal.",
  ],
  whoToCall: [
    {
      trade: "hvac",
      when: "Coil, drain pan, and blower cleaning; drain line clearing; return duct leaks; coatings or UV-C.",
    },
    {
      trade: "mold-remediation",
      when: "Confirmed growth spread through the ducts or air handler beyond the coil.",
    },
    { trade: "diy", when: "Filter changes, flushing the drain line at its cleanout, and humidity." },
  ],
  faq: [
    {
      q: "How do I get rid of dirty sock syndrome?",
      a: "Have the indoor coil (both sides), the drain pan, the return box, and the blower wheel cleaned with proper evaporator coil cleaner. Clear the condensate drain, fix any return duct leaks, and switch to a good filter that fits snugly. If it comes back quickly, ask about a coil coating or a UV-C lamp at the coil.",
    },
    {
      q: "Why does my heat pump smell like dirty socks when it switches modes?",
      a: "The growth on the coil dries out while the system is off or heating, and the smell is released when the coil gets wet again in cooling mode. Heat pumps are prone to it because their coil runs warm, not hot, in heating mode, so it doesn't kill the growth the way a furnace's heat would.",
    },
    {
      q: "Will it go away on its own?",
      a: "The smell often fades after a few minutes of running, and some seasons are worse than others, but the growth on the coil stays until it's cleaned. Left alone, it usually comes back every time the system changes modes.",
    },
    {
      q: "Can I spray something on the coil myself?",
      a: "If you can reach the coil without opening sealed panels, a no-rinse evaporator coil cleaner is the right product. Bleach and harsh household cleaners aren't: they can damage the coil, and what you spray ends up in the air. Coils behind sealed panels, the blower, and the drain pan are a job for an HVAC tech.",
    },
    {
      q: "Do UV lights cure dirty sock syndrome?",
      a: "UV-C lamps at the coil can keep growth down on the surfaces they shine on, and some trade coverage recommends them. They work only at close range, need bulb replacements, and don't fix a dirty blower, a clogged drain, or leaky return ducts. Clean first, then add one if it keeps coming back.",
    },
  ],
  related: [
    {
      title: "Musty smell from the AC",
      href: "/smells/musty/ac/",
      hint: "Every other AC smell, ranked",
    },
    {
      title: "Mold in air ducts",
      href: "/smells/causes/mold-in-ducts/",
      hint: "If the smell doesn't fade",
    },
    {
      title: "Musty smell in the house",
      href: "/smells/musty/",
      hint: "Humidity and hidden damp",
    },
    {
      title: "Musty smell but no visible mold",
      href: "/smells/musty/no-visible-mold/",
      hint: "If it smells with the system off",
    },
    {
      title: "What does Freon smell like?",
      href: "/smells/causes/refrigerant-leak/",
      hint: "If it's chemical, not sour",
    },
  ],
  sources: [
    SOURCES.achrDirtySock,
    SOURCES.hvacSchoolDirtySock,
    SOURCES.energyStarMaintenance,
    SOURCES.epaMold,
  ],
  diagnose: { family: "musty", location: "hvac-vents" },
  updated: "2026-11-07",
};
