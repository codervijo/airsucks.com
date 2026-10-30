// Embeddable smell diagnostic (docs/prd.md § v3.D). Pure helpers shared by the
// /embed/ landing page and the tests. Keep free of JSX.
//
// The attribution link is deliberately OUTSIDE the iframe: a link inside the
// frame lives on airsucks.com's own document and is never a backlink for us.
// Branded anchor text, not a keyword anchor (operator decision, v3.D).

export const EMBED_ORIGIN = "https://airsucks.com";
export const EMBED_PATH = "/embed/smell/";
export const EMBED_RESIZE_SCRIPT = "/embed/resize.js";
export const EMBED_ATTRIBUTION_HREF = `${EMBED_ORIGIN}/diagnose/smell/`;
export const EMBED_ATTRIBUTION_TEXT = "Smell diagnostic by AirSucks";
/** postMessage type the framed widget sends with its content height. */
export const EMBED_HEIGHT_MESSAGE = "airsucks:height";
export const EMBED_DEFAULT_HEIGHT = 760;

export type EmbedOptions = {
  /** Preselect an odor family (OdorFamilyId), e.g. "musty". */
  odor?: string;
  /** Include the optional auto-resize script line. */
  autoResize?: boolean;
  height?: number;
};

export function embedSrc(opts: Pick<EmbedOptions, "odor"> = {}): string {
  const q = opts.odor ? `?${new URLSearchParams({ odor: opts.odor }).toString()}` : "";
  return `${EMBED_ORIGIN}${EMBED_PATH}${q}`;
}

/** The copy-paste HTML a site owner drops into their page. */
export function embedSnippet(opts: EmbedOptions = {}): string {
  const height = opts.height ?? EMBED_DEFAULT_HEIGHT;
  const lines = [
    `<iframe src="${embedSrc(opts)}" title="${EMBED_ATTRIBUTION_TEXT}" data-airsucks-embed width="100%" height="${height}" style="border:0;max-width:760px;width:100%" loading="lazy"></iframe>`,
    `<p style="font-size:14px;margin:4px 0 0"><a href="${EMBED_ATTRIBUTION_HREF}">${EMBED_ATTRIBUTION_TEXT}</a></p>`,
  ];
  if (opts.autoResize) {
    lines.push(`<script async src="${EMBED_ORIGIN}${EMBED_RESIZE_SCRIPT}"></script>`);
  }
  return lines.join("\n");
}
