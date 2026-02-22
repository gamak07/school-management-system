"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import StudentRow from "./StudentRow";
import { students } from "@/mock_datas/students";



interface StudentTableProps {
  selectedIds: string[];
  onSelectAll: (checked: boolean) => void;
  onSelectRow: (id: string) => void;
}

export function StudentTable({
  selectedIds,
  onSelectAll,
  onSelectRow,
}: StudentTableProps) {
  const isAllSelected =
    students?.length > 0 && selectedIds?.length === students?.length;
  return (
    <div className="w-full">
      <Table className="w-full">
        <TableHeader className="bg-gray-50 border-b border-gray-200">
          <TableRow className="hover:bg-transparent border-none">
            <TableHead className="px-4 py-3 text-left w-[40px]">
              <input
                className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 cursor-pointer"
                type="checkbox"
                checked={isAllSelected}
                onChange={(e) => onSelectAll(e.target.checked)}
              />
            </TableHead>
            <TableHead className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
              Admission No.
            </TableHead>
            <TableHead className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
              Student Name
            </TableHead>
            <TableHead className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
              Class
            </TableHead>
            <TableHead className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
              Guardian
            </TableHead>
            <TableHead className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
              Contact
            </TableHead>
            <TableHead className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
              Status
            </TableHead>
            <TableHead className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
              Fees
            </TableHead>
            <TableHead className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="divide-y divide-gray-200">
          {students.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              isSelected={selectedIds?.includes(student.id)}
              onToggle={() => onSelectRow(student.id)}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
