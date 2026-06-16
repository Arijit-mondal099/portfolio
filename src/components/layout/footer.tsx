import { profile } from "@/data/profile";

/**
 * Global footer — a centered copyright line. Rendered once in the root layout;
 * the `flex-1` main above keeps it pinned to the bottom on short pages.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="mx-auto w-full max-w-2xl px-6 py-8 text-center text-sm text-muted-foreground">
        © {year} <span className="text-foreground">{profile.name}</span>
      </div>
    </footer>
  );
}
