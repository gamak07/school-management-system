"use client";

import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CalendarView } from "../../types/calendar";

interface Props {
  title: string;
  view: CalendarView;
  onPrev: () => void;
  onNext: () => void;
  onToday: () => void;
  onViewChange: (view: CalendarView) => void;
  onAddEvent: () => void;
}

export function CalendarHeader({
  title,
  view,
  onPrev,
  onNext,
  onToday,
  onViewChange,
  onAddEvent,
}: Props) {
  return (
    <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
      {/* Navigation */}
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="icon"
          onClick={onPrev}
          className="h-8 w-8"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <h2 className="w-52 text-center text-base font-bold text-slate-900 tabular-nums">
          {title}
        </h2>

        <Button
          variant="outline"
          size="icon"
          onClick={onNext}
          className="h-8 w-8"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={onToday}
          className="text-xs font-semibold"
        >
          Today
        </Button>
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-2">
        {/* View toggle */}
        <div className="flex rounded-md border border-slate-200 overflow-hidden">
          {(["month", "week"] as CalendarView[]).map((v) => (
            <button
              key={v}
              onClick={() => onViewChange(v)}
              className={`px-4 py-1.5 text-xs font-semibold capitalize transition-colors
                ${
                  view === v
                    ? "bg-blue-600 text-white"
                    : "bg-white text-slate-500 hover:bg-slate-50"
                }`}
            >
              {v}
            </button>
          ))}
        </div>

        <Button
          size="sm"
          onClick={onAddEvent}
          className="gap-1.5 bg-blue-600 hover:bg-blue-700 text-xs"
        >
          <Plus className="h-3.5 w-3.5" />
          Add Event
        </Button>
      </div>
    </div>
  );
}
