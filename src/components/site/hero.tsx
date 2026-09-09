import { ArrowDown, ArrowRight } from "lucide-react";
import { Action, Container, LabelTag, Text } from "@/components/primitives";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-9">
            <div className="reveal" style={{ animationDelay: "60ms" }}>
              <LabelTag marker>Portfolio — 2026</LabelTag>
            </div>

            <h1 className="type-display mt-6 md:mt-8">
              <span
                className="reveal block"
                style={{ animationDelay: "140ms" }}
              >
                SAHIL
              </span>
              <span
                className="reveal block"
                style={{ animationDelay: "240ms" }}
              >
                BARVE<span className="text-accent">.</span>
              </span>
            </h1>

            <div
              className="reveal mt-6 flex items-center gap-4 md:mt-8"
              style={{ animationDelay: "360ms" }}
            >
              <span aria-hidden className="h-px w-10 bg-foreground md:w-16" />
              <h2 className="type-label text-foreground md:text-xs">{site.role}</h2>
            </div>

            <Text
              variant="body"
              className="reveal mt-8 max-w-lg text-muted-foreground md:mt-10"
              style={{ animationDelay: "460ms" }}
            >
              Building modern digital experiences through code, design and technology.
            </Text>

            <div
              className="reveal mt-10 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-14"
              style={{ animationDelay: "560ms" }}
            >
              <Action asChild size="lg" className="group">
                <a href="#work">
                  View my work
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Action>
              <Action asChild size="lg" variant="outline">
                <a href="#contact">Let&apos;s talk</a>
              </Action>
            </div>
          </div>

          <div className="reveal-soft hidden md:col-span-3 md:flex md:flex-col md:items-end md:justify-end md:text-right"
            style={{ animationDelay: "700ms" }}
          >
            <span className="type-meta">Based in India</span>
            <span className="type-meta mt-1">Open to opportunities</span>
          </div>
        </div>
      </Container>

      <Container className="absolute inset-x-0 bottom-8 md:bottom-10">
        <div
          className="reveal-soft flex items-center gap-3"
          style={{ animationDelay: "900ms" }}
        >
          <ArrowDown className="scroll-hint size-4 text-muted-foreground" aria-hidden />
          <span className="type-label text-muted-foreground">Scroll</span>
        </div>
      </Container>
    </section>
  );
}
