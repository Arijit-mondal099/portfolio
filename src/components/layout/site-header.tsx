import { ThemeToggle } from "@/components/theme/theme-toggle";

/**
 * Floating theme toggle, fixed to the top-right corner so it's always reachable
 * without taking a row in the content flow. Rendered once in the root layout.
 */
export function SiteHeader() {
  return (
    <div className="fixed top-4 right-4 z-50">
      <ThemeToggle />
    </div>
  );
}
