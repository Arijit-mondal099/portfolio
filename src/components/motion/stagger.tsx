"use client";

import { motion, type HTMLMotionProps } from "motion/react";

import { staggerContainer, staggerItem } from "@/lib/motion";

/** Intrinsic tags the motion primitives can render as. */
type MotionTag = "div" | "section" | "ul" | "ol" | "li" | "span" | "p";

/** Trigger as soon as a sliver enters, so items ease in rather than popping. */
const VIEWPORT_AMOUNT = 0.15;

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
  amount = VIEWPORT_AMOUNT,
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
}

/**
 * A single child of `Stagger`. Passing `className`/`as` lets it *become* the
 * existing tile (no extra wrapper div), preserving the parent grid/flex layout.
 * Hover effects belong on a child (via CSS), not here, so the entrance transform
 * doesn't fight a hover transform on the same element.
 */
export function StaggerItem({
  children,
  as = "div",
  className,
}: StaggerItemProps) {
  const Tag = motion[as] as React.ComponentType<HTMLMotionProps<"div">>;

  return (
    <Tag className={className} variants={staggerItem}>
      {children}
    </Tag>
  );
}
