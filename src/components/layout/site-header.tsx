import { ThemeToggle } from "@/components/theme/theme-toggle";

/**
 * Theme toggle anchored to the top-right. On large screens it's `fixed` (stays
 * pinned while scrolling); on smaller/mobile screens it's `absolute` so it
 * scrolls away with the content instead of overlapping it. In the root layout.
 */
export function SiteHeader() {
  return (
    <div className="absolute top-4 right-4 z-50 lg:fixed">
      <ThemeToggle />
    </div>
  );
}
