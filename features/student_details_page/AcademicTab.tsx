export default function AcademicTab({ student }: { student: any }) {
  const history = student?.academicHistory || [];

  return (
    <div className="p-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Academic Performance History</h3>
        
        {history.length === 0 ? (
          <p className="text-sm text-gray-500">No academic history available.</p>
        ) : (
          <div className="space-y-4">
            {/* Render Term Cards */}
            {history.map((termRecord: any, index: number) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-gray-900">{termRecord.term}</h4>
                  <span className="text-xs text-gray-600">{student.class}</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-gray-600">Average Score</p>
                    <p className="text-lg font-bold text-teal-600">{termRecord.average}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Position</p>
                    <p className="text-lg font-bold text-gray-900">{termRecord.position}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Out of</p>
                    <p className="text-lg font-bold text-gray-900">{termRecord.outOf}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Render Performance Trend Chart */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 mt-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Performance Trend</h4>
              <div className="h-48 flex items-end justify-around gap-4">
                {history.map((termRecord: any, index: number) => {
                  // Extract the numeric value from the percentage string (e.g., "85.5%" -> 85.5)
                  const heightVal = termRecord.average.replace('%', '');
                  const label = termRecord.term.split(' ')[0]; // Gets "First", "Second", etc.
                  
                  return (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-teal-500 rounded-t-lg transition-all hover:bg-teal-600" 
                        style={{ height: `${heightVal}%` }}
                      ></div>
                      <p className="text-xs text-gray-600 mt-2 text-center">{label}</p>
                      <p className="text-xs font-medium text-gray-900">{termRecord.average}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}