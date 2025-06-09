"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Upload, LogOut } from "lucide-react";

export const Sidebar = ({
  isOpen,
  closeSidebar,
}: {
  isOpen: boolean;
  closeSidebar: () => void;
}) => {
  const pathname = usePathname();

  const links = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Uploading",
      href: "/admin/uploading",
      icon: Upload,
    },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={closeSidebar}
      />

      <aside
        className={`
          fixed top-0 left-0 w-64 h-screen bg-gray-100 shadow-md z-50 transform transition-transform duration-300
          ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:static flex flex-col
        `}
      >
        {/* Header */}
        <div className="p-4 pb-6 font-bold text-xl border-b">Eduwa Tool</div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 p-4 flex-1">
          {links.map(({ name, href, icon: Icon }) => (
            <Link
              key={name}
              href={href}
              className={`flex items-center gap-3 p-2 rounded ${
                pathname === href
                  ? "bg-blue-100 text-blue-700 border-blue-400 border-2 font-semibold"
                  : "hover:bg-gray-200"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{name}</span>
            </Link>
          ))}
        </nav>

        {/* Logout Button at Bottom */}
        <div className="p-4 border-t">
          <button
            onClick={() => {
              // Replace with actual logout logic
              alert("Logging out...");
            }}
            className="flex items-center gap-3 text-red-600 hover:text-red-800 w-full"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};
