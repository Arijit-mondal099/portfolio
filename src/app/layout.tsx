import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Toaster } from "@/components/ui/sonner";
import { siteUrl } from "@/lib/site";
import { Providers } from "./providers";

/*
 * JetBrains Mono drives the entire UI — the reference uses a monospace,
 * terminal-style typeface throughout. It's a variable font, so we don't pin
 * weights here; `--font-jetbrains-mono` is consumed by globals.css.
 */
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = "Arijit Mondal — Full-Stack & Web3 Developer";
const description =
  "Portfolio of Arijit Mondal, a Full-Stack & Web3 developer building reliable, scalable web systems.";

export const metadata: Metadata = {
  // Resolves relative metadata URLs (including the generated OG image).
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Arijit Mondal",
  },
  description,
  keywords: [
    "Arijit Mondal",
    "Full-Stack Developer",
    "Web3 Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Solana",
    "Portfolio",
  ],
  authors: [{ name: "Arijit Mondal" }],
  creator: "Arijit Mondal",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Arijit Mondal",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@arijit_mondal",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // next-themes sets the theme class on <html>; suppressHydrationWarning
  // silences the expected mismatch from that pre-paint class swap.
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jetbrainsMono.variable} h-full motion-safe:scroll-smooth`}
    >
      <body className="flex min-h-full flex-col">
        {/* Without JS the scroll-reveal observers never run, so reveal wrappers
            (data-shown="false") would stay hidden. Show them by default then. */}
        <noscript>
          <style>{`[data-shown="false"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {/* Providers (theme + query) wrap the chrome so the toggle and toasts
            get theme context. The providers add no DOM, so the flex layout is
            preserved. */}
        <Providers>
          <SiteHeader />
          {children}
          <Footer />
          {/* Toasts follow the active theme (sonner reads next-themes). */}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
