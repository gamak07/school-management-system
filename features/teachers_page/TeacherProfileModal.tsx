"use client";

import {
  X,
  Mail,
  Phone,
  User,
  Briefcase,
  BookOpen,
  Users,
  BarChart3,
  Star,
  CalendarDays,
  Trash2,
  Edit2,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { EditTeacherModal } from "./EditTeacherModal";

interface TeacherProfileModalProps {
  teacher: any;
  onClose: () => void;
}

export function TeacherProfileModal({
  teacher,
  onClose,
}: TeacherProfileModalProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  if (!teacher) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto backdrop-blur-sm">
        <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200">
          {/* Sticky Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  alt={teacher.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                  src={teacher.image}
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {teacher.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {teacher.staffId} • {teacher.department}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={cn(
                        "px-2 py-0.5 text-xs font-medium rounded-full",
                        teacher.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700",
                      )}
                    >
                      {teacher.status}
                    </span>
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-teal-100 text-teal-700">
                      {teacher.type}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 border-none bg-transparent">
                  <Mail className="w-4 h-4" /> Email
                </button>
                <button className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 border-none bg-transparent">
                  <Phone className="w-4 h-4" /> Call
                </button>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer border-none bg-transparent"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-6">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-teal-50 rounded-lg p-4">
                <p className="text-xs text-teal-600 font-medium">
                  Years of Service
                </p>
                <p className="text-2xl font-bold text-teal-700 mt-1">
                  {teacher.yearsOfService || 0}
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-xs text-green-600 font-medium">
                  Classes Assigned
                </p>
                <p className="text-2xl font-bold text-green-700 mt-1">
                  {teacher.assignedClassesList?.length || 0}
                </p>
              </div>
              <div className="bg-amber-50 rounded-lg p-4">
                <p className="text-xs text-amber-600 font-medium">Subjects</p>
                <p className="text-2xl font-bold text-amber-700 mt-1">
                  {teacher.subjects?.length || 0}
                </p>
              </div>
              <div className="bg-rose-50 rounded-lg p-4">
                <p className="text-xs text-rose-600 font-medium">
                  Attendance Rate
                </p>
                <p className="text-2xl font-bold text-rose-700 mt-1">
                  {teacher.performance?.attendanceRate || 0}%
                </p>
              </div>
            </div>

            {/* Info Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-500" />
                  Personal Information
                  <button
                    className="ml-auto text-xs text-teal-600 hover:text-teal-700 font-medium cursor-pointer border-none bg-transparent"
                    onClick={() => setIsEditModalOpen(true)}
                  >
                    Edit
                  </button>
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Email</span>
                    <span className="text-sm font-medium text-gray-900">
                      {teacher.email}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Phone</span>
                    <span className="text-sm font-medium text-gray-900">
                      {teacher.phone}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Gender</span>
                    <span className="text-sm font-medium text-gray-900">
                      {teacher.personalInfo?.gender || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Date of Birth</span>
                    <span className="text-sm font-medium text-gray-900">
                      {teacher.personalInfo?.dob || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Address</span>
                    <span className="text-sm font-medium text-gray-900 text-right max-w-[200px] truncate">
                      {teacher.personalInfo?.address || "N/A"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-gray-500" />
                  Professional Information
                  <button
                    className="ml-auto text-xs text-teal-600 hover:text-teal-700 font-medium cursor-pointer border-none bg-transparent"
                    onClick={() => setIsEditModalOpen(true)}
                  >
                    Edit
                  </button>
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Qualification</span>
                    <span className="text-sm font-medium text-gray-900">
                      {teacher.professionalInfo?.qualification || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">
                      Specialization
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {teacher.professionalInfo?.specialization || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Department</span>
                    <span className="text-sm font-medium text-gray-900">
                      {teacher.department}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Join Date</span>
                    <span className="text-sm font-medium text-gray-900">
                      {teacher.professionalInfo?.joinDate || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">
                      Emergency Contact
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {teacher.professionalInfo?.emergencyContact || "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subjects & Classes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-gray-500" /> Subjects
                  Teaching
                </h4>
                <div className="flex flex-wrap gap-2">
                  {teacher.subjects?.map((sub: string) => (
                    <span
                      key={sub}
                      className="px-3 py-1 text-xs font-medium bg-teal-100 text-teal-700 rounded-full"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-500" /> Assigned Classes
                </h4>
                <div className="flex flex-wrap gap-2">
                  {teacher.assignedClassesList?.map((cls: string) => (
                    <span
                      key={cls}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                    >
                      {cls}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="border border-gray-200 rounded-lg p-4 mb-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-gray-500" /> Performance
                Metrics (Current Term)
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-gray-600 mb-1">
                    Avg. Student Score
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-teal-500 rounded-full"
                        style={{
                          width: `${teacher.performance?.avgScore || 0}%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      {teacher.performance?.avgScore || 0}%
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Class Pass Rate</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{
                          width: `${teacher.performance?.passRate || 0}%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      {teacher.performance?.passRate || 0}%
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Attendance Rate</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-500 rounded-full"
                        style={{
                          width: `${teacher.performance?.attendanceRate || 0}%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      {teacher.performance?.attendanceRate || 0}%
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Parent Feedback</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-amber-400"
                        fill="currentColor"
                      />
                    ))}
                    <span className="text-sm font-semibold text-gray-900 ml-1">
                      {teacher.performance?.parentFeedback || "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Schedule */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-gray-500" /> Weekly
                Schedule
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-3 font-medium text-gray-600">
                        Day
                      </th>
                      <th className="text-left py-2 px-3 font-medium text-gray-600">
                        Time
                      </th>
                      <th className="text-left py-2 px-3 font-medium text-gray-600">
                        Class
                      </th>
                      <th className="text-left py-2 px-3 font-medium text-gray-600">
                        Subject
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {teacher.schedule?.map((item: any, i: number) => (
                      <tr
                        key={i}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="py-2 px-3 font-medium text-gray-900">
                          {item.day}
                        </td>
                        <td className="py-2 px-3 text-gray-600">{item.time}</td>
                        <td className="py-2 px-3">
                          <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 rounded">
                            {item.class}
                          </span>
                        </td>
                        <td className="py-2 px-3 text-gray-900">
                          {item.subject}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sticky Footer */}
          <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 border-none bg-transparent w-full sm:w-auto justify-center">
              <Trash2 className="w-4 h-4" /> Remove Teacher
            </button>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                className="flex-1 sm:flex-none justify-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 border-none bg-transparent"
                onClick={() => setIsEditModalOpen(true)}
              >
                <Edit2 className="w-4 h-4" /> Edit Profile
              </button>
              <button className="flex-1 sm:flex-none justify-center px-4 py-2 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 border-none">
                <Calendar className="w-4 h-4" /> Manage Schedule
              </button>
            </div>
          </div>
        </div>
      </div>


      {isEditModalOpen && (
        <EditTeacherModal 
          teacher={teacher} 
          onClose={() => setIsEditModalOpen(false)} 
        />
      )}
    </>
  );
}
