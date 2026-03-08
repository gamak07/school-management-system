"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";

interface AddStaffSuccessModalProps {
  open: boolean;
  staffName: string;
  onClose: () => void;
}

export default function AddStaffSuccessModal({
  open,
  staffName,
  onClose,
}: AddStaffSuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="p-0 gap-0 max-w-md rounded-xl"
      >
        <DialogTitle className="sr-only">Invitation Sent</DialogTitle>

        <div className="px-6 py-10 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-teal-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Invitation Sent!
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            An onboarding email has been sent to <strong>{staffName}</strong>.
            They will receive login credentials and next steps shortly.
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
