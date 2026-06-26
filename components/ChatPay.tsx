'use client';

import { useState, useEffect } from 'react';

export default function ChatPay() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => (prev + 1) % 5);
    }, 3500);
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
            <div className="font-bold text-gray-900 text-xs">Chat + Pay</div>
            <div className="text-[9px] text-gray-500">Send money via chat</div>
          </div>
        </div>
      </div>

      {/* Chat Messages Container */}
      <div className="space-y-2 mb-2 bg-gray-50 rounded-lg p-2 max-h-48 overflow-hidden">
        
        {/* Stage 0: Regular Chat Messages */}
        {stage === 0 && (
          <>
            {/* Son's Message */}
            <div className="flex justify-start">
              <div className="bg-gray-200 rounded-lg rounded-tl-none p-1.5 max-w-[85%]">
                <div className="text-[8px] font-bold text-gray-700 mb-0.5">Michael (Son)</div>
                <p className="text-[9px] text-gray-600">Hey Mom! 👋 Need $300 for textbooks and semester fees. Can you help?</p>
              </div>
            </div>
            
            {/* Mom's Reply */}
            <div className="flex justify-end">
              <div className="bg-blue-500 rounded-lg rounded-tr-none p-1.5 max-w-[85%]">
                <p className="text-[9px] text-white">Of course honey! Sending now 💙</p>
              </div>
            </div>
          </>
        )}

        {/* Stage 1: Send Money Button Appears */}
        {stage === 1 && (
          <>
            <div className="flex justify-start">
              <div className="bg-gray-200 rounded-lg rounded-tl-none p-1.5 max-w-[85%]">
                <div className="text-[8px] font-bold text-gray-700 mb-0.5">Michael (Son)</div>
                <p className="text-[9px] text-gray-600">Hey Mom! 👋 Need $300 for textbooks and semester fees. Can you help?</p>
              </div>
            </div>
            
            <div className="flex justify-end">
              <div className="bg-blue-500 rounded-lg rounded-tr-none p-1.5 max-w-[85%]">
                <p className="text-[9px] text-white">Of course honey! Sending now 💙</p>
              </div>
            </div>

            {/* Send Money Button in Chat */}
            <div className="flex justify-start animate-pulse">
              <div className="bg-green-100 border-2 border-green-500 rounded-lg p-2 max-w-[90%]">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-[9px] font-bold text-green-700">Send Payment</span>
                </div>
                <div className="text-sm font-bold text-green-900">$300.00</div>
                <button className="mt-1 w-full bg-green-500 text-white text-[9px] font-bold py-1 rounded hover:bg-green-600 transition">
                  Send to Michael
                </button>
              </div>
            </div>
          </>
        )}

        {/* Stage 2: Password/PIN Input */}
        {stage === 2 && (
          <>
            <div className="flex justify-start">
              <div className="bg-gray-200 rounded-lg rounded-tl-none p-1.5 max-w-[85%]">
                <div className="text-[8px] font-bold text-gray-700 mb-0.5">Michael (Son)</div>
                <p className="text-[9px] text-gray-600">Hey Mom! 👋 Need $300 for textbooks</p>
              </div>
            </div>

            {/* Password Input Card */}
            <div className="flex justify-center my-1">
              <div className="bg-white border-2 border-blue-500 rounded-lg p-2 max-w-[95%] shadow-lg">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div className="w-4 h-4 bg-blue-500 rounded flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <span className="text-[9px] font-bold text-blue-700">Enter PIN</span>
                </div>
                <div className="flex gap-1 justify-center mb-1.5">
                  <div className="w-5 h-6 bg-gray-800 rounded"></div>
                  <div className="w-5 h-6 bg-gray-800 rounded"></div>
                  <div className="w-5 h-6 bg-gray-800 rounded"></div>
                  <div className="w-5 h-6 bg-gray-800 rounded"></div>
                </div>
                <div className="text-[8px] text-gray-500 text-center">Enter your 4-digit PIN</div>
              </div>
            </div>
          </>
        )}

        {/* Stage 3: Payment Sent Notification */}
        {stage === 3 && (
          <>
            <div className="flex justify-start">
              <div className="bg-gray-200 rounded-lg rounded-tl-none p-1.5 max-w-[85%]">
                <div className="text-[8px] font-bold text-gray-700 mb-0.5">Michael (Son)</div>
                <p className="text-[9px] text-gray-600">Hey Mom! 👋 Need $300 for textbooks</p>
              </div>
            </div>

            {/* Success Notification */}
            <div className="flex justify-center my-1">
              <div className="bg-green-500 rounded-lg p-2 max-w-[90%] shadow-lg animate-bounce">
                <div className="flex items-center gap-2 justify-center">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-white">Payment Sent!</div>
                    <div className="text-[8px] text-green-100">$300 to Michael</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Stage 4: Receipt Saved Notification */}
        {stage === 4 && (
          <>
            <div className="flex justify-start">
              <div className="bg-gray-200 rounded-lg rounded-tl-none p-1.5 max-w-[85%]">
                <div className="text-[8px] font-bold text-gray-700 mb-0.5">Michael (Son)</div>
                <p className="text-[9px] text-gray-600">Hey Mom! 👋 Need $300 for textbooks</p>
              </div>
            </div>

            {/* Receipt Saved Notification */}
            <div className="flex justify-center my-1">
              <div className="bg-blue-500 rounded-lg p-2 max-w-[90%] shadow-lg">
                <div className="flex items-center gap-2 justify-center">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-white">Receipt Saved!</div>
                    <div className="text-[8px] text-blue-100">Stored in Albina Vault</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Receipt Preview */}
            <div className="flex justify-center">
              <div className="bg-white border border-gray-300 rounded p-1.5 max-w-[85%]">
                <div className="text-[8px] font-bold text-gray-700 mb-1 text-center">Payment Receipt</div>
                <div className="text-[8px] text-gray-600">To: Michael</div>
                <div className="text-[8px] text-gray-600">Amount: $300.00</div>
                <div className="text-[8px] text-green-600 font-bold text-center mt-1">✓ Completed</div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center gap-1 mb-1">
        {[0, 1, 2, 3, 4].map((i) => (
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
        {stage === 0 && 'Chatting...'}
        {stage === 1 && 'Initiating payment...'}
        {stage === 2 && 'Secure authentication...'}
        {stage === 3 && 'Payment successful!'}
        {stage === 4 && 'Receipt saved automatically'}
      </div>
    </div>
  );
}