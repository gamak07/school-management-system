import { X } from "lucide-react";


interface TransferClassModalProps {
  currentClass: string;
  currentArm: string;
  onClose: () => void;
}

export default function TransferClassModal({ currentClass, currentArm, onClose }: TransferClassModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Transfer Class</h3>
          <button 
            onClick={onClose} 
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-sm text-gray-600 mb-4">
            Current class: <span className="font-medium text-gray-900">{currentClass} - {currentArm} Arm</span>
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">New Class</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent cursor-pointer">
                <option value="">Select class</option>
                <option value="JSS 1">JSS 1</option>
                <option value="JSS 2">JSS 2</option>
                <option value="JSS 3">JSS 3</option>
                <option value="SSS 1">SSS 1</option>
                <option value="SSS 2">SSS 2</option>
                <option value="SSS 3">SSS 3</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">New Arm</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent cursor-pointer">
                <option value="">Select arm</option>
                <option value="Gold">Gold</option>
                <option value="Blue">Blue</option>
              </select>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
          <button 
            onClick={onClose} 
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
          >
            Cancel
          </button>
          <button 
            onClick={onClose} // In real app, this would submit the form
            className="px-4 py-2 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap border-none"
          >
            Transfer Student
          </button>
        </div>
        
      </div>
    </div>
  );
}