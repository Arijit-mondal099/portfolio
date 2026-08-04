import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { Footer } from "@/components/layout/footer";
import { LoadingGate } from "@/components/loading/loading-gate";
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

const title = "Arijit Mondal | Full-Stack Developer";
const description =
  "Portfolio of Arijit Mondal, a Full-Stack Developer building modern, scalable web applications with React, Next.js, TypeScript, Node.js, PostgreSQL, and AI-powered technologies.";

export const metadata: Metadata = {
  // Resolves relative metadata URLs (including the generated OG image).
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Arijit Mondal",
  },
  description,
  keywords: [
    "Arijit Mondal",
    "Arijit Mondal Portfolio",
    "Full-Stack Developer",
    "Full Stack Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Software Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Redux Toolkit",
    "AWS",
    "REST API",
    "AI Applications",
    "RAG Developer",
    "Generative AI",
    "SaaS Development",
    "Portfolio",
    "Developer Portfolio",
    "Open Source",
  ],
  authors: [{ name: "Arijit Mondal" }],
  creator: "Arijit Mondal",
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Arijit Mondal",
    title,
    description,
    images: [
      {
        url: `${siteUrl}/profile.png`,
        width: 1200,
        height: 630,
        alt: "Arijit Mondal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@arijit_m_000999",
    site: "@arijit_m_000999",
    images: [`${siteUrl}/profile.png`],
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
        {/* First-paint theme hint: set the light/dark class before hydration so
            the theme token resolves correctly (no light→dark flash on first
            load). Standard next-themes SSR pattern; the ThemeToggle still owns
            class swaps on interaction. `suppressHydrationWarning` on <html>
            absorbs the expected attribute difference. */}
        <Script
          id="theme-preload"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{
              var t=localStorage.getItem('theme');
              if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}
              document.documentElement.classList.add(t);
            }catch(e){}})();`,
          }}
        />
        {/* Without JS the motion entrances never run, so elements rendered with
            their `initial` (hidden) state would stay at opacity:0. Reveal them. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {/* Providers (theme + query) wrap the chrome so the toggle and toasts
            get theme context. The providers add no DOM, so the flex layout is
            preserved. */}
        <Providers>
          <LoadingGate>
            <SiteHeader />
            {children}
            <Footer />
            {/* Toasts follow the active theme (sonner reads next-themes). */}
            <Toaster />
          </LoadingGate>
        </Providers>

        {/* chatbot script */}
        <Script
          src="https://supportai-seven.vercel.app/chat_bot.js"
          data-bot-id="6a34ecbbc0fd98c3e97222cf"
        />
      </body>
    </html>
  );
}
