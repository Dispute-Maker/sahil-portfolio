import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/hero";
import { Navigation } from "@/components/site/navigation";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sahil Barve — Full-Stack Developer" },
      { name: "description", content: site.description },
      { property: "og:title", content: "Sahil Barve — Full-Stack Developer" },
      { property: "og:description", content: site.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
      </main>
    </div>
  );
}
