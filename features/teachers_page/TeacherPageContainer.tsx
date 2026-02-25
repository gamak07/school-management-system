"use client";

import { CalendarDays, Send, Trash2, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import TeacherStats from "./TeacherStats";
import TeacherFilters from "./TeacherFilters.";
import TeacherTable from "./TeacherTable";
import { useModal } from "@/hooks/useModalStore";
import { useState } from "react";
import { teachers } from "@/mock_datas/teachers";

export default function TeachersPageOverview() {
  const { onOpen } = useModal();

  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // Derived state to check if all teachers are selected
  const isAllSelected =
    teachers.length > 0 && selectedIds.length === teachers.length;

  // Handler for the "Select All" checkbox in the header
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(teachers.map((teacher) => teacher.id));
    } else {
      setSelectedIds([]);
    }
  };

  // Handler for individual row checkboxes
  const handleSelectRow = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((selectedId) => selectedId !== id));
    }
  };
  return (
    <>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Teacher Management
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Manage academic staff, assignments, and schedules
          </p>
        </div>

        <Button
          className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg flex items-center gap-2 px-4 py-2 h-auto shadow-none"
          onClick={() => onOpen("addTeacher")}
        >
          <UserPlus className="w-4 h-4" />
          Add Teacher
        </Button>
      </div>

      {/* Components */}
      <TeacherStats />
      <TeacherFilters />
      {selectedIds.length > 0 && (
        <div className="bg-teal-50 border-b border-teal-200 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-sm font-medium text-teal-800">
            {selectedIds.length} teacher(s) selected
          </span>
          <div className="flex items-center flex-wrap gap-2">
            <Button
              variant="ghost"
              className="px-3 py-1.5 text-sm font-medium text-teal-700 hover:bg-teal-100 rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 h-auto"
            >
              <Send className="w-4 h-4" /> Send Email
            </Button>
            <Button
              variant="ghost"
              className="px-3 py-1.5 text-sm font-medium text-teal-700 hover:bg-teal-100 rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 h-auto"
            >
              <CalendarDays className="w-4 h-4" /> Assign Schedule
            </Button>
            <Button
              variant="ghost"
              className="px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-100 hover:text-red-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 h-auto"
            >
              <Trash2 className="w-4 h-4" /> Remove
            </Button>
          </div>
        </div>
      )}
      <TeacherTable
        handleSelectAll={handleSelectAll}
        handleSelectRow={handleSelectRow}
        isAllSelected={isAllSelected}
        selectedIds={selectedIds}
      />
    </>
  );
}
