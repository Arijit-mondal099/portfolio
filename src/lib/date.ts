/**
 * Date helpers for the experience / education timeline.
 *
 * Dates are stored as `"YYYY-MM"` strings; a `null` end means "present".
 */

/** `"2020-07"` → `"07.2020"`. */
export function formatMonthYear(value: string): string {
  const [year, month] = value.split("-");
  return `${month}.${year}`;
}

const MONTHS_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/**
 * `"2025-06-15"` → `"Jun 15, 2025"`. Parsed manually rather than via `new Date`,
 * which would read the string as UTC midnight and can shift a day in local time.
 */
export function formatLongDate(value: string): string {
  const [year, month, day] = value.split("-").map(Number);
  return `${MONTHS_SHORT[month - 1]} ${day}, ${year}`;
}

/** `("2020-07", "2024-05")` → `"07.2020 – 05.2024"` (present end → `"∞"`). */
export function formatRange(start: string, end: string | null): string {
  const endLabel = end ? formatMonthYear(end) : "∞";
  return `${formatMonthYear(start)} – ${endLabel}`;
}

/**
 * Inclusive duration between two `"YYYY-MM"` dates → `"3y 11m"` / `"10m"`.
 * The `+ 1` counts both the start and end months, matching how durations are
 * conventionally shown on a résumé. A `null` end counts up to the current month.
 */
export function formatDuration(start: string, end: string | null): string {
  const [startYear, startMonth] = start.split("-").map(Number);

  let endYear: number;
  let endMonth: number;
  if (end) {
    [endYear, endMonth] = end.split("-").map(Number);
  } else {
    const now = new Date();
    endYear = now.getFullYear();
    endMonth = now.getMonth() + 1;
  }

  const months = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(`${years}y`);
  if (remainingMonths > 0 || years === 0) parts.push(`${remainingMonths}m`);
  return parts.join(" ");
}
