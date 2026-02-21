'use client'

import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { useModal } from "@/hooks/useModalStore";

export default function () {
  const { onOpen } = useModal();
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Student Management</h1>
        <p className="text-sm text-gray-600 mt-1">
          Manage student records, admissions, and profiles
        </p>
      </div>
      <Button
        onClick={() => onOpen("addStudent")}
        className="bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-2"
      >
        <UserPlus className="w-4 h-4" />
        New Admission
      </Button>
    </div>
  );
}
