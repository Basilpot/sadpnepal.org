import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { resolveMedia } from "@/lib/fullbleed";

export function ProseArticle({
  html,
  backHref,
  backLabel,
}: {
  html: string;
  backHref: string;
  backLabel: string;
}) {
  return (
    <article className="py-28">
      <div className="px-6 md:px-16 max-w-[65ch] mx-auto">
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: resolveMedia(html) }}
        />
        <div className="mt-16 pt-8 border-t border-brand-outline-variant">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-brand-primary text-sm font-bold hover:underline"
          >
            <ArrowLeft className="size-4" /> {backLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}