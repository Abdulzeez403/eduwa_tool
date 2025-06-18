import ArticleGrid from "@/components/blogs/blogs";
import { FeaturedArticle } from "@/components/blogs/featureBlog";
import { Article } from "@/lib/type";
import HomeLayout from "../homeLayout";
import { client } from "@/lib/sanity";
import { Sidebar } from "@/components/blogs/sidebar";

export default async function BlogPage() {
  const query = `*[_type == "post"]{
    _id,
    title,
    excerpt,
    "slug": slug.current,
    publishedAt,
    "image": mainImage.asset->url,
    "author": author->name,
    categories[0]->{
      title
    }
  } | order(publishedAt desc)`;

  let articles: Article[] = [];
  try {
    articles = await client.fetch(query);
  } catch (error) {
    console.error("Error fetching articles from Sanity:", error);
    // You might want to display an error message to the user here
  }

  console.log(articles, "the blog!");

  return (
    <HomeLayout>
      <main className="container mx-auto px-4 py-8">
        <FeaturedArticle />
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ArticleGrid articles={articles} />
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
    </HomeLayout>
  );
}
