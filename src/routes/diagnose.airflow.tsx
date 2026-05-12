import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";

export const Route = createFileRoute("/diagnose/airflow")({
  head: () => ({
    meta: [
      { title: "Diagnose weak airflow and room balance problems — AirSucks.com" },
      { name: "description", content: "Vents that barely blow, hot or cold rooms, return air problems, and dust — diagnose your home's airflow." },
      { property: "og:title", content: "Diagnose weak airflow — AirSucks.com" },
      { property: "og:description", content: "Find why your vents and rooms aren't moving air the way they should." },
    ],
  }),
  component: () => (
    <CategoryPage
      config={{
        slug: "airflow",
        title: "Diagnose weak airflow and room balance problems",
        intro: "Airflow problems are usually filters, returns, or duct issues. Pick the symptom that fits.",
        cards: [
          { title: "Vent barely blows", hint: "Filter, dampers, returns" },
          { title: "One room hotter than the rest", hint: "Balance and insulation" },
          { title: "One room colder than the rest", hint: "Damper or duct leak" },
          { title: "Return air problem", hint: "Undersized returns" },
          { title: "Filter choking airflow", hint: "MERV too restrictive" },
          { title: "Dusty room", hint: "Filtration and seal gaps" },
        ],
        faqs: [
          { q: "Why is one room hotter than the rest?", a: "Usually undersized supply or return ducts, a closed damper, or poor insulation/leaky envelope. Check that vents and returns are unobstructed and the damper is open." },
          { q: "Can a high-MERV filter weaken airflow?", a: "Yes. A MERV 13+ filter on a system designed for MERV 8 can starve airflow. Match the filter to the system's static pressure rating." },
          { q: "How do I know if my return air is undersized?", a: "If the filter is sucked tight, the supply registers howl, or static pressure exceeds the equipment spec, the return is likely too small." },
        ],
        related: [
          { title: "House smells stale", to: "/diagnose/odor" },
          { title: "Vacuum lost suction", to: "/diagnose/vacuum" },
          { title: "Run the full diagnostic", to: "/diagnose" },
        ],
      }}
    />
  ),
});
