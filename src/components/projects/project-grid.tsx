import { ProjectCard } from "@/components/projects/project-card";
import { type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

/**
 * Responsive grid of project cards.
 *
 * `columns` caps the widest layout: 2 (home preview, roomier cards) or 3
 * (the full /projects listing). It always collapses to 1 column on mobile.
 */
export function ProjectGrid({
  projects,
  columns = 3,
}: {
  projects: Project[];
  columns?: 2 | 3;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2",
        columns === 3 && "lg:grid-cols-3"
      )}
    >
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
