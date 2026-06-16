import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";

/** Skills — a wrapped grid of pill badges (default = light chip, dark text). */
export function Skills() {
  return (
    <Section id="skills" heading="Skills">
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </Section>
  );
}
