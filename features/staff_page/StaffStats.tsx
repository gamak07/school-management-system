import { Users, CheckCircle2, Clock, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function StaffStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Card className="shadow-none border-gray-200 p-0">
        <CardContent className="p-5 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">Total Staff</p>
            <p className="text-2xl font-bold text-gray-900">14</p>
          </div>
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-none border-gray-200 p-0">
        <CardContent className="p-5 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">Active</p>
            <p className="text-2xl font-bold text-gray-900">13</p>
          </div>
          <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-none border-gray-200 p-0">
        <CardContent className="p-5 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">On Leave</p>
            <p className="text-2xl font-bold text-gray-900">1</p>
          </div>
          <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
            <Clock className="w-6 h-6 text-orange-600" />
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-none border-gray-200 p-0">
        <CardContent className="p-5 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">Departments</p>
            <p className="text-2xl font-bold text-gray-900">12</p>
          </div>
          <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center">
            <Building2 className="w-6 h-6 text-teal-600" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
