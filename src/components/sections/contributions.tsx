"use client";

import { useQuery } from "@tanstack/react-query";
import {
  ActivityCalendar,
  type Activity,
  type ThemeInput,
} from "react-activity-calendar";
import "react-activity-calendar/tooltips.css";

import { Section } from "@/components/layout/section";
import { github } from "@/data/github";
import { formatLongDate } from "@/lib/date";

// GitHub-style green ramp (level 0 → 4). Index 0 reuses a muted tone so empty
// cells blend with the dark canvas. Shared by the calendar theme and legend.
const RAMP = ["#161b24", "#0e4429", "#006d32", "#26a641", "#39d353"];
const calendarTheme: ThemeInput = { light: RAMP, dark: RAMP };

const GITHUB_URL = `https://github.com/${github.username}`;

/** Fetch the contributions calendar from our own server route. */
async function fetchContributions(): Promise<Activity[]> {
  const res = await fetch("/api/contributions");
  if (!res.ok) throw new Error("Failed to load contributions");
  return res.json();
}

/** GitHub-style "Less ▢▢▢▢▢ More" color legend. */
function ContributionLegend() {
  return (
    <div className="flex items-center gap-1 text-xs text-muted-foreground">
      <span className="mr-1">Less</span>
      {RAMP.map((color) => (
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
 * are handled consistently with the rest of the app. Tooltips are built into
 * react-activity-calendar (positioned by floating-ui); the footer mirrors
 * GitHub's "N contributions in <year>" line plus a Less/More legend.
 */
export function Contributions() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["contributions"],
    queryFn: fetchContributions,
  });

  return (
    <Section id="contributions" heading="GitHub Contributions">
      {isError ? (
        <p className="text-sm text-muted-foreground">
          Couldn&apos;t load contributions right now.
        </p>
      ) : isPending ? (
        <div className="h-32 w-full animate-pulse rounded-md bg-muted" />
      ) : data.length === 0 ? (
        <p className="text-sm text-muted-foreground">No contributions yet.</p>
      ) : (
        <ContributionGraph data={data} />
      )}
    </Section>
  );
}

/** The calendar + footer, rendered once data is available. */
function ContributionGraph({ data }: { data: Activity[] }) {
  const total = data.reduce((sum, day) => sum + day.count, 0);
  // jogruber returns ascending dates, so the first entry is the window's start.
  const year = Number(data[0].date.slice(0, 4));

  return (
    <>
      <div className="overflow-x-auto pb-2 text-muted-foreground">
        <ActivityCalendar
          data={data}
          theme={calendarTheme}
          colorScheme="dark"
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

      <div className="mt-1 flex flex-wrap items-center justify-between gap-3">
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
        <ContributionLegend />
      </div>
    </>
  );
}
