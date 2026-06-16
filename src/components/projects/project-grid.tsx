import { ProjectCard } from "@/components/projects/project-card";
import { type Project } from "@/data/projects";

/** Responsive 1 / 2 / 3-column grid of project cards. */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
