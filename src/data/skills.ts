import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import { LuDatabase, LuNetwork } from "react-icons/lu";
import {
  SiCplusplus,
  SiCss,
  SiDocker,
  SiDrizzle,
  SiExpress,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  // SiPython,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiReactquery,
  SiRedis,
  SiClaude,
  SiModelcontextprotocol,
  SiLangchain,
} from "react-icons/si";

/**
 * Skills shown as a logo grid, organized into labeled categories. Each entry
 * pairs a display name with a brand logo (react-icons). A few items without an
 * official Simple Icon use a close stand-in: Motion uses the Framer mark (it was
 * formerly Framer Motion); REST APIs and Vector DB (Pinecone) use neutral Lucide
 * icons; VS Code uses the mark from the VS Code icon set.
 */
export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "C++", icon: SiCplusplus },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      // { name: "Python", icon: SiPython },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Shadcn/UI", icon: SiShadcnui },
      { name: "Motion", icon: SiFramer },
      { name: "Redux", icon: SiRedux },
      { name: "Tanstack Query", icon: SiReactquery },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Mongoose", icon: SiMongoose },
      { name: "Prisma", icon: SiPrisma },
      { name: "Drizzle", icon: SiDrizzle },
      { name: "Socket.IO", icon: SiSocketdotio },
      { name: "REST APIs", icon: LuNetwork },
      { name: "JWT Auth", icon: SiJsonwebtokens },
      { name: "MCP", icon: SiModelcontextprotocol },
      { name: "LangChain", icon: SiLangchain },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
      { name: "Vector DB (Pinecone)", icon: LuDatabase },
    ],
  },
  {
    category: "Cloud & Tools",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Claude Code", icon: SiClaude },
    ],
  },
];
