import { About } from "@/components/sections/about";
import { Contributions } from "@/components/sections/contributions";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";

/**
 * Home page — composes the portfolio sections in order.
 *
 * The page is a single centered column (the reference is a focused, one-column
 * layout). Remaining sections (Projects, Contact, Footer) are added in later
 * phases.
 */
export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 space-y-16 px-6 py-16 sm:py-24">
      <Hero />
      <About />
      <Contributions />
      <Skills />
    </main>
  );
}
