import React from 'react';
import { 
  Users, 
  Wallet, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Palette, 
  Terminal, 
  Music, 
  Award,
  TrendingUp,
  ExternalLink,
  Cpu
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function Dashboard() {
  const stats = [
    { 
      id: 'total-revenue', 
      label: 'Total Revenue', 
      value: '$128,430', 
      trend: '↑ 12.5% from last month', 
      icon: TrendingUp, 
      color: 'text-emerald-500' 
    },
    { 
      id: 'active-tasks', 
      label: 'Active Tasks', 
      value: '42', 
      trend: '65% complete', 
      icon: Cpu, 
      color: 'text-primary' 
    },
    { 
      id: 'completed', 
      label: 'Completed', 
      value: '1,204', 
      trend: 'All time performance', 
      icon: Award, 
      color: 'text-[#a1a1aa]' 
    },
    { 
      id: 'team-health', 
      label: 'Team Health', 
      value: '98%', 
      trend: 'Peak productivity', 
      icon: Users, 
      color: 'text-primary' 
    },
  ];

  const activities = [
    { id: 1, name: 'Alex Reeves', action: 'updated', target: 'Brand Assets', time: '2 mins ago', initials: 'AL', accent: 'bg-red-500' },
    { id: 2, name: 'Sarah Kline', action: 'deployed', target: 'v2.4.0', time: '1 hour ago', initials: 'SK', accent: 'bg-emerald-500' },
    { id: 3, name: 'Marcus Bell', action: 'left a comment on', target: 'Project Aether', time: '4 hours ago', initials: 'MB', accent: 'bg-indigo-500' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Dashboard Overview</h1>
          <p className="text-[#a1a1aa] text-sm mt-1">Monitor project velocity and clinical metrics.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium shadow-lg hover:shadow-primary/20 active:scale-95 transition-all text-sm">
            Create Project
          </button>
        </div>
      </div>

      {/* Stats Table/Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-[#121214] p-6 rounded-xl border border-outline-variant shadow-hobby group hover:border-primary/50 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <p className="text-[10px] font-bold text-[#a1a1aa] uppercase tracking-widest">{stat.label}</p>
              <stat.icon size={16} className={stat.color} />
            </div>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            {stat.id === 'active-tasks' ? (
              <div className="h-1 w-full bg-[#27272a] rounded-full mt-4 overflow-hidden">
                <div className="h-full bg-primary w-[65%]" />
              </div>
            ) : (
              <p className={cn("text-[10px] font-medium mt-2", stat.id === 'total-revenue' ? "text-emerald-500" : "text-[#71717a]")}>
                {stat.trend}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Velocity and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Project Velocity Chart */}
        <div className="lg:col-span-8 bg-[#121214] rounded-xl border border-outline-variant flex flex-col">
          <div className="p-6 border-b border-outline-variant flex justify-between items-center">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest">Project Velocity</h3>
            <span className="text-[10px] font-bold text-[#a1a1aa]">Weekly View</span>
          </div>
          
          <div className="p-8 flex-1 flex flex-col min-h-[300px]">
            <div className="flex-1 flex items-end gap-4 pb-8">
              {[40, 60, 85, 50, 70, 95, 45].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-3 h-full justify-end">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    className={cn(
                      "w-full rounded-sm transition-all duration-700",
                      i === 2 || i === 5 ? "bg-primary shadow-[0_0_15px_rgba(99,102,241,0.3)]" : "bg-[#27272a]"
                    )}
                  />
                  <span className="text-[10px] font-bold text-[#71717a] uppercase">{['M','T','W','T','F','S','S'][i]}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-outline-variant flex justify-between items-center">
              <div>
                <p className="text-[10px] font-bold text-[#a1a1aa] uppercase tracking-widest mb-1">Most Active Project</p>
                <p className="text-sm font-bold text-white">Aether UI Components</p>
              </div>
              <button className="bg-transparent border border-outline-variant text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-[#1e1e21] transition-all">
                Details
              </button>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-4 bg-[#121214] rounded-xl border border-outline-variant p-6 flex flex-col">
          <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 px-2">Recent Activity</h3>
          <div className="space-y-2 flex-1">
            {activities.map((activity) => (
              <div key={activity.id} className="flex gap-4 p-3 hover:bg-[#1e1e21] rounded-xl transition-all group">
                <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0", activity.accent)}>
                  {activity.initials}
                </div>
                <div>
                  <p className="text-xs text-[#f4f4f5] leading-relaxed">
                    <span className="font-bold">{activity.name}</span> {activity.action} <span className="font-bold text-white">{activity.target}</span>
                  </p>
                  <p className="text-[10px] text-[#71717a] mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 bg-[#1e1e21] text-white py-3 rounded-lg text-xs font-bold hover:bg-[#27272a] transition-all border border-outline-variant/30">
            View All Activity
          </button>
        </div>
      </div>
    </div>
  );
}
