'use client';

import { useState, useEffect } from 'react';

export default function AnimatedTransaction() {
  const [stage, setStage] = useState(0);
  const [balance, setBalance] = useState(125450);

  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (stage === 2) {
      const interval = setInterval(() => {
        setBalance((prev) => {
          if (prev <= 120450) {
            clearInterval(interval);
            return 120450;
          }
          return prev - 1000;
        });
      }, 100);
      return () => clearInterval(interval);
    } else {
      setBalance(125450);
    }
  }, [stage]);

  return (
    <div className="bg-white/95 backdrop-blur-lg rounded-xl shadow-xl p-3 w-64 border border-white/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-gray-200/50">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 bg-[#2C4A73] rounded flex items-center justify-center">
            <span className="text-white font-bold text-[10px]">A</span>
          </div>
          <div className="font-bold text-gray-900 text-xs">Albina Pay</div>
        </div>
      </div>

      {/* Transfer Type - Local & International */}
      <div className="flex gap-1 mb-2">
        <div className="flex-1 bg-[#2C4A73] text-white rounded px-2 py-1 text-[10px] font-semibold flex items-center gap-1">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Local (NGN)
        </div>
        <div className="flex-1 bg-gray-100 text-gray-600 rounded px-2 py-1 text-[10px] font-semibold flex items-center gap-1">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          Intl (USD)
        </div>
      </div>

      {/* Balance */}
      <div className="mb-2">
        <div className="text-[10px] text-gray-500 mb-0.5">Balance</div>
        <div className="text-sm font-bold text-gray-900">
          ₦{balance.toLocaleString()}
        </div>
      </div>

      {/* Send To */}
      <div className="mb-2">
        <div className="text-[10px] text-gray-500 mb-1">Send To</div>
        <div className="flex items-center gap-1.5 bg-gray-50 rounded p-1.5 border border-gray-200/50">
          <div className="w-5 h-5 bg-[#2C4A73]/10 rounded-full flex items-center justify-center">
            <span className="text-[#2C4A73] font-bold text-[8px]">JW</span>
          </div>
          <div className="flex-1">
            <div className="text-[10px] font-semibold text-gray-900">James Wilson</div>
            <div className="text-[8px] text-gray-500">0011357718</div>
          </div>
        </div>
      </div>

      {/* Amount */}
      <div className="mb-2">
        <div className="text-[10px] text-gray-500 mb-1">Amount</div>
        <div className="bg-[#2C4A73] rounded p-2 text-white">
          <div className="text-sm font-bold">₦5,000.00</div>
        </div>
      </div>

      {/* Status */}
      <div className="mt-2">
        {stage === 0 && (
          <div className="flex items-center justify-center gap-1 bg-orange-50 rounded py-1.5 border border-orange-200/50">
            <div className="w-3 h-3 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-[10px] font-semibold text-orange-600">Checking...</span>
          </div>
        )}

        {stage === 1 && (
          <div className="space-y-1">
            <div className="flex items-center gap-1 bg-green-50 rounded py-1.5 border border-green-200/50">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-[10px] font-semibold text-green-600">Confirmed</span>
            </div>
          </div>
        )}

        {stage === 2 && (
          <div className="flex items-center justify-center gap-1 bg-green-50 rounded py-1.5 border border-green-200/50">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center animate-scale-in">
              <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-green-600">Success!</span>
          </div>
        )}
      </div>
    </div>
  );
}