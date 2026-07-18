'use client';

import dynamic from 'next/dynamic';

// Load ALL components client-side only - prevents server memory issues
const Header = dynamic(() => import('../components/Header'), {
  ssr: false,
  loading: () => <div className="h-20 bg-gray-900 animate-pulse"></div>
});

const Hero = dynamic(() => import('../components/Hero'), {
  ssr: false,
  loading: () => <div className="h-screen bg-gray-100 animate-pulse"></div>
});

const Features = dynamic(() => import('../components/Features'), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse space-y-8">
          <div className="h-64 bg-gray-200 rounded-2xl"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-96 bg-gray-200 rounded-3xl"></div>
            <div className="h-96 bg-gray-200 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  ),
});

// ============================================
// NEW: WhyChooseAlbina Component Import
// Includes a custom skeleton loader that matches its 2-column layout
// ============================================
const WhyChooseAlbina = dynamic(() => import('../components/WhyChooseAlbina'), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse space-y-8">
          {/* Heading Placeholder */}
          <div className="h-12 bg-gray-200 rounded-lg w-2/3 mx-auto mb-8"></div>
          
          {/* Main Grid Placeholder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="h-[400px] lg:h-[500px] bg-gray-200 rounded-3xl"></div>
            
            {/* Features Grid Placeholder (2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="h-32 bg-gray-200 rounded-xl"></div>
              <div className="h-32 bg-gray-200 rounded-xl"></div>
              <div className="h-32 bg-gray-200 rounded-xl"></div>
              <div className="h-32 bg-gray-200 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <WhyChooseAlbina /> {/* <-- Added right after Features */}
    </main>
  );
}