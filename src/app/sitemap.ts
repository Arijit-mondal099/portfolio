import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

/** Generates /sitemap.xml listing the site's public pages. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: siteUrl, lastModified, priority: 1 },
    { url: `${siteUrl}/projects`, lastModified, priority: 0.8 },
  ];
}
