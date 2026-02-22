export default function AttendanceTab({ student }: { student: any }) {
  const attendance = student?.attendanceSummary || { present: 0, absent: 0, late: 0, excused: 0 };

  return (
    <div className="p-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Attendance Summary</h3>
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Current Academic Year</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-gray-600">Present</p>
                <p className="text-lg font-bold text-green-600">{attendance.present} days</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Absent</p>
                <p className="text-lg font-bold text-red-600">{attendance.absent} days</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Late</p>
                <p className="text-lg font-bold text-orange-600">{attendance.late} days</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Excused</p>
                <p className="text-lg font-bold text-amber-600">{attendance.excused} days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}