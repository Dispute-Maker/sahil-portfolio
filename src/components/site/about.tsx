import { ArrowDown } from "lucide-react";
import { Reveal, Section, SectionHeading, Text } from "@/components/primitives";
import { journey } from "@/data/content";

export function About() {
  return (
    <Section id="about" divided className="scroll-mt-16">
      <SectionHeading index="01" title="About" />

      <div className="mt-10 grid gap-12 md:mt-14 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <Reveal>
            <h2 className="type-h1">
              I&apos;M SAHIL<span className="text-accent">.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Text className="mt-8 max-w-xl text-muted-foreground">
              A full-stack developer who cares about the whole product — the data model, the
              API, and the last pixel of the interface. I started by taking things apart to see
              how they worked; I still do, I just put them back together better now.
            </Text>
          </Reveal>
          <Reveal delay={180}>
            <Text className="mt-5 max-w-xl text-muted-foreground">
              I like calm interfaces, honest engineering, and shipping things people actually
              use. Currently exploring realtime systems and AI-assisted tooling.
            </Text>
          </Reveal>
        </div>

        <ol className="md:col-span-4 md:col-start-9" aria-label="Journey">
          {journey.map((item, i) => (
            <Reveal as="li" key={item.step} delay={i * 80} className="group">
              <div className="flex items-baseline justify-between gap-4 border-b border-border py-4 transition-colors group-hover:border-foreground">
                <div>
                  <p className="text-lg font-medium tracking-tight uppercase md:text-xl">
                    {item.step}
                  </p>
                  <p className="type-small mt-1 text-muted-foreground">{item.note}</p>
                </div>
                <span className="type-meta text-muted-foreground">0{i + 1}</span>
              </div>
              {i < journey.length - 1 ? (
                <div className="flex justify-center py-1" aria-hidden>
                  <ArrowDown className="size-3.5 text-muted-foreground" />
                </div>
              ) : (
                <div className="flex justify-center py-2" aria-hidden>
                  <span className="size-2 bg-accent" />
                </div>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
