"use client";

import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

/**
 * TanStack Query setup for the App Router.
 *
 * Server-side data (GitHub contributions, the contact mutation) is fetched
 * through React Query. The client factory follows the official Next.js pattern:
 * a fresh client per server request (so state never leaks between users), and a
 * single shared client in the browser (so it survives re-renders).
 */
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Treat data as fresh for a minute to avoid an immediate refetch
        // right after hydration.
        staleTime: 60 * 1000,
        retry: 1,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined;

function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  }
  // Reuse the same client across renders in the browser.
  browserQueryClient ??= makeQueryClient();
  return browserQueryClient;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
