"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, FileText } from "lucide-react";
import type { CalendarEvent } from "@/types/calendar";
import { getEventTypeConfig } from "@/mock_datas/constants";
import { formatEventDate } from "@/helpers/utils";


interface Props {
  open: boolean;
  event: CalendarEvent | null;
  onEdit: (event: CalendarEvent) => void;
  onDelete: (id: string) => void;
  onClose: () => void;
}

export function EventDetailModal({
  open,
  event,
  onEdit,
  onDelete,
  onClose,
}: Props) {
  if (!event) return null;

  const { color, bgColor, label } = getEventTypeConfig(event.type);

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          {/* Type badge */}
          <Badge
            className="w-fit text-xs font-semibold mb-2 border-0"
            style={{ backgroundColor: bgColor, color }}
          >
            {label}
          </Badge>
          <DialogTitle className="text-xl leading-snug">
            {event.title}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-3 py-1">
          {/* Date */}
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <CalendarDays className="h-4 w-4 shrink-0" />
            <span>{formatEventDate(event.date)}</span>
          </div>

          {/* Description */}
          {event.description && (
            <div className="flex items-start gap-2 text-sm text-slate-600">
              <FileText className="h-4 w-4 shrink-0 mt-0.5" />
              <p className="leading-relaxed">{event.description}</p>
            </div>
          )}
        </div>

        <DialogFooter className="gap-2">
          <Button
            variant="outline"
            className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
            onClick={() => onDelete(event.id)}
          >
            Delete
          </Button>
          <Button
            onClick={() => onEdit(event)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Edit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
