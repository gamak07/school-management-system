"use client";

import { AlertCircle, Mail } from "lucide-react";

const classes = [
  "JSS 1 Gold", "JSS 1 Blue", "JSS 2 Gold", "JSS 2 Blue", "JSS 3 Gold", "JSS 3 Blue",
  "SSS 1 Gold", "SSS 1 Blue", "SSS 2 Gold", "SSS 2 Blue", "SSS 3 Gold", "SSS 3 Blue"
];

export default function StepThreeAssignment() {
  return (
    <div className="animate-in slide-in-from-right-4 duration-300 fade-in">
      <h4 className="text-sm font-semibold text-gray-900 mb-4">Class Assignment & Emergency Contact</h4>
      
      {/* Class Assignment Grid */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Assign Classes *</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 border border-gray-200 rounded-lg bg-gray-50/50">
          {classes.map((cls) => (
            <label key={cls} className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-1.5 rounded transition-colors">
              <input type="checkbox" className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 cursor-pointer" />
              <span className="text-sm text-gray-700">{cls}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Alert Box */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4 flex gap-3">
        <AlertCircle className="text-amber-600 w-5 h-5 flex-shrink-0" />
        <div>
          <p className="text-sm font-medium text-amber-900">Time Collision Detection</p>
          <p className="text-xs text-amber-700 mt-1">The system will automatically check for scheduling conflicts when assigning classes to prevent double-booking.</p>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Emergency Contact Name *</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Enter contact name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Emergency Contact Phone *</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="+1 (555) 000-0000" type="tel" />
        </div>
      </div>

      {/* Email Notice */}
      <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mt-4 flex gap-3">
        <Mail className="text-teal-600 w-5 h-5 flex-shrink-0" />
        <div>
          <p className="text-sm font-medium text-teal-900">Onboarding Email</p>
          <p className="text-xs text-teal-700 mt-1">An invitation email will be sent to the teacher to complete their profile and set up their account password.</p>
        </div>
      </div>
    </div>
  );
}