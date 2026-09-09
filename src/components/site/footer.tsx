import { ArrowUp } from "lucide-react";
import { Container, TextLink } from "@/components/primitives";
import { socials } from "@/data/content";
import { navLinks } from "@/data/navigation";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-foreground">
      <Container className="grid gap-10 py-12 md:grid-cols-12 md:gap-8 md:py-16">
        <div className="md:col-span-5">
          <a href="#top" className="text-2xl font-semibold tracking-tight" aria-label="Back to top">
            SB<span className="text-accent">.</span>
          </a>
          <p className="type-small mt-4 max-w-xs text-muted-foreground">
            {site.name} — {site.role}. Designed and built with care, code and coffee.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <p className="type-label text-muted-foreground">Sitemap</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <TextLink plain href={l.href} className="text-sm">
                  {l.label}
                </TextLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="type-label text-muted-foreground">Elsewhere</p>
          <ul className="mt-4 space-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                <TextLink
                  plain
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="text-sm"
                >
                  {s.label}
                </TextLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-start justify-start md:col-span-1 md:justify-end">
          <a
            href="#top"
            aria-label="Back to top"
            className="flex size-10 items-center justify-center border border-border transition-colors hover:border-foreground hover:bg-accent"
          >
            <ArrowUp className="size-4" />
          </a>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="type-meta text-muted-foreground">
            © 2026 {site.name}. All rights reserved.
          </span>
          <span className="type-meta inline-flex items-center gap-2 text-muted-foreground">
            <span aria-hidden className="size-1.5 rounded-full bg-accent" />
            Available for new work
          </span>
        </Container>
      </div>
    </footer>
  );
}
