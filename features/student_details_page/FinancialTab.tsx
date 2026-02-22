import { AlertCircle } from "lucide-react";

export default function FinancialTab({ student }: { student: any }) {
  const totalFees = student?.performance?.totalFees || 0;
  const amountPaid = student?.performance?.amountPaid || 0;
  const feesOwed = student?.feesOwed || 0;
  
  // Calculate percentage safely
  const progressPercent = totalFees > 0 ? ((amountPaid / totalFees) * 100).toFixed(1) : 0;

  return (
    <div className="p-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Standing</h3>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">Total Fees</p>
              <p className="text-3xl font-bold text-gray-900">${totalFees}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Amount Paid</p>
              <p className="text-3xl font-bold text-green-600">${amountPaid}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Amount Owed</p>
              <p className="text-3xl font-bold text-orange-600">${feesOwed}</p>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Payment Progress</p>
              <p className="text-sm font-medium text-gray-900">{progressPercent}%</p>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full transition-all" style={{ width: `${progressPercent}%` }}></div>
            </div>
          </div>
          
          {feesOwed > 0 && (
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-orange-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-orange-900">Outstanding Balance</p>
                  <p className="text-xs text-orange-700 mt-1">
                    This student has an outstanding balance of ${feesOwed}. Please contact the guardian for payment.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}