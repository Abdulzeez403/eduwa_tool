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
import {
  addGuestPermissionToAllDocs,
  fetchFilteredTools,
  listTools,
} from "@/lib/crud";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  Sheet,
} from "@/components/ui/sheet";
import { useSearchParams } from "next/navigation";
import { Models } from "appwrite";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";

const categories = [
  { id: "exams", label: "Exams" },
  { id: "learning-tools", label: "Learning Tools" },
  { id: "teachers", label: "Teachers" },
  { id: "schools", label: "Schools" },
];

export default function ToolsPage() {
  const searchParams = useSearchParams();

  const defaultCategory = searchParams.get("category");

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    defaultCategory
      ? defaultCategory.split(",").map((cat) => cat.toLowerCase().trim())
      : []
  );

  const [selectedAudiences, setSelectedAudiences] = useState<string[]>([]);
  const [tools, setTools] = useState<Models.Document[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const pageSize = 9; //
  const totalPages = Math.ceil(totalCount / pageSize);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await fetchFilteredTools({
          categories: selectedCategories,
          page: currentPage,
          limit: pageSize,
        });
        setTools(response.documents);
        setTotalCount(response.total);
      } catch (error) {
        console.error("Failed to fetch tools:", error);
      }
    };

    fetchTools();
  }, [selectedCategories, selectedAudiences, currentPage]);

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
              {/* Your filter card (copied as-is) */}
              <div className="">
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
              </CardContent>
            </Card>
          </aside>

          {/* Tools Grid */}
          <section className="flex-1 space-y-6">
            {tools.length === 0 ? (
              <div className="text-center text-muted-foreground">
                Loading tools or no tools available.
              </div>
            ) : tools?.length === 0 ? (
              <div className="text-center text-muted-foreground">
                No tools match the selected filters.
              </div>
            ) : (
              <div className="mx-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools?.map((tool: any, index: number) => (
                  <Link href={`/tools/${tool.slug}`} key={index}>
                    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={tool.website_image}
                          alt={tool.website_image}
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
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
                    </Card>
                  </Link>
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() =>
                          setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        className={
                          currentPage === 1
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>

                    {[...Array(totalPages)].map((_, idx) => (
                      <PaginationItem key={idx}>
                        <PaginationLink
                          isActive={currentPage === idx + 1}
                          onClick={() => setCurrentPage(idx + 1)}
                        >
                          {idx + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(prev + 1, totalPages)
                          )
                        }
                        className={
                          currentPage === totalPages
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </section>
        </div>
      </div>
    </HomeLayout>
  );
}
