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

export default function StaffFilters() {
  return (
    <Card className="shadow-none border-gray-200 mb-6 p-0">
      <CardContent className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Search Input — spans 2 cols on lg */}
          <div className="lg:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search by name, staff ID, email, phone..."
              className="w-full pl-10 pr-4 py-2.5 border-gray-300 rounded-lg text-sm focus-visible:ring-teal-500 shadow-none h-auto"
            />
          </div>

          {/* Department Select */}
          <Select defaultValue="all-depts">
            <SelectTrigger className="w-full border-gray-300 rounded-lg text-sm focus-visible:ring-teal-500 shadow-none h-auto py-2.5">
              <SelectValue placeholder="All Departments" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-depts">All Departments</SelectItem>
              <SelectItem value="Administration">Administration</SelectItem>
              <SelectItem value="Finance">Finance</SelectItem>
              <SelectItem value="Library">Library</SelectItem>
              <SelectItem value="Security">Security</SelectItem>
              <SelectItem value="Maintenance">Maintenance</SelectItem>
              <SelectItem value="Health">Health</SelectItem>
              <SelectItem value="IT">IT</SelectItem>
              <SelectItem value="Front Desk">Front Desk</SelectItem>
              <SelectItem value="Transport">Transport</SelectItem>
              <SelectItem value="Counseling">Counseling</SelectItem>
              <SelectItem value="Human Resources">Human Resources</SelectItem>
              <SelectItem value="Procurement">Procurement</SelectItem>
            </SelectContent>
          </Select>

          {/* Status Select */}
          <Select defaultValue="all-status">
            <SelectTrigger className="w-full border-gray-300 rounded-lg text-sm focus-visible:ring-teal-500 shadow-none h-auto py-2.5">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-status">All Status</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="On Leave">On Leave</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>

          {/* Type Select */}
          <Select defaultValue="all-types">
            <SelectTrigger className="w-full border-gray-300 rounded-lg text-sm focus-visible:ring-teal-500 shadow-none h-auto py-2.5">
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
      </CardContent>
    </Card>
  );
}
