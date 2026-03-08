"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { staffMembers } from "@/mock_datas/staff";
import StaffRow from "./StaffRow";

interface StaffTableProps {
  handleSelectAll: (checked: boolean) => void;
  handleSelectRow: (id: string, checked: boolean) => void;
  isAllSelected: boolean;
  selectedIds: string[];
}

export default function StaffTable({
  handleSelectAll,
  handleSelectRow,
  isAllSelected,
  selectedIds,
}: StaffTableProps) {
  return (
    <Card className="shadow-none border-gray-200 overflow-hidden p-0 gap-0">
      {/* Table Content */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow className="hover:bg-gray-50 border-none">
              <TableHead className="w-12 px-5 py-3">
                <Checkbox
                  className="text-teal-600 border-gray-300 rounded focus:ring-teal-500 data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
                  checked={isAllSelected}
                  onCheckedChange={(checked) =>
                    handleSelectAll(checked as boolean)
                  }
                  aria-label="Select all staff"
                />
              </TableHead>
              <TableHead className="text-left px-5 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider h-auto">
                Staff
              </TableHead>
              <TableHead className="text-left px-5 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider h-auto">
                Contact
              </TableHead>
              <TableHead className="text-left px-5 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider h-auto">
                Role
              </TableHead>
              <TableHead className="text-left px-5 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider h-auto">
                Department
              </TableHead>
              <TableHead className="text-left px-5 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider h-auto">
                Status
              </TableHead>
              <TableHead className="text-right px-5 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider h-auto">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-200">
            {staffMembers.map((staff) => {
              const isSelected = selectedIds.includes(staff.id);
              return (
                <StaffRow
                  key={staff.id}
                  staff={staff}
                  handleSelectRow={handleSelectRow}
                  isSelected={isSelected}
                />
              );
            })}
          </TableBody>
        </Table>
      </div>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-gray-200 flex justify-end">
        <Button
          variant="outline"
          size="sm"
          className="text-gray-700 hover:bg-gray-50 flex items-center gap-2 whitespace-nowrap h-auto py-2 px-4 shadow-none"
        >
          <Download className="w-4 h-4" />
          Export CSV
        </Button>
      </div>
    </Card>
  );
}
