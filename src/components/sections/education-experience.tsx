"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { useState } from "react";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Timeline } from "@/components/timeline/timeline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { education, experience } from "@/data/timeline";

/**
 * Education & Experience — a tabbed timeline. Controlled so the active value can
 * key each <Timeline>: switching tabs remounts the shown timeline, replaying its
 * entrance cascade every time. `keepMounted` keeps both panels in the DOM (so
 * the content is crawlable and available without JS) — and since a hidden panel
 * never fires `whileInView`, the remount-on-switch is what animates it.
 */
export function EducationExperience() {
  const [tab, setTab] = useState("experience");

  return (
    <Section id="experience" heading="Education & Experience">
      <Tabs value={tab} onValueChange={setTab}>
        <Reveal>
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
        </Reveal>

        <TabsContent value="experience" className="pt-4" keepMounted>
          <Timeline key={tab} groups={experience} variant="experience" />
        </TabsContent>
        <TabsContent value="education" className="pt-4" keepMounted>
          <Timeline key={tab} groups={education} variant="education" />
        </TabsContent>
      </Tabs>
    </Section>
  );
}
