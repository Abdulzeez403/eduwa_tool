"use client";

import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <div className="bg-red-100 rounded-full p-4 mb-6">
        <SearchX className="w-16 h-16 text-red-500" />
      </div>
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Page Not Found
      </h2>
      <p className="text-center text-gray-500 max-w-md mb-6">
        Sorry, we couldn’t find the page you’re looking for. It might have been
        removed or never existed.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go back home
      </Link>
    </div>
  );
}
