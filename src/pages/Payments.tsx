import React from 'react';
import { 
  TrendingUp, 
  FileText, 
  Megaphone, 
  Search, 
  Filter, 
  BellRing, 
  MoreVertical,
  QrCode,
  Landmark,
  Banknote,
  Receipt,
  ChevronLeft,
  ChevronRight,
  PlusSquare,
  Wallet
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function Payments() {
  const transactions = [
    { id: 'HH-2041', name: 'Siti Fatimah', initials: 'SF', class: 'Advanced Robotics', amount: 'RM 250.00', date: 'Oct 01, 2023', status: 'Overdue', method: 'DuitNow QR', methodIcon: QrCode },
    { id: 'HH-1982', name: 'Chloe Tan', class: 'Beginner Piano', amount: 'RM 180.00', date: 'Oct 15, 2023', status: 'Paid', method: 'Online Transfer', methodIcon: Landmark, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150' },
    { id: 'HH-2105', name: 'Adam Lim', initials: 'AL', class: 'Robotics A', amount: 'RM 250.00', date: 'Oct 28, 2023', status: 'Pending', method: 'Cash', methodIcon: Banknote },
    { id: 'HH-2033', name: 'Ramesh Kumar', class: 'Watercolour Masterclass', amount: 'RM 320.00', date: 'Sep 30, 2023', status: 'Overdue', method: 'Online Transfer', methodIcon: Landmark, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150' },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Top Summary & Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Revenue Summary */}
        <div className="col-span-12 lg:col-span-8 bg-[#121214] rounded-xl p-8 shadow-hobby border border-outline-variant flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-[10px] font-bold text-[#a1a1aa] uppercase tracking-[0.2em] mb-1">Estimated Monthly Revenue</p>
                <h2 className="text-3xl font-bold text-white tracking-tight">RM 24,850.00</h2>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-500 rounded-lg text-[10px] font-bold shadow-sm border border-emerald-500/20">
                <TrendingUp size={14} />
                <span>+12.5% vs last month</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { label: 'Collected', value: 'RM 18,200', progress: 73, color: 'bg-primary' },
                { label: 'Pending', value: 'RM 4,150', progress: 16, color: 'bg-[#3f3f46]' },
                { label: 'Overdue', value: 'RM 2,500', progress: 10, color: 'bg-red-500', warning: true },
              ].map((item) => (
                <div key={item.label} className={cn(
                  "p-5 rounded-xl border transition-all",
                  item.warning ? "bg-red-500/5 border-red-500/20" : "bg-[#18181b] border-[#27272a]"
                )}>
                  <p className={cn("text-[9px] font-bold uppercase tracking-[0.2em] mb-1 opacity-70", item.warning ? "text-red-500" : "text-[#a1a1aa]")}>
                    {item.label}
                  </p>
                  <p className={cn("text-xl font-bold", item.warning ? "text-red-500" : "text-white")}>{item.value}</p>
                  <div className="w-full bg-[#27272a] h-1.5 rounded-full mt-4 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${item.progress}%` }}
                      transition={{ duration: 1.2, ease: 'circOut' }}
                      className={cn("h-full rounded-full", item.color)} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions Card */}
        <div className="col-span-12 lg:col-span-4 bg-primary text-white rounded-xl p-8 shadow-lg flex flex-col justify-between relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-lg font-bold mb-3 uppercase tracking-wider">Payment Quick Actions</h3>
            <p className="text-xs text-white/70 mb-8 leading-relaxed font-medium">Manage fee collection and student reminders efficiently.</p>
          </div>
          <div className="space-y-3 relative z-10">
            <button className="w-full bg-white text-primary py-3 px-6 rounded-lg font-bold flex items-center justify-center gap-3 hover:shadow-xl active:scale-95 transition-all text-sm">
              <FileText size={18} />
              Export to PDF
            </button>
            <button className="w-full bg-white/10 text-white border border-white/20 py-3 px-6 rounded-lg font-bold flex items-center justify-center gap-3 hover:bg-white/20 active:scale-95 transition-all text-sm">
              <Megaphone size={18} />
              Bulk Reminders
            </button>
          </div>
          <Wallet className="absolute -right-8 -bottom-8 w-44 h-44 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
        </div>
      </div>

      {/* Fee Collection Table Section */}
      <div className="bg-[#121214] rounded-xl shadow-hobby border border-outline-variant overflow-hidden">
        <div className="p-8 border-b border-[#27272a] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 w-full md:w-auto">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest whitespace-nowrap">Fee Collection</h3>
            <div className="flex gap-2 bg-[#18181b] p-1 rounded-lg overflow-x-auto no-scrollbar border border-[#27272a]">
              <button className="px-4 py-1.5 bg-primary text-white rounded-md text-[10px] font-bold whitespace-nowrap uppercase tracking-widest">All Classes</button>
              <button className="px-4 py-1 text-[#a1a1aa] hover:bg-[#27272a] rounded-md text-[10px] font-bold transition-all whitespace-nowrap uppercase tracking-widest">Robotics A</button>
            </div>
          </div>
          <button className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest hover:underline shrink-0">
            <Filter size={14} />
            Filters
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#18181b] text-[#a1a1aa] uppercase text-[9px] font-bold tracking-[0.2em] border-b border-[#27272a]">
              <tr>
                <th className="px-8 py-5">Student</th>
                <th className="px-8 py-5">Class Name</th>
                <th className="px-8 py-5">Amount</th>
                <th className="px-8 py-5">Due Date</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5">Method</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#27272a]">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-[#18181b]/50 transition-colors group">
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-4">
                      {tx.avatar ? (
                        <img src={tx.avatar} alt={tx.name} className="w-8 h-8 rounded-full object-cover shadow-sm ring-2 ring-[#27272a]" />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-[#27272a] text-[#a1a1aa] flex items-center justify-center font-bold text-[10px]">
                          {tx.initials}
                        </div>
                      )}
                      <div>
                        <p className="font-bold text-white text-xs">{tx.name}</p>
                        <p className="text-[9px] text-[#71717a] uppercase tracking-wider font-bold">ID: {tx.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-xs font-bold text-[#a1a1aa]">{tx.class}</td>
                  <td className="px-8 py-4 font-bold text-white text-xs">{tx.amount}</td>
                  <td className={cn(
                    "px-8 py-4 text-xs font-bold",
                    tx.status === 'Overdue' ? "text-red-500" : "text-[#71717a]"
                  )}>
                    {tx.date}
                  </td>
                  <td className="px-8 py-4">
                    <span className={cn(
                      "inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[8px] font-black uppercase tracking-widest leading-none",
                      tx.status === 'Paid' ? "bg-emerald-500/10 text-emerald-500" :
                      tx.status === 'Overdue' ? "bg-red-500/10 text-red-500" : "bg-[#27272a] text-[#a1a1aa]"
                    )}>
                      <div className={cn("w-1 h-1 rounded-full", 
                        tx.status === 'Paid' ? "bg-emerald-500" :
                        tx.status === 'Overdue' ? "bg-red-500" : "bg-[#71717a]"
                      )} />
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-8 py-4">
                    <span className="text-[10px] font-bold text-[#a1a1aa] flex items-center gap-2 uppercase tracking-widest">
                       <tx.methodIcon size={12} className="text-primary/60" />
                       {tx.method}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {tx.status === 'Overdue' ? (
                        <button className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-all" title="Send Reminder">
                          <BellRing size={16} />
                        </button>
                      ) : (
                        <button className="p-2 text-[#a1a1aa] hover:text-white hover:bg-[#27272a] rounded-lg transition-all">
                          <Receipt size={16} />
                        </button>
                      )}
                      <button className="p-2 text-[#a1a1aa] hover:bg-[#27272a] rounded-lg transition-all">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-[#18181b] border-t border-[#27272a] flex justify-between items-center px-8">
          <p className="text-[10px] font-bold text-[#71717a] uppercase tracking-[0.2em]">Showing 1-10 of 48 transactions</p>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg text-[#a1a1aa] hover:bg-[#27272a] transition-all disabled:opacity-20" disabled>
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 rounded-lg bg-primary text-white text-[10px] font-bold shadow-lg">1</button>
            <button className="w-8 h-8 rounded-lg text-[#a1a1aa] hover:bg-[#27272a] text-[10px] font-bold transition-all">2</button>
            <button className="w-8 h-8 rounded-lg text-[#a1a1aa] hover:bg-[#27272a] text-[10px] font-bold transition-all">3</button>
            <button className="p-2 rounded-lg text-[#a1a1aa] hover:bg-[#27272a] transition-all">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-12 right-12 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-primary/20 transition-all z-50 border-4 border-[#121214]"
      >
        <PlusSquare size={20} />
      </motion.button>
    </div>
  );
}
