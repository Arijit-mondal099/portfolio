import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

/**
 * Global footer — copyright on the left, circular social-icon buttons on the
 * right. Rendered once in the root layout; the `flex-1` main above keeps it
 * pinned to the bottom on short pages.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {year} <span className="text-foreground">{profile.name}</span>
        </p>

        <ul className="flex items-center gap-2">
          {socials.map(({ label, href, icon: Icon }) => {
            const isExternal = href.startsWith("http");
            return (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(isExternal && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
