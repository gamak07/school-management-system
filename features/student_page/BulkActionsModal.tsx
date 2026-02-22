"use client";

import { 
  X,
  ArrowUpCircle,
  MessageSquare,
  Mail,
  CreditCard,
  Archive,
  Trash2
} from "lucide-react";

import { Button } from "@/components/ui/button";


interface BulkActionsModalProps {
  selectedCount: number;
  onClose: () => void;
}

export default function BulkActionsModal({ selectedCount, onClose }: BulkActionsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Bulk Actions</h3>
            <p className="text-sm text-gray-600 mt-1">{selectedCount} students selected</p>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body / Action List */}
        <div className="p-6 space-y-2">
          
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors text-left cursor-pointer whitespace-nowrap group">
            <ArrowUpCircle className="text-blue-600 w-5 h-5" />
            <span className="text-sm font-medium text-gray-900 group-hover:text-blue-700">Promote to Next Class</span>
          </button>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors text-left cursor-pointer whitespace-nowrap group">
            <MessageSquare className="text-green-600 w-5 h-5" />
            <span className="text-sm font-medium text-gray-900 group-hover:text-green-700">Send SMS to Parents</span>
          </button>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors text-left cursor-pointer whitespace-nowrap group">
            <Mail className="text-purple-600 w-5 h-5" />
            <span className="text-sm font-medium text-gray-900 group-hover:text-purple-700">Send Email to Parents</span>
          </button>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors text-left cursor-pointer whitespace-nowrap group">
            <CreditCard className="text-orange-600 w-5 h-5" />
            <span className="text-sm font-medium text-gray-900 group-hover:text-orange-700">Generate ID Cards</span>
          </button>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors text-left cursor-pointer whitespace-nowrap group">
            <Archive className="text-gray-600 w-5 h-5" />
            <span className="text-sm font-medium text-gray-900 group-hover:text-gray-800">Archive Students</span>
          </button>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 transition-colors text-left cursor-pointer whitespace-nowrap group">
            <Trash2 className="text-red-600 w-5 h-5" />
            <span className="text-sm font-medium text-gray-900 group-hover:text-red-700">Delete Students</span>
          </button>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
          <Button 
            variant="ghost" 
            onClick={onClose}
            className="text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </Button>
        </div>

      </div>
    </div>
  );
}