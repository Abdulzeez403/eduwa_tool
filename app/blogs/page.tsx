import ArticleGrid from "@/components/blogs/blogs";
import { Article } from "@/lib/type";
import HomeLayout from "../homeLayout";
import { client } from "@/lib/sanity";
import { Sidebar } from "@/components/blogs/sidebar";
import { Search } from "lucide-react";

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
  }

  return (
    <HomeLayout>
      <main className=" mx-auto px-4 ">
        <section className="text-center mb-10 bg-emerald-900/30 py-8 px-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Discover Powerful Educational Tools
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Explore our latest insights, reviews, and guides to help you find
            the best tools for teaching and learning.
          </p>

          {/* Search */}
          <div className="mt-6 flex justify-center">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search educational tools..."
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              />
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {articles.length > 0 ? (
              <ArticleGrid articles={articles} />
            ) : (
              <div className="text-center text-gray-500 py-20">
                No articles available at the moment.
              </div>
            )}
          </div>

          <aside className="lg:col-span-1">
            <Sidebar />
          </aside>
        </div>
      </main>
    </HomeLayout>
  );
}
