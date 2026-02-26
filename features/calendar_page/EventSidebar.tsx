"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  EVENT_TYPE_CONFIG,
  UPCOMING_EVENTS_LIMIT,
  getEventTypeConfig,
} from "@/mock_datas/constants";
import { getUpcomingEvents, formatEventDate } from "@/helpers/utils";
import type { CalendarEvent, FilterState } from "@/types/calendar";

interface Props {
  filters: FilterState;
  events: CalendarEvent[];
  onFilterChange: (filters: FilterState) => void;
  onEventClick: (event: CalendarEvent) => void;
}

export function EventSidebar({
  filters,
  events,
  onFilterChange,
  onEventClick,
}: Props) {
  const upcomingEvents = getUpcomingEvents(
    events,
    filters,
    UPCOMING_EVENTS_LIMIT,
  );

  function handleToggle(typeId: string, checked: boolean) {
    onFilterChange({ ...filters, [typeId]: checked });
  }

  return (
    <aside className="w-52 shrink-0 flex flex-col gap-4">
      {/* Event type filters */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4">
        <h3 className="text-xs font-bold text-slate-900 tracking-wide uppercase mb-3">
          Event Types
        </h3>

        <ul className="flex flex-col gap-2.5">
          {EVENT_TYPE_CONFIG.map((type) => (
            <li key={type.id} className="flex items-center gap-2.5">
              <Checkbox
                id={`filter-${type.id}`}
                checked={filters[type.id]}
                onCheckedChange={(checked) =>
                  handleToggle(type.id, Boolean(checked))
                }
                style={{ accentColor: type.color }}
              />
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: type.color }}
              />
              <Label
                htmlFor={`filter-${type.id}`}
                className="text-[13px] text-slate-600 font-medium cursor-pointer"
              >
                {type.label}
              </Label>
            </li>
          ))}
        </ul>
      </div>

      {/* Upcoming events */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 flex-1">
        <h3 className="text-xs font-bold text-slate-900 tracking-wide uppercase mb-3">
          Upcoming Events
        </h3>

        {upcomingEvents.length === 0 ? (
          <p className="text-[13px] text-slate-400 text-center py-3">
            No upcoming events
          </p>
        ) : (
          <ul className="flex flex-col gap-2.5">
            {upcomingEvents.map((event) => {
              const { color, bgColor } = getEventTypeConfig(event.type);
              return (
                <li key={event.id}>
                  <button
                    onClick={() => onEventClick(event)}
                    className="w-full text-left rounded-lg px-3 py-2 transition-opacity hover:opacity-80"
                    style={{
                      backgroundColor: bgColor,
                      borderLeft: `4px solid ${color}`,
                    }}
                  >
                    <p className="text-[12px] font-semibold text-slate-800 truncate">
                      {event.title}
                    </p>
                    <p
                      className="text-[11px] font-medium mt-0.5"
                      style={{ color }}
                    >
                      {formatEventDate(event.date)}
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </aside>
  );
}
