import { useRef } from "react";
import { Link, Outlet } from "@tanstack/react-router";
import { Menu, Wind, X } from "lucide-react";

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  const links = [
    { to: "/diagnose/", label: "Diagnose" },
    { to: "/smells/", label: "Smells" },
    { to: "/learn/", label: "Guides" },
    { to: "/about/", label: "About" },
  ] as const;
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Wind className="h-4 w-4" />
          </span>
          <span className="text-base tracking-tight">
            AirSucks<span className="text-primary">.com</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm text-foreground bg-muted" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/diagnose/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Start diagnosis
          </Link>
          <MobileMenu links={links} />
        </div>
      </div>
    </header>
  );
}

/** Phone-width nav: a native <details> disclosure, so the links are in the
 *  prerendered HTML and the menu works before hydration. Closes on navigation. */
function MobileMenu({ links }: { links: readonly { to: string; label: string }[] }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const close = () => ref.current?.removeAttribute("open");
  return (
    <details ref={ref} className="group relative md:hidden">
      <summary
        aria-label="Menu"
        className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-md border border-border bg-background [&::-webkit-details-marker]:hidden"
      >
        <Menu className="h-5 w-5 group-open:hidden" aria-hidden />
        <X className="hidden h-5 w-5 group-open:block" aria-hidden />
      </summary>
      <nav
        aria-label="Main"
        className="absolute right-0 mt-2 w-56 rounded-xl border border-border bg-card p-2 shadow-lg"
      >
        <ul>
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                onClick={close}
                className="block rounded-md px-3 py-2.5 text-sm text-foreground hover:bg-muted"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border/60 bg-muted/30">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 md:grid-cols-5">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Wind className="h-4 w-4" />
            </span>
            AirSucks.com
          </div>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Diagnose everything wrong with your air. Practical, plain-English answers.
          </p>
        </div>
        <FooterCol
          title="Diagnose"
          links={[
            { to: "/diagnose/", label: "All diagnostics" },
            { to: "/diagnose/vacuum/", label: "Vacuum" },
            { to: "/diagnose/smell/", label: "Smell diagnostic" },
            { to: "/diagnose/airflow/", label: "Airflow" },
          ]}
        />
        <FooterCol
          title="Smells"
          links={[
            { to: "/smells/", label: "All smells" },
            { to: "/smells/musty/", label: "Musty smell" },
            { to: "/smells/rotten-eggs/", label: "Rotten eggs" },
            { to: "/smells/sewage/", label: "Sewage" },
            { to: "/smells/gas/", label: "Smell gas?" },
            { to: "/smells/burning-plastic/", label: "Burning plastic" },
          ]}
        />
        <FooterCol title="Guides" links={[{ to: "/learn/", label: "All guides" }]} />
        <FooterCol title="Company" links={[{ to: "/about/", label: "About" }]} />
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} AirSucks.com — Not medical advice. Always follow safety
        instructions.
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <div className="mb-3 text-sm font-semibold">{title}</div>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="transition-colors hover:text-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
