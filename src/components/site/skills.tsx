import { Reveal, Section, SectionHeading } from "@/components/primitives";
import { skillGroups } from "@/data/content";

export function Skills() {
  return (
    <Section id="skills" divided className="scroll-mt-16">
      <SectionHeading animated index="04" title="Skills" />

      <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.group} delay={gi * 80}>
            <h3 className="type-label border-b border-foreground pb-3 text-foreground">
              {group.group}
            </h3>
            <ul className="mt-4">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="group flex items-center justify-between border-b border-border py-3 transition-colors hover:border-foreground"
                >
                  <span className="text-base font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-1 md:text-lg">
                    {item}
                  </span>
                  <span
                    aria-hidden
                    className="size-1.5 scale-0 bg-accent transition-transform duration-300 group-hover:scale-100"
                  />
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
