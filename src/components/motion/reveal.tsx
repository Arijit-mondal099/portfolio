"use client";

import { motion, type HTMLMotionProps } from "motion/react";

import { fadeUp, transition } from "@/lib/motion";

/** Intrinsic tags the motion primitives can render as. */
type MotionTag =
  | "div"
  | "section"
  | "ul"
  | "ol"
  | "li"
  | "span"
  | "p"
  | "h1"
  | "h2"
  | "h3";

interface RevealProps {
  children: React.ReactNode;
  /** Element to render. Defaults to a `div`. */
  as?: MotionTag;
  className?: string;
  /** Seconds to wait before animating in. */
  delay?: number;
  /** Replay each time it scrolls into view; defaults to once. */
  once?: boolean;
  /** Fraction of the element visible before triggering (0–1). */
  amount?: number;
}

/** Trigger as soon as a sliver enters, so blocks ease in rather than popping. */
const VIEWPORT_AMOUNT = 0.15;

/**
 * Fades and lifts its children into view on scroll. Server content passed as
 * `children` stays server-rendered — only this wrapper is a client component,
 * so `data/*` and `next/image` never reach the client bundle through it.
 */
export function Reveal({
  children,
  as = "div",
  className,
  delay = 0,
  once = true,
  amount = VIEWPORT_AMOUNT,
}: RevealProps) {
  const Tag = motion[as] as React.ComponentType<HTMLMotionProps<"div">>;

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={fadeUp}
      transition={{ ...transition, delay }}
    >
      {children}
    </Tag>
  );
}
