import type { IconType } from "react-icons";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaXTwitter,
} from "react-icons/fa6";

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
    label: "Phone",
    handle: "+91 8016075232",
    href: "tel:+918016075232",
    icon: FaPhone,
  },
  {
    label: "LinkedIn",
    handle: "in/arijit-mondal-211217287",
    href: "https://www.linkedin.com/in/arijit-mondal-211217287/",
    icon: FaLinkedin,
  },
  {
    label: "X (Twitter)",
    handle: "@arijit_m_000999",
    href: "https://x.com/arijit_m_000999",
    icon: FaXTwitter,
  },
];
