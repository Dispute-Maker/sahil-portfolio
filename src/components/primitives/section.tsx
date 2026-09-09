import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = HTMLAttributes<HTMLElement> & {
  bleed?: boolean;
  divided?: boolean;
  width?: "default" | "narrow" | "wide";
};

export function Section({
  bleed = false,
  divided = false,
  width = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-(--section-y)", divided && "rule-y", className)}
      {...props}
    >
      {bleed ? children : <Container width={width}>{children}</Container>}
    </section>
  );
}
