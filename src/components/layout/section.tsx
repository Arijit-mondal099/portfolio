import { cn } from "@/lib/utils";

interface SectionProps extends React.ComponentProps<"section"> {
  /** Anchor id for in-page navigation, e.g. "about" → #about. */
  id: string;
  /** Heading rendered above the section content. */
  heading: string;
}

/**
 * Standard wrapper for a content section: an anchor target, a bold heading in
 * the shared style, and consistent vertical spacing. `scroll-mt-*` offsets the
 * anchor so headings aren't hidden under the viewport top when jumped to.
 */
export function Section({
  id,
  heading,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-16", className)} {...props}>
      <h2 className="mb-5 text-2xl font-bold tracking-tight">{heading}</h2>
      {children}
    </section>
  );
}
