import { createFileRoute, notFound } from "@tanstack/react-router";
import { SmellArticle } from "@/components/smells/smell-article";
import { getSmellPage } from "@/content/smells";
import { articleJsonLd, breadcrumbJsonLd, pageHead } from "@/lib/seo";

// One route renders every /smells/<odor>/[<context>/] page from the registry
// in src/content/smells/. Unknown paths 404 (and are never prerendered).
//
// The loader imports the registry dynamically: route loaders aren't
// code-split, so a static import here would put every page's content into the
// main bundle shipped on *all* pages. The loader returns only head metadata;
// the component (its own chunk) reads the full page from the registry.
export const Route = createFileRoute("/smells/$")({
  loader: async ({ params }) => {
    const { breadcrumbsFor, getSmellPage: lookup } = await import("@/content/smells");
    const page = lookup(params._splat ?? "");
    if (!page) throw notFound();
    return {
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
  const { path } = Route.useLoaderData();
  return <SmellArticle page={getSmellPage(path)!} />;
}
