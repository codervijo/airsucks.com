import { createFileRoute, Link } from "@tanstack/react-router";
import { Printer } from "lucide-react";
import { Breadcrumbs, Faq, Sources } from "@/components/smells/blocks";
import {
  ASK_INSPECTOR,
  ASK_SELLER,
  CANT_SMELL,
  CHECKLIST_AREAS,
  MASKING_SIGNS,
} from "@/content/smells/checklist";
import { SOURCES } from "@/content/smells/reference";
import { articleJsonLd, breadcrumbJsonLd, pageHead } from "@/lib/seo";

// v3.E — printable house-showing smell checklist (docs/prd.md § v3.E). A link
// asset for inspectors, realtors, and buyer guides. Print styles hide the site
// chrome (SiteLayout uses print:hidden) and the on-screen-only blocks below.
const PATH = "/smells/checklist/";
const TITLE = "House Showing Smell Checklist (Free, Printable)";
const DESCRIPTION =
  "A free printable checklist for house showings: what to sniff for in each room, what each smell usually means, how sellers mask smells, and what to ask.";
const UPDATED = "2026-10-30";
const CRUMBS = [
  { name: "Home", href: "/" },
  { name: "Smells", href: "/smells/" },
  { name: "Showing checklist", href: PATH },
];

export const Route = createFileRoute("/smells/checklist")({
  head: () =>
    pageHead({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      ogType: "article",
      jsonLd: [
        breadcrumbJsonLd(CRUMBS),
        articleJsonLd({
          path: PATH,
          headline: "House showing smell checklist",
          description: DESCRIPTION,
          datePublished: UPDATED,
          dateModified: UPDATED,
        }),
      ],
    }),
  component: ChecklistPage,
});

const FAQ = [
  {
    q: "Should I walk away from a house that smells musty?",
    a: "Not automatically. A musty smell means moisture somewhere. It can be a cheap fix, like a dehumidifier or a gutter, or an expensive one, like water coming through the foundation. Note where it's strongest, ask the seller about water history, and have the inspector take moisture readings there before you decide.",
  },
  {
    q: "Can a home inspector tell what a smell is?",
    a: "Inspectors note smells and look for their causes: leaks, damp, drain and vent problems, pet damage, and the condition of the HVAC. Tell them exactly where you noticed something. Some causes need a specialist, like a sewer camera scope or a mold assessment.",
  },
  {
    q: "Is it a red flag if the house smells strongly of air freshener?",
    a: "Not by itself. Plenty of sellers use them for showings. It's worth a closer look when the scent is concentrated in one room, a basement, or a closet, or when there's fresh paint or new flooring in the same spot. Come back for a second showing at a different time of day if you can.",
  },
  {
    q: "What smells are deal-breakers?",
    a: "Very few, as long as you know the cause and the cost before you commit. A gas smell needs a utility check before anything else. Sewage smells, persistent damp, smoke, and pet urine can all be fixed, but they range from a few dollars to major work. That's why finding the source matters more than the smell itself.",
  },
];

function ChecklistPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:py-12 print:max-w-none print:p-0 print:text-[11pt]">
      <div className="print:hidden">
        <Breadcrumbs crumbs={CRUMBS} />
      </div>

      <header className="mt-4 mb-8 print:mt-0 print:mb-4">
        <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl print:text-2xl">
          House showing smell checklist
        </h1>
        <p className="mt-3 text-muted-foreground print:text-black">
          Your nose is one of the best inspection tools you bring to a showing, but only for the
          first few minutes, before it adjusts. Use this room by room: what to check, what it
          usually means, and where to read more. Print it or save it as a PDF and bring it with you.
        </p>
        <button
          type="button"
          onClick={() => window.print()}
          className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 print:hidden"
        >
          <Printer className="h-4 w-4" aria-hidden /> Print or save as PDF
        </button>
        <p className="mt-2 hidden text-xs print:block">
          Address: ______________________________ Date: ____________ Time: ________
        </p>
      </header>

      <div className="space-y-8 print:space-y-4">
        {CHECKLIST_AREAS.map((area) => (
          <section
            key={area.id}
            id={area.id}
            className="rounded-2xl border border-border bg-card p-5 print:break-inside-avoid print:rounded-none print:border-0 print:border-t print:p-0 print:pt-3"
          >
            <h2 className="text-xl font-semibold tracking-tight print:text-base">
              {area.heading}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground print:text-black">{area.why}</p>
            <ul className="mt-4 space-y-3 print:mt-2 print:space-y-1.5">
              {area.items.map((it) => (
                <li key={it.check} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-1 inline-block h-4 w-4 shrink-0 rounded border border-foreground/50 print:border-black"
                  />
                  <div>
                    <div className="font-medium">{it.check}</div>
                    <div className="text-sm text-muted-foreground print:text-black">
                      {it.means}{" "}
                      {it.href ? (
                        <Link
                          to={it.href}
                          className="underline underline-offset-2 print:hidden"
                        >
                          Read the guide
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="mt-10 print:mt-4 print:break-inside-avoid">
        <h2 className="text-xl font-semibold tracking-tight print:text-base">
          Signs a smell is being covered up
        </h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          {MASKING_SIGNS.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-muted-foreground print:text-black">
          None of these proves anything on its own. If you see two or three together, book a second
          showing at a different time of day, and point the inspector at those spots.
        </p>
      </section>

      <section className="mt-10 print:mt-4 print:break-inside-avoid">
        <h2 className="text-xl font-semibold tracking-tight print:text-base">
          What your nose can't check
        </h2>
        <ul className="mt-3 space-y-2">
          {CANT_SMELL.map((c) => (
            <li key={c.item}>
              <span className="font-medium">{c.item}:</span> {c.detail}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10 grid gap-8 md:grid-cols-2 print:mt-4 print:grid-cols-2 print:gap-4">
        <section className="print:break-inside-avoid">
          <h2 className="text-xl font-semibold tracking-tight print:text-base">Ask the seller</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            {ASK_SELLER.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
        <section className="print:break-inside-avoid">
          <h2 className="text-xl font-semibold tracking-tight print:text-base">
            Ask your inspector
          </h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            {ASK_INSPECTOR.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-10 print:mt-4 print:break-inside-avoid">
        <h2 className="text-xl font-semibold tracking-tight print:text-base">Notes</h2>
        <div className="mt-2 hidden h-28 border border-black print:block" />
        <p className="mt-2 text-sm text-muted-foreground print:hidden">
          The printed version has space here for your notes from the showing.
        </p>
      </section>

      <div className="print:hidden">
        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight">How to use it at a showing</h2>
          <div className="mt-3 space-y-3 text-foreground/90">
            <p>
              Do the first-breath check at the door before anything else, then follow the order on
              the page: kitchen, bathrooms, bedrooms, basement, systems, outside. Smell low, near
              floors, baseboards, and drains, because most smells are strongest there.
            </p>
            <p>
              If you notice something, don't try to diagnose it on the spot. Write down exactly
              where and when, ask the seller the matching question, and give the location to your
              inspector. Later, the linked guide for that smell explains the likely causes and what
              fixing each one involves.
            </p>
            <p>
              Not sure what a smell is? The{" "}
              <Link to="/diagnose/smell/" className="underline underline-offset-2">
                smell diagnostic
              </Link>{" "}
              takes about a minute and ranks the likely causes.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight">Questions buyers ask</h2>
          <div className="mt-4">
            <Faq items={FAQ} />
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-border bg-muted/40 p-5 text-sm">
          <h2 className="text-base font-semibold">Share or link to this checklist</h2>
          <p className="mt-1 text-muted-foreground">
            Inspectors, agents, and buyer guides are welcome to link to this page or hand out
            printed copies. Please don't re-host it. Link to{" "}
            <span className="font-mono">airsucks.com/smells/checklist/</span> so readers always
            get the current version.
          </p>
        </section>

        <div className="mt-10">
          <Sources sources={[SOURCES.epaRadon, SOURCES.cpscCo]} />
        </div>
      </div>

      <p className="mt-6 hidden text-xs print:block">
        AirSucks.com house showing smell checklist · airsucks.com/smells/checklist/ · Not a substitute
        for a professional inspection. If you smell gas, leave and call the gas utility from
        outside.
      </p>
    </div>
  );
}
