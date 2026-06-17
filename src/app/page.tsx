import { SectionNav } from "@/components/layout/section-nav";
import { Reveal } from "@/components/motion/reveal";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Contributions } from "@/components/sections/contributions";
import { EducationExperience } from "@/components/sections/education-experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

/**
 * Home page — composes the portfolio sections in order.
 *
 * The page is a single centered column (the reference is a focused, one-column
 * layout).
 */
export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 space-y-16 px-6 py-16 sm:py-24">
      <SectionNav />
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <EducationExperience />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Contributions />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </main>
  );
}
