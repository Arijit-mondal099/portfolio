import { Section } from "@/components/layout/section";
import { profile } from "@/data/profile";

/** About — a short bio paragraph below the hero. */
export function About() {
  return (
    <Section id="about" heading="About">
      <p className="leading-relaxed text-muted-foreground">{profile.about}</p>
    </Section>
  );
}
