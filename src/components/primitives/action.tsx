import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const actionVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-foreground",
  {
    variants: {
      variant: {
        solid: "bg-foreground text-primary-foreground hover:bg-foreground/88",
        outline: "border border-border bg-transparent text-foreground hover:bg-secondary",
        accent: "bg-accent text-accent-foreground hover:brightness-95",
        ghost: "bg-transparent text-foreground hover:bg-secondary",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
      },
    },
    defaultVariants: { variant: "solid", size: "md" },
  },
);

type ActionProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof actionVariants> & { asChild?: boolean };

/** Portfolio button primitive (editorial, square-ish, minimal). */
export function Action({ className, variant, size, asChild = false, type, ...props }: ActionProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(actionVariants({ variant, size }), className)}
      {...(asChild ? {} : { type: type ?? "button" })}
      {...props}
    />
  );
}

export { actionVariants };
