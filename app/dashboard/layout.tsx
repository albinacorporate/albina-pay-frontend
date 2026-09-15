'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { 
  LayoutDashboard, 
  Wallet, 
  ArrowLeftRight, 
  TrendingUp, 
  FileText, 
  MessageCircle, 
  FolderLock, 
  Users, 
  Zap, 
  Settings, 
  Shield, 
  LogOut, 
  Menu, 
  X, 
  Bell,
  Search,
  Sun,
  Moon,
  User
} from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    async function loadUser() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        setProfile(profileData);
      }
    }
    loadUser();
  }, []);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = '/login';
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Save preference to localStorage
    localStorage.setItem('darkMode', String(!isDarkMode));
  };

  // Load dark mode preference on mount
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setIsDarkMode(savedMode === 'true');
    }
  }, []);

  const mainNav = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Multi-Currency Wallet', href: '/dashboard/wallet', icon: Wallet },
    { name: 'Currency Conversion', href: '/dashboard/convert', icon: ArrowLeftRight },
    { name: 'Transactions', href: '/dashboard/transactions', icon: TrendingUp },
    { name: 'Remita Payments', href: '/dashboard/remita', icon: FileText },
    { name: 'Chat + Pay', href: '/dashboard/chat', icon: MessageCircle },
  ];

  const servicesNav = [
    { name: 'Document Vault', href: '/dashboard/vault', icon: FolderLock },
    { name: 'Payroll System', href: '/dashboard/payroll', icon: Users, badge: 'Pro' },
    { name: 'Bills Payment', href: '/dashboard/bills', icon: Zap },
  ];

  const accountNav = [
    { name: 'Settings & Profile', href: '/dashboard/settings', icon: Settings },
    { name: 'KYC Verification', href: '/dashboard/kyc', icon: Shield, badge: `Tier ${profile?.kyc_tier || 1}` },
  ];

  const isActive = (path: string) => pathname === path;

  const NavItem = ({ item }: { item: any }) => (
    <Link
      href={item.href}
      onClick={() => setIsSidebarOpen(false)}
      className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
        isActive(item.href)
          ? 'bg-[#1E3A8A] text-white shadow-lg shadow-blue-900/20'
          : 'text-gray-400 hover:bg-[#1A2332] hover:text-white'
      }`}
    >
      <div className="flex items-center gap-3">
        <item.icon size={18} />
        <span>{item.name}</span>
      </div>
      {item.badge && (
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
          item.badge === 'Pro' 
            ? 'bg-blue-600 text-white' 
            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
        }`}>
          {item.badge}
        </span>
      )}
    </Link>
  );

  return (
    <div className={`min-h-screen flex ${isDarkMode ? 'bg-[#0B1120]' : 'bg-gray-50'}`}>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 ${isDarkMode ? 'bg-[#0B1120] border-gray-800' : 'bg-white border-gray-200'} border-r transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className={`flex items-center justify-between h-16 px-6 border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-sm`}>Albina Pay</div>
                <div className="text-gray-500 text-[10px]">BY ALBINA TECHNOLOGY</div>
              </div>
            </Link>
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-gray-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
            <div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 px-3">Main</div>
              <div className="space-y-1">{mainNav.map((item) => <NavItem key={item.name} item={item} />)}</div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 px-3">Services</div>
              <div className="space-y-1">{servicesNav.map((item) => <NavItem key={item.name} item={item} />)}</div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 px-3">Account</div>
              <div className="space-y-1">{accountNav.map((item) => <NavItem key={item.name} item={item} />)}</div>
            </div>
            <div className="mt-8 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-4 border border-blue-700">
              <h4 className="text-white font-bold text-sm mb-1">Upgrade to Business</h4>
              <p className="text-blue-200 text-xs mb-3">Unlock payroll, team cards and higher limits.</p>
              <button className="w-full bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold py-2 rounded-lg transition shadow-lg">Upgrade plan</button>
            </div>
          </nav>

          <div className={`p-4 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="flex items-center gap-3 px-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                {profile?.full_name?.charAt(0) || user?.email?.charAt(0) || 'A'}
              </div>
              <div className="flex-1 min-w-0">
                <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-sm font-medium truncate`}>
                  {profile?.full_name || user?.email?.split('@')[0] || 'User'}
                </div>
                <div className="text-gray-500 text-xs">Tier {profile?.kyc_tier || 1} verified</div>
              </div>
              <button onClick={handleLogout} className="text-gray-400 hover:text-white transition">
                <LogOut size={18} />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className={`h-16 ${isDarkMode ? 'bg-[#0B1120] border-gray-800' : 'bg-white border-gray-200'} border-b flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30`}>
          <div className="flex items-center gap-3">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-800 transition">
              <Menu size={24} />
            </button>
            <span className={`lg:hidden font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-lg`}>Dashboard</span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search transactions, bills, people..." 
                className={`w-full pl-10 pr-12 py-2 ${isDarkMode ? 'bg-[#1A2332] border-gray-700 text-white placeholder-gray-500' : 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-400'} border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition`} 
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500">⌘K</div>
            </div>
          </div>

          <div className="flex items-center gap-3 lg:gap-4">
            {/* Dark Mode Toggle - WORKING */}
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Notifications */}
            <button className={`relative p-2 rounded-lg transition ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}>
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-[#0B1120]"></span>
            </button>

            {/* User Profile */}
            <div className={`hidden sm:flex items-center gap-3 pl-4 border-l ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="text-right">
                <div className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {profile?.full_name || user?.email?.split('@')[0] || 'User'}
                </div>
                <div className="text-xs text-gray-500">Tier {profile?.kyc_tier || 1} verified</div>
              </div>
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                {profile?.full_name?.charAt(0) || user?.email?.charAt(0) || 'A'}
              </div>
            </div>
          </div>
        </header>

        <main className={`flex-1 overflow-y-auto ${isDarkMode ? 'bg-[#0B1120]' : 'bg-gray-50'} pb-20 lg:pb-8`}>
          {children}
        </main>

        {/* Mobile Bottom Navigation */}
        <div className={`lg:hidden fixed bottom-0 left-0 right-0 ${isDarkMode ? 'bg-[#0B1120] border-gray-800' : 'bg-white border-gray-200'} border-t z-50 pb-safe`}>
          <div className="flex justify-around items-center h-16 px-2">
            {[
              { name: 'Home', href: '/dashboard', icon: LayoutDashboard },
              { name: 'Wallet', href: '/dashboard/wallet', icon: Wallet },
              { name: 'Convert', href: '/dashboard/convert', icon: ArrowLeftRight },
              { name: 'Activity', href: '/dashboard/transactions', icon: TrendingUp },
              { name: 'Remita', href: '/dashboard/remita', icon: FileText },
              { name: 'Chat', href: '/dashboard/chat', icon: MessageCircle },
              { name: 'Vault', href: '/dashboard/vault', icon: FolderLock },
            ].map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href} className={`flex flex-col items-center justify-center w-full h-full gap-1 ${isActive ? 'text-blue-500' : 'text-gray-500 hover:text-gray-300'}`}>
                  <item.icon size={20} />
                  <span className="text-[10px] font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}