import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  /**
   * Number of items in `children`. Used to (a) repeat the row enough times to
   * fill the viewport even when a category is short, and (b) scale the loop
   * duration with the row's width so every row scrolls at the same speed.
   */
  itemCount: number;
  /** Scroll left → right instead of the default right → left. */
  reverse?: boolean;
  className?: string;
}

/**
 * Horizontal auto-scrolling row that loops seamlessly, with faded edges. Pure
 * CSS — the keyframes and hover/reduced-motion handling live in globals.css
 * under `.marquee`, so this ships no JS. Render a category's tiles as `children`.
 */
export function Marquee({
  children,
  itemCount,
  reverse = false,
  className,
}: MarqueeProps) {
  // Enough copies that short rows still fill the max-w-2xl column; ~30px/s for
  // all rows (duration grows with the tile count, i.e. the copy width).
  const repeat = Math.max(2, Math.ceil(12 / itemCount));
  const durationSeconds = itemCount * 4;

  return (
    <div
      className={cn(
        "marquee group no-scrollbar flex gap-2.5 overflow-hidden py-1",
        className
      )}
      style={
        {
          "--marquee-duration": `${durationSeconds}s`,
          "--marquee-direction": reverse ? "reverse" : "normal",
        } as React.CSSProperties
      }
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          aria-hidden={i > 0}
          className="marquee-track flex shrink-0 gap-2.5"
        >
          {children}
        </div>
      ))}
    </div>
  );
}
