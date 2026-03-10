"use client";

import type { StaffMember } from "@/mock_datas/staff";

interface EditEmploymentTabProps {
  staff: StaffMember;
}

export default function EditEmploymentTab({ staff }: EditEmploymentTabProps) {
  // Extract numeric salary from string like "₦38,000"
  const numericSalary = staff.salary.replace(/[^0-9]/g, "");

  return (
    <div className="p-6">
      <div className="space-y-5">
        {/* Staff ID (disabled) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Staff ID
          </label>
          <input
            disabled
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
            type="text"
            value={staff.staffId}
          />
          <p className="text-xs text-gray-500 mt-1">
            Staff ID cannot be changed
          </p>
        </div>

        {/* Employment Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Employment Type <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            defaultValue={staff.type}
          >
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Status <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            defaultValue={staff.status}
          >
            <option value="Active">Active</option>
            <option value="On Leave">On Leave</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Annual Salary */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Annual Salary (₦) <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            type="number"
            defaultValue={numericSalary}
          />
        </div>

        {/* Warning Alert */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex gap-3">
            <div className="w-5 h-5 flex items-center justify-center shrink-0">
              <i className="ri-alert-line text-base text-amber-600"></i>
            </div>
            <div>
              <p className="text-sm font-medium text-amber-900 mb-1">
                Sensitive Information
              </p>
              <p className="text-xs text-amber-700">
                Employment and salary information is confidential. Changes will
                be logged for audit purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
