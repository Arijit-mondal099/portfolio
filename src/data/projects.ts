/**
 * Projects shown in the card grid.
 *
 * Replace the placeholder thumbnails in `public/projects/` and the demo/source
 * URLs with real ones. `demoUrl` / `sourceUrl` are optional — a link only
 * renders when its URL is present.
 */
export interface Project {
  /** Project name — used as the card image alt text and accessible label. */
  title: string;
  /** Short description of what the project is. */
  description: string;
  /** Thumbnail served from /public. */
  image: string;
  /** Live demo URL. */
  demoUrl?: string;
  /** Source code URL. */
  sourceUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Realtime Video Chat",
    description:
      "A real-time, Omegle-style video chat app featuring instant matchmaking, private rooms, and live peer-to-peer streaming.",
    image: "/projects/project-1.png",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "E-commerce Storefront",
    description:
      "A responsive, performance-focused e-commerce site with a polished product catalog and a fast, accessible checkout flow.",
    image: "/projects/project-2.png",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Chat with PDF (SaaS)",
    description:
      "A SaaS web app that lets users upload PDF documents and interact with them through natural-language questions and answers.",
    image: "/projects/project-3.png",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Solana Wallet-as-a-Service",
    description:
      "A Wallet-as-a-Service platform on Solana with hybrid decentralized/centralized exchange functionality, secure authentication, and AES-GCM private key management.",
    image: "/projects/project-4.png",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "GSAP Animation Showcase",
    description:
      "An animation-driven website built with GSAP, showcasing interactive animations and smooth, performant transitions.",
    image: "/projects/project-5.png",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Admin Dashboard",
    description:
      "A modern admin dashboard built with Next.js, featuring data visualization with Recharts, form validation via React Hook Form + Zod, and a polished shadcn/Tailwind UI.",
    image: "/projects/project-6.png",
    demoUrl: "#",
    sourceUrl: "#",
  },
];
