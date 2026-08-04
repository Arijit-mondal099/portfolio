"use client";

import { AnimatePresence, motion } from "motion/react";

import { DURATION, EASE, LOADING_DURATION } from "@/lib/motion";

interface LoadingScreenProps {
  /** When `true` the splash is dismissed — `AnimatePresence` runs its exit. */
  done: boolean;
}

/**
 * The fullscreen splash overlay: your `public/loading.gif` centered on a
 * theme-matching canvas. It's purely presentational — the `done` flag and timer
 * live in `LoadingGate`. Renders nothing once dismissed.
 *
 * SSR-safe: the overlay is server-rendered opaque (`bg-background`), and
 * `AnimatePresence` only runs its exit when the child is removed — which never
 * happens on the server, so there's no hydration mismatch.
 */
export function LoadingScreen({ done }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[999] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: DURATION.fast, ease: EASE }}
        >
          {/* Small → big: a steady scale-up over the entire hold so the GIF
              visibly "fills" while loading, then stops and the splash exits.
              MotionConfig (reducedMotion="user") strips this transform under
              prefers-reduced-motion, so it degrades to a static GIF there. */}
          <motion.img
            src="/loading.gif"
            alt="Loading…"
            width={128}
            height={128}
            loading="eager"
            fetchPriority="high"
            className="h-32 w-32 object-contain"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.3 }}
            transition={{
              duration: LOADING_DURATION / 1000,
              ease: EASE,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
