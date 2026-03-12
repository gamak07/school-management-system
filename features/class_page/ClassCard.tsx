import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ClassItem } from "../../types/classes";

interface ClassCardProps {
  classItem: ClassItem;
}

export function ClassCard({ classItem }: ClassCardProps) {
  const progressPercentage = Math.round(
    (classItem.students.enrolled / classItem.students.capacity) * 100,
  );

  return (
    <Card className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow shadow-none">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            {classItem.name}
          </h3>
          <div className="flex items-center gap-2">
            <Badge
              variant="secondary"
              className="px-2.5 py-1 bg-teal-100 text-teal-700 hover:bg-teal-100 text-xs font-medium rounded-full shadow-none border-none"
            >
              {classItem.level}
            </Badge>
            <Badge
              variant="secondary"
              className={`px-2.5 py-1 text-xs font-medium rounded-full shadow-none border-none ${
                classItem.status === "Active"
                  ? "bg-green-100 text-green-700 hover:bg-green-100"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {classItem.status}
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
        <Avatar className="w-10 h-10 border border-gray-100">
          <AvatarImage
            src={classItem.teacher.avatar}
            alt={classItem.teacher.name}
            className="object-cover"
          />
          <AvatarFallback>
            {classItem.teacher.name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-xs text-gray-500">Class Teacher</p>
          <p className="text-sm font-medium text-gray-900">
            {classItem.teacher.name}
          </p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Student Capacity</span>
          <span className="text-sm font-medium text-gray-900">
            {classItem.students.enrolled}/{classItem.students.capacity}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all ${classItem.progressColor}`}
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-xs text-gray-500 mb-1">Avg GPA</p>
          <p className="text-lg font-bold text-gray-900">{classItem.gpa}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Attendance</p>
          <p className="text-lg font-bold text-gray-900">
            {classItem.attendance}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Subjects</p>
          <p className="text-lg font-bold text-gray-900">
            {classItem.subjects}
          </p>
        </div>
      </div>

      <Button className="w-full px-4 py-2.5 h-auto bg-teal-50 text-teal-700 hover:bg-teal-100 text-sm font-medium rounded-lg whitespace-nowrap flex items-center justify-center gap-2 shadow-none border-none">
        <span>View Details</span>
        <ArrowRight className="w-5 h-5" />
      </Button>
    </Card>
  );
}
