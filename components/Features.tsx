import Link from 'next/link';
import AnimatedTransaction from './AnimatedTransaction';
import IncomeNotification from './IncomeNotification';
import RemittaPayment from './RemittaPayment';

export default function Features() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== INTRODUCTION SECTION ===== */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-20">
          {/* LEFT SIDE: Dark Blue Transparent Card */}
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

          {/* RIGHT SIDE: User Confidence Message */}
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

        {/* ===== FEATURE CARDS SECTION ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Card 1: Multi-Currency Wallets */}
          <div className="bg-gray-100 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Multi-Currency Wallets</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Hold NGN, GHS, ZAR, USD, and GBP in one account. Send and receive money locally and internationally with instant conversion at fair rates.
            </p>

            {/* Image Container with Floating UI - Monnify Style */}
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg mb-6 h-96">
              {/* Full Width Background Image */}
              <img
                src="/Image/feature-multi-currency.webp"
                alt="Young professional using Albina Pay"
                className="w-full h-full object-cover"
              />

              {/* Income Notification - Top Center */}
              <IncomeNotification />

              {/* Floating Animated Transaction - LEFT side (doesn't touch person on right) */}
              <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 scale-90">
                <AnimatedTransaction />
              </div>
            </div>

            {/* Learn More */}
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-[#2C4A73] font-semibold text-lg hover:gap-3 transition-all"
            >
              Learn More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Card 2: Gateway Payment Hub */}
          <div className="bg-gray-100 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Gateway Payment Hub</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Pay school fees, bills, and invoices directly via Remita. Generate RRR numbers, pay existing invoices, and complete transactions without leaving Albina Pay. Pay with remitta and Albina Pay saves your payment invoices for you.
            </p>

            {/* Image Container with Floating UI - Monnify Style */}
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg mb-6 h-96">
              {/* Full Width Background Image */}
              <img
                src="/Image/Remita-feature.png"
                alt="Students paying school fees"
                className="w-full h-full object-cover"
              />

              {/* Floating Remitta Payment Interface - LEFT side (doesn't touch person on right) */}
              <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 scale-90">
                <RemittaPayment />
              </div>
            </div>

            {/* Learn More */}
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-[#2C4A73] font-semibold text-lg hover:gap-3 transition-all"
            >
              Learn More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
