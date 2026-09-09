import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const variants = {
  display: "text-display",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  body: "text-body",
  small: "text-small text-muted-foreground",
  label: "text-label text-muted-foreground",
  meta: "text-meta text-muted-foreground",
} as const;

const defaultTags: Record<keyof typeof variants, ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  small: "p",
  label: "span",
  meta: "span",
};

type TextProps = HTMLAttributes<HTMLElement> & {
  variant?: keyof typeof variants;
  as?: ElementType;
  balance?: boolean;
};

export function Text({
  variant = "body",
  as,
  balance = false,
  className,
  ...props
}: TextProps) {
  const Tag = as ?? defaultTags[variant];
  return (
    <Tag
      className={cn(variants[variant], balance && "text-balance", className)}
      {...props}
    />
  );
}
