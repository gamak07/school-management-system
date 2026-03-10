"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { StaffMember } from "@/mock_datas/staff";

export default function StaffRow({
  staff,
  handleSelectRow,
  isSelected,
  onViewProfile,
}: {
  staff: StaffMember;
  handleSelectRow: (id: string, checked: boolean) => void;
  isSelected: boolean;
  onViewProfile: (staff: StaffMember) => void;
}) {
  return (
    <TableRow className="hover:bg-gray-50 transition-colors border-none">
      <TableCell className="px-5 py-4">
        <Checkbox
          className="text-teal-600 border-gray-300 rounded focus:ring-teal-500 data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
          checked={isSelected}
          onCheckedChange={(checked) =>
            handleSelectRow(staff.id, checked as boolean)
          }
          aria-label={`Select ${staff.name}`}
        />
      </TableCell>

      <TableCell className="px-5 py-4">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 rounded-full border border-gray-100">
            <AvatarImage
              src={staff.image}
              alt={staff.name}
              className="object-cover"
            />
            <AvatarFallback>{staff.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold text-gray-900 whitespace-nowrap">
              {staff.name}
            </p>
            <p className="text-xs text-gray-500">{staff.staffId}</p>
          </div>
        </div>
      </TableCell>

      <TableCell className="px-5 py-4">
        <p className="text-sm text-gray-900 whitespace-nowrap">{staff.email}</p>
        <p className="text-xs text-gray-500">{staff.phone}</p>
      </TableCell>

      <TableCell className="px-5 py-4 text-sm text-gray-900">
        {staff.role}
      </TableCell>

      <TableCell className="px-5 py-4 text-sm text-gray-900">
        {staff.department}
      </TableCell>

      <TableCell className="px-5 py-4">
        <div className="flex flex-col gap-1.5">
          <Badge
            variant="secondary"
            className={cn(
              "px-2.5 py-0.5 text-xs font-medium rounded-full whitespace-nowrap w-fit border-none hover:bg-opacity-80",
              staff.status === "Active"
                ? "bg-green-100 text-green-800 hover:bg-green-100"
                : "bg-orange-100 text-orange-800 hover:bg-orange-100",
            )}
          >
            {staff.status}
          </Badge>
          <Badge
            variant="secondary"
            className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-800 hover:bg-blue-100 whitespace-nowrap w-fit border-none"
          >
            {staff.type}
          </Badge>
        </div>
      </TableCell>

      <TableCell className="px-5 py-4 text-right">
        <Button
          variant="ghost"
          onClick={() => onViewProfile(staff)}
          className="px-4 py-2 text-sm font-medium text-teal-600 hover:!bg-teal-50 hover:text-teal-600 rounded-lg transition-colors cursor-pointer whitespace-nowrap h-auto"
        >
          View Profile
        </Button>
      </TableCell>
    </TableRow>
  );
}
