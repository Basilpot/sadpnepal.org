import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft } from "lucide-react";

interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  date: string;
  excerpt: { rendered: string };
  _embedded?: {
    author?: { name: string }[];
    "wp:featuredmedia"?: { source_url: string }[];
  };
}

interface WPPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
}

async function getAllPostSlugs(): Promise<string[]> {
  try {
    const res = await fetch(
      "https://blogs.sadpnepal.org/wp/wp-json/wp/v2/posts?_embed&per_page=20"
    );
    if (!res.ok) return [];
    const posts: WPPost[] = await res.json();
    return posts.filter((p) => p.title.rendered.trim()).map((p) => p.slug);
  } catch {
    return [];
  }
}

async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(
      `https://blogs.sadpnepal.org/wp/wp-json/wp/v2/posts?slug=${slug}&_embed`
    );
    if (!res.ok) return null;
    const posts: WPPost[] = await res.json();
    return posts.length > 0 && posts[0].title.rendered.trim() ? posts[0] : null;
  } catch {
    return null;
  }
}

function rewriteMediaUrls(html: string) {
  return html.replace(
    /src="(https?:\/\/[^"]*?(?:sadpnepal\.org)\/[^"]*?\/wp-content\/uploads\/[^"]*?)"/gi,
    (_match, url: string) => {
      const uploadsIdx = url.indexOf("/wp-content/uploads/");
      if (uploadsIdx === -1) return `src="${url}"`;
      const uploadsPath = url.slice(uploadsIdx);
      return `src="https://blogs.sadpnepal.org/wp${uploadsPath}"`;
    }
  ).replace(
    /href="(https?:\/\/[^"]*?(?:sadpnepal\.org)\/[^"]*?\/wp-content\/uploads\/[^"]*?)"/gi,
    (_match, url: string) => {
      const uploadsIdx = url.indexOf("/wp-content/uploads/");
      if (uploadsIdx === -1) return `href="${url}"`;
      const uploadsPath = url.slice(uploadsIdx);
      return `href="https://blogs.sadpnepal.org/wp${uploadsPath}"`;
    }
  );
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, "").slice(0, 160),
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const author = post._embedded?.author?.[0]?.name;

  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[50vh] items-center">
            <div className="py-16 md:py-24">
              <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">BLOG</span>
              <h1 className="text-4xl md:text-5xl font-black text-brand-primary mb-6">
                {post.title.rendered}<span className="text-brand-blushed-brick">.</span>
              </h1>
              <div className="flex items-center gap-4 text-sm text-brand-outline mb-6">
                <span className="flex items-center gap-1.5"><Calendar className="size-4" /> {formatDate(post.date)}</span>
                {author && <span>By {author}</span>}
              </div>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-brand-primary text-sm font-bold hover:underline"
              >
                <ArrowLeft className="size-4" /> Back to News
              </Link>
            </div>
            <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={featuredImage || "https://images.unsplash.com/photo-1731491435516-566d6d1e3141?w=1200&q=80&auto=format&fit=crop"}
                alt={post.title.rendered}
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <article className="py-28">
        <div className="px-6 md:px-16 max-w-[800px] mx-auto">
          <div className="overflow-x-auto">
            <div
              className="prose prose-lg max-w-none prose-headings:text-brand-primary prose-headings:font-bold prose-a:text-brand-primary prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: rewriteMediaUrls(post.content.rendered) }}
            />
          </div>
          <div className="mt-16 pt-8 border-t border-brand-outline-variant">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-brand-primary text-sm font-bold hover:underline"
            >
              <ArrowLeft className="size-4" /> Back to all news
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
