import type { MetadataRoute } from "next";
import { getPages, getPosts, getServices } from "@/lib/fullbleed";

export const dynamic = "force-static";

const BASE = "https://sadpnepal.org";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
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

  const [posts, pages, services] = await Promise.all([
    getPosts(),
    getPages(),
    getServices(),
  ]);

  // Pages and services both resolve to /[slug], so dedupe by slug.
  const rootRoutes = new Map<string, string>();
  for (const item of [...pages, ...services]) {
    rootRoutes.set(item.slug, item.updatedAt);
  }

  return [
    ...staticRoutes,
    ...posts.map((post) => ({
      url: `${BASE}/news/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...[...rootRoutes].map(([slug, updatedAt]) => ({
      url: `${BASE}/${slug}`,
      lastModified: new Date(updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}