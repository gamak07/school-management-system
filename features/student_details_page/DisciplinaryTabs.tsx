import { ShieldCheck } from "lucide-react";

export default function DisciplinaryTab({ student, hasRecords }: { student: any, hasRecords?: boolean }) {
  const records = student?.disciplinary || [];
  const actualHasRecords = hasRecords !== undefined ? hasRecords : records.length > 0;

  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Disciplinary Records</h3>
      
      {!actualHasRecords ? (
        <div className="text-center py-12">
          <ShieldCheck className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 text-sm">No disciplinary records</p>
        </div>
      ) : (
        <div className="space-y-4">
          {records.map((record: any, index: number) => (
            <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-semibold text-red-900">{record.incident}</h4>
                <span className="text-xs text-red-700">{record.date}</span>
              </div>
              <p className="text-sm text-red-800 mb-2">Action Taken: <span className="font-medium">{record.actionTaken}</span></p>
              <p className="text-xs text-red-700 mb-2">{record.description}</p>
              <p className="text-xs text-red-600">Reported by: {record.reportedBy}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}