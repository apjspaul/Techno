import React from 'react';
import { 
  PlusCircle, 
  Palette, 
  Cpu, 
  Music, 
  Languages, 
  MoreVertical, 
  CheckCircle2, 
  Clock, 
  XCircle,
  AlertCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';
import { cn } from '../lib/utils';

const attendanceData = [
  { name: 'Mon', value: 85 },
  { name: 'Tue', value: 92 },
  { name: 'Wed', value: 78 },
  { name: 'Thu', value: 95, current: true },
  { name: 'Fri', value: 80 },
  { name: 'Sat', value: 98 },
  { name: 'Sun', value: 0 },
];

export default function Classes() {
  const classes = [
    { id: 1, name: 'Advanced Watercolor', time: 'Wed 4:00 PM • 90 mins', enrollment: '12/15', status: 'Enrolled', teacher: 'Mr. Adrian', price: 'RM 180', icon: Palette, bgColor: 'text-primary' },
    { id: 2, name: 'Robotics Level 1', time: 'Sat 10:00 AM • 120 mins', enrollment: '14/15', status: 'Enrolled', teacher: 'Ms. Sarah', price: 'RM 250', icon: Cpu, bgColor: 'text-[#6366f1]' },
    { id: 3, name: 'Piano Basics', time: 'Fri 3:30 PM • 60 mins', enrollment: '10/10', status: 'Full', teacher: 'Mr. Julian', price: 'RM 150', icon: Music, bgColor: 'text-[#a1a1aa]', border: 'border-l-4 border-primary' },
    { id: 4, name: 'English for Kids', time: 'Mon 5:00 PM • 60 mins', enrollment: '6/12', status: 'Enrolled', teacher: 'Ms. Lee', price: 'RM 120', icon: Languages, bgColor: 'text-[#f4f4f5]' },
  ];

  const roster = [
    { name: 'Zarith Amira', initials: 'ZA', progress: '9/10', status: 'present', color: 'bg-primary text-white' },
    { name: 'Kevin Huang', initials: 'KH', progress: '8/10', status: 'pending', color: 'bg-[#3f3f46] text-white' },
    { name: 'Siti Laila', initials: 'SL', progress: '10/10', status: 'present', color: 'bg-primary text-white' },
    { name: 'Ravi Kumar', initials: 'RK', progress: '4/10', status: 'absent', color: 'bg-[#27272a] text-[#a1a1aa]' },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Class & Schedule</h1>
          <p className="text-[#a1a1aa] text-sm mt-1">Manage your weekly sessions and monitor student enrollment.</p>
        </div>
        <button className="bg-primary text-white px-6 py-2.5 rounded-lg flex items-center gap-2 font-bold shadow-lg hover:shadow-primary/20 active:scale-95 transition-all text-sm">
          <PlusCircle size={18} />
          <span>Create Class</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Classes Grid */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest px-2">Active Classes</h3>
            <span className="px-3 py-1 bg-[#121214] border border-outline-variant rounded-full text-[10px] font-bold text-[#a1a1aa] uppercase tracking-widest">This Week</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {classes.map((cls, idx) => (
              <motion.div
                key={cls.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "bg-[#121214] p-6 rounded-xl border border-outline-variant hover:border-primary transition-all cursor-pointer group flex flex-col gap-4 shadow-hobby",
                  cls.border
                )}
              >
                <div className="flex justify-between items-start">
                  <div className={cn("p-2", cls.bgColor)}>
                    <cls.icon size={20} />
                  </div>
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest",
                    cls.status === 'Full' ? "bg-red-500/10 text-red-500" : "bg-emerald-500/10 text-emerald-500"
                  )}>
                    {cls.status} ({cls.enrollment})
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-primary transition-colors">{cls.name}</h4>
                  <p className="text-[#a1a1aa] text-[11px] mt-1 flex items-center gap-2 font-medium">
                    <Clock size={12} /> {cls.time}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#27272a]">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#3f3f46] border border-outline-variant" />
                    <span className="text-xs font-bold text-[#f4f4f5]">{cls.teacher}</span>
                  </div>
                  <span className="text-sm font-bold text-emerald-500">{cls.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Roster View */}
        <div className="lg:col-span-4">
          <div className="bg-[#121214] rounded-xl border border-outline-variant flex flex-col shadow-hobby h-full">
            <div className="p-6 border-b border-[#27272a] bg-[#18181b]">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest">Class Roster</h3>
                  <p className="text-[10px] text-[#a1a1aa] mt-1 font-bold">12 STUDENTS ENROLLED</p>
                </div>
                <button className="text-[#a1a1aa] hover:text-white p-1 rounded-lg border border-transparent hover:border-[#27272a] transition-all">
                  <MoreVertical size={18} />
                </button>
              </div>
              <div className="flex items-center gap-4 bg-[#121214] p-3 rounded-lg border border-[#27272a]">
                <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                  <Palette size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Advanced Watercolor</p>
                  <p className="text-[9px] text-[#a1a1aa] uppercase tracking-widest font-bold">Wed • 4:00 PM</p>
                </div>
              </div>
            </div>

            <div className="p-6 flex flex-col gap-4 overflow-y-auto">
              {roster.map((student) => (
                <div key={student.name} className="flex flex-col gap-3 pb-4 border-b border-[#27272a] last:border-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={cn("w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold", student.color)}>
                        {student.initials}
                      </div>
                      <span className="text-xs font-bold text-[#f4f4f5]">{student.name}</span>
                    </div>
                    {student.status === 'present' && <CheckCircle2 size={16} className="text-emerald-500" />}
                    {student.status === 'absent' && <XCircle size={16} className="text-red-500" />}
                    {student.status === 'pending' && <AlertCircle size={16} className="text-[#71717a]" />}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex gap-1 flex-grow">
                      {[...Array(10)].map((_, i) => (
                        <div 
                          key={i} 
                          className={cn(
                            "w-full h-1 rounded-full",
                            i < parseInt(student.progress.split('/')[0]) ? "bg-primary" : "bg-[#27272a]"
                          )} 
                        />
                      ))}
                    </div>
                    <span className="text-[9px] font-bold text-[#a1a1aa] uppercase">{student.progress}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 mt-auto">
              <button className="w-full bg-[#1e1e21] border border-[#27272a] text-white py-2.5 rounded-lg font-bold text-xs hover:bg-[#27272a] transition-all">
                Full History
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Trends Chart */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#121214] p-8 rounded-xl border border-outline-variant shadow-hobby"
      >
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest px-2">Attendance Trends</h3>
            <p className="text-[10px] text-[#a1a1aa] mt-1 font-bold uppercase tracking-widest px-2">AGGREGATED WEEKLY DATA</p>
          </div>
          <div className="flex items-center gap-6 text-[9px] font-bold uppercase tracking-widest text-[#a1a1aa]">
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary" /> Present</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#27272a]" /> Absent</div>
          </div>
        </div>

        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={attendanceData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#27272a" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#71717a', fontSize: 10, fontWeight: 700 }} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#71717a', fontSize: 10, fontWeight: 700 }}
              />
              <Tooltip 
                cursor={{ fill: '#1e1e21' }} 
                contentStyle={{ backgroundColor: '#121214', borderRadius: '8px', border: '1px solid #27272a' }}
              />
              <Bar dataKey="value" radius={[4, 4, 4, 4]} barSize={32}>
                {attendanceData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.current ? '#6366f1' : '#27272a'} 
                    fillOpacity={entry.name === 'Sun' ? 0.3 : 1}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}
