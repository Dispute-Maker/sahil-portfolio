import type { ElementType, HTMLAttributes } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  delay?: number;
};

/** Scroll-triggered fade/rise. Respects prefers-reduced-motion via CSS. */
export function Reveal({ as: Tag = "div", delay = 0, className, style, ...props }: RevealProps) {
  const [ref, inView] = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      className={cn("scroll-reveal", inView && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...props}
    />
  );
}

/** Section eyebrow: "01 — ABOUT" */
export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <Reveal className="flex items-center gap-4">
      <span className="type-meta text-foreground">{index}</span>
      <span aria-hidden className="h-px w-8 bg-foreground" />
      <span className="type-label text-muted-foreground">{title}</span>
    </Reveal>
  );
}
