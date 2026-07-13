/**
 * Profile content for the Hero and About sections.
 *
 * This is the single source of truth for the site owner's identity copy —
 * edit the values here (and swap `public/profile.png` / `public/resume.pdf`)
 * rather than touching the components.
 */
export interface Profile {
  /** Full name shown as the hero headline. */
  name: string;
  /** Tagline lines rendered under the name (one <p> per entry). */
  tagline: string[];
  /** About paragraph. */
  about: string;
  /** Avatar image served from /public. */
  avatar: { src: string; alt: string };
  /** Link to the downloadable résumé (place the file in /public). */
  resumeUrl: string;
  /** In-page anchor to the contact section. */
  contactHref: string;
  /** Short lead-in shown above the contact links. */
  contactNote: string;
  /** Availability status shown as a badge by the contact heading. */
  availability: string;
}

export const profile: Profile = {
  name: "Arijit Mondal",
  tagline: ["Building things that work...", "You're welcome :)"],
  about:
    "Full-Stack Developer building reliable, scalable web systems with AI " +
    "at the core. I work across the stack, from user-facing interfaces to " +
    "backend architecture and AI integrations like RAG pipelines and " +
    "LLM-powered features, with a focus on clean architecture and " +
    "predictable behavior.",
  avatar: { src: "/profile.png", alt: "Arijit Mondal" },
  resumeUrl: "/resume.pdf",
  contactHref: "#contact",
  contactNote:
    "Have a project in mind, a question, or just want to say hi? Drop a " +
    "message — or reach out on any of these.",
  availability: "Open to opportunities",
};
