import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import { type Project } from "@/data/projects";

/** Responsive grid of project cards: 1 column on mobile, 2 from `sm` up. */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {projects.map((project, index) => (
        <Reveal
          key={project.title}
          delay={Math.min(index, 8) * 50}
          className="h-full"
        >
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
