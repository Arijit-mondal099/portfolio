# AGENTS.md — portfolio

Project-specific guide. For general engineering behavior, see [CLAUDE.md](./CLAUDE.md).

## Quick start

```sh
pnpm install          # Requires Node >=20.9 (pinned 24 in .nvmrc). Fails hard on version mismatch (engine-strict=true).
pnpm dev              # http://localhost:3000
pnpm build            # production build
pnpm lint             # ESLint v9 flat config
pnpm typecheck        # tsc --noEmit
pnpm format           # Prettier (write)
pnpm format:check     # Prettier (check only)
```

No test framework configured.

## Framework & tooling

- **Next.js 16.2.9** (App Router) + **React 19**. pnpm only (pinned `11.5.1` in `packageManager`).
- **Tailwind CSS v4** — no `tailwind.config.js`. Config inline in `src/app/globals.css` via `@theme inline`. PostCSS plugin: `@tailwindcss/postcss`.
- **shadcn/ui** (base-nova, `baseColor: neutral`, `cssVariables: true`) on `@base-ui/react`. Add with `pnpm dlx shadcn@latest add <name>`. Config in `components.json`.
- **ESLint v9** flat config in `eslint.config.mjs` (ignores `.next/`, `out/`, `build/`, `next-env.d.ts`).
- **Prettier** with `prettier-plugin-tailwindcss`. Double quotes, semicolons, trailingComma: es5, tabWidth: 2, printWidth: 80. Stylesheet path set in `.prettierrc.json`.
- **CI** (`.github/workflows/ci.yml`): 4 parallel jobs — lint (ESLint + Prettier check), typecheck, build, commitlint. Commitlint runs only on PRs; lint includes `format:check`.

## Architecture

- `@/*` → `./src/*`. Pages: `/` (home), `/projects`.
- **Content is data-driven** — edit `src/data/*.ts` (profile, projects, skills, socials, timeline, github). Components read from these files.
- **Dual theme** — `next-themes` toggles `class="light"` / `class="dark"` on `<html>` (default: `"system"`). Theme switch animated via View Transitions API with a clip-path circle growing from viewport center (`50% 50%`).
- **JetBrains Mono** is the sole typeface (`--font-sans` and `--font-mono`).
- **`cn()`** (`src/lib/utils.ts`) — `clsx` + `tailwind-merge`, used by all shadcn/ui components.
- OG image at `src/app/opengraph-image.tsx` via `next/og`.
- Site URL from `NEXT_PUBLIC_SITE_URL` env var, falls back to `https://arijit-mondal.vercel.app` (`src/lib/site.ts`).

### Home section order

Hero → About → Education & Experience (tabbed timeline) → Skills → Projects → GitHub Contributions → Contact.

## Key dependencies

- **Resend** — contact form via `POST /api/contact`. Requires `RESEND_API_KEY`. `CONTACT_TO_EMAIL` overrides recipient.
- **TanStack Query** — contributions fetch + contact mutation. Provider in `src/app/providers.tsx`.
- **react-hook-form** + **Zod** (`@hookform/resolvers`) — shared schema at `src/lib/validations.ts`.
- **sonner** — toast notifications for contact form feedback.
- **react-activity-calendar** — GitHub contributions heatmap.
- **react-icons** (`react-icons/fa6`) — brand icons. `lucide-react` for UI icons (sun, moon, X, Code2, GraduationCap).

## Data flow quirks

- GitHub contributions fetched server-side via third-party proxy (`github-contributions-api.jogruber.de/v4`) at `src/app/api/contributions/route.ts`. Cache revalidates every hour.

## Git hooks (non-skippable)

Runs automatically via `husky` on commit. Do not attempt `--no-verify` or amend:

- **pre-commit**: `pnpm exec lint-staged` — ESLint + Prettier on staged `.ts/.tsx/.js/.jsx/.mjs/.cjs`; Prettier on `.json/.css/.md`.
- **commit-msg**: `pnpm exec commitlint --edit` — enforces conventional commits (`feat:`, `fix:`, `chore:`, etc.). Config at `commitlint.config.mjs`.

## Git & PR workflow

- Commit author: **Arijit Mondal <arijitm717@gmail.com>** (set per-repo with `git config user.name` / `git config user.email`).
- One feature branch + PR per change. Open via GitHub compare URL: `https://github.com/Arijit-mondal099/portfolio/compare/main...<branch>?expand=1`
- Repo-local commands define the PR and fix-bug workflows: `.claude/commands/open-pr.md`, `.claude/commands/fix-bug.md`.

## OpenCode config

- `.claude/settings.local.json` pre-approves `Bash(pnpm exec *)` commands.
- Skills in `.claude/skills/` are loaded automatically by the agent.
- `CLAUDE.md` tracked in git (general behavioral guidelines).

## Environment

- No `.env` files tracked (`.env*` gitignored; `.env.local` for secrets).
- `.env.example` documents the 3 variables: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `NEXT_PUBLIC_SITE_URL`.
- `pnpm-workspace.yaml` allows builds for `sharp` and `unrs-resolver`.
- Vercel deploy lives outside the repo (not in CI).
