import { X } from "lucide-react";

interface ChangeStatusModalProps {
  currentStatus: string;
  onClose: () => void;
}

export default function ChangeStatusModal({ currentStatus, onClose }: ChangeStatusModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Change Student Status</h3>
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
            Current status: <span className="font-medium text-gray-900">{currentStatus}</span>
          </p>
          
          <div className="space-y-2">
            {["Active", "Suspended", "Expelled", "Alumni"].map((statusOption) => (
              <button
                key={statusOption}
                onClick={() => {
                  // In the future, you'd trigger your API call here
                  console.log(`Status changed to ${statusOption}`);
                  onClose();
                }}
                className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 border border-gray-200 transition-colors cursor-pointer whitespace-nowrap"
              >
                <span className="text-sm font-medium text-gray-900">{statusOption}</span>
              </button>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}