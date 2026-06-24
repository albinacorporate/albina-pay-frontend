import Header from '../components/Header';
import Hero from '../components/Hero';
import dynamic from 'next/dynamic';

// Load Features only on the client side - prevents server timeout
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

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
    </main>
  );
}
