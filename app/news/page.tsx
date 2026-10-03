import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { LANDSCAPE_PHOTOS } from "@/lib/photos";
import { formatDate, getPosts, summary } from "@/lib/fullbleed";

const HERO_IMAGE = LANDSCAPE_PHOTOS[0];

export const metadata: Metadata = {
  title: "News & Updates",
  description: "Latest news and updates from SADP Nepal.",
};

export default async function NewsPage() {
  const posts = await getPosts();

  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[50vh] items-center">
            <div className="py-16 md:py-24">
              <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">UPDATES</span>
              <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
                News & Updates<span className="text-brand-blushed-brick">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
                Stay informed about our projects, events, and the impact we&apos;re making together in Nepal.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={HERO_IMAGE}
                alt="News"
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          {posts.length === 0 ? (
            <div className="text-center max-w-md mx-auto">
              <p className="text-xl font-bold text-brand-on-surface mb-3">No news posts yet</p>
              <p className="text-brand-on-surface-variant mb-6">
                News and field updates will appear here. In the meantime, see what we
                are working on.
              </p>
              <Link
                href="/our-work"
                className="inline-block border-2 border-brand-primary text-brand-primary px-8 py-3.5 rounded-full text-sm font-bold transition-colors duration-150 hover:bg-brand-primary hover:text-brand-on-primary"
              >
                See Our Work
              </Link>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-8">
              {posts.map((post) => (
                <Link key={post.id} href={`/news/${post.slug}`} className="group block bg-brand-surface-container rounded-2xl p-8 border border-brand-outline-variant transition-colors duration-150 hover:border-brand-primary">
                  <div className="flex items-center gap-2 text-sm text-brand-outline mb-3">
                    <Calendar className="size-4" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-brand-primary mb-3">{post.title}</h2>
                  <p className="text-xl text-brand-on-surface-variant mb-4">{summary(post)}</p>
                  <span className="inline-flex items-center gap-2 text-brand-primary text-sm font-bold group-hover:underline">
                    Read More <ArrowRight className="size-4" />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}