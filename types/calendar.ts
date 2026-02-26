export type EventType =
  | "meeting"
  | "exam"
  | "school"
  | "training"
  | "holiday"
  | "sports";

export type CalendarView = "month" | "week";

export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // ISO format: "YYYY-MM-DD"
  type: EventType;
  description?: string;
}

export interface EventTypeConfig {
  id: EventType;
  label: string;
  color: string;       // text / border color
  bgColor: string;     // chip background
}

export type FilterState = Record<EventType, boolean>;
