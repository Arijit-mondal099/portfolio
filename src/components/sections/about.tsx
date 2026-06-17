import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { profile } from "@/data/profile";

/** About — a short bio paragraph below the hero. */
export function About() {
  return (
    <Section id="about" heading="About">
      <Reveal
        as="p"
        className="leading-relaxed text-muted-foreground"
        delay={0.12}
      >
        {profile.about}
      </Reveal>
    </Section>
  );
}
