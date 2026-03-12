import { School, CheckCircle, Users, CalendarCheck } from "lucide-react";
import { classStats } from "../../mock_datas/classes";
import { Card } from "@/components/ui/card";

const iconMap: Record<string, React.ElementType> = {
  School,
  CheckCircle,
  Users,
  CalendarCheck,
};

const colorMap: Record<string, { bg: string; text: string }> = {
  teal: { bg: "bg-teal-100", text: "text-teal-600" },
  green: { bg: "bg-green-100", text: "text-green-600" },
  orange: { bg: "bg-orange-100", text: "text-orange-600" },
  indigo: { bg: "bg-indigo-100", text: "text-indigo-600" },
};

export function ClassStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {classStats.map((stat, index) => {
        const Icon = iconMap[stat.icon];
        const colors = colorMap[stat.color] || colorMap.teal;

        return (
          <Card
            key={index}
            className="bg-white rounded-xl p-6 border border-gray-200 shadow-none"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center ${colors.bg}`}
              >
                {Icon && <Icon className={`w-6 h-6 ${colors.text}`} />}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
