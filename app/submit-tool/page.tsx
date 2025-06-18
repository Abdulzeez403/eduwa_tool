"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import HomeLayout from "../homeLayout";
import ComingSoon from "../comingsoon";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  logoUrl: z.string().url("Please enter a valid URL"),
  websiteUrl: z.string().url("Please enter a valid URL"),
  shortDescription: z
    .string()
    .min(10, "Short description must be at least 10 characters")
    .max(150, "Short description must not exceed 150 characters"),
  longDescription: z
    .string()
    .min(50, "Long description must be at least 50 characters"),
  category: z.string().min(1, "Please select a category"),
  audience: z.string().min(1, "Please select a primary audience"),
  tags: z.string().min(2, "Please add at least one tag"),
});

export default function SubmitToolPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      logoUrl: "",
      websiteUrl: "",
      shortDescription: "",
      longDescription: "",
      category: "",
      audience: "",
      tags: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // In a real application, this would submit to your API
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
    setIsSubmitting(false);
    form.reset();
  }

  return (
    // <div className="container py-8">
    //   <div className="max-w-2xl mx-auto">
    //     <Card>
    //       <CardHeader>
    //         <CardTitle>Submit Your Educational Tool</CardTitle>
    //         <CardDescription>
    //           Share your educational tool with our community of educators and
    //           learners.
    //         </CardDescription>
    //       </CardHeader>
    //       <CardContent>
    //         <Form {...form}>
    //           <form
    //             onSubmit={form.handleSubmit(onSubmit)}
    //             className="space-y-6"
    //           >
    //             <FormField
    //               control={form.control}
    //               name="name"
    //               render={({ field }) => (
    //                 <FormItem>
    //                   <FormLabel>Tool Name</FormLabel>
    //                   <FormControl>
    //                     <Input
    //                       placeholder="Enter your tool's name"
    //                       {...field}
    //                     />
    //                   </FormControl>
    //                   <FormMessage />
    //                 </FormItem>
    //               )}
    //             />

    //             <FormField
    //               control={form.control}
    //               name="logoUrl"
    //               render={({ field }) => (
    //                 <FormItem>
    //                   <FormLabel>Logo URL</FormLabel>
    //                   <FormControl>
    //                     <Input
    //                       placeholder="https://example.com/logo.png"
    //                       {...field}
    //                     />
    //                   </FormControl>
    //                   <FormDescription>
    //                     Provide a URL to your tool's logo (recommended size:
    //                     512x512px)
    //                   </FormDescription>
    //                   <FormMessage />
    //                 </FormItem>
    //               )}
    //             />

    //             <FormField
    //               control={form.control}
    //               name="websiteUrl"
    //               render={({ field }) => (
    //                 <FormItem>
    //                   <FormLabel>Website URL</FormLabel>
    //                   <FormControl>
    //                     <Input placeholder="https://yourtool.com" {...field} />
    //                   </FormControl>
    //                   <FormMessage />
    //                 </FormItem>
    //               )}
    //             />

    //             <FormField
    //               control={form.control}
    //               name="shortDescription"
    //               render={({ field }) => (
    //                 <FormItem>
    //                   <FormLabel>Short Description</FormLabel>
    //                   <FormControl>
    //                     <Textarea
    //                       placeholder="Brief overview of your tool (150 characters max)"
    //                       className="resize-none"
    //                       {...field}
    //                     />
    //                   </FormControl>
    //                   <FormDescription>
    //                     This will be displayed in the tools listing page
    //                   </FormDescription>
    //                   <FormMessage />
    //                 </FormItem>
    //               )}
    //             />

    //             <FormField
    //               control={form.control}
    //               name="longDescription"
    //               render={({ field }) => (
    //                 <FormItem>
    //                   <FormLabel>Long Description</FormLabel>
    //                   <FormControl>
    //                     <Textarea
    //                       placeholder="Detailed description of your tool's features and benefits"
    //                       className="min-h-[200px]"
    //                       {...field}
    //                     />
    //                   </FormControl>
    //                   <FormMessage />
    //                 </FormItem>
    //               )}
    //             />

    //             <FormField
    //               control={form.control}
    //               name="category"
    //               render={({ field }) => (
    //                 <FormItem>
    //                   <FormLabel>Category</FormLabel>
    //                   <Select
    //                     onValueChange={field.onChange}
    //                     defaultValue={field.value}
    //                   >
    //                     <FormControl>
    //                       <SelectTrigger>
    //                         <SelectValue placeholder="Select a category" />
    //                       </SelectTrigger>
    //                     </FormControl>
    //                     <SelectContent>
    //                       <SelectItem value="exams">Exams</SelectItem>
    //                       <SelectItem value="learning-tools">
    //                         Learning Tools
    //                       </SelectItem>
    //                       <SelectItem value="teachers">Teachers</SelectItem>
    //                       <SelectItem value="schools">Schools</SelectItem>
    //                     </SelectContent>
    //                   </Select>
    //                   <FormMessage />
    //                 </FormItem>
    //               )}
    //             />

    //             <FormField
    //               control={form.control}
    //               name="audience"
    //               render={({ field }) => (
    //                 <FormItem>
    //                   <FormLabel>Primary Audience</FormLabel>
    //                   <Select
    //                     onValueChange={field.onChange}
    //                     defaultValue={field.value}
    //                   >
    //                     <FormControl>
    //                       <SelectTrigger>
    //                         <SelectValue placeholder="Select primary audience" />
    //                       </SelectTrigger>
    //                     </FormControl>
    //                     <SelectContent>
    //                       <SelectItem value="students">Students</SelectItem>
    //                       <SelectItem value="teachers">Teachers</SelectItem>
    //                       <SelectItem value="schools">Schools</SelectItem>
    //                       <SelectItem value="parents">Parents</SelectItem>
    //                     </SelectContent>
    //                   </Select>
    //                   <FormMessage />
    //                 </FormItem>
    //               )}
    //             />

    //             <FormField
    //               control={form.control}
    //               name="tags"
    //               render={({ field }) => (
    //                 <FormItem>
    //                   <FormLabel>Tags</FormLabel>
    //                   <FormControl>
    //                     <Input
    //                       placeholder="Enter tags separated by commas"
    //                       {...field}
    //                     />
    //                   </FormControl>
    //                   <FormDescription>
    //                     Add relevant tags to help users find your tool (e.g.,
    //                     Mathematics, Language Learning, K-12)
    //                   </FormDescription>
    //                   <FormMessage />
    //                 </FormItem>
    //               )}
    //             />

    //             <Button
    //               type="submit"
    //               className="w-full"
    //               disabled={isSubmitting}
    //             >
    //               {isSubmitting ? "Submitting..." : "Submit Tool"}
    //             </Button>
    //           </form>
    //         </Form>
    //       </CardContent>
    //     </Card>
    //   </div>
    // </div>

    <ComingSoon />
  );
}
