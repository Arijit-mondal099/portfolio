import type { MetadataRoute } from "next";

import { env } from "@/lib/env";

/** Generates /robots.txt — allow all crawlers and point to the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
  };
}
