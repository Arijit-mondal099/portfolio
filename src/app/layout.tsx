import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
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
  // `dark` is hard-coded because the design is dark-only; this also activates
  // the `dark:` variants baked into the shadcn/ui components.
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} dark h-full motion-safe:scroll-smooth`}
    >
      <body className="flex min-h-full flex-col">
        <Providers>{children}</Providers>
        <Footer />
        {/* Toast notifications (e.g. contact form feedback). Forced dark to
            match the dark-only theme since there's no next-themes provider. */}
        <Toaster theme="dark" />
      </body>
    </html>
  );
}
