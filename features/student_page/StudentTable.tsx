"use client";

import Link from "next/link";
import {
  MoreHorizontal,
  AlertCircle,
  CheckCircle2,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import StudentRow from "./StudentRow";

// Mock Data
export const students = [
  {
    id: "1",
    admissionNo: "SMS/2026/001",
    name: "Emily Rodriguez",
    gender: "Female",
    class: "JSS 3",
    arm: "Gold",
    guardian: "Maria Rodriguez",
    contact: "+1 (555) 789-0123",
    status: "Active",
    feesOwed: 500,
    image:
      "https://readdy.ai/api/search-image?query=young%20female%20high%20school%20student%20portrait%20clean%20white%20background%20school%20uniform%20bright%20smile%20natural%20lighting%20professional%20student%20photo&width=200&height=200&seq=student-emily-001&orientation=squarish",
  },
  {
    id: "2",
    admissionNo: "SMS/2026/002",
    name: "James Thompson",
    gender: "Male",
    class: "SSS 1",
    arm: "Blue",
    guardian: "Robert Thompson",
    contact: "+1 (555) 901-2345",
    status: "Active",
    feesOwed: 0,
    image:
      "https://readdy.ai/api/search-image?query=young%20male%20high%20school%20student%20portrait%20clean%20white%20background%20school%20uniform%20confident%20smile%20natural%20lighting%20professional%20student%20photo&width=200&height=200&seq=student-james-002&orientation=squarish",
  },
  {
    id: "3",
    admissionNo: "SMS/2026/003",
    name: "Sophia Chen",
    gender: "Female",
    class: "SSS 3",
    arm: "Gold",
    guardian: "Linda Chen",
    contact: "+1 (555) 123-4567",
    status: "Active",
    feesOwed: 0,
    image:
      "https://readdy.ai/api/search-image?query=young%20female%20asian%20high%20school%20student%20portrait%20clean%20white%20background%20school%20uniform%20warm%20smile%20natural%20lighting%20professional%20student%20photo&width=200&height=200&seq=student-sophia-003&orientation=squarish",
  },
  {
    id: "4",
    admissionNo: "SMS/2026/004",
    name: "Michael Okonkwo",
    gender: "Male",
    class: "JSS 2",
    arm: "Blue",
    guardian: "Chioma Okonkwo",
    contact: "+1 (555) 234-5678",
    status: "Active",
    feesOwed: 2000,
    image:
      "https://readdy.ai/api/search-image?query=young%20male%20african%20student%20portrait%20clean%20white%20background%20school%20uniform%20friendly%20smile%20natural%20lighting%20professional%20student%20photo&width=200&height=200&seq=student-michael-004&orientation=squarish",
  },
  {
    id: "5",
    admissionNo: "SMS/2026/005",
    name: "Aisha Mohammed",
    gender: "Female",
    class: "SSS 2",
    arm: "Gold",
    guardian: "Fatima Mohammed",
    contact: "+1 (555) 345-6789",
    status: "Active",
    feesOwed: 0,
    image:
      "https://readdy.ai/api/search-image?query=young%20female%20muslim%20student%20portrait%20with%20hijab%20clean%20white%20background%20school%20uniform%20warm%20smile%20natural%20lighting%20professional%20student%20photo&width=200&height=200&seq=student-aisha-005&orientation=squarish",
  },
  {
    id: "6",
    admissionNo: "SMS/2026/006",
    name: "David Kim",
    gender: "Male",
    class: "JSS 3",
    arm: "Blue",
    guardian: "Sarah Kim",
    contact: "+1 (555) 456-7890",
    status: "Active",
    feesOwed: 200,
    image:
      "https://readdy.ai/api/search-image?query=young%20male%20asian%20student%20portrait%20clean%20white%20background%20school%20uniform%20confident%20expression%20natural%20lighting%20professional%20student%20photo&width=200&height=200&seq=student-david-006&orientation=squarish",
  },
  {
    id: "7",
    admissionNo: "SMS/2026/007",
    name: "Isabella Garcia",
    gender: "Female",
    class: "SSS 1",
    arm: "Gold",
    guardian: "Carlos Garcia",
    contact: "+1 (555) 567-8901",
    status: "Active",
    feesOwed: 0,
    image:
      "https://readdy.ai/api/search-image?query=young%20female%20hispanic%20student%20portrait%20clean%20white%20background%20school%20uniform%20bright%20smile%20natural%20lighting%20professional%20student%20photo&width=200&height=200&seq=student-isabella-007&orientation=squarish",
  },
  {
    id: "8",
    admissionNo: "SMS/2026/008",
    name: "Ethan Williams",
    gender: "Male",
    class: "JSS 2",
    arm: "Gold",
    guardian: "Jennifer Williams",
    contact: "+1 (555) 678-9012",
    status: "Suspended",
    feesOwed: 2500,
    image:
      "https://readdy.ai/api/search-image?query=young%20male%20student%20portrait%20clean%20white%20background%20school%20uniform%20serious%20expression%20natural%20lighting%20professional%20student%20photo&width=200&height=200&seq=student-ethan-008&orientation=squarish",
  },
];

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
