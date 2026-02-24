import { HeartPulse } from "lucide-react";

export default function MedicalInfoTab({ student }: { student: any }) {
  return (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Blood Group</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent cursor-pointer" defaultValue={student.medical?.bloodGroup || ""}>
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option><option value="A-">A-</option>
            <option value="B+">B+</option><option value="B-">B-</option>
            <option value="AB+">AB+</option><option value="AB-">AB-</option>
            <option value="O+">O+</option><option value="O-">O-</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Genotype</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent cursor-pointer" defaultValue={student.medical?.genotype || ""}>
            <option value="">Select Genotype</option>
            <option value="AA">AA</option><option value="AS">AS</option>
            <option value="SS">SS</option><option value="AC">AC</option>
            <option value="SC">SC</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Allergies</label>
        <input placeholder="e.g., Peanuts, Shellfish, Dust (or None)" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" type="text" defaultValue={student.medical?.allergies !== "None" ? student.medical?.allergies : ""} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Medical Conditions</label>
        <textarea placeholder="e.g., Asthma, Diabetes, Epilepsy (leave empty if none)" rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none" defaultValue={student.medical?.conditions !== "None" ? student.medical?.conditions : ""}></textarea>
      </div>
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <HeartPulse className="text-red-600 w-5 h-5 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-red-900">Important Medical Information</p>
            <p className="text-xs text-red-700 mt-1">This information is critical for the student's safety. Please ensure all medical conditions and allergies are accurately documented.</p>
          </div>
        </div>
      </div>
    </div>
  );
}