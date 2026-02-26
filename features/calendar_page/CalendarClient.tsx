"use client";

import { useState, useMemo, useCallback } from "react";
import { startOfWeek } from "date-fns";

import { SAMPLE_EVENTS, DEFAULT_FILTERS } from "../../mock_datas/constants";
import {
  applyFilters,
  navigateMonth,
  navigateWeek,
  formatMonthYear,
  formatWeekRange,
} from "../../helpers/utils";
import type {
  CalendarEvent,
  CalendarView,
  FilterState,
} from "../../types/calendar";
import { CalendarHeader } from "./CalendarHeader";
import { MonthView } from "./MonthView";
import { WeekView } from "./WeekView";
import { EventSidebar } from "./EventSidebar";
import { EventFormModal } from "./EventFormModal";
import { EventDetailModal } from "./EventDetailModal";

type ModalState =
  | { mode: "add"; defaultDate?: string }
  | { mode: "edit"; event: CalendarEvent }
  | { mode: "detail"; event: CalendarEvent }
  | null;

interface Props {
  initialEvents?: CalendarEvent[];
}

export function CalendarClient({ initialEvents = SAMPLE_EVENTS }: Props) {
  // ─── Core State ─────────────────────────────────────────────────────────────
  const [view, setView] = useState<CalendarView>("month");
  const [currentDate, setCurrentDate] = useState<Date>(new Date(2024, 0, 1));
  const [weekStart, setWeekStart] = useState<Date>(() =>
    startOfWeek(new Date(2024, 0, 7), { weekStartsOn: 0 }),
  );
  const [events, setEvents] = useState<CalendarEvent[]>(initialEvents);
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [modal, setModal] = useState<ModalState>(null);

  // ─── Derived Data ────────────────────────────────────────────────────────────
  const filteredEvents = useMemo(
    () => applyFilters(events, filters),
    [events, filters],
  );

  const headerTitle =
    view === "month"
      ? formatMonthYear(currentDate)
      : formatWeekRange(weekStart);

  // ─── Navigation ──────────────────────────────────────────────────────────────
  const handlePrev = useCallback(() => {
    if (view === "month") setCurrentDate((d) => navigateMonth.prev(d));
    else setWeekStart((d) => navigateWeek.prev(d));
  }, [view]);

  const handleNext = useCallback(() => {
    if (view === "month") setCurrentDate((d) => navigateMonth.next(d));
    else setWeekStart((d) => navigateWeek.next(d));
  }, [view]);

  const handleToday = useCallback(() => {
    const today = new Date();
    setCurrentDate(today);
    setWeekStart(startOfWeek(today, { weekStartsOn: 0 }));
  }, []);

  // ─── Modal Handlers ──────────────────────────────────────────────────────────
  const openAdd = useCallback((defaultDate?: string) => {
    setModal({ mode: "add", defaultDate });
  }, []);

  const openDetail = useCallback((event: CalendarEvent) => {
    setModal({ mode: "detail", event });
  }, []);

  const openEdit = useCallback((event: CalendarEvent) => {
    setModal({ mode: "edit", event });
  }, []);

  const closeModal = useCallback(() => setModal(null), []);

  // ─── CRUD ────────────────────────────────────────────────────────────────────
  const handleSave = useCallback(
    (data: Omit<CalendarEvent, "id">) => {
      if (modal?.mode === "add") {
        setEvents((prev) => [...prev, { id: crypto.randomUUID(), ...data }]);
      } else if (modal?.mode === "edit") {
        setEvents((prev) =>
          prev.map((e) => (e.id === modal.event.id ? { ...e, ...data } : e)),
        );
      }
      closeModal();
    },
    [modal, closeModal],
  );

  const handleDelete = useCallback(
    (id: string) => {
      setEvents((prev) => prev.filter((e) => e.id !== id));
      closeModal();
    },
    [closeModal],
  );

  // ─── Render ──────────────────────────────────────────────────────────────────
  return (
    <div className="flex flex-col gap-6">
      {/* Page heading */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          School Calendar
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          View and manage all school events and schedules
        </p>
      </div>

      {/* Main layout */}
      <div className="flex gap-5 items-start">
        {/* Calendar panel */}
        <div className="flex-1 bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col">
          <CalendarHeader
            title={headerTitle}
            view={view}
            onPrev={handlePrev}
            onNext={handleNext}
            onToday={handleToday}
            onViewChange={setView}
            onAddEvent={() => openAdd()}
          />

          {view === "month" ? (
            <MonthView
              currentDate={currentDate}
              events={filteredEvents}
              onDayClick={openAdd}
              onEventClick={openDetail}
            />
          ) : (
            <WeekView
              weekStart={weekStart}
              events={filteredEvents}
              onSlotClick={openAdd}
              onEventClick={openDetail}
            />
          )}
        </div>

        {/* Sidebar */}
        <EventSidebar
          filters={filters}
          events={events}
          onFilterChange={setFilters}
          onEventClick={openDetail}
        />
      </div>

      {/* Modals */}
      <EventFormModal
        open={modal?.mode === "add"}
        defaultDate={modal?.mode === "add" ? modal.defaultDate : undefined}
        onSave={handleSave}
        onClose={closeModal}
      />

      <EventFormModal
        open={modal?.mode === "edit"}
        event={modal?.mode === "edit" ? modal.event : undefined}
        onSave={handleSave}
        onClose={closeModal}
      />

      <EventDetailModal
        open={modal?.mode === "detail"}
        event={modal?.mode === "detail" ? modal.event : null}
        onEdit={openEdit}
        onDelete={handleDelete}
        onClose={closeModal}
      />
    </div>
  );
}
