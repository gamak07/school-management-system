"use client";

import { Building } from "lucide-react";

export default function EditTeacherEmploymentTab({ teacher }: { teacher: any }) {
  return (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Employment Type *</label>
          <select 
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent border-gray-300 cursor-pointer"
            defaultValue={teacher.type}
          >
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Current Status *</label>
          <select 
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent border-gray-300 cursor-pointer"
            defaultValue={teacher.status}
          >
            <option value="Active">Active</option>
            <option value="On Leave">On Leave</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Staff ID</label>
          <input 
            className="w-full px-3 py-2 border rounded-lg text-sm bg-gray-50 text-gray-500 border-gray-300 cursor-not-allowed" 
            type="text" 
            defaultValue={teacher.staffId} 
            disabled 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Salary Grade</label>
          <select 
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent border-gray-300 cursor-pointer"
            defaultValue="Grade 4"
          >
            <option value="Grade 1">Grade 1 (Entry)</option>
            <option value="Grade 2">Grade 2</option>
            <option value="Grade 3">Grade 3</option>
            <option value="Grade 4">Grade 4 (Senior)</option>
            <option value="Grade 5">Grade 5 (Principal)</option>
          </select>
        </div>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
        <div className="flex gap-3">
          <Building className="text-blue-600 w-5 h-5 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-blue-900">Employment Contract</p>
            <p className="text-xs text-blue-700 mt-1">Changes to employment type or status will require HR approval. Staff ID cannot be modified once generated.</p>
          </div>
        </div>
      </div>
    </div>
  );
}