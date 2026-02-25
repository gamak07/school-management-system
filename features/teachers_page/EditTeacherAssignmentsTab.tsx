"use client";

import { AlertTriangle } from "lucide-react";

export default function EditTeacherAssignmentsTab({ teacher }: { teacher: any }) {
  const allSubjects = [
    "Mathematics", "Further Mathematics", "Physics", "Chemistry", "Biology", 
    "Basic Science", "English Language", "Literature", "French", "Spanish", 
    "History", "Government", "Economics", "Commerce", "Computer Science", 
    "ICT", "Physical Education", "Health Education", "Fine Arts", "Music"
  ];

  const allClasses = [
    "JSS 1 Gold", "JSS 1 Blue", "JSS 2 Gold", "JSS 2 Blue", "JSS 3 Gold", "JSS 3 Blue",
    "SSS 1 Gold", "SSS 1 Blue", "SSS 2 Gold", "SSS 2 Blue", "SSS 3 Gold", "SSS 3 Blue"
  ];

  const teacherSubjects = teacher.subjects || [];
  const teacherClasses = teacher.assignedClassesList || [];

  return (
    <div className="space-y-5 animate-in fade-in duration-300">
      
      {/* Subjects Section */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Subjects to Teach *
          <span className="text-xs text-gray-400 ml-2">({teacherSubjects.length} selected)</span>
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-44 overflow-y-auto p-3 border border-gray-200 rounded-lg bg-gray-50">
          {allSubjects.map((subject) => (
            <label key={subject} className="flex items-center gap-2 cursor-pointer hover:bg-white p-1.5 rounded transition-colors">
              <input 
                className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 cursor-pointer" 
                type="checkbox" 
                defaultChecked={teacherSubjects.includes(subject)} 
              />
              <span className="text-sm text-gray-700">{subject}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Classes Section */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Assigned Classes *
          <span className="text-xs text-gray-400 ml-2">({teacherClasses.length} selected)</span>
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-52 overflow-y-auto p-3 border border-gray-200 rounded-lg bg-gray-50">
          {allClasses.map((cls) => (
            <label key={cls} className="flex items-center gap-2 cursor-pointer hover:bg-white p-1.5 rounded transition-colors">
              <input 
                className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 cursor-pointer" 
                type="checkbox" 
                defaultChecked={teacherClasses.includes(cls)} 
              />
              <span className="text-sm text-gray-700">{cls}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Warning Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex gap-3">
          <AlertTriangle className="text-amber-600 w-5 h-5 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-amber-900">Schedule Impact</p>
            <p className="text-xs text-amber-700 mt-1">Changing class assignments may affect the teacher's weekly schedule. The system will check for conflicts automatically.</p>
          </div>
        </div>
      </div>
    </div>
  );
}