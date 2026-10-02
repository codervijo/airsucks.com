// /diagnose/smell/ — interactive smell diagnostic over the shared cause library.
// The first step renders server-side (prerendered); answers are client state.
// Presets come from ?odor=<family>&where=<location> (links from /smells/ pages).
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, RefreshCw } from "lucide-react";
import {
  EMPTY_ANSWERS,
  LOCATION_OPTIONS,
  ONLY_ME_NOTE,
  TIMING_OPTIONS,
  type Answers,
  familyLabel,
  nextAction,
  observationsFor,
  overallUrgency,
  rankCauses,
  redFlags,
} from "@/content/smells/engine";
import { FAMILIES, familyById } from "@/content/smells/reference";
import type { LocationId, ObservationId, OdorFamilyId, TimingId } from "@/content/smells/types";
import { CauseCard, SafetyPanel, UrgencyBadge } from "./blocks";

const STEPS = ["Smell", "Where", "When", "Details", "Result"] as const;
type Step = 0 | 1 | 2 | 3 | 4;

const isFamily = (v: unknown): v is OdorFamilyId => FAMILIES.some((f) => f.id === v);
const isLocation = (v: unknown): v is LocationId => LOCATION_OPTIONS.some((o) => o.id === v);

export function SmellDiagnostic({ preset }: { preset?: { odor?: string; where?: string } }) {
  const [step, setStep] = useState<Step>(0);
  const [a, setA] = useState<Answers>(EMPTY_ANSWERS);
  const topRef = useRef<HTMLDivElement>(null);

  // Keep the current step in view: on mobile the result can otherwise open
  // scrolled past its safety block.
  useEffect(() => {
    const el = topRef.current;
    if (el && el.getBoundingClientRect().top < 0) el.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [step]);

  // Apply ?odor=&where= after mount so the prerendered HTML and the first
  // client render match (no hydration mismatch).
  useEffect(() => {
    if (!preset) return;
    const family = isFamily(preset.odor) ? preset.odor : undefined;
    const location = isLocation(preset.where) ? preset.where : undefined;
    if (family) {
      setA({ ...EMPTY_ANSWERS, family, location });
      setStep(location ? 2 : 1);
    }
  }, [preset?.odor, preset?.where]); // eslint-disable-line react-hooks/exhaustive-deps

  const flags = useMemo(() => redFlags(a), [a]);
  const ranked = useMemo(() => rankCauses(a), [a]);
  const obsOptions = useMemo(() => observationsFor(a.family), [a.family]);
  const family = a.family ? familyById(a.family) : undefined;

  const canNext =
    (step === 0 && !!a.family) || (step === 1 && !!a.location) || step === 2 || step === 3;

  function toggle<K extends "timing" | "observations">(key: K, id: Answers[K][number]) {
    setA((prev) => {
      const list = prev[key] as string[];
      const next = list.includes(id) ? list.filter((x) => x !== id) : [...list, id];
      return { ...prev, [key]: next };
    });
  }

  function reset() {
    setA(EMPTY_ANSWERS);
    setStep(0);
  }

  return (
    <div ref={topRef} className="mx-auto max-w-3xl scroll-mt-20">
      <ol className="flex items-center justify-between gap-2 text-xs" aria-label="Progress">
        {STEPS.map((l, i) => (
          <li key={l} className="flex flex-1 items-center gap-2">
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-medium ${
                i < step
                  ? "bg-primary text-primary-foreground"
                  : i === step
                    ? "bg-primary-soft text-primary ring-2 ring-primary/30"
                    : "bg-muted text-muted-foreground"
              }`}
              aria-current={i === step ? "step" : undefined}
            >
              {i < step ? <Check className="h-3 w-3" aria-hidden /> : i + 1}
            </span>
            <span
              className={`hidden sm:inline ${i === step ? "text-foreground" : "text-muted-foreground"}`}
            >
              {l}
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-6 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] md:p-8">
        {step === 0 && (
          <Block
            title="What does it smell like?"
            subtitle="Pick the closest. Safety-critical smells are listed first."
          >
            <div className="grid gap-2 sm:grid-cols-2">
              {FAMILIES.map((f) => (
                <Choice
                  key={f.id}
                  active={a.family === f.id}
                  onClick={() => setA({ ...EMPTY_ANSWERS, family: f.id })}
                  label={f.label}
                  hint={f.describedAs.slice(0, 3).join(", ")}
                />
              ))}
            </div>
            {family?.safetyFirst ? (
              <p className="mt-4 rounded-xl border border-warning/50 bg-warning/10 p-3 text-sm">
                {family.safetyFirst}
              </p>
            ) : null}
          </Block>
        )}

        {step === 1 && (
          <Block
            title="Where do you notice it most?"
            subtitle="Where it's strongest, not everywhere you've smelled it."
          >
            <div className="grid gap-2 sm:grid-cols-2">
              {LOCATION_OPTIONS.map((o) => (
                <Choice
                  key={o.id}
                  active={a.location === o.id}
                  onClick={() => setA({ ...a, location: o.id })}
                  label={o.label}
                />
              ))}
            </div>
          </Block>
        )}

        {step === 2 && (
          <Block title="When does it happen?" subtitle="Optional — pick all that fit.">
            <div className="grid gap-2 sm:grid-cols-2">
              {TIMING_OPTIONS.map((o) => (
                <Choice
                  key={o.id}
                  multi
                  active={a.timing.includes(o.id)}
                  onClick={() => toggle("timing", o.id as TimingId)}
                  label={o.label}
                />
              ))}
            </div>
          </Block>
        )}

        {step === 3 && (
          <Block
            title="Anything else you've noticed?"
            subtitle="Optional — these change the ranking a lot."
          >
            <div className="grid gap-2 sm:grid-cols-2">
              {obsOptions.map((o) => (
                <Choice
                  key={o.id}
                  multi
                  active={a.observations.includes(o.id)}
                  onClick={() => toggle("observations", o.id as ObservationId)}
                  label={o.label}
                />
              ))}
            </div>
          </Block>
        )}

        {step === 4 && a.family && (
          <div className="space-y-6" aria-live="polite">
            <div>
              <div className="text-xs font-medium tracking-wide text-primary uppercase">
                Your result
              </div>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight">
                {familyLabel(a.family)} smell
              </h2>
              <div className="mt-2">
                <UrgencyBadge urgency={overallUrgency(flags, ranked)} prefix="Urgency" />
              </div>
            </div>

            {flags.map((f) => (
              <SafetyPanel
                key={f.id}
                block={f.block}
                tone={f.level === "caution" ? "caution" : "danger"}
              />
            ))}

            <div className="rounded-2xl border border-primary/30 bg-primary-soft p-4 text-sm">
              <span className="font-semibold">Next step: </span>
              {nextAction(flags, ranked)}
            </div>

            {ranked.length ? (
              <div>
                <h3 className="mb-3 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                  Likely causes, ranked for your answers
                </h3>
                <ol className="space-y-4">
                  {ranked.map((r, i) => (
                    <CauseCard
                      key={r.cause.id}
                      ranked={{ cause: r.cause.id }}
                      index={i}
                      chip={r.match}
                      because={r.because}
                    />
                  ))}
                </ol>
                <p className="mt-3 text-xs text-muted-foreground">
                  Ranking is a rules-based judgment from your answers — not a measured probability.
                  A cause listed lower can still be the one, so use the checks to confirm.
                </p>
              </div>
            ) : null}

            {a.observations.includes("only-i-smell-it") ? (
              <p className="rounded-xl bg-muted p-4 text-sm text-muted-foreground">
                {ONLY_ME_NOTE}
              </p>
            ) : null}

            {family?.page ? (
              <Link
                to={family.page}
                className="flex items-center justify-between rounded-2xl border border-border bg-card p-4 text-sm font-medium transition-colors hover:bg-muted"
              >
                Read the full guide: {family.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            ) : null}

            <div className="flex justify-center">
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
              >
                <RefreshCw className="h-4 w-4" aria-hidden /> Start over
              </button>
            </div>
          </div>
        )}

        {step < 4 && (
          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1) as Step)}
              disabled={step === 0}
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden /> Back
            </button>
            <button
              type="button"
              disabled={!canNext}
              onClick={() => setStep((s) => (s + 1) as Step)}
              className="inline-flex items-center gap-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-40"
            >
              {step === 3 ? "See likely causes" : step >= 2 ? "Continue" : "Next"}{" "}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Block({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset>
      <legend className="text-xl font-semibold tracking-tight">{title}</legend>
      {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
      <div className="mt-5">{children}</div>
    </fieldset>
  );
}

function Choice({
  active,
  onClick,
  label,
  hint,
  multi,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  hint?: string;
  multi?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex min-h-12 items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
        active
          ? "border-primary bg-primary-soft text-foreground"
          : "border-border bg-card hover:bg-muted"
      }`}
    >
      <span>
        <span className="block font-medium">{label}</span>
        {hint ? <span className="mt-0.5 block text-xs text-muted-foreground">{hint}</span> : null}
      </span>
      {multi || active ? (
        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded ${
            active ? "bg-primary text-primary-foreground" : "border border-border"
          }`}
          aria-hidden
        >
          {active ? <Check className="h-3.5 w-3.5" /> : null}
        </span>
      ) : null}
    </button>
  );
}
