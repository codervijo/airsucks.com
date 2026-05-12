import { Link, Outlet } from "@tanstack/react-router";
import { Wind } from "lucide-react";

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
    { to: "/diagnose", label: "Diagnose" },
    { to: "/calculate", label: "Calculate" },
    { to: "/learn", label: "Learn" },
    { to: "/about", label: "About" },
  ] as const;
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Wind className="h-4 w-4" />
          </span>
          <span className="text-base tracking-tight">AirSucks<span className="text-primary">.com</span></span>
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
        <Link
          to="/diagnose"
          className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
        >
          Start diagnosis
        </Link>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border/60 bg-muted/30">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
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
        <FooterCol title="Diagnose" links={[
          { to: "/diagnose", label: "All diagnostics" },
          { to: "/diagnose/vacuum", label: "Vacuum" },
          { to: "/diagnose/odor", label: "Odors" },
          { to: "/diagnose/airflow", label: "Airflow" },
        ]} />
        <FooterCol title="Tools" links={[
          { to: "/calculate", label: "Calculators" },
          { to: "/learn", label: "Learn" },
        ]} />
        <FooterCol title="Company" links={[
          { to: "/about", label: "About" },
        ]} />
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} AirSucks.com — Not medical advice. Always follow safety instructions.
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
