// Shared SEO head builder: title, description, canonical, Open Graph, and
// JSON-LD. Every new route builds its head here so canonicals and schema stay
// consistent (trailing slash, absolute URLs, one publisher entity).

export const SITE = "https://airsucks.com";
const BRAND = "AirSucks.com";
const ORG_ID = `${SITE}/#org`;

export const absolute = (path: string) => `${SITE}${path}`;

type JsonLd = Record<string, unknown>;

export function pageHead(opts: {
  path: string;
  title: string;
  description: string;
  jsonLd?: JsonLd[];
  ogType?: "website" | "article";
}) {
  const url = absolute(opts.path);
  const fullTitle = `${opts.title} — ${BRAND}`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: opts.description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: url },
      { property: "og:type", content: opts.ogType ?? "website" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: (opts.jsonLd ?? []).map((data) => ({
      type: "application/ld+json",
      children: JSON.stringify(data),
    })),
  };
}

export function breadcrumbJsonLd(crumbs: { name: string; href: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absolute(c.href),
    })),
  };
}

/** Article with the site as author + publisher — we don't invent people. */
export function articleJsonLd(opts: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    mainEntityOfPage: absolute(opts.path),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: { "@type": "Organization", "@id": ORG_ID, name: BRAND, url: `${SITE}/` },
    publisher: { "@type": "Organization", "@id": ORG_ID, name: BRAND, url: `${SITE}/` },
    image: `${SITE}/og.png`,
  };
}

export function webAppJsonLd(opts: { path: string; name: string; description: string }): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: opts.name,
    description: opts.description,
    url: absolute(opts.path),
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@id": ORG_ID },
  };
}
