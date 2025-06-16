// lib/auth.ts
import { account } from "./appwrite";
import { ID } from "appwrite";
const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!;

export async function registerUser(
  email: string,
  password: string,
  name: string,
  role: string
) {
  try {
    // Step 1: Create the user account
    const user = await account.create(ID.unique(), email, password, name);

    // Step 2: Store additional user data in your collection
    // await database.createDocument(
    //   DATABASE_ID,
    //   COLLECTION_ID,
    //   ID.unique(), // ✅ generate unique document ID
    //   {
    //     userId: user.$id,
    //     name,
    //     email,
    //     role,
    //     description: "New user",
    //   }
    // );

    return user;
  } catch (error: any) {
    console.error("Register error:", error);
    throw error; // rethrow to handle in frontend or caller
  }
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
