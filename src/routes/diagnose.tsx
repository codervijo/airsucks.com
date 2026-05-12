import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/diagnose")({
  component: () => <Outlet />,
});
