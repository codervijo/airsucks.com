// Loads one smell page's content on demand (docs/prd.md § v3.F).
//
// import.meta.glob (lazy) gives each pages/*.ts file its own chunk, so the
// route loader fetches only the page being viewed. On a prerendered page the
// loader result is dehydrated into the HTML, so first views load no content
// chunk at all; client-side navigation fetches one page chunk plus the
// shared cause library.
import { SMELL_FILES } from "./manifest.gen";
import { normalizeSmellPath } from "./nav";
import type { Cause, SmellPage } from "./types";

const modules = import.meta.glob<Record<string, unknown>>("./pages/*.ts");

export type LoadedSmellPage = {
  page: SmellPage;
  /** Every cause the page ranks, keyed by id. */
  causes: Record<string, Cause>;
};

export async function loadSmellPage(rawPath: string): Promise<LoadedSmellPage | undefined> {
  const path = normalizeSmellPath(rawPath);
  const file = SMELL_FILES[path];
  const importer = file ? modules[`./pages/${file}.ts`] : undefined;
  if (!importer) return undefined;
  const mod = await importer();
  const page = Object.values(mod).find(
    (v): v is SmellPage => typeof v === "object" && v !== null && (v as SmellPage).path === path,
  );
  if (!page) return undefined;
  const { causeById } = await import("./causes");
  const causes = Object.fromEntries(page.causes.map((r) => [r.cause, causeById(r.cause)]));
  return { page, causes };
}
