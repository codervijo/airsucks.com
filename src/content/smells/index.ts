// Smell page registry — the one list that drives routing, prerendering, the
// sitemap, the /smells/ hub, and breadcrumbs. Adding a page = write the data
// file in pages/ and add it to SMELL_PAGES. Nothing else needs editing.
//
// Imported by vite.config.ts, so keep this module (and everything it imports)
// free of JSX and `@/` path aliases.
import type { OdorFamilyId, SmellPage } from "./types";
import { musty } from "./pages/musty";
import { mustyRoom } from "./pages/musty-room";
import { mustyBasement } from "./pages/musty-basement";
import { mustyAc } from "./pages/musty-ac";
import { mustyNoVisibleMold } from "./pages/musty-no-visible-mold";
import { rottenEggs } from "./pages/rotten-eggs";
import { sewage } from "./pages/sewage";
import { gas } from "./pages/gas";
import { gasButNoLeak } from "./pages/gas-but-no-leak";
import { skunk } from "./pages/skunk";
import { catPee } from "./pages/cat-pee";
import { dog } from "./pages/dog";
import { burningPlastic } from "./pages/burning-plastic";

/** Order = hub order within a family group (most-searched / most urgent first). */
export const SMELL_PAGES: SmellPage[] = [
  gas,
  rottenEggs,
  gasButNoLeak,
  burningPlastic,
  musty,
  mustyRoom,
  mustyBasement,
  mustyAc,
  mustyNoVisibleMold,
  sewage,
  catPee,
  dog,
  skunk,
];

export const SMELLS_HUB_PATH = "/smells/";

const byPath = new Map(SMELL_PAGES.map((p) => [p.path, p]));

/** Normalize "/smells/musty/room", "smells/musty/room/" etc. to the canonical key. */
export function normalizeSmellPath(raw: string): string {
  const trimmed = raw.replace(/^\/+|\/+$/g, "");
  const withPrefix = trimmed.startsWith("smells/") ? trimmed : `smells/${trimmed}`;
  return `/${withPrefix}/`;
}

export function getSmellPage(rawPath: string): SmellPage | undefined {
  return byPath.get(normalizeSmellPath(rawPath));
}

export function smellPaths(): string[] {
  return SMELL_PAGES.map((p) => p.path);
}

/** Parent page of a context page ("/smells/musty/room/" → the musty page). */
export function parentOf(page: SmellPage): SmellPage | undefined {
  const parts = page.path.split("/").filter(Boolean);
  if (parts.length <= 2) return undefined;
  return byPath.get(`/${parts.slice(0, -1).join("/")}/`);
}

export function childrenOf(page: SmellPage): SmellPage[] {
  return SMELL_PAGES.filter((p) => parentOf(p)?.path === page.path);
}

export type Crumb = { name: string; href: string };

export function breadcrumbsFor(page: SmellPage): Crumb[] {
  const crumbs: Crumb[] = [
    { name: "Home", href: "/" },
    { name: "Smells", href: SMELLS_HUB_PATH },
  ];
  const parent = parentOf(page);
  if (parent) crumbs.push({ name: parent.label, href: parent.path });
  crumbs.push({ name: page.label, href: page.path });
  return crumbs;
}

/** Hub taxonomy: families in display order, each with its top-level page(s)
 *  and their context children. Families without pages yet are still listed
 *  (they route into the diagnostic) so the taxonomy is complete. */
export type HubGroup = {
  family: OdorFamilyId;
  heading: string;
  blurb: string;
  pages: SmellPage[];
};

const HUB_ORDER: { family: OdorFamilyId; heading: string; blurb: string }[] = [
  {
    family: "gas",
    heading: "Gas, rotten eggs & sulfur",
    blurb:
      "Rule out a gas leak first, then work through sewer gas, water heaters, and the other sulfur sources.",
  },
  {
    family: "burning",
    heading: "Burning & electrical",
    blurb: "Hot plastic, burning dust, and fishy smells that turn out to be electrical.",
  },
  {
    family: "musty",
    heading: "Musty & mildew",
    blurb:
      "Damp, earthy, wet-towel smells. Almost always moisture somewhere — the question is where.",
  },
  {
    family: "sewage",
    heading: "Sewage & drains",
    blurb: "Sewer gas from traps, vents, toilets, and lines.",
  },
  {
    family: "pet-urine",
    heading: "Pets, urine & animals",
    blurb: "Cat-pee and dog smells — including when you don't have a pet — and skunks.",
  },
];

/** Families that share a hub group with another family's pages. */
const HUB_GROUP_OF: Partial<Record<OdorFamilyId, OdorFamilyId>> = {
  "rotten-egg": "gas",
  skunk: "pet-urine",
  fishy: "burning",
};

export function hubGroups(): HubGroup[] {
  return HUB_ORDER.map((g) => ({
    ...g,
    pages: SMELL_PAGES.filter(
      (p) => !parentOf(p) && (p.family === g.family || HUB_GROUP_OF[p.family] === g.family),
    ),
  }));
}

/** Deep link into /diagnose/smell/ with this page's family (and location) preselected. */
export function diagnoseHref(page: SmellPage): string {
  const q = new URLSearchParams({ odor: page.diagnose.family });
  if (page.diagnose.location) q.set("where", page.diagnose.location);
  return `/diagnose/smell/?${q.toString()}`;
}
