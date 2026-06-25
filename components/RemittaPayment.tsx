'use client';

export default function RemittaPayment() {
  return (
    <div className="bg-white/95 backdrop-blur-lg rounded-xl shadow-xl p-3 w-64 border border-white/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-gray-200/50">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 bg-gradient-to-br from-orange-500 to-orange-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-[10px]">R</span>
          </div>
          <div>
            <div className="font-bold text-gray-900 text-xs">Remita</div>
            <div className="text-[8px] text-gray-500">Payment Services</div>
          </div>
        </div>
      </div>

      {/* Service Options */}
      <div className="mb-2">
        <div className="text-[10px] text-gray-500 mb-1">Quick Services</div>
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 bg-orange-50 rounded p-1.5 border border-orange-200/50">
            <div className="w-4 h-4 bg-orange-500 rounded flex items-center justify-center">
              <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-[9px] font-semibold text-orange-700">Pay RRR Invoice</span>
          </div>
          <div className="flex items-center gap-1.5 bg-gray-50 rounded p-1.5 border border-gray-200/50">
            <div className="w-4 h-4 bg-[#2C4A73] rounded flex items-center justify-center">
              <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className="text-[9px] font-semibold text-gray-700">Generate RRR</span>
          </div>
        </div>
      </div>

      {/* Payment Details */}
      <div className="mb-2">
        <div className="text-[10px] text-gray-500 mb-1">School Fees Payment</div>
        <div className="bg-gradient-to-r from-[#2C4A73] to-[#1a3a5c] rounded p-2 text-white">
          <div className="text-[9px] opacity-80 mb-0.5">University of Lagos</div>
          <div className="text-sm font-bold">₦450,000.00</div>
        </div>
      </div>

      {/* Success Status */}
      <div className="flex items-center justify-center gap-1 bg-green-50 rounded py-1.5 border border-green-200/50">
        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span className="text-[10px] font-bold text-green-600">Payment Successful!</span>
      </div>
    </div>
  );
}
