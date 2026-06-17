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
          // The stagger wrapper is the stable hover target (`group`); the inner
          // chip does the hover transforms via group-hover, so the entrance
          // transform (on the wrapper) and the hover scale (on the chip) never
          // fight over the same element. Scale, not translate, avoids jitter.
          <StaggerItem key={name} className="group">
            <div className="flex items-center gap-2.5 rounded-md border border-border bg-card px-3 py-2 text-sm transition-all duration-200 group-hover:scale-[1.03] group-hover:border-foreground/25 group-hover:bg-accent group-hover:shadow-sm">
              <Icon className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
              <span>{name}</span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
