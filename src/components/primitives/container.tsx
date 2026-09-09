import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  width?: "default" | "narrow" | "wide";
};

const widths = {
  narrow: "max-w-3xl",
  default: "max-w-[80rem]",
  wide: "max-w-[100rem]",
} as const;

export function Container({
  as: Tag = "div",
  width = "default",
  className,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full px-(--gutter)", widths[width], className)}
      {...props}
    />
  );
}
