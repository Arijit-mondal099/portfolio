"use client";

import { Mail } from "lucide-react";
import { motion, type Variants } from "motion/react";
import Image from "next/image";

import { ResumeDialog } from "@/components/resume-dialog";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { staggerContainer, staggerItem, transition } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Avatar entrance — a gentle fade and scale alongside the text cascade. */
const avatar: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition },
};

/**
 * Hero — the site headline: name, tagline, two CTAs (Contact / Resume) and the
 * avatar. CTAs are anchors styled with `buttonVariants` (the canonical shadcn
 * pattern for a link that looks like a button), so they remain real links.
 *
 * On load the pieces cascade in (name → tagline → CTAs, avatar alongside) via a
 * stagger container animating on mount rather than on scroll.
 */
export function Hero() {
  return (
    <motion.section
      className="flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center sm:justify-between"
      initial="hidden"
      animate="visible"
      variants={staggerContainer(0.1, 0.1)}
    >
      <div className="flex flex-col gap-5">
        <div className="space-y-1">
          <motion.h1
            variants={staggerItem}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            {profile.name}
          </motion.h1>
          <motion.div
            variants={staggerItem}
            className="text-sm text-muted-foreground"
          >
            {profile.tagline.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </motion.div>
        </div>

        <motion.div variants={staggerItem} className="flex flex-wrap gap-3">
          <a
            href={profile.contactHref}
            className={cn(buttonVariants({ variant: "outline" }), "uppercase")}
          >
            <Mail />
            Contact me
          </a>
          <ResumeDialog />
        </motion.div>
      </div>

      <motion.div variants={avatar}>
        <Image
          src={profile.avatar.src}
          alt={profile.avatar.alt}
          width={112}
          height={112}
          priority
          className="size-36 rounded-xl border border-border object-cover object-top"
        />
      </motion.div>
    </motion.section>
  );
}
