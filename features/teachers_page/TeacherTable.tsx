"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { teachers } from "@/mock_datas/teachers";
import TeacherRow from "./TeacherRow";

interface CheckboxProp {
  handleSelectAll: (checked: boolean) => void;
  handleSelectRow: (id: string, checked: boolean) => void;
  isAllSelected: boolean;
  selectedIds: string[];
}

export default function TeacherTable({
  handleSelectAll,
  handleSelectRow,
  isAllSelected,
  selectedIds,
}: CheckboxProp) {
  return (
    <Card className="shadow-none border-gray-200 overflow-hidden p-0 gap-0">
      {/* Table Header Controls */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <p className="text-sm text-gray-600">
          Showing <span className="font-medium">{teachers.length}</span> of{" "}
          <span className="font-medium">{teachers.length}</span> teachers
        </p>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-700 hover:bg-gray-100 flex items-center gap-1.5 h-auto py-1.5"
        >
          <Download className="w-4 h-4" /> Export CSV
        </Button>
      </div>

      {/* Table Content */}
      <Table>
        <TableHeader className="bg-gray-50">
          <TableRow className="hover:bg-gray-50 border-none">
            <TableHead className="w-12 px-4 py-3">
              <Checkbox
                className="text-teal-600 border-gray-300 rounded focus:ring-teal-500 data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
                checked={isAllSelected}
                onCheckedChange={(checked) =>
                  handleSelectAll(checked as boolean)
                }
                aria-label="Select all teachers"
              />
            </TableHead>
            <TableHead className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider h-auto">
              Teacher
            </TableHead>
            <TableHead className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider h-auto">
              Contact
            </TableHead>
            <TableHead className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider h-auto">
              Department
            </TableHead>
            <TableHead className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider h-auto">
              Subjects
            </TableHead>
            <TableHead className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider h-auto">
              Classes
            </TableHead>
            <TableHead className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider h-auto">
              Status
            </TableHead>
            <TableHead className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider h-auto">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="divide-y divide-gray-200">
          {teachers.map((teacher) => {
            const isSelected = selectedIds.includes(teacher.id);
            return (
              <TeacherRow
                key={teacher.id}
                teacher={teacher}
                handleSelectRow={handleSelectRow}
                isSelected={isSelected}
              />
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
}
