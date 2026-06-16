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
