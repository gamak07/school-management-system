"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarEvent, EventType } from "@/types/calendar";
import { EVENT_TYPE_CONFIG } from "@/mock_datas/constants";


interface FormState {
  title: string;
  date: string;
  type: EventType;
  description: string;
}

const EMPTY_FORM: FormState = {
  title: "",
  date: "",
  type: "meeting",
  description: "",
};

interface Props {
  open: boolean;
  /** Pass an event to edit, or undefined to add a new one. */
  event?: CalendarEvent;
  /** Pre-fill the date when adding from a day click. */
  defaultDate?: string;
  onSave: (data: Omit<CalendarEvent, "id">) => void;
  onClose: () => void;
}

export function EventFormModal({
  open,
  event,
  defaultDate,
  onSave,
  onClose,
}: Props) {
  const isEditing = Boolean(event);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);

  // Populate form whenever the modal is opened
  useEffect(() => {
    if (open) {
      setForm(
        event
          ? {
              title: event.title,
              date: event.date,
              type: event.type,
              description: event.description ?? "",
            }
          : { ...EMPTY_FORM, date: defaultDate ?? "" },
      );
    }
  }, [open, event, defaultDate]);

  function handleSubmit() {
    if (!form.title.trim() || !form.date) return;
    onSave({
      title: form.title.trim(),
      date: form.date,
      type: form.type,
      description: form.description,
    });
  }

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Event" : "Add Event"}</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 py-2">
          {/* Title */}
          <div className="grid gap-1.5">
            <Label htmlFor="event-title">
              Title <span className="text-red-500">*</span>
            </Label>
            <Input
              id="event-title"
              placeholder="e.g. Board Meeting"
              value={form.title}
              onChange={(e) => set("title", e.target.value)}
            />
          </div>

          {/* Date */}
          <div className="grid gap-1.5">
            <Label htmlFor="event-date">
              Date <span className="text-red-500">*</span>
            </Label>
            <Input
              id="event-date"
              type="date"
              value={form.date}
              onChange={(e) => set("date", e.target.value)}
            />
          </div>

          {/* Type */}
          <div className="grid gap-1.5">
            <Label>Event Type</Label>
            <Select
              value={form.type}
              onValueChange={(v) => set("type", v as EventType)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {EVENT_TYPE_CONFIG.map((t) => (
                  <SelectItem key={t.id} value={t.id}>
                    <span className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full inline-block"
                        style={{ backgroundColor: t.color }}
                      />
                      {t.label}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Description */}
          <div className="grid gap-1.5">
            <Label htmlFor="event-desc">Description</Label>
            <Textarea
              id="event-desc"
              placeholder="Optional notes…"
              rows={3}
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              className="resize-none"
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!form.title.trim() || !form.date}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {isEditing ? "Save Changes" : "Add Event"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
