import { FileText, ClipboardList, BookHeart, CheckCircle2, XCircle } from "lucide-react";

export default function DocumentsTab({ student }: { student: any }) {
  const docs = student?.documents || { birthCertificate: false, transcript: false, medicalReport: false };

  // Helper for rendering status
  const DocStatus = ({ isUploaded }: { isUploaded: boolean }) => {
    if (isUploaded) {
      return (
        <span className="flex items-center gap-1 text-xs text-green-600">
          <CheckCircle2 className="w-4 h-4" /> Uploaded
        </span>
      );
    }
    return (
      <span className="flex items-center gap-1 text-xs text-red-500">
        <XCircle className="w-4 h-4" /> Missing
      </span>
    );
  };

  return (
    <div className="p-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Documents</h3>
        <div className="space-y-3">
          
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-amber-600" />
              <div>
                <p className="text-sm font-medium text-gray-900">Birth Certificate</p>
                <p className="text-xs text-gray-600">Required document</p>
              </div>
            </div>
            <DocStatus isUploaded={docs.birthCertificate} />
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <ClipboardList className="w-6 h-6 text-teal-600" />
              <div>
                <p className="text-sm font-medium text-gray-900">Previous School Transcript</p>
                <p className="text-xs text-gray-600">Required document</p>
              </div>
            </div>
            <DocStatus isUploaded={docs.transcript} />
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <BookHeart className="w-6 h-6 text-red-600" />
              <div>
                <p className="text-sm font-medium text-gray-900">Medical Report</p>
                <p className="text-xs text-gray-600">Required document</p>
              </div>
            </div>
            <DocStatus isUploaded={docs.medicalReport} />
          </div>

        </div>
      </div>
    </div>
  );
}