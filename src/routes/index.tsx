import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { LeadMagnet } from "@/components/site/lead-magnet";
import { Navigation } from "@/components/site/navigation";
import { Showcase } from "@/components/site/showcase";
import { Skills } from "@/components/site/skills";
import { Tools } from "@/components/site/tools";
import { WhatIDo } from "@/components/site/what-i-do";
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
        <About />
        <WhatIDo />
        <Showcase />
        <Skills />
        <Tools />
        <LeadMagnet />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
