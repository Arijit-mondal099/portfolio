# AGENTS.md — portfolio

Project-specific guide for AI agents and contributors. For general engineering
behavior (think before coding, simplicity, surgical changes), see
[CLAUDE.md](./CLAUDE.md).

## What this is

A personal developer portfolio for **Arijit Mondal** — a single-page site with a
warm, terminal/mono aesthetic and a light/dark toggle.

## Quick start

```sh
pnpm install        # install deps (requires Node >=20.9.0)
pnpm dev            # dev server (http://localhost:3000)
pnpm build          # production build
pnpm lint           # ESLint v9 flat config
pnpm typecheck      # tsc --noEmit
pnpm format         # Prettier (write)
pnpm format:check   # Prettier (check only)
```

No test framework is configured.

## Framework & tooling

- **Next.js 16.2.9** (App Router) + **React 19**
- **Tailwind CSS v4** — no `tailwind.config.js`. Config is in `src/app/globals.css` via `@theme inline`. PostCSS plugin is `@tailwindcss/postcss`.
- **shadcn/ui** (base-nova style) with `@base-ui/react` primitives. Add via `pnpm dlx shadcn@latest add <name>`.
- **ESLint v9 flat config** in `eslint.config.mjs`. Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`.
- **Prettier** with `prettier-plugin-tailwindcss` (stylesheet: `src/app/globals.css`). Double quotes, semicolons, trailingComma: es5, tabWidth: 2, printWidth: 80.
- **pnpm** only. Approved native build scripts (`sharp`, `unrs-resolver`) in `pnpm-workspace.yaml`.

## Architecture

- `@/*` maps to `./src/*`. Pages: `/` (home), `/projects`.
- **Content is data-driven** — edit `src/data/*.ts` to change copy, links, and lists. Components render from those files, not hard-coded text.
- **Dual theme** — `next-themes` toggles `class="light"` / `class="dark"` on `<html>`. Default is `"system"` (follows OS preference). Theme toggle with a circular reveal animation via View Transitions API (`src/components/theme/theme-toggle.tsx`).
- **Warm paper palette** — `:root` = light theme, `.dark` overrides. Colors are warm neutrals (cream/near-black), not navy/cool.
- **JetBrains Mono** is the sole typeface — `--font-sans` and `--font-mono` both point to it.
- **`cn()`** (`src/lib/utils.ts`) — `clsx` + `tailwind-merge`, used by all shadcn/ui components.
- **Scrollbar hidden globally** via CSS (`scrollbar-width: none` + `::-webkit-scrollbar { display: none }` in `globals.css`). Scrolling still works.
- **OG image** generated at `src/app/opengraph-image.tsx` via `next/og`.

## Sections (home page)

Hero → About → Education & Experience (tabbed timeline) → Skills → Projects → GitHub Contributions → Contact.

## Key dependencies beyond defaults

- **Resend** — contact form via `POST /api/contact`. Requires `RESEND_API_KEY` env var. `CONTACT_TO_EMAIL` overrides recipient.
- **TanStack Query** (`@tanstack/react-query`) — data fetching for contributions + contact mutation. Provider in `src/app/providers.tsx`.
- **react-hook-form** + **Zod** (`@hookform/resolvers`) — contact form validation. Shared schema `src/lib/validations.ts`.
- **react-activity-calendar** — GitHub contributions heatmap.
- **react-icons** (`react-icons/fa6`) — brand icons (`lucide-react` no longer ships them).

## Data flow gotchas

- GitHub contributions are fetched **server-side** via a third-party proxy (`github-contributions-api.jogruber.de/v4`), not the GitHub API directly (`src/app/api/contributions/route.ts`).
- Site URL for SEO/sitemap/OG comes from `NEXT_PUBLIC_SITE_URL` env var, falls back to `https://arijit-mondal.vercel.app` (`src/lib/site.ts`).

## Conventions enforced by git hooks

- **commitlint**: conventional commits (`feat:`, `fix:`, `chore:`, etc.). Keep commits atomic.
- **lint-staged**: ESLint + Prettier on staged `.ts/.tsx/.js/.jsx/.mjs/.cjs`; Prettier on `.json/.css/.md`.
- Hooks run automatically on commit. Do not skip them.

## Git & PR workflow

- Commit author must be **Arijit Mondal <arijitm717@gmail.com>** (set per-repo with `git config user.name` / `git config user.email`).
- Work is delivered **phase by phase**, one feature branch + PR per change.
- `gh` is not available — push the branch and open the PR via the URL GitHub prints, or the compare URL:
  `https://github.com/Arijit-mondal099/portfolio/compare/main...<branch>?expand=1`

## Notable

- `CLAUDE.md` is tracked in git. It holds general behavioral guidelines.
- **CI** runs on push/PR via GitHub Actions (`.github/workflows/ci.yml`): lint, typecheck, build, commitlint. Vercel deploy is configured outside the repo.
- No `.env` files are tracked (`.env*` is gitignored; `.env.local` for secrets).
