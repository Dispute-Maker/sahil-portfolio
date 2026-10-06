import { useEffect, useState } from "react";
import portrait from "@/assets/portrait.jpg";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Tall editorial identity badge. Lives in the hero; subtly tilts back and
 * fades as the user scrolls, handing off to the compact "SB." mark in the nav.
 */
export function IdentityBadge({ className }: { className?: string }) {
  const [progress, setProgress] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Very subtle mouse-follow (max ~6px), desktop fine pointers only.
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine) and (min-width: 768px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!mq.matches || reduce) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 12;
        const y = (e.clientY / window.innerHeight - 0.5) * 12;
        setTilt({ x, y });
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const p = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.7)));
        setProgress(p);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-label={`${site.name}, ${site.role}`}
      className={cn("relative w-full max-w-[17rem] select-none", className)}
      style={{
        transform: `translateY(${progress * 48}px) scale(${1 - progress * 0.08})`,
        opacity: 1 - progress * 0.9,
        transition: "transform 0.15s linear, opacity 0.15s linear",
      }}
    >
      <div
        className="flex flex-col border border-foreground bg-surface"
        style={{
          transform: `translate3d(${tilt.x.toFixed(2)}px, ${tilt.y.toFixed(2)}px, 0)`,
          transition: "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Top mark row */}
        <div className="flex items-center justify-between border-b border-foreground px-4 py-3">
          <span className="text-lg font-semibold tracking-tight">
            SB<span className="text-accent">.</span>
          </span>
          <span className="type-meta text-muted-foreground">N°01 / 2026</span>
        </div>

        {/* Portrait */}
        <div className="relative aspect-[3/4] overflow-hidden border-b border-foreground bg-background">
          <img
            src={portrait}
            alt={`Illustrated portrait of ${site.name}`}
            width={768}
            height={1024}
            className="size-full object-cover grayscale-[0.1] transition-transform duration-700 ease-out hover:scale-[1.03]"
          />
          <span aria-hidden className="absolute right-3 bottom-3 size-2 bg-accent accent-pulse" />
        </div>

        {/* Identity */}
        <div className="px-4 pt-4 pb-5">
          <p className="text-xl leading-none font-medium tracking-tight uppercase">{site.name}</p>
          <p className="type-label mt-2 text-muted-foreground">{site.role}</p>
          <div className="mt-5 flex items-center justify-between">
            <span className="type-meta text-muted-foreground">Based in India</span>
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden className="size-1.5 rounded-full bg-accent accent-pulse" />
              <span className="type-meta">Available</span>
            </span>
          </div>
        </div>
      </div>

      {/* Editorial offset frame */}
      <div aria-hidden className="absolute inset-0 -z-10 translate-x-2 translate-y-2 border border-border" />
    </div>
  );
}
