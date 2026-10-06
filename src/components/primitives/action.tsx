import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, PointerEvent } from "react";
import { cn } from "@/lib/utils";

const actionVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-medium uppercase tracking-[0.14em] transition-[background-color,color,border-color,transform,filter] duration-300 ease-out [transform:translate3d(var(--mx,0px),var(--my,0px),0)] hover:[transform:translate3d(var(--mx,0px),calc(var(--my,0px)-2px),0)_scale(1.015)] active:[transform:translate3d(var(--mx,0px),var(--my,0px),0)_scale(0.985)] motion-reduce:transform-none motion-reduce:hover:transform-none disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-foreground",
  {
    variants: {
      variant: {
        solid: "bg-foreground text-primary-foreground hover:bg-foreground/88",
        outline: "border border-border bg-transparent text-foreground hover:bg-secondary",
        accent: "bg-accent text-accent-foreground hover:brightness-95",
        ghost: "bg-transparent text-foreground hover:bg-secondary",
      },
      size: {
        sm: "h-9 px-4 text-[0.6875rem]",
        md: "h-11 px-6 text-xs",
        lg: "h-13 px-8 text-xs md:text-sm",
      },
    },
    defaultVariants: { variant: "solid", size: "md" },
  },
);

type ActionProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof actionVariants> & { asChild?: boolean };

/** Portfolio button primitive (editorial, square-ish, minimal). */
export function Action({
  className,
  variant,
  size,
  asChild = false,
  type,
  onPointerMove,
  onPointerLeave,
  ...props
}: ActionProps) {
  const Comp = asChild ? Slot : "button";
  // Restrained magnetic pull (max ~4px), fine pointers only.
  const handleMove = (e: PointerEvent<HTMLButtonElement>) => {
    onPointerMove?.(e);
    if (e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 8;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 6;
    el.style.setProperty("--mx", `${x.toFixed(1)}px`);
    el.style.setProperty("--my", `${y.toFixed(1)}px`);
  };
  const handleLeave = (e: PointerEvent<HTMLButtonElement>) => {
    onPointerLeave?.(e);
    e.currentTarget.style.setProperty("--mx", "0px");
    e.currentTarget.style.setProperty("--my", "0px");
  };
  return (
    <Comp
      className={cn(actionVariants({ variant, size }), className)}
      {...(asChild ? {} : { type: type ?? "button" })}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      {...props}
    />
  );
}

export { actionVariants };
