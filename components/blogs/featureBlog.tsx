"use client";
import { Calendar, User, ArrowRight } from "lucide-react";

export const FeaturedArticle = () => {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-64 lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
            alt="Featured article"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </span>
          </div>
        </div>
        <div className="p-8 flex flex-col justify-center">
          <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>March 15, 2024</span>
            </div>
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>Sarah Johnson</span>
            </div>
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4 leading-tight">
            Revolutionizing Education: How AI Tools Are Transforming the
            Learning Experience
          </h1>
          <p className="text-slate-600 text-lg mb-6 leading-relaxed">
            Discover the latest AI-powered educational tools that are making
            learning more personalized, engaging, and effective for students and
            teachers worldwide.
          </p>
          <button className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors group">
            <span>Read More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
