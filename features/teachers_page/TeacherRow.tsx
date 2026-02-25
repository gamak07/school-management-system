"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { TeacherProfileModal } from "./TeacherProfileModal";

export default function TeacherRow({
  teacher,
  handleSelectRow,
  isSelected,
}: {
  teacher: any;
  handleSelectRow: (id: string, checked: boolean) => void;
  isSelected: boolean;
}) {
  const [viewingTeacher, setViewingTeacher] = useState<any | null>(null);
  return (
    <>
      <TableRow
        key={teacher.id}
        className="hover:bg-gray-50 transition-colors border-none"
      >
        <TableCell className="px-4 py-3">
          <Checkbox
            className="text-teal-600 border-gray-300 rounded focus:ring-teal-500 data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
            checked={isSelected}
            onCheckedChange={(checked) =>
              handleSelectRow(teacher.id, checked as boolean)
            }
            aria-label={`Select ${teacher.name}`}
          />
        </TableCell>

        <TableCell className="px-4 py-3">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10 rounded-full border border-gray-100">
              <AvatarImage
                src={teacher.image}
                alt={teacher.name}
                className="object-cover"
              />
              <AvatarFallback>{teacher.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-gray-900 whitespace-nowrap">
                {teacher.name}
              </p>
              <p className="text-xs text-gray-500">{teacher.staffId}</p>
            </div>
          </div>
        </TableCell>

        <TableCell className="px-4 py-3">
          <p className="text-sm text-gray-900 whitespace-nowrap">
            {teacher.email}
          </p>
          <p className="text-xs text-gray-500">{teacher.phone}</p>
        </TableCell>

        <TableCell className="px-4 py-3 text-sm text-gray-900">
          {teacher.department}
        </TableCell>

        <TableCell className="px-4 py-3">
          <div className="flex flex-wrap gap-1 max-w-[150px]">
            {teacher.subjects.map((subject: any, index: number) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-2 py-0.5 text-xs font-medium bg-teal-100 text-teal-700 hover:bg-teal-100 rounded whitespace-nowrap border-none"
              >
                {subject}
              </Badge>
            ))}
          </div>
        </TableCell>

        <TableCell className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">
          {teacher.classes}
        </TableCell>

        <TableCell className="px-4 py-3">
          <div className="flex items-center gap-2">
            <Badge
              variant="secondary"
              className={cn(
                "px-2 py-0.5 text-xs font-medium rounded-full whitespace-nowrap border-none hover:bg-opacity-80",
                teacher.status === "Active"
                  ? "bg-green-100 text-green-700 hover:bg-green-100"
                  : "bg-amber-100 text-amber-700 hover:bg-amber-100",
              )}
            >
              {teacher.status}
            </Badge>
            <Badge
              variant="secondary"
              className="px-2 py-0.5 text-xs font-medium rounded-full bg-teal-100 text-teal-700 hover:bg-teal-100 whitespace-nowrap border-none"
            >
              {teacher.type}
            </Badge>
          </div>
        </TableCell>

        <TableCell className="px-4 py-3">
          <Button
            variant="ghost"
            onClick={() => setViewingTeacher(teacher)}
            className="px-3 py-1.5 text-sm font-medium text-teal-600 hover:!bg-teal-50 hover:text-teal-600 rounded-lg transition-colors cursor-pointer whitespace-nowrap h-auto"
          >
            View Profile
          </Button>
        </TableCell>
      </TableRow>

      {viewingTeacher && (
        <TeacherProfileModal 
          teacher={viewingTeacher} 
          onClose={() => setViewingTeacher(null)} 
        />
      )}
    </>
  );
}
