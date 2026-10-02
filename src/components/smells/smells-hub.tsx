import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { childrenOf, hubGroups } from "@/content/smells";
import { FAMILIES } from "@/content/smells/reference";
import { Breadcrumbs, CompareTable, DiagnoseCta, SafetyPanel, Section } from "./blocks";
import { GAS_SAFETY } from "@/content/smells/reference";

// "It smells like… → usually → start here" — the hub's own content, not a
// link dump: it teaches the taxonomy in one scan.
const SMELL_FINDER = {
  headers: ["It smells like…", "Usually means", "Start here"],
  rows: [
    [
      "Rotten eggs or sulfur",
      "Gas (rule out first), sewer gas, or the water heater",
      "Rotten-egg smell",
    ],
    ["Natural gas or propane", "A possible leak — leave and call", "Smell gas?"],
    [
      "Burning plastic, or fishy",
      "An overheating electrical part or appliance",
      "Burning plastic smell",
    ],
    ["Damp basement, mildew, wet towels", "Moisture and mold or mildew somewhere", "Musty smell"],
    ["Sewer or toilet", "A dry trap, failed toilet seal, or blocked vent", "Sewage smell"],
    ["Cat pee or ammonia", "Old pet urine, mice, or — sometimes — wiring", "Cat-pee smell"],
    ["Skunk", "A skunk outside — or gas, so check that first", "Skunk smell"],
  ],
};

export function SmellsHub() {
  const groups = hubGroups();
  const unpaged = FAMILIES.filter((f) => !f.page);
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:py-12">
      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Smells", href: "/smells/" },
        ]}
      />
      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          What's that smell? Household odors, diagnosed
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Every smell in a house has a source, and most can be found in an afternoon. Pick what it
          smells like. Each guide ranks the likely causes, shows you how to tell them apart, and
          tells you when to stop and call someone.
        </p>
      </header>

      <div className="mt-8">
        <SafetyPanel
          block={{ ...GAS_SAFETY, title: "Smell gas or something burning? Read this first" }}
        />
      </div>

      <Section title="Quick smell finder">
        <CompareTable headers={SMELL_FINDER.headers} rows={SMELL_FINDER.rows} />
      </Section>

      <Section title="Browse by smell">
        <div className="space-y-8">
          {groups.map((g) => (
            <div key={g.family}>
              <h3 className="text-lg font-semibold">{g.heading}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{g.blurb}</p>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {g.pages.map((p) => {
                  const kids = childrenOf(p);
                  return (
                    <li key={p.path} className="rounded-2xl border border-border bg-card p-4">
                      <Link
                        to={p.path}
                        className="group flex items-center justify-between gap-2 font-medium"
                      >
                        <span>{p.h1.split(":")[0]}</span>
                        <ChevronRight
                          className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary"
                          aria-hidden
                        />
                      </Link>
                      <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                      {kids.length ? (
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {kids.map((k) => (
                            <li key={k.path}>
                              <Link
                                to={k.path}
                                className="inline-flex rounded-full bg-muted px-3 py-1 text-sm transition-colors hover:bg-primary-soft hover:text-primary"
                              >
                                {k.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
          {unpaged.length ? (
            <div>
              <h3 className="text-lg font-semibold">Something else</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                No dedicated guide yet. The diagnostic covers these:
              </p>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {unpaged.map((f) => (
                  <li key={f.id}>
                    <a
                      href={`/diagnose/smell/?odor=${f.id}`}
                      className="group flex items-center justify-between rounded-2xl border border-border bg-card p-4 text-sm transition-colors hover:bg-muted/40"
                    >
                      <span>
                        <span className="block font-medium">{f.label}</span>
                        <span className="text-muted-foreground">{f.describedAs.join(", ")}</span>
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </Section>

      <Section title="How these guides work">
        <div className="space-y-3 text-foreground/90">
          <p>
            Each guide follows the same diagnostic order a good tradesperson would: safety first,
            then the most common cause, then the evidence that separates it from its look-alikes,
            then the cheapest test. Causes are ranked by how often they explain the smell in
            ordinary homes. That ranking is our judgment from trade guidance, and we label it that
            way rather than inventing percentages.
          </p>
          <p>
            We don't sell air fresheners, and we don't give medical advice. If a smell comes with
            people feeling unwell, get fresh air first.
          </p>
        </div>
      </Section>

      <div className="mt-12">
        <DiagnoseCta
          href="/diagnose/smell/"
          label="Describe the smell, where it is, and when it happens. You'll get likely causes and safe checks in about a minute."
        />
      </div>
    </div>
  );
}
