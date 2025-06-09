"use client";

import { logoutUser } from "@/lib/auth";
import { Menu, LogIn, Router } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const DashboardHeader = ({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) => {
  const route = useRouter();

  const logout = async () => {
    await logoutUser();
    route.push("/");
  };
  return (
    <header className="flex justify-between items-center px-4 py-3 bg-white shadow-md sticky top-0 z-50">
      {/* Left: Mobile Menu Button */}
      <div className="flex items-center gap-2">
        <button onClick={toggleSidebar} className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold hidden md:block">Dashboard</h1>
      </div>

      {/* Right: Avatar and Login */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <Image
          src="/student.jpg" // Replace with actual avatar path
          alt="User Avatar"
          width={32}
          height={32}
          className="rounded-full object-cover"
        />

        {/* Login icon (clickable) */}
        <button onClick={logout}>
          <LogIn className="w-6 h-6 text-gray-700 hover:text-black" />
        </button>
      </div>
    </header>
  );
};
