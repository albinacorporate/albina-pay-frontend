export const dynamic = 'force-dynamic';
export const revalidate = 0;

import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
    </main>
  );
}