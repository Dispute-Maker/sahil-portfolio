import { ArrowRight, FileText } from "lucide-react";
import { Action, Reveal, Section, SectionHeading, Text } from "@/components/primitives";

export function LeadMagnet() {
  return (
    <Section id="roadmap" divided className="scroll-mt-16">
      <div className="border border-foreground bg-surface">
        <div className="grid gap-10 p-6 md:grid-cols-12 md:gap-8 md:p-12 lg:p-16">
          <div className="md:col-span-8">
            <SectionHeading animated index="06" title="Developer toolkit" />
            <Reveal delay={80}>
              <h2 className="type-h1 mt-8 uppercase">
                Want to know
                <br />
                how I build<span className="text-accent">?</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <Text className="mt-6 max-w-lg text-muted-foreground">
                Get my full-stack roadmap: the tools, the order I learned them in, and the
                projects that made each step click. No fluff — just the path.
              </Text>
            </Reveal>
          </div>

          <Reveal
            delay={240}
            className="flex flex-col gap-3 md:col-span-4 md:items-end md:justify-end"
          >
            <Action asChild size="lg" variant="accent" className="group w-full md:w-auto">
              <a href="#contact">
                Get my roadmap
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Action>
            <Action asChild size="lg" variant="outline" className="w-full md:w-auto">
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                <FileText className="size-4" />
                View resume
              </a>
            </Action>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
