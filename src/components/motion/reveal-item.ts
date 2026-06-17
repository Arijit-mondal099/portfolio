import { cn } from "@/lib/utils";

/**
 * Classes for an item that reveals when its <RevealGroup> scrolls into view: it
 * stays hidden, then fades + lifts in. Animation-based (not a transition) so it
 * never clashes with hover transitions on the same element, and `fill-mode-both`
 * holds it hidden until its own staggered delay elapses. Pair with a
 * `revealDelay(i)` style. Honors reduced motion (shown instantly).
 *
 * Plain module (no "use client") so server components can use these too — the
 * `<RevealGroup>` wrapper that drives them lives in `./reveal-group`.
 */
export const revealItem = cn(
  "opacity-0 motion-reduce:opacity-100",
  "motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-2 motion-safe:fill-mode-both motion-safe:duration-700 motion-safe:ease-out",
  "motion-safe:group-data-[shown=true]/reveal:animate-in"
);

/** Inline `animation-delay` for the nth item in a group, driving the stagger. */
export const revealDelay = (index: number, step = 80) => ({
  animationDelay: `${index * step}ms`,
});
