/**
 * PayrollSystem.tsx
 * Albina Pay - Payroll System Animation Component
 * 
 * This animation simulates employees receiving payroll credit alerts
 * as the manager processes payments. Shows sequential notifications
 * with different employee names and amounts in Nigerian Naira.
 * 
 * Animation Flow:
 * 1. Processing payroll (loading state)
 * 2. First employee receives alert
 * 3. Second employee receives alert
 * 4. Third employee receives alert
 * 5. All paid confirmation
 * 
 * Author: Albina Tech Team
 * Last Updated: 2026
 */

'use client';

import { useState, useEffect } from 'react';

export default function PayrollSystem() {
  const [stage, setStage] = useState(0);

  // Employee payroll data (Nigerian names and salaries)
  const employees = [
    { name: 'Chidi Okafor', role: 'Developer', salary: '₦250,000' },
    { name: 'Amara Nwosu', role: 'Designer', salary: '₦180,000' },
    { name: 'Tunde Bakare', role: 'Manager', salary: '₦350,000' },
  ];

  useEffect(() => {
    // Cycle through payroll stages every 2.5 seconds
    const timer = setInterval(() => {
      setStage((prev) => (prev + 1) % 5);
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
            <div className="font-bold text-gray-900 text-xs">Payroll System</div>
            <div className="text-[9px] text-gray-500">Business Solutions</div>
          </div>
        </div>
      </div>

      {/* Payroll Status Container */}
      <div className="space-y-2 mb-2">
        
        {/* Stage 0: Processing Payroll */}
        {stage === 0 && (
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-200/50">
            <div className="flex items-center justify-center mb-2">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="text-center">
              <div className="text-[9px] font-bold text-gray-700 mb-1">Processing Payroll</div>
              <div className="text-[8px] text-gray-500">127 employees</div>
            </div>
            <div className="mt-2 flex items-center justify-center gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        )}

        {/* Stage 1: First Credit Alert */}
        {stage === 1 && (
          <div className="space-y-1.5">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-2 border border-green-200/50 animate-pulse">
              <div className="flex items-start gap-1.5">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-[8px] font-bold text-green-700">Albina Pay Credit Alert</div>
                  <div className="text-[8px] text-green-600 mt-0.5">
                    <span className="font-semibold">{employees[0].name}</span>
                  </div>
                  <div className="text-[7px] text-green-600">{employees[0].role}</div>
                  <div className="text-sm font-bold text-green-700 mt-1">{employees[0].salary}</div>
                  <div className="text-[7px] text-green-500 mt-0.5">Salary credited successfully</div>
                </div>
              </div>
            </div>
            <div className="text-[7px] text-gray-500 text-center">Processing next payment...</div>
          </div>
        )}

        {/* Stage 2: Second Credit Alert */}
        {stage === 2 && (
          <div className="space-y-1.5">
            {/* First Employee - Already Paid */}
            <div className="bg-gray-50 rounded-lg p-2 border border-gray-200/50 opacity-60">
              <div className="flex items-start gap-1.5">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-[7px] font-bold text-gray-700">Paid: {employees[0].name}</div>
                  <div className="text-[8px] font-bold text-gray-700">{employees[0].salary}</div>
                </div>
              </div>
            </div>
            
            {/* Second Employee - New Alert */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-2 border border-green-200/50 animate-pulse">
              <div className="flex items-start gap-1.5">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-[8px] font-bold text-green-700">Albina Pay Credit Alert</div>
                  <div className="text-[8px] text-green-600 mt-0.5">
                    <span className="font-semibold">{employees[1].name}</span>
                  </div>
                  <div className="text-[7px] text-green-600">{employees[1].role}</div>
                  <div className="text-sm font-bold text-green-700 mt-1">{employees[1].salary}</div>
                  <div className="text-[7px] text-green-500 mt-0.5">Salary credited successfully</div>
                </div>
              </div>
            </div>
            <div className="text-[7px] text-gray-500 text-center">Processing next payment...</div>
          </div>
        )}

        {/* Stage 3: Third Credit Alert */}
        {stage === 3 && (
          <div className="space-y-1.5">
            {/* First Two Employees - Already Paid */}
            <div className="bg-gray-50 rounded-lg p-1.5 border border-gray-200/50 opacity-60">
              <div className="flex items-start gap-1">
                <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-[7px] font-bold text-gray-700">{employees[0].name}</div>
                  <div className="text-[8px] font-bold text-gray-700">{employees[0].salary}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-1.5 border border-gray-200/50 opacity-60">
              <div className="flex items-start gap-1">
                <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-[7px] font-bold text-gray-700">{employees[1].name}</div>
                  <div className="text-[8px] font-bold text-gray-700">{employees[1].salary}</div>
                </div>
              </div>
            </div>
            
            {/* Third Employee - New Alert */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-2 border border-green-200/50 animate-pulse">
              <div className="flex items-start gap-1.5">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-[8px] font-bold text-green-700">Albina Pay Credit Alert</div>
                  <div className="text-[8px] text-green-600 mt-0.5">
                    <span className="font-semibold">{employees[2].name}</span>
                  </div>
                  <div className="text-[7px] text-green-600">{employees[2].role}</div>
                  <div className="text-sm font-bold text-green-700 mt-1">{employees[2].salary}</div>
                  <div className="text-[7px] text-green-500 mt-0.5">Salary credited successfully</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stage 4: All Paid Confirmation */}
        {stage === 4 && (
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-3 border border-green-400/50">
            <div className="flex items-center justify-center mb-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div className="text-center">
              <div className="text-[10px] font-bold text-white mb-1">All Payments Complete!</div>
              <div className="text-[8px] text-green-100">127 employees paid</div>
              <div className="text-[8px] text-green-100 mt-1">Total: 2,480,000</div>
            </div>
            <div className="mt-2 flex items-center justify-center gap-1">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-[8px] font-bold text-white">Receipts Saved</span>
            </div>
          </div>
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
        {stage === 0 && 'Processing payroll...'}
        {stage === 1 && 'Sending credits to employees...'}
        {stage === 2 && 'Payments in progress...'}
        {stage === 3 && 'Finalizing payments...'}
        {stage === 4 && 'All salaries credited!'}
      </div>
    </div>
  );
}