'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  // Company Colors
  const headerBg = 'bg-[#0A192F]'; 
  const buttonBg = 'bg-[#2C4A73]'; 
  const buttonHover = 'hover:bg-[#1A2D47]'; 

  return (
    <>
      {/* Top Notice Bar */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="bg-white text-teal-600 px-3 py-0.5 rounded-full text-xs font-bold">
            NEW
          </span>
          <p className="text-sm font-medium hidden sm:block">
            Albina Technology - Next-Generation Payment Solutions
          </p>
          <p className="text-sm font-medium sm:hidden">
            Next-Gen Payment Solutions
          </p>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className={`${headerBg} shadow-lg sticky top-0 z-30 relative`}>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 w-full max-w-7xl mx-auto"> 
            
            {/* GROUP 1: LOGO */}
            <div className="flex items-center justify-center flex-shrink-0 order-1 xl:order-3 xl:pl-12">
              <img 
                src="/Image/Albina%20Pay%20Logo%20White%20Font.png" 
                alt="Albina Pay Logo" 
                className="h-16 w-auto object-contain -mt-2" 
              />
            </div>

            {/* GROUP 2: DESKTOP NAVIGATION */}
            <nav className="hidden xl:flex items-center gap-6 order-2">
              
              {/* PRODUCTS DROPDOWN */}
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button className="text-gray-300 hover:text-white font-medium transition-colors whitespace-nowrap flex items-center gap-1">
                  Products
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isProductsOpen && (
                  <>
                    {/* INVISIBLE BRIDGE */}
                    <div className="fixed top-[96px] left-0 w-full h-[32px] z-[99] bg-transparent" />
                    
                    {/* Full-Width Dropdown Menu */}
                    <div className="fixed top-[128px] left-0 w-full bg-white shadow-2xl z-[100] border-t border-gray-100">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="grid grid-cols-4 gap-8 items-start">
                          
                          {/* Column 1 - Branding Image */}
                          <div className="col-span-1 -ml-10 flex items-start -mt-10">
                            <img 
                              src="/Image/Albina_Pay_is_product_of_Albina_Technology.png" 
                              alt="Albina Pay is a product of Albina Technology" 
                              className="h-32 w-auto object-contain"
                            />
                          </div>
                          
                          {/* Column 2 */}
                          <div className="space-y-6">
                            <Link href="/products/accept-payments" className="block group">
                              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#2C4A73] transition-colors">Accept payments</h4>
                              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700">
                                Collect payments seamlessly through bank transfer, cards, USSD, and more.
                              </p>
                            </Link>
                            <Link href="/products/bills-payment" className="block group">
                              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#2C4A73] transition-colors">Bills Payment</h4>
                              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700">
                                Offer airtime, data, and utility payments through one powerful integration.
                              </p>
                            </Link>
                          </div>

                          {/* Column 3 */}
                          <div className="space-y-6">
                            <Link href="/products/payouts" className="block group">
                              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#2C4A73] transition-colors">Payouts</h4>
                              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700">
                                Disburse funds instantly and securely to anyone, anytime, anywhere.
                              </p>
                            </Link>
                            <Link href="/products/identity-verification" className="block group">
                              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#2C4A73] transition-colors">Identity Verification</h4>
                              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700">
                                Validate customer identity and bank details in real time.
                              </p>
                            </Link>
                          </div>

                          {/* Column 4 */}
                          <div className="space-y-6">
                            <Link href="/products/offline-collection" className="block group">
                              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#2C4A73] transition-colors">Offline Collection</h4>
                              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700">
                                Help offline customers enjoy your digital services seamlessly.
                              </p>
                            </Link>
                            <Link href="/products/cross-border-remittance" className="block group">
                              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#2C4A73] transition-colors">Cross-Border Remittance</h4>
                              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700">
                                Send and receive money internationally with competitive rates.
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <Link href="#demo" className="text-gray-300 hover:text-white font-medium transition-colors whitespace-nowrap">Demo</Link>
              <Link href="#developers" className="text-gray-300 hover:text-white font-medium transition-colors whitespace-nowrap">Developers</Link>
              <Link href="#pricing" className="text-gray-300 hover:text-white font-medium transition-colors whitespace-nowrap">Pricing</Link>
              <Link href="#blog" className="text-gray-300 hover:text-white font-medium transition-colors whitespace-nowrap">Blog</Link>
            </nav>

            {/* GROUP 3: BUTTONS & HAMBURGER */}
            <div className="flex items-center gap-4 order-3 xl:order-1 xl:pr-12">
              <div className="hidden xl:flex items-center gap-6">
                <button className={`${buttonBg} ${buttonHover} text-white px-6 py-2.5 rounded-md font-bold transition-all shadow-md flex items-center gap-2 whitespace-nowrap text-sm`}>
                  Start for Free
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="text-gray-300 hover:text-white font-medium transition-colors whitespace-nowrap text-sm border border-gray-600 hover:border-white px-4 py-2 rounded-md">
                  Login
                </button>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="xl:hidden text-white hover:text-teal-400 focus:outline-none transition-colors p-2"
                aria-label="Toggle menu"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* MOBILE MENU: SLIDES DOWN FROM HEADER BOTTOM */}
        <div className={`xl:hidden absolute top-full left-0 right-0 ${headerBg} shadow-2xl border-t border-gray-700 z-[99] transform transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
          <div className="px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
            
            {/* 6 MENU ITEMS */}
            
            {/* 1. Products (Working Accordion Dropdown with Rich Details) */}
            <div className="px-4">
              <button 
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                className="w-full flex items-center justify-between py-3 text-gray-300 hover:text-white font-medium transition-colors"
              >
                <span className="text-lg">Products</span>
                <svg 
                  className={`w-5 h-5 transition-transform duration-300 ${isMobileProductsOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Sub-items (Expand/Collapse) */}
              {/* Increased max-h to accommodate the image and rich text */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileProductsOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 border-l-2 border-[#2C4A73] mb-4 space-y-6 pt-4">
                  
                  {/* Branding Image - Inside the dropdown */}
                  <div className="mb-6">
                    <img 
                      src="/Image/Albina_Pay_White_Branding.png" 
                      alt="Albina Pay is a product of Albina Technology" 
                      className="h-20 w-auto object-contain"
                    />
                  </div>

                  {/* Rich Product Items */}
                  <Link href="/products/accept-payments" className="block group" onClick={() => setIsMenuOpen(false)}>
                    <h4 className="font-bold text-white mb-1 group-hover:text-[#60A5FA] transition-colors">Accept payments</h4>
                    <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300">
                      Collect payments seamlessly through bank transfer, cards, USSD, and more.
                    </p>
                  </Link>

                  <Link href="/products/bills-payment" className="block group" onClick={() => setIsMenuOpen(false)}>
                    <h4 className="font-bold text-white mb-1 group-hover:text-[#60A5FA] transition-colors">Bills Payment</h4>
                    <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300">
                      Offer airtime, data, and utility payments through one powerful integration.
                    </p>
                  </Link>

                  <Link href="/products/payouts" className="block group" onClick={() => setIsMenuOpen(false)}>
                    <h4 className="font-bold text-white mb-1 group-hover:text-[#60A5FA] transition-colors">Payouts</h4>
                    <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300">
                      Disburse funds instantly and securely to anyone, anytime, anywhere.
                    </p>
                  </Link>

                  <Link href="/products/identity-verification" className="block group" onClick={() => setIsMenuOpen(false)}>
                    <h4 className="font-bold text-white mb-1 group-hover:text-[#60A5FA] transition-colors">Identity Verification</h4>
                    <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300">
                      Validate customer identity and bank details in real time.
                    </p>
                  </Link>

                  <Link href="/products/offline-collection" className="block group" onClick={() => setIsMenuOpen(false)}>
                    <h4 className="font-bold text-white mb-1 group-hover:text-[#60A5FA] transition-colors">Offline Collection</h4>
                    <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300">
                      Help offline customers enjoy your digital services seamlessly.
                    </p>
                  </Link>

                  <Link href="/products/cross-border-remittance" className="block group" onClick={() => setIsMenuOpen(false)}>
                    <h4 className="font-bold text-white mb-1 group-hover:text-[#60A5FA] transition-colors">Cross-Border Remittance</h4>
                    <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300">
                      Send and receive money internationally with competitive rates.
                    </p>
                  </Link>

                </div>
              </div>
            </div>

            {/* 2. Demo */}
            <Link href="#demo" className="block px-4 py-3 text-gray-300 hover:text-white font-medium transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>Demo</Link>
            
            {/* 3. Developers */}
            <Link href="#developers" className="block px-4 py-3 text-gray-300 hover:text-white font-medium transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>Developers</Link>
            
            {/* 4. Pricing */}
            <Link href="#pricing" className="block px-4 py-3 text-gray-300 hover:text-white font-medium transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            
            {/* 5. Blog */}
            <Link href="#blog" className="block px-4 py-3 text-gray-300 hover:text-white font-medium transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            
            {/* 6. About */}
            <Link href="#about" className="block px-4 py-3 text-gray-300 hover:text-white font-medium transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>About</Link>

            <div className="border-t border-gray-700 my-4"></div>
            
            {/* Mobile Buttons */}
            <div className="pt-2 space-y-3 px-4">
              <button className={`w-full ${buttonBg} ${buttonHover} text-white px-4 py-3 rounded-lg font-bold shadow-md transition-all`}>
                Start for Free
              </button>
              <button className="w-full bg-transparent border border-gray-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}