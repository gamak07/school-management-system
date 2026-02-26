"use client";

import { format } from "date-fns";
import { EventChip } from "./EventChip";
import {
  getMonthGridDays,
  getEventsForDate,
  isToday,
  isSameMonth,
  toDateString,
} from "@/helpers/utils";
import { VISIBLE_EVENTS_PER_CELL } from "@/mock_datas/constants";
import type { CalendarEvent } from "@/types/calendar";

const WEEKDAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface Props {
  currentDate: Date;
  events: CalendarEvent[];
  onDayClick: (dateStr: string) => void;
  onEventClick: (event: CalendarEvent) => void;
}

export function MonthView({
  currentDate,
  events,
  onDayClick,
  onEventClick,
}: Props) {
  const days = getMonthGridDays(currentDate);

  return (
    <div className="flex flex-col flex-1">
      {/* Weekday header */}
      <div className="grid grid-cols-7 bg-slate-50 border-b border-slate-100">
        {WEEKDAY_LABELS.map((day) => (
          <div
            key={day}
            className="py-2.5 text-center text-[11px] font-semibold text-slate-400 tracking-wider uppercase"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 flex-1">
        {days.map((day, idx) => {
          const dateStr = toDateString(day);
          const dayEvents = getEventsForDate(events, day);
          const isCurrentMonth = isSameMonth(day, currentDate);
          const today = isToday(day);
          const overflowCount = dayEvents.length - VISIBLE_EVENTS_PER_CELL;

          return (
            <div
              key={dateStr}
              onClick={() => onDayClick(dateStr)}
              className={`min-h-[88px] p-1.5 border-b border-r border-slate-100 cursor-pointer
                          transition-colors hover:bg-slate-50
                          ${idx % 7 === 6 ? "border-r-0" : ""}
                          ${idx >= days.length - 7 ? "border-b-0" : ""}`}
            >
              {/* Day number */}
              <div className="flex mb-1">
                <span
                  className={`w-6 h-6 flex items-center justify-center rounded-full text-[13px] font-medium
                    ${today ? "bg-blue-600 text-white font-bold" : ""}
                    ${!today && isCurrentMonth ? "text-slate-700" : ""}
                    ${!today && !isCurrentMonth ? "text-slate-300" : ""}`}
                >
                  {format(day, "d")}
                </span>
              </div>

              {/* Events */}
              <div className="flex flex-col gap-0.5">
                {dayEvents.slice(0, VISIBLE_EVENTS_PER_CELL).map((event) => (
                  <EventChip
                    key={event.id}
                    event={event}
                    onClick={onEventClick}
                  />
                ))}
                {overflowCount > 0 && (
                  <span className="text-[10px] text-slate-400 pl-1">
                    +{overflowCount} more
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
