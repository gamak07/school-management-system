"use client";

import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TeacherFilters() {
  return (
    <Card className="shadow-none border-gray-200 mb-6 p-0">
      <CardContent className="p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input 
              placeholder="Search by name, staff ID, email, or phone..." 
              className="w-full pl-10 pr-4 py-2 border-gray-300 rounded-lg text-sm focus-visible:ring-teal-500 shadow-none h-auto"
            />
          </div>

          {/* Select Dropdowns */}
          <div className="flex flex-wrap gap-3">
            <Select defaultValue="all-depts">
              <SelectTrigger className="w-[160px] border-gray-300 rounded-lg text-sm focus-visible:ring-teal-500 shadow-none h-auto py-2">
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-depts">All Departments</SelectItem>
                <SelectItem value="Mathematics">Mathematics</SelectItem>
                <SelectItem value="Science">Science</SelectItem>
                <SelectItem value="Languages">Languages</SelectItem>
                <SelectItem value="Humanities">Humanities</SelectItem>
                <SelectItem value="Technology">Technology</SelectItem>
                <SelectItem value="Commerce">Commerce</SelectItem>
                <SelectItem value="Physical Education">Physical Education</SelectItem>
                <SelectItem value="Arts">Arts</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all-status">
              <SelectTrigger className="w-[130px] border-gray-300 rounded-lg text-sm focus:ring-teal-500 shadow-none h-auto py-2">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-status">All Status</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="On Leave">On Leave</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all-types">
              <SelectTrigger className="w-[130px] border-gray-300 rounded-lg text-sm focus:ring-teal-500 shadow-none h-auto py-2">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-types">All Types</SelectItem>
                <SelectItem value="Full-time">Full-time</SelectItem>
                <SelectItem value="Part-time">Part-time</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
              </SelectContent>
            </Select>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}