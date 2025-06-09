// lib/crud.ts

import { ID, Query } from "appwrite";
import { database } from "./appwrite";

const featuredTools = [
  {
    name: "QANDA",
    description:
      "AI-based math problem-solving and tutoring platform using OCR and step-by-step solutions.",
    tags: ["math", "OCR", "tutoring"],
    about:
      "QANDA scans math problems and provides instant, detailed solutions and personalized study content.",
    feature: [
      "OCR-based solution search",
      "Step-by-step explanations",
      "One‑on‑one tutoring",
    ],
    status: "active",
    pricing: ["Freemium", "Subscription"],
    useCase: ["Homework help", "Math study", "Concept reinforcement"],
    website_link: "https://qanda.ai/en",
    category: ["Learning Tools", "Math"],
    website_logo: "",
    website_image: "",
  },
  {
    name: "Perusall",
    description:
      "Collaborative annotation platform with AI-automated grading for reading assignments.",
    tags: ["annotation", "collaboration", "reading"],
    about:
      "Perusall enables social reading with group annotation, discussion, and built‑in AI grading.",
    feature: ["Social annotation", "AI grading", "LMS integration"],
    status: "active",
    pricing: ["Paid"],
    useCase: ["Reading comprehension", "Group study", "Class discussions"],
    website_link: "https://www.perusall.com",
    category: ["Learning Tools", "Reading"],
    website_logo: "",
    website_image: "",
  },
  {
    name: "Khanmigo (Khan Academy)",
    description:
      "AI tutor and writing coach integrated in Khan Academy for personalized learning.",
    tags: ["tutor", "writing", "AI chatbot"],
    about:
      "Khanmigo offers tutoring in subjects and essay feedback, and supports teacher tools—all via AI.",
    feature: ["Subject tutor", "Writing coach", "Teacher analytics"],
    status: "active",
    pricing: ["Subscription ($4/mo)"],
    useCase: ["Student tutoring", "Essay writing help", "Teacher assistance"],
    website_link: "https://www.khanacademy.org",
    category: ["Learning Tools", "Tutoring"],
    website_logo: "",
    website_image: "",
  },
  {
    name: "Mathspace",
    description:
      "Adaptive online math education program with personalized feedback and tutorials.",
    tags: ["math", "adaptive learning", "personalization"],
    about:
      "Mathspace adapts problems based on performance, offering hints and instant feedback.",
    feature: [
      "Adaptive questions",
      "Hints & video tutorials",
      "Progress reports",
    ],
    status: "active",
    pricing: ["Paid (school licensing)"],
    useCase: ["Math mastery", "Skill practice", "Classroom use"],
    website_link: "https://www.mathspace.co",
    category: ["Learning Tools", "Math"],
    website_logo: "",
    website_image: "",
  },
  {
    name: "Wooclap",
    description:
      "Interactive Q&A and polling tool for live lessons, now enhanced with AI question creation.",
    tags: ["interactive", "polls", "AI-generated questions"],
    about:
      "Wooclap engages students in real time with polls and automatically generated questions.",
    feature: [
      "Live polls/Q&A",
      "AI‑powered quiz creation",
      "Multilingual support",
    ],
    status: "active",
    pricing: ["Freemium", "Paid plans"],
    useCase: [
      "Class engagement",
      "Formative assessment",
      "Interactive lessons",
    ],
    website_link: "https://www.wooclap.com",
    category: ["Learning Tools", "Interactive"],
    website_logo: "",
    website_image: "",
  },
];

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
    const tasks = featuredTools.map((tool) => {
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
