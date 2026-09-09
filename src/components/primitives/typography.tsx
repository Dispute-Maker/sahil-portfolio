import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const variants = {
  display: "type-display",
  h1: "type-h1",
  h2: "type-h2",
  h3: "type-h3",
  body: "type-body",
  small: "type-small text-muted-foreground",
  label: "type-label text-muted-foreground",
  meta: "type-meta text-muted-foreground",
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
