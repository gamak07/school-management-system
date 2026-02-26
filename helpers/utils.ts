import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isToday,
  isSameMonth,
  isSameDay,
  parseISO,
  isAfter,
  addMonths,
  subMonths,
  addWeeks,
  subWeeks,
} from "date-fns";

import type { CalendarEvent, FilterState } from "../types/calendar";

// ─── Formatting ───────────────────────────────────────────────────────────────

export function toDateString(date: Date): string {
  return format(date, "yyyy-MM-dd");
}

export function formatMonthYear(date: Date): string {
  return format(date, "MMMM yyyy");
}

export function formatWeekRange(weekStart: Date): string {
  const weekEnd = endOfWeek(weekStart, { weekStartsOn: 0 });
  if (format(weekStart, "MMM yyyy") === format(weekEnd, "MMM yyyy")) {
    return `${format(weekStart, "MMM d")} – ${format(weekEnd, "d, yyyy")}`;
  }
  return `${format(weekStart, "MMM d")} – ${format(weekEnd, "MMM d, yyyy")}`;
}

export function formatEventDate(dateStr: string): string {
  return format(parseISO(dateStr), "MMMM d, yyyy");
}

// ─── Month Grid ───────────────────────────────────────────────────────────────

/**
 * Returns all calendar cells for a month grid (always a full 6×7 or 5×7 grid
 * padded with days from the previous / next month).
 */
export function getMonthGridDays(date: Date): Date[] {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);
  const gridStart = startOfWeek(monthStart, { weekStartsOn: 0 });
  const gridEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });
  return eachDayOfInterval({ start: gridStart, end: gridEnd });
}

// ─── Week Grid ────────────────────────────────────────────────────────────────

export function getWeekDays(weekStart: Date): Date[] {
  return eachDayOfInterval({
    start: weekStart,
    end: endOfWeek(weekStart, { weekStartsOn: 0 }),
  });
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export const navigateMonth = {
  prev: (date: Date) => subMonths(date, 1),
  next: (date: Date) => addMonths(date, 1),
};

export const navigateWeek = {
  prev: (date: Date) => subWeeks(date, 1),
  next: (date: Date) => addWeeks(date, 1),
};

// ─── Event Helpers ────────────────────────────────────────────────────────────

export function getEventsForDate(
  events: CalendarEvent[],
  date: Date,
): CalendarEvent[] {
  const dateStr = toDateString(date);
  return events.filter((e) => e.date === dateStr);
}

export function getUpcomingEvents(
  events: CalendarEvent[],
  filters: FilterState,
  limit: number,
): CalendarEvent[] {
  const todayStr = toDateString(new Date());
  return events
    .filter((e) => filters[e.type] && e.date >= todayStr)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, limit);
}

export function applyFilters(
  events: CalendarEvent[],
  filters: FilterState,
): CalendarEvent[] {
  return events.filter((e) => filters[e.type]);
}

// Re-export commonly used date-fns helpers so components only import from utils
export { isToday, isSameMonth, isSameDay, startOfWeek, format };
