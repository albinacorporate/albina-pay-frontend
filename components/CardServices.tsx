/**
 * CardServices.tsx
 * Albina Pay - Card Services Animation Component
 * 
 * This animation simulates virtual and physical card management
 * including card creation, transaction processing, and security features.
 * 
 * Animation Flow:
 * 1. Card creation/selection
 * 2. Card details display
 * 3. Transaction processing
 * 4. Card security (lock/unlock)
 * 
 * Author: Albina Tech Team
 * Last Updated: 2026
 */

'use client';

import { useState, useEffect } from 'react';

export default function CardServices() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Cycle through stages every 2.5 seconds
    const timer = setInterval(() => {
      setStage((prev) => (prev + 1) % 4);
    }, 2500);
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
            <div className="font-bold text-gray-900 text-xs">Card Services</div>
            <div className="text-[9px] text-gray-500">Virtual & Physical</div>
          </div>
        </div>
      </div>

      {/* Card Services Container */}
      <div className="space-y-2 mb-2">
        
        {/* Stage 0: Card Creation */}
        {stage === 0 && (
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-3 text-white">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[8px] font-bold">Albina Pay Card</div>
              <div className="text-[8px] font-bold">VIRTUAL</div>
            </div>
            <div className="text-[10px] font-mono mb-2 tracking-wider">
              **** **** **** 4829
            </div>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-[7px] opacity-80">Card Holder</div>
                <div className="text-[8px] font-bold">CHIDI OKAFOR</div>
              </div>
              <div>
                <div className="text-[7px] opacity-80">Expires</div>
                <div className="text-[8px] font-bold">12/28</div>
              </div>
              <div className="text-[12px] font-bold italic">VISA</div>
            </div>
            <div className="mt-2 flex items-center justify-center gap-1 bg-white/20 rounded py-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-[7px] font-bold">Card Created Successfully</span>
            </div>
          </div>
        )}

        {/* Stage 1: Card Details & Balance */}
        {stage === 1 && (
          <div className="bg-white rounded-lg p-2 border border-gray-200/50">
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded flex items-center justify-center">
                <span className="text-[8px] font-bold text-white">💳</span>
              </div>
              <div>
                <div className="text-[8px] font-bold text-gray-700">Card Balance</div>
                <div className="text-[7px] text-gray-500">**** 4829</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded p-2 mb-2 border border-green-200/50">
              <div className="text-[7px] text-gray-500">Available Balance</div>
              <div className="text-[12px] font-bold text-green-700">₦485,250.00</div>
            </div>
            
            <div className="grid grid-cols-2 gap-1">
              <button className="bg-blue-500 text-white text-[7px] font-bold py-1 rounded hover:bg-blue-600 transition">
                Fund Card
              </button>
              <button className="bg-gray-200 text-gray-700 text-[7px] font-bold py-1 rounded hover:bg-gray-300 transition">
                View Details
              </button>
            </div>
          </div>
        )}

        {/* Stage 2: Transaction Processing */}
        {stage === 2 && (
          <div className="bg-white rounded-lg p-2 border border-gray-200/50">
            <div className="text-[8px] font-bold text-gray-700 mb-1.5">Recent Transaction</div>
            
            <div className="bg-gray-50 rounded p-1.5 border border-gray-200/50 mb-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 bg-orange-100 rounded flex items-center justify-center text-[10px]">
                    🛒
                  </div>
                  <div>
                    <div className="text-[7px] font-bold text-gray-700">Jumia Online</div>
                    <div className="text-[6px] text-gray-500">Shopping</div>
                  </div>
                </div>
                <div className="text-[9px] font-bold text-red-600">-₦45,000</div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded p-1.5 border border-blue-200/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[7px] font-bold text-blue-700">Processing...</div>
                    <div className="text-[6px] text-blue-600">Card transaction</div>
                  </div>
                </div>
                <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          </div>
        )}

        {/* Stage 3: Card Security (Lock/Unlock) */}
        {stage === 3 && (
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-2 border border-red-200/50">
            <div className="flex items-center justify-center mb-2">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            <div className="text-center mb-2">
              <div className="text-[9px] font-bold text-red-700">Card Locked</div>
              <div className="text-[7px] text-red-600">Your card is secured</div>
            </div>
            
            <button className="w-full bg-red-500 text-white text-[8px] font-bold py-1.5 rounded hover:bg-red-600 transition flex items-center justify-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
              Unlock Card
            </button>
            
            <div className="mt-1.5 text-[7px] text-gray-500 text-center">
              Card locked at 2:45 PM today
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
              i === stage ? 'bg-indigo-500 w-3' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Status Text */}
      <div className="text-[8px] text-gray-500 text-center font-semibold">
        {stage === 0 && 'Creating virtual card...'}
        {stage === 1 && 'Viewing card balance...'}
        {stage === 2 && 'Processing transaction...'}
        {stage === 3 && 'Card security active!'}
      </div>
    </div>
  );
}