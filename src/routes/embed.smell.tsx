import { useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SmellDiagnostic } from "@/components/smells/smell-diagnostic";
import {
  EMBED_ATTRIBUTION_HREF,
  EMBED_ATTRIBUTION_TEXT,
  EMBED_HEIGHT_MESSAGE,
} from "@/lib/embed";

// The framed widget (docs/prd.md § v3.D). Rendered without the site header and
// footer (SiteLayout skips them under /embed/smell/), noindex, and framable
// only on this path (public/_headers). Every link opens in a new tab so the
// host page's iframe never navigates away from the diagnostic.
export const Route = createFileRoute("/embed/smell")({
  validateSearch: (s: Record<string, unknown>): { odor?: string; where?: string } => ({
    odor: typeof s.odor === "string" ? s.odor : undefined,
    where: typeof s.where === "string" ? s.where : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Smell diagnostic widget — AirSucks.com" },
      {
        name: "description",
        content: "Embeddable version of the AirSucks home smell diagnostic, for use inside other websites.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: EmbedSmell,
});

function EmbedSmell() {
  const search = Route.useSearch();
  const root = useRef<HTMLDivElement>(null);

  // Report content height to the host page (used by /embed/resize.js).
  useEffect(() => {
    const el = root.current;
    if (!el || window.parent === window) return;
    const post = () =>
      window.parent.postMessage(
        { type: EMBED_HEIGHT_MESSAGE, height: el.getBoundingClientRect().height },
        "*",
      );
    post();
    const ro = new ResizeObserver(post);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Capture-phase so this runs before the router's own Link click handler.
  function openOutside(e: React.MouseEvent) {
    const a = (e.target as HTMLElement).closest("a");
    if (!a) return;
    const href = a.getAttribute("href");
    if (!href || href.startsWith("#")) return;
    e.preventDefault();
    e.stopPropagation();
    window.open(new URL(href, window.location.origin).toString(), "_blank", "noopener");
  }

  return (
    <div ref={root} onClickCapture={openOutside} className="bg-background px-3 py-4 text-foreground">
      <h1 className="mb-4 text-center text-xl font-semibold tracking-tight">
        What's that smell? Find the likely cause
      </h1>
      <SmellDiagnostic preset={search} />
      <p className="mt-6 text-center text-xs text-muted-foreground">
        <a href={EMBED_ATTRIBUTION_HREF} className="underline underline-offset-2">
          {EMBED_ATTRIBUTION_TEXT}
        </a>{" "}
        · Not medical advice. If you smell gas, leave and call from outside.
      </p>
    </div>
  );
}
