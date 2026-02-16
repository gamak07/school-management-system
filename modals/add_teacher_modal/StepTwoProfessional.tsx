"use client";

const subjects = [
  "Mathematics", "Further Mathematics", "Physics", "Chemistry", "Biology", 
  "Basic Science", "English Language", "Literature", "French", "Spanish", 
  "History", "Government", "Economics", "Commerce", "Computer Science", 
  "ICT", "Physical Education", "Health Education", "Fine Arts", "Music"
];

export default function StepTwoProfessional() {
  return (
    <div className="animate-in slide-in-from-right-4 duration-300 fade-in">
      <h4 className="text-sm font-semibold text-gray-900 mb-4">Professional Information</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Highest Qualification *</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white cursor-pointer">
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
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Specialization *</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="e.g., Applied Mathematics" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Department *</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white cursor-pointer">
            <option value="">Select department</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Science">Science</option>
            <option value="Languages">Languages</option>
            <option value="Humanities">Humanities</option>
            <option value="Technology">Technology</option>
            <option value="Commerce">Commerce</option>
            <option value="Arts">Arts</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Employment Type *</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white cursor-pointer">
            <option value="">Select type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Annual Salary ($) *</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Enter annual salary" type="number" />
        </div>
      </div>
      
      {/* Subjects Grid */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Subjects to Teach *</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-40 overflow-y-auto p-2 border border-gray-200 rounded-lg bg-gray-50/50">
          {subjects.map((subject) => (
            <label key={subject} className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-1.5 rounded transition-colors">
              <input type="checkbox" className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 cursor-pointer" />
              <span className="text-sm text-gray-700">{subject}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}