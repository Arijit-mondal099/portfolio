import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Arijit Mondal — Full-Stack & Web3 Developer",
  description:
    "Portfolio of Arijit Mondal, a Full-Stack & Web3 developer building reliable, scalable web systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // `dark` is hard-coded because the design is dark-only; this also activates
  // the `dark:` variants baked into the shadcn/ui components.
  return (
    <html lang="en" className={`${jetbrainsMono.variable} dark h-full`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
