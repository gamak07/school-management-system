"use client";

import { getEventTypeConfig } from "@/mock_datas/constants";
import type { CalendarEvent } from "@/types/calendar";

interface Props {
  event: CalendarEvent;
  onClick: (event: CalendarEvent) => void;
}

export function EventChip({ event, onClick }: Props) {
  const { color, bgColor, label } = getEventTypeConfig(event.type);

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick(event);
      }}
      title={`${event.title} — ${label}`}
      className="w-full text-left truncate rounded px-1.5 py-0.5 text-[11px] font-semibold
                 transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2"
      style={{
        color,
        backgroundColor: bgColor,
        borderLeft: `3px solid ${color}`,
      }}
    >
      {event.title}
    </button>
  );
}
