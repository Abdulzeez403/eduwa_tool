import HomeLayout from "@/app/homeLayout";
import { Button } from "@/components/ui/button";
import { Post } from "@/lib/type";
import { PortableText } from "@portabletext/react";
import {
  Link,
  ArrowLeft,
  Calendar,
  User,
  Share2,
  BookmarkPlus,
} from "lucide-react";
import CommentSection from "./comment";

interface BlogDetailContentProps {
  post: Post;
}

export default function BlogDetailContent({ post }: BlogDetailContentProps) {
  return (
    <HomeLayout>
      <article className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden my-8">
        {/* Back Button */}
        <div className="p-4 border-b border-slate-100 bg-slate-50">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Blog</span>
          </Link>
        </div>

        {/* Blog Image */}
        {post.image && (
          <div className="relative h-64 md:h-96">
            <img
              src={post.image}
              alt={post.title || "Blog cover image"}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                {post.categories?.title || "General"}
              </span>
            </div>
          </div>
        )}

        {/* Blog Content */}
        <div className="p-6 md:p-10">
          {/* Meta Information */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4 text-slate-500 text-sm">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.publishedAt).toDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <BookmarkPlus className="w-4 h-4" />
                Save
              </Button>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Body */}
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
            <PortableText value={post.body} />
          </div>
          <CommentSection />
        </div>
      </article>
    </HomeLayout>
  );
}
