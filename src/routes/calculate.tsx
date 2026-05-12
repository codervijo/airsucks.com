import { createFileRoute, Link } from "@tanstack/react-router";
import { Calculator, Clock } from "lucide-react";

export const Route = createFileRoute("/calculate")({
  head: () => ({
    meta: [
      { title: "Air calculators — AirSucks.com" },
      { name: "description", content: "Free calculators for return air sizing, room CFM, filter pressure drop, and air changes per hour." },
      { property: "og:title", content: "Air calculators — AirSucks.com" },
      { property: "og:description", content: "Practical math for HVAC and indoor air." },
    ],
  }),
  component: CalculatePage,
});

const CALCS = [
  { title: "Return air size calculator", body: "Estimate the right return grille and duct size for a given CFM and noise target." },
  { title: "Room CFM calculator", body: "Calculate the airflow each room actually needs based on size, use, and load." },
  { title: "Filter pressure drop estimator", body: "See how MERV and face velocity affect static pressure and airflow." },
  { title: "Air changes per hour calculator", body: "Convert room volume and CFM into ACH so you can size ventilation properly." },
];

function CalculatePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:py-16">
      <div className="max-w-2xl">
        <span className="inline-flex items-center gap-1 rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
          <Calculator className="h-3 w-3" /> Calculators
        </span>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Air calculators</h1>
        <p className="mt-2 text-muted-foreground">
          Plain-English calculators for the most common air and HVAC math. We're polishing each one — drop your email on the home page to be notified.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {CALCS.map((c) => (
          <div key={c.title} className="relative rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Calculator className="h-5 w-5" />
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                <Clock className="h-3 w-3" /> Coming soon
              </span>
            </div>
            <div className="mt-4 text-lg font-semibold">{c.title}</div>
            <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
            <button
              type="button"
              disabled
              className="mt-4 inline-flex cursor-not-allowed items-center rounded-md border border-border bg-muted px-3 py-2 text-sm text-muted-foreground"
            >
              Coming soon
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-primary-soft p-6 text-center">
        <h3 className="text-lg font-semibold">Need an answer now?</h3>
        <p className="mt-1 text-sm text-muted-foreground">Run a diagnosis — we'll suggest the right next step without the math.</p>
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
