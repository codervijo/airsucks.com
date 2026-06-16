import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Wind, Wrench, Sparkles } from "lucide-react";
import { FAQ, SymptomCard, TrustBox } from "@/components/diagnostic-cards";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AirSucks.com — Diagnose everything wrong with your air" },
      { name: "description", content: "Smells, dust, weak airflow, and machines that don't suck right. Answer a few questions and get likely causes, DIY checks, parts, and when to call a pro." },
      { property: "og:title", content: "AirSucks.com — Diagnose everything wrong with your air" },
      { property: "og:description", content: "A diagnostic engine for bad air and broken air machines." },
      { property: "og:url", content: "https://airsucks.com/" },
    ],
    links: [{ rel: "canonical", href: "https://airsucks.com/" }],
  }),
  component: Index,
});

const WHAT_SUCKS = [
  { title: "My vacuum lost suction", to: "/diagnose/vacuum" },
  { title: "My vacuum smells bad", to: "/diagnose/vacuum" },
  { title: "My room smells musty", to: "/diagnose/odor" },
  { title: "My house feels stale", to: "/diagnose/odor" },
  { title: "My vent barely blows", to: "/diagnose/airflow" },
  { title: "My room is always dusty", to: "/diagnose/airflow" },
];

const POPULAR = [
  { title: "Burning smell from vacuum", to: "/diagnose/vacuum" },
  { title: "Musty bedroom", to: "/diagnose/odor" },
  { title: "One room hotter than the rest", to: "/diagnose/airflow" },
  { title: "Bathroom smells after rain", to: "/diagnose/odor" },
  { title: "Vacuum smells like dog", to: "/diagnose/vacuum" },
  { title: "Filter choking airflow", to: "/diagnose/airflow" },
];

const FAQS = [
  { q: "How does AirSucks diagnose my air?", a: "You answer 4 short questions about the problem, location, symptom, and conditions. We map your answers to the most common root causes and surface DIY checks, parts, and pro-help signals." },
  { q: "Is this medical advice?", a: "No. AirSucks helps with air quality and air-moving machines, not health. If you have health symptoms, see a clinician." },
  { q: "Do I need to create an account?", a: "No. The diagnostic wizard is free and doesn't require signup." },
  { q: "What if my problem isn't listed?", a: "Pick the closest match. The wizard always returns a sensible general diagnosis with safe DIY checks." },
];

function Index() {
  return (
    <div>
      <Hero />
      <Section id="what-sucks" title="What sucks?" subtitle="Pick what's bothering you and we'll diagnose it.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {WHAT_SUCKS.map((c) => (
            <SymptomCard key={c.title} title={c.title} to={c.to} />
          ))}
        </div>
      </Section>

      <FlowPreview />
      <Pillars />

      <Section title="Popular diagnostics" subtitle="The questions other people are answering right now.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {POPULAR.map((c) => (
            <SymptomCard key={c.title} title={c.title} to={c.to} />
          ))}
        </div>
      </Section>

      <Section>
        <TrustBox />
      </Section>

      <EmailCapture />

      <Section title="Frequently asked questions">
        <FAQ items={FAQS} />
      </Section>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60" style={{ background: "var(--gradient-hero)" }}>
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
            <Wind className="h-3 w-3" /> Diagnostic engine for your air
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Diagnose everything wrong with your air.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Smells, dust, weak airflow, and machines that don't suck right. Answer a few questions and get likely causes, DIY checks, parts/tools, and when to call a pro.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/diagnose"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Start diagnosis <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#what-sucks"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium transition-colors hover:bg-muted"
            >
              Browse symptoms
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowPreview() {
  const steps = [
    { n: 1, t: "Choose the problem", d: "Smell, airflow, dust, or machine." },
    { n: 2, t: "Answer a few conditions", d: "Where, when, and what changed." },
    { n: 3, t: "Get likely causes", d: "Ranked by how common they are." },
    { n: 4, t: "Fix, buy, or call a pro", d: "DIY steps, parts, and red flags." },
  ];
  return (
    <Section title="How the diagnosis works" subtitle="Four short steps. About 60 seconds.">
      <div className="grid gap-3 md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl border border-border bg-card p-5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-soft text-sm font-semibold text-primary">
              {s.n}
            </div>
            <div className="mt-3 font-medium">{s.t}</div>
            <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Pillars() {
  const pillars = [
    { icon: Wrench, title: "Machines", body: "Vacuums, purifiers, fans, dehumidifiers — diagnose what broke and why." },
    { icon: Sparkles, title: "Air quality", body: "Odors, dust, stale air, humidity — find the source instead of masking it." },
    { icon: Wind, title: "Airflow", body: "Vents, ducts, filters, return air, room balance — make air move where it should." },
  ];
  return (
    <Section title="Three pillars" subtitle="Everything we diagnose fits into one of these.">
      <div className="grid gap-4 md:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title} className="rounded-2xl border border-border bg-card p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <p.icon className="h-5 w-5" />
            </span>
            <div className="mt-4 text-lg font-semibold">{p.title}</div>
            <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function EmailCapture() {
  return (
    <Section>
      <div className="overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-12">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Get the home air diagnosis checklist</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A printable PDF covering odors, dust, airflow, and machine checks. No spam, unsubscribe anytime.
            </p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); (e.currentTarget as HTMLFormElement).reset(); }}
            className="flex flex-col gap-2 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none ring-primary/30 transition-shadow focus:ring-2"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Send checklist
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      {title ? (
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
          {subtitle ? <p className="mt-2 text-muted-foreground">{subtitle}</p> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
