"use client";

import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    { value: "340K", label: "PageViews" },
    { value: "140K", label: "Searches" },
    { value: "10K", label: "Newsletter Subscribers" },
    { value: "90%", label: "Verified Tools" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to tools page with search query
      window.location.href = `/tools?category=${encodeURIComponent(
        searchQuery
      )}`;
    }
  };

  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden 
    bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950
     dark:via-teal-950 dark:to-cyan-950"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-[10%] w-16 h-16 bg-emerald-500/10 rounded-2xl backdrop-blur-sm border border-emerald-500/20 flex items-center justify-center"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-8 h-8 bg-emerald-500/20 rounded-lg" />
        </motion.div>

        <motion.div
          className="absolute top-32 right-[15%] w-20 h-20 bg-blue-500/10 rounded-2xl backdrop-blur-sm border border-blue-500/20 flex items-center justify-center"
          animate={{
            y: [0, 25, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-10 h-10 bg-blue-500/20 rounded-lg" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-[20%] w-14 h-14 bg-purple-500/10 rounded-2xl backdrop-blur-sm border border-purple-500/20 flex items-center justify-center"
          animate={{
            y: [0, 15, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-7 h-7 bg-purple-500/20 rounded-lg" />
        </motion.div>

        <motion.div
          className="absolute top-60 right-[25%] w-12 h-12 bg-amber-500/10 rounded-2xl backdrop-blur-sm border border-amber-500/20 flex items-center justify-center"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 12, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-6 bg-amber-500/20 rounded-lg" />
        </motion.div>
      </div>

      <div className="container px-4 relative z-10 py-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-6 py-2 mb-6 rounded-full bg-emerald-100/80 border border-emerald-200/50 backdrop-blur-sm dark:bg-emerald-900/30 dark:border-emerald-800/50">
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                The Ultimate Educational Tools Directory
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400">
                Discover
              </span>
              <br />
              <span className="text-foreground">Educational Tools</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Find the perfect educational resources with our comprehensive
              directory of verified tools for students, teachers, and
              institutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <form
              onSubmit={handleSearch}
              className="flex items-center bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-3"
            >
              <div className="relative flex-1">
                <Search className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for educational tools..."
                  className="pl-12 pr-4 py-4 text-lg border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 rounded-xl"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="rounded-xl px-8 py-4 text-lg font-medium"
              >
                Search
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>

            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="text-sm text-muted-foreground">
                Popular searches:
              </span>
              {[
                "Math Tools",
                "Language Learning",
                "Exam Prep",
                "Classroom Management",
              ].map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="px-3 py-1 text-sm bg-white/60 dark:bg-gray-800/60 rounded-full border border-white/30 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="p-6 rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border border-white/30 hover:bg-white/80 dark:hover:bg-gray-900/80 transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-12 mb-8"
          >
            <Button size="lg" className="px-8 py-4 text-lg rounded-xl" asChild>
              <Link href="/tools">
                Browse All Tools
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg rounded-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border-white/30"
              asChild
            >
              <Link href="/submit-tool">Submit Your Tool</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
