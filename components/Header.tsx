'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [headerBottom, setHeaderBottom] = useState(80);
  const headerRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const headerBg = 'bg-[#0A192F]';
  const buttonBg = 'bg-[#2C4A73]';
  const buttonHover = 'hover:bg-[#1A2D47]';

  useEffect(() => {
    const updatePosition = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setHeaderBottom(rect.bottom);
      }
    };

    updatePosition();
    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition);
    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, []);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('dropdownStateChanged', { 
      detail: { isOpen: isProductsOpen || isMenuOpen } 
    }));
  }, [isProductsOpen, isMenuOpen]);

  const handleProductsEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsProductsOpen(true);
  };

  const handleProductsLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 200);
  };

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
      <header 
        ref={headerRef} 
        className={`${headerBg} shadow-lg sticky top-0 z-[100] h-14 lg:h-20`}
      >
        <div className="px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full w-full max-w-7xl mx-auto">

            {/* LOGO */}
            <div className="flex items-center justify-center order-1 lg:order-3 h-full">
              <img
                src="/Image/Albina%20Pay%20Logo%20White%20Font.png"
                alt="Albina Pay Logo"
                className="h-12 lg:h-16 w-auto object-contain -mt-2 lg:-mt-4"
              />
            </div>

            {/* CENTER: Navigation Items */}
            <nav className="hidden lg:flex items-center gap-8 order-2 ml-[-180px] h-full">
              {/* PRODUCTS DROPDOWN */}
              <div
                className="relative flex items-center h-full"
                onMouseEnter={handleProductsEnter}
                onMouseLeave={handleProductsLeave}
              >
                <button className="text-gray-300 hover:text-white font-medium transition-colors whitespace-nowrap flex items-center gap-1">
                  Products
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isProductsOpen && (
                  <>
                    <div 
                      className="fixed left-0 w-full h-4 z-[99]" 
                      style={{ top: `${headerBottom - 4}px` }}
                    />
                    
                    <div 
                      className="fixed left-0 w-full bg-white shadow-2xl z-[100] border-t-4 border-[#2C4A73]"
                      style={{ top: `${headerBottom}px` }}
                      onMouseEnter={handleProductsEnter}
                      onMouseLeave={handleProductsLeave}
                    >
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        {/* Updated grid: 4 columns with branding + 7 features */}
                        <div className="grid grid-cols-4 gap-8 items-start">
                          
                          {/* Column 1 - Branding Image */}
                          <div className="col-span-1">
                            <img
                              src="/Image/Albina_Pay_is_product_of_Albina_Technology.png"
                              alt="Albina Pay is a product of Albina Technology"
                              className="h-40 w-auto object-contain -mt-16 -ml-8"
                            />
                          </div>

                          {/* Column 2 - Features 1 & 2 */}
                          <div className="space-y-6">
                            <Link href="/features/multi-currency-wallet" className="block group">
                              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#2C4A73] transition-colors">Multi-Currency Wallet</h4>
                              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700">
                                Hold NGN, GHS, ZAR, USD, and GBP in one account. Send and receive money locally and internationally.
                              </p>
                            </Link>
                            <Link href="/features/remita-payment" className="block group">
                              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#2C4A73] transition-colors">Remita Payment Services</h4>
                              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700">
                                Pay RRR invoices, billers, and school fees seamlessly. Generate RRR numbers and manage payments.
                              </p>
                            </Link>
                          </div>

                          {/* Column 3 - Features 3 & 4 */}
                          <div className="space-y-6">
                            <Link href="/features/currency-conversion" className="block group">
                              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#2C4A73] transition-colors">Currency Conversion</h4>
                              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700">
                                Convert between multiple currencies at competitive rates with instant conversion.
                              </p>
                            </Link>
                            <Link href="/features/chat-pay" className="block group">
                              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#2C4A73] transition-colors">Chat + Pay</h4>
                              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700">
                                Send money instantly through chat. Split bills and request payments from contacts.
                              </p>
                            </Link>
                          </div>

                          {/* Column 4 - Features 5, 6 & 7 */}
                          <div className="space-y-6">
                            <Link href="/features/document-vault" className="block group">
                              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#2C4A73] transition-colors">Document Vault</h4>
                              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700">
                                Securely store and access your financial documents, receipts, and invoices.
                              </p>
                            </Link>
                            <Link href="/features/payroll-system" className="block group">
                              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#2C4A73] transition-colors">Payroll System</h4>
                              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700">
                                Efficient payroll solutions for businesses. Manage employee payments seamlessly.
                              </p>
                            </Link>
                            <Link href="/features/bills-payment" className="block group">
                              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#2C4A73] transition-colors">Bills Payment</h4>
                              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700">
                                Pay airtime, data, electricity, and other utility bills in one place.
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

            {/* BUTTONS & HAMBURGER */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 order-3 lg:order-1 h-full">
              <div className="hidden lg:flex items-center gap-6">
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

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white hover:text-teal-400 focus:outline-none transition-colors p-2"
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

        {/* MOBILE MENU */}
        <div className={`lg:hidden ${headerBg} shadow-2xl border-t border-gray-700 z-[99] transform transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
          <div className="px-4 py-4 space-y-3 max-h-[80vh] overflow-y-auto">
            <div className="px-2">
              <button
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                className="w-full flex items-center justify-between py-2 text-gray-300 hover:text-white font-medium transition-colors"
              >
                <span className="text-base">Products</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${isMobileProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileProductsOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-3 border-l-2 border-[#2C4A73] mb-3 space-y-4 pt-3">
                  <div className="mb-4">
                    <img src="/Image/Albina_Pay_White_Branding.png" alt="Albina Pay" className="h-16 w-auto object-contain" />
                  </div>
                  <Link href="/features/multi-currency-wallet" className="block group" onClick={() => setIsMenuOpen(false)}>
                    <h4 className="font-bold text-white mb-1 text-sm group-hover:text-[#60A5FA]">Multi-Currency Wallet</h4>
                    <p className="text-xs text-gray-400">Hold NGN, GHS, ZAR, USD, and GBP in one account.</p>
                  </Link>
                  <Link href="/features/remita-payment" className="block group" onClick={() => setIsMenuOpen(false)}>
                    <h4 className="font-bold text-white mb-1 text-sm group-hover:text-[#60A5FA]">Remita Payment Services</h4>
                    <p className="text-xs text-gray-400">Pay RRR invoices, billers, and school fees seamlessly.</p>
                  </Link>
                  <Link href="/features/currency-conversion" className="block group" onClick={() => setIsMenuOpen(false)}>
                    <h4 className="font-bold text-white mb-1 text-sm group-hover:text-[#60A5FA]">Currency Conversion</h4>
                    <p className="text-xs text-gray-400">Convert between multiple currencies at competitive rates.</p>
                  </Link>
                  <Link href="/features/chat-pay" className="block group" onClick={() => setIsMenuOpen(false)}>
                    <h4 className="font-bold text-white mb-1 text-sm group-hover:text-[#60A5FA]">Chat + Pay</h4>
                    <p className="text-xs text-gray-400">Send money instantly through chat. Split bills.</p>
                  </Link>
                  <Link href="/features/document-vault" className="block group" onClick={() => setIsMenuOpen(false)}>
                    <h4 className="font-bold text-white mb-1 text-sm group-hover:text-[#60A5FA]">Document Vault</h4>
                    <p className="text-xs text-gray-400">Securely store financial documents and receipts.</p>
                  </Link>
                  <Link href="/features/payroll-system" className="block group" onClick={() => setIsMenuOpen(false)}>
                    <h4 className="font-bold text-white mb-1 text-sm group-hover:text-[#60A5FA]">Payroll System</h4>
                    <p className="text-xs text-gray-400">Efficient payroll solutions for businesses.</p>
                  </Link>
                  <Link href="/features/bills-payment" className="block group" onClick={() => setIsMenuOpen(false)}>
                    <h4 className="font-bold text-white mb-1 text-sm group-hover:text-[#60A5FA]">Bills Payment</h4>
                    <p className="text-xs text-gray-400">Pay airtime, data, electricity, and utility bills.</p>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="#demo" className="block px-2 py-2 text-gray-300 hover:text-white font-medium text-base" onClick={() => setIsMenuOpen(false)}>Demo</Link>
            <Link href="#developers" className="block px-2 py-2 text-gray-300 hover:text-white font-medium text-base" onClick={() => setIsMenuOpen(false)}>Developers</Link>
            <Link href="#pricing" className="block px-2 py-2 text-gray-300 hover:text-white font-medium text-base" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            <Link href="#blog" className="block px-2 py-2 text-gray-300 hover:text-white font-medium text-base" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link href="#about" className="block px-2 py-2 text-gray-300 hover:text-white font-medium text-base" onClick={() => setIsMenuOpen(false)}>About</Link>

            <div className="border-t border-gray-700 my-3"></div>

            <div className="pt-2 space-y-2 px-2">
              <button className={`w-full ${buttonBg} ${buttonHover} text-white px-4 py-2.5 rounded-lg font-bold text-sm`}>Start for Free</button>
              <button className="w-full bg-transparent border border-gray-500 text-white px-4 py-2.5 rounded-lg text-sm">Login</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}