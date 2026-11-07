import { createFileRoute, notFound } from "@tanstack/react-router";
import { SmellArticle } from "@/components/smells/smell-article";
import { articleJsonLd, breadcrumbJsonLd, pageHead } from "@/lib/seo";

// One route renders every /smells/<odor>/[<context>/] page from the registry
// in src/content/smells/. Unknown paths 404 (and are never prerendered).
//
// The loader fetches only this page's content (src/content/smells/load.ts,
// one chunk per page) and returns it with the causes it ranks. Prerendered
// HTML carries that loader data, so a first view hydrates without loading any
// content chunk, and no route ever bundles the whole registry (v3.F).
export const Route = createFileRoute("/smells/$")({
  loader: async ({ params }) => {
    const [{ loadSmellPage }, { breadcrumbsFor }] = await Promise.all([
      import("@/content/smells/load"),
      import("@/content/smells/nav"),
    ]);
    const loaded = await loadSmellPage(params._splat ?? "");
    if (!loaded) throw notFound();
    const { page, causes } = loaded;
    return {
      page,
      causes,
      path: page.path,
      title: page.title,
      description: page.description,
      h1: page.h1,
      updated: page.updated,
      crumbs: breadcrumbsFor(page),
    };
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageHead({
          path: loaderData.path,
          title: loaderData.title,
          description: loaderData.description,
          ogType: "article",
          jsonLd: [
            breadcrumbJsonLd(loaderData.crumbs),
            articleJsonLd({
              path: loaderData.path,
              headline: loaderData.h1,
              description: loaderData.description,
              datePublished: PUBLISHED,
              dateModified: loaderData.updated,
            }),
          ],
        })
      : {},
  component: SmellRoute,
});

/** Phase-1 launch date for the silo. */
const PUBLISHED = "2026-10-02";

function SmellRoute() {
  const { page, causes } = Route.useLoaderData();
  return <SmellArticle page={page} causes={causes} />;
}
