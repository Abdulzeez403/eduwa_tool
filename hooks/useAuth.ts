"use client";
import { useEffect, useState } from "react";
import { account } from "@/lib/appwrite";
import { useRouter } from "next/navigation";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function getCurrentUser() {
      try {
        const user = await account.get();
        setUser(user as any);
      } catch {
        setUser(null);
        router.push("/"); // redirect to login if not authenticated
      } finally {
        setLoading(false);
      }
    }
    getCurrentUser();
  }, [router]);

  return { user, loading };
}
