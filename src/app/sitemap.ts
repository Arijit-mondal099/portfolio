import type { MetadataRoute } from "next";

import { env } from "@/lib/env";

/** Generates /sitemap.xml listing the site's public pages. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: env.NEXT_PUBLIC_SITE_URL, lastModified, priority: 1 },
    {
      url: `${env.NEXT_PUBLIC_SITE_URL}/projects`,
      lastModified,
      priority: 0.8,
    },
  ];
}
