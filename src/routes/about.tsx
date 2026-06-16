import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AirSucks.com" },
      { name: "description", content: "AirSucks.com is a diagnostic-first tool for figuring out why your air is bad and your air machines are misbehaving." },
      { property: "og:title", content: "About — AirSucks.com" },
      { property: "og:description", content: "Why we built a diagnostic engine for air." },
      { property: "og:url", content: "https://airsucks.com/about/" },
    ],
    links: [{ rel: "canonical", href: "https://airsucks.com/about/" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">About AirSucks</h1>
      <div className="mt-6 space-y-5 text-muted-foreground">
        <p>
          AirSucks.com is a diagnostic-first site. When something about your air is wrong — a smell,
          weak airflow, dust that won't quit, or a vacuum that lost its bite — we help you figure out
          why before you buy anything.
        </p>
        <p>
          The internet is full of generic "best vacuum 2024" lists and HVAC ads. What it's missing is a
          calm tool that asks a few questions and points you at the most likely cause. That's what we're
          building.
        </p>
        <p>
          We're not doctors. We don't claim to fix your health. We do try to be honest about the limits
          of DIY and tell you when to stop and call a professional.
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-primary-soft p-6 text-center">
        <h3 className="text-lg font-semibold text-foreground">Try the diagnostic</h3>
        <p className="mt-1 text-sm text-muted-foreground">It takes about a minute.</p>
        <Link
          to="/diagnose"
          className="mt-4 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Start diagnosis
        </Link>
      </div>
    </div>
  );
}
