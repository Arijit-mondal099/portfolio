# AGENTS.md — portfolio

Project-specific guide. For general engineering behavior, see
[CLAUDE.md](./CLAUDE.md).

## Quick start

```sh
pnpm install          # Node >=20.9 (pinned in .nvmrc: 24; pnpm@11.5.1 in package.json)
pnpm dev              # http://localhost:3000
pnpm build            # production build
pnpm lint             # ESLint v9 flat config (eslint.config.mjs)
pnpm typecheck        # tsc --noEmit
pnpm format           # Prettier (write)
pnpm format:check     # Prettier (check only)
```

No test framework is configured.

## Framework & tooling

- **Next.js 16.2.9** (App Router) + **React 19**, shipped via **pnpm only** (pnpm@11.5.1 pinned in package.json).
- **Tailwind CSS v4** — no `tailwind.config.js`. Config is inline in `src/app/globals.css` via `@theme inline`. PostCSS plugin: `@tailwindcss/postcss`.
- **shadcn/ui** (base-nova style, `baseColor: "neutral"`, `cssVariables: true`) on `@base-ui/react` primitives. Add via `pnpm dlx shadcn@latest add <name>`. Config in `components.json`.
- **ESLint v9 flat config** in `eslint.config.mjs` (ignores `.next/`, `out/`, `build/`, `next-env.d.ts`).
- **Prettier** with `prettier-plugin-tailwindcss`. Double quotes, semicolons, trailingComma: es5, tabWidth: 2, printWidth: 80.
- `.npmrc` sets `engine-strict=true` and `auto-install-peers=true`. Build approvals for `sharp`+`unrs-resolver` in `pnpm-workspace.yaml`.
- **CI** uses a shared setup action (`.github/actions/setup`) that installs Node (via `.nvmrc`), enables Corepack, caches pnpm store, and runs `pnpm install --frozen-lockfile`.

## Architecture

- `@/*` → `./src/*`. Pages: `/` (home), `/projects`.
- **Content is data-driven** — edit `src/data/*.ts` (profile, projects, skills, socials, timeline, github). Components read from these files.
- **Dual theme** — `next-themes` toggles `class="light"`/`class="dark"` on `<html>` (default: `"system"`). View Transitions API animates the switch (`src/components/theme/theme-toggle.tsx`).
- Warm paper palette (`:root` = cream/near-black, `.dark` inverted).
- **JetBrains Mono** is the sole typeface (`--font-sans` and `--font-mono` both use it).
- **`cn()`** (`src/lib/utils.ts`) — `clsx` + `tailwind-merge`, used by all shadcn/ui components.
- Scrollbar hidden globally in CSS (scrolling still works).
- OG image at `src/app/opengraph-image.tsx` via `next/og`.

### Home sections (in order)

Hero → About → Education & Experience (tabbed timeline) → Skills → Projects → GitHub Contributions → Contact.

## Key dependencies

- **Resend** — contact form via `POST /api/contact`. Requires `RESEND_API_KEY` env var. `CONTACT_TO_EMAIL` overrides recipient.
- **TanStack Query** — contributions fetch + contact mutation. Provider in `src/app/providers.tsx`.
- **react-hook-form** + **Zod** (`@hookform/resolvers`) — contact form validation. Shared schema at `src/lib/validations.ts`.
- **sonner** — toast notifications for contact form feedback.
- **react-activity-calendar** — GitHub contributions heatmap.
- **react-icons** (`react-icons/fa6`) — brand icons. `lucide-react` is also present and used for UI icons (sun, moon, X, Code2, GraduationCap).

## Data flow gotchas

- GitHub contributions fetched server-side via third-party proxy (`github-contributions-api.jogruber.de/v4`) in `src/app/api/contributions/route.ts`.
- Site URL for SEO/OG comes from `NEXT_PUBLIC_SITE_URL` env var, falls back to `https://arijit-mondal.vercel.app` (`src/lib/site.ts`).

## Conventions (git hooks)

- **commitlint**: conventional commits (`feat:`, `fix:`, `chore:`, etc.). Keep atomic.
- **lint-staged**: ESLint + Prettier on staged `.ts/.tsx/.js/.jsx/.mjs/.cjs`; Prettier on `.json/.css/.md`.
- Hooks run automatically via `husky` on commit. Do not skip.

## Git & PR workflow

- Commit author: **Arijit Mondal <arijitm717@gmail.com>** (set per-repo with `git config user.name` / `git config user.email`).
- One feature branch + PR per change. Open via GitHub compare URL:
  `https://github.com/Arijit-mondal099/portfolio/compare/main...<branch>?expand=1`

## Notable

- `CLAUDE.md` is tracked in git (general behavioral guidelines).
- **CI** (`.github/workflows/ci.yml`): lint, typecheck, build, commitlint. Vercel deploy lives outside the repo.
- No `.env` files tracked (`.env*` gitignored; `.env.local` for secrets).
- `.claude/settings.local.json` grants permission for `Bash(pnpm exec *)` commands. Skills live in `.claude/skills/` and are loaded automatically by the agent.
