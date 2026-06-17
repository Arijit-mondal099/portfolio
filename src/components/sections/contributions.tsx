"use client";

import { useQuery } from "@tanstack/react-query";
import { useTheme } from "next-themes";
import {
  ActivityCalendar,
  type Activity,
  type ThemeInput,
} from "react-activity-calendar";
import "react-activity-calendar/tooltips.css";

import { Section } from "@/components/layout/section";
import { RevealGroup } from "@/components/motion/reveal-group";
import { revealDelay, revealItem } from "@/components/motion/reveal-item";
import { github } from "@/data/github";
import { formatLongDate } from "@/lib/date";
import { cn } from "@/lib/utils";

// GitHub green ramps (level 0 → 4). Index 0 is the empty cell, tinted to each
// theme's muted tone so it blends in; the rest are GitHub's own green scales.
const RAMP_DARK = ["#26241c", "#0e4429", "#006d32", "#26a641", "#39d353"];
const RAMP_LIGHT = ["#e2ded2", "#9be9a8", "#40c463", "#30a14e", "#216e39"];
const calendarTheme: ThemeInput = { light: RAMP_LIGHT, dark: RAMP_DARK };

const GITHUB_URL = `https://github.com/${github.username}`;

/** Fetch the contributions calendar from our own server route. */
async function fetchContributions(): Promise<Activity[]> {
  const res = await fetch("/api/contributions");
  if (!res.ok) throw new Error("Failed to load contributions");
  return res.json();
}

/** GitHub-style "Less ▢▢▢▢▢ More" legend, using the active theme's ramp. */
function ContributionLegend({ ramp }: { ramp: string[] }) {
  return (
    <div className="flex items-center gap-1 text-xs text-muted-foreground">
      <span className="mr-1">Less</span>
      {ramp.map((color) => (
        <span
          key={color}
          className="size-2.5 rounded-[2px]"
          style={{ backgroundColor: color }}
        />
      ))}
      <span className="ml-1">More</span>
    </div>
  );
}

/**
 * GitHub Contributions — a yearly heatmap with per-day hover tooltips. Data is
 * fetched through React Query (server route → useQuery) so loading/error/caching
 * are handled consistently with the rest of the app. The ramp + tooltip recolor
 * with the active theme; the footer mirrors GitHub's "N contributions in <year>"
 * line plus a Less/More legend.
 */
export function Contributions() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["contributions"],
    queryFn: fetchContributions,
  });

  return (
    <Section id="contributions" heading="GitHub Contributions" animateHeading>
      <RevealGroup>
        {isError ? (
          <p className={cn("text-sm text-muted-foreground", revealItem)}>
            Couldn&apos;t load contributions right now.
          </p>
        ) : isPending ? (
          <div className="h-32 w-full rounded-md bg-muted motion-safe:animate-pulse" />
        ) : data.length === 0 ? (
          <p className={cn("text-sm text-muted-foreground", revealItem)}>
            No contributions yet.
          </p>
        ) : (
          <ContributionGraph data={data} />
        )}
      </RevealGroup>
    </Section>
  );
}

/** The calendar + footer, rendered once data is available. */
function ContributionGraph({ data }: { data: Activity[] }) {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";
  const ramp = isLight ? RAMP_LIGHT : RAMP_DARK;

  const total = data.reduce((sum, day) => sum + day.count, 0);
  // jogruber returns ascending dates, so the first entry is the window's start.
  const year = Number(data[0].date.slice(0, 4));

  return (
    <>
      <div
        className={cn(
          "no-scrollbar overflow-x-auto pb-2 text-muted-foreground",
          revealItem
        )}
        style={revealDelay(0)}
      >
        <ActivityCalendar
          data={data}
          theme={calendarTheme}
          colorScheme={isLight ? "light" : "dark"}
          blockSize={11}
          blockMargin={3}
          fontSize={12}
          showColorLegend={false}
          showTotalCount={false}
          tooltips={{
            activity: {
              text: (day) =>
                `${day.count === 0 ? "No" : day.count} contribution${
                  day.count === 1 ? "" : "s"
                } on ${formatLongDate(day.date)}`,
            },
          }}
        />
      </div>

      <div
        className={cn(
          "mt-1 flex flex-wrap items-center justify-between gap-3",
          revealItem
        )}
        style={revealDelay(1)}
      >
        <p className="text-sm text-muted-foreground">
          {total.toLocaleString()} contributions in {year} on{" "}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline underline-offset-4"
          >
            GitHub
          </a>
        </p>
        <ContributionLegend ramp={ramp} />
      </div>
    </>
  );
}
