import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/learn")({
  head: () => ({
    meta: [
      { title: "Learn — AirSucks.com" },
      { name: "description", content: "Short, practical guides on indoor air, HVAC, and the machines that move air around your home." },
      { property: "og:title", content: "Learn — AirSucks.com" },
      { property: "og:description", content: "Plain-English guides on air quality, airflow, and air machines." },
      { property: "og:url", content: "https://airsucks.com/learn/" },
    ],
    links: [{ rel: "canonical", href: "https://airsucks.com/learn/" }],
  }),
  component: LearnPage,
});

const TOPICS = [
  { title: "What MERV rating actually means", body: "And why a higher number isn't always better." },
  { title: "Why your HVAC filter affects every room", body: "Static pressure, airflow, and the wrong filter trap." },
  { title: "Humidity 101", body: "The 30–50% rule and what happens outside it." },
  { title: "Vacuum filtration explained", body: "Bag, cyclone, HEPA — what catches what." },
  { title: "Return air, plainly", body: "Why returns matter as much as supplies." },
  { title: "When to call HVAC vs appliance repair", body: "A quick decision tree." },
];

function LearnPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Learn</h1>
        <p className="mt-2 text-muted-foreground">
          Short, practical guides — no fluff. We're publishing the first set soon.
        </p>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {TOPICS.map((t) => (
          <div key={t.title} className="rounded-2xl border border-border bg-card p-5">
            <div className="font-medium">{t.title}</div>
            <p className="mt-1 text-sm text-muted-foreground">{t.body}</p>
            <span className="mt-3 inline-flex rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
              Coming soon
            </span>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-primary-soft p-6 text-center">
        <h3 className="text-lg font-semibold">Want to skip the reading?</h3>
        <p className="mt-1 text-sm text-muted-foreground">Run a diagnosis and we'll only explain what's relevant to your problem.</p>
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
