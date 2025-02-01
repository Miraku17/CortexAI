'use client'
import React, { useState } from "react";
import { Brain, Search, ChevronDown, Layout, Plus, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  return (
    <nav className="border-b">
      <div className="flex items-center justify-between py-4 mx-4 md:mx-16">
        {/* Left Section: Logo and Study Tools */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-primary" />
            <span className="font-bold text-2xl">CortexAI</span>
          </div>

          {/* Study Tools Dropdown (Hidden on Mobile) */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 nav-link">
                <span>Study Tools</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="py-2">
                <span className="text-gray-400 font-semibold text-sm ml-1">
                  Students
                </span>
                <DropdownMenuItem>
                  <div className="flex-col flex space-y-2">
                    <a
                      href="/flashcards"
                      className="flex items-center space-x-2 w-full"
                    >
                      <Layout className="w-4 h-4" />
                      <span>Flashcards</span>
                    </a>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Right Section: Search, Create, and Get Started */}
        <div className="flex items-center space-x-7">
          {/* Search Input (Hidden on Mobile) */}
          <div className="relative w-64 hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <Input
              type="search"
              placeholder="Search for flashcards..."
              className="pl-10 bg-[#ebe7e6] font-semibold"
            />
          </div>

          {/* Create Link (Hidden on Mobile) */}
          <a
            href="create"
            className="nav-link text-blue-600 font-bold hidden md:flex items-center space-x-1"
          >
            <Plus className="w-4 h-4" />
            <span>Create</span>
          </a>

          {/* Get Started Button (Hidden on Mobile) */}
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 hidden md:block">
            Get Started
          </button>

          {/* Hamburger Menu (Visible on Mobile) */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible on Small Screens) */}
      {isMenuOpen && (
        <div className="md:hidden mx-4 mb-4">
          <div className="flex flex-col space-y-4">
            {/* Search Input */}
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input
                type="search"
                placeholder="Search for flashcards..."
                className="pl-10 bg-[#ebe7e6] font-semibold"
              />
            </div>

            {/* Create Link */}
            <a
              href="create"
              className="nav-link text-blue-600 font-bold flex items-center space-x-1"
            >
              <Plus className="w-4 h-4" />
              <span>Create</span>
            </a>

            {/* Get Started Button */}
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Get Started
            </button>

            {/* Study Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 nav-link w-full text-left">
                <span>Study Tools</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="py-2 w-full">
                <span className="text-gray-400 font-semibold text-sm ml-1">
                  Students
                </span>
                <DropdownMenuItem>
                  <div className="flex-col flex space-y-2">
                    <a
                      href="/flashcards"
                      className="flex items-center space-x-2 w-full"
                    >
                      <Layout className="w-4 h-4" />
                      <span>Flashcards</span>
                    </a>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;