// Smell page registry — the one list that drives routing, prerendering, the
// sitemap, the /smells/ hub, and breadcrumbs. Adding a page = write the data
// file in pages/ and add it to SMELL_PAGES. Nothing else needs editing:
// vite.config.ts regenerates manifest.gen.ts (metadata + file map) from it.
//
// Node-side only (vite.config.ts, prerender, tests). Client code imports
// ./nav (metadata) and ./load (one page's content) instead, so a page never
// ships every other page's content (docs/prd.md § v3.F).
//
// Imported by vite.config.ts, so keep this module (and everything it imports)
// free of JSX and `@/` path aliases.
import type { SmellPage } from "./types";
import { normalizeSmellPath } from "./nav";
import { musty } from "./pages/musty";
import { mustyRoom } from "./pages/musty-room";
import { mustyBasement } from "./pages/musty-basement";
import { mustyAc } from "./pages/musty-ac";
import { mustyNoVisibleMold } from "./pages/musty-no-visible-mold";
import { mustyCloset } from "./pages/musty-closet";
import { rottenEggs } from "./pages/rotten-eggs";
import { rottenEggsWater } from "./pages/rotten-eggs-water";
import { sewage } from "./pages/sewage";
import { sewageBathroom } from "./pages/sewage-bathroom";
import { gas } from "./pages/gas";
import { gasButNoLeak } from "./pages/gas-but-no-leak";
import { skunk } from "./pages/skunk";
import { catPee } from "./pages/cat-pee";
import { dog } from "./pages/dog";
import { burningPlastic } from "./pages/burning-plastic";
import { fishy } from "./pages/fishy";
import { deadAnimal } from "./pages/dead-animal";
import { chemical } from "./pages/chemical";
// v3.G cause pages (/smells/causes/<slug>/)
import { causeWashingMachine } from "./pages/cause-washing-machine";
import { causeRefrigerantLeak } from "./pages/cause-refrigerant-leak";
import { causeMoldInDucts } from "./pages/cause-mold-in-ducts";
import { causeDirtySockSyndrome } from "./pages/cause-dirty-sock-syndrome";
import { causePlumbingVent } from "./pages/cause-plumbing-vent";
import { causeMouseUrine } from "./pages/cause-mouse-urine";
import { causeFurnaceBurningSmell } from "./pages/cause-furnace-burning-smell";
import { causePTrap } from "./pages/cause-p-trap";
import { causeSumpPump } from "./pages/cause-sump-pump";

/** Order = hub order within a family group (most-searched / most urgent first). */
export const SMELL_PAGES: SmellPage[] = [
  gas,
  rottenEggs,
  rottenEggsWater,
  gasButNoLeak,
  burningPlastic,
  fishy,
  musty,
  mustyRoom,
  mustyBasement,
  mustyAc,
  mustyNoVisibleMold,
  mustyCloset,
  sewage,
  sewageBathroom,
  catPee,
  dog,
  skunk,
  deadAnimal,
  chemical,
  causeWashingMachine,
  causeRefrigerantLeak,
  causeMoldInDucts,
  causeDirtySockSyndrome,
  causePlumbingVent,
  causeMouseUrine,
  causeFurnaceBurningSmell,
  causePTrap,
  causeSumpPump,
];

const byPath = new Map(SMELL_PAGES.map((p) => [p.path, p]));

/** Full page by any path spelling. Node/prerender/tests only — client code
 *  uses load.ts so it never bundles every page (docs/prd.md § v3.F). */
export function getSmellPage(rawPath: string): SmellPage | undefined {
  return byPath.get(normalizeSmellPath(rawPath));
}

export function smellPaths(): string[] {
  return SMELL_PAGES.map((p) => p.path);
}

export * from "./nav";
