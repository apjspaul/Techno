import React from 'react';
import { 
  Search, 
  MoreVertical, 
  Phone, 
  Mail, 
  MessageCircle,
  Plus
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Student } from '../types';

export default function Students() {
  const students: Student[] = [
    { id: '1', name: 'Aizat Rahim', class: 'Robotics Level 2', teacher: 'Mrs. Rahim', attendance: 92, paymentStatus: 'paid', avatar: 'https://images.unsplash.com/photo-1544667507-2fd62b71947d?auto=format&fit=crop&q=80&w=150' },
    { id: '2', name: 'Mei Ling Tan', class: 'Violin Beginners', teacher: 'Mr. Tan', attendance: 85, paymentStatus: 'overdue', avatar: 'https://images.unsplash.com/photo-1550523456-9ef007c030d3?auto=format&fit=crop&q=80&w=150' },
    { id: '3', name: 'Siti Nurhaliza', class: 'Digital Art', teacher: 'Pn. Aminah', attendance: 98, paymentStatus: 'partial', avatar: 'https://images.unsplash.com/photo-1517677129300-07b130802f46?auto=format&fit=crop&q=80&w=150', age: 11 },
    { id: '4', name: 'Kavish Murali', class: 'Python for Kids', teacher: 'Mrs. Murali', attendance: 95, paymentStatus: 'paid', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* Student List Column */}
      <div className="flex-1 space-y-6 w-full">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {students.map((student, idx) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "bg-[#121214] p-6 rounded-xl border border-outline-variant transition-all group cursor-pointer hover:border-primary shadow-hobby",
                student.id === '3' ? "ring-2 ring-primary border-transparent" : "hover:shadow-lg"
              )}
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-lg overflow-hidden shadow-sm">
                  <img src={student.avatar} alt={student.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-white truncate">{student.name}</h3>
                  <p className="text-[11px] text-[#a1a1aa] flex items-center gap-2 mt-1">
                    {student.class} • <span className="text-primary font-bold">{student.teacher}</span>
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <div className={cn("w-1.5 h-1.5 rounded-full", student.attendance > 90 ? "bg-emerald-500" : "bg-amber-500")} />
                      <span className="text-[9px] font-bold text-[#71717a] uppercase tracking-widest">{student.attendance}% ATTENDANCE</span>
                    </div>
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest",
                      student.paymentStatus === 'paid' ? "bg-emerald-500/10 text-emerald-500" :
                      student.paymentStatus === 'overdue' ? "bg-red-500/10 text-red-500" :
                      student.paymentStatus === 'partial' ? "bg-amber-500/10 text-amber-500" : "bg-[#1e1e21] text-[#a1a1aa]"
                    )}>
                      {student.paymentStatus}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detailed View Column */}
      <div className="w-full lg:w-[480px] bg-[#121214] rounded-xl shadow-2xl border border-outline-variant flex flex-col h-auto lg:h-[calc(100vh-128px)] sticky top-24 overflow-hidden">
        {/* Profile Header */}
        <div className="p-8 border-b border-[#27272a] bg-[#18181b]">
          <div className="flex items-start justify-between mb-8">
            <div className="flex gap-6">
              <div className="w-20 h-20 rounded-xl overflow-hidden ring-4 ring-[#27272a] shadow-lg">
                <img src={students[2].avatar} alt={students[2].name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{students[2].name}</h2>
                <p className="text-[10px] font-bold text-[#71717a] mt-1 tracking-widest uppercase">ID: #STU-9902</p>
                <div className="flex gap-2 mt-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-[9px] font-bold uppercase tracking-widest">Age 11</span>
                  <span className="px-3 py-1 bg-[#27272a] text-[#a1a1aa] rounded-lg text-[9px] font-bold uppercase tracking-widest">Digital Art</span>
                </div>
              </div>
            </div>
            <button className="w-8 h-8 rounded-lg hover:bg-[#27272a] flex items-center justify-center text-[#a1a1aa] transition-colors">
              <MoreVertical size={18} />
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg font-bold text-xs shadow-md hover:brightness-110 active:scale-95 transition-all">
              <MessageCircle size={16} fill="currentColor" />
              WhatsApp
            </button>
            <button className="p-3 rounded-lg border border-[#27272a] text-primary hover:bg-primary/5 transition-colors active:scale-90">
              <Phone size={18} />
            </button>
            <button className="p-3 rounded-lg border border-[#27272a] text-primary hover:bg-primary/5 transition-colors active:scale-90">
              <Mail size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar">
          {/* Progress Notes */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-[10px] font-bold text-[#a1a1aa] uppercase tracking-[0.2em]">Progress Notes</h4>
              <button className="text-primary font-bold text-[10px] uppercase tracking-widest flex items-center gap-1 hover:underline">
                <Plus size={12} /> Add Note
              </button>
            </div>
            <div className="space-y-6 relative before:content-[''] before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-[1px] before:bg-[#27272a]">
              <div className="relative pl-6">
                <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-[#121214]" />
                <div className="bg-[#18181b] p-4 rounded-xl border border-[#27272a]">
                  <p className="text-[9px] text-primary font-bold uppercase tracking-widest mb-2">Oct 24, 2023</p>
                  <p className="text-xs text-[#f4f4f5] leading-relaxed">Excellent use of color blending in the new landscape piece. Shows great improvement in digital layer management.</p>
                </div>
              </div>
              <div className="relative pl-6">
                <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-[#27272a] ring-4 ring-[#121214]" />
                <div className="bg-[#18181b] p-4 rounded-xl border border-[#27272a]">
                  <p className="text-[9px] text-[#71717a] font-bold uppercase tracking-widest mb-2">Oct 17, 2023</p>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed">Struggled slightly with the drawing tablet sensitivity. Needs more practice with line-weight control.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Attendance Chart */}
          <section>
            <h4 className="text-[10px] font-bold text-[#a1a1aa] uppercase tracking-[0.2em] mb-6">Attendance Overview</h4>
            <div className="bg-[#18181b] p-6 rounded-xl h-44 flex items-end gap-3 justify-between border border-[#27272a]">
              {[
                { label: 'Jun', h: '80%', color: 'bg-primary' },
                { label: 'Jul', h: '95%', color: 'bg-primary' },
                { label: 'Aug', h: '90%', color: 'bg-primary' },
                { label: 'Sep', h: '100%', color: 'bg-primary' },
                { label: 'Oct', h: '70%', color: 'bg-indigo-900/40' },
              ].map((m) => (
                <div key={m.label} className="flex flex-col items-center gap-2 w-full">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: m.h }}
                    transition={{ duration: 1.2, ease: 'circOut' }}
                    className={cn("w-full rounded-t shadow-[0_0_10px_rgba(99,102,241,0.2)]", m.color)} 
                  />
                  <span className="text-[9px] font-bold text-[#71717a] uppercase tracking-widest">{m.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Payment History */}
          <section>
            <h4 className="text-[10px] font-bold text-[#a1a1aa] uppercase tracking-[0.2em] mb-6">Payment History</h4>
            <div className="overflow-hidden rounded-xl border border-[#27272a]">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#18181b] border-b border-[#27272a]">
                  <tr>
                    <th className="p-4 text-[9px] font-bold text-[#a1a1aa] uppercase tracking-widest">Invoice</th>
                    <th className="p-4 text-[9px] font-bold text-[#a1a1aa] uppercase tracking-widest">Date</th>
                    <th className="p-4 text-[9px] font-bold text-[#a1a1aa] uppercase tracking-widest text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#27272a]">
                  {[
                    { inv: 'INV-2023-10', date: 'Oct 10', status: 'PARTIAL', color: 'text-amber-500 bg-amber-500/10' },
                    { inv: 'INV-2023-09', date: 'Sep 10', status: 'PAID', color: 'text-emerald-500 bg-emerald-500/10' },
                    { inv: 'INV-2023-08', date: 'Aug 10', status: 'PAID', color: 'text-emerald-500 bg-emerald-500/10' },
                  ].map((p) => (
                    <tr key={p.inv} className="hover:bg-[#18181b] transition-colors group">
                      <td className="p-4 text-xs font-bold text-white">{p.inv}</td>
                      <td className="p-4 text-xs text-[#a1a1aa] font-medium">{p.date}, 2023</td>
                      <td className="p-4 text-right">
                        <span className={cn("text-[8px] font-black px-2 py-1 rounded", p.color)}>{p.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
