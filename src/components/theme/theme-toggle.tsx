"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

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

/**
 * Theme toggle — a circular icon button showing the current mode (sun in light,
 * moon in dark) that flips the theme on click. Until mounted we render a
 * same-size placeholder to avoid a hydration mismatch.
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
      className="rounded-full"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? <Moon /> : <Sun />}
    </Button>
  );
}
