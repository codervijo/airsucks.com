import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import {
  EMBED_ATTRIBUTION_HREF,
  EMBED_ATTRIBUTION_TEXT,
  embedSnippet,
  embedSrc,
} from "../lib/embed";

describe("embed snippet", () => {
  it("puts a branded, followed attribution link outside the iframe", () => {
    const s = embedSnippet();
    const link = `<a href="${EMBED_ATTRIBUTION_HREF}">${EMBED_ATTRIBUTION_TEXT}</a>`;
    expect(s).toContain(link);
    expect(s.indexOf(link)).toBeGreaterThan(s.indexOf("</iframe>"));
    expect(s).not.toMatch(/nofollow|sponsored|ugc/);
  });

  it("points at the absolute widget URL and only adds the script when asked", () => {
    expect(embedSrc()).toBe("https://airsucks.com/embed/smell/");
    expect(embedSrc({ odor: "musty" })).toBe("https://airsucks.com/embed/smell/?odor=musty");
    expect(embedSnippet()).not.toContain("<script");
    expect(embedSnippet({ autoResize: true })).toContain(
      '<script async src="https://airsucks.com/embed/resize.js"></script>',
    );
  });

  it("lets only the widget path be framed", () => {
    const h = readFileSync("public/_headers", "utf8");
    expect(h).toMatch(/\/embed\/smell\/\*\n {2}! X-Frame-Options/);
    expect(h.match(/frame-ancestors/g)).toHaveLength(1);
    expect(h).toMatch(/\/\*\n(?: {2}.*\n)* {2}X-Frame-Options: DENY/);
  });
});
