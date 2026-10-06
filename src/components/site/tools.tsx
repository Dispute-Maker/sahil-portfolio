import { Reveal, Section, SectionHeading } from "@/components/primitives";
import { tools } from "@/data/content";

export function Tools() {
  return (
    <Section id="tools" divided className="scroll-mt-16">
      <SectionHeading animated index="05" title="Tools & technologies" />

      <ul className="mt-10 grid grid-cols-2 border-t border-l border-border sm:grid-cols-3 md:mt-14 lg:grid-cols-5">
        {tools.map((tool, i) => (
          <Reveal as="li" key={tool.name} delay={i * 40} className="border-r border-b border-border">
            <div className="group flex aspect-square flex-col justify-between p-4 transition-colors duration-300 hover:bg-surface md:p-6">
              <span className="type-meta text-muted-foreground">0{i + 1}</span>
              <tool.icon
                className="size-7 self-center text-foreground transition-transform duration-500 ease-out group-hover:-translate-y-1 md:size-8"
                strokeWidth={1.5}
                aria-hidden
              />
              <span className="type-label text-foreground">{tool.name}</span>
            </div>
          </Reveal>
        ))}
        <li className="hidden border-r border-b border-border lg:block">
          <div className="flex aspect-square flex-col justify-end p-6">
            <span aria-hidden className="mb-3 size-2 bg-accent" />
            <span className="type-small text-muted-foreground">
              Always learning. The list keeps growing.
            </span>
          </div>
        </li>
      </ul>
    </Section>
  );
}
