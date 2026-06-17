import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

interface SectionProps extends React.ComponentProps<"section"> {
  /** Anchor id for in-page navigation, e.g. "about" → #about. */
  id: string;
  /** Heading rendered above the section content. */
  heading: string;
  /** Optional element aligned to the heading's right (e.g. a "view all" link). */
  action?: React.ReactNode;
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
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-16", className)} {...props}>
      <div className="mb-5 flex items-center justify-between gap-4">
        <Reveal as="h2" className="text-2xl font-bold tracking-tight">
          {heading}
        </Reveal>
        {action}
      </div>
      {children}
    </section>
  );
}
