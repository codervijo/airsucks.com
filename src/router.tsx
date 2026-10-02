import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    // Every page is served (and canonicalized) at its trailing-slash URL; make
    // generated <Link> hrefs match so internal links never hit a 307.
    trailingSlash: "always",
    defaultPreloadStaleTime: 0,
  });

  return router;
};
