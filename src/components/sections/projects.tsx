import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Section } from "@/components/layout/section";
import { ProjectGrid } from "@/components/projects/project-grid";
import { projects } from "@/data/projects";

// How many projects to preview on the home page (one row). The rest live on
// the dedicated /projects page.
const FEATURED_COUNT = 3;

/**
 * Projects — a one-row preview of featured projects with a link to the full
 * /projects listing. The grid itself is shared via <ProjectGrid>.
 */
export function Projects() {
  const featured = projects.slice(0, FEATURED_COUNT);

  return (
    <Section id="projects" heading="Projects">
      <ProjectGrid projects={featured} />

      {projects.length > FEATURED_COUNT && (
        <Link
          href="/projects"
          className="mt-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          View all projects
          <ArrowRight className="size-4" />
        </Link>
      )}
    </Section>
  );
}
