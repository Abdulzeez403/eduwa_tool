"use client";

import React, { ReactNode } from "react";
import { DashboardHeader } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { useAuth } from "@/hooks/useAuth";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  const toggleSidebar = () => {};

  const closeSidebar = () => {};
  return (
    <>
      <div className="flex">
        <Sidebar isOpen={false} closeSidebar={closeSidebar} />
        <div className="w-full">
          <DashboardHeader toggleSidebar={toggleSidebar} />
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
