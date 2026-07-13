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
    title: "SupportAI",
    description:
      "AI-powered customer support platform answering from your own docs via RAG accurate, on-brand, no hallucinations.",
    image: "/projects/project-1.png",
    demoUrl: "https://supportai-seven.vercel.app",
    sourceUrl: "https://github.com/Arijit-mondal099/supportai",
  },
  {
    title: "Health",
    description:
      "Full-stack doctor appointment booking system with role-based dashboards, JWT auth, and Razorpay payment integration.",
    image: "/projects/project-2.png",
    demoUrl: "https://health-frontend-c4x4.onrender.com",
    sourceUrl: "https://github.com/Arijit-mondal099/health",
  },
  {
    title: "Docsy",
    description:
      "Chat with your PDFs using AI — RAG-powered document Q&A with GPT-4o, Gemini, and Pinecone vector search.",
    image: "/projects/project-3.png",
    demoUrl: "https://docsy-olive.vercel.app",
    sourceUrl: "https://github.com/Arijit-mondal099/docsy",
  },
  {
    title: "Folio",
    description:
      "AI-powered note app with inline AI transforms, a chat assistant, and export to PDF, Word, and Markdown.",
    image: "/projects/project-4.png",
    demoUrl: "https://folio-beryl-delta.vercel.app",
    sourceUrl: "https://github.com/Arijit-mondal099/folio",
  },
  {
    title: "ZenoCart",
    description:
      "Full-stack e-commerce platform with Razorpay payments, JWT auth, and an admin dashboard for orders and products.",
    image: "/projects/project-5.png",
    demoUrl: "https://zenocart.onrender.com",
    sourceUrl: "https://github.com/Arijit-mondal099/zenocart",
  },
  {
    title: "TaskPilot",
    description:
      "Task management app with a React dashboard, JWT authentication, and MongoDB-backed data persistence.",
    image: "/projects/project-6.png",
    demoUrl: "https://taskpilot-6i8g.onrender.com",
    sourceUrl: "https://github.com/Arijit-mondal099/taskPilot",
  },
];
