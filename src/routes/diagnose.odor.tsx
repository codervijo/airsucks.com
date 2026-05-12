import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";

export const Route = createFileRoute("/diagnose/odor")({
  head: () => ({
    meta: [
      { title: "Diagnose bad smells in your home — AirSucks.com" },
      { name: "description", content: "Musty rooms, sour AC, bathroom and laundry smells — diagnose where the odor is coming from and how to remove it." },
      { property: "og:title", content: "Diagnose bad smells in your home — AirSucks.com" },
      { property: "og:description", content: "Find the source of the smell instead of masking it." },
    ],
  }),
  component: () => (
    <CategoryPage
      config={{
        slug: "odor",
        title: "Diagnose bad smells in your home",
        intro: "Smells are clues. Locate the source room-by-room, then match it to the most likely cause.",
        cards: [
          { title: "Musty room", hint: "Humidity or hidden moisture" },
          { title: "Sour AC smell", hint: "Coil biofilm or drain pan" },
          { title: "Bathroom smells after rain", hint: "Vent stack or drain trap" },
          { title: "Laundry room smells", hint: "Drain trap or front-loader gasket" },
          { title: "House smells stale", hint: "Ventilation and filter" },
          { title: "Pet smell", hint: "Carpet, upholstery, HVAC" },
        ],
        faqs: [
          { q: "What causes a musty smell in one room?", a: "Usually trapped moisture: a leaky window, damp carpet pad, or poor ventilation pushing humidity above 60%. A hygrometer and a 24-hour fan test can confirm." },
          { q: "Why does my AC smell sour when it turns on?", a: "Microbial growth on the evaporator coil or in the drain pan. A coil cleaning and clearing the condensate line usually solves it." },
          { q: "How do I get rid of pet smell in carpet?", a: "Enzyme cleaners break down odor compounds at the source. Surface deodorizers only mask the smell temporarily." },
        ],
        related: [
          { title: "Vent barely blows", to: "/diagnose/airflow" },
          { title: "Vacuum smells like dog", to: "/diagnose/vacuum" },
          { title: "Run the full diagnostic", to: "/diagnose" },
        ],
      }}
    />
  ),
});
