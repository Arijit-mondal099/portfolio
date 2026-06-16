"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

// Sections tracked by the nav, in page order. Edit labels/ids here.
const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contributions", label: "GitHub" },
  { id: "contact", label: "Contact" },
] as const;

const SECTION_IDS = SECTIONS.map((section) => section.id);

/**
 * Tracks which section is in view using an IntersectionObserver tuned to a thin
 * band at the viewport's vertical center (`rootMargin: -45% 0 -45% 0`) — the
 * section crossing that band is "active". setState happens in the observer
 * callback (not the effect body), so it's safe.
 */
function useActiveSection() {
  const [active, setActive] = useState<string>(SECTION_IDS[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries.find((entry) => entry.isIntersecting);
        if (inView) setActive(inView.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    const elements = SECTION_IDS.map((id) =>
      document.getElementById(id)
    ).filter((el): el is HTMLElement => el !== null);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return active;
}

/**
 * Scroll-spy nav fixed to the right-middle (large screens only, where the
 * centered column leaves room). Highlights the section in view and jumps to it
 * on click (smooth scroll + `scroll-mt-16` offset come from existing setup).
 */
export function SectionNav() {
  const active = useActiveSection();

  return (
    <nav
      aria-label="Page sections"
      className="fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
    >
      {SECTIONS.map(({ id, label }) => {
        const isActive = id === active;
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-current={isActive ? "true" : undefined}
            className="group flex items-center gap-3 text-sm"
          >
            <span
              className={cn(
                "size-1.5 rounded-full transition-colors",
                isActive
                  ? "bg-foreground"
                  : "bg-muted-foreground/40 group-hover:bg-muted-foreground"
              )}
            />
            <span
              className={cn(
                "transition-colors",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground group-hover:text-foreground"
              )}
            >
              {label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
