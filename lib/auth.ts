// lib/auth.ts
import { account } from "./appwrite";

export async function registerUser(
  email: string,
  password: string,
  name: string
) {
  return await account.create("unique()", email, password, name);
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
