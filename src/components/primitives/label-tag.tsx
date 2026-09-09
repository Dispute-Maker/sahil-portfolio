import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type LabelTagProps = HTMLAttributes<HTMLSpanElement> & {
  marker?: boolean;
};

/** Small uppercase metadata label, optionally with a lime marker dot. */
export function LabelTag({ marker = false, className, children, ...props }: LabelTagProps) {
  return (
    <span
      className={cn("type-label inline-flex items-center gap-2 text-muted-foreground", className)}
      {...props}
    >
      {marker ? (
        <span aria-hidden className="size-1.5 rounded-full bg-accent" />
      ) : null}
      {children}
    </span>
  );
}
