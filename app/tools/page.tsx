"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import HomeLayout from "../homeLayout";
import { listTools } from "@/lib/crud";

const tools = [
  {
    id: "mathgenius",
    name: "MathGenius",
    description:
      "Interactive mathematics learning platform with adaptive exercises and visualizations.",
    logo: "https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Learning Tools",
    audience: ["Students", "Teachers"],
    rating: 4.8,
  },
  {
    id: "historyquest",
    name: "HistoryQuest",
    description:
      "Immersive historical simulations and interactive timelines for engaging history education.",
    logo: "https://images.pexels.com/photos/2928232/pexels-photo-2928232.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Learning Tools",
    audience: ["Students", "Teachers"],
    rating: 4.6,
  },
  {
    id: "examprep-pro",
    name: "ExamPrep Pro",
    description:
      "Comprehensive exam preparation with practice tests, flashcards, and personalized study plans.",
    logo: "https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Exams",
    audience: ["Students"],
    rating: 4.9,
  },
];

const categories = [
  { id: "exams", label: "Exams" },
  { id: "learning-tools", label: "Learning Tools" },
  { id: "teachers", label: "Teachers" },
  { id: "schools", label: "Schools" },
];

const audiences = [
  { id: "students", label: "Students" },
  { id: "teachers", label: "Teachers" },
  { id: "schools", label: "Schools" },
  { id: "parents", label: "Parents" },
];

export default function ToolsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedAudiences, setSelectedAudiences] = useState<string[]>([]);

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
    <HomeLayout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Categories</h3>
                  <ScrollArea className="h-[200px]">
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        className="flex items-center space-x-2 py-2"
                      >
                        <Checkbox
                          id={category.id}
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedCategories([
                                ...selectedCategories,
                                category.id,
                              ]);
                            } else {
                              setSelectedCategories(
                                selectedCategories.filter(
                                  (id) => id !== category.id
                                )
                              );
                            }
                          }}
                        />
                        <label
                          htmlFor={category.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {category.label}
                        </label>
                      </div>
                    ))}
                  </ScrollArea>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Audience</h3>
                  <ScrollArea className="h-[200px]">
                    {audiences.map((audience) => (
                      <div
                        key={audience.id}
                        className="flex items-center space-x-2 py-2"
                      >
                        <Checkbox
                          id={audience.id}
                          checked={selectedAudiences.includes(audience.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedAudiences([
                                ...selectedAudiences,
                                audience.id,
                              ]);
                            } else {
                              setSelectedAudiences(
                                selectedAudiences.filter(
                                  (id) => id !== audience.id
                                )
                              );
                            }
                          }}
                        />
                        <label
                          htmlFor={audience.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {audience.label}
                        </label>
                      </div>
                    ))}
                  </ScrollArea>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Tools Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool: any, index: number) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={tool.website_image}
                      alt={tool.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{tool.name}</CardTitle>
                    <CardDescription>{tool.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {tool.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      Rating: {tool.rating}
                    </div>
                    <Button asChild>
                      {/* <Link href={`/tools/${tool.$id}`}>View Tool</Link> */}
                      <Link href={`/tools/${tool.slug}`}>View Tool</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
