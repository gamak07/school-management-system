"use client";

import { useState, useEffect } from "react";
import { X, User, Briefcase, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import type { StaffMember } from "@/mock_datas/staff";
import EditPersonalTab from "./EditPersonalTab";
import EditProfessionalTab from "./EditProfessionalTab";
import EditEmploymentTab from "./EditEmploymentTab";

export type EditTab = "personal" | "professional" | "employment";

interface EditStaffProfileModalProps {
  open: boolean;
  staff: StaffMember;
  initialTab?: EditTab;
  onClose: () => void;
}

const tabs: { key: EditTab; label: string; icon: React.ElementType }[] = [
  { key: "personal", label: "Personal", icon: User },
  { key: "professional", label: "Professional", icon: Briefcase },
  { key: "employment", label: "Employment", icon: FileText },
];

export default function EditStaffProfileModal({
  open,
  staff,
  initialTab = "personal",
  onClose,
}: EditStaffProfileModalProps) {
  const [activeTab, setActiveTab] = useState<EditTab>(initialTab);

  // Sync activeTab when initialTab changes (e.g. opening from different edit buttons)
  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  if (!open) return null;

  return (
    /* Backdrop — clicking it does NOT close the modal */
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-60 p-4">
      {/* Modal panel — stop clicks from propagating to backdrop */}
      <div
        className="bg-white rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ─── Sticky Header ─── */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Edit Staff Profile
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {staff.name} • {staff.staffId}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* ─── Tab Bar ─── */}
        <div className="border-b border-gray-200 px-6">
          <div className="flex gap-1">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={cn(
                  "flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
                  activeTab === key
                    ? "border-teal-600 text-teal-600"
                    : "border-transparent text-gray-500 hover:text-gray-700",
                )}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* ─── Tab Content ─── */}
        {activeTab === "personal" && <EditPersonalTab staff={staff} />}
        {activeTab === "professional" && <EditProfessionalTab staff={staff} />}
        {activeTab === "employment" && <EditEmploymentTab staff={staff} />}

        {/* ─── Sticky Footer ─── */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex items-center justify-between">
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors whitespace-nowrap">
            Reset Changes
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              Cancel
            </button>
            <button className="px-5 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
