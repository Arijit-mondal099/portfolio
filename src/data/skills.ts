import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import { LuActivity, LuLeaf } from "react-icons/lu";
import {
  SiBun,
  SiDocker,
  SiExpress,
  SiGo,
  SiHono,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRust,
  SiSolana,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

/**
 * Skills shown as a logo grid. Each entry pairs a display name with a brand
 * logo (react-icons). A few items without an official Simple Icon use a close
 * stand-in: React Native reuses the React mark, AWS uses the Font Awesome mark,
 * Elysia/Monitoring use neutral icons.
 */
export interface Skill {
  name: string;
  icon: IconType;
}

export const skills: Skill[] = [
  { name: "Typescript", icon: SiTypescript },
  { name: "Rust", icon: SiRust },
  { name: "Golang", icon: SiGo },
  { name: "Solana", icon: SiSolana },
  { name: "React", icon: SiReact },
  { name: "React Native", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bun.js", icon: SiBun },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Elysia", icon: LuLeaf },
  { name: "Hono", icon: SiHono },
  { name: "Express", icon: SiExpress },
  { name: "Postgres", icon: SiPostgresql },
  { name: "Mongo DB", icon: SiMongodb },
  { name: "Prisma", icon: SiPrisma },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "AWS", icon: FaAws },
  { name: "Nginx", icon: SiNginx },
  { name: "Monitoring", icon: LuActivity },
];
