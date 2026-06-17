import { Code2, ExternalLink, type LucideIcon } from "lucide-react";
import Image from "next/image";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { type Project } from "@/data/projects";

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
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full transform-gpu transition-transform duration-300 ease-out motion-safe:hover:-translate-y-1.5">
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
