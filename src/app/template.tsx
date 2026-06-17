"use client";

import { motion } from "motion/react";

import { DURATION, EASE } from "@/lib/motion";

/**
 * Route enter transition. Next re-mounts `template` on every navigation, so a
 * mount-only fade-up gives both `/` and `/projects` a gentle entrance. Kept
 * light (opacity + small offset) so on the home route it layers under the hero
 * cascade rather than competing. `flex-1 flex flex-col` preserves the sticky
 * footer, since this wrapper now sits where `main` did in the body's column.
 * Reduced motion drops the translate via the global MotionConfig.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="flex flex-1 flex-col"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.base, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
