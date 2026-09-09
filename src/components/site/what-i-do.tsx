import { ArrowUpRight } from "lucide-react";
import { Reveal, Section, SectionHeading } from "@/components/primitives";
import { focusAreas } from "@/data/content";

export function WhatIDo() {
  return (
    <Section id="what-i-do" divided className="scroll-mt-16">
      <SectionHeading index="02" title="What I do" />

      <ul className="mt-10 border-t border-border md:mt-14">
        {focusAreas.map((area, i) => (
          <Reveal as="li" key={area.index} delay={i * 60}>
            <div className="group grid cursor-default grid-cols-[3rem_1fr_auto] items-start gap-4 border-b border-border py-6 transition-colors duration-300 hover:border-foreground md:grid-cols-[6rem_1fr_1fr_auto] md:items-center md:py-9">
              <span className="type-meta text-muted-foreground transition-colors group-hover:text-foreground">
                {area.index}
              </span>
              <h3 className="type-h2 uppercase transition-transform duration-500 ease-out group-hover:translate-x-2">
                {area.title}
              </h3>
              <p className="type-small col-span-3 col-start-1 max-w-md text-muted-foreground md:col-span-1 md:col-start-3">
                {area.description}
              </p>
              <span
                aria-hidden
                className="col-start-3 row-start-1 flex size-9 items-center justify-center border border-border transition-all duration-300 group-hover:border-foreground group-hover:bg-accent md:col-start-4"
              >
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
              </span>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
