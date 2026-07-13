/**
 * Experience & education entries for the timeline section.
 *
 * Dates are `"YYYY-MM"`; `end: null` means "present". Edit the content here and
 * swap the placeholder logos in `public/logos/` for real ones.
 */
export interface TimelineEntry {
  /** Role (experience) or qualification (education). */
  title: string;
  start: string; // "YYYY-MM"
  end: string | null; // null = present
  description?: string;
  /** Tech tags — experience entries. */
  tags?: string[];
  /** Achievements — education entries. */
  bullets?: string[];
}

export interface TimelineGroup {
  /** Company or institution. */
  org: string;
  /** Logo served from /public. */
  logo: string;
  /** Marks the present employer with a "currently here" dot. */
  current?: boolean;
  entries: TimelineEntry[];
}

/**
export const experience: TimelineGroup[] = [
  {
    org: "Unizoy",
    logo: "/logos/unizoy.png",
    current: true,
    entries: [
      {
        title: "Software Developer",
        start: "2025-09",
        end: null,
        description: "Working on Unizoy's AI platform.",
        tags: [
          "Next.js",
          "NestJS",
          "TypeScript",
          "AI",
          "LangChain",
          "Docker",
          "AWS",
          "Redis",
          "Nginx",
          "CI/CD",
          "PostgreSQL",
          "Research",
        ],
      },
      {
        title: "Full Stack Developer (Intern)",
        start: "2025-04",
        end: "2025-09",
        tags: [
          "React.js",
          "NestJS",
          "Flask",
          "TypeScript",
          "Docker",
          "Figma",
          "PostgreSQL",
          "RAG",
          "OpenAI",
          "Webhooks",
        ],
      },
    ],
  },
];
*/

export const experience: TimelineGroup[] = [
  {
    org: "IPage UM Services Pvt Ltd",
    logo: "/logos/ipage.png",
    current: false,
    entries: [
      {
        title: "Full Stack MERN Intern",
        start: "2025-09",
        end: "2026-02",
        description:
          "Built 12-15 full-stack features for a multi-module production platform — AI template generation, authentication, payments, and real-time lead chat. Designed 25-30 REST API endpoints and built serverless workflows (AWS Lambda, DynamoDB) processing 300-500+ records.",
        tags: [
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "AWS Lambda",
          "AWS API Gateway",
          "AWS DynamoDB",
          "REST APIs",
          "JWT Auth",
          "Serverless",
        ],
      },
    ],
  },
];

/**
export const education: TimelineGroup[] = [
  {
    org: "Indian Institute of Technology (IIT) Patna",
    logo: "/logos/iit-patna.png",
    entries: [
      {
        title: "BTech in Computer Science and Engineering",
        start: "2020-07",
        end: "2024-05",
        bullets: [
          "NSS Volunteer",
          "Won Gold in Yearbook 2024 Football tournament",
        ],
      },
    ],
  },
  {
    org: "Global Public School & Jr. College",
    logo: "/logos/global-public.png",
    entries: [
      {
        title: "HSC Exam conducted by Maharashtra State Board",
        start: "2018-06",
        end: "2020-03",
      },
    ],
  },
  {
    org: "New Maratha Highschool",
    logo: "/logos/new-maratha.png",
    entries: [
      {
        title: "SSC Exam conducted by Maharashtra State Board",
        start: "2016-06",
        end: "2018-03",
      },
    ],
  },
];
*/

export const education: TimelineGroup[] = [
  {
    org: "Dumkal Institute of Engineering & Technology",
    logo: "/logos/dumkal-institute.png",
    current: true,
    entries: [
      {
        title:
          "B.Tech in Computer Science and Engineering (CSE) — Maulana Abul Kalam Azad University of Technology, West Bengal (AICTE)",
        start: "2026-06",
        end: "2029-05",
        description: "Currently in 2nd year.",
        bullets: [],
      },
    ],
  },
  {
    org: "Berhampore Polytechnic College",
    logo: "/logos/berhampore-polytechnic.png",
    current: false,
    entries: [
      {
        title: "Diploma in Computer Science and Technology (WBSCTE)",
        start: "2023-06",
        end: "2026-05",
        bullets: ["GPA: 7.5"],
      },
    ],
  },
];
