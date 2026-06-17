"use client";

import { Briefcase, GraduationCap } from "lucide-react";

import { Section } from "@/components/layout/section";
import { Timeline } from "@/components/timeline/timeline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { education, experience } from "@/data/timeline";

// Fade + lift the panel content in each time a tab becomes active (Base UI swaps
// the inactive panel to `display:none`, so re-showing it replays the animation).
const panelMotion =
  "motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-2 motion-safe:duration-300 motion-safe:ease-out";

/**
 * Education & Experience — a tabbed timeline. Toggling between the two tabs
 * needs client state, so this is a client component; the data itself is static.
 */
export function EducationExperience() {
  return (
    <Section id="experience" heading="Education & Experience">
      <Tabs defaultValue="experience">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="experience">
            <Briefcase />
            Experience
          </TabsTrigger>
          <TabsTrigger value="education">
            <GraduationCap />
            Education
          </TabsTrigger>
        </TabsList>

        {/* keepMounted renders both panels server-side (hidden when inactive)
            so the content is crawlable and available without JS. */}
        <TabsContent
          value="experience"
          className={`pt-4 ${panelMotion}`}
          keepMounted
        >
          <Timeline groups={experience} variant="experience" />
        </TabsContent>
        <TabsContent
          value="education"
          className={`pt-4 ${panelMotion}`}
          keepMounted
        >
          <Timeline groups={education} variant="education" />
        </TabsContent>
      </Tabs>
    </Section>
  );
}
