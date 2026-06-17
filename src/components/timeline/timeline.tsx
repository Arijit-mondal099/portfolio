import { Code2, GraduationCap, type LucideIcon } from "lucide-react";
import Image from "next/image";

import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Badge } from "@/components/ui/badge";
import { type TimelineGroup } from "@/data/timeline";
import { formatDuration, formatRange } from "@/lib/date";

// Marker icon shown beside each entry, per tab.
const markerIcon: Record<"experience" | "education", LucideIcon> = {
  experience: Code2,
  education: GraduationCap,
};

/**
 * A vertical timeline grouped by organization. Each group shows a logo + name
 * (with an optional "currently here" dot); entries hang off a connecting line
 * with a marker, and render either tech-tag badges or achievement bullets.
 */
export function Timeline({
  groups,
  variant,
}: {
  groups: TimelineGroup[];
  variant: "experience" | "education";
}) {
  const Marker = markerIcon[variant];

  return (
    <div className="flex flex-col gap-8">
      {groups.map((group) => (
        <div key={group.org}>
          <div className="mb-4 flex items-center gap-3">
            <Image
              src={group.logo}
              alt={group.org}
              width={28}
              height={28}
              className="size-7 shrink-0 rounded-full object-cover"
            />
            <h3 className="font-semibold">{group.org}</h3>
            {group.current && (
              <span
                className="size-2 shrink-0 rounded-full bg-emerald-500"
                aria-label="Currently here"
              />
            )}
          </div>

          <Stagger as="ol" className="flex flex-col gap-6" stagger={0.06}>
            {group.entries.map((entry, index) => (
              <StaggerItem as="li" key={entry.title} className="relative pl-10">
                {/* Connecting line to the next entry (not after the last). */}
                {index < group.entries.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute top-7 -bottom-6 left-[13.5px] w-px bg-border"
                  />
                )}

                <span className="absolute top-0 left-0 flex size-7 items-center justify-center rounded-full border border-border bg-background text-muted-foreground">
                  <Marker className="size-3.5" />
                </span>

                <h4 className="font-medium">{entry.title}</h4>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {formatRange(entry.start, entry.end)}
                  <span className="ml-3">
                    {formatDuration(entry.start, entry.end)}
                  </span>
                </p>

                {entry.description && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {entry.description}
                  </p>
                )}

                {entry.tags && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {entry.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                {entry.bullets && (
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-muted-foreground marker:text-muted-foreground/50">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      ))}
    </div>
  );
}
