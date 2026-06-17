import { Section } from "@/components/layout/section";
import { RevealGroup } from "@/components/motion/reveal-group";
import { revealDelay, revealItem } from "@/components/motion/reveal-item";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

/** About — a short bio paragraph below the hero. */
export function About() {
  return (
    <Section id="about" heading="About" animateHeading>
      <RevealGroup>
        <p
          className={cn("leading-relaxed text-muted-foreground", revealItem)}
          style={revealDelay(0)}
        >
          {profile.about}
        </p>
      </RevealGroup>
    </Section>
  );
}
