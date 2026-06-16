# AGENT.md

Project-specific guide for AI agents and contributors working on this
repository. For general engineering behavior (think before coding, simplicity,
surgical changes), see [CLAUDE.md](./CLAUDE.md).

## What this is

A personal developer portfolio for **Arijit Mondal** — a dark, terminal-style
single-page site. Sections, in order: Hero + About, GitHub contributions,
Skills, Projects, Contact, Footer.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first config; tokens live in `src/app/globals.css`)
- **shadcn/ui** (`base-nova` style, built on Base UI) — primitives in `src/components/ui`
- **JetBrains Mono** via `next/font` (monospace everywhere)
- **pnpm** as the package manager

## Commands

```bash
pnpm dev           # start the dev server
pnpm build         # production build
pnpm lint          # ESLint
pnpm format        # Prettier write (sorts Tailwind classes)
pnpm format:check  # Prettier check (CI-friendly)
```

> pnpm blocks native build scripts by default. Approved ones (`sharp`,
> `unrs-resolver`) are listed under `allowBuilds` in `pnpm-workspace.yaml`.

## Project structure

```
src/
  app/         layout.tsx, page.tsx, globals.css, api/ (route handlers)
  components/  section components + ui/ (shadcn primitives)
  data/        profile.ts, skills.ts, projects.ts, socials.ts  (content lives here)
  lib/         utils.ts (cn helper), validations.ts (zod schemas)
public/        images, resume.pdf
```

## Conventions

- **Content is data-driven.** Edit `src/data/*.ts` to change copy, projects,
  skills, and links — components render from those files, not hard-coded text.
- **Dark-only theme.** `<html>` is fixed to `class="dark"`; use the semantic
  tokens (`bg-background`, `text-muted-foreground`, `border-border`, …) instead
  of raw colors so the palette stays consistent.
- **Monospace UI.** The whole site uses JetBrains Mono; don't introduce other
  font families.
- **Comment the "why."** Keep explanatory comments on non-obvious code.

## Git & commit rules

- Commit author must be **Arijit Mondal <arijitm717@gmail.com>** (set per-repo
  with `git config user.name` / `git config user.email`).
- **Conventional Commits** are enforced by commitlint on `commit-msg`
  (`feat:`, `fix:`, `chore:`, `style:`, `docs:`, …). Keep commits **atomic**.
- **Husky** runs `lint-staged` (ESLint --fix + Prettier) on `pre-commit`.
- Work is delivered **phase by phase**, one feature branch + PR per phase.
- `gh` is not available — push the branch and open the PR via the GitHub URL
  GitHub prints, or the compare URL:
  `https://github.com/Arijit-mondal099/portfolio/compare/main...<branch>?expand=1`

## Environment

- `RESEND_API_KEY` — required by the contact form's API route
  (`src/app/api/contact/route.ts`). Keep it in `.env.local` (gitignored).
