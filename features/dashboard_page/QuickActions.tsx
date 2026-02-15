import { UserPlus, ShieldCheck, Calendar, FileSignature, LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface QuickActionButtonProps {
  icon: LucideIcon;
  label: string;
  color: string;
  bgColor: string;
}

function QuickActionButton({ icon: Icon, label, color, bgColor }: QuickActionButtonProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:border-teal-200 hover:bg-teal-50/30 transition-all cursor-pointer">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${bgColor}`}>
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
      <span className="text-sm font-medium text-gray-900">{label}</span>
    </div>
  );
}

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3">
        <QuickActionButton icon={UserPlus} label="Add Student" color="text-emerald-600" bgColor="bg-emerald-50" />
        <QuickActionButton icon={ShieldCheck} label="New Teacher" color="text-blue-600" bgColor="bg-blue-50" />
        <QuickActionButton icon={Calendar} label="Schedule Event" color="text-amber-600" bgColor="bg-amber-50" />
        <QuickActionButton icon={FileSignature} label="Generate Report" color="text-violet-600" bgColor="bg-violet-50" />
      </CardContent>
    </Card>
  );
}