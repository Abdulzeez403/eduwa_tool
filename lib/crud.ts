// lib/crud.ts

import { ID, Permission, Query, Role } from "appwrite";
import { database } from "./appwrite";
import { AItools } from "./contanst";

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^a-z0-9\-]/g, "") // Remove all non-alphanumeric chars except -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!;

export const createTool = async (data: any) => {
  data.slug = slugify(data.name);
  return await database.createDocument(
    DATABASE_ID,
    COLLECTION_ID,
    ID.unique(),
    data
  );
};

export const getTool = async (slug: string) => {
  return await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
    Query.equal("slug", slug),
  ]);
};

export const listTools = async () => {
  return await database.listDocuments(DATABASE_ID, COLLECTION_ID);
};

export const updateTool = async (documentId: string, data: any) => {
  if (data.name) {
    data.slug = slugify(data.name);
  }
  return await database.updateDocument(
    DATABASE_ID,
    COLLECTION_ID,
    documentId,
    data
  );
};

export const deleteTool = async (documentId: string) => {
  return await database.deleteDocument(DATABASE_ID, COLLECTION_ID, documentId);
};

export const insertData = async () => {
  try {
    const tasks = AItools.map((tool) => {
      const slug = slugify(tool.name);

      return database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        ...tool,
        slug, // Include slug during creation
      });
    });

    await Promise.all(tasks);
    console.log("✅ All documents inserted successfully");
  } catch (error) {
    console.error("❌ Error inserting documents:", error);
  }
};

export const fetchFilteredTools = async ({
  categories = [],
  page = 1,
  limit = 9,
}: {
  categories?: string[];
  page?: number;
  limit?: number;
}) => {
  const queries: any[] = [];

  if (categories.length > 0) {
    queries.push(
      Query.contains(
        "category",
        categories.map((cat) => cat.toLowerCase())
      )
    );
  }

  queries.push(Query.limit(limit));
  queries.push(Query.offset((page - 1) * limit));

  console.log({ categories, queries }); // 👀 Debug log

  const response = await database.listDocuments(
    DATABASE_ID,
    COLLECTION_ID,
    queries
  );

  return response; // return full response including `total`
};
