import { createFileRoute, Link } from "@tanstack/react-router";
import { childrenOf, hubGroups } from "@/content/smells";
import { breadcrumbJsonLd, pageHead } from "@/lib/seo";

// v2.G: the guides index. Built from the smell registry, so it can't go stale
// or advertise guides that don't exist. Deliberately a compact link index
// (no per-guide descriptions) so it doesn't near-duplicate the /smells/ hub.
export const Route = createFileRoute("/learn")({
  head: () =>
    pageHead({
      path: "/learn/",
      title: "Guides to Home Air & Smell Problems",
      description:
        "Every AirSucks guide in one place: household smells from musty to gas, plus the interactive diagnostics for smells, vacuums, and airflow.",
      jsonLd: [
        breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Guides", href: "/learn/" },
        ]),
      ],
    }),
  component: LearnPage,
});

const TOOLS = [
  {
    to: "/diagnose/smell/",
    title: "Smell diagnostic",
    hint: "What it smells like, where, and when",
  },
  { to: "/diagnose/vacuum/", title: "Vacuum problems", hint: "Suction, smells, brush, dust" },
  { to: "/diagnose/airflow/", title: "Airflow problems", hint: "Weak vents, hot or cold rooms" },
  { to: "/diagnose/", title: "General diagnostic", hint: "Not sure where to start" },
];

function LearnPage() {
  const groups = hubGroups();
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Guides</h1>
        <p className="mt-2 text-muted-foreground">
          Every guide on the site, grouped by problem. Each one ranks the likely causes, separates
          dangerous situations from routine ones, and tells you when DIY stops.
        </p>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Smells in the house</h2>
        <div className="mt-5 grid gap-6 md:grid-cols-2">
          {groups.map((g) => (
            <div key={g.family}>
              <h3 className="font-semibold">{g.heading}</h3>
              <ul className="mt-2 space-y-1.5 text-sm">
                {g.pages.map((p) => (
                  <li key={p.path}>
                    <Link to={p.path} className="text-primary underline-offset-2 hover:underline">
                      {p.h1.split(":")[0]}
                    </Link>
                    {childrenOf(p).length ? (
                      <ul className="mt-1.5 ml-4 space-y-1 border-l border-border pl-3">
                        {childrenOf(p).map((c) => (
                          <li key={c.path}>
                            <Link
                              to={c.path}
                              className="text-primary underline-offset-2 hover:underline"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight">Interactive diagnostics</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {TOOLS.map((t) => (
            <li key={t.to}>
              <Link
                to={t.to}
                className="block rounded-2xl border border-border bg-card p-4 transition-colors hover:bg-muted"
              >
                <span className="block font-medium">{t.title}</span>
                <span className="mt-0.5 block text-sm text-muted-foreground">{t.hint}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight">How these guides are written</h2>
        <div className="mt-3 space-y-3 text-foreground/90">
          <p>
            Causes are ranked by how often they explain a problem in ordinary homes, using plumbing,
            HVAC, electrical, and building-science guidance. We label rankings as judgments rather
            than dressing them up as statistics. Where a public agency publishes guidance, such as
            the EPA on mold and humidity or the CPSC on carbon monoxide, we link it.
          </p>
          <p>
            Safety comes first on every guide: anything that could be gas, fire, or electrical gets
            a separate "act now" block before the troubleshooting. We don't give medical advice.
          </p>
        </div>
      </section>
    </div>
  );
}
