"use client";

import { Star, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import HomeLayout from "@/app/homeLayout";

export default function ToolDetails({ tool }: { tool: any }) {
  return (
    <HomeLayout>
      <div className="py-8 w-[80%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-lg overflow-hidden">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{tool.name}</h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span>{tool.rating}</span>
                  </div>
                  <span>•</span>
                  <span>{tool.category}</span>
                </div>
              </div>
              <a href={tool.link} target="_blank" rel="noopener noreferrer">
                <Button className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Visit Website
                </Button>
              </a>
            </div>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About {tool.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{tool.description}</p>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {tool.reviews?.map((review: any, i: number) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{review.user}</div>
                        <div className="text-sm text-muted-foreground">
                          {review.date}
                        </div>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className={`h-4 w-4 ${
                              j < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                      {i !== tool.reviews.length - 1 && (
                        <Separator className="mt-4" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Category</h3>
                  <Badge variant="secondary">{tool.category}</Badge>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Audience</h3>
                  <div className="flex flex-wrap gap-2">
                    {tool.audience?.map((item: string) => (
                      <Badge key={item} variant="outline">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {tool.tags.map((tag: string) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
