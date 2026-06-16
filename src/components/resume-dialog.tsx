"use client";

import { FileText } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

/**
 * The Hero's "Resume" CTA — opens a modal that embeds the résumé PDF instead of
 * navigating away. The trigger keeps the same outline-button look as the other
 * CTA. The "open in new tab" link is a fallback for browsers that won't render a
 * PDF in an iframe (e.g. mobile Safari) and doubles as a download.
 */
export function ResumeDialog() {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(buttonVariants({ variant: "outline" }), "uppercase")}
      >
        <FileText />
        Resume
      </DialogTrigger>

      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Resume</DialogTitle>
        </DialogHeader>

        <iframe
          src={profile.resumeUrl}
          title="Resume"
          className="h-[70vh] w-full rounded-md border border-border"
        />

        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          Open in new tab ↗
        </a>
      </DialogContent>
    </Dialog>
  );
}
