import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

/** Generates /robots.txt — allow all crawlers and point to the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
