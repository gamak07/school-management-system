"use client";

import { 
  User, 
  CalendarCheck, 
  BarChart2, 
  DollarSign, 
  Shield, 
  AlertTriangle 
} from "lucide-react";
import { cn } from "@/lib/utils";

const reportTypes = [
  { id: "enrollment", label: "Student Enrollment", desc: "Total students, new admissions, withdrawals", icon: User, color: "text-emerald-600", bg: "bg-emerald-500/10" },
  { id: "attendance", label: "Attendance Report", desc: "Daily/weekly/monthly attendance statistics", icon: CalendarCheck, color: "text-blue-600", bg: "bg-blue-500/10" },
  { id: "academic", label: "Academic Performance", desc: "Grades, pass rates, class rankings", icon: BarChart2, color: "text-violet-600", bg: "bg-violet-500/10" },
  { id: "financial", label: "Financial Summary", desc: "Fee collection, outstanding payments", icon: DollarSign, color: "text-amber-600", bg: "bg-amber-500/10" },
  { id: "teacher", label: "Teacher Performance", desc: "Teaching hours, student feedback, results", icon: Shield, color: "text-pink-600", bg: "bg-pink-500/10" },
  { id: "disciplinary", label: "Disciplinary Report", desc: "Incidents, actions taken, trends", icon: AlertTriangle, color: "text-red-600", bg: "bg-red-500/10" },
];

interface StepOneTypeProps {
  selected: string | null;
  onSelect: (id: string) => void;
}

export function StepOneType({ selected, onSelect }: StepOneTypeProps) {
  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-300 fade-in">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Select Report Type</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {reportTypes.map((type) => (
            <button
              key={type.id}
              type="button"
              onClick={() => onSelect(type.id)}
              className={cn(
                "flex items-start gap-3 p-4 rounded-lg border-2 transition-all cursor-pointer text-left",
                selected === type.id 
                  ? "border-teal-500 bg-teal-50 ring-1 ring-teal-500" 
                  : "border-gray-200 hover:border-gray-300 bg-white"
              )}
            >
              <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0", type.bg)}>
                <type.icon className={cn("w-5 h-5", type.color)} />
              </div>
              <div>
                <span className="text-sm font-medium text-gray-900 block">{type.label}</span>
                <span className="text-xs text-gray-500">{type.desc}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}