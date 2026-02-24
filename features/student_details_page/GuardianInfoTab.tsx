import { Info } from "lucide-react";

export default function GuardianInfoTab({ student }: { student: any }) {
  return (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Guardian Full Name</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" type="text" defaultValue={student.guardian || ""} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" type="tel" defaultValue={student.contact || ""} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" type="email" defaultValue={student.details?.guardianEmail || ""} />
        </div>
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Info className="text-amber-600 w-5 h-5 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-amber-900">Guardian Contact Information</p>
            <p className="text-xs text-amber-700 mt-1">This information is used for emergency contacts and school communications. Please ensure it is accurate and up-to-date.</p>
          </div>
        </div>
      </div>
    </div>
  );
}