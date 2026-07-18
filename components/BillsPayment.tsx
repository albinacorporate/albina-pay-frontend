/**
 * BillsPayment.tsx
 * Albina Pay - Bills Payment Animation Component
 * 
 * This animation simulates a user paying various Nigerian bills
 * including electricity, cable TV, airtime, and internet.
 * Shows the complete flow from bill selection to payment confirmation.
 * 
 * Animation Flow:
 * 1. Select bill category (Electricity, DSTV, Airtime, Internet)
 * 2. Enter bill details and amount
 * 3. Confirm payment with PIN
 * 4. Success receipt
 * 
 * Author: Albina Tech Team
 * Last Updated: 2026
 */

'use client';

import { useState, useEffect } from 'react';

export default function BillsPayment() {
  const [stage, setStage] = useState(0);
  const [currentBill, setCurrentBill] = useState(0);

  // Nigerian bill categories
  const bills = [
    { name: 'EKEDC Electricity', icon: '', amount: '₦15,000', category: 'Electricity' },
    { name: 'DSTV Premium', icon: '📺', amount: '₦24,500', category: 'Cable TV' },
    { name: 'MTN Airtime', icon: '📱', amount: '₦2,000', category: 'Airtime' },
    { name: 'Spectranet 4G', icon: '', amount: '₦10,000', category: 'Internet' },
  ];

  useEffect(() => {
    // Cycle through stages every 2.5 seconds
    const timer = setInterval(() => {
      setStage((prev) => {
        if (prev === 3) {
          // Move to next bill after success
          setCurrentBill((billIdx) => (billIdx + 1) % bills.length);
          return 0;
        }
        return prev + 1;
      });
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const bill = bills[currentBill];

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
            <div className="font-bold text-gray-900 text-xs">Bills Payment</div>
            <div className="text-[9px] text-gray-500">Quick & Secure</div>
          </div>
        </div>
      </div>

      {/* Bill Payment Container */}
      <div className="space-y-2 mb-2">
        
        {/* Stage 0: Select Bill Category */}
        {stage === 0 && (
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-2 border border-blue-200/50">
            <div className="text-[8px] font-bold text-gray-700 mb-1.5">Select Bill Category</div>
            <div className="grid grid-cols-2 gap-1">
              {bills.map((b, idx) => (
                <div 
                  key={idx}
                  className={`p-1.5 rounded border text-center transition-all ${
                    idx === currentBill 
                      ? 'bg-blue-500 border-blue-600 text-white' 
                      : 'bg-white border-gray-200 text-gray-600'
                  }`}
                >
                  <div className="text-[10px] mb-0.5">{b.icon}</div>
                  <div className="text-[7px] font-semibold truncate">{b.category}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stage 1: Enter Bill Details */}
        {stage === 1 && (
          <div className="bg-white rounded-lg p-2 border border-gray-200/50">
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-[12px]">
                {bill.icon}
              </div>
              <div>
                <div className="text-[8px] font-bold text-gray-700">{bill.name}</div>
                <div className="text-[7px] text-gray-500">{bill.category}</div>
              </div>
            </div>
            
            <div className="space-y-1.5">
              <div>
                <div className="text-[7px] text-gray-500 mb-0.5">Meter/Account Number</div>
                <div className="bg-gray-50 rounded p-1.5 border border-gray-200/50">
                  <div className="text-[8px] font-mono text-gray-700">4810-2938-7761</div>
                </div>
              </div>
              
              <div>
                <div className="text-[7px] text-gray-500 mb-0.5">Amount</div>
                <div className="bg-blue-50 rounded p-1.5 border border-blue-200/50">
                  <div className="text-[10px] font-bold text-blue-700">{bill.amount}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stage 2: Confirm Payment with PIN */}
        {stage === 2 && (
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-2 border border-purple-200/50">
            <div className="text-center mb-2">
              <div className="text-[8px] font-bold text-gray-700">Confirm Payment</div>
              <div className="text-[10px] font-bold text-purple-700 mt-0.5">{bill.amount}</div>
              <div className="text-[7px] text-gray-500">to {bill.name}</div>
            </div>
            
            <div className="flex gap-1 justify-center mb-1.5">
              <div className="w-5 h-6 bg-gray-800 rounded"></div>
              <div className="w-5 h-6 bg-gray-800 rounded"></div>
              <div className="w-5 h-6 bg-gray-800 rounded"></div>
              <div className="w-5 h-6 bg-gray-800 rounded"></div>
            </div>
            <div className="text-[7px] text-gray-500 text-center">Enter your 4-digit PIN</div>
          </div>
        )}

        {/* Stage 3: Success Receipt */}
        {stage === 3 && (
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-2 border border-green-400/50">
            <div className="flex items-center justify-center mb-1.5">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div className="text-center">
              <div className="text-[9px] font-bold text-white">Payment Successful!</div>
              <div className="text-[8px] text-green-100 mt-0.5">{bill.name}</div>
              <div className="text-[10px] font-bold text-white mt-0.5">{bill.amount}</div>
              <div className="text-[7px] text-green-100 mt-1">Transaction ID: AP-{Date.now().toString().slice(-8)}</div>
            </div>
            <div className="mt-1.5 flex items-center justify-center gap-1 bg-white/20 rounded py-1">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[7px] font-bold text-white">Saved to Albina Vault</span>
            </div>
          </div>
        )}
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center gap-1 mb-1">
        {[0, 1, 2, 3].map((i) => (
          <div 
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === stage ? 'bg-green-500 w-3' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Status Text */}
      <div className="text-[8px] text-gray-500 text-center font-semibold">
        {stage === 0 && 'Select bill category...'}
        {stage === 1 && 'Enter bill details...'}
        {stage === 2 && 'Confirm with PIN...'}
        {stage === 3 && 'Payment successful!'}
      </div>
    </div>
  );
}