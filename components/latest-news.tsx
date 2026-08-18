"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  link: string;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "");
}

export default function LatestNews() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://blogs.sadpnepal.org/wp/wp-json/wp/v2/posts?_embed&per_page=3")
      .then((res) => res.json())
      .then((data: WPPost[]) =>
        setPosts(data.filter((p) => p.title.rendered.trim()))
      )
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;
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
              className="group bg-white rounded-2xl p-8 border border-brand-outline-variant hover:border-brand-primary transition-colors"
            >
              <div className="flex items-center gap-2 text-sm text-brand-outline mb-4">
                <Calendar className="size-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <h3 className="text-lg font-bold text-brand-primary mb-3 group-hover:underline">
                {post.title.rendered}
              </h3>
              <p className="text-xl text-brand-on-surface-variant leading-relaxed mb-4">
                {stripHtml(post.excerpt.rendered)}
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
            className="border-2 border-brand-primary text-brand-primary px-8 py-3.5 rounded-full text-sm font-bold hover:bg-brand-primary hover:text-white transition-all duration-200 inline-block"
          >
            View All Updates
          </Link>
        </div>
      </div>
    </section>
  );
}
