import { createFileRoute, Link } from "@tanstack/react-router";
import { SmellDiagnostic } from "@/components/smells/smell-diagnostic";
import { Breadcrumbs } from "@/components/smells/blocks";
import { SMELL_PAGES, parentOf } from "@/content/smells";
import { breadcrumbJsonLd, pageHead, webAppJsonLd } from "@/lib/seo";

const PATH = "/diagnose/smell/";
const TITLE = "Smell Diagnostic: What's That Smell in My House?";
const DESCRIPTION =
  "Answer four quick questions — what it smells like, where, and when — and get the likely causes ranked, safe checks to run, and when to call a pro.";
const CRUMBS = [
  { name: "Home", href: "/" },
  { name: "Diagnose", href: "/diagnose/" },
  { name: "Smell diagnostic", href: PATH },
];

export const Route = createFileRoute("/diagnose/smell")({
  validateSearch: (s: Record<string, unknown>): { odor?: string; where?: string } => ({
    odor: typeof s.odor === "string" ? s.odor : undefined,
    where: typeof s.where === "string" ? s.where : undefined,
  }),
  head: () =>
    pageHead({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      jsonLd: [
        breadcrumbJsonLd(CRUMBS),
        webAppJsonLd({ path: PATH, name: "AirSucks smell diagnostic", description: DESCRIPTION }),
      ],
    }),
  component: SmellDiagnosePage,
});

function SmellDiagnosePage() {
  const search = Route.useSearch();
  const guides = SMELL_PAGES.filter((p) => !parentOf(p));
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:py-12">
      <Breadcrumbs crumbs={CRUMBS} />
      <header className="mx-auto mt-4 mb-8 max-w-3xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          What's that smell? Diagnose it in about a minute
        </h1>
        <p className="mt-3 text-muted-foreground">
          Tell us what it smells like, where it's strongest, and when it happens. We'll rank the
          likely causes, flag anything urgent, and give you safe checks to confirm it.
        </p>
      </header>

      <SmellDiagnostic preset={search} />

      <section className="mx-auto mt-14 max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight">How this diagnostic works</h2>
        <div className="mt-4 space-y-3 text-foreground/90">
          <p>
            Every answer adds or removes weight from a library of known causes: dried-out drain
            traps, water heater reactions, damp basements, AC drain lines, overheating outlets, and
            dozens more. The ranking is deterministic. The same answers always give the same result,
            and every cause shows why it was ranked where it is.
          </p>
          <p>
            Safety comes first. If your answers point at a possible gas leak, fire, or people
            feeling unwell, that warning shows above the ranking. A smell can't tell you about
            carbon monoxide, because CO has no smell, so keep CO alarms on every level of your home.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight">Or go straight to a guide</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {guides.map((g) => (
            <li key={g.path}>
              <Link
                to={g.path}
                className="block rounded-xl border border-border bg-card px-4 py-3 text-sm transition-colors hover:bg-muted"
              >
                {g.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
