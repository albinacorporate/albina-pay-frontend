'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden py-12 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reduced mobile gap to bring sections closer, kept desktop gap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          
          {/* LEFT SIDE: Image + Trust Badge + CTA Buttons (Mobile Only) */}
          <div className="order-2 lg:order-1 flex flex-col gap-6">
            
            {/* Image - Shifted upwards on mobile only */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100 -mt-12 lg:mt-0">
              <img 
                src="/Image/hero-image-corrected.jpg" 
                alt="Business professional using Albina Pay" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Trust Badge - Centered on mobile, left-aligned on desktop */}
            <div className="flex justify-center lg:justify-start w-full">
              <div className="bg-[#0A192F]/90 backdrop-blur-sm rounded-lg px-6 py-4 shadow-lg w-fit max-w-md">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-sm text-gray-200 font-medium text-center lg:text-left">
                    Trusted and widely used by students, traders and small scale businesses
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Mobile Only (Centered with perfect gap) */}
            <div className="flex flex-row justify-center items-center gap-4 lg:hidden mt-6 w-full px-2">
              <Link 
                href="/signup" 
                className="inline-flex items-center justify-center gap-1.5 bg-[#2C4A73] text-white px-5 py-3 rounded-full font-bold hover:bg-[#1e3a5f] transition-all shadow-lg text-[13px] sm:text-sm whitespace-nowrap"
              >
                Create free account
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-white text-gray-700 px-5 py-3 rounded-full font-medium hover:bg-gray-50 transition-all border border-gray-300 text-[13px] sm:text-sm whitespace-nowrap"
              >
                Contact Sales
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: Content (Desktop view remains exactly the same) */}
          <div className="order-1 lg:order-2 lg:pl-12">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Welcome to Your All-in-One <br />
              <span className="text-[#2C4A73]">Payment Hub</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Albina Pay equips users with access to send and receive money locally and internationally. 
              Featuring Chat + Pay, bill payments, airtime & data top-up, Payment Gateway Hub for students, 
              currency conversion, secure Document Vault, and efficient payroll solutions for businesses. 
              All powered by bank-grade security.
            </p>

            {/* CTA Buttons - Desktop Only */}
            <div className="hidden lg:flex flex-col sm:flex-row gap-4">
              <Link 
                href="/signup" 
                className="inline-flex items-center justify-center gap-2 bg-[#2C4A73] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1e3a5f] transition-all shadow-lg"
              >
                Create free account
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-white text-gray-700 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-all border border-gray-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}