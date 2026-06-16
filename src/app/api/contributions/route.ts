import { NextResponse } from "next/server";

import { github } from "@/data/github";

// Tokenless public proxy for a user's GitHub contribution calendar. The v4
// endpoint already returns levels 0–4, which matches react-activity-calendar.
const CONTRIBUTIONS_API = "https://github-contributions-api.jogruber.de/v4";

/**
 * GET /api/contributions?username=<login>
 *
 * Fetches the last year of GitHub contributions on the server and returns a
 * flat `Activity[]` (`{ date, count, level }`) for the heatmap. Doing the
 * upstream call here (not in the browser) sidesteps CORS, hides the data
 * source, and lets Next cache the response.
 */
export async function GET(request: Request) {
  const username =
    new URL(request.url).searchParams.get("username") ?? github.username;

  const upstream = await fetch(`${CONTRIBUTIONS_API}/${username}?y=last`, {
    // Contributions update at most once a day — cache upstream for an hour.
    next: { revalidate: 3600 },
  });

  if (!upstream.ok) {
    return NextResponse.json(
      { error: `Unable to load contributions for "${username}".` },
      { status: upstream.status }
    );
  }

  const { contributions = [] } = await upstream.json();
  return NextResponse.json(contributions);
}
