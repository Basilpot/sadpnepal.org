import type { Metadata } from "next";
import Link from "next/link";
import { LANDSCAPE_PHOTOS } from "@/lib/photos";

const HERO_IMAGE = LANDSCAPE_PHOTOS[0];

export const metadata: Metadata = {
  title: "Blog",
  description: "Stories, news and field updates from SADP Nepal.",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[50vh] items-center">
            <div className="py-16 md:py-24">
              <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">BLOG</span>
              <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">
                Blog<span className="text-brand-blushed-brick">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
                Stories, news and field updates on our projects, events and the impact we&apos;re making together in Nepal.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={HERO_IMAGE}
                alt="SADP Nepal blog"
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="text-center max-w-md mx-auto">
            <p className="text-xl font-bold text-brand-on-surface mb-3">No articles are shown here right now</p>
            <p className="text-brand-on-surface-variant mb-6">
              Check back later for stories and field updates. In the meantime, see what we are working on.
            </p>
            <Link
              href="/our-work"
              className="inline-block border-2 border-brand-primary text-brand-primary px-8 py-3.5 rounded-full text-sm font-bold transition-colors duration-150 hover:bg-brand-primary hover:text-brand-on-primary"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}