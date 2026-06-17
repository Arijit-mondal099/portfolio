"use client";

import { Briefcase, GraduationCap } from "lucide-react";

import { Section } from "@/components/layout/section";
import { RevealGroup } from "@/components/motion/reveal-group";
import { revealItem } from "@/components/motion/reveal-item";
import { Timeline } from "@/components/timeline/timeline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { education, experience } from "@/data/timeline";
import { cn } from "@/lib/utils";

/**
 * Education & Experience — a tabbed timeline. Toggling between the two tabs
 * needs client state, so this is a client component; the data itself is static.
 */
export function EducationExperience() {
  return (
    <Section id="experience" heading="Education & Experience" animateHeading>
      <RevealGroup>
        <Tabs defaultValue="experience">
          <TabsList className={cn("grid w-full grid-cols-2", revealItem)}>
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
          <TabsContent value="experience" className="pt-4" keepMounted>
            <Timeline groups={experience} variant="experience" />
          </TabsContent>
          <TabsContent value="education" className="pt-4" keepMounted>
            <Timeline groups={education} variant="education" />
          </TabsContent>
        </Tabs>
      </RevealGroup>
    </Section>
  );
}
