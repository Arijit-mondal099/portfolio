"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface RevealProps extends React.ComponentProps<"div"> {
  /** Stagger offset in ms, applied as the transition delay. */
  delay?: number;
}

/**
 * Reveals its children the first time they scroll into view: fades + slides up,
 * once (the observer disconnects after the first intersection). Wrapping a
 * server component keeps it server-rendered — only this wrapper is a client
 * component. Honors `prefers-reduced-motion`: content shows immediately, with
 * no transform.
 */
export function Reveal({ delay = 0, className, style, ...props }: RevealProps) {
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
      style={{ transitionDelay: `${delay}ms`, ...style }}
      className={cn(
        "translate-y-4 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[transform,opacity]",
        "data-[shown=true]:translate-y-0 data-[shown=true]:opacity-100",
        "motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
        className
      )}
      {...props}
    />
  );
}
