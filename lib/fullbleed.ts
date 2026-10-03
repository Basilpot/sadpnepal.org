const BASE =
  process.env.FULLBLEED_BASE_URL ?? "https://fullbleed.basilpot.com/api/v1";

// bodyHtml embeds media as root-relative paths served from the Fullbleed origin.
const ORIGIN = BASE.replace(/\/api\/v1\/?$/, "");

/** Rewrite CMS media paths so they resolve against Fullbleed, not this site.
 * ponytail: rewrites only the known /api/media-library/ prefix, so genuine
 * site-relative links (/volunteer) and mailto: are left alone. */
export function resolveMedia(html: string): string {
  return html.replace(
    /(\s(?:src|href|poster)=")\/api\/media-library\//g,
    `$1${ORIGIN}/api/media-library/`
  );
}

export interface Taxonomy {
  id: string;
  name: string;
  slug: string;
}

export interface ContentItem {
  id: string;
  type: "page" | "service" | "post";
  title: string;
  slug: string;
  bodyHtml: string;
  status: string;
  publishedAt: string;
  metaTitle: string | null;
  metaDescription: string | null;
  canonicalUrl: string | null;
  coverImage: string | null;
  author: Taxonomy | null;
  category: Taxonomy | null;
  tags: Taxonomy[];
  createdAt: string;
  updatedAt: string;
}

export class FullbleedError extends Error {
  constructor(
    readonly status: number,
    message: string
  ) {
    super(message);
  }
}

// Next does not cache fetch, and a static-export build calls these paths once per
// page. ponytail: a per-process Map covers a build; swap for a real cache only if
// this ever runs per-request.
const memo = new Map<string, Promise<unknown>>();

async function api<T>(path: string): Promise<T> {
  const key = process.env.FULLBLEED_API_KEY;
  if (!key) {
    throw new Error("FULLBLEED_API_KEY is not set");
  }

  let hit = memo.get(path) as Promise<T> | undefined;
  if (!hit) {
    hit = fetch(`${BASE}${path}`, {
      headers: { Authorization: `Bearer ${key}` },
    }).then(async (res) => {
      if (!res.ok) {
        throw new FullbleedError(
          res.status,
          `Fullbleed ${path} -> ${res.status}: ${await res.text()}`
        );
      }
      return (await res.json()) as T;
    });
    memo.set(path, hit);
  }
  return hit;
}

type Collection = "posts" | "pages" | "services";

async function list(type: Collection): Promise<ContentItem[]> {
  const { data } = await api<{ data: ContentItem[] }>(`/${type}?limit=100`);
  return data;
}

async function getOne(
  type: Collection,
  slug: string
): Promise<ContentItem | null> {
  try {
    const { data } = await api<{ data: ContentItem }>(
      `/${type}/${encodeURIComponent(slug)}`
    );
    return data;
  } catch (err) {
    if (err instanceof FullbleedError && err.status === 404) return null;
    throw err;
  }
}

export const getPosts = () => list("posts");
export const getServices = () => list("services");
export const getPages = () => list("pages");
export const getPost = (slug: string) => getOne("posts", slug);
export const getService = (slug: string) => getOne("services", slug);
export const getPage = (slug: string) => getOne("pages", slug);

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    // numeric first, so an escaped "&amp;#8217;" stays literal instead of
    // being decoded twice into a curly quote
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&hellip;/g, "...")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Fullbleed has no excerpt field, so fall back to the body text. */
export function summary(item: ContentItem, max = 200): string {
  if (item.metaDescription) return item.metaDescription;
  const text = stripHtml(item.bodyHtml);
  return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;
}