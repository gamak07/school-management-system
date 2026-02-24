"use client";

import { cn } from "@/lib/utils";
import { GraduationCap, HeartPulse, Save, User, Users, X } from "lucide-react";
import { useState } from "react";
import PersonalInfoTab from "./PersonalInfoTab";
import GuardianInfoTab from "./GuardianInfoTab";
import MedicalInfoTab from "./MedicalInfoTab";
import AcademicInfoTab from "./AcademicInfoTab";

interface EditStudentModalProps {
  student: any;
  initialTab?: "personal" | "guardian" | "medical" | "academic";
  onClose: () => void;
}

export default function EditStudentModal({
  student,
  onClose,
  initialTab,
}: EditStudentModalProps) {
  const [activeTab, setActiveTab] = useState<
    "personal" | "guardian" | "medical" | "academic"
  >(initialTab || "personal");

  // Helper to pre-fill names
  const nameParts = student.name.split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Edit Student Information
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {student.name} • {student.admissionNo}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="border-b border-gray-200 px-6">
          <div className="flex gap-1 overflow-x-auto hide-scrollbar">
            <TabButton
              isActive={activeTab === "personal"}
              onClick={() => setActiveTab("personal")}
              icon={User}
              label="Personal Info"
            />
            <TabButton
              isActive={activeTab === "guardian"}
              onClick={() => setActiveTab("guardian")}
              icon={Users}
              label="Guardian Info"
            />
            <TabButton
              isActive={activeTab === "medical"}
              onClick={() => setActiveTab("medical")}
              icon={HeartPulse}
              label="Medical Info"
            />
            <TabButton
              isActive={activeTab === "academic"}
              onClick={() => setActiveTab("academic")}
              icon={GraduationCap}
              label="Academic Info"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === "personal" && <PersonalInfoTab student={student} />}
          {activeTab === "guardian" && <GuardianInfoTab student={student} />}
          {activeTab === "medical" && <MedicalInfoTab student={student} />}
          {activeTab === "academic" && <AcademicInfoTab student={student} />}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
          <button className="text-sm text-gray-600 hover:text-gray-900 font-medium cursor-pointer whitespace-nowrap bg-transparent border-none">
            Reset Changes
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer whitespace-nowrap bg-transparent border-none"
            >
              Cancel
            </button>
            <button className="px-6 py-2 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2 border-none">
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Internal Helper for Modal Tabs
function TabButton({
  isActive,
  onClick,
  icon: Icon,
  label,
}: {
  isActive: boolean;
  onClick: () => void;
  icon: any;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors cursor-pointer whitespace-nowrap bg-transparent",
        isActive
          ? "border-teal-600 text-teal-600"
          : "border-transparent text-gray-600 hover:text-gray-900",
      )}
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );
}
