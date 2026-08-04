import type { Transition, Variants } from "motion/react";

/**
 * Shared motion config — the single tuning point for the site's animation feel.
 *
 * Durations stay short and offsets small so entrances read as a subtle polish
 * rather than a distraction, in keeping with the minimalist mono/paper look.
 * Reduced-motion is handled globally by `<MotionConfig reducedMotion="user">`
 * (see `providers.tsx`), which strips transforms while keeping opacity — so the
 * variants below need no per-component fallback.
 */
export const DURATION = { fast: 0.35, base: 0.55, slow: 0.8 } as const;

/**
 * Initial site splash duration (ms). Shown on the first hard page load only,
 * then skipped for the rest of the tab session. Paired with the GIF's own
 * play time and the pop-in/exit choreography — long enough to feel deliberate,
 * short enough to avoid hurting first meaningful paint perception.
 */
export const LOADING_DURATION = 3500;

export const OFFSET = { sm: 8, base: 12, lg: 16 } as const;

/** Gentle ease-out; tuple form so it satisfies motion's `Easing` type. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const transition: Transition = {
  duration: DURATION.base,
  ease: EASE,
};

/** Fade up from a small offset — the default entrance. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: OFFSET.base },
  visible: { opacity: 1, y: 0 },
};

/**
 * Container that releases its children one after another. Children must use
 * the matching `hidden`/`visible` variant names (e.g. `staggerItem`) so they
 * inherit the orchestration rather than animating on their own.
 */
export function staggerContainer(stagger = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren } },
  };
}

/** Child variant for a `staggerContainer`; carries its own transition. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: OFFSET.base },
  visible: { opacity: 1, y: 0, transition },
};
