import React from 'react';
import { 
  BarChart3, 
  MessageSquare, 
  Mail, 
  SendHorizontal, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  XSquare, 
  History,
  Send,
  MoreVertical,
  CalendarCheck,
  CreditCard,
  UserPlus,
  CalendarDays
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function Communication() {
  const logs = [
    { id: 1, type: 'Attendance Reminder', time: '2m ago', recipients: 'Advanced Robotics (12 parents)', status: 'Delivered', channel: 'WhatsApp', icon: CalendarCheck },
    { id: 2, type: 'Fee Due Alert', time: '2h ago', recipients: 'Tan Ah Teck (Individual)', status: 'Opened', channel: 'Email', icon: CreditCard },
    { id: 3, type: 'Monthly Progress', time: 'Today, 9:15 AM', recipients: 'Saturday Art Morning (18 parents)', status: 'Sent', channel: 'WhatsApp', icon: Sparkles },
    { id: 4, type: 'Class Cancellation', time: 'Yesterday', recipients: 'All Classes (142 parents)', status: 'Failed (2)', channel: 'WhatsApp', icon: XSquare, error: true },
  ];

  return (
    <div className="space-y-8 pb-12">
      <div className="grid grid-cols-12 gap-8">
        {/* Left Column: Compose */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">Send a Message</h1>
            <p className="text-[#a1a1aa] text-sm mt-1">Select a template and broadcast updates instantly.</p>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { id: 'attendance', label: 'Attendance', icon: CalendarCheck },
              { id: 'fee', label: 'Fee Due', icon: CreditCard },
              { id: 'progress', label: 'Progress', icon: Sparkles, active: true },
              { id: 'cancel', label: 'Cancellation', icon: XSquare },
            ].map((t) => (
              <button
                key={t.id}
                className={cn(
                  "flex flex-col items-center gap-4 p-6 bg-[#121214] rounded-xl shadow-hobby transition-all text-center border",
                  t.active ? "border-primary" : "border-[#27272a] hover:border-primary/50"
                )}
              >
                <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", t.active ? "bg-primary text-white" : "bg-[#18181b] text-[#a1a1aa]")}>
                  <t.icon size={20} />
                </div>
                <span className={cn("text-[10px] font-bold uppercase tracking-widest leading-tight", t.active ? "text-white" : "text-[#a1a1aa]")}>{t.label}</span>
              </button>
            ))}
          </div>

          {/* Compose Card */}
          <div className="bg-[#121214] p-8 rounded-xl shadow-hobby border border-outline-variant">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-4 w-full md:w-auto">
                <span className="text-[10px] font-bold text-white uppercase tracking-widest whitespace-nowrap px-2">Recipient:</span>
                <select className="flex-1 md:flex-none bg-[#18181b] border border-[#27272a] rounded-lg px-4 py-2 text-xs font-bold text-white focus:ring-2 focus:ring-primary outline-none min-w-[200px] uppercase tracking-widest">
                  <option>All Parents</option>
                  <option>Advanced Robotics</option>
                  <option>Saturday Art Morning</option>
                  <option>Individual Student...</option>
                </select>
              </div>
              <div className="flex items-center p-1 bg-[#18181b] border border-[#27272a] rounded-lg w-full md:w-auto">
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2 rounded-md bg-[#27272a] shadow-sm font-bold text-[10px] text-white uppercase tracking-widest transition-all">
                  <MessageSquare size={14} /> WhatsApp
                </button>
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2 rounded-md font-bold text-[10px] text-[#a1a1aa] hover:text-white transition-all uppercase tracking-widest">
                  <Mail size={14} /> Email
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-[10px] font-bold text-[#a1a1aa] uppercase tracking-[0.2em] px-2">Message Preview</label>
                <span className="text-[9px] font-bold text-[#71717a] uppercase tracking-widest">142/160</span>
              </div>
              <div className="relative group">
                <textarea 
                  className="w-full bg-[#18181b] border border-[#27272a] rounded-xl p-6 text-sm leading-relaxed text-[#f4f4f5] focus:ring-2 focus:ring-primary/20 focus:bg-[#1c1c1f] outline-none transition-all resize-none min-h-[200px]"
                  defaultValue="Hi [Parent Name], this is a friendly reminder from HobbyHub that [Student Name] has an upcoming class today at [Time]. We look forward to seeing them!

Reply STOP to unsubscribe."
                />
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="absolute bottom-6 right-6 bg-primary text-white pl-8 pr-10 py-3 rounded-lg font-bold shadow-lg flex items-center gap-3 active:shadow-sm text-xs uppercase tracking-widest"
                >
                  Send Now
                  <Send size={16} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Stats & Log */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
          {/* Stats Bar */}
          <div className="bg-primary/5 p-8 rounded-xl border border-primary/10">
            <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
              <BarChart3 size={14} />
              Monthly Reach
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#121214] p-5 rounded-lg border border-[#27272a]">
                <p className="text-[9px] font-bold text-[#71717a] uppercase tracking-widest mb-1">WhatsApp</p>
                <p className="text-2xl font-black text-white">1.2k</p>
              </div>
              <div className="bg-[#121214] p-5 rounded-lg border border-[#27272a]">
                <p className="text-[9px] font-bold text-[#71717a] uppercase tracking-widest mb-1">Emails</p>
                <p className="text-2xl font-black text-white">450</p>
              </div>
            </div>
          </div>

          {/* History Log */}
          <div className="bg-[#121214] p-8 rounded-xl shadow-hobby border border-outline-variant flex-1 flex flex-col min-h-[400px]">
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-3">
                <History className="text-primary" size={18} />
                Activity
              </h4>
              <button className="text-primary font-bold text-[10px] uppercase tracking-widest hover:underline">View All</button>
            </div>

            <div className="space-y-6 flex-grow overflow-y-auto pr-2 custom-scrollbar">
              {logs.map((log) => (
                <div key={log.id} className="flex gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-[#18181b] border border-[#27272a] flex items-center justify-center shrink-0 group-hover:bg-[#27272a] transition-colors">
                    <log.icon size={18} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0 border-b border-[#27272a] pb-6 group-last:border-0 group-last:pb-0">
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-xs font-bold text-white truncate group-hover:text-primary transition-colors">{log.type}</p>
                      <span className="text-[9px] font-bold text-[#71717a] flex items-center gap-1 uppercase">
                        <Clock size={10} /> {log.time}
                      </span>
                    </div>
                    <p className="text-[10px] text-[#a1a1aa] mb-3 truncate font-bold uppercase tracking-widest opacity-60">{log.recipients}</p>
                    <div className="flex items-center gap-3">
                      <span className={cn(
                        "px-2 py-0.5 text-[8px] font-black uppercase tracking-widest rounded",
                        log.error ? "bg-red-500/10 text-red-500" : "bg-emerald-500/10 text-emerald-500"
                      )}>
                        {log.status}
                      </span>
                      <span className="text-[9px] font-bold text-[#71717a] flex items-center gap-1 uppercase tracking-widest">
                        {log.channel === 'WhatsApp' ? <MessageSquare size={10} /> : <Mail size={10} />}
                        {log.channel}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Personalization', text: 'Use [Student Name] to pull data automatically.', icon: Sparkles },
          { title: 'Schedule for Later', text: 'Broadcast at the perfect time for maximum visibility.', icon: Clock },
          { title: 'Compliance', text: 'Opt-out links are added to all messages automatically.', icon: ShieldCheck },
        ].map((tip) => (
          <div key={tip.title} className="p-6 bg-[#121214] rounded-xl border border-[#27272a] flex items-start gap-4 shadow-sm hover:border-primary/30 transition-all">
            <div className="w-8 h-8 rounded bg-primary/5 text-primary flex items-center justify-center shrink-0">
              <tip.icon size={16} />
            </div>
            <div>
              <p className="text-xs font-bold text-white mb-1 uppercase tracking-widest">{tip.title}</p>
              <p className="text-[10px] text-[#a1a1aa] leading-relaxed font-medium">{tip.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
