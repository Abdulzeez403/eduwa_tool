"use client";

import Link from "next/link";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const { user } = useAuth();

  const handlesubmitTools = () => {
    if (user) {
      router.push("/admin/dashboard");
    } else {
      router.push("/auth/signup");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-6 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">EduwaTools</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/tools"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Browse Tools
          </Link>

          <Link
            href="/blogs"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Blogs
          </Link>

          <button
            onClick={handlesubmitTools}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Submit Tool
          </button>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/auth/signin">Login</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className=" mx-4 md:hidden border-t py-4 bg-background/95 backdrop-blur">
          <div className="container flex flex-col space-y-3">
            <Link
              href="/tools"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Browse Tools
            </Link>
            {/* <Link
              href="#categories"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="#featured"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Featured
            </Link> */}
            <Link
              href="/submit-tool"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Submit Tool
            </Link>
            <div className="flex items-center space-x-2 pt-2">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/auth/signin">Login</Link>
              </Button>
              <Button size="sm" className="w-full" asChild>
                <Link href="/auth/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
