'use client';

import { useState, useEffect } from 'react';

export default function PayrollSystem() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white/95 backdrop-blur-lg rounded-xl shadow-xl p-3 w-56 border border-gray-200/50">
      {/* Header with Albina Pay Logo */}
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-200/50">
        <div className="flex items-center gap-2">
          <img 
            src="/Image/Albina%20Pay%20Logo%20White%20Font.png" 
            alt="Albina Pay" 
            className="h-5 w-auto object-contain"
            style={{ filter: 'brightness(0) saturate(100%) invert(15%) sepia(95%) saturate(3847%) hue-rotate(202deg) brightness(95%) contrast(95%)' }}
          />
          <div>
            <div className="font-bold text-gray-900 text-xs">Payroll System</div>
            <div className="text-[9px] text-gray-500">Business Solutions</div>
          </div>
        </div>
      </div>

      {/* Employee List */}
      <div className="space-y-1.5 mb-2">
        <div className="flex items-center justify-between bg-gray-50 rounded p-1.5 border border-gray-200/50">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-[8px] font-bold text-white">JD</span>
            </div>
            <div>
              <div className="text-[8px] font-semibold text-gray-700">John Doe</div>
              <div className="text-[7px] text-gray-500">Developer</div>
            </div>
          </div>
          <div className="text-[9px] font-bold text-gray-900">$3,500</div>
        </div>

        <div className="flex items-center justify-between bg-gray-50 rounded p-1.5 border border-gray-200/50">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-[8px] font-bold text-white">JS</span>
            </div>
            <div>
              <div className="text-[8px] font-semibold text-gray-700">Jane Smith</div>
              <div className="text-[7px] text-gray-500">Designer</div>
            </div>
          </div>
          <div className="text-[9px] font-bold text-gray-900">$2,800</div>
        </div>

        <div className="flex items-center justify-between bg-gray-50 rounded p-1.5 border border-gray-200/50">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-[8px] font-bold text-white">MJ</span>
            </div>
            <div>
              <div className="text-[8px] font-semibold text-gray-700">Mike Johnson</div>
              <div className="text-[7px] text-gray-500">Manager</div>
            </div>
          </div>
          <div className="text-[9px] font-bold text-gray-900">$4,200</div>
        </div>
      </div>

      {/* Total Amount */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-2 mb-2">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-semibold text-white">Total Payroll</span>
          <span className="text-sm font-bold text-white">$10,500</span>
        </div>
      </div>

      {/* Status Messages */}
      {stage === 0 && (
        <div className="flex items-center justify-center gap-1.5 bg-orange-50 rounded-lg py-1.5 border border-orange-200/50">
          <div className="w-3 h-3 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-[9px] font-semibold text-orange-600">Processing payroll...</span>
        </div>
      )}

      {stage === 1 && (
        <div className="flex items-center justify-center gap-1.5 bg-blue-50 rounded-lg py-1.5 border border-blue-200/50">
          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <span className="text-[9px] font-bold text-blue-600">Sending payments...</span>
        </div>
      )}

      {stage === 2 && (
        <div className="flex items-center justify-center gap-1.5 bg-green-50 rounded-lg py-1.5 border border-green-200/50">
          <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-[9px] font-bold text-green-600">All Paid!</span>
        </div>
      )}

      {stage === 3 && (
        <div className="flex items-center justify-center gap-1.5 bg-purple-50 rounded-lg py-1.5 border border-purple-200/50">
          <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
            <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-[9px] font-bold text-purple-600">Receipts Saved</span>
        </div>
      )}
    </div>
  );
}