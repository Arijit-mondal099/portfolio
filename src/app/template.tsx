"use client";

import { motion } from "motion/react";

import { useLoadingGate } from "@/components/loading/loading-gate";
import { DURATION, EASE } from "@/lib/motion";

/**
 * Route enter transition. Next re-mounts `template` on every navigation, so a
 * mount-only fade gives both `/` and `/projects` a gentle entrance. Opacity
 * only (no translate) so it never shifts the whole page on first load or
 * competes with the hero cascade. `flex-1 flex flex-col` preserves the sticky
 * footer, since this wrapper now sits where `main` did in the body's column.
 *
 * The fade is deferred until the loading splash is dismissed (first load only)
 * — otherwise it runs invisibly behind the overlay and the content snaps into
 * place the moment the splash exits. On later navigations `done` is already
 * `true`, so the fade behaves exactly as before. `noscript` in the root layout
 * forces these hidden blocks visible for no-JS users.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const { done } = useLoadingGate();

  return (
    <motion.div
      className="flex flex-1 flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: done ? 1 : 0 }}
      transition={{ duration: DURATION.fast, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
