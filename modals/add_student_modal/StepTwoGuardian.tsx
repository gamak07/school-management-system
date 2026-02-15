"use client";

import { useState } from "react";

export default function StepTwoGuardian() {
  // State to toggle between "New Parent" and "Existing Parent" modes
  const [linkToExisting, setLinkToExisting] = useState(false);

  return (
    <div className="animate-in slide-in-from-right-4 duration-300 fade-in">
      <h4 className="text-sm font-semibold text-gray-900 mb-4">Guardian Information</h4>
      
      {/* Toggle Checkbox */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input 
            className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 cursor-pointer" 
            type="checkbox" 
            checked={linkToExisting}
            onChange={(e) => setLinkToExisting(e.target.checked)}
          />
          <span className="text-sm text-gray-700">Link to existing parent account (for siblings)</span>
        </label>
      </div>

      {/* Conditional Rendering */}
      {linkToExisting ? (
        /* STATE 1: SEARCH EXISTING PARENT */
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Search Parent</label>
          <input 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
            placeholder="Search by parent name or phone number" 
            type="text" 
          />
        </div>
      ) : (
        /* STATE 2: FULL GUARDIAN FORM (Default) */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Guardian Name *</label>
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
              placeholder="Enter guardian full name" 
              type="text" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
              placeholder="+1 (555) 000-0000" 
              type="tel" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
              placeholder="guardian@email.com" 
              type="email" 
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Home Address *</label>
            <textarea 
              rows={3} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none" 
              placeholder="Enter complete home address"
            />
          </div>
        </div>
      )}
    </div>
  );
}