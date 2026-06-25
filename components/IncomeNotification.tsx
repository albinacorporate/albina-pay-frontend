'use client';

import { useState, useEffect } from 'react';

export default function IncomeNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [amounts] = useState([
    { amount: 100000, from: 'Chinedu Okafor' },
    { amount: 75000, from: 'Amara Nwosu' },
    { amount: 150000, from: 'Tunde Bakare' },
    { amount: 50000, from: 'Ngozi Eze' },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const showNotification = () => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 4000);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % amounts.length);
      }, 5000);
    };

    const timer = setTimeout(showNotification, 1500);
    const interval = setInterval(showNotification, 6000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [amounts]);

  const notification = amounts[currentIndex];

  return (
    <div
      className={`absolute top-3 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}
    >
      {/* iPhone-style Notification - More Transparent & Smaller */}
      <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-xl shadow-lg p-3 min-w-[260px]">
        <div className="flex items-start gap-2.5">
          {/* Icon with Gradient - Smaller */}
          <div className="w-8 h-8 bg-gradient-to-br from-green-400/90 to-green-600/90 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          {/* Content - Smaller text sizes */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-[10px] font-semibold text-gray-700">Albina Pay</span>
              <span className="text-[9px] text-gray-500">now</span>
            </div>
            <div className="text-xs font-semibold text-gray-800 mb-0.5">
              Payment Received
            </div>
            <div className="text-base font-bold text-gray-900 mb-0.5">
              ₦{notification.amount.toLocaleString()}
            </div>
            <div className="text-[10px] text-gray-600">
              From: <span className="font-medium">{notification.from}</span>
            </div>
          </div>
        </div>

        {/* Progress Bar - Thinner */}
        <div className="mt-2.5 h-0.5 bg-gray-200/40 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-green-400/80 to-green-600/80 rounded-full animate-shrink"></div>
        </div>
      </div>
    </div>
  );
}