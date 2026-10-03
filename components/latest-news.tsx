import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { formatDate, getPosts, summary } from "@/lib/fullbleed";

export default async function LatestNews() {
  const posts = (await getPosts()).slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="py-28 bg-brand-bg">
      <div className="px-6 md:px-16 max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-brand-primary mb-6">
            Latest from Our Blog<span className="text-brand-blushed-brick">.</span>
          </h2>
          <p className="text-xl text-brand-on-surface-variant max-w-2xl mx-auto">
            News, updates, and stories from our work across Nepal.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/news/${post.slug}`}
              aria-label={`Read more: ${post.title}`}
              className="group bg-white rounded-2xl p-8 border border-brand-outline-variant transition-colors duration-150 hover:border-brand-primary"
            >
              <div className="flex items-center gap-2 text-sm text-brand-outline mb-4">
                <Calendar className="size-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <h3 className="text-lg font-bold text-brand-primary mb-3 group-hover:underline">
                {post.title}
              </h3>
              <p className="text-xl text-brand-on-surface-variant leading-relaxed mb-4">
                {summary(post)}
              </p>
              <span className="inline-flex items-center gap-1 text-brand-primary text-sm font-bold">
                Read More <ArrowRight className="size-3.5" />
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/news"
            className="border-2 border-brand-primary text-brand-primary px-8 py-3.5 rounded-full text-sm font-bold transition-colors duration-150 hover:bg-brand-primary hover:text-brand-on-primary inline-block"
          >
            View All Updates
          </Link>
        </div>
      </div>
    </section>
  );
}