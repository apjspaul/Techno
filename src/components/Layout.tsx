import React from 'react';
import { 
  LayoutDashboard, 
  School, 
  Users, 
  Wallet, 
  MessageSquare, 
  Plus, 
  Search, 
  Bell, 
  Settings 
} from 'lucide-react';
import { Page } from '../types';
import { cn } from '../lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export default function Layout({ children, currentPage, onPageChange }: LayoutProps) {
  const menuItems = [
    { id: 'dashboard' as Page, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'classes' as Page, label: 'Classes', icon: School },
    { id: 'students' as Page, label: 'Students', icon: Users },
    { id: 'payments' as Page, label: 'Payments', icon: Wallet },
    { id: 'communication' as Page, label: 'Communication', icon: MessageSquare },
  ];

  return (
    <div className="flex min-h-screen bg-[#09090b]">
      {/* Sidebar */}
      <aside id="sidebar" className="fixed left-0 top-0 h-screen w-64 bg-[#121214] p-6 flex flex-col gap-8 z-50 text-[#f4f4f5] border-right border-outline-variant">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <School size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-lg font-extrabold tracking-tight">AETHER</h1>
            <p className="text-[10px] text-tertiary uppercase tracking-widest font-bold">Management</p>
          </div>
        </div>

        <nav className="flex flex-col gap-1 flex-grow">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={cn(
                "group flex items-center gap-4 p-4 rounded-xl transition-all duration-200 active:scale-95 text-left",
                currentPage === item.id 
                  ? "bg-[#1e1e21] text-white font-semibold" 
                  : "text-[#a1a1aa] hover:bg-[#1e1e21] hover:text-white"
              )}
            >
              <item.icon size={18} className={cn(currentPage === item.id ? "text-primary" : "")} />
              <span className="text-sm">{item.label}</span>
              {currentPage === item.id && (
                <div className="ml-auto w-0.5 h-4 bg-primary rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
              )}
            </button>
          ))}
        </nav>

        <button className="bg-primary text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-all text-sm">
          <Plus size={18} />
          <span>New Entry</span>
        </button>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col min-w-0">
        {/* Top Header */}
        <header id="top-bar" className="fixed top-0 right-0 left-64 h-16 bg-[#09090b]/80 backdrop-blur-md border-b border-outline-variant flex justify-between items-center px-8 z-40">
          <div className="flex items-center gap-8 flex-1">
            <h2 className="text-sm font-bold text-[#f4f4f5] uppercase tracking-widest">{currentPage}</h2>
            <div className="relative w-full max-w-md group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-tertiary group-focus-within:text-primary transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="Search resources..."
                className="w-full pl-10 pr-4 py-2 bg-[#121214] rounded-lg border border-outline-variant focus:ring-1 focus:ring-primary text-xs transition-all outline-none text-[#f4f4f5]"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div style={{ color: '#a1a1aa', fontSize: '14px' }}>Oct 24, 2024</div>
            <button className="relative p-2 text-[#a1a1aa] hover:text-white transition-colors active:scale-90">
              <Bell size={18} />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-primary rounded-full"></span>
            </button>
            <div className="h-6 w-px bg-outline-variant mx-2" />
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold leading-tight text-white">Amira Roslan</p>
                <p className="text-[10px] text-tertiary uppercase tracking-widest">Manager</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#3f3f46] flex items-center justify-center text-xs font-bold text-white border border-outline-variant shadow-sm">AR</div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="mt-16 p-8 overflow-x-hidden min-h-[calc(100vh-64px)]">
          {children}
        </main>
      </div>
    </div>
  );
}
