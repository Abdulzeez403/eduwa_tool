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
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  Sheet,
} from "@/components/ui/sheet";
import { useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams();
  const defaultCategory = searchParams.get("category");

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    defaultCategory ? [defaultCategory] : []
  );
  const [selectedAudiences, setSelectedAudiences] = useState<string[]>([]);
  const [tools, setTools] = useState([]);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await listTools();
        setTools(response.documents as any);
      } catch (error) {
        console.error("Failed to fetch tools:", error);
      }
    };

    fetchTools();
  }, []);

  useEffect(() => {
    if (defaultCategory) {
      setSelectedCategories([defaultCategory]);
    }
  }, [defaultCategory]);

  const filteredTools = tools.filter((tool: any) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(tool.category);

    const matchesAudience =
      selectedAudiences.length === 0 ||
      selectedAudiences.some((audience) =>
        (tool.audience || []).includes(audience)
      );

    return matchesCategory && matchesAudience;
  });

  return (
    <HomeLayout>
      <div className="container py-8">
        {/* Mobile Filter Button */}
        <div className="md:hidden flex justify-end mb-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Filters</Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-[80%] sm:w-[60%]">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>

              {/* Your filter card (copied as-is) */}
              <div className="mt-4">
                <Card className="border-none shadow-none">
                  {/* Move your entire <CardHeader> and <CardContent> filter logic here */}
                  {/* Copy it from the sidebar below */}
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Filters</CardTitle>
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={
                          selectedCategories.length === 0 &&
                          selectedAudiences.length === 0
                        }
                        onClick={() => {
                          setSelectedCategories([]);
                          setSelectedAudiences([]);
                        }}
                      >
                        Clear
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Categories Filter */}
                    <section className="space-y-3">
                      <h3 className="font-semibold text-sm tracking-wide uppercase text-muted-foreground">
                        Categories
                      </h3>
                      <ScrollArea className="h-[180px] pr-2">
                        <ul className="space-y-2">
                          {categories.map((category) => (
                            <li
                              key={category.id}
                              className="flex items-center gap-2"
                            >
                              <Checkbox
                                id={`cat-${category.id}`}
                                checked={selectedCategories.includes(
                                  category.id
                                )}
                                onCheckedChange={(checked) =>
                                  checked
                                    ? setSelectedCategories([
                                        ...selectedCategories,
                                        category.id,
                                      ])
                                    : setSelectedCategories(
                                        selectedCategories.filter(
                                          (id) => id !== category.id
                                        )
                                      )
                                }
                              />
                              <label
                                htmlFor={`cat-${category.id}`}
                                className="text-sm leading-none cursor-pointer"
                              >
                                {category.label}
                              </label>
                            </li>
                          ))}
                        </ul>
                      </ScrollArea>
                    </section>

                    <Separator />

                    {/* Audience Filter */}
                    <section className="space-y-3">
                      <h3 className="font-semibold text-sm tracking-wide uppercase text-muted-foreground">
                        Audience
                      </h3>
                      <ScrollArea className="h-[180px] pr-2">
                        <ul className="space-y-2">
                          {audiences.map((audience) => (
                            <li
                              key={audience.id}
                              className="flex items-center gap-2"
                            >
                              <Checkbox
                                id={`aud-${audience.id}`}
                                checked={selectedAudiences.includes(
                                  audience.id
                                )}
                                onCheckedChange={(checked) =>
                                  checked
                                    ? setSelectedAudiences([
                                        ...selectedAudiences,
                                        audience.id,
                                      ])
                                    : setSelectedAudiences(
                                        selectedAudiences.filter(
                                          (id) => id !== audience.id
                                        )
                                      )
                                }
                              />
                              <label
                                htmlFor={`aud-${audience.id}`}
                                className="text-sm leading-none cursor-pointer"
                              >
                                {audience.label}
                              </label>
                            </li>
                          ))}
                        </ul>
                      </ScrollArea>
                    </section>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-full md:w-64 space-y-4 md:sticky md:top-24 self-start">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Filters</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={
                      selectedCategories.length === 0 &&
                      selectedAudiences.length === 0
                    }
                    onClick={() => {
                      setSelectedCategories([]);
                      setSelectedAudiences([]);
                    }}
                  >
                    Clear
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Categories Filter */}
                <section className="space-y-3">
                  <h3 className="font-semibold text-sm tracking-wide uppercase text-muted-foreground">
                    Categories
                  </h3>
                  <ScrollArea className="h-[180px] pr-2">
                    <ul className="space-y-2">
                      {categories.map((category) => (
                        <li
                          key={category.id}
                          className="flex items-center gap-2"
                        >
                          <Checkbox
                            id={`cat-${category.id}`}
                            checked={selectedCategories.includes(category.id)}
                            onCheckedChange={(checked) =>
                              checked
                                ? setSelectedCategories([
                                    ...selectedCategories,
                                    category.id,
                                  ])
                                : setSelectedCategories(
                                    selectedCategories.filter(
                                      (id) => id !== category.id
                                    )
                                  )
                            }
                          />
                          <label
                            htmlFor={`cat-${category.id}`}
                            className="text-sm leading-none cursor-pointer"
                          >
                            {category.label}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </section>

                <Separator />

                {/* Audience Filter */}
                <section className="space-y-3">
                  <h3 className="font-semibold text-sm tracking-wide uppercase text-muted-foreground">
                    Audience
                  </h3>
                  <ScrollArea className="h-[180px] pr-2">
                    <ul className="space-y-2">
                      {audiences.map((audience) => (
                        <li
                          key={audience.id}
                          className="flex items-center gap-2"
                        >
                          <Checkbox
                            id={`aud-${audience.id}`}
                            checked={selectedAudiences.includes(audience.id)}
                            onCheckedChange={(checked) =>
                              checked
                                ? setSelectedAudiences([
                                    ...selectedAudiences,
                                    audience.id,
                                  ])
                                : setSelectedAudiences(
                                    selectedAudiences.filter(
                                      (id) => id !== audience.id
                                    )
                                  )
                            }
                          />
                          <label
                            htmlFor={`aud-${audience.id}`}
                            className="text-sm leading-none cursor-pointer"
                          >
                            {audience.label}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </section>
              </CardContent>
            </Card>
          </aside>

          {/* Tools Grid */}
          <section className="flex-1 space-y-6">
            {tools.length === 0 ? (
              <div className="text-center text-muted-foreground">
                Loading tools or no tools available.
              </div>
            ) : filteredTools.length === 0 ? (
              <div className="text-center text-muted-foreground">
                No tools match the selected filters.
              </div>
            ) : (
              <div className="mx-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools.map((tool: any, index: number) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-md transition-shadow duration-200"
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
                      <CardDescription className="capitalize text-muted-foreground">
                        {tool.category}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {tool.description}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Rating: {tool.rating}
                      </span>
                      <Button asChild size="sm">
                        <Link href={`/tools/${tool.slug}`}>View</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </HomeLayout>
  );
}
