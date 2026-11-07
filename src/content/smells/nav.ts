// Client-safe smell navigation: listing, parent/child, breadcrumbs, hub
// groups. Works from manifest.gen.ts metadata only, so importing it never
// pulls page content into a bundle (docs/prd.md § v3.F).
//
// Imported (via index.ts) by vite.config.ts, so keep it free of JSX and `@/`.
import { SMELL_META } from "./manifest.gen";
import type { OdorFamilyId, SmellMeta } from "./types";

export const SMELLS_HUB_PATH = "/smells/";

const byPath = new Map(SMELL_META.map((p) => [p.path, p]));

/** Normalize "/smells/musty/room", "smells/musty/room/" etc. to the canonical key. */
export function normalizeSmellPath(raw: string): string {
  const trimmed = raw.replace(/^\/+|\/+$/g, "");
  const withPrefix = trimmed.startsWith("smells/") ? trimmed : `smells/${trimmed}`;
  return `/${withPrefix}/`;
}

export function getSmellMeta(rawPath: string): SmellMeta | undefined {
  return byPath.get(normalizeSmellPath(rawPath));
}

/** Parent page of a context page ("/smells/musty/room/" → the musty page). */
export function parentOf(page: Pick<SmellMeta, "path">): SmellMeta | undefined {
  const parts = page.path.split("/").filter(Boolean);
  if (parts.length <= 2) return undefined;
  return byPath.get(`/${parts.slice(0, -1).join("/")}/`);
}

export function childrenOf(page: Pick<SmellMeta, "path">): SmellMeta[] {
  return SMELL_META.filter((p) => parentOf(p)?.path === page.path);
}

export const CAUSE_PAGES_PREFIX = "/smells/causes/";

export function isCausePage(page: Pick<SmellMeta, "path">): boolean {
  return page.path.startsWith(CAUSE_PAGES_PREFIX);
}

/** Top-level odor pages (no parent, not a cause page), in registry order. */
export function topLevelPages(): SmellMeta[] {
  return SMELL_META.filter((p) => !parentOf(p) && !isCausePage(p));
}

/** Cause pages (v3.G), in registry order. */
export function causePages(): SmellMeta[] {
  return SMELL_META.filter(isCausePage);
}

export type Crumb = { name: string; href: string };

export function breadcrumbsFor(page: Pick<SmellMeta, "path" | "label">): Crumb[] {
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
 *  and their context children. */
export type HubGroup = {
  family: OdorFamilyId;
  heading: string;
  blurb: string;
  pages: SmellMeta[];
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
  {
    family: "sweet-chemical",
    heading: "Rotting, sweet & chemical",
    blurb: "Something died in a wall, or a solvent, glue, or refrigerant smell you can't place.",
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
    pages: SMELL_META.filter(
      (p) =>
        !parentOf(p) &&
        !isCausePage(p) &&
        (p.family === g.family || HUB_GROUP_OF[p.family] === g.family),
    ),
  }));
}

/** Deep link into /diagnose/smell/ with this page's family (and location) preselected. */
export function diagnoseHref(page: Pick<SmellMeta, "diagnose">): string {
  const q = new URLSearchParams({ odor: page.diagnose.family });
  if (page.diagnose.location) q.set("where", page.diagnose.location);
  return `/diagnose/smell/?${q.toString()}`;
}
