import { Section } from "@/components/layout/section";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { skills } from "@/data/skills";

/** Skills — a responsive grid of tiles, each with a tech logo + name. */
export function Skills() {
  return (
    <Section id="skills" heading="Skills">
      <Stagger
        className="grid grid-cols-2 gap-2.5 sm:grid-cols-3"
        stagger={0.05}
      >
        {skills.map(({ name, icon: Icon }) => (
          <StaggerItem
            key={name}
            className="flex items-center gap-2.5 rounded-md border border-border bg-card px-3 py-2 text-sm transition-colors hover:bg-accent"
          >
            <Icon className="size-4 shrink-0" />
            <span>{name}</span>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
