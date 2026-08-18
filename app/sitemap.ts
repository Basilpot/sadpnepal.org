import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://sadpnepal.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: BASE, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/our-work`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/volunteer`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/volunteer/regenerative-farming`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/volunteer/conservation`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/volunteer/construction`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/volunteer/spiritual`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/volunteer/student-groups`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/internship`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/projects/kgecp`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/news`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/donate`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
  ];
}
