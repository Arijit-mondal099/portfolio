# Portfolio

A personal developer portfolio for **Arijit Mondal** — a dark, terminal-style
single-page site built with Next.js. It showcases an intro, GitHub
contributions, skills, projects, and a working contact form.

## Tech stack

- **[Next.js 16](https://nextjs.org/)** (App Router) + **React 19** + **TypeScript**
- **[Tailwind CSS v4](https://tailwindcss.com/)** (CSS-first config, no `tailwind.config.js`)
- **[shadcn/ui](https://ui.shadcn.com/)** (`base-nova` style, built on Base UI)
- **[TanStack Query](https://tanstack.com/query)** — server-side data fetching
- **[react-hook-form](https://react-hook-form.com/)** + **[Zod](https://zod.dev/)** — form validation
- **[Resend](https://resend.com/)** — contact-form email delivery
- **[react-activity-calendar](https://github.com/grubersjoe/react-activity-calendar)** — GitHub contributions heatmap
- **JetBrains Mono** via `next/font`
- **pnpm**, ESLint, Prettier, Husky + lint-staged + commitlint

## Features

- **Hero + About** — intro, tagline, résumé/contact CTAs, avatar
- **GitHub contributions** — yearly heatmap fetched server-side via React Query
- **Skills** — pill-badge grid
- **Projects** — card grid (2-up) with a dedicated `/projects` page
- **Contact** — validated form that emails via Resend, with toast feedback
- **SEO** — Open Graph image, sitemap, robots, canonical metadata
- Dark-only theme, fully responsive

## Getting started

```bash
# 1. Install dependencies
pnpm install

# 2. Set up environment variables
cp .env.example .env.local   # then fill in the values

# 3. Run the dev server
pnpm dev                     # http://localhost:3000
```

> Requires **Node ≥ 20.9** and **pnpm**.

### Environment variables

| Variable               | Required | Description                                             |
| ---------------------- | -------- | ------------------------------------------------------- |
| `RESEND_API_KEY`       | yes\*    | Resend API key for the contact form (`/api/contact`).   |
| `CONTACT_TO_EMAIL`     | no       | Recipient for contact messages (defaults to the owner). |
| `NEXT_PUBLIC_SITE_URL` | no       | Canonical site URL for sitemap/robots/SEO.              |

\* The contact form's UI works without it; sending email requires a key.

## Scripts

```bash
pnpm dev            # start the dev server
pnpm build          # production build
pnpm start          # run the production build
pnpm lint           # ESLint
pnpm format         # Prettier (write)
pnpm format:check   # Prettier (check)
```

## Project structure

```
src/
  app/         layout, pages, api/ routes, sitemap/robots/opengraph
  components/  section components + ui/ (shadcn primitives)
  data/        profile, skills, projects, socials, github  (edit content here)
  lib/         utils, validations, site config
public/        images, project thumbnails
```

Content is **data-driven** — edit the files in `src/data/` to update copy,
skills, projects, and links rather than touching components.

## Customization checklist

- Replace `public/profile.png` with a real photo and add `public/resume.pdf`.
- Swap the placeholder thumbnails in `public/projects/`.
- Update LinkedIn / X URLs and handles in `src/data/socials.ts`.
- Set the real demo/source links in `src/data/projects.ts`.

## Deployment

Deploy on **[Vercel](https://vercel.com/)**: import the repo, add the
environment variables above, and ship. The app builds with `pnpm build`.

## License

Personal project — all rights reserved.
