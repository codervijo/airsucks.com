import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";

export const Route = createFileRoute("/diagnose/vacuum")({
  head: () => ({
    meta: [
      { title: "Diagnose vacuum suction, smells, and dust problems — AirSucks.com" },
      { name: "description", content: "Vacuum lost suction, burning smell, brush not spinning, blowing dust — diagnose what's wrong with your vacuum." },
      { property: "og:title", content: "Diagnose vacuum problems — AirSucks.com" },
      { property: "og:description", content: "Suction, smells, dust, and brush issues — find the cause fast." },
    ],
  }),
  component: () => (
    <CategoryPage
      config={{
        slug: "vacuum",
        title: "Diagnose vacuum suction, smells, and dust problems",
        intro: "Most vacuum problems come from clogged filters, full bags, or jammed brush rollers. Pick a symptom to start.",
        cards: [
          { title: "Vacuum lost suction", hint: "Filter, bag, hose, or seals" },
          { title: "Vacuum smells like burning", hint: "Belt, brush, or motor" },
          { title: "Vacuum smells like dog", hint: "Pet hair and biofilm" },
          { title: "Vacuum blowing dust", hint: "Filter or seal failure" },
          { title: "Brush not spinning", hint: "Belt or jam" },
          { title: "Filter clogged", hint: "Wash, replace, or upgrade" },
        ],
        faqs: [
          { q: "Why does my vacuum smell like it's burning?", a: "Usually a slipping or broken belt, a brush roller jammed with hair, or a clogged filter overheating the motor. Unplug, clear the brush, and inspect the belt." },
          { q: "Why is my vacuum blowing dust out?", a: "A torn bag, missing or damaged HEPA filter, or a broken seal lets fine dust bypass filtration. Inspect filters and gaskets." },
          { q: "How often should I change vacuum filters?", a: "Most pre-motor foam filters should be washed every 1–3 months and HEPA filters replaced every 6–12 months depending on use and pets." },
        ],
        related: [
          { title: "Filter choking airflow", to: "/diagnose/airflow" },
          { title: "Pet smell in the home", to: "/diagnose/odor" },
          { title: "Run the full diagnostic", to: "/diagnose" },
        ],
      }}
    />
  ),
});
