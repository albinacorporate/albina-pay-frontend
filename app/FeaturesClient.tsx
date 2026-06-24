'use client';

import dynamic from 'next/dynamic';

// Import Features with SSR disabled - this prevents server crashes
const Features = dynamic(() => import('../components/Features'), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-3xl"></div>
});

export default function FeaturesClient() {
  return <Features />;
}
