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
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header Section */}
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              {/* Image */}
              <div className="w-full h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden">
                <img
                  src={tool.website_image}
                  alt={tool.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name, Rating, Categories */}
              <div className="flex-1 w-full">
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                  {tool.name}
                </h1>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-muted-foreground">
                  {tool.rating && (
                    <>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{tool.rating}</span>
                      </div>
                      <span className="hidden sm:inline">•</span>
                    </>
                  )}
                  {Array.from(new Set(tool.category) as Set<string>).map(
                    (cat, i) => (
                      <Badge key={i} variant="outline">
                        {cat}
                      </Badge>
                    )
                  )}
                </div>
              </div>

              {/* Button */}
              <div className="w-full sm:w-auto mt-4 sm:mt-0">
                <a
                  href={tool.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full sm:w-auto flex items-center justify-center gap-2">
                    <Globe className="h-4 w-4" />
                    Visit Website
                  </Button>
                </a>
              </div>
            </div>

            {/* Description Section */}
            <Card>
              <CardHeader>
                <CardTitle>About {tool.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{tool.about}</p>
              </CardContent>
            </Card>

            {/* Features */}
            {tool.feature && tool.feature.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {tool.feature.map((f: string, i: number) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Use Cases */}
            {tool.useCase && tool.useCase.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Use Cases</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tool.useCase.map((uc: string) => (
                      <Badge key={uc} variant="outline">
                        {uc}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Reviews */}
            {tool.reviews && tool.reviews.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {tool.reviews.map((review: any, i: number) => (
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
                        <p className="text-muted-foreground">
                          {review.comment}
                        </p>
                        {i !== tool.reviews.length - 1 && (
                          <Separator className="mt-4" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Pricing */}
                <div>
                  <h3 className="font-medium mb-2">Pricing</h3>
                  <div className="flex gap-2">
                    {tool.pricing.map((price: string) => (
                      <Badge key={price} variant="secondary">
                        {price}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h3 className="font-medium mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(tool.tags) as Set<string>).map(
                      (tag: string) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      )
                    )}
                  </div>
                </div>

                {/* Status */}
                <div>
                  <h3 className="font-medium mb-2">Status</h3>
                  <Badge
                    variant={
                      tool.status === "verified" ? "secondary" : "outline"
                    }
                  >
                    {tool.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
