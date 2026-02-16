"use client";

import { useState } from "react";
import {
  X,
  Calendar,
  Users,
  FileText,
  Presentation,
  Sun,
  Trophy,
  MapPin,
  Repeat,
  CalendarCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useModal } from "@/hooks/useModalStore";

const eventTypes = [
  {
    id: "meeting",
    label: "Meeting",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-500/10",
    border: "border-blue-200",
  },
  {
    id: "exam",
    label: "Examination",
    icon: FileText,
    color: "text-red-600",
    bg: "bg-red-500/10",
    border: "border-red-200",
  },
  {
    id: "event",
    label: "School Event",
    icon: Calendar,
    color: "text-emerald-600",
    bg: "bg-emerald-500/10",
    border: "border-emerald-200",
  },
  {
    id: "training",
    label: "Training",
    icon: Presentation,
    color: "text-violet-600",
    bg: "bg-violet-500/10",
    border: "border-violet-200",
  },
  {
    id: "holiday",
    label: "Holiday",
    icon: Sun,
    color: "text-amber-600",
    bg: "bg-amber-500/10",
    border: "border-amber-200",
  },
  {
    id: "sports",
    label: "Sports",
    icon: Trophy,
    color: "text-pink-600",
    bg: "bg-pink-500/10",
    border: "border-pink-200",
  },
];

export function ScheduleEventModal() {
  const { isOpen, onClose, type } = useModal();
  const [selectedType, setSelectedType] = useState("meeting");
  const [isRecurring, setIsRecurring] = useState(false);

  const isModalOpen = isOpen && type === "scheduleEvent";
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Schedule New Event
              </h2>
              <p className="text-sm text-gray-500">
                Create and schedule a school event
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-gray-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)] hide-scrollbar">
          <form className="space-y-6">
            {/* Event Type Grid */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Event Type
              </label>
              <div className="grid grid-cols-3 gap-3">
                {eventTypes.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedType(t.id)}
                    className={cn(
                      "flex items-center gap-2 p-3 rounded-lg border-2 transition-all cursor-pointer text-left",
                      selectedType === t.id
                        ? "border-teal-500 bg-teal-50"
                        : "border-gray-200 hover:border-gray-300 bg-white",
                    )}
                  >
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                        t.bg,
                      )}
                    >
                      <t.icon className={cn("w-4 h-4", t.color)} />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {t.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Event Title <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="e.g., Parent-Teacher Meeting, Annual Sports Day"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                type="text"
              />
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="date"
                  defaultValue="2026-02-16"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Time <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="time"
                  defaultValue="09:00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Time <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="time"
                  defaultValue="10:00"
                />
              </div>
            </div>

            {/* Location */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  placeholder="Select or type a location"
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="text"
                />
                <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Attendees */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Attendees
              </label>
              <select className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer bg-white">
                <option value="all">
                  Everyone (Students, Teachers, Staff)
                </option>
                <option value="students">Students Only</option>
                <option value="teachers">Teachers Only</option>
                <option value="staff">Staff Only</option>
                <option value="parents">Parents Only</option>
                <option value="selected_classes">Selected Classes</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                placeholder="Add event details, agenda, or special instructions..."
                rows={3}
                maxLength={500}
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
              />
              <p className="text-xs text-gray-400 mt-1 text-right">
                0/500 characters
              </p>
            </div>

            {/* Recurring Logic */}
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Repeat className="text-gray-500 w-5 h-5" />
                  <span className="text-sm font-medium text-gray-700">
                    Recurring Event
                  </span>
                </div>
                {/* Toggle Switch */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isRecurring}
                    onChange={(e) => setIsRecurring(e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                </label>
              </div>

              {/* Conditional Select */}
              {isRecurring && (
                <select
                  // disabled={!isRecurring}
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed bg-white"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="biweekly">Bi-weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              )}
            </div>
            {/* Notification Checkbox */}
            <div className="flex items-center gap-3 p-4 bg-teal-50 rounded-lg border border-teal-100">
              <input
                id="notifyAttendees"
                className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 cursor-pointer"
                type="checkbox"
                defaultChecked
              />
              <label
                htmlFor="notifyAttendees"
                className="text-sm text-gray-700 cursor-pointer"
              >
                <span className="font-medium">Send notifications</span>
                <span className="text-gray-500">
                  {" "}
                  - Notify all attendees via email and SMS
                </span>
              </label>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
          <Button
            variant="outline"
            onClick={onClose}
            className="text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-2">
            <CalendarCheck className="w-4 h-4" />
            Schedule Event
          </Button>
        </div>
      </div>
    </div>
  );
}
