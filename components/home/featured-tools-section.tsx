"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { listTools } from "@/lib/crud";

// const featuredTools = [
//   {
//     id: "mathgenius",
//     title: "MathGenius",
//     description:
//       "Interactive mathematics learning platform with adaptive exercises and visualizations.",
//     image:
//       "https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=600",
//     category: "Learning Tools",
//     rating: 4.8,
//     free: true,
//   },
//   {
//     id: "historyquest",
//     title: "HistoryQuest",
//     description:
//       "Immersive historical simulations and interactive timelines for engaging history education.",
//     image:
//       "https://images.pexels.com/photos/2928232/pexels-photo-2928232.jpeg?auto=compress&cs=tinysrgb&w=600",
//     category: "Learning Tools",
//     rating: 4.6,
//     free: false,
//   },
//   {
//     id: "examprep-pro",
//     title: "ExamPrep Pro",
//     description:
//       "Comprehensive exam preparation with practice tests, flashcards, and personalized study plans.",
//     image:
//       "https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=600",
//     category: "Exams",
//     rating: 4.9,
//     free: false,
//   },
//   {
//     id: "classroomorganizer",
//     title: "ClassroomOrganizer",
//     description:
//       "All-in-one classroom management tool for teachers with attendance, grading, and communication features.",
//     image:
//       "https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=600",
//     category: "Teachers",
//     rating: 4.7,
//     free: true,
//   },
//   {
//     id: "sciencelab-vr",
//     title: "ScienceLab VR",
//     description:
//       "Virtual reality science laboratory with interactive experiments for hands-on learning.",
//     image:
//       "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600",
//     category: "Learning Tools",
//     rating: 4.5,
//     free: false,
//   },
//   {
//     id: "linguallearn",
//     title: "LinguaLearn",
//     description:
//       "Comprehensive language learning platform with AI-powered conversation practice and cultural context.",
//     image:
//       "https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=600",
//     category: "Learning Tools",
//     rating: 4.7,
//     free: true,
//   },
// ];

export function FeaturedToolsSection() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await listTools();
        setTools(response.documents as any);
        console.log("Tools:", response.documents);
      } catch (error) {
        console.error("Failed to fetch tools:", error);
      }
    };

    fetchTools();
  }, []);

  return (
    <section
      id="featured"
      className="py-20 md:py-28 bg-gradient-to-b from-secondary/30 to-background"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured Tools
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Discover the most popular and highly-rated educational resources
            trusted by educators worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools?.slice(0, 6).map((tool: any, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group border-2">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={tool.website_image}
                    alt={tool.website_image}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <div className="space-y-2">
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {tool?.name}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {tool.category}
                      </Badge>
                    </div>
                    {tool.free ? (
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400 dark:border-green-800"
                      >
                        Free
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-400 dark:border-blue-800"
                      >
                        Premium
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <CardDescription className="text-sm line-clamp-2 leading-relaxed">
                    {tool.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-4 border-t">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {/* <span className="text-sm font-semibold">{tool.rating}</span> */}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <Link href={`/tools/${tool.slug}`}>
                      View Details
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-4 text-lg rounded-xl"
            asChild
          >
            <Link href="/tools">
              View All Educational Tools
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
