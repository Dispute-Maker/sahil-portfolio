import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Action, Container } from "@/components/primitives";
import { navLinks } from "@/data/navigation";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";

export function Navigation() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-sm"
          : "border-transparent bg-transparent",
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between transition-all duration-500",
          scrolled ? "h-14 md:h-16" : "h-18 md:h-24",
        )}
      >
        <a
          href="#top"
          className="text-lg font-semibold tracking-tight text-foreground md:text-xl"
          aria-label="Sahil Barve — home"
        >
          SB<span className="text-accent">.</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="type-label relative py-1 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
          <Action asChild size="sm" variant="outline">
            <a href="#contact">Let&apos;s talk</a>
          </Action>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex size-10 items-center justify-center -mr-2 text-foreground transition-colors hover:text-muted-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-500 ease-out md:hidden",
          open ? "max-h-[70vh] opacity-100" : "max-h-0 border-t-0 opacity-0",
        )}
      >
        <Container className="flex flex-col py-4">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
              className={cn(
                "border-b border-border py-4 text-2xl font-medium tracking-tight text-foreground transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
              )}
            >
              {link.label}
            </a>
          ))}
          <Action asChild className="mt-6 w-full" onClick={() => setOpen(false)}>
            <a href="#contact">Let&apos;s talk</a>
          </Action>
        </Container>
      </div>
    </header>
  );
}
