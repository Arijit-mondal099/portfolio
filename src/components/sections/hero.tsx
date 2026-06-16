import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

/**
 * Hero — the site headline: name, tagline, two CTAs (Contact / Resume) and the
 * avatar. CTAs are anchors styled with `buttonVariants` (the canonical shadcn
 * pattern for a link that looks like a button), so they remain real links.
 */
export function Hero() {
  return (
    <section className="flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-5">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <div className="text-sm text-muted-foreground">
            {profile.tagline.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={profile.contactHref}
            className={cn(buttonVariants({ variant: "outline" }), "uppercase")}
          >
            Contact me
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "uppercase")}
          >
            Resume
          </a>
        </div>
      </div>

      <Image
        src={profile.avatar.src}
        alt={profile.avatar.alt}
        width={112}
        height={112}
        priority
        className="size-28 rounded-xl border border-border object-cover"
      />
    </section>
  );
}
