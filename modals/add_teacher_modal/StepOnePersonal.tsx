"use client";

export default function StepOnePersonal() {
  return (
    <div className="animate-in slide-in-from-right-4 duration-300 fade-in">
      <h4 className="text-sm font-semibold text-gray-900 mb-4">Personal Information</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name *</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Enter first name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name *</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Enter last name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="teacher@school.edu" type="email" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="+1 (555) 000-0000" type="tel" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Date of Birth *</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer" type="date" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Gender *</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white cursor-pointer">
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Home Address *</label>
          <textarea rows={2} maxLength={500} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none" placeholder="Enter complete home address"></textarea>
        </div>
      </div>
    </div>
  );
}