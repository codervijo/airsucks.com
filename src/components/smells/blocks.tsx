// Reusable rendering blocks for the /smells/ silo and the smell diagnostic.
// Pure presentation over the typed data in src/content/smells/.
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronRight,
  ExternalLink,
  PhoneCall,
} from "lucide-react";
import { causeById } from "@/content/smells/causes";
import { TRADES } from "@/content/smells/reference";
import type {
  DecisionStep,
  LinkRef,
  RankedCause,
  SafetyBlock,
  SourceRef,
  TradeId,
  Urgency,
} from "@/content/smells/types";
import type { Crumb } from "@/content/smells";

// ─── Urgency ────────────────────────────────────────────────────────────────

const URGENCY_STYLE: Record<Urgency, { label: string; className: string }> = {
  emergency: { label: "Act now", className: "bg-destructive text-destructive-foreground" },
  urgent: { label: "Same day", className: "bg-warning text-foreground" },
  soon: { label: "Within days", className: "bg-primary-soft text-primary" },
  routine: { label: "When convenient", className: "bg-muted text-muted-foreground" },
};

export function UrgencyBadge({ urgency, prefix }: { urgency: Urgency; prefix?: string }) {
  const s = URGENCY_STYLE[urgency];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${s.className}`}
    >
      {prefix ? `${prefix}: ` : ""}
      {s.label}
    </span>
  );
}

const LIKELIHOOD_STYLE: Record<string, string> = {
  "most common": "bg-primary text-primary-foreground",
  common: "bg-primary-soft text-primary",
  "less common": "bg-muted text-muted-foreground",
  rare: "bg-muted text-muted-foreground",
  "Strong match": "bg-primary text-primary-foreground",
  Possible: "bg-primary-soft text-primary",
  "Less likely": "bg-muted text-muted-foreground",
};

export function LikelihoodChip({ value }: { value: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${
        LIKELIHOOD_STYLE[value] ?? "bg-muted text-muted-foreground"
      }`}
    >
      {value}
    </span>
  );
}

// ─── Navigation ─────────────────────────────────────────────────────────────

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1">
              {last ? (
                <span aria-current="page" className="text-foreground">
                  {c.name}
                </span>
              ) : (
                <Link to={c.href} className="hover:text-foreground">
                  {c.name}
                </Link>
              )}
              {!last ? <ChevronRight className="h-3 w-3" aria-hidden /> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function InPageNav({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav aria-label="On this page" className="-mx-4 overflow-x-auto px-4">
      <ul className="flex gap-2 text-sm whitespace-nowrap">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              className="inline-flex rounded-full border border-border bg-card px-3 py-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ─── Sections ───────────────────────────────────────────────────────────────

export function Section({
  id,
  title,
  intro,
  children,
}: {
  id?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-12 scroll-mt-20">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {intro ? <p className="mt-2 text-muted-foreground">{intro}</p> : null}
      <div className="mt-5">{children}</div>
    </section>
  );
}

export function QuickAnswer({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-primary/30 bg-primary-soft p-5 md:p-6">
      <div className="text-xs font-semibold tracking-wide text-primary uppercase">Short answer</div>
      <p className="mt-2 text-base leading-relaxed text-foreground">{text}</p>
    </div>
  );
}

export function SafetyPanel({
  block,
  tone = "danger",
}: {
  block: SafetyBlock;
  tone?: "danger" | "caution";
}) {
  const danger = tone === "danger";
  return (
    <aside
      role="note"
      aria-label={block.title}
      className={`rounded-2xl border-2 p-5 md:p-6 ${
        danger ? "border-destructive/60 bg-destructive/5" : "border-warning/60 bg-warning/10"
      }`}
    >
      <div className="flex items-center gap-2">
        <AlertTriangle
          className={`h-5 w-5 ${danger ? "text-destructive" : "text-foreground"}`}
          aria-hidden
        />
        <h2 className="text-lg font-semibold">{block.title}</h2>
      </div>
      <div className="mt-4 grid gap-5 md:grid-cols-2">
        <div>
          <div className="text-sm font-semibold">Stop troubleshooting if:</div>
          <ul className="mt-2 space-y-1.5 text-sm">
            {block.when.map((w) => (
              <li key={w} className="flex gap-2">
                <span className={danger ? "text-destructive" : "text-foreground"} aria-hidden>
                  ●
                </span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Do this:</div>
          <ol className="mt-2 space-y-1.5 text-sm">
            {block.actions.map((a, i) => (
              <li key={a} className="flex gap-2">
                <span className="font-semibold">{i + 1}.</span>
                <span>{a}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      {block.note ? <p className="mt-4 text-sm text-muted-foreground">{block.note}</p> : null}
    </aside>
  );
}

export function CauseCard({
  ranked,
  index,
  chip,
  because,
}: {
  ranked: RankedCause | { cause: string; note?: string };
  index: number;
  chip: string;
  because?: string[];
}) {
  const c = causeById(ranked.cause);
  const trade = TRADES[c.trade];
  return (
    <li className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
      <div className="flex items-start gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-soft text-sm font-semibold text-primary">
          {index + 1}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold">{c.name}</h3>
            <LikelihoodChip value={chip} />
            {c.urgency !== "routine" ? <UrgencyBadge urgency={c.urgency} /> : null}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{ranked.note ?? c.summary}</p>
          {because && because.length ? (
            <p className="mt-2 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">Why it's here:</span>{" "}
              {because.join(" · ")}
            </p>
          ) : null}
          <div className="mt-3 text-sm">
            <div className="font-medium">Points to this:</div>
            <ul className="mt-1 space-y-1">
              {c.signs.map((s) => (
                <li key={s} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <details className="group mt-3 rounded-xl bg-muted/50 p-3 text-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              Check it, fix it, who to call
              <ChevronRight
                className="h-4 w-4 transition-transform group-open:rotate-90"
                aria-hidden
              />
            </summary>
            <div className="mt-3 space-y-3">
              <div>
                <div className="font-medium">Safe checks</div>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  {c.checks.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-medium">Fix</div>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  {c.fixes.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <p>
                <span className="font-medium">DIY stops here:</span> {c.diyLimit}
              </p>
              <p>
                <span className="font-medium">Who fixes it:</span> {trade.name}
              </p>
              {c.page ? (
                <Link
                  to={c.page}
                  className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
                >
                  More on this <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              ) : null}
            </div>
          </details>
        </div>
      </div>
    </li>
  );
}

export function CompareTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="-mx-4 overflow-x-auto px-4">
      <table className="w-full min-w-[32rem] border-separate border-spacing-0 overflow-hidden rounded-2xl border border-border text-sm">
        <thead className="bg-muted/60 text-left">
          <tr>
            {headers.map((h) => (
              <th key={h} scope="col" className="px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.join("|")} className="bg-card">
              {r.map((cell, i) =>
                i === 0 ? (
                  <th
                    key={i}
                    scope="row"
                    className="border-t border-border px-4 py-3 text-left font-medium"
                  >
                    {cell}
                  </th>
                ) : (
                  <td key={i} className="border-t border-border px-4 py-3 text-muted-foreground">
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DecisionPath({ steps }: { steps: DecisionStep[] }) {
  return (
    <ol className="space-y-3">
      {steps.map((s, i) => (
        <li key={s.question} className="rounded-2xl border border-border bg-card p-4">
          <div className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background">
              {i + 1}
            </span>
            <div className="text-sm">
              <div className="font-medium text-foreground">{s.question}</div>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                <div className="rounded-lg bg-primary-soft px-3 py-2">
                  <span className="font-semibold text-primary">Yes → </span>
                  {s.yes}
                  {s.href ? (
                    <>
                      {" "}
                      <Link
                        to={s.href}
                        className="font-medium text-primary underline-offset-2 hover:underline"
                      >
                        Go there
                      </Link>
                    </>
                  ) : null}
                </div>
                {s.no ? (
                  <div className="rounded-lg bg-muted px-3 py-2">
                    <span className="font-semibold">No → </span>
                    {s.no}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function ChecksList({ checks }: { checks: { title: string; how: string }[] }) {
  return (
    <ol className="space-y-3">
      {checks.map((c, i) => (
        <li key={c.title} className="flex gap-3 rounded-2xl border border-border bg-card p-4">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-soft text-xs font-semibold text-primary">
            {i + 1}
          </span>
          <div className="text-sm">
            <h3 className="font-medium">{c.title}</h3>
            <p className="mt-1 text-muted-foreground">{c.how}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function DiyStops({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 rounded-2xl border border-destructive/30 bg-destructive/5 p-5 text-sm">
      {items.map((x) => (
        <li key={x} className="flex gap-2">
          <span className="text-destructive" aria-hidden>
            ●
          </span>
          <span>{x}</span>
        </li>
      ))}
    </ul>
  );
}

export function WhoToCall({ rows }: { rows: { trade: TradeId; when: string }[] }) {
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {rows.map((r) => {
        const t = TRADES[r.trade];
        return (
          <li
            key={r.trade + r.when}
            className="rounded-2xl border border-border bg-card p-4 text-sm"
          >
            <div className="flex items-center gap-2 font-semibold">
              <PhoneCall className="h-4 w-4 text-primary" aria-hidden />
              {t.name}
            </div>
            <p className="mt-1">{r.when}</p>
            <p className="mt-1 text-xs text-muted-foreground">{t.does}</p>
          </li>
        );
      })}
    </ul>
  );
}

export function RelatedGrid({ links }: { links: LinkRef[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((l) => (
        <li key={l.href}>
          <Link
            to={l.href}
            className="group flex h-full items-center justify-between rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-muted/40"
          >
            <span>
              <span className="block font-medium">{l.title}</span>
              {l.hint ? (
                <span className="mt-0.5 block text-sm text-muted-foreground">{l.hint}</span>
              ) : null}
            </span>
            <ChevronRight
              className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((it) => (
        <details key={it.q} className="group rounded-2xl border border-border bg-card p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
            <h3 className="text-base">{it.q}</h3>
            <ChevronRight
              className="h-4 w-4 shrink-0 transition-transform group-open:rotate-90"
              aria-hidden
            />
          </summary>
          <p className="mt-2 text-sm text-muted-foreground">{it.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Sources({ sources }: { sources: SourceRef[] }) {
  return (
    <ul className="space-y-1 text-sm">
      {sources.map((s) => (
        <li key={s.url}>
          <a
            href={s.url}
            rel="noopener"
            target="_blank"
            className="inline-flex items-center gap-1 text-primary underline-offset-2 hover:underline"
          >
            {s.title} <ExternalLink className="h-3 w-3" aria-hidden />
          </a>{" "}
          <span className="text-muted-foreground">— {s.publisher}</span>
        </li>
      ))}
    </ul>
  );
}

export function DiagnoseCta({ href, label }: { href: string; label: string }) {
  return (
    <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:flex-row sm:items-center">
      <div>
        <div className="font-semibold">Still not sure which one it is?</div>
        <p className="mt-1 text-sm text-muted-foreground">{label}</p>
      </div>
      <a
        href={href}
        className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Run the smell diagnostic <ArrowRight className="h-4 w-4" aria-hidden />
      </a>
    </div>
  );
}

export const METHODOLOGY =
  "How we rank causes: by how often each one explains this smell in ordinary homes, according to plumbing, HVAC, electrical, and building-science guidance, adjusted for the context on this page. The labels are judgments, not measured statistics. Anything dangerous that can't be ruled out (gas, fire, electrical) is covered in the safety box at the top of the page, whatever its rank.";
