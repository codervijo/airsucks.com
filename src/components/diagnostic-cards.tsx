import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function SymptomCard({
  to,
  title,
  hint,
}: {
  to: string;
  title: string;
  hint?: string;
}) {
  return (
    <Link
      to={to}
      className="group flex items-center justify-between rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
    >
      <div>
        <div className="font-medium text-card-foreground">{title}</div>
        {hint ? <div className="mt-1 text-sm text-muted-foreground">{hint}</div> : null}
      </div>
      <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
    </Link>
  );
}

export function PartsCard({ items }: { items: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="text-sm font-semibold">Parts/tools that may help</div>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map((i) => (
          <li key={i} className="flex items-center justify-between rounded-md bg-muted/60 px-3 py-2">
            <span>{i}</span>
            <span className="text-xs text-muted-foreground">Find it</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-muted-foreground">
        AirSucks may earn a commission on qualifying purchases. We only suggest parts that match the diagnosis.
      </p>
    </div>
  );
}

export function ProHelpCard() {
  return (
    <div className="rounded-2xl border border-primary/20 bg-primary-soft p-5">
      <div className="text-sm font-semibold text-foreground">This may be a job for a pro</div>
      <p className="mt-1 text-sm text-muted-foreground">
        HVAC, appliance repair, or mold remediation specialists can diagnose deeper issues safely.
      </p>
      <button
        type="button"
        className="mt-3 inline-flex cursor-not-allowed items-center rounded-md border border-primary/30 bg-background px-3 py-2 text-sm font-medium text-primary opacity-80"
        disabled
      >
        Find local pros (coming soon)
      </button>
    </div>
  );
}

export function TrustBox() {
  return (
    <div className="rounded-2xl border border-warning/40 bg-warning/10 p-5 text-sm">
      <div className="font-semibold">Safety first — not medical advice</div>
      <p className="mt-1 text-muted-foreground">
        AirSucks helps you diagnose air and machine issues. We don't provide medical guidance.
        If you smell gas, see smoke, or suspect carbon monoxide, leave the area and call your utility or 911.
      </p>
    </div>
  );
}

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div
      className="space-y-3"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      {items.map((it) => (
        <details
          key={it.q}
          className="group rounded-2xl border border-border bg-card p-5 open:shadow-[var(--shadow-card)]"
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium" itemProp="name">
            {it.q}
            <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
          </summary>
          <div
            className="mt-2 text-sm text-muted-foreground"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <span itemProp="text">{it.a}</span>
          </div>
        </details>
      ))}
    </div>
  );
}
