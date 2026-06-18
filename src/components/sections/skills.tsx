import { Section } from "@/components/layout/section";
import { Marquee } from "@/components/motion/marquee";
import { Reveal } from "@/components/motion/reveal";
import { skillGroups } from "@/data/skills";

/**
 * Skills — one labeled category per row, each an auto-scrolling marquee of
 * logo + name tiles. The marquee is pure CSS (see `.marquee` in globals.css);
 * tiles keep their hover lift.
 */
export function Skills() {
  return (
    <Section id="skills" heading="Skills">
      <div className="flex flex-col gap-6">
        {skillGroups.map(({ category, skills }, index) => (
          <Reveal key={category} className="flex flex-col gap-3">
            <h3 className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
              {category}
            </h3>
            {/* Alternate travel per row: first left→right, second right→left… */}
            <Marquee itemCount={skills.length} reverse={index % 2 === 0}>
              {skills.map(({ name, icon: Icon }) => (
                // Outer `group` is the hover target; the inner chip does the
                // hover transforms via group-hover, matching the rest of the UI.
                <div key={name} className="group shrink-0">
                  <div className="flex items-center gap-2.5 rounded-md border border-border bg-card px-3 py-2 text-sm transition-all duration-200 group-hover:scale-[1.03] group-hover:border-foreground/25 group-hover:bg-accent group-hover:shadow-sm">
                    <Icon className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                    <span className="whitespace-nowrap">{name}</span>
                  </div>
                </div>
              ))}
            </Marquee>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
