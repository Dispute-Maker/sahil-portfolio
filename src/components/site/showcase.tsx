import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Container, Reveal, SectionHeading, TextLink } from "@/components/primitives";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const total = String(projects.length).padStart(2, "0");
const pad = (n: number) => String(n + 1).padStart(2, "0");

export function Showcase() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const els = stepRefs.current.filter(Boolean) as HTMLElement[];
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const i = Number((entry.target as HTMLElement).dataset.index);
            setActive(i);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="rule-y scroll-mt-16 py-(--section-y)">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading index="03" title="Selected work" />
          <Reveal className="type-meta text-muted-foreground" delay={100}>
            {total} projects — 2024 → 2026
          </Reveal>
        </div>

        <div className="mt-10 grid gap-10 md:mt-14 lg:grid-cols-12 lg:gap-12">
          {/* Sticky preview (desktop) */}
          <div className="hidden lg:col-span-7 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/3] overflow-hidden border border-foreground bg-surface">
                {projects.map((p, i) => (
                  <img
                    key={p.slug}
                    src={p.image}
                    alt={p.imageAlt}
                    width={1200}
                    height={900}
                    loading={i === 0 ? "eager" : "lazy"}
                    className={cn(
                      "absolute inset-0 size-full object-cover transition-all duration-700 ease-out",
                      i === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0",
                    )}
                  />
                ))}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-background/90 px-3 py-1.5 backdrop-blur-sm">
                  <span className="type-meta tabular-nums">{pad(active)}</span>
                  <span className="type-meta text-muted-foreground">/ {total}</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="type-label text-muted-foreground">{projects[active].category}</span>
                <span className="type-meta text-muted-foreground">{projects[active].year}</span>
              </div>
              {/* Progress rail */}
              <div className="mt-3 flex gap-1" aria-hidden>
                {projects.map((p, i) => (
                  <span
                    key={p.slug}
                    className={cn(
                      "h-px flex-1 transition-colors duration-500",
                      i <= active ? "bg-foreground" : "bg-border",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Steps */}
          <ol className="lg:col-span-5">
            {projects.map((project, i) => (
              <li
                key={project.slug}
                data-index={i}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="border-b border-border py-10 first:pt-0 lg:min-h-[70vh] lg:py-16 lg:first:pt-4"
              >
                <ProjectStep project={project} index={i} active={i === active} />
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function ProjectStep({ project, index, active }: { project: Project; index: number; active: boolean }) {
  return (
    <Reveal>
      <div className="flex items-baseline gap-3">
        <span className="type-meta tabular-nums">{pad(index)}</span>
        <span className="type-meta text-muted-foreground">/ {total}</span>
      </div>

      {/* Mobile / tablet image */}
      <div className="mt-5 overflow-hidden border border-foreground lg:hidden">
        <img
          src={project.image}
          alt={project.imageAlt}
          width={1200}
          height={900}
          loading="lazy"
          className="aspect-[4/3] size-full object-cover"
        />
      </div>

      <h3
        className={cn(
          "type-h2 mt-6 uppercase transition-colors duration-500 lg:mt-8",
          active ? "text-foreground" : "lg:text-muted-foreground",
        )}
      >
        {project.title}
      </h3>
      <p className="type-label mt-3 text-muted-foreground">{project.category}</p>
      <p className="type-body mt-5 max-w-md text-muted-foreground">{project.description}</p>

      <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2" aria-label="Tech stack">
        {project.stack.map((tech) => (
          <li key={tech} className="type-meta text-foreground">
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-6">
        {project.github ? (
          <TextLink href={project.github} target="_blank" rel="noreferrer" className="type-label">
            <Github className="size-3.5" /> GitHub
          </TextLink>
        ) : null}
        {project.live ? (
          <TextLink href={project.live} target="_blank" rel="noreferrer" className="type-label">
            Live <ArrowUpRight className="size-3.5" />
          </TextLink>
        ) : null}
      </div>
    </Reveal>
  );
}
