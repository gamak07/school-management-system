"use client";

import { format } from "date-fns";
import { EventChip } from "./EventChip";
import {
  getWeekDays,
  getEventsForDate,
  isToday,
  toDateString,
} from "../../helpers/utils";
import { HOUR_LABELS } from "@/mock_datas/constants";
import type { CalendarEvent } from "@/types/calendar";

// The hour row in which events are displayed in the week view.
const EVENT_ROW_HOUR = 8;

interface Props {
  weekStart: Date;
  events: CalendarEvent[];
  onSlotClick: (dateStr: string) => void;
  onEventClick: (event: CalendarEvent) => void;
}

export function WeekView({
  weekStart,
  events,
  onSlotClick,
  onEventClick,
}: Props) {
  const days = getWeekDays(weekStart);

  return (
    <div className="flex flex-col flex-1">
      {/* Day headers */}
      <div
        className="grid bg-slate-50 border-b border-slate-100"
        style={{ gridTemplateColumns: "56px repeat(7, 1fr)" }}
      >
        <div /> {/* spacer for time column */}
        {days.map((day) => {
          const today = isToday(day);
          return (
            <div
              key={toDateString(day)}
              className="py-2.5 text-center border-l border-slate-100"
            >
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                {format(day, "EEE")}
              </p>
              <p
                className={`mx-auto mt-0.5 w-8 h-8 flex items-center justify-center rounded-lg text-base font-bold
                  ${today ? "bg-blue-100 text-blue-600" : "text-slate-700"}`}
              >
                {format(day, "d")}
              </p>
            </div>
          );
        })}
      </div>

      {/* Time grid */}
      <div className="overflow-y-auto flex-1" style={{ maxHeight: 520 }}>
        {HOUR_LABELS.map((hourLabel, hourIdx) => (
          <div
            key={hourLabel}
            className="grid border-b border-slate-50"
            style={{ gridTemplateColumns: "56px repeat(7, 1fr)" }}
          >
            {/* Hour label */}
            <div className="pr-2 pt-1 text-right text-[10px] text-slate-400 border-r border-slate-100 select-none">
              {hourLabel}
            </div>

            {/* Day slots */}
            {days.map((day) => {
              const dateStr = toDateString(day);
              const dayEvents =
                hourIdx === EVENT_ROW_HOUR ? getEventsForDate(events, day) : [];

              return (
                <div
                  key={dateStr}
                  onClick={() => onSlotClick(dateStr)}
                  className="min-h-[40px] border-l border-slate-100 p-0.5 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  {dayEvents.map((event) => (
                    <EventChip
                      key={event.id}
                      event={event}
                      onClick={onEventClick}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
