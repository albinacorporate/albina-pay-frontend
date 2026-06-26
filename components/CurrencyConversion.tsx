'use client';

import { useState, useEffect } from 'react';

export default function CurrencyConversion() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stage, setStage] = useState(0);

  // Currency pairs to cycle through
  const conversions = [
    { from: 'NGN', to: 'USD', fromSymbol: '₦', toSymbol: '$', amount: '500,000', converted: '320.51', rate: '1,560.00' },
    { from: 'NGN', to: 'EUR', fromSymbol: '₦', toSymbol: '€', amount: '500,000', converted: '294.12', rate: '1,700.00' },
    { from: 'NGN', to: 'GBP', fromSymbol: '₦', toSymbol: '£', amount: '500,000', converted: '256.41', rate: '1,950.00' },
    { from: 'GHS', to: 'NGN', fromSymbol: '₵', toSymbol: '₦', amount: '1,000', converted: '130,000', rate: '130.00' },
  ];

  const current = conversions[currentIndex];

  useEffect(() => {
    // Cycle through currencies every 2.5 seconds
    const currencyTimer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % conversions.length);
    }, 2500);

    // Cycle through status stages every 3 seconds
    const stageTimer = setInterval(() => {
      setStage((prev) => (prev + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(currencyTimer);
      clearInterval(stageTimer);
    };
  }, []);

  return (
    <div className="bg-white/95 backdrop-blur-lg rounded-xl shadow-xl p-3 w-56 border border-gray-200/50 transition-all duration-500">
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
            <div className="font-bold text-gray-900 text-xs">Convert Currency</div>
            <div className="text-[9px] text-gray-500">Live Exchange Rate</div>
          </div>
        </div>
      </div>

      {/* From Currency */}
      <div className="mb-2 transition-all duration-500">
        <div className="text-[9px] text-gray-500 mb-1 font-semibold">From</div>
        <div className="bg-gray-50 rounded-lg p-2 border border-gray-200/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-[9px] font-bold text-green-700">{current.fromSymbol}</span>
              </div>
              <span className="text-[10px] font-semibold text-gray-700">{current.from}</span>
            </div>
            <span className="text-xs font-bold text-gray-900">{current.fromSymbol}{current.amount}</span>
          </div>
        </div>
      </div>

      {/* Swap Icon */}
      <div className="flex justify-center -my-1 relative z-10">
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* To Currency */}
      <div className="mb-2 transition-all duration-500">
        <div className="text-[9px] text-gray-500 mb-1 font-semibold">To</div>
        <div className="bg-green-50 rounded-lg p-2 border border-green-200/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-[9px] font-bold text-blue-700">{current.toSymbol}</span>
              </div>
              <span className="text-[10px] font-semibold text-gray-700">{current.to}</span>
            </div>
            <span className="text-xs font-bold text-green-700">{current.toSymbol}{current.converted}</span>
          </div>
        </div>
      </div>

      {/* Exchange Rate */}
      <div className="bg-blue-50 rounded-lg p-1.5 mb-2 border border-blue-200/50 transition-all duration-500">
        <div className="text-[9px] text-blue-700 font-semibold text-center">
          Rate: 1 {current.to} = {current.fromSymbol}{current.rate}
        </div>
      </div>

      {/* Status Messages */}
      {stage === 0 && (
        <div className="flex items-center justify-center gap-1.5 bg-orange-50 rounded-lg py-1.5 border border-orange-200/50">
          <div className="w-3 h-3 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-[9px] font-semibold text-orange-600">Calculating rate...</span>
        </div>
      )}

      {stage === 1 && (
        <div className="flex items-center justify-center gap-1.5 bg-green-50 rounded-lg py-1.5 border border-green-200/50">
          <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-[9px] font-bold text-green-600">Conversion Ready!</span>
        </div>
      )}

      {stage === 2 && (
        <div className="flex items-center justify-center gap-1.5 bg-blue-50 rounded-lg py-1.5 border border-blue-200/50">
          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <span className="text-[9px] font-bold text-blue-600">Instant Transfer</span>
        </div>
      )}
    </div>
  );
}