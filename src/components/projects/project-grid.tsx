import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { ProjectCard } from "@/components/projects/project-card";
import { type Project } from "@/data/projects";

/** Responsive grid of project cards: 1 column on mobile, 2 from `sm` up. */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.1}>
      {projects.map((project) => (
        <StaggerItem key={project.title} className="group h-full">
          <ProjectCard project={project} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
