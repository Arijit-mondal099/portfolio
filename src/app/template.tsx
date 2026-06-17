"use client";

import { motion } from "motion/react";

import { DURATION, EASE } from "@/lib/motion";

/**
 * Route enter transition. Next re-mounts `template` on every navigation, so a
 * mount-only fade gives both `/` and `/projects` a gentle entrance. Opacity
 * only (no translate) so it never shifts the whole page on first load or
 * competes with the hero cascade. `flex-1 flex flex-col` preserves the sticky
 * footer, since this wrapper now sits where `main` did in the body's column.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="flex flex-1 flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: DURATION.fast, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
