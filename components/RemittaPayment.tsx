'use client';

import { useState, useEffect } from 'react';

export default function RemittaPayment() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

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

      {/* Quick Services */}
      <div className="mb-2">
        <div className="text-[10px] text-gray-500 mb-1 font-semibold">Quick Services</div>
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 bg-orange-50 rounded p-1.5 border border-orange-200/50">
            <div className="w-4 h-4 bg-orange-500 rounded flex items-center justify-center flex-shrink-0">
              <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-[9px] font-semibold text-orange-700">Pay RRR Invoice</span>
          </div>
          <div className="flex items-center gap-1.5 bg-gray-50 rounded p-1.5 border border-gray-200/50">
            <div className="w-4 h-4 bg-[#2C4A73] rounded flex items-center justify-center flex-shrink-0">
              <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span className="text-[9px] font-semibold text-gray-700">Pay Biller</span>
          </div>
          <div className="flex items-center gap-1.5 bg-gray-50 rounded p-1.5 border border-gray-200/50">
            <div className="w-4 h-4 bg-blue-500 rounded flex items-center justify-center flex-shrink-0">
              <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-[9px] font-semibold text-gray-700">Resend Receipt</span>
          </div>
        </div>
      </div>

      {/* Payment Details */}
      <div className="mb-2">
        <div className="text-[10px] text-gray-500 mb-0.5 font-semibold">School Fees Payment</div>
        <div className="bg-gradient-to-r from-[#2C4A73] to-[#1a3a5c] rounded p-2 text-white">
          <div className="text-[9px] opacity-80 mb-0.5">University of Lagos</div>
          <div className="text-sm font-bold">₦450,000.00</div>
        </div>
      </div>

      {/* Status Messages */}
      {stage === 0 && (
        <div className="flex items-center justify-center gap-1.5 bg-orange-50 rounded py-1.5 border border-orange-200/50">
          <div className="w-3.5 h-3.5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-[9px] font-semibold text-orange-600">Processing...</span>
        </div>
      )}

      {stage === 1 && (
        <div className="flex items-center justify-center gap-1.5 bg-green-50 rounded py-1.5 border border-green-200/50">
          <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-[9px] font-bold text-green-600">Payment Successful!</span>
        </div>
      )}

      {stage === 2 && (
        <div className="flex items-center justify-center gap-1.5 bg-blue-50 rounded py-1.5 border border-blue-200/50">
          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-[9px] font-bold text-blue-600">Saved to Albina Vault!</span>
        </div>
      )}

      {stage === 3 && (
        <div className="flex items-center justify-center gap-1.5 bg-purple-50 rounded py-1.5 border border-purple-200/50">
          <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
            <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <span className="text-[9px] font-bold text-purple-600">Invoice Secured</span>
        </div>
      )}
    </div>
  );
}