import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowLeft } from "lucide-react";
import { NotFoundView } from "@/components/not-found-view";
import { ProseArticle } from "@/components/prose-article";
import { formatDate, getPost, getPosts, summary } from "@/lib/fullbleed";

export const dynamicParams = false;

// See app/[slug]/page.tsx — Next rejects a dynamic route with an empty
// generateStaticParams, so an all-unpublished workspace still needs one param.
const NO_POSTS = "__no-posts";

// ponytail: this route exists only to render posts. Dropping output: "export"
// for ISR removes the sentinel entirely and makes publishing live.
export async function generateStaticParams() {
  const posts = await getPosts();
  if (posts.length === 0) return [{ slug: NO_POSTS }];
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Page Not Found" };

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || summary(post, 160),
    alternates: post.canonicalUrl ? { canonical: post.canonicalUrl } : undefined,
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || summary(post, 160),
      type: "article",
      publishedTime: post.publishedAt,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  // notFound() emits an empty page under output: "export", so render the 404 view.
  if (!post) return <NotFoundView />;

  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className={`grid grid-cols-1 gap-8 md:gap-16 min-h-[50vh] items-center ${post.coverImage ? "md:grid-cols-2" : ""}`}>
            <div className="py-16 md:py-24">
              <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">BLOG</span>
              <h1 className="text-4xl md:text-5xl font-black text-brand-primary mb-6">
                {post.title}<span className="text-brand-blushed-brick">.</span>
              </h1>
              <div className="flex items-center gap-4 text-sm text-brand-outline mb-6">
                <span className="flex items-center gap-1.5"><Calendar className="size-4" /> {formatDate(post.publishedAt)}</span>
                {post.author && <span>By {post.author.name}</span>}
                {post.category && <span>{post.category.name}</span>}
              </div>
              <Link href="/news" className="inline-flex items-center gap-2 text-brand-primary text-sm font-bold hover:underline">
                <ArrowLeft className="size-4" /> Back to News
              </Link>
            </div>
            {post.coverImage && (
              <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            )}
          </div>
        </div>
      </section>

      <ProseArticle html={post.bodyHtml} backHref="/news" backLabel="Back to all news" />
    </>
  );
}