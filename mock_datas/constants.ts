import type {
  CalendarEvent,
  EventType,
  EventTypeConfig,
  FilterState,
} from "../types/calendar";

export const EVENT_TYPE_CONFIG: EventTypeConfig[] = [
  { id: "meeting", label: "Meetings", color: "#3B82F6", bgColor: "#DBEAFE" },
  { id: "exam", label: "Examinations", color: "#EF4444", bgColor: "#FEE2E2" },
  {
    id: "school",
    label: "School Events",
    color: "#10B981",
    bgColor: "#D1FAE5",
  },
  { id: "training", label: "Training", color: "#F59E0B", bgColor: "#FEF3C7" },
  { id: "holiday", label: "Holidays", color: "#6B7280", bgColor: "#F3F4F6" },
  { id: "sports", label: "Sports", color: "#F97316", bgColor: "#FFEDD5" },
];

export const DEFAULT_FILTERS: FilterState = {
  meeting: true,
  exam: true,
  school: true,
  training: true,
  holiday: true,
  sports: true,
};

export const SAMPLE_EVENTS: CalendarEvent[] = [
  {
    id: "1",
    title: "Board Meeting",
    date: "2024-01-22",
    type: "meeting",
    description: "Monthly board meeting at 10am in the main conference room.",
  },
  {
    id: "2",
    title: "Parent-Teacher Conference",
    date: "2024-01-25",
    type: "meeting",
    description: "Individual sessions from 2pm to 6pm.",
  },
  {
    id: "3",
    title: "PTA General Assembly",
    date: "2024-01-27",
    type: "school",
    description: "Annual general assembly at 3pm.",
  },
  {
    id: "4",
    title: "New Teacher Orientation",
    date: "2024-01-29",
    type: "training",
    description: "Mandatory for all new staff members.",
  },
  {
    id: "5",
    title: "Mid-Term Exams",
    date: "2024-02-01",
    type: "exam",
    description: "Grades 7–12. Exam schedule posted on the portal.",
  },
];

export const VISIBLE_EVENTS_PER_CELL = 3;
export const UPCOMING_EVENTS_LIMIT = 5;

// Used by the week view to map a row index to an hour label
export const HOUR_LABELS: string[] = Array.from({ length: 24 }, (_, i) => {
  const period = i < 12 ? "AM" : "PM";
  const hour = i === 0 ? 12 : i > 12 ? i - 12 : i;
  return `${hour}:00 ${period}`;
});

export function getEventTypeConfig(type: EventType): EventTypeConfig {
  return EVENT_TYPE_CONFIG.find((t) => t.id === type) ?? EVENT_TYPE_CONFIG[0];
}
