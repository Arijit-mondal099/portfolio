"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  useState,
} from "react";

import { LOADING_DURATION } from "@/lib/motion";
import { LoadingScreen } from "@/components/loading/loading-screen";

const SESSION_KEY = "portfolio:loaded";

/** No-op unsubscribe factory for stores we read once and never resubscribe to. */
const emptySubscribe = () => () => {};

/**
 * `prefers-reduced-motion` value. Server reports `false` so the first hydrated
 * render matches the server markup; the real client value re-renders before paint.
 * Read via `useSyncExternalStore` (not in an effect) to avoid setState-in-effect.
 */
function useReducedMotion() {
  return useSyncExternalStore(
    (cb) => {
      if (typeof window === "undefined") return () => {};
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}

/**
 * Whether this tab already dismissed the splash. Server reports `false`; the
 * client reads `sessionStorage` once after hydration (no live subscription
 * needed — the flag is write-once per session).
 */
function useSessionFlag(key: string) {
  return useSyncExternalStore(
    emptySubscribe,
    () => {
      try {
        return window.sessionStorage.getItem(key) === "1";
      } catch {
        return false;
      }
    },
    () => false
  );
}

interface LoadingGateContextValue {
  /** `true` once the splash has been dismissed (or should be skipped). */
  done: boolean;
}

const LoadingGateContext = createContext<LoadingGateContextValue>({
  done: true,
});

/** Gate entrance animations behind the loading splash. */
export function useLoadingGate() {
  return useContext(LoadingGateContext);
}

interface LoadingGateProps {
  children: React.ReactNode;
}

/**
 * Holds the loading state for the whole tree: mounts the splash overlay, runs
 * the dismissal timer (or short-circuits for reduced motion / returning
 * visitors), and exposes a `done` flag so on-mount and scroll entrances can be
 * deferred until the splash is gone.
 *
 * `done` defaults to `true` for consumers outside this provider, so any
 * component reading the gate degrades to "animate immediately" when unmounted.
 */
export function LoadingGate({ children }: LoadingGateProps) {
  const reduced = useReducedMotion();
  const wasLoaded = useSessionFlag(SESSION_KEY);
  const skipImmediately = reduced || wasLoaded;

  const [held, setHeld] = useState(false);
  useEffect(() => {
    if (skipImmediately) return;
    const id = window.setTimeout(() => {
      try {
        window.sessionStorage.setItem(SESSION_KEY, "1");
      } catch {}
      setHeld(true);
    }, LOADING_DURATION);
    return () => window.clearTimeout(id);
  }, [skipImmediately]);

  const done = skipImmediately || held;

  useEffect(() => {
    if (done) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [done]);

  return (
    <>
      <LoadingScreen done={done} />
      <LoadingGateContext.Provider value={{ done }}>
        {/* While the splash is up, inert the page behind it so hidden content
            can't receive focus or clicks. The flex layout lives on this wrapper
            (body is a single flex child) so moving the column here preserves
            header/main/footer sizing. */}
        <div inert={!done} className="flex min-h-full flex-col">
          {children}
        </div>
      </LoadingGateContext.Provider>
    </>
  );
}
