import { Link } from "@tanstack/react-router";
import { FAQ, SymptomCard } from "./diagnostic-cards";

export type CategoryConfig = {
  title: string;
  intro: string;
  cards: { title: string; hint?: string }[];
  faqs: { q: string; a: string }[];
  related: { title: string; to: "/diagnose/vacuum" | "/diagnose/odor" | "/diagnose/airflow" | "/diagnose" }[];
  slug: string;
};

export function CategoryPage({ config }: { config: CategoryConfig }) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:py-16">
      <nav className="text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span className="mx-1">/</span>
        <Link to="/diagnose" className="hover:text-foreground">Diagnose</Link>
        <span className="mx-1">/</span>
        <span className="capitalize text-foreground">{config.slug}</span>
      </nav>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{config.title}</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">{config.intro}</p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {config.cards.map((c) => (
          <SymptomCard key={c.title} title={c.title} hint={c.hint} to="/diagnose" />
        ))}
      </div>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">Frequently asked questions</h2>
        <FAQ items={config.faqs} />
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">Related diagnostics</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {config.related.map((r) => (
            <Link key={r.title} to={r.to} className="rounded-2xl border border-border bg-card p-4 text-sm transition-colors hover:bg-muted">
              {r.title}
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-12 rounded-2xl border border-border bg-primary-soft p-6 text-center">
        <h3 className="text-lg font-semibold">Not sure which one fits?</h3>
        <p className="mt-1 text-sm text-muted-foreground">Run the full diagnostic — it takes about a minute.</p>
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
