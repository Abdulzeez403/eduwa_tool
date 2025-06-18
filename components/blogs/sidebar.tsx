"use client";
import { Search, TrendingUp, Mail } from "lucide-react";
import { useState } from "react";

const categories = [
  { name: "Teaching Tips", count: 24 },
  { name: "Student Tools", count: 18 },
  { name: "EdTech Trends", count: 15 },
  { name: "Study Methods", count: 12 },
  { name: "Online Learning", count: 9 },
];

const popularPosts = [
  {
    title: "How to Create Engaging Video Lessons",
    date: "March 10, 2024",
  },
  {
    title: "Best Apps for Student Organization",
    date: "March 8, 2024",
  },
  {
    title: "Virtual Reality in Education",
    date: "March 5, 2024",
  },
];

export const Sidebar = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
    // Add toast notification here
  };

  return (
    <aside className="space-y-8">
      {/* Search */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Search</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          Categories
        </h3>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category.name}>
              <a
                href="#"
                className="flex items-center justify-between text-slate-600 hover:text-blue-600 transition-colors group"
              >
                <span className="group-hover:translate-x-1 transition-transform">
                  {category.name}
                </span>
                <span className="bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-orange-500" />
          <h3 className="text-lg font-semibold text-slate-800">
            Popular Posts
          </h3>
        </div>
        <ul className="space-y-4">
          {popularPosts.map((post, index) => (
            <li key={index}>
              <a href="#" className="block group">
                <h4 className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors mb-1 line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-xs text-slate-500">{post.date}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 border border-blue-200">
        <div className="flex items-center space-x-2 mb-4">
          <Mail className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-slate-800">Newsletter</h3>
        </div>
        <p className="text-sm text-slate-600 mb-4">
          Get the latest educational insights and tips delivered to your inbox
          weekly.
        </p>
        <form onSubmit={handleNewsletterSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  );
};
