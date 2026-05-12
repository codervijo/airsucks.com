import { createFileRoute } from "@tanstack/react-router";
import { DiagnosticWizard } from "@/components/diagnostic-wizard";
import { TrustBox } from "@/components/diagnostic-cards";

export const Route = createFileRoute("/diagnose/")({
  head: () => ({
    meta: [
      { title: "Diagnose your air — AirSucks.com" },
      { name: "description", content: "Run a free 60-second diagnosis on smells, dust, weak airflow, or a misbehaving air machine." },
      { property: "og:title", content: "Diagnose your air — AirSucks.com" },
      { property: "og:description", content: "Answer 4 questions and get a practical, ranked diagnosis." },
    ],
  }),
  component: DiagnosePage,
});

function DiagnosePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:py-16">
      <div className="mb-8 text-center">
        <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
          Diagnostic wizard
        </span>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">What's wrong with your air?</h1>
        <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
          Four short steps. Get likely causes, DIY checks, the parts you may need, and when to stop and call a pro.
        </p>
      </div>
      <DiagnosticWizard />
      <div className="mt-10">
        <TrustBox />
      </div>
    </div>
  );
}
