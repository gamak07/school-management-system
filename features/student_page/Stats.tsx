"use client";

import { 
  Users, 
  UserCheck, 
  CircleDollarSign, 
  CalendarCheck, 
  LucideIcon 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Stats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard 
        label="Total Students" 
        value="10" 
        icon={Users} 
        iconColor="text-teal-600" 
        bgColor="bg-teal-50" 
      />
      <StatCard 
        label="Active Students" 
        value="9" 
        icon={UserCheck} 
        iconColor="text-green-600" 
        bgColor="bg-green-50" 
      />
      <StatCard 
        label="Fee Debtors" 
        value="4" 
        icon={CircleDollarSign} 
        iconColor="text-orange-600" 
        bgColor="bg-orange-50" 
      />
      <StatCard 
        label="Avg Attendance" 
        value="94.5%" 
        icon={CalendarCheck} 
        iconColor="text-blue-600" 
        bgColor="bg-blue-50" 
      />
    </div>
  );
}

// Reusable Sub-component
interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  iconColor: string;
  bgColor: string;
}

function StatCard({ label, value, icon: Icon, iconColor, bgColor }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${bgColor}`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
      </CardContent>
    </Card>
  );
}