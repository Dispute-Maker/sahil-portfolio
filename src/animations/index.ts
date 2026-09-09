/**
 * Animation foundation.
 * Phase 01 only defines shared timing/easing tokens and a motion-preference
 * helper. GSAP / ScrollTrigger / Lenis are introduced in later phases and
 * should read their values from here so motion stays consistent.
 */

export const easing = {
  standard: [0.22, 1, 0.36, 1] as const,
  entrance: [0.16, 1, 0.3, 1] as const,
  exit: [0.4, 0, 1, 1] as const,
};

export const duration = {
  fast: 0.2,
  base: 0.45,
  slow: 0.8,
  reveal: 1.1,
};

export const stagger = {
  tight: 0.04,
  base: 0.08,
  loose: 0.14,
};

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
