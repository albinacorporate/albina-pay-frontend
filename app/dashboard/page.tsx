'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { 
  ArrowDownRight, ArrowUpRight, Download, Send, Plus, 
  RefreshCw, Receipt, TrendingUp, Copy, Check, Wallet,
  ArrowLeftRight, FileText, MessageCircle, FolderLock,
  Users, Zap, Shield
} from 'lucide-react';
import Link from 'next/link';

interface Wallet { id: string; currency: string; balance: number; }
interface Transaction { id: string; type: 'credit' | 'debit'; amount: number; currency: string; description: string; status: string; created_at: string; }

export default function DashboardPage() {
  const [profile, setProfile] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [totalBalance, setTotalBalance] = useState(0);
  const [moneyIn, setMoneyIn] = useState(0);
  const [moneyOut, setMoneyOut] = useState(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setIsDarkMode(savedMode === 'true');
    }
  }, []);

  useEffect(() => {
    const loadRealData = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        setLoading(false);
        return;
      }
      
      setUser(user);

      // Fetch profile - handle error gracefully
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (profileError) {
        console.warn('Profile fetch error:', profileError);
        // Use email as fallback
        setProfile({ full_name: user.email?.split('@')[0] || 'User' });
      } else {
        setProfile(profileData);
      }

      // Fetch wallets
      const { data: wallets } = await supabase
        .from('wallets')
        .select('id, balance, currency')
        .eq('user_id', user.id);
      
      let balance = 0;
      if (wallets) {
        wallets.forEach((w: Wallet) => {
          const rate = w.currency === 'USD' ? 1 : w.currency === 'GBP' ? 1.25 : w.currency === 'NGN' ? 0.00065 : 1;
          balance += (w.balance || 0) * rate;
        });
      }
      setTotalBalance(balance);

      // Fetch transactions
      const { data: txData } = await supabase
        .from('transactions')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(10);
      
      if (txData) {
        setTransactions(txData);
        const currentMonth = new Date().getMonth();
        let inFlow = 0, outFlow = 0;
        txData.forEach((tx: Transaction) => {
          if (new Date(tx.created_at).getMonth() === currentMonth) {
            if (tx.type === 'credit') inFlow += tx.amount;
            if (tx.type === 'debit') outFlow += tx.amount;
          }
        });
        setMoneyIn(inFlow);
        setMoneyOut(outFlow);
      }
      setLoading(false);
    };
    loadRealData();
  }, []);

  const formatMoney = (amount: number, currency = 'USD') => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
  
  const getGreeting = () => { 
    const h = new Date().getHours(); 
    return h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening'; 
  };

  const copyAccountNumber = () => {
    if (user?.id) {
      navigator.clipboard.writeText(user.id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Get first name from profile
  const getFirstName = () => {
    if (profile?.full_name) {
      return profile.full_name.split(' ')[0];
    }
    return user?.email?.split('@')[0] || 'User';
  };

  if (loading) return <div className="p-10 text-slate-400">Syncing with Albina Core...</div>;

  return (
    <div className={`p-4 lg:p-8 max-w-7xl mx-auto space-y-8 ${isDarkMode ? 'bg-[#0B1120]' : 'bg-gray-50'}`}>
      
      {/* HEADER SECTION */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="space-y-2">
          <h1 className={`text-2xl lg:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {getGreeting()}, {getFirstName()} 👋
          </h1>
          <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm`}>
            Here's what's happening across your Albina Pay account today.
          </p>
          
          {/* Account Number */}
          <div className="flex items-center gap-2">
            <span className={`${isDarkMode ? 'text-slate-500' : 'text-gray-500'} text-xs`}>Account No:</span>
            <button 
              onClick={copyAccountNumber}
              className={`flex items-center gap-1.5 px-2.5 py-1 ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-300'} border rounded-md hover:bg-slate-800 transition group`}
            >
              <span className={`${isDarkMode ? 'text-slate-300' : 'text-gray-700'} text-xs font-mono`}>
                {user?.id ? `${user.id.slice(0, 8)}...${user.id.slice(-4)}` : 'N/A'}
              </span>
              {copied ? (
                <Check size={12} className="text-green-400" />
              ) : (
                <Copy size={12} className={`${isDarkMode ? 'text-slate-400 group-hover:text-slate-300' : 'text-gray-400 group-hover:text-gray-600'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className={`flex items-center gap-2 px-4 py-2.5 ${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'} border rounded-lg transition text-sm font-medium`}>
            <Download size={16} /> 
            <span>Statement</span>
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition shadow-lg shadow-blue-900/20 text-sm font-medium">
            <Send size={16} /> 
            <span>Send money</span>
          </button>
        </div>
      </div>

      {/* BALANCE CARD & CASH FLOW - Desktop Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* MAIN BALANCE CARD - 2/3 width */}
        <div className="lg:col-span-2 bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] rounded-2xl p-6 lg:p-8 text-white shadow-xl border border-blue-800/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <p className="text-blue-200 text-xs font-bold uppercase tracking-wider">Total Balance · All Currencies</p>
              <span className="px-2 py-0.5 bg-white/10 text-white text-[10px] font-bold rounded-full border border-white/20 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> LIVE
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-2 tracking-tight">
              {formatMoney(totalBalance)}
            </h2>
            
            <div className="flex items-center gap-2 text-sm mb-8">
              <span className="flex items-center gap-1 bg-green-500/20 text-green-300 px-2 py-1 rounded-md text-xs font-medium">
                <TrendingUp size={12} /> 4.2%
              </span>
              <span className="text-blue-200 text-xs">vs last month · synced just now</span>
            </div>
            
            {/* 3 Buttons in a Row - Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button className="flex items-center justify-center gap-2 bg-white text-blue-900 px-4 py-3 rounded-xl font-bold hover:bg-blue-50 transition text-sm shadow-lg">
                <Plus size={18} />
                <span>Add money</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-blue-800/50 text-white px-4 py-3 rounded-xl font-medium hover:bg-blue-800/70 transition border border-blue-600/30 text-sm backdrop-blur-sm">
                <RefreshCw size={18} />
                <span>Convert</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-blue-800/50 text-white px-4 py-3 rounded-xl font-medium hover:bg-blue-800/70 transition border border-blue-600/30 text-sm backdrop-blur-sm">
                <Receipt size={18} />
                <span>Pay bill</span>
              </button>
            </div>
          </div>
        </div>

        {/* CASH FLOW - 1/3 width, stacked */}
        <div className="space-y-4">
          <div className={`${isDarkMode ? 'bg-[#0F172A] border-slate-800' : 'bg-white border-gray-200'} border rounded-2xl p-5`}>
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-green-500/10 rounded-xl">
                <ArrowDownRight size={20} className="text-green-500" />
              </div>
              <div>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-xs font-medium mb-1`}>Money in · this month</p>
                <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{formatMoney(moneyIn)}</p>
                <p className="text-xs text-gray-500 mt-1">38 incoming · 5 currencies held</p>
              </div>
            </div>
          </div>

          <div className={`${isDarkMode ? 'bg-[#0F172A] border-slate-800' : 'bg-white border-gray-200'} border rounded-2xl p-5`}>
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-red-500/10 rounded-xl">
                <ArrowUpRight size={20} className="text-red-500" />
              </div>
              <div>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-xs font-medium mb-1`}>Money out · this month</p>
                <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{formatMoney(moneyOut)}</p>
                <p className="text-xs text-gray-500 mt-1">51 payments · avg $42.40</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ALL SERVICES GRID */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>All services</h3>
            <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm mt-1`}>Everything Albina Pay can do — tap to open.</p>
          </div>
          <Link href="/dashboard/transactions" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
            View transactions →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Multi-Currency Wallet', desc: 'NGN · GHS · ZAR · USD · GBP in one account', icon: Wallet, color: 'text-blue-400', bg: 'bg-blue-500/10' },
            { name: 'Currency Conversion', desc: 'Instant conversion at competitive rates', icon: ArrowLeftRight, color: 'text-green-400', bg: 'bg-green-500/10' },
            { name: 'Remita Payments', desc: 'RRR invoices, billers & school fees', icon: FileText, color: 'text-amber-400', bg: 'bg-amber-500/10' },
            { name: 'Chat + Pay', desc: 'Send money, split bills in chat', icon: MessageCircle, color: 'text-purple-400', bg: 'bg-purple-500/10' },
            { name: 'Document Vault', desc: 'Store receipts, invoices & statements', icon: FolderLock, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
            { name: 'Payroll System', desc: 'Manage employee payments seamlessly', icon: Users, color: 'text-rose-400', bg: 'bg-rose-500/10', badge: 'Pro' },
            { name: 'Bills Payment', desc: 'Airtime, data, electricity & more', icon: Zap, color: 'text-orange-400', bg: 'bg-orange-500/10' },
            { name: 'KYC & Verification', desc: 'Verify identity to unlock limits', icon: Shield, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
          ].map((service) => (
            <Link
              key={service.name}
              href={`/dashboard/${service.name.toLowerCase().replace(/[^a-z]/g, '-')}`}
              className={`${isDarkMode ? 'bg-[#0F172A] border-slate-800 hover:border-blue-500/30' : 'bg-white border-gray-200 hover:border-blue-300'} border rounded-2xl p-5 transition-all duration-200 group`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${service.bg} ${service.color}`}>
                <service.icon size={24} />
              </div>
              <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1 group-hover:text-blue-400 transition-colors`}>
                {service.name}
              </h4>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{service.desc}</p>
              {service.badge && (
                <span className="inline-block mt-2 px-2 py-0.5 bg-blue-600 text-white text-[10px] font-bold rounded-full">
                  {service.badge}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* RECENT TRANSACTIONS */}
      <div className={`${isDarkMode ? 'bg-[#0F172A] border-slate-800' : 'bg-white border-gray-200'} border rounded-2xl p-6`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Recent transactions</h3>
          <Link href="/dashboard/transactions" className="text-blue-400 hover:text-blue-300 text-sm font-medium">See all →</Link>
        </div>
        <div className="space-y-4">
          {transactions.length > 0 ? transactions.map((tx) => (
            <div key={tx.id} className={`flex items-center justify-between p-3 ${isDarkMode ? 'hover:bg-slate-800/50' : 'hover:bg-gray-50'} rounded-xl transition`}>
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-xl ${tx.type === 'credit' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                  {tx.type === 'credit' ? <ArrowDownRight size={20} /> : <ArrowUpRight size={20} />}
                </div>
                <div>
                  <p className={`${isDarkMode ? 'text-slate-200' : 'text-gray-900'} font-medium text-sm`}>{tx.description || 'Transaction'}</p>
                  <p className="text-gray-500 text-xs">{new Date(tx.created_at).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-bold text-sm ${tx.type === 'credit' ? 'text-green-400' : isDarkMode ? 'text-slate-200' : 'text-gray-900'}`}>
                  {tx.type === 'credit' ? '+' : '-'}{formatMoney(tx.amount, tx.currency)}
                </p>
                <p className="text-xs text-gray-500 capitalize">{tx.status}</p>
              </div>
            </div>
          )) : (
            <div className="text-center py-10 text-gray-500 text-sm">No transactions yet. Start by adding money!</div>
          )}
        </div>
      </div>
    </div>
  );
}