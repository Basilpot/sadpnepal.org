import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { NotFoundView } from "@/components/not-found-view";
import { ProseArticle } from "@/components/prose-article";
import {
  getPage,
  getPages,
  getService,
  getServices,
  summary,
} from "@/lib/fullbleed";

export const dynamicParams = false;

// Fullbleed content for this route lives in either collection, so both are served.
// Next hard-fails a dynamic route whose generateStaticParams returns an empty list:
// the build check requires length > 0 (next/dist/build/index.js:1360) and dev
// requires a matching pathname (next-dev-server.js:595). The sentinel keeps the route
// valid with nothing published; the page renders the 404 view for it.
const NO_CONTENT = "__no-content";

// ponytail: this route exists only to render CMS pages/services. Dropping
// output: "export" for ISR removes the sentinel and makes publishing live.
export async function generateStaticParams() {
  const [pages, services] = await Promise.all([getPages(), getServices()]);
  const slugs = new Set([...pages, ...services].map((item) => item.slug));
  if (slugs.size === 0) return [{ slug: NO_CONTENT }];
  return [...slugs].map((slug) => ({ slug }));
}

async function findEntry(slug: string) {
  return (await getService(slug)) ?? (await getPage(slug));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = await findEntry(slug);
  if (!item) return { title: "Page Not Found" };

  return {
    title: item.metaTitle || item.title,
    description: item.metaDescription || summary(item, 160),
    alternates: item.canonicalUrl ? { canonical: item.canonicalUrl } : undefined,
    openGraph: {
      title: item.metaTitle || item.title,
      description: item.metaDescription || summary(item, 160),
      images: item.coverImage ? [item.coverImage] : undefined,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await findEntry(slug);
  // notFound() emits an empty page under output: "export", so render the 404 view.
  if (!item) return <NotFoundView />;

  return (
    <>
      <section className="relative min-h-[50vh] overflow-hidden bg-brand-bg">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className={`grid grid-cols-1 gap-8 md:gap-16 min-h-[50vh] items-center ${item.coverImage ? "md:grid-cols-2" : ""}`}>
            <div className="py-16 md:py-24">
              <span className="inline-block bg-brand-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6">SERVICE</span>
              <h1 className="text-4xl md:text-5xl font-black text-brand-primary mb-6">
                {item.title}<span className="text-brand-blushed-brick">.</span>
              </h1>
              {item.metaDescription && (
                <p className="text-xl md:text-2xl text-brand-on-surface-variant max-w-lg mb-8 leading-relaxed">
                  {item.metaDescription}
                </p>
              )}
              <Link href="/" className="inline-flex items-center gap-2 text-brand-primary text-sm font-bold hover:underline">
                <ArrowLeft className="size-4" /> Back to Home
              </Link>
            </div>
            {item.coverImage && (
              <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={item.coverImage}
                  alt={item.title}
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

      <ProseArticle html={item.bodyHtml} backHref="/" backLabel="Back to home" />
    </>
  );
}