import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { skills } from "@/data/skills";

/** Skills — a responsive grid of tiles, each with a tech logo + name. */
export function Skills() {
  return (
    <Section id="skills" heading="Skills" animateHeading>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {skills.map(({ name, icon: Icon }, index) => (
          <Reveal key={name} delay={Math.min(index, 8) * 50}>
            <div className="flex items-center gap-2.5 rounded-md border border-border bg-card px-3 py-2 text-sm transition-colors duration-200 ease-out hover:border-foreground/20 hover:bg-accent">
              <Icon className="size-4 shrink-0" />
              <span>{name}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
