"use client";

import { useQuery } from "@tanstack/react-query";
import {
  ActivityCalendar,
  type Activity,
  type ThemeInput,
} from "react-activity-calendar";

import { Section } from "@/components/layout/section";

// GitHub-style green ramp. Index 0 is the empty ("no contributions") cell and
// reuses the page's --muted tone so it blends with the dark canvas.
const calendarTheme: ThemeInput = {
  light: ["#161b24", "#0e4429", "#006d32", "#26a641", "#39d353"],
  dark: ["#161b24", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

/** Fetch the contributions calendar from our own server route. */
async function fetchContributions(): Promise<Activity[]> {
  const res = await fetch("/api/contributions");
  if (!res.ok) throw new Error("Failed to load contributions");
  return res.json();
}

/**
 * Contributions — a GitHub-style yearly heatmap. Data is fetched through React
 * Query (server route → useQuery) rather than by the calendar component itself,
 * so loading/error/caching are handled consistently with the rest of the app.
 */
export function Contributions() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["contributions"],
    queryFn: fetchContributions,
  });

  return (
    <Section id="contributions" heading="Contributions">
      {isError ? (
        <p className="text-sm text-muted-foreground">
          Couldn&apos;t load contributions right now.
        </p>
      ) : isPending ? (
        <div className="h-32 w-full animate-pulse rounded-md bg-muted" />
      ) : data.length === 0 ? (
        <p className="text-sm text-muted-foreground">No contributions yet.</p>
      ) : (
        <div className="overflow-x-auto pb-2 text-muted-foreground">
          <ActivityCalendar
            data={data}
            theme={calendarTheme}
            colorScheme="dark"
            blockSize={11}
            blockMargin={3}
            fontSize={12}
            showColorLegend={false}
            labels={{ totalCount: "{{count}} contributions in the last year" }}
          />
        </div>
      )}
    </Section>
  );
}
