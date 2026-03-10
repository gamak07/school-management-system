"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  X,
  Mail,
  Phone,
  Clock,
  Briefcase,
  Building2,
  CalendarCheck,
  Star,
  StarHalf,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { StaffMember } from "@/mock_datas/staff";
import type { EditTab } from "./EditStaffProfileModal";

interface ViewProfileModalProps {
  open: boolean;
  staff: StaffMember | null;
  onClose: () => void;
  onEdit: (tab: EditTab) => void;
}

function getYearsOfService(joinDateStr: string): number {
  const joinDate = new Date(joinDateStr);
  const now = new Date();
  let years = now.getFullYear() - joinDate.getFullYear();
  const monthDiff = now.getMonth() - joinDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && now.getDate() < joinDate.getDate())
  ) {
    years--;
  }
  return Math.max(0, years);
}

function renderStars(rating: number) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.25;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star
        key={`full-${i}`}
        className="w-5 h-5 fill-amber-400 text-amber-400"
      />,
    );
  }
  if (hasHalf) {
    stars.push(
      <StarHalf key="half" className="w-5 h-5 fill-amber-400 text-amber-400" />,
    );
  }
  const remaining = 5 - fullStars - (hasHalf ? 1 : 0);
  for (let i = 0; i < remaining; i++) {
    stars.push(<Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />);
  }
  return stars;
}

export default function ViewProfileModal({
  open,
  staff,
  onClose,
  onEdit,
}: ViewProfileModalProps) {
  if (!staff) return null;

  const yearsOfService = getYearsOfService(staff.joinDate);

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="p-0 gap-0 lg:min-w-4xl min-w-[300px] rounded-xl max-h-[90vh] overflow-y-auto"
      >
        <DialogTitle className="sr-only">
          Staff Profile — {staff.name}
        </DialogTitle>
        {/* ─── Header ─── */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-start justify-between z-10 ">
          <div className="flex items-start gap-4">
            <Avatar className="w-20 h-20 rounded-full border border-gray-100">
              <AvatarImage
                src={staff.image}
                alt={staff.name}
                className="object-cover"
              />
              <AvatarFallback className="text-xl">
                {staff.name.substring(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{staff.name}</h2>
              <p className="text-sm text-gray-500 mt-1">
                Staff ID: {staff.staffId}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm text-gray-600">
                  {staff.department}
                </span>
                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                <Badge
                  variant="secondary"
                  className={cn(
                    "px-2 py-0.5 rounded-full text-xs font-medium border-none",
                    staff.status === "Active"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-orange-100 text-orange-700",
                  )}
                >
                  {staff.status}
                </Badge>
                <Badge
                  variant="secondary"
                  className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700 border-none"
                >
                  {staff.type}
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="w-10 h-10 rounded-lg border-gray-300 hover:bg-gray-50 shadow-none"
              title="Send Email"
            >
              <Mail className="w-[18px] h-[18px] text-gray-600" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-10 h-10 rounded-lg border-gray-300 hover:bg-gray-50 shadow-none"
              title="Call"
            >
              <Phone className="w-[18px] h-[18px] text-gray-600" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="w-10 h-10 rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5 text-gray-600" />
            </Button>
          </div>
        </div>

        {/* ─── Body ─── */}
        <div className="p-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-lg mb-3">
                <Clock className="w-[18px] h-[18px] text-white" />
              </div>
              <p className="text-sm text-gray-600 mb-1">Years of Service</p>
              <p className="text-2xl font-bold text-gray-900">
                {yearsOfService} {yearsOfService === 1 ? "year" : "years"}
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
              <div className="w-10 h-10 flex items-center justify-center bg-purple-500 rounded-lg mb-3">
                <Briefcase className="w-[18px] h-[18px] text-white" />
              </div>
              <p className="text-sm text-gray-600 mb-1">Role</p>
              <p className="text-lg font-bold text-gray-900">{staff.role}</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-4">
              <div className="w-10 h-10 flex items-center justify-center bg-teal-500 rounded-lg mb-3">
                <Building2 className="w-[18px] h-[18px] text-white" />
              </div>
              <p className="text-sm text-gray-600 mb-1">Department</p>
              <p className="text-lg font-bold text-gray-900">
                {staff.department}
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-4">
              <div className="w-10 h-10 flex items-center justify-center bg-emerald-500 rounded-lg mb-3">
                <CalendarCheck className="w-[18px] h-[18px] text-white" />
              </div>
              <p className="text-sm text-gray-600 mb-1">Attendance Rate</p>
              <p className="text-2xl font-bold text-gray-900">
                {staff.attendanceRate}%
              </p>
            </div>
          </div>

          {/* Personal Information */}
          <div className="bg-gray-50 rounded-lg p-5 mb-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Personal Information
              </h3>
              <button
                onClick={() => onEdit("personal")}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap cursor-pointer"
              >
                Edit
              </button>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Full Name</p>
                <p className="text-sm font-medium text-gray-900">
                  {staff.name}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Email Address</p>
                <p className="text-sm font-medium text-gray-900">
                  {staff.email}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Phone Number</p>
                <p className="text-sm font-medium text-gray-900">
                  {staff.phone}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Date of Birth</p>
                <p className="text-sm font-medium text-gray-900">
                  {staff.dateOfBirth}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Gender</p>
                <p className="text-sm font-medium text-gray-900">
                  {staff.gender}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Home Address</p>
                <p className="text-sm font-medium text-gray-900">
                  {staff.address}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Emergency Contact</p>
                <p className="text-sm font-medium text-gray-900">
                  {staff.emergencyContactName}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Emergency Phone</p>
                <p className="text-sm font-medium text-gray-900">
                  {staff.emergencyContactPhone}
                </p>
              </div>
            </div>
          </div>

          {/* Employment Information */}
          <div className="bg-gray-50 rounded-lg p-5 mb-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Employment Information
              </h3>
              <button
                onClick={() => onEdit("employment")}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap cursor-pointer"
              >
                Edit
              </button>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Staff ID</p>
                <p className="text-sm font-medium text-gray-900">
                  {staff.staffId}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Role</p>
                <p className="text-sm font-medium text-gray-900">
                  {staff.role}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Department</p>
                <p className="text-sm font-medium text-gray-900">
                  {staff.department}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Employment Type</p>
                <p className="text-sm font-medium text-gray-900">
                  {staff.type}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Join Date</p>
                <p className="text-sm font-medium text-gray-900">
                  {staff.joinDate}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Status</p>
                <p className="text-sm font-medium text-gray-900">
                  {staff.status}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Annual Salary</p>
                <p className="text-sm font-medium text-gray-900">
                  {staff.salary}
                </p>
              </div>
            </div>
          </div>

          {/* Performance & Activity */}
          <div className="bg-gray-50 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Performance &amp; Activity
            </h3>
            <div className="space-y-4">
              {/* Attendance Rate */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Attendance Rate
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    {staff.attendanceRate}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-emerald-500 h-2 rounded-full transition-all"
                    style={{ width: `${staff.attendanceRate}%` }}
                  />
                </div>
              </div>

              {/* Tasks Completed */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Tasks Completed
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    {staff.tasksCompleted}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all"
                    style={{ width: `${staff.tasksCompleted}%` }}
                  />
                </div>
              </div>

              {/* Punctuality Score */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Punctuality Score
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    {staff.punctualityScore}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full transition-all"
                    style={{ width: `${staff.punctualityScore}%` }}
                  />
                </div>
              </div>

              {/* Feedback Rating */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-sm font-medium text-gray-700">
                  Feedback Rating
                </span>
                <div className="flex items-center gap-1">
                  {renderStars(staff.feedbackRating)}
                  <span className="text-sm font-bold text-gray-900 ml-2">
                    {staff.feedbackRating}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Footer ─── */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors whitespace-nowrap h-auto"
          >
            Remove Staff
          </Button>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => onEdit("personal")}
              className="px-5 py-2 text-sm font-medium text-gray-700 bg-white border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap h-auto shadow-none"
            >
              Edit Profile
            </Button>
            <Button className="px-5 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap h-auto shadow-none">
              Send Message
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
