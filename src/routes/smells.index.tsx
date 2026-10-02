import { createFileRoute } from "@tanstack/react-router";
import { SmellsHub } from "@/components/smells/smells-hub";
import { breadcrumbJsonLd, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/smells/")({
  head: () =>
    pageHead({
      path: "/smells/",
      title: "House Smells Diagnosed: What's That Smell?",
      description:
        "Musty, rotten eggs, sewage, gas, burning plastic, cat pee, skunk: find what a smell in your house means, how urgent it is, and how to track down the source.",
      jsonLd: [
        breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Smells", href: "/smells/" },
        ]),
      ],
    }),
  component: SmellsHub,
});
