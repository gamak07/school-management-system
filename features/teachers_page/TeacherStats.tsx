import { Users, CheckCircle2, Clock, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TeacherStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <Card className="shadow-none border-gray-200 p-0">
        <CardContent className="p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
            <Users className="w-5 h-5 text-teal-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">10</p>
            <p className="text-xs text-gray-600">Total Teachers</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="shadow-none border-gray-200 p-0">
        <CardContent className="p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">9</p>
            <p className="text-xs text-gray-600">Active</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="shadow-none border-gray-200 p-0">
        <CardContent className="p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
            <Clock className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">1</p>
            <p className="text-xs text-gray-600">On Leave</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="shadow-none border-gray-200 p-0">
        <CardContent className="p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center">
            <Building2 className="w-5 h-5 text-rose-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">8</p>
            <p className="text-xs text-gray-600">Departments</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}