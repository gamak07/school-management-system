import { formatDateForInput } from "@/helpers/formatDate";

export default function AcademicInfoTab({ student }: { student: any }) {
  return (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Class
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent cursor-pointer"
            defaultValue={student.class}
          >
            <option value="JSS 1">JSS 1</option>
            <option value="JSS 2">JSS 2</option>
            <option value="JSS 3">JSS 3</option>
            <option value="SSS 1">SSS 1</option>
            <option value="SSS 2">SSS 2</option>
            <option value="SSS 3">SSS 3</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Arm
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent cursor-pointer"
            defaultValue={student.arm}
          >
            <option value="Gold">Gold</option>
            <option value="Blue">Blue</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Admission Date
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent cursor-pointer"
          type="date"
          defaultValue={formatDateForInput(student.details?.admissionDate)}
        />
      </div>
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="text-sm font-medium text-gray-900 mb-3">
          Current Academic Standing
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-600">GPA</p>
            <p className="text-lg font-bold text-teal-600">
              {student.performance?.gpa || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-600">Attendance Rate</p>
            <p className="text-lg font-bold text-gray-900">
              {student.performance?.attendanceRate || "N/A"}
            </p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          GPA and attendance are calculated automatically and cannot be edited
          directly.
        </p>
      </div>
    </div>
  );
}
