import { AlertTriangle, Edit, Mail, MessageCircle, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

interface StudentProfileHeaderProps {
  student: any; // You can replace 'any' with your actual Student type from columns.tsx
}

export function StudentProfileHeader({ student }: StudentProfileHeaderProps) {
  if (!student) return null;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left: Avatar & Basic Info */}
        <div className="flex items-start gap-4">
          <img 
            alt={student.name} 
            className="w-24 h-24 rounded-lg object-cover" 
            src={student.image} 
          />
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-gray-900">{student.name}</h1>
              <span className={cn(
                "px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap",
                student.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              )}>
                {student.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-1">
              Admission No: <span className="font-medium text-gray-900">{student.admissionNo}</span>
            </p>
            <p className="text-sm text-gray-600 mb-1">
              Class: <span className="font-medium text-gray-900">{student.class} - {student.arm} Arm</span>
            </p>
            <p className="text-sm text-gray-600">
              Gender: <span className="font-medium text-gray-900">{student.gender}</span>
            </p>
          </div>
        </div>

        {/* Middle: Medical Alerts */}
        <div className="flex-1 bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-red-600 w-5 h-5 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-red-900 mb-2">Medical Alerts</h4>
              <div className="space-y-1">
                <p className="text-xs text-red-800">
                  Blood Group: <span className="font-medium">{student.medical?.bloodGroup || "N/A"}</span>
                </p>
                <p className="text-xs text-red-800">
                  Genotype: <span className="font-medium">{student.medical?.genotype || "N/A"}</span>
                </p>
                <p className="text-xs text-red-800">
                  Allergies: <span className="font-medium">{student.medical?.allergies || "None"}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex flex-col gap-2">
          <button className="flex items-center justify-center lg:justify-start gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap">
            <Edit className="w-4 h-4" />
            <span className="text-sm font-medium">Edit Student</span>
          </button>
          <button className="flex items-center justify-center lg:justify-start gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors cursor-pointer whitespace-nowrap">
            <Mail className="w-4 h-4" />
            <span className="text-sm font-medium">Email Parent</span>
          </button>
          <button className="flex items-center justify-center lg:justify-start gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">WhatsApp</span>
          </button>
          <button className="flex items-center justify-center lg:justify-start gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors cursor-pointer whitespace-nowrap">
            <CreditCard className="w-4 h-4" />
            <span className="text-sm font-medium">Generate ID</span>
          </button>
        </div>

      </div>
    </div>
  );
}