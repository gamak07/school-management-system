import { Edit2, ToggleLeft, ArrowLeftRight, ArrowUpCircle } from "lucide-react";

export default function OverviewTab({ student }: { student: any }) {
  if (!student) return null;

  return (
    <div className="p-6">
      <div className="space-y-6">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs text-gray-600 mb-1">GPA</p>
            <p className="text-2xl font-bold text-gray-900">{student.performance?.gpa || "N/A"}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs text-gray-600 mb-1">Attendance Rate</p>
            <p className="text-2xl font-bold text-gray-900">{student.performance?.attendanceRate || "N/A"}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs text-gray-600 mb-1">Fees Paid</p>
            <p className="text-2xl font-bold text-green-600">${student.performance?.amountPaid || 0}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs text-gray-600 mb-1">Fees Owed</p>
            <p className="text-2xl font-bold text-orange-600">${student.feesOwed || 0}</p>
          </div>
        </div>

        {/* Personal Info */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
            <button className="text-sm text-teal-600 hover:text-teal-700 font-medium cursor-pointer flex items-center gap-1 bg-transparent border-none">
              <Edit2 className="w-4 h-4" /> Edit
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><p className="text-sm text-gray-600">Date of Birth</p><p className="text-sm font-medium text-gray-900 mt-1">{student.details?.dob || "N/A"}</p></div>
            <div><p className="text-sm text-gray-600">Admission Date</p><p className="text-sm font-medium text-gray-900 mt-1">{student.details?.admissionDate || "N/A"}</p></div>
            <div><p className="text-sm text-gray-600">Previous School</p><p className="text-sm font-medium text-gray-900 mt-1">{student.details?.previousSchool || "N/A"}</p></div>
            <div><p className="text-sm text-gray-600">Home Address</p><p className="text-sm font-medium text-gray-900 mt-1">{student.details?.address || "N/A"}</p></div>
          </div>
        </div>

        {/* Guardian Info */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Guardian Information</h3>
            <button className="text-sm text-teal-600 hover:text-teal-700 font-medium cursor-pointer flex items-center gap-1 bg-transparent border-none">
              <Edit2 className="w-4 h-4" /> Edit
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><p className="text-sm text-gray-600">Guardian Name</p><p className="text-sm font-medium text-gray-900 mt-1">{student.guardian || "N/A"}</p></div>
            <div><p className="text-sm text-gray-600">Phone Number</p><p className="text-sm font-medium text-gray-900 mt-1">{student.contact || "N/A"}</p></div>
            <div><p className="text-sm text-gray-600">Email Address</p><p className="text-sm font-medium text-gray-900 mt-1">{student.details?.guardianEmail || "N/A"}</p></div>
          </div>
        </div>

        {/* Lifecycle Management */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Lifecycle Management</h3>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap">
              <ToggleLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Change Status</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap">
              <ArrowLeftRight className="w-5 h-5" />
              <span className="text-sm font-medium">Transfer Class</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap">
              <ArrowUpCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Promote Student</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}