import { Code2, GraduationCap, type LucideIcon } from "lucide-react";
import Image from "next/image";

import { revealDelay, revealItem } from "@/components/motion/reveal-item";
import { Badge } from "@/components/ui/badge";
import { type TimelineGroup } from "@/data/timeline";
import { formatDuration, formatRange } from "@/lib/date";
import { cn } from "@/lib/utils";

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

  // Starting order index for each group (1 header + N entries), so the stagger
  // flows continuously across groups: header → its entries → next header → …
  const groupStart: number[] = [];
  let running = 0;
  for (const group of groups) {
    groupStart.push(running);
    running += 1 + group.entries.length;
  }

  return (
    <div className="flex flex-col gap-8">
      {groups.map((group, gi) => (
        <div key={group.org}>
          <div
            className={cn("mb-4 flex items-center gap-3", revealItem)}
            style={revealDelay(groupStart[gi])}
          >
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

          <ol className="flex flex-col gap-6">
            {group.entries.map((entry, index) => (
              <li
                key={entry.title}
                className={cn("relative pl-10", revealItem)}
                style={revealDelay(groupStart[gi] + 1 + index)}
              >
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
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}
