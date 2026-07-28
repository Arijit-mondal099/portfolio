<div align="center">

# Portfolio

A data-driven personal portfolio for **Arijit Mondal**, a full-stack developer
building modern, scalable web applications with React, Next.js, TypeScript,
Node.js, and AI-powered technologies.

![Next.js 16](https://img.shields.io/badge/Next.js-16-000?logo=next.js)
![React 19](https://img.shields.io/badge/React-19-58c4dc?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-06b6d4?logo=tailwindcss)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-base--nova-000?logo=shadcnui)
![motion](https://img.shields.io/badge/motion-v12-0055ff?logo=framer)
![pnpm](https://img.shields.io/badge/pnpm-11.5.1-f69220?logo=pnpm)
![ESLint](https://img.shields.io/badge/ESLint-9-4b32c3?logo=eslint)
![Prettier](https://img.shields.io/badge/Prettier-3-f7b93e?logo=prettier)
![Resend](https://img.shields.io/badge/Resend-000?logo=resend)

</div>

<div align="center">
  <img src="./public/demo.png" alt="Portfolio Demo" width="700" />
</div>

## 📑 Table of Contents

- [✨ Features](#features)
- [🛠️ Tech Stack](#tech-stack)
- [🚀 Getting Started](#getting-started)
- [📁 Project Structure](#project-structure)
- [📜 Scripts](#scripts)
- [☁️ Deployment](#deployment)
- [🎨 Customization](#customization)

## ✨ Features

- 👤 **Hero + About** — Name, tagline, avatar, and bio with CTA links to contact
  and resume download.
- 🎓 **Education & Experience** — Tabbed timeline component showing work history
  and academic background, each entry with date range, description, and tech
  tags.
- 🛠️ **Skills** — Categorized auto-scrolling marquees of skill badges with brand
  icons (Languages, Frontend, Backend, Database, Cloud & Tools).
- 🗂️ **Projects** — Card grid previewing 2 featured projects on the home page with
  a dedicated `/projects` page listing all 6 projects (demo and source links).
- 📊 **GitHub Contributions** — Yearly contribution heatmap fetched server-side
  through TanStack Query and proxied from the GitHub Contributions API.
- 📬 **Contact Form** — Validated form (react-hook-form + Zod) that sends email
  via the Resend API. Social links (GitHub, LinkedIn, X/Twitter, Email, Phone)
  displayed alongside the form.
- 🌓 **Dual Theme** — Light and dark mode with system preference detection and an
  animated circular-reveal transition via the View Transitions API.
- 🎬 **Motion Animations** — Scroll-triggered reveals, staggered child entrances,
  auto-scrolling marquees, and route-transition fades powered by motion v12.
- 🔍 **SEO** — Dynamic sitemap (`/sitemap.xml`), robots.txt, Open Graph image, and
  canonical metadata generated from data files.
- 🤖 **AI Chatbot** — Embedded SupportAI chatbot on every page for interactive
  assistance.
- 📱 **Responsive** — Single-column centered layout with a sticky footer, adapts
  to all screen sizes.
- 🗃️ **Data-Driven** — All content lives in `src/data/` — edit the data files to
  update copy, skills, projects, and links without touching components.

## 🛠️ Tech Stack

### ⚛️ Framework & Language

|                |                                                 |
| -------------- | ----------------------------------------------- |
| **Framework**  | [Next.js 16](https://nextjs.org/) (App Router)  |
| **UI Library** | [React 19](https://react.dev/)                  |
| **Language**   | [TypeScript 5](https://www.typescriptlang.org/) |
| **Font**       | JetBrains Mono via `next/font`                  |

### 🎨 UI & Styling

|                |                                                                                                                         |
| -------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **CSS**        | [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first config, `@theme inline` in `globals.css`)                        |
| **Components** | [shadcn/ui](https://ui.shadcn.com/) (base-nova, on [@base-ui/react](https://base-ui.com/))                              |
| **Icons**      | [react-icons](https://react-icons.github.io/react-icons/) (FA6 brands) + [lucide-react](https://lucide.dev/) (UI icons) |
| **Animation**  | [motion v12](https://motion.dev/) (formerly Framer Motion)                                                              |

### 🔄 State & Data

|                   |                                                                                  |
| ----------------- | -------------------------------------------------------------------------------- |
| **Data Fetching** | [TanStack Query v5](https://tanstack.com/query)                                  |
| **Theme**         | [next-themes](https://github.com/pacocoursey/next-themes) (class-based)          |
| **Forms**         | [react-hook-form](https://react-hook-form.com/) + [Zod](https://zod.dev/)        |
| **Toasts**        | [sonner](https://sonner.emilkowalski.com/)                                       |
| **GH Heatmap**    | [react-activity-calendar](https://github.com/grubersjoe/react-activity-calendar) |

### ⚙️ Backend & Infrastructure

|             |                                                     |
| ----------- | --------------------------------------------------- |
| **Email**   | [Resend](https://resend.com/) (`POST /api/contact`) |
| **Chatbot** | SupportAI embedded script                           |

### 🔧 Tooling

|                     |                                                           |
| ------------------- | --------------------------------------------------------- |
| **Package Manager** | pnpm 11.5.1 (pinned via `packageManager`)                 |
| **Linting**         | ESLint v9 (flat config)                                   |
| **Formatting**      | Prettier 3 + `prettier-plugin-tailwindcss`                |
| **Git Hooks**       | Husky 9 + lint-staged + commitlint (conventional commits) |
| **Node**            | `>=20.9` (`.nvmrc` pins Node 24)                          |

## 🚀 Getting Started

```bash
# 1. Install dependencies
pnpm install

# 2. Set up environment variables
cp .env.example .env.local   # then fill in the values

# 3. Start the development server
pnpm dev                     # → http://localhost:3000
```

> ⚠️ Requires **Node >= 20.9** and **pnpm**. The project enforces both via
> `engine-strict=true` in `.npmrc` and will refuse to install on a mismatched
> version.

### 🔐 Environment Variables

| Variable               | Required | Description                                                                                                             |
| ---------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| `RESEND_API_KEY`       | Yes      | Resend API key for the contact form (`/api/contact`). Create one at [resend.com/api-keys](https://resend.com/api-keys). |
| `CONTACT_TO_EMAIL`     | No       | Recipient address for contact messages. Defaults to the owner's email.                                                  |
| `NEXT_PUBLIC_SITE_URL` | No       | Canonical site URL — used by the sitemap, robots.txt, and SEO metadata.                                                 |

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── contact/          POST /api/contact (Resend email)
│   │   └── contributions/    GET /api/contributions (GH heatmap proxy)
│   ├── projects/             /projects — full project listing page
│   ├── globals.css           Tailwind v4 theme + base styles
│   ├── layout.tsx            Root layout (header, footer, providers, chatbot)
│   ├── opengraph-image.tsx   Dynamic OG image (next/og)
│   ├── page.tsx              Home page — composes all sections
│   ├── providers.tsx         ThemeProvider + QueryClientProvider + MotionConfig
│   ├── robots.ts             /robots.txt
│   ├── sitemap.ts            /sitemap.xml
│   └── template.tsx          Route transition animation (fade in)
├── components/
│   ├── contact/              ContactForm component
│   ├── layout/               SiteHeader, Footer, Section, SectionNav
│   ├── motion/               Reveal, Stagger, Marquee animation wrappers
│   ├── projects/             ProjectGrid (shared card grid)
│   ├── sections/             Hero, About, Skills, Projects, Contributions,
│   │                         Contact, EducationExperience
│   ├── theme/                ThemeToggle
│   ├── timeline/             Timeline component
│   └── ui/                   shadcn/ui primitives (button, card, dialog, …)
├── data/
│   ├── profile.ts            Name, tagline, bio, avatar, resume link
│   ├── projects.ts           Project list (title, desc, image, demo/source URLs)
│   ├── skills.ts             Skill groups with brand icons
│   ├── socials.ts            Contact links (GitHub, LinkedIn, X, Email, Phone)
│   ├── timeline.ts           Experience + education entries
│   └── github.ts             GitHub username
└── lib/
    ├── date.ts               Date formatting helpers
    ├── motion.ts             Shared animation constants and variants
    ├── site.ts               Canonical site URL
    ├── utils.ts              cn() utility (clsx + tailwind-merge)
    └── validations.ts        Zod schema for the contact form

public/
├── favicon.png
├── profile.png               Avatar image
├── resume.pdf                Downloadable resume
├── logos/                    Institution/company logos (3)
└── projects/                 Project thumbnail images (6)
```

> 📝 Content is **data-driven** — edit the files in `src/data/` to update copy,
> skills, projects, and links rather than touching components.

## 📜 Scripts

| Command             | Description                                   |
| ------------------- | --------------------------------------------- |
| `pnpm dev`          | Start the development server (port 3000)      |
| `pnpm build`        | Production build                              |
| `pnpm start`        | Run the production build                      |
| `pnpm lint`         | Run ESLint                                    |
| `pnpm typecheck`    | Run TypeScript type checking (`tsc --noEmit`) |
| `pnpm format`       | Format all files with Prettier                |
| `pnpm format:check` | Check formatting (CI-friendly)                |

## ☁️ Deployment

The project builds with `pnpm build` and is ready for deployment on
[Vercel](https://vercel.com/):

1. 📤 Push the repository to GitHub.
2. 📥 Import the repo into Vercel.
3. 🔑 Set the three environment variables (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`,
   `NEXT_PUBLIC_SITE_URL`) in the Vercel dashboard.
4. 🚀 Deploy.

> **TODO:** A live demo URL is not confirmed. The canonical site URL defaults
> to `https://arijit-mondal.vercel.app` when unset — set `NEXT_PUBLIC_SITE_URL`
> in your production environment to enable correct SEO metadata.

## 🎨 Customization

1. 🖼️ Replace `public/profile.png` with your own avatar.
2. 📄 Replace `public/resume.pdf` with your own resume.
3. 🔗 Update `src/data/socials.ts` with your LinkedIn, X, and other handles.
4. 🗂️ Update `src/data/projects.ts` with your real project links and replace
   thumbnail images in `public/projects/`.
5. 💼 Update `src/data/timeline.ts` with your own experience and education.
6. 🛠️ Update `src/data/skills.ts` to add or remove skill entries.
7. ✏️ Update `src/data/profile.ts` to change the name, tagline, and bio.
