import type { MetadataRoute } from "next";
import { PROTOCOLOS } from "@/lib/content";
import { SITE_URL as BASE } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const last = new Date("2026-06-09");
  return [
    { url: BASE, lastModified: last, changeFrequency: "monthly", priority: 1 },
    ...PROTOCOLOS.map((p) => ({
      url: `${BASE}/tratamentos/${p.slug}`,
      lastModified: last,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
