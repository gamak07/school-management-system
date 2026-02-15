"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, Bell, ChevronDown, User, Settings, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { SidebarContent } from "./Sidebar";

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 lg:left-64 right-0 h-16 bg-white border-b border-gray-200 z-30">
      <div className="flex items-center justify-between h-full px-4 lg:px-6">
        
        {/* Left Section: Mobile Menu & Welcome Text */}
        <div className="flex items-center gap-4">
          
          {/* SHADCN SHEET (Mobile Sidebar) */}
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-gray-600 hover:bg-gray-100">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            
            {/* side="left" makes it slide from the left */}
            <SheetContent side="left" className="p-0 w-64 border-r-0">
               {/* Hidden Title for Accessibility */}
              <SheetTitle className="hidden">Navigation Menu</SheetTitle>
              
              <SidebarContent onClick={() => setIsMobileOpen(false)} />
            </SheetContent>
          </Sheet>

          <div className="hidden md:block">
            <h2 className="text-lg font-semibold text-gray-900">Welcome back, Dr.!</h2>
            <p className="text-sm text-gray-500">Here&apos;s what&apos;s happening today</p>
          </div>
        </div>

        {/* Right Section: Search, Notifications, Profile */}
        <div className="flex items-center gap-3">
          {/* Search Bar */}
          <div className="hidden md:flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-transparent focus-within:border-gray-200 transition-colors">
            <Search className="text-gray-400 h-4 w-4" />
            <input
              placeholder="Search..."
              className="bg-transparent border-none outline-none text-sm text-gray-700 w-48 placeholder:text-gray-400"
              type="text"
            />
          </div>

          {/* Notifications & Profile (Same as before) */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative text-gray-600 hover:bg-gray-100 rounded-lg h-10 w-10">
                <Bell className="h-5 w-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 p-0 rounded-lg shadow-lg border border-gray-200 bg-white">
              <div className="px-4 py-2 border-b border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
              </div>
              <div className="flex flex-col">
                <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer bg-teal-50/30">
                  <p className="text-sm text-gray-900">New admission request</p>
                  <p className="text-xs text-gray-500 mt-1">5 min ago</p>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 h-auto rounded-lg">
                <Avatar className="h-9 w-9 border border-gray-200">
                  <AvatarImage src="/avatar1.jpg" alt="Dr. Sarah" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <ChevronDown className="h-4 w-4 text-gray-600" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 p-0 rounded-lg shadow-lg border border-gray-200 bg-white">
               <div className="px-4 py-3 border-b border-gray-200">
                <p className="text-sm font-semibold text-gray-900">Dr. Sarah Johnson</p>
                <p className="text-xs text-gray-500">admin@school.edu</p>
              </div>
              <div className="flex flex-col py-1">
                <Link href="/profile" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer transition-colors">
                  <User className="h-4 w-4 text-gray-600" />
                  <span className="text-sm text-gray-700">My Profile</span>
                </Link>
                <button className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 w-full text-left cursor-pointer whitespace-nowrap transition-colors border-t mt-1">
                  <LogOut className="h-4 w-4 text-red-600" />
                  <span className="text-sm text-red-600">Sign Out</span>
                </button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}