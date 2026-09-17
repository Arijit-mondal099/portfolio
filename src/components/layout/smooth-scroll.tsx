"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

/**
 * Smooth scrolling via Lenis (window/root instance, no extra DOM).
 *
 * - `autoRaf` runs Lenis on its own `requestAnimationFrame` loop, so no manual
 *   `raf` wiring is needed.
 * - `anchors` routes same-page `#hash` link clicks (section nav, hero CTA)
 *   through `lenis.scrollTo`, which honors each section's `scroll-mt-*`
 *   (scroll-margin) — anchor offsets keep working, now animated.
 * - `lerp` 0.1 is the classic buttery feel; lower = heavier/smoother.
 *
 * Accessibility: Lenis honors `prefers-reduced-motion` by default (smoothing
 * off, programmatic scrolls jump instantly), matching the global
 * `<MotionConfig reducedMotion="user">` behavior — no extra handling needed.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        anchors: true,
        lerp: 0.1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
