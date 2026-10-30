import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Copy } from "lucide-react";
import { Breadcrumbs } from "@/components/smells/blocks";
import { FAMILIES } from "@/content/smells/reference";
import { EMBED_DEFAULT_HEIGHT, EMBED_PATH, embedSnippet } from "@/lib/embed";
import { breadcrumbJsonLd, pageHead } from "@/lib/seo";

// Landing page for the embeddable smell diagnostic (docs/prd.md § v3.D).
// Indexed; it's the page outreach points at. The snippet's attribution link is
// the backlink, so it's shown in the snippet and explained, not hidden.
const PATH = "/embed/";
const TITLE = "Free Smell Diagnostic Widget for Your Website";
const DESCRIPTION =
  "Add a free home smell diagnostic to your website with one copy-paste snippet. For plumbers, HVAC companies, home inspectors, and property managers.";
const CRUMBS = [
  { name: "Home", href: "/" },
  { name: "Free smell widget", href: PATH },
];

export const Route = createFileRoute("/embed/")({
  head: () =>
    pageHead({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      jsonLd: [breadcrumbJsonLd(CRUMBS)],
    }),
  component: EmbedLanding,
});

const PRESETS = FAMILIES.filter((f) => f.id !== "gas");

function EmbedLanding() {
  const [odor, setOdor] = useState("");
  const [autoResize, setAutoResize] = useState(true);
  const [copied, setCopied] = useState(false);
  const snippet = embedSnippet({ odor: odor || undefined, autoResize });

  async function copy() {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:py-12">
      <Breadcrumbs crumbs={CRUMBS} />
      <header className="mx-auto mt-4 mb-10 max-w-3xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Add a free smell diagnostic to your website
        </h1>
        <p className="mt-3 text-muted-foreground">
          Your visitors describe the smell, where it's strongest, and when it happens. The widget
          ranks the likely causes, puts gas and electrical warnings first, and tells them which
          checks to run and which trade to call. One snippet, no account, no cost.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-2">
        <section>
          <h2 className="text-2xl font-semibold tracking-tight">Get the code</h2>
          <div className="mt-4 space-y-4 rounded-2xl border border-border bg-card p-5">
            <label className="block text-sm font-medium">
              Start on a smell (optional)
              <select
                value={odor}
                onChange={(e) => setOdor(e.target.value)}
                className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">Let the visitor choose</option>
                {PRESETS.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={autoResize}
                onChange={(e) => setAutoResize(e.target.checked)}
              />
              Auto-fit the height (adds one small script)
            </label>
            <textarea
              readOnly
              value={snippet}
              rows={autoResize ? 7 : 6}
              onFocus={(e) => e.currentTarget.select()}
              className="block w-full rounded-md border border-input bg-muted/40 p-3 font-mono text-xs leading-relaxed"
              aria-label="Embed code"
            />
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {copied ? <Check className="h-4 w-4" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
              {copied ? "Copied" : "Copy the code"}
            </button>
          </div>

          <h2 className="mt-10 text-2xl font-semibold tracking-tight">Where to paste it</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground/90">
            <li>
              <strong>WordPress:</strong> add a Custom HTML block to the page or post and paste the
              code into it.
            </li>
            <li>
              <strong>Squarespace:</strong> add a Code block and paste the code.
            </li>
            <li>
              <strong>Any other site:</strong> paste it into the page's HTML where you want the
              widget to appear. If your site builder strips scripts, untick "auto-fit" and the
              widget uses a fixed {EMBED_DEFAULT_HEIGHT}px height with its own scroll.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">Live preview</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            This is exactly what your visitors see. Try it.
          </p>
          <iframe
            src={odor ? `${EMBED_PATH}?odor=${encodeURIComponent(odor)}` : EMBED_PATH}
            title="Smell diagnostic widget preview"
            className="mt-4 w-full rounded-2xl border border-border"
            style={{ height: EMBED_DEFAULT_HEIGHT }}
            loading="lazy"
          />
        </section>
      </div>

      <section className="mx-auto mt-14 max-w-3xl space-y-3 text-foreground/90">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Who it's for</h2>
        <p>
          <strong>Plumbers and HVAC companies:</strong> people searching "why does my house smell
          like sewage" or "musty smell from AC" are your future customers. The widget answers them on
          your own page, and its who-to-call guidance points them to the trade they need.
        </p>
        <p>
          <strong>Home inspectors and realtors:</strong> buyers and new owners ask about smells
          constantly. Give them a tool on your site instead of a guess.
        </p>
        <p>
          <strong>Property managers and landlords:</strong> put it on the tenant resources page.
          Many smell complaints are a dry drain trap or a dirty overflow that the tenant can fix in
          five minutes, and the real emergencies are flagged clearly.
        </p>
        <p>
          Prefer something to hand out? The{" "}
          <Link to="/smells/checklist/" className="underline underline-offset-2">
            printable house showing smell checklist
          </Link>{" "}
          is free to link to and print for clients.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl space-y-3 text-foreground/90">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">How it works</h2>
        <p>
          The widget is the same diagnostic that runs on{" "}
          <Link to="/diagnose/smell/" className="underline underline-offset-2">
            AirSucks
          </Link>
          . Answers add and remove weight from a library of known causes, from dried-out drain
          traps to water heater reactions to overheating outlets. The ranking is rules-based: the
          same answers always give the same result, and each cause shows why it ranked where it
          did. There's no AI guessing at runtime.
        </p>
        <p>
          Safety is checked before anything else. If a visitor's answers point to a possible gas
          leak, fire, or people feeling unwell, the leave-and-call steps show above the results.
          Links to full guides open in a new tab, so your page stays open.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight">Questions</h2>
        <dl className="mt-4 space-y-5">
          {FAQ.map((f) => (
            <div key={f.q}>
              <dt className="font-medium">{f.q}</dt>
              <dd className="mt-1 text-foreground/90">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}

const FAQ = [
  {
    q: "Is it really free?",
    a: "Yes. There's no account, no API key, and no usage limit. All we ask is that you keep the \"Smell diagnostic by AirSucks\" credit link under the widget.",
  },
  {
    q: "Does it track my visitors?",
    a: "No. The widget doesn't set cookies or run analytics. Answers stay in the visitor's browser and are not sent anywhere.",
  },
  {
    q: "Will it slow my page down?",
    a: "The iframe loads lazily, only when a visitor scrolls near it, so it doesn't hold up the rest of your page. The optional auto-fit script is a few lines and only resizes the widget.",
  },
  {
    q: "Can I make it start on a specific smell?",
    a: "Yes. Pick a smell above before copying the code. A plumber might start on sewage, an HVAC company on musty. Visitors can still change it.",
  },
  {
    q: "Does it work on phones?",
    a: "Yes. It fills the width it's given, up to 760px, and the layout adapts to small screens.",
  },
  {
    q: "Will the content change?",
    a: "The widget updates itself when we improve the diagnostic or add causes. You never need to re-paste the code.",
  },
];
