# AGENTS.md — portfolio

Project-specific guide for AI agents and contributors. For general engineering
behavior (think before coding, simplicity, surgical changes), see
[CLAUDE.md](./CLAUDE.md).

## What this is

A personal developer portfolio for **Arijit Mondal** — a dark, terminal-style
single-page site. Sections, in order: Hero + About, GitHub contributions,
Skills, Projects, Contact, Footer.

## Quick start

```sh
pnpm install        # install deps
pnpm dev            # dev server (http://localhost:3000)
pnpm build          # production build
pnpm lint           # ESLint v9 flat config
pnpm format         # Prettier (write)
pnpm format:check   # Prettier (check only)
```

No test framework or typecheck script is configured.

## Framework & tooling

- **Next.js 16.2.9** (App Router) + **React 19**
- **Tailwind CSS v4** — config is in `src/app/globals.css` via `@theme`. There is no `tailwind.config.js`. PostCSS plugin is `@tailwindcss/postcss`.
- **shadcn/ui** (base-nova style) with `@base-ui/react` primitives. Add components via `pnpm dlx shadcn@latest add <name>`.
- **ESLint v9 flat config** in `eslint.config.mjs`. Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`.
- **Prettier** with `prettier-plugin-tailwindcss` (stylesheet: `src/app/globals.css`). Double quotes, semicolons, trailingComma: es5, tabWidth: 2, printWidth: 80.
- **pnpm** — use only pnpm, never npm or yarn. Approved native build scripts (`sharp`, `unrs-resolver`) are listed under `allowBuilds` in `pnpm-workspace.yaml`.

## Architecture

- `@/*` imports map to `./src/*` (tsconfig paths).
- **Content is data-driven** — edit `src/data/*.ts` (`profile`, `skills`, `projects`, `socials`) to change copy, projects, skills, and links. Components render from those files, not hard-coded text.
- **Dark-only** — `<html class="dark">` is hardcoded in `src/app/layout.tsx`. All design tokens target dark theme. Do not add light mode.
- **JetBrains Mono** is the sole typeface — both `--font-sans` and `--font-mono` point to it.
- Design tokens live in `src/app/globals.css` under `:root, .dark` and are mapped via `@theme inline`. Use utility classes (`bg-background`, `text-muted-foreground`, etc.) rather than raw CSS.
- `cn()` utility (`src/lib/utils.ts`) — uses `clsx` + `tailwind-merge`. Used by all shadcn/ui components.

## Conventions enforced by git hooks

- **commitlint**: conventional commits (`feat:`, `fix:`, `chore:`, `style:`, `docs:`, etc.). Keep commits **atomic**.
- **lint-staged**: ESLint --fix + Prettier on staged `.ts/.tsx/.js/.jsx/.mjs/.cjs`; Prettier on `.json/.css/.md`.
- Hooks run automatically on commit. Do not skip them.

## Git & PR workflow

- Commit author must be **Arijit Mondal <arijitm717@gmail.com>** (set per-repo with `git config user.name` / `git config user.email`).
- Work is delivered **phase by phase**, one feature branch + PR per phase.
- `gh` is not available — push the branch and open the PR via the URL GitHub prints, or the compare URL:
  `https://github.com/Arijit-mondal099/portfolio/compare/main...<branch>?expand=1`

## Notable

- `CLAUDE.md` is tracked and holds general LLM behavioral guidelines (not project-specific instructions).
- `RESEND_API_KEY` is required by the contact form's API route (`src/app/api/contact/route.ts`). Keep it in `.env.local`.
- No CI/CD workflow is committed (Vercel deploy is configured outside the repo).
- No `.env` files are tracked (`.env*` is gitignored).
