import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface MiniStatCardProps {
  title: string;
  value: string;
  sub: string;
  icon: LucideIcon;
  iconColor: string;
}

export default function MiniStatCard({ title, value, sub, icon: Icon, iconColor }: MiniStatCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
        <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
        <p className="text-sm text-gray-600">{sub}</p>
      </CardContent>
    </Card>
  );
}