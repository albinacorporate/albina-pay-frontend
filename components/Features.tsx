/**
 * Features.tsx
 * Albina Pay - Features Section Component
 * 
 * This component displays all Albina Pay features in a responsive grid layout.
 * Each feature card includes:
 * - Title and description
 * - Background image with person/product
 * - Animated UI component showing the feature in action
 * - Learn More link
 * 
 * RESPONSIVE BEHAVIOR:
 * - Desktop (lg+): Full-width cards with floating animations
 * - Mobile: Side-by-side layout (55% image, 45% animation)
 * 
 * Author: Albina Tech Team
 * Last Updated: 2026
 */

import Link from 'next/link';
import AnimatedTransaction from './AnimatedTransaction';
import IncomeNotification from './IncomeNotification';
import RemittaPayment from './RemittaPayment';
import CurrencyConversion from './CurrencyConversion';
import ChatPay from './ChatPay';
import DocumentVault from './DocumentVault';
import PayrollSystem from './PayrollSystem';
import BillsPayment from './BillsPayment';
import CardServices from './CardServices';

export default function Features() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ============================================
            INTRODUCTION SECTION
            Two-column layout with CTA and value proposition
        ============================================ */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-20">
          
          {/* LEFT COLUMN: Dark Blue CTA Card with glassmorphism effect */}
          <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start -mt-12 lg:-mt-20">
            <div className="w-full bg-[#0A192F]/60 backdrop-blur-md border border-[#2C4A73]/20 rounded-2xl p-8 lg:p-10 shadow-2xl">
              <p className="text-xl sm:text-2xl font-bold text-white leading-snug mb-8">
                Design to solve Your Personal and Business Payment needs. Every Transaction is secured, documented and stored.
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 bg-white text-[#0A192F] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg"
              >
                Click to Start Free
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Confidence Message */}
          <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start lg:-mt-16">
            <div className="bg-[#2C4A73]/10 backdrop-blur-sm rounded-lg px-6 py-4 mb-6 shadow-md border border-[#2C4A73]/20 -mt-4">
              <h5 className="text-lg font-bold text-[#0A192F]">
                Albina Pay Empowers You to make Payments with Confidence.
              </h5>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg sm:text-xl font-semibold text-[#0A192F] leading-snug">Take Control with Confidence</p>
              <p className="text-lg sm:text-xl font-semibold text-[#0A192F] leading-snug">over Your Finance and Payment for Your Goods and Services,</p>
              <p className="text-lg sm:text-xl font-semibold text-[#0A192F] leading-snug">Using Our Rich Interface and Powerful Features.</p>
            </div>
          </div>
        </div>

        {/* ============================================
            FEATURE CARDS GRID
            2-column grid on desktop, 1-column on mobile
            Each card uses flex-col on mobile, block on desktop
        ============================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ============================================
              CARD 1: MULTI-CURRENCY WALLETS
              Feature: Hold multiple currencies in one account
              
              IMAGE POSITIONING (Mobile):
              - Person is on the RIGHT side of the image
              - Using object-[70%_center] to crop to the right 70%
              - This ensures the person is visible in the 55% width container
          ============================================ */}
          <div className="bg-gray-100 rounded-3xl p-6 lg:p-12 flex flex-col lg:block">
            
            {/* Text Content - Always appears first */}
            <div className="order-1 lg:order-none">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">
                Multi-Currency Wallets
              </h3>
              <p className="text-gray-600 mb-4 lg:mb-6 text-base lg:text-lg leading-relaxed">
                Hold NGN, GHS, ZAR, USD, and GBP in one account. Send and receive money locally and internationally with instant conversion at fair rates.
              </p>
            </div>

            {/* Visual Content: Image + Animation */}
            <div className="order-2 lg:order-none">
              
              {/* MOBILE LAYOUT: Side-by-side (55% image, 45% animation) */}
              <div className="flex lg:hidden flex-row gap-0 mb-4 shadow-lg rounded-2xl overflow-hidden">
                <div className="w-[55%] h-72 relative">
                  <img
                    src="/Image/feature-multi-currency.webp"
                    alt="Young professional using Albina Pay"
                    className="w-full h-full object-cover object-[70%_center]"
                  />
                </div>
                <div className="w-[45%] h-72 bg-white flex items-center justify-center p-1">
                  <div className="w-full h-full flex items-center justify-center scale-90">
                    <AnimatedTransaction />
                  </div>
                </div>
              </div>

              {/* DESKTOP LAYOUT: Full image with floating animations */}
              <div className="hidden lg:block relative rounded-2xl overflow-hidden bg-white shadow-lg mb-6 h-96">
                <img
                  src="/Image/feature-multi-currency.webp"
                  alt="Young professional using Albina Pay"
                  className="w-full h-full object-cover"
                />
                {/* Floating UI Elements */}
                <IncomeNotification />
                <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 scale-90">
                  <AnimatedTransaction />
                </div>
              </div>
            </div>

            {/* Learn More Link */}
            <div className="order-3 lg:order-none">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-[#2C4A73] font-semibold text-base lg:text-lg hover:gap-3 transition-all"
              >
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ============================================
              CARD 2: REMITA PAYMENT SERVICES
              Feature: Pay school fees, bills, and invoices via Remita
              
              IMAGE POSITIONING (Mobile):
              - Person is on the RIGHT side of the image (woman in pink)
              - Using object-[65%_center] to crop to the right 65%
              - This ensures the person is visible in the 55% width container
          ============================================ */}
          <div className="bg-gray-100 rounded-3xl p-6 lg:p-12 flex flex-col lg:block">
            
            {/* Text Content */}
            <div className="order-1 lg:order-none">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">
                Remita Payment Services
              </h3>
              <p className="text-gray-600 mb-4 lg:mb-6 text-base lg:text-lg leading-relaxed">
                Pay school fees, bills, and invoices directly via Remita. Generate RRR numbers, pay existing invoices, and complete transactions without leaving Albina Pay. All your payment invoices are automatically saved to your Albina Vault for easy access.
              </p>
            </div>

            {/* Visual Content: Image + Animation */}
            <div className="order-2 lg:order-none">
              
              {/* MOBILE LAYOUT: Side-by-side */}
              <div className="flex lg:hidden flex-row gap-0 mb-4 shadow-lg rounded-2xl overflow-hidden">
                <div className="w-[55%] h-72 relative">
                  <img
                    src="/Image/Remita-feature.png"
                    alt="Students paying school fees with Remita"
                    className="w-full h-full object-cover object-[65%_center]"
                  />
                </div>
                <div className="w-[45%] h-72 bg-white flex items-center justify-center p-1">
                  <div className="w-full h-full flex items-center justify-center scale-90">
                    <RemittaPayment />
                  </div>
                </div>
              </div>

              {/* DESKTOP LAYOUT: Full image with floating animation */}
              <div className="hidden lg:block relative rounded-2xl overflow-hidden bg-white shadow-lg mb-6 h-96">
                <img
                  src="/Image/Remita-feature.png"
                  alt="Students paying school fees with Remita"
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 scale-90">
                  <RemittaPayment />
                </div>
              </div>
            </div>

            {/* Learn More Link */}
            <div className="order-3 lg:order-none">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-[#2C4A73] font-semibold text-base lg:text-lg hover:gap-3 transition-all"
              >
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ============================================
              CARD 3: CURRENCY CONVERSION
              Feature: Convert between multiple currencies
              
              IMAGE POSITIONING (Mobile):
              - Person is on the LEFT side (airport setting)
              - Using object-[30%_center] to crop to the left 30%
              - Animation is on the RIGHT side
          ============================================ */}
          <div className="bg-gray-100 rounded-3xl p-6 lg:p-12 flex flex-col lg:block">
            
            {/* Text Content */}
            <div className="order-1 lg:order-none">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">
                Currency Conversion
              </h3>
              <p className="text-gray-600 mb-4 lg:mb-6 text-base lg:text-lg leading-relaxed">
                Convert between multiple currencies at competitive rates with instant conversion. Get the best exchange rates for NGN, USD, GBP, EUR, and more with zero hidden fees.
              </p>
            </div>

            {/* Visual Content: Image + Animation */}
            <div className="order-2 lg:order-none">
              
              {/* MOBILE LAYOUT: Side-by-side */}
              <div className="flex lg:hidden flex-row gap-0 mb-4 shadow-lg rounded-2xl overflow-hidden">
                <div className="w-[55%] h-72 relative">
                  <img
                    src="/Image/feature-currency-conversion.webp"
                    alt="Currency conversion interface"
                    className="w-full h-full object-cover object-[30%_center]"
                  />
                </div>
                <div className="w-[45%] h-72 bg-white flex items-center justify-center p-1">
                  <div className="w-full h-full flex items-center justify-center scale-90">
                    <CurrencyConversion />
                  </div>
                </div>
              </div>

              {/* DESKTOP LAYOUT: Animation on RIGHT side */}
              <div className="hidden lg:block relative rounded-2xl overflow-hidden bg-white shadow-lg mb-6 h-96">
                <img
                  src="/Image/feature-currency-conversion.webp"
                  alt="Currency conversion interface"
                  className="w-full h-full object-cover object-left"
                />
                <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 scale-90">
                  <CurrencyConversion />
                </div>
              </div>
            </div>

            {/* Learn More Link */}
            <div className="order-3 lg:order-none">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-[#2C4A73] font-semibold text-base lg:text-lg hover:gap-3 transition-all"
              >
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ============================================
              CARD 4: CHAT + PAY
              Feature: Send money through chat conversations
              
              IMAGE POSITIONING (Mobile):
              - Woman is centered in the frame
              - Using object-[35%_center] for optimal centering
          ============================================ */}
          <div className="bg-gray-100 rounded-3xl p-6 lg:p-12 flex flex-col lg:block">
            
            {/* Text Content */}
            <div className="order-1 lg:order-none">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">
                Chat + Pay
              </h3>
              <p className="text-gray-600 mb-4 lg:mb-6 text-base lg:text-lg leading-relaxed">
                Send money instantly through chat. Split bills, request payments from contacts, and pay friends directly within conversations. Fast, secure, and seamless.
              </p>
            </div>

            {/* Visual Content: Image + Animation */}
            <div className="order-2 lg:order-none">
              
              {/* MOBILE LAYOUT: Side-by-side */}
              <div className="flex lg:hidden flex-row gap-0 mb-4 shadow-lg rounded-2xl overflow-hidden">
                <div className="w-[55%] h-72 relative">
                  <img
                    src="/Image/feature-chat-pay.webp"
                    alt="Chat and pay interface"
                    className="w-full h-full object-cover object-[35%_center]"
                  />
                </div>
                <div className="w-[45%] h-72 bg-white flex items-center justify-center p-1">
                  <div className="w-full h-full flex items-center justify-center scale-90">
                    <ChatPay />
                  </div>
                </div>
              </div>

              {/* DESKTOP LAYOUT: Animation on RIGHT side */}
              <div className="hidden lg:block relative rounded-2xl overflow-hidden bg-white shadow-lg mb-6 h-96">
                <img
                  src="/Image/feature-chat-pay.webp"
                  alt="Chat and pay interface"
                  className="w-full h-full object-cover object-[30%_center]"
                />
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 scale-90">
                  <ChatPay />
                </div>
              </div>
            </div>

            {/* Learn More Link */}
            <div className="order-3 lg:order-none">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-[#2C4A73] font-semibold text-base lg:text-lg hover:gap-3 transition-all"
              >
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ============================================
              CARD 5: DOCUMENT VAULT
              Feature: Secure document storage
              
              IMAGE POSITIONING (Mobile):
              - Man is positioned left-of-center
              - Using object-[30%_center] to keep him visible
          ============================================ */}
          <div className="bg-gray-100 rounded-3xl p-6 lg:p-12 flex flex-col lg:block">
            
            {/* Text Content */}
            <div className="order-1 lg:order-none">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">
                Document Vault
              </h3>
              <p className="text-gray-600 mb-4 lg:mb-6 text-base lg:text-lg leading-relaxed">
                Securely store and access your financial documents, receipts, and invoices. Bank-grade encryption keeps your files safe and accessible anytime, anywhere.
              </p>
            </div>

            {/* Visual Content: Image + Animation */}
            <div className="order-2 lg:order-none">
              
              {/* MOBILE LAYOUT: Side-by-side */}
              <div className="flex lg:hidden flex-row gap-0 mb-4 shadow-lg rounded-2xl overflow-hidden">
                <div className="w-[55%] h-72 relative">
                  <img
                    src="/Image/feature-document-vault.webp"
                    alt="Secure document storage"
                    className="w-full h-full object-cover object-[30%_center]"
                  />
                </div>
                <div className="w-[45%] h-72 bg-white flex items-center justify-center p-1">
                  <div className="w-full h-full flex items-center justify-center scale-90">
                    <DocumentVault />
                  </div>
                </div>
              </div>

              {/* DESKTOP LAYOUT: Animation on RIGHT side */}
              <div className="hidden lg:block relative rounded-2xl overflow-hidden bg-white shadow-lg mb-6 h-96">
                <img
                  src="/Image/feature-document-vault.webp"
                  alt="Secure document storage"
                  className="w-full h-full object-cover object-[20%_center]"
                />
                <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 scale-90">
                  <DocumentVault />
                </div>
              </div>
            </div>

            {/* Learn More Link */}
            <div className="order-3 lg:order-none">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-[#2C4A73] font-semibold text-base lg:text-lg hover:gap-3 transition-all"
              >
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ============================================
              CARD 6: PAYROLL SYSTEM
              Feature: Business payroll management
              
              IMAGE POSITIONING (Mobile):
              - Workers on the left side
              - Using object-left to show the team
          ============================================ */}
          <div className="bg-gray-100 rounded-3xl p-6 lg:p-12 flex flex-col lg:block">
            
            {/* Text Content */}
            <div className="order-1 lg:order-none">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">
                Payroll System
              </h3>
              <p className="text-gray-600 mb-4 lg:mb-6 text-base lg:text-lg leading-relaxed">
                Efficient payroll solutions for businesses. Manage employee payments, generate payslips, and track all transactions in one powerful dashboard.
              </p>
            </div>

            {/* Visual Content: Image + Animation */}
            <div className="order-2 lg:order-none">
              
              {/* MOBILE LAYOUT: Side-by-side */}
              <div className="flex lg:hidden flex-row gap-0 mb-4 shadow-lg rounded-2xl overflow-hidden">
                <div className="w-[55%] h-72 relative">
                  <img
                    src="/Image/feature-payroll-system.webp"
                    alt="Business payroll management"
                    className="w-full h-full object-cover object-left"
                  />
                </div>
                <div className="w-[45%] h-72 bg-white flex items-center justify-center p-1">
                  <div className="w-full h-full flex items-center justify-center scale-90">
                    <PayrollSystem />
                  </div>
                </div>
              </div>

              {/* DESKTOP LAYOUT: Animation on RIGHT side */}
              <div className="hidden lg:block relative rounded-2xl overflow-hidden bg-white shadow-lg mb-6 h-96">
                <img
                  src="/Image/feature-payroll-system.webp"
                  alt="Business payroll management"
                  className="w-full h-full object-cover object-left"
                />
                <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 scale-90">
                  <PayrollSystem />
                </div>
              </div>
            </div>

            {/* Learn More Link */}
            <div className="order-3 lg:order-none">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-[#2C4A73] font-semibold text-base lg:text-lg hover:gap-3 transition-all"
              >
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ============================================
              CARD 7: BILLS PAYMENT
              Feature: Pay utility bills, airtime, and subscriptions
              
              IMAGE POSITIONING (Mobile):
              - Person on the left side
              - Using object-left to show the person
          ============================================ */}
          <div className="bg-gray-100 rounded-3xl p-6 lg:p-12 flex flex-col lg:block">
            
            {/* Text Content */}
            <div className="order-1 lg:order-none">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">
                Bills Payment
              </h3>
              <p className="text-gray-600 mb-4 lg:mb-6 text-base lg:text-lg leading-relaxed">
                Pay electricity, water, cable TV, airtime, and internet bills instantly. Get automatic receipts saved to your Albina Vault. Never miss a payment again.
              </p>
            </div>

            {/* Visual Content: Image + Animation */}
            <div className="order-2 lg:order-none">
              
              {/* MOBILE LAYOUT: Side-by-side */}
              <div className="flex lg:hidden flex-row gap-0 mb-4 shadow-lg rounded-2xl overflow-hidden">
                <div className="w-[55%] h-72 relative">
                  <img
                    src="/Image/feature-bills-payment.webp"
                    alt="Bills payment interface"
                    className="w-full h-full object-cover object-left"
                  />
                </div>
                <div className="w-[45%] h-72 bg-white flex items-center justify-center p-1">
                  <div className="w-full h-full flex items-center justify-center scale-90">
                    <BillsPayment />
                  </div>
                </div>
              </div>

              {/* DESKTOP LAYOUT: Animation on RIGHT side */}
              <div className="hidden lg:block relative rounded-2xl overflow-hidden bg-white shadow-lg mb-6 h-96">
                <img
                  src="/Image/feature-bills-payment.webp"
                  alt="Bills payment interface"
                  className="w-full h-full object-cover object-left"
                />
                <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 scale-90">
                  <BillsPayment />
                </div>
              </div>
            </div>

            {/* Learn More Link */}
            <div className="order-3 lg:order-none">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-[#2C4A73] font-semibold text-base lg:text-lg hover:gap-3 transition-all"
              >
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ============================================
              CARD 8: CARD SERVICES
              Feature: Virtual and physical card management
              
              IMAGE POSITIONING (Mobile):
              - Person on the left side
              - Using object-left to show the person
          ============================================ */}
          <div className="bg-gray-100 rounded-3xl p-6 lg:p-12 flex flex-col lg:block">
            
            {/* Text Content */}
            <div className="order-1 lg:order-none">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">
                Card Services
              </h3>
              <p className="text-gray-600 mb-4 lg:mb-6 text-base lg:text-lg leading-relaxed">
                Create virtual and physical cards instantly. Shop online, lock/unlock cards, and track all card transactions. Full control over your spending with real-time notifications.
              </p>
            </div>

            {/* Visual Content: Image + Animation */}
            <div className="order-2 lg:order-none">
              
              {/* MOBILE LAYOUT: Side-by-side */}
              <div className="flex lg:hidden flex-row gap-0 mb-4 shadow-lg rounded-2xl overflow-hidden">
                <div className="w-[55%] h-72 relative">
                  <img
                    src="/Image/feature-card-services.webp"
                    alt="Card services interface"
                    className="w-full h-full object-cover object-left"
                  />
                </div>
                <div className="w-[45%] h-72 bg-white flex items-center justify-center p-1">
                  <div className="w-full h-full flex items-center justify-center scale-90">
                    <CardServices />
                  </div>
                </div>
              </div>

              {/* DESKTOP LAYOUT: Animation on RIGHT side */}
              <div className="hidden lg:block relative rounded-2xl overflow-hidden bg-white shadow-lg mb-6 h-96">
                <img
                  src="/Image/feature-card-services.webp"
                  alt="Card services interface"
                  className="w-full h-full object-cover object-left"
                />
                <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 scale-90">
                  <CardServices />
                </div>
              </div>
            </div>

            {/* Learn More Link */}
            <div className="order-3 lg:order-none">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-[#2C4A73] font-semibold text-base lg:text-lg hover:gap-3 transition-all"
              >
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}