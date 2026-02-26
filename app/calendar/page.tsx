// app/calendar/page.tsx
// This is a Server Component. All client-side interactivity lives in CalendarClient.

import type { Metadata } from "next";
import type { CalendarEvent } from "@/types/calendar";
import { CalendarClient } from "@/features/calendar_page/CalendarClient";

export const metadata: Metadata = {
  title: "School Calendar",
  description: "View and manage all school events and schedules",
};

/**
 * fetchEvents can be replaced with your actual data source —
 * a database query, a CMS fetch, or an API call.
 * Because this is a server component it runs only on the server,
 * so credentials / DB clients never reach the browser.
 */
async function fetchEvents(): Promise<CalendarEvent[]> {
  // TODO: Replace with your real data source, e.g.:
  // const events = await db.query("SELECT * FROM events");
  // return events;

  // Returning an empty array so CalendarClient falls back to its sample data.
  return [];
}

export default async function CalendarPage() {
  const events = await fetchEvents();

  return (
    <main className="min-h-screen bg-slate-50 px-8 py-7">
      {/*
        Pass server-fetched events as a prop.
        If none are returned, CalendarClient uses SAMPLE_EVENTS as fallback.
      */}
      <CalendarClient initialEvents={events.length > 0 ? events : undefined} />
    </main>
  );
}
