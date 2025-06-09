// app/tools/[slug]/page.tsx
import { getTool, listTools } from "@/lib/crud";
import { notFound } from "next/navigation";
import ToolDetails from "./toolDetail";

export async function generateStaticParams() {
  const response = await listTools();
  return response.documents.map((tool: any) => ({
    slug: tool.name,
  }));
}

export default async function ToolPage({
  params,
}: {
  params: { slug: string };
}) {
  const response = await getTool(params.slug);
  const tool = response.documents?.[0];

  if (!tool) return notFound();

  return <ToolDetails tool={tool} />;
}
