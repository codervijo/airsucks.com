import { createFileRoute } from "@tanstack/react-router";
import { NotFoundComponent } from "@/components/not-found";

// Prerendered only to become dist/client/404.html (see scripts/postbuild.mjs).
// noindex + excluded from the sitemap; nothing links here.
export const Route = createFileRoute("/not-found")({
  head: () => ({
    meta: [{ title: "Page not found — AirSucks.com" }, { name: "robots", content: "noindex" }],
  }),
  component: NotFoundComponent,
});
