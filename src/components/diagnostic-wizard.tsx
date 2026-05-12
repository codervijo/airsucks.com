import { useMemo, useState } from "react";
import { CONDITIONS, LOCATIONS, PROBLEMS, SYMPTOMS_BY_PROBLEM, diagnose, type DiagnosticResult } from "@/lib/diagnostics";
import { PartsCard, ProHelpCard } from "./diagnostic-cards";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Loader2, RefreshCw } from "lucide-react";

type Step = 0 | 1 | 2 | 3 | 4;

export function DiagnosticWizard() {
  const [step, setStep] = useState<Step>(0);
  const [problem, setProblem] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [symptom, setSymptom] = useState<string>("");
  const [conditions, setConditions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DiagnosticResult | null>(null);

  const symptomOptions = useMemo(() => SYMPTOMS_BY_PROBLEM[problem] ?? [], [problem]);

  function reset() {
    setStep(0);
    setProblem("");
    setLocation("");
    setSymptom("");
    setConditions([]);
    setResult(null);
  }

  function submit() {
    setLoading(true);
    setStep(4);
    setTimeout(() => {
      setResult(diagnose({ problem, location, symptom }));
      setLoading(false);
    }, 700);
  }

  const canNext =
    (step === 0 && problem) ||
    (step === 1 && location) ||
    (step === 2 && symptom) ||
    step === 3;

  return (
    <div className="mx-auto max-w-3xl">
      <Stepper step={step} />
      <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-8">
        {step === 0 && (
          <StepBlock title="What kind of problem are you having?" subtitle="Pick the closest match.">
            <OptionGrid
              options={PROBLEMS.map((p) => ({ id: p.id, label: `${p.icon}  ${p.label}` }))}
              value={problem}
              onChange={(v) => { setProblem(v); setSymptom(""); }}
            />
          </StepBlock>
        )}
        {step === 1 && (
          <StepBlock title="Where is the issue?" subtitle="A room, a vent, or a specific machine.">
            <OptionGrid options={LOCATIONS as unknown as { id: string; label: string }[]} value={location} onChange={setLocation} />
          </StepBlock>
        )}
        {step === 2 && (
          <StepBlock title="Describe the symptom" subtitle="What does it smell, sound, or feel like?">
            {symptomOptions.length === 0 ? (
              <EmptyState message="No symptoms for this combination — pick the closest from any list." />
            ) : (
              <OptionGrid options={symptomOptions} value={symptom} onChange={setSymptom} />
            )}
          </StepBlock>
        )}
        {step === 3 && (
          <StepBlock title="Any of these conditions apply?" subtitle="Optional — select all that fit.">
            <div className="grid gap-2 sm:grid-cols-2">
              {CONDITIONS.map((c) => {
                const active = conditions.includes(c.id);
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() =>
                      setConditions((prev) =>
                        prev.includes(c.id) ? prev.filter((x) => x !== c.id) : [...prev, c.id],
                      )
                    }
                    className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
                      active ? "border-primary bg-primary-soft text-foreground" : "border-border bg-card hover:bg-muted"
                    }`}
                  >
                    {c.label}
                    {active ? <Check className="h-4 w-4 text-primary" /> : null}
                  </button>
                );
              })}
            </div>
          </StepBlock>
        )}
        {step === 4 && (
          <ResultView loading={loading} result={result} onReset={reset} />
        )}

        {step < 4 && (
          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep((s) => (Math.max(0, s - 1) as Step))}
              disabled={step === 0}
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
            {step < 3 ? (
              <button
                type="button"
                disabled={!canNext}
                onClick={() => setStep((s) => ((s + 1) as Step))}
                className="inline-flex items-center gap-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-40"
              >
                Continue <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={submit}
                className="inline-flex items-center gap-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Get diagnosis <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Stepper({ step }: { step: number }) {
  const labels = ["Problem", "Location", "Symptom", "Conditions", "Result"];
  return (
    <ol className="flex items-center justify-between gap-2 text-xs">
      {labels.map((l, i) => {
        const active = i === step;
        const done = i < step;
        return (
          <li key={l} className="flex flex-1 items-center gap-2">
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-medium ${
                done ? "bg-primary text-primary-foreground" : active ? "bg-primary-soft text-primary ring-2 ring-primary/30" : "bg-muted text-muted-foreground"
              }`}
            >
              {done ? <Check className="h-3 w-3" /> : i + 1}
            </span>
            <span className={`hidden sm:inline ${active ? "text-foreground" : "text-muted-foreground"}`}>{l}</span>
            {i < labels.length - 1 ? <span className="ml-2 hidden h-px flex-1 bg-border sm:block" /> : null}
          </li>
        );
      })}
    </ol>
  );
}

function StepBlock({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
      <div className="mt-5">{children}</div>
    </div>
  );
}

function OptionGrid({
  options,
  value,
  onChange,
}: {
  options: { id: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {options.map((o) => {
        const active = value === o.id;
        return (
          <button
            key={o.id}
            type="button"
            onClick={() => onChange(o.id)}
            className={`rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
              active ? "border-primary bg-primary-soft text-foreground" : "border-border bg-card hover:bg-muted"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
      {message}
    </div>
  );
}

function ResultView({
  loading,
  result,
  onReset,
}: {
  loading: boolean;
  result: DiagnosticResult | null;
  onReset: () => void;
}) {
  if (loading || !result) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-16 text-muted-foreground">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
        <p className="text-sm">Analyzing your air...</p>
      </div>
    );
  }
  return (
    <div className="space-y-6">
      <div>
        <div className="text-xs font-medium uppercase tracking-wide text-primary">Likely diagnosis</div>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight">{result.title}</h2>
      </div>

      <Section title="Likely causes (ranked)">
        <ol className="space-y-2">
          {result.causes.map((c, i) => (
            <li key={c} className="flex gap-3 rounded-xl border border-border bg-card p-3 text-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-soft text-xs font-semibold text-primary">
                {i + 1}
              </span>
              <span>{c}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="DIY checks">
        <ul className="space-y-2 text-sm">
          {result.diyChecks.map((c) => (
            <li key={c} className="flex gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </Section>

      <div className="grid gap-4 md:grid-cols-2">
        <PartsCard items={result.toolsParts} />
        <ProHelpCard />
      </div>

      <Section title="Stop and call a pro if">
        <ul className="rounded-2xl border border-destructive/30 bg-destructive/5 p-5 text-sm">
          {result.callPro.map((c) => (
            <li key={c} className="flex gap-2 py-1">
              <span className="mt-0.5 text-destructive">●</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </Section>

      {result.related.length ? (
        <Section title="Related diagnostics">
          <div className="grid gap-2 sm:grid-cols-2">
            {result.related.map((r) => (
              <Link
                key={r.title}
                to={r.to}
                className="rounded-xl border border-border bg-card p-3 text-sm transition-colors hover:bg-muted"
              >
                {r.title}
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      <div className="flex justify-center pt-2">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          <RefreshCw className="h-4 w-4" /> Run another diagnosis
        </button>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">{title}</h3>
      {children}
    </div>
  );
}
