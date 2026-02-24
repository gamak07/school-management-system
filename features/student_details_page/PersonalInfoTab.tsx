import { formatDateForInput } from "@/helpers/formatDate";


export default function PersonalInfoTab({ student }: { student: any }) {
  const nameParts = student.name.split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" type="text" defaultValue={firstName} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" type="text" defaultValue={lastName} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Date of Birth</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent cursor-pointer" type="date" defaultValue={formatDateForInput(student.details?.dob)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Gender</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent cursor-pointer" defaultValue={student.gender}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Home Address</label>
        <textarea rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none" defaultValue={student.details?.address || ""} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Previous School</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" type="text" defaultValue={student.details?.previousSchool || ""} />
      </div>
    </div>
  );
}