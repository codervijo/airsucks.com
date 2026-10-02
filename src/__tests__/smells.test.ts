// Integrity + engine tests for the smell knowledge base (docs/prd.md § v2).
import { describe, expect, it } from "vitest";
import { CAUSES, hasCause } from "../content/smells/causes";
import {
  EMPTY_ANSWERS,
  overallUrgency,
  rankCauses,
  redFlags,
  type Answers,
} from "../content/smells/engine";
import {
  SMELL_PAGES,
  breadcrumbsFor,
  getSmellPage,
  hubGroups,
  normalizeSmellPath,
} from "../content/smells";
import { FAMILIES } from "../content/smells/reference";
import type { Likelihood } from "../content/smells/types";

// Every internal path a smell page may link to.
const STATIC_ROUTES = new Set([
  "/",
  "/smells/",
  "/diagnose/",
  "/diagnose/smell/",
  "/diagnose/vacuum/",
  "/diagnose/airflow/",
  "/calculate/",
  "/learn/",
  "/about/",
]);
const KNOWN = new Set([...STATIC_ROUTES, ...SMELL_PAGES.map((p) => p.path)]);

describe("smell pages", () => {
  it("have unique canonical paths with trailing slashes", () => {
    const paths = SMELL_PAGES.map((p) => p.path);
    expect(new Set(paths).size).toBe(paths.length);
    for (const p of paths) expect(p).toMatch(/^\/smells\/[a-z0-9-]+(\/[a-z0-9-]+)?\/$/);
  });

  it("have unique titles, descriptions, and H1s within length budgets", () => {
    for (const key of ["title", "description", "h1"] as const) {
      const vals = SMELL_PAGES.map((p) => p[key]);
      expect(new Set(vals).size, `duplicate ${key}`).toBe(vals.length);
    }
    for (const p of SMELL_PAGES) {
      expect(p.title.length, p.path).toBeLessThanOrEqual(56);
      expect(p.description.length, p.path).toBeGreaterThanOrEqual(110);
      expect(p.description.length, p.path).toBeLessThanOrEqual(165);
    }
  });

  it("reference only causes that exist", () => {
    for (const p of SMELL_PAGES)
      for (const c of p.causes) expect(hasCause(c.cause), `${p.path} → ${c.cause}`).toBe(true);
  });

  it("list causes in non-increasing likelihood order (emergency causes may lead)", () => {
    const rank: Record<Likelihood, number> = {
      "most common": 0,
      common: 1,
      "less common": 2,
      rare: 3,
    };
    for (const p of SMELL_PAGES) {
      // Safety-first pages deliberately open with the dangerous cause (e.g. gas
      // on the rotten-egg page) even when it isn't the most likely one.
      let i = 0;
      while (
        i < p.causes.length &&
        CAUSES.find((c) => c.id === p.causes[i].cause)?.urgency === "emergency"
      )
        i++;
      const order = p.causes.slice(i).map((c) => rank[c.likelihood]);
      expect(order, p.path).toEqual([...order].sort((a, b) => a - b));
    }
  });

  it("link only to routes that exist", () => {
    for (const p of SMELL_PAGES) {
      for (const l of p.related)
        expect(KNOWN.has(l.href), `${p.path} related → ${l.href}`).toBe(true);
      for (const d of p.decision ?? [])
        if (d.href) expect(KNOWN.has(d.href), `${p.path} decision → ${d.href}`).toBe(true);
    }
    for (const c of CAUSES)
      if (c.page) expect(KNOWN.has(c.page), `${c.id}.page → ${c.page}`).toBe(true);
  });

  it("put a safety block on every page where gas or electrical hazards are in play", () => {
    for (const p of SMELL_PAGES) {
      const hazardous = p.causes.some((c) => {
        const cause = CAUSES.find((x) => x.id === c.cause)!;
        return cause.urgency === "emergency" || cause.id === "electrical-overheating";
      });
      if (hazardous) expect(p.safety, `${p.path} needs a safety block`).toBeTruthy();
    }
  });

  it("resolve by any path spelling, and build breadcrumbs ending at the page", () => {
    expect(normalizeSmellPath("musty/room")).toBe("/smells/musty/room/");
    expect(getSmellPage("/smells/musty/room")?.path).toBe("/smells/musty/room/");
    expect(getSmellPage("nope")).toBeUndefined();
    for (const p of SMELL_PAGES) expect(breadcrumbsFor(p).at(-1)?.href).toBe(p.path);
  });

  it("appear in the hub exactly once (top-level) or under a parent", () => {
    const listed = hubGroups().flatMap((g) => g.pages.map((p) => p.path));
    expect(new Set(listed).size).toBe(listed.length);
    const topLevel = SMELL_PAGES.filter((p) => p.path.split("/").filter(Boolean).length === 2);
    for (const p of topLevel) expect(listed, p.path).toContain(p.path);
  });
});

describe("cause library", () => {
  it("has unique ids and complete entries", () => {
    const ids = CAUSES.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const c of CAUSES) {
      expect(c.families.length, c.id).toBeGreaterThan(0);
      expect(c.signs.length, c.id).toBeGreaterThan(0);
      expect(c.checks.length, c.id).toBeGreaterThan(0);
      expect(c.fixes.length, c.id).toBeGreaterThan(0);
    }
  });

  it("gives every odor family at least three candidate causes", () => {
    for (const f of FAMILIES) {
      expect(CAUSES.filter((c) => c.families.includes(f.id)).length, f.id).toBeGreaterThanOrEqual(
        3,
      );
    }
  });
});

describe("smell engine", () => {
  const run = (a: Partial<Answers>) => {
    const answers = { ...EMPTY_ANSWERS, ...a };
    return { ranked: rankCauses(answers), flags: redFlags(answers) };
  };

  it("is deterministic", () => {
    const a = {
      family: "musty" as const,
      location: "basement" as const,
      timing: ["after-rain-or-humid" as const],
    };
    expect(run(a).ranked.map((r) => r.cause.id)).toEqual(run(a).ranked.map((r) => r.cause.id));
  });

  it("always raises the gas emergency for a gas smell the utility hasn't cleared", () => {
    const { flags } = run({ family: "gas", location: "kitchen" });
    expect(flags.find((f) => f.id === "gas")?.level).toBe("emergency");
  });

  it("downgrades to a caution once the utility found no leak", () => {
    const { flags, ranked } = run({ family: "gas", observations: ["utility-found-no-leak"] });
    expect(flags.some((f) => f.level === "emergency")).toBe(false);
    expect(ranked[0].cause.id).not.toBe("natural-gas-leak");
  });

  it("ranks the water heater first for rotten eggs from hot water only", () => {
    expect(
      run({ family: "rotten-egg", location: "bathroom", timing: ["hot-water-only"] }).ranked[0]
        .cause.id,
    ).toBe("water-heater-anode");
  });

  it("ranks the AC coil/drain first for musty air from vents when the AC runs", () => {
    expect(
      run({ family: "musty", location: "hvac-vents", timing: ["hvac-running"] }).ranked[0].cause.id,
    ).toBe("ac-coil-drain");
  });

  it("ranks first-heat dust burn-off first, and escalates when there's smoke", () => {
    const calm = run({ family: "burning", location: "hvac-vents", timing: ["heat-first-on"] });
    expect(calm.ranked[0].cause.id).toBe("furnace-dust-burnoff");
    expect(calm.flags.some((f) => f.level === "emergency")).toBe(false);
    const smoke = run({ family: "burning", observations: ["smoke-or-heat"] });
    expect(smoke.flags.find((f) => f.id === "fire")?.level).toBe("emergency");
    expect(overallUrgency(smoke.flags, smoke.ranked)).toBe("emergency");
  });

  it("ranks old pet urine first when previous owners had pets", () => {
    expect(
      run({ family: "pet-urine", location: "one-room", observations: ["previous-pets"] }).ranked[0]
        .cause.id,
    ).toBe("hidden-pet-urine");
  });

  it("ranks a dry trap first for sewage near a rarely used drain", () => {
    expect(
      run({ family: "sewage", location: "basement", observations: ["unused-drain"] }).ranked[0]
        .cause.id,
    ).toBe("dry-p-trap");
  });

  it("flags electrical for a fishy smell with flickering lights", () => {
    const r = run({ family: "fishy", observations: ["flicker-or-buzz"] });
    expect(r.ranked[0].cause.id).toBe("electrical-overheating");
    expect(r.flags.find((f) => f.id === "electrical")?.level).toBe("urgent");
  });

  it("returns nothing without an odor family", () => {
    expect(run({}).ranked).toEqual([]);
  });
});
