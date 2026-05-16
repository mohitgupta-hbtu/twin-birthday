import { createFileRoute } from "@tanstack/react-router";
import BirthdayHero from "@/components/BirthdayHero";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Happy Birthday Twin — Nandini" },
      { name: "description", content: "A dreamy birthday celebration for our priye mittar baddie Nandini Singh." },
    ],
  }),
});

function Index() {
  return <BirthdayHero />;
}
