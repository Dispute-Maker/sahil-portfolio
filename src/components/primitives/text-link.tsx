import { Link, type LinkComponentProps } from "@tanstack/react-router";
import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const base =
  "group relative inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-foreground/70 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-foreground";

const underline =
  "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-100 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-0";

/** External / plain anchor link. */
export function TextLink({
  className,
  plain = false,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { plain?: boolean }) {
  return <a className={cn(base, !plain && underline, className)} {...props} />;
}

/** Internal router link. */
export function RouteLink({
  className,
  plain = false,
  ...props
}: LinkComponentProps & { plain?: boolean }) {
  return <Link className={cn(base, !plain && underline, className)} {...props} />;
}
