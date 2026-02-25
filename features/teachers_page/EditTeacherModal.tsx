"use client";

import { useState } from "react";
import {
  X,
  User,
  Briefcase,
  BookOpen,
  Building,
  RefreshCw,
  Save,
} from "lucide-react";
import { cn } from "@/lib/utils";
import EditTeacherPersonalTab from "./EditTeacherPersonalTab";
import EditTeacherProfessionalTab from "./EditTeacherProfessionalTab";
import EditTeacherAssignmentsTab from "./EditTeacherAssignmentsTab";
import EditTeacherEmploymentTab from "./EditTeacherEmploymentTab";


interface EditTeacherModalProps {
  teacher: any;
  onClose: () => void;
}

export function EditTeacherModal({ teacher, onClose }: EditTeacherModalProps) {
  const [activeTab, setActiveTab] = useState<
    "personal" | "professional" | "assignments" | "employment"
  >("personal");

  return (
    <div className="fixed inset-0 bg-black/50 z-60 flex items-center justify-center p-4 overflow-y-auto backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full my-8 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 shrink-0">
          <div className="flex items-center gap-3">
            <img
              alt={teacher.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
              src={teacher.image}
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Edit Teacher Profile
              </h3>
              <p className="text-sm text-gray-600">
                {teacher.staffId} • {teacher.name}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer border-none bg-transparent"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs Navigation */}
        <div className="flex border-b border-gray-200 px-6 shrink-0 overflow-x-auto hide-scrollbar">
          <TabButton
            isActive={activeTab === "personal"}
            onClick={() => setActiveTab("personal")}
            icon={User}
            label="Personal"
          />
          <TabButton
            isActive={activeTab === "professional"}
            onClick={() => setActiveTab("professional")}
            icon={Briefcase}
            label="Professional"
          />
          <TabButton
            isActive={activeTab === "assignments"}
            onClick={() => setActiveTab("assignments")}
            icon={BookOpen}
            label="Assignments"
          />
          <TabButton
            isActive={activeTab === "employment"}
            onClick={() => setActiveTab("employment")}
            icon={Building}
            label="Employment"
          />
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeTab === "personal" && <EditTeacherPersonalTab teacher={teacher} />}
          {activeTab === "professional" && <EditTeacherProfessionalTab teacher={teacher} />}
          {activeTab === "assignments" && <EditTeacherAssignmentsTab teacher={teacher} />}
          {activeTab === "employment" && <EditTeacherEmploymentTab teacher={teacher} />}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 border-t border-gray-200 shrink-0 bg-gray-50">
          <button
            disabled
            className="px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-not-allowed whitespace-nowrap flex items-center gap-1.5 text-gray-400 border-none bg-transparent"
          >
            <RefreshCw className="w-4 h-4" /> Reset Changes
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer whitespace-nowrap border-none bg-transparent"
            >
              Cancel
            </button>
            <button
              disabled
              className="px-6 py-2 text-sm font-medium rounded-lg transition-colors cursor-not-allowed whitespace-nowrap flex items-center gap-1.5 text-gray-400 bg-gray-200 border-none"
            >
              <Save className="w-4 h-4" /> Save Changes
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
        "flex items-center gap-1.5 px-4 py-3 text-sm font-medium border-b-2 transition-colors cursor-pointer whitespace-nowrap bg-transparent",
        isActive
          ? "border-teal-600 text-teal-600"
          : "border-transparent text-gray-500 hover:text-gray-700",
      )}
    >
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );
}