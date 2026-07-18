/**
 * WhyChooseAlbina.tsx
 * Albina Pay - Value Proposition Section Component
 * 
 * This component explains why individuals and businesses choose Albina Pay.
 * Layout is inspired by industry standards (like Monnify), featuring:
 * - A large visual demonstration image on the left with floating UI badges
 * - A 2x2 grid of key value propositions on the right
 * 
 * RESPONSIVE BEHAVIOR:
 * - Desktop (lg+): Side-by-side layout (Image left, Grid right)
 * - Mobile: Stacked layout (Image top, Grid bottom)
 * 
 * Author: Albina Tech Team
 * Last Updated: 2026
 */

import React from 'react';

export default function WhyChooseAlbina() {

  /* ============================================
      FEATURES DATA ARRAY
      Contains the 4 key reasons to choose Albina Pay.
      Using an array keeps the JSX clean and easy to maintain.
  ============================================ */
  const features = [
    {
      title: 'Fraud Protection',
      description: 'Albina Pay protects your business with real-time transaction monitoring and multi-factor authentication, reducing exposure to fraud and revenue leaks.',
      // Shield icon
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Simple Integration',
      description: 'Albina Pay supports no-code and simple API integrations for businesses at any stage, so you can sign up, configure, and launch in minutes.',
      // Code/Plug icon
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'No-code Payment Tools',
      description: 'Start collecting payments quickly using Albina Pay\'s no-code tools, with no complex setup required—just reliable payment collection ready.',
      // Wallet icon
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      title: 'Faster Settlement',
      description: 'Albina Pay\'s express settlement gives you faster access to funds, so you can restock, pay partners, and keep your business running smoothly.',
      // Lightning bolt icon
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    /* 
      Main Section Container
      - bg-gray-50: Matches the background of your Features section
      - py-20 lg:py-28: Matches your vertical padding for consistency
    */
    <section className="bg-gray-50 py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ============================================
            SECTION HEADING
            Centered title to introduce the value propositions
        ============================================ */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A192F] mb-4">
            Why Individuals and Businesses Choose Albina Pay
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference with Nigeria's most trusted payment platform.
          </p>
        </div>

        {/* ============================================
            MAIN CONTENT GRID
            - Desktop: 2 columns (Image left, Features right)
            - Mobile: 1 column (Stacked)
            - items-center: Vertically centers the content
        ============================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ============================================
              LEFT COLUMN: VISUAL DEMONSTRATION
              Shows the product in action with floating UI badges
          ============================================ */}
          <div className="relative order-2 lg:order-1">
            
            {/* 
              Main Image Container
              - rounded-3xl: Matches your feature card border radius
              - shadow-2xl: Adds depth to make it pop
            */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white">
              <img
                /* 
                  NOTE: You can change this image to any business-related image.
                  Using feature-payroll-system.webp as it shows a team/business setting.
                */
                src="/Image/feature-payroll-system.webp"
                alt="Albina Pay dashboard showing business analytics and transactions"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />

              {/* 
                FLOATING UI BADGES
                These absolute positioned elements overlap the image 
                to highlight key features visually, just like the Monnify inspiration.
              */}
              
              {/* Badge 1: Security (Top Left) */}
              <div className="absolute top-6 left-6 bg-[#0A192F] text-white p-3 rounded-full shadow-lg z-10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              {/* Badge 2: Payment Success (Bottom Right) */}
              <div className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-xl z-10 flex items-center gap-3 border border-gray-100">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0A192F]">Payment Successful</p>
                  <p className="text-xs text-gray-500">₦100,000 received</p>
                </div>
              </div>

              {/* Badge 3: Multi-currency (Top Right) */}
              <div className="absolute top-6 right-6 bg-[#2C4A73] text-white p-3 rounded-full shadow-lg z-10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* ============================================
              RIGHT COLUMN: FEATURES GRID
              2x2 grid displaying the key value propositions
          ============================================ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 order-1 lg:order-2">
            {features.map((feature, index) => (
              /* 
                Individual Feature Item
                - group class allows for hover effects on child elements if needed later
              */
              <div key={index} className="group">
                
                {/* 
                  Icon Container
                  - w-12 h-12: Fixed circular size
                  - bg-[#2C4A73]: Uses your secondary brand color
                  - text-white: White icon for contrast
                  - mb-4: Spacing between icon and title
                */}
                <div className="w-12 h-12 bg-[#2C4A73] rounded-full flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Feature Title */}
                <h3 className="text-xl font-bold text-[#0A192F] mb-3">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}