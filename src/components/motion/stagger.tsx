"use client";

import { motion, type HTMLMotionProps } from "motion/react";

import { staggerContainer, staggerItem } from "@/lib/motion";

/** Intrinsic tags the motion primitives can render as. */
type MotionTag = "div" | "section" | "ul" | "li" | "span" | "p";

interface StaggerProps {
  children: React.ReactNode;
  /** Element to render. Defaults to a `div`. */
  as?: MotionTag;
  className?: string;
  /** Delay between each child's entrance, in seconds. */
  stagger?: number;
  /** Delay before the first child animates, in seconds. */
  delayChildren?: number;
  once?: boolean;
  amount?: number;
}

/**
 * Container that reveals its children one after another as it scrolls into
 * view. Pair with `StaggerItem` for each child; items inherit the orchestration
 * and must not set their own `initial`/`animate`.
 */
export function Stagger({
  children,
  as = "div",
  className,
  stagger = 0.08,
  delayChildren = 0,
  once = true,
  amount = 0.3,
}: StaggerProps) {
  const Tag = motion[as] as React.ComponentType<HTMLMotionProps<"div">>;

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={staggerContainer(stagger, delayChildren)}
    >
      {children}
    </Tag>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  /** Element to render. Defaults to a `div`. */
  as?: MotionTag;
  className?: string;
  /** Add a subtle lift on hover (for cards). */
  hoverLift?: boolean;
}

/**
 * A single child of `Stagger`. Passing `className`/`as` lets it *become* the
 * existing tile (no extra wrapper div), preserving the parent grid/flex layout.
 */
export function StaggerItem({
  children,
  as = "div",
  className,
  hoverLift = false,
}: StaggerItemProps) {
  const Tag = motion[as] as React.ComponentType<HTMLMotionProps<"div">>;

  return (
    <Tag
      className={className}
      variants={staggerItem}
      whileHover={hoverLift ? { y: -4 } : undefined}
    >
      {children}
    </Tag>
  );
}
