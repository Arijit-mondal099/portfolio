"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { flushSync } from "react-dom";

import { Button } from "@/components/ui/button";

const emptySubscribe = () => () => {};

/**
 * `false` on the server and during hydration, `true` once mounted on the client
 * — without a setState-in-effect. Lets us defer the theme-dependent icon until
 * the client knows the resolved theme.
 */
function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { ready: Promise<void> };
};

/**
 * Apply a theme change with a circular reveal via the View Transitions API.
 * The clip-path grows from the center of the viewport outward.
 * Falls back to an instant swap when the API is unavailable (e.g. Firefox) or
 * the user prefers reduced motion.
 */
function changeThemeWithReveal(apply: () => void) {
  const doc = document as ViewTransitionDocument;
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReduced || !doc.startViewTransition) {
    apply();
    return;
  }

  const transition = doc.startViewTransition(() => flushSync(apply));

  void transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: ["circle(0.0% at 50% 50%)", "circle(71.0% at 50% 50%)"],
      },
      {
        duration: 450,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  });
}

/**
 * Theme toggle — a circular icon button showing the current mode (sun in light,
 * moon in dark) that flips the theme on click with a circular reveal animation.
 * Until mounted we render a same-size placeholder to avoid a hydration mismatch.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return <div className="size-8" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full hover:cursor-pointer"
      onClick={() =>
        changeThemeWithReveal(() => setTheme(isDark ? "light" : "dark"))
      }
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? <Moon /> : <Sun />}
    </Button>
  );
}
