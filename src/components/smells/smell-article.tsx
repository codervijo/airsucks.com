import { breadcrumbsFor, childrenOf, diagnoseHref, parentOf } from "@/content/smells";
import type { SmellPage } from "@/content/smells/types";
import {
  Breadcrumbs,
  CauseCard,
  ChecksList,
  CompareTable,
  DecisionPath,
  DiagnoseCta,
  DiyStops,
  Faq,
  InPageNav,
  METHODOLOGY,
  QuickAnswer,
  RelatedGrid,
  SafetyPanel,
  Section,
  Sources,
  UrgencyBadge,
  WhoToCall,
} from "./blocks";

export function SmellArticle({ page }: { page: SmellPage }) {
  const crumbs = breadcrumbsFor(page);
  const parent = parentOf(page);
  const children = childrenOf(page);
  // Sub-pages of this page first, then curated related links (deduped).
  const related = [
    ...children.map((c) => ({ title: c.h1.split(":")[0], href: c.path, hint: c.label })),
    ...page.related,
  ].filter((l, i, all) => l.href !== page.path && all.findIndex((x) => x.href === l.href) === i);

  const nav = [
    { id: "causes", label: "Likely causes" },
    page.compare ? { id: "which-one", label: "Which one is it?" } : null,
    { id: "checks", label: "Checks" },
    { id: "who-to-call", label: "Who to call" },
    { id: "faq", label: "FAQ" },
  ].filter(Boolean) as { id: string; label: string }[];

  return (
    <article className="mx-auto max-w-4xl px-4 py-8 md:py-12">
      <Breadcrumbs crumbs={crumbs} />
      <header className="mt-4">
        <div className="flex flex-wrap items-center gap-2">
          <UrgencyBadge urgency={page.urgency} prefix="Urgency" />
          {parent ? (
            <a href={parent.path} className="text-xs text-muted-foreground hover:text-foreground">
              Part of: {parent.label}
            </a>
          ) : null}
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {page.h1}
        </h1>
        <p className="mt-2 text-xs text-muted-foreground">
          Last reviewed <time dateTime={page.updated}>{formatDate(page.updated)}</time> · Not
          medical advice
        </p>
      </header>

      <div className="mt-6 space-y-5">
        {page.safety ? <SafetyPanel block={page.safety} /> : null}
        <QuickAnswer text={page.quickAnswer} />
        <InPageNav items={nav} />
      </div>

      <Section
        id="causes"
        title="Most likely causes"
        intro="Ranked for this situation. Open any cause for checks and fixes."
      >
        <ol className="space-y-4">
          {page.causes.map((rc, i) => (
            <CauseCard key={rc.cause} ranked={rc} index={i} chip={rc.likelihood} />
          ))}
        </ol>
        <p className="mt-4 text-xs text-muted-foreground">{METHODOLOGY}</p>
      </Section>

      {page.compare ? (
        <Section id="which-one" title="Which one is it?">
          <CompareTable headers={page.compare.headers} rows={page.compare.rows} />
        </Section>
      ) : null}

      {page.decision ? (
        <Section title="Narrow it down" intro="Answer in order. Stop at the first yes.">
          <DecisionPath steps={page.decision} />
        </Section>
      ) : null}

      <Section
        id="checks"
        title="Safe checks you can do yourself"
        intro="In the order that finds the source fastest."
      >
        <ChecksList checks={page.checks} />
      </Section>

      {page.sections?.map((s) => (
        <Section key={s.heading} title={s.heading}>
          <div className="space-y-4 leading-relaxed text-foreground/90">
            {s.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Section>
      ))}

      <Section title="When DIY stops">
        <DiyStops items={page.diyStops} />
      </Section>

      <Section id="who-to-call" title="Who to call">
        <WhoToCall rows={page.whoToCall} />
      </Section>

      <div className="mt-12">
        <DiagnoseCta
          href={diagnoseHref(page)}
          label="Answer a few questions about where and when you smell it. You'll get the causes ranked for your situation."
        />
      </div>

      <Section id="faq" title="Frequently asked questions">
        <Faq items={page.faq} />
      </Section>

      {related.length ? (
        <Section title="Related smells">
          <RelatedGrid links={related} />
        </Section>
      ) : null}

      {page.sources?.length ? (
        <Section title="Sources">
          <Sources sources={page.sources} />
        </Section>
      ) : null}
    </article>
  );
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}
