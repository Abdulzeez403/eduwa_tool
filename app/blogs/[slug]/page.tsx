import { client } from "@/lib/sanity";
import { notFound } from "next/navigation";
import BlogDetailContent from "./blogDetail";

interface Params {
  params: { slug: string };
}

export default async function BlogDetailPage({ params }: Params) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    publishedAt,
    excerpt,
    "image": mainImage.asset->url,
    "author": author->name,
    categories[0]->{
      title
    },
    body
  }`;

  const post = await client.fetch(query, { slug: params.slug });

  if (!post) {
    return notFound();
  }

  return <BlogDetailContent post={post} />;
}
