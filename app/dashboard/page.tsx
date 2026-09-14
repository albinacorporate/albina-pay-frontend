'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import Link from 'next/link';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [wallets, setWallets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadData() {
      const supabase = createClient();
      
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        router.push('/login');
        return;
      }

      setUser(user);

      // Fetch profile
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      setProfile(profileData);

      // Fetch wallets (if table exists)
      const { data: walletsData } = await supabase
        .from('wallets')
        .select('*')
        .eq('user_id', user.id);

      if (walletsData) {
        setWallets(walletsData);
      }

      setLoading(false);
    }

    loadData();
  }, [router]);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Top Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-white">Albina Pay</h1>
            <span className="text-gray-400">|</span>
            <span className="text-gray-300">Dashboard</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-white font-medium">{profile?.full_name || 'User'}</div>
              <div className="text-sm text-gray-400">{user?.email}</div>
            </div>
            <button
              onClick={handleLogout}
              className="ml-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            Welcome back, {profile?.full_name?.split(' ')[0] || 'User'}!
          </h2>
          <p className="text-gray-400">Manage your finances and transactions</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <button className="p-6 bg-blue-600 hover:bg-blue-700 rounded-xl text-white transition">
            <div className="text-3xl mb-2">💸</div>
            <div className="font-semibold">Send Money</div>
          </button>
          <button className="p-6 bg-green-600 hover:bg-green-700 rounded-xl text-white transition">
            <div className="text-3xl mb-2">📥</div>
            <div className="font-semibold">Receive</div>
          </button>
          <button className="p-6 bg-purple-600 hover:bg-purple-700 rounded-xl text-white transition">
            <div className="text-3xl mb-2">💳</div>
            <div className="font-semibold">Pay Bills</div>
          </button>
          <button className="p-6 bg-orange-600 hover:bg-orange-700 rounded-xl text-white transition">
            <div className="text-3xl mb-2">🔄</div>
            <div className="font-semibold">Exchange</div>
          </button>
        </div>

        {/* Wallets Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Your Wallets</h3>
          {wallets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {wallets.map((wallet) => (
                <div key={wallet.id} className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                  <div className="text-gray-400 text-sm mb-1">{wallet.currency}</div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {wallet.currency === 'NGN' ? '₦' : wallet.currency === 'USD' ? '$' : wallet.currency === 'GBP' ? '£' : ''}
                    {parseFloat(wallet.balance || 0).toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">
                    Status: <span className="text-green-400">{wallet.status || 'Active'}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 text-center">
              <p className="text-gray-400 mb-4">No wallets found. Create your first wallet to get started.</p>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
                Create Wallet
              </button>
            </div>
          )}
        </div>

        {/* Profile Info */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Profile Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-gray-400 text-sm">Full Name</div>
              <div className="text-white font-medium">{profile?.full_name || 'Not set'}</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Email</div>
              <div className="text-white font-medium">{user?.email}</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Phone</div>
              <div className="text-white font-medium">{profile?.phone || 'Not set'}</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">KYC Tier</div>
              <div className="text-white font-medium">Tier {profile?.kyc_tier || 1}</div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Recent Transactions</h3>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 text-center">
            <p className="text-gray-400">No transactions yet</p>
          </div>
        </div>
      </div>
    </div>
  );
}