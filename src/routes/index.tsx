import { createFileRoute } from "@tanstack/react-router";
import { Action, Container, LabelTag, Section, Text, TextLink } from "@/components/primitives";
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
    <main className="min-h-screen bg-background">
      <header className="rule-y border-t-0">
        <Container className="flex h-16 items-center justify-between md:h-20">
          <span className="text-label text-foreground">{site.name}</span>
          <LabelTag marker>Available for work</LabelTag>
        </Container>
      </header>

      <Section divided className="pt-16">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <Text variant="display" balance>
              {site.name}
            </Text>
            <Text variant="body" className="mt-6 max-w-xl text-muted-foreground">
              {site.role}. Building fast, considered products for the web —
              from interface detail to system architecture.
            </Text>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Action>Get in touch</Action>
              <Action variant="outline">View résumé</Action>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:col-span-4 md:items-end md:text-right">
            <LabelTag>Index</LabelTag>
            <Text variant="meta">Portfolio — 2026</Text>
            <TextLink href="mailto:hello@example.com" className="mt-2">
              hello@example.com
            </TextLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
