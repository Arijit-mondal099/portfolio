"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

/**
 * Reveals its contents one-by-one when scrolled into view. Items opt in with the
 * `revealItem` classes + a `revealDelay(i)` style (from `./reveal-item`); this
 * flips `data-shown` once (then disconnects), so the items' animations fire
 * together but staggered. Wrapping server content keeps it server-rendered —
 * only this wrapper is a client component.
 */
export function RevealGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-shown={shown}
      className={cn("group/reveal", className)}
      {...props}
    />
  );
}
