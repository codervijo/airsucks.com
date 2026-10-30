import { SOURCES } from "../reference";
import type { SmellPage } from "../types";

// Location variant of /smells/musty/. /smells/musty/room/ covers the closet as
// one of several bedroom spots; this page goes deep on closets: why they hold
// damp, the closet-specific sources (shared bathroom wall, exterior wall,
// storage), and getting the smell out of the clothes.
export const mustyCloset: SmellPage = {
  path: "/smells/musty/closet/",
  family: "musty",
  label: "Closet",
  title: "Musty Smell in Closet? Find the Damp, Then Fix It",
  description:
    "Closet smells musty and the clothes do too? Find the damp spot, fix it, clean the closet so the smell stays gone, and rescue the clothes inside.",
  h1: "How to get rid of a musty smell in a closet (and out of the clothes in it)",
  targets: [
    "how to get rid of musty smell in closet",
    "how to get rid of closet smell",
    "musty smell in closet",
    "why do the clothes in my closet smell stale",
    "remove musty smell from clothes without washing",
    "how to keep clothes from smelling musty in closet",
  ],
  quickAnswer:
    "A musty closet means moisture is building up in a small, dark space with no airflow, and mildew is growing on the wall, the floor, or the things stored there. Common sources are a closet on a cold outside wall, a wall shared with a bathroom or plumbing, damp clothes or shoes put away, and storage boxes that soaked up humidity. Empty the closet, find where the damp is, and fix that first. Then clean the surfaces, wash or air out everything that smells, and add airflow or a dehumidifier so it doesn't come back. Odor absorbers alone only cover it up.",
  urgency: "routine",
  causes: [
    {
      cause: "closet-condensation",
      likelihood: "most common",
      note: "A closet on an exterior wall, packed tight with clothes and the door kept shut. The wall stays cold, moisture condenses on it, and mildew grows behind the hanging clothes.",
    },
    {
      cause: "stored-items",
      likelihood: "common",
      note: "Cardboard boxes, old luggage, shoes, and bags of clothes on the closet floor. Cardboard and fabric absorb moisture and hold the smell.",
    },
    {
      cause: "hidden-leak",
      likelihood: "common",
      note: "Closets that share a wall with a bathroom, kitchen, or laundry, or that sit under a bathroom or a roof valley. A slow drip inside the wall shows up as a musty closet long before a stain appears.",
    },
    {
      cause: "high-humidity",
      likelihood: "common",
      note: "When the whole house is humid, closets smell first because their air never moves.",
    },
    {
      cause: "wet-carpet-pad",
      likelihood: "less common",
      note: "Carpeted closets after a spill, a pet accident, a leak, or carpet cleaning that didn't dry.",
    },
  ],
  compare: {
    headers: ["What you find", "Likely source", "Fix"],
    rows: [
      [
        "Dark spots or a damp feel on the back wall; closet is on an outside wall",
        "Condensation",
        "Clean, add airflow, keep a gap behind clothes",
      ],
      [
        "Wall shared with a bathroom or plumbing; stain or soft drywall low down",
        "Slow leak",
        "Find and fix the leak first",
      ],
      [
        "Smell strongest in the boxes, bags, or shoes on the floor",
        "Stored items",
        "Empty, dry out, switch to plastic bins",
      ],
      [
        "Every closet in the house smells; windows fog up",
        "House-wide humidity",
        "Dehumidify the house",
      ],
      [
        "Carpet on the closet floor smells when you press your nose to it",
        "Wet carpet pad",
        "Dry or replace the pad",
      ],
      [
        "Clothes smell stale but the closet itself doesn't",
        "Clothes put away damp or not quite clean",
        "Rewash, dry fully, then store",
      ],
    ],
  },
  decision: [
    {
      question: "Is there visible mold covering a large area, or wet or crumbling drywall?",
      yes: "Stop cleaning and get it inspected. That's a leak or a bigger moisture problem.",
      href: "/smells/musty/no-visible-mold/",
      no: "Keep going.",
    },
    {
      question: "Does the closet share a wall with a bathroom, kitchen, laundry, or water heater?",
      yes: "Check that wall first for a slow leak: stains, soft spots, or damp near the floor.",
      no: "Keep going.",
    },
    {
      question: "Is the closet on an outside wall, and is the back wall cold or damp to the touch?",
      yes: "Condensation. Clean it, pull the clothes off the wall, and get air moving.",
      no: "Keep going.",
    },
    {
      question: "Do other closets and rooms smell musty too?",
      yes: "The whole house is too humid. Start with the main musty-smell page.",
      href: "/smells/musty/",
      no: "It's the closet's contents. Empty it and work through the steps below.",
    },
  ],
  checks: [
    {
      title: "Empty it completely",
      how: "Take everything out, including the floor. You can't find the damp spot with clothes in the way, and half the time the source is a box, a bag, or a pair of shoes in the back corner.",
    },
    {
      title: "Smell and touch the walls, low and high",
      how: "With the closet empty, put your nose near each wall and corner, then press your palm flat against them. A spot that's colder, damp, or soft, or that smells stronger, is your source. Bottom corners of an outside wall are the usual place.",
    },
    {
      title: "Check what's on the other side",
      how: "Look at what's behind each closet wall: a shower, a toilet, a washer, a water heater, or the outside. Check that room for leaks, and look for stains or bubbling paint at the base of the shared wall. A closet under a bathroom should have its ceiling checked too.",
    },
    {
      title: "Measure the humidity",
      how: "An inexpensive hygrometer left in the closet overnight with the door closed tells you whether it's damper than the room it opens into. EPA recommends keeping indoor humidity below 60%, ideally between 30% and 50%. A closet well above the room is a closet that needs airflow or a dehumidifier.",
    },
    {
      title: "Sort the contents by smell",
      how: "As things come out, make three piles: smells fine, smells musty (wash), and can't be washed (leather, suede, wool coats, shoes, boxes). It's the 'can't be washed' pile that usually keeps the smell going after you think you've fixed it.",
    },
  ],
  sections: [
    {
      heading: "Why closets get musty when the room doesn't",
      body: [
        "A closet is a small box with a door that's usually shut, packed with fabric, and often built against an outside wall. Air from the heating or cooling system barely reaches it, so it stays colder than the room in winter and more humid in summer. Clothes pressed against a cold outside wall trap moisture right where it condenses. Mildew only needs damp, darkness, and something to feed on, and dust, fabric fibers, and cardboard are plenty.",
        "That's why the fix is mostly about air, not scent. A closet that gets some airflow and stays a little warmer stops growing mildew, and the smell stops with it.",
      ],
    },
    {
      heading: "Cleaning the closet so the smell doesn't come back",
      body: [
        "Vacuum the floor, corners, and shelves first to get the dust and loose spores out. Then scrub hard surfaces with detergent and water, which is what EPA recommends for mold on hard surfaces, and let everything dry fully with the door open and a fan running before anything goes back in. If the wall had spots, prime it with a mildew-resistant or stain-blocking primer, but only after it's cleaned and completely dry. Paint over mold just peels.",
        "Small areas of mildew on hard surfaces are a normal DIY clean. EPA guidance is that a homeowner can usually handle mold covering less than about 10 square feet; anything larger, or mold that keeps coming back, means there's an ongoing moisture source to find first.",
      ],
    },
    {
      heading: "Getting the musty smell out of clothes",
      body: [
        "Washable clothes need a proper wash to get rid of mildew, not just a fragrance. Wash in the warmest water the label allows, add a cup of white vinegar to the rinse or use an oxygen-based bleach if the fabric allows it, and dry completely, ideally in the sun or on a full dryer cycle. Don't put anything back in the closet even slightly damp. Damp clothes are a common way to restart the problem.",
        "For things you can't wash, or when you need to freshen something without washing it: hang it outside in the sun and breeze for an afternoon, which does more than any spray. A light mist of diluted white vinegar, left to air-dry, takes the edge off. Steaming helps on heavy fabrics. Leather, suede, and wool coats that really smell may need a professional cleaner. Shoes can be stuffed with newspaper or cedar shavings and left in a dry, airy spot for a few days.",
      ],
    },
    {
      heading: "Keeping it from coming back",
      body: [
        "Leave a few inches between the clothes and the back wall, especially on an outside wall. Swap a solid door for a louvered one, or leave the door open overnight a few times a week. Replace solid shelves with wire shelving if the closet stays damp. Move storage off the floor into lidded plastic bins instead of cardboard.",
        "For a closet that stays damp, a moisture absorber (calcium chloride tubs or rechargeable silica gel units) helps in a small space. A small dehumidifier is better for a walk-in. Cedar blocks and sachets add a pleasant smell but don't remove moisture, so they only work in a closet that's already dry.",
      ],
    },
    {
      heading: "Typical closets, including one that wasn't the closet",
      body: [
        "A bedroom closet on the north side of the house, packed full, door always shut: dark speckling on the back wall behind the winter coats, and every jacket smelled. After cleaning the wall, washing what could be washed, airing the rest, and pulling the rail forward a few inches off the wall, it stayed fresh through the next winter.",
        "A hall closet that smelled no matter what was in it: it shared a wall with the guest bathroom. The base of the wall was slightly soft, and the shower valve behind it had been dripping inside the wall for months. Cleaning would never have fixed it. The plumber's repair and drying out the wall did.",
        "The one that wasn't the closet at all: a 'musty closet' that turned out to be clothes put away straight out of a dryer that wasn't fully drying them, because its vent was partly blocked. Every load came out slightly damp. Cleaning the dryer vent fixed both the closet and the dryer.",
      ],
    },
  ],
  diyStops: [
    "Wet, soft, or crumbling drywall, or a stain spreading from a shared bathroom or plumbing wall.",
    "Mold covering more than about 10 square feet, or mold that returns after cleaning.",
    "A ceiling stain in a closet under a bathroom or the roof.",
    "Leather, suede, or tailored wool that still smells after airing out.",
  ],
  whoToCall: [
    {
      trade: "plumber",
      when: "The closet shares a wall with plumbing and you find damp or a stain.",
    },
    {
      trade: "mold-remediation",
      when: "Mold covers a large area, or keeps coming back after cleaning.",
    },
    {
      trade: "water-damage",
      when: "The wall or floor is wet from a leak and needs drying out properly.",
    },
    { trade: "diy", when: "Condensation, stored items, cleaning, and airflow fixes." },
  ],
  faq: [
    {
      q: "What can I put in a closet that smells musty?",
      a: "Once the damp source is fixed, a moisture absorber (calcium chloride or silica gel) or a small dehumidifier does the most. Activated charcoal absorbs odors. Baking soda helps a little. Cedar and sachets add a smell but don't remove moisture, so they won't stop mildew in a damp closet.",
    },
    {
      q: "Does a musty smell in the closet automatically mean mold?",
      a: "Usually it means mildew or mold has started growing somewhere, even if you can't see it: on the back wall, behind clothes, or on stored boxes and shoes. Sometimes it's just damp fabric that hasn't grown anything yet. Either way, the cause is moisture, and drying the closet out is the fix.",
    },
    {
      q: "Why do the clothes in my closet smell stale?",
      a: "Clothes that aren't worn for a while absorb the closet's air, and if that air is still and slightly damp, they pick up a stale, musty smell. Clothes put away not quite dry, or worn once and hung back up, make it worse. More airflow, a gap between hangers, and only storing clean, fully dry clothes fixes it.",
    },
    {
      q: "How do I get a musty smell out of clothes without washing them?",
      a: "Hang them outside in sun and breeze for a few hours, which works better than any spray. A light mist of diluted white vinegar left to air-dry, steaming, or a tumble in the dryer with a dry towel on low heat can freshen them. If the smell is mildew in the fibers, it'll come back until the item is properly washed or dry-cleaned.",
    },
    {
      q: "Should I keep the closet door open?",
      a: "Opening it regularly helps a lot in a closet that tends to get damp, because it lets the room's air in. If you can't leave it open, a louvered door, a gap under the door, or a small fan in the closet a few hours a day all do the same job.",
    },
  ],
  related: [
    { title: "Musty smell in the house", href: "/smells/musty/", hint: "If more than one room smells" },
    {
      title: "Musty smell in one room",
      href: "/smells/musty/room/",
      hint: "Bed, carpet, windows",
    },
    {
      title: "Musty smell but no visible mold",
      href: "/smells/musty/no-visible-mold/",
      hint: "Hidden leaks",
    },
    {
      title: "Musty smell in the basement",
      href: "/smells/musty/basement/",
      hint: "Below-grade closets",
    },
  ],
  sources: [SOURCES.epaMold, SOURCES.epaMoldCleanup],
  diagnose: { family: "musty", location: "one-room" },
  updated: "2026-10-29",
};
