import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names safely.
 *
 * `clsx` resolves conditional/array class inputs into a single string, then
 * `twMerge` removes conflicting Tailwind utilities (e.g. `px-2 px-4` -> `px-4`)
 * so the last declared utility wins. Used by every shadcn/ui component.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
