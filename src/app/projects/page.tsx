import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { ProjectGrid } from "@/components/projects/project-grid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Arijit Mondal",
  description: "A complete list of projects built by Arijit Mondal.",
};

/** /projects — the full listing of every project in the shared card grid. */
export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16 sm:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
        Projects
      </h1>
      <p className="mt-2 text-muted-foreground">
        Everything I&apos;ve built — {projects.length} projects and counting.
      </p>

      <div className="mt-10">
        <ProjectGrid projects={projects} />
      </div>
    </main>
  );
}
