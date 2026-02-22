import { ArrowRight, History } from "lucide-react";

export default function AuditTab({ student }: { student: any }) {
  const logs = student?.auditLogs || [];

  return (
    <div className="p-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Audit Log</h3>
        <p className="text-xs text-gray-600 mb-4">Track all changes made to this student's record</p>
        
        {logs.length === 0 ? (
          <div className="text-center py-8">
            <History className="w-10 h-10 text-gray-300 mx-auto mb-2" />
            <p className="text-sm text-gray-500">No recent changes logged.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {logs.map((log: any, index: number) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <p className="text-sm font-medium text-gray-900">{log.action}</p>
                  <span className="text-xs text-gray-600">{log.date}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-600 mb-2">
                  <span>Previous: <span className="font-medium text-red-600">{log.prev}</span></span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <span>New: <span className="font-medium text-green-600">{log.new}</span></span>
                </div>
                <p className="text-xs text-gray-500">Modified by: {log.by}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}