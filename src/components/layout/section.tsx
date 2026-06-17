import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

interface SectionProps extends React.ComponentProps<"section"> {
  /** Anchor id for in-page navigation, e.g. "about" → #about. */
  id: string;
  /** Heading rendered above the section content. */
  heading: string;
  /** Optional element aligned to the heading's right (e.g. a "view all" link). */
  action?: React.ReactNode;
  /**
   * Reveal the heading row on scroll. Used by sections whose body animates its
   * own items (e.g. a staggered grid), so the heading isn't left static while
   * the items cascade — without wrapping the whole section in a second reveal.
   */
  animateHeading?: boolean;
}

/**
 * Standard wrapper for a content section: an anchor target, a bold heading in
 * the shared style (with an optional right-aligned action), and consistent
 * vertical spacing. `scroll-mt-*` offsets the anchor so headings aren't hidden
 * under the viewport top when jumped to.
 */
export function Section({
  id,
  heading,
  action,
  animateHeading,
  className,
  children,
  ...props
}: SectionProps) {
  const headingRow = (
    <div className="mb-5 flex items-center justify-between gap-4">
      <h2 className="text-2xl font-bold tracking-tight">{heading}</h2>
      {action}
    </div>
  );

  return (
    <section id={id} className={cn("scroll-mt-16", className)} {...props}>
      {animateHeading ? <Reveal>{headingRow}</Reveal> : headingRow}
      {children}
    </section>
  );
}
