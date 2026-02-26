"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { 
  LayoutDashboard, GraduationCap, UserCheck, Users, BookOpen, 
  FileText, CalendarCheck, DollarSign, Calendar, BarChart3, Settings 
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Students", href: "/students", icon: GraduationCap },
  { label: "Teachers", href: "/teachers", icon: UserCheck },
  { label: "Staff", href: "/staff", icon: Users },
  { label: "Classes", href: "/classes", icon: BookOpen },
  { label: "Grades", href: "/grades", icon: FileText },
  { label: "Attendance", href: "/attendance", icon: CalendarCheck },
  { label: "Finance", href: "/finance", icon: DollarSign },
  { label: "Calendar", href: "/calendar", icon: Calendar },
  { label: "Reports", href: "/reports", icon: BarChart3 },
  { label: "Settings", href: "/settings", icon: Settings },
];

interface SidebarContentProps {
  onClick?: () => void; // Optional prop to close mobile menu on click
}

// 1. Reusable Content (Used by both Desktop Sidebar and Mobile Sheet)
export function SidebarContent({ onClick }: SidebarContentProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-200">
        <div className="relative w-10 h-10">
          <Image 
            alt="School Logo" 
            className="w-full h-full object-contain" 
            src="/logo.png" 
            fill
          />
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-900">EduManage</h1>
          <p className="text-xs text-gray-500">School Management</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClick} // Close menu when link clicked (Mobile only)
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all cursor-pointer text-sm font-medium whitespace-nowrap",
                isActive 
                  ? "bg-teal-50 text-teal-600" 
                  : "text-gray-700 hover:bg-gray-50"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/avatar1.jpg" alt="Dr. Sarah" />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">Dr. Sarah Johnson</p>
            <p className="text-xs text-gray-500 capitalize">School Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. Desktop Sidebar (Hidden on Mobile)
export function Sidebar() {
  return (
    <aside className="hidden lg:flex fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-50 flex-col">
      <SidebarContent />
    </aside>
  );
}