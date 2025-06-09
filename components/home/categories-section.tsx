"use client"

import { Book, FileText, School, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Link from "next/link"

const categories = [
  {
    title: "Exams",
    description: "Preparation tools, practice tests, and study materials for standardized exams.",
    icon: FileText,
    color: "bg-blue-50 dark:bg-blue-950",
    textColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-blue-200 dark:border-blue-800",
    href: "/tools?category=exams"
  },
  {
    title: "Learning Tools",
    description: "Interactive platforms, apps, and resources for enhanced learning experiences.",
    icon: Book,
    color: "bg-emerald-50 dark:bg-emerald-950",
    textColor: "text-emerald-600 dark:text-emerald-400",
    borderColor: "border-emerald-200 dark:border-emerald-800",
    href: "/tools?category=learning-tools"
  },
  {
    title: "Teachers",
    description: "Resources for educators, lesson planning tools, and classroom management.",
    icon: Users,
    color: "bg-amber-50 dark:bg-amber-950",
    textColor: "text-amber-600 dark:text-amber-400",
    borderColor: "border-amber-200 dark:border-amber-800",
    href: "/tools?category=teachers"
  },
  {
    title: "Schools",
    description: "Platforms and tools for educational institutions and administrative needs.",
    icon: School,
    color: "bg-purple-50 dark:bg-purple-950",
    textColor: "text-purple-600 dark:text-purple-400",
    borderColor: "border-purple-200 dark:border-purple-800",
    href: "/tools?category=schools"
  }
]

export function CategoriesSection() {
  return (
    <section id="categories" className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/30">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Explore Categories</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Browse educational resources organized by category to find exactly what you need
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <Link href={category.href}>
                <Card className={`h-full border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group ${category.borderColor}`}>
                  <CardHeader className={`${category.color} rounded-t-lg transition-all duration-300 group-hover:scale-105`}>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                      <category.icon className={`h-7 w-7 ${category.textColor} transition-transform duration-300 group-hover:scale-110`} />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 pb-6">
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {category.description}
                    </CardDescription>
                    <div className={`${category.textColor} group-hover:translate-x-1 transition-transform duration-300 flex items-center text-sm font-semibold`}>
                      Browse {category.title}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}