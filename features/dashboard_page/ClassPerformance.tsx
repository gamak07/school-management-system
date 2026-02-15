import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PerformanceBarProps {
  label: string;
  students: string;
  percentage: string;
  color: string; // Tailwind class like 'bg-red-500'
  width: string; // Percentage string like '50%'
}

function PerformanceBar({ label, students, percentage, color, width }: PerformanceBarProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${color}`} />
          <span className="text-sm font-medium text-gray-900">{label}</span>
          <span className="text-xs text-gray-500">({students} students)</span>
        </div>
        <span className="text-sm font-semibold text-gray-900">{percentage}</span>
      </div>
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full transition-all duration-500 ${color}`} style={{ width }} />
      </div>
    </div>
  );
}

export default function ClassPerformance() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-6">
        <CardTitle className="text-lg font-semibold text-gray-900">Class Performance</CardTitle>
        <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-700 cursor-pointer outline-none focus:border-teal-500">
          <option>This Semester</option>
          <option>Last Semester</option>
          <option>This Year</option>
        </select>
      </CardHeader>
      <CardContent className="space-y-5">
        <PerformanceBar label="Grade 12" students="145" percentage="87.5%" color="bg-emerald-500" width="100%" />
        <PerformanceBar label="Grade 11" students="158" percentage="84.2%" color="bg-blue-500" width="96%" />
        <PerformanceBar label="Grade 10" students="172" percentage="82.8%" color="bg-violet-500" width="94%" />
        <PerformanceBar label="Grade 9" students="189" percentage="81.3%" color="bg-amber-500" width="92%" />
        <PerformanceBar label="Grade 8" students="195" percentage="79.6%" color="bg-red-500" width="90%" />
        <PerformanceBar label="Grade 7" students="201" percentage="78.4%" color="bg-pink-500" width="89%" />
      </CardContent>
      <div className="p-6 border-t mt-2">
         <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Overall Average</span>
            <span className="text-lg font-bold text-gray-900">82.3%</span>
         </div>
      </div>
    </Card>
  );
}