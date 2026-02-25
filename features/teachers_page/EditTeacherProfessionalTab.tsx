"use client";

import { Info } from "lucide-react";

export default function EditTeacherProfessionalTab({ teacher }: { teacher: any }) {
  // Extract just the degree part if it's formatted like "Ph.D. in Mathematics"
  const getQualificationType = (qual: string) => {
    if (!qual) return "";
    return qual.split(" in ")[0] || "";
  };

  const getSpecialization = (qual: string) => {
    if (!qual) return "";
    return qual.split(" in ")[1] || "";
  };

  const qualType = getQualificationType(teacher.professionalInfo?.qualification);
  const specialization = teacher.professionalInfo?.specialization || getSpecialization(teacher.professionalInfo?.qualification);

  const formatDateForInput = (dateString: string) => {
    if (!dateString) return "";
    try {
      return new Date(dateString).toISOString().split("T")[0];
    } catch {
      return "";
    }
  };

  return (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Highest Qualification</label>
          <select 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent cursor-pointer"
            defaultValue={qualType}
          >
            <option value="">Select qualification</option>
            <option value="B.Sc.">B.Sc.</option>
            <option value="B.A.">B.A.</option>
            <option value="B.Ed.">B.Ed.</option>
            <option value="M.Sc.">M.Sc.</option>
            <option value="M.A.">M.A.</option>
            <option value="M.Ed.">M.Ed.</option>
            <option value="Ph.D.">Ph.D.</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Specialization</label>
          <input 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
            placeholder="e.g., Applied Mathematics" 
            type="text" 
            defaultValue={specialization} 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Department *</label>
          <select 
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent cursor-pointer border-gray-300"
            defaultValue={teacher.department}
          >
            <option value="">Select department</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Science">Science</option>
            <option value="Languages">Languages</option>
            <option value="Humanities">Humanities</option>
            <option value="Technology">Technology</option>
            <option value="Commerce">Commerce</option>
            <option value="Physical Education">Physical Education</option>
            <option value="Arts">Arts</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Join Date</label>
          <input 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent cursor-pointer" 
            type="date" 
            defaultValue={formatDateForInput(teacher.professionalInfo?.joinDate)} 
          />
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 mt-2">
        <div className="flex gap-3">
          <Info className="text-gray-500 w-5 h-5 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-gray-700">Qualification Details</p>
            <p className="text-xs text-gray-500 mt-1">Update the qualification and specialization fields to reflect the teacher's latest academic credentials.</p>
          </div>
        </div>
      </div>
    </div>
  );
}