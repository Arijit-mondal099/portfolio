import type { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

/**
 * Social / contact links shown beside the contact form.
 *
 * lucide-react no longer ships brand marks, so brand icons come from
 * react-icons. Replace the LinkedIn / X URLs and handles with the real ones.
 */
export interface Social {
  label: string;
  /** Username / address shown under the label. */
  handle: string;
  href: string;
  icon: IconType;
}

export const socials: Social[] = [
  {
    label: "GitHub",
    handle: "Arijit-mondal099",
    href: "https://github.com/Arijit-mondal099",
    icon: FaGithub,
  },
  {
    label: "Email",
    handle: "arijitm717@gmail.com",
    href: "mailto:arijitm717@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "LinkedIn",
    handle: "in/arijit-mondal",
    href: "https://www.linkedin.com/in/arijit-mondal",
    icon: FaLinkedin,
  },
  {
    label: "X (Twitter)",
    handle: "@arijit_mondal",
    href: "https://x.com/arijit_mondal",
    icon: FaXTwitter,
  },
];
