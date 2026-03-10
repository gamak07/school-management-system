"use client";

import type { StaffMember } from "@/mock_datas/staff";

interface EditProfessionalTabProps {
  staff: StaffMember;
}

export default function EditProfessionalTab({
  staff,
}: EditProfessionalTabProps) {
  return (
    <div className="p-6">
      <div className="space-y-5">
        {/* Role */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Role <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            defaultValue={staff.role}
          >
            <option value="Administrator">Administrator</option>
            <option value="Accountant">Accountant</option>
            <option value="Librarian">Librarian</option>
            <option value="Security Officer">Security Officer</option>
            <option value="Janitor">Janitor</option>
            <option value="Nurse">Nurse</option>
            <option value="IT Support">IT Support</option>
            <option value="Receptionist">Receptionist</option>
            <option value="Driver">Driver</option>
            <option value="Counselor">Counselor</option>
            <option value="HR Manager">HR Manager</option>
            <option value="Procurement Officer">Procurement Officer</option>
          </select>
        </div>

        {/* Department */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Department <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            defaultValue={staff.department}
          >
            <option value="Administration">Administration</option>
            <option value="Finance">Finance</option>
            <option value="Library">Library</option>
            <option value="Security">Security</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Health">Health</option>
            <option value="IT">IT</option>
            <option value="Front Desk">Front Desk</option>
            <option value="Transport">Transport</option>
            <option value="Counseling">Counseling</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Procurement">Procurement</option>
          </select>
        </div>

        {/* Join Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Join Date <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            type="date"
            defaultValue={staff.joinDate}
          />
        </div>

        {/* Info Alert */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex gap-3">
            <div className="w-5 h-5 flex items-center justify-center shrink-0">
              <i className="ri-information-line text-base text-blue-600"></i>
            </div>
            <div>
              <p className="text-sm font-medium text-blue-900 mb-1">
                Professional Information
              </p>
              <p className="text-xs text-blue-700">
                Changes to role and department may affect access permissions and
                responsibilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
