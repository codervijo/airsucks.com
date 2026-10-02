import { Link } from "@tanstack/react-router";

// Shared 404 view. Rendered by the root route's notFoundComponent (client-side
// misses) and by /not-found/, which is prerendered and shipped as the
// top-level 404.html (scripts/postbuild.mjs). Cloudflare Pages serves that
// file with a real 404 status. Keeping one component means the static 404
// and the hydrated app render the same markup.
export function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-16">
      <div className="max-w-md text-center">
        <p className="text-7xl font-bold text-foreground">404</p>
        <h1 className="mt-4 text-xl font-semibold text-foreground">Page not found</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved. These might help:
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Link
            to="/smells/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Household smells
          </Link>
          <Link
            to="/diagnose/"
            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            Start a diagnosis
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
