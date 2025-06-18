import { Calendar, User } from "lucide-react";
import { Article } from "@/lib/type";
import Link from "next/link";

interface ArticleGridProps {
  articles?: Article[];
}

export default function ArticleGrid({ articles }: ArticleGridProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-800 mb-8">
        Recent Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles?.map((article) => (
          <Link href={`/blogs/${article.slug}`}>
            <article
              key={article._id}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700`}
                  >
                    {article.categories?.title || "General"}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>
                        {new Date(article.publishedAt).toDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
