import { redirect } from "next/navigation";
import { getPosts } from "@/lib/fullbleed";

export const dynamicParams = false;

// Same sentinel as app/blog/[slug]: Next rejects an empty generateStaticParams.
export async function generateStaticParams() {
  const posts = await getPosts();
  if (posts.length === 0) return [{ slug: "__no-posts" }];
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function NewsPostRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/blog/${slug}`);
}
