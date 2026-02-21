
import { TableRow, TableCell } from "@/components/ui/table";

import {
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface StudentRowProps {
  student: any;
  isSelected: boolean;
  onToggle: () => void;
}

export default function StudentRow({ student, isSelected, onToggle }: StudentRowProps) {
  return (
    <TableRow
      key={student.id}
      className="hover:bg-gray-50 transition-colors border-none"
    >
      <TableCell className="px-4 py-3">
        <input
          className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 cursor-pointer"
          type="checkbox"
          checked={isSelected}
          onChange={onToggle}
        />
      </TableCell>

      <TableCell className="px-4 py-3">
        <span className="text-sm font-medium text-gray-900 whitespace-nowrap">
          {student.admissionNo}
        </span>
      </TableCell>

      <TableCell className="px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            alt={student.name}
            className="w-10 h-10 rounded-full object-cover"
            src={student.image}
          />
          <div>
            <p className="text-sm font-medium text-gray-900 whitespace-nowrap">
              {student.name}
            </p>
            <p className="text-xs text-gray-500">{student.gender}</p>
          </div>
        </div>
      </TableCell>

      <TableCell className="px-4 py-3">
        <div>
          <p className="text-sm font-medium text-gray-900 whitespace-nowrap">
            {student.class}
          </p>
          <p className="text-xs text-gray-500">{student.arm} Arm</p>
        </div>
      </TableCell>

      <TableCell className="px-4 py-3">
        <p className="text-sm text-gray-900 whitespace-nowrap">
          {student.guardian}
        </p>
      </TableCell>

      <TableCell className="px-4 py-3">
        <p className="text-sm text-gray-900 whitespace-nowrap">
          {student.contact}
        </p>
      </TableCell>

      <TableCell className="px-4 py-3">
        <span
          className={cn(
            "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap",
            student.status === "Active"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800",
          )}
        >
          {student.status}
        </span>
      </TableCell>

      <TableCell className="px-4 py-3">
        {student.feesOwed > 0 ? (
          <div className="flex items-center gap-1">
            <AlertCircle className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-600 whitespace-nowrap">
              ${student.feesOwed}
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span className="text-sm text-green-600 whitespace-nowrap">
              Paid
            </span>
          </div>
        )}
      </TableCell>

      <TableCell className="px-4 py-3">
        <Button className="text-teal-600 hover:text-teal-700 text-sm font-medium cursor-pointer whitespace-nowrap bg-transparent hover:bg-transparent">
          View Profile
        </Button>
      </TableCell>
    </TableRow>
  );
}
