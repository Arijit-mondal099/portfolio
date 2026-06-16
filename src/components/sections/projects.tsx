import { Code2, ExternalLink, type LucideIcon } from "lucide-react";
import Image from "next/image";

import { Section } from "@/components/layout/section";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { projects, type Project } from "@/data/projects";

/** A single Demo/Source link with a leading icon. */
function ProjectLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: LucideIcon;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
    >
      <Icon className="size-3.5" />
      {label}
    </a>
  );
}

/**
 * One project card: a flush thumbnail (the Card rounds/trims a first-child
 * <img>), the description, and a footer of optional Demo/Source links.
 * `h-full` + `flex-1` content keep cards in a row the same height.
 */
function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full">
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={375}
        className="aspect-[16/10] w-full object-cover"
      />
      <CardContent className="flex-1">
        <p className="leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </CardContent>
      {(project.demoUrl || project.sourceUrl) && (
        <CardFooter className="gap-4">
          {project.demoUrl && (
            <ProjectLink
              href={project.demoUrl}
              icon={ExternalLink}
              label="Demo"
            />
          )}
          {project.sourceUrl && (
            <ProjectLink href={project.sourceUrl} icon={Code2} label="Source" />
          )}
        </CardFooter>
      )}
    </Card>
  );
}

/** Projects — a responsive grid of project cards (1 / 2 / 3 columns). */
export function Projects() {
  return (
    <Section id="projects" heading="Projects">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
