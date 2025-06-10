// lib/auth.ts
import { account, database } from "./appwrite";
const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!;

export async function registerUser(
  email: string,
  password: string,
  name: string,
  role: string
) {
  // Create the user account
  const user = await account.create("unique()", email, password, name);

  // Save role and other user info in a separate collection linked by userId
  await database.createDocument(DATABASE_ID, COLLECTION_ID, "unique()", {
    userId: user.$id,
    name,
    email,
    role,
  });

  return user;
}

export async function loginUser(email: string, password: string) {
  return await account.createEmailPasswordSession(email, password);
}

export async function getCurrentUser() {
  return await account.get();
}

export async function logoutUser() {
  return await account.deleteSession("current");
}
