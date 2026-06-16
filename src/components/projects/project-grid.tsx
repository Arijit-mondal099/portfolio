import { ProjectCard } from "@/components/projects/project-card";
import { type Project } from "@/data/projects";

/** Responsive grid of project cards: 1 column on mobile, 2 from `sm` up. */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
