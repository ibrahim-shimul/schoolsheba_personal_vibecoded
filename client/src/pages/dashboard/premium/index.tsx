import { Sidebar, Topbar } from "@/components/dashboard/Layout";
import { Link } from "wouter";
import { 
  Users, 
  BookOpen, 
  Wallet, 
  TrendingUp,
  UserPlus,
  FileText,
  CreditCard,
  GraduationCap,
  CalendarDays,
  BellRing
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from "recharts";

export default function PremiumDashboardHome() {
  const stats = [
    { label: "মোট শিক্ষার্থী", value: "১,২৪৩", change: "+৪৫", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "মোট শিক্ষক", value: "৮৪", change: "+২", icon: BookOpen, color: "text-violet-500", bg: "bg-violet-500/10" },
    { label: "আজকের ফি কালেকশন", value: "৳ ৪৫,২০০", change: "+১২%", icon: Wallet, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { label: "মোট উপস্থিতি", value: "৯২%", change: "আজ", icon: TrendingUp, color: "text-amber-500", bg: "bg-amber-500/10" },
  ];

  const attendanceData = [
    { name: "শনি", value: 92 },
    { name: "রবি", value: 95 },
    { name: "সোম", value: 89 },
    { name: "মঙ্গল", value: 94 },
    { name: "বুধ", value: 91 },
    { name: "বৃহঃ", value: 85 },
  ];

  const revenueData = [
    { name: "জানু", income: 450000, expense: 200000 },
    { name: "ফেব্রু", income: 520000, expense: 210000 },
    { name: "মার্চ", income: 480000, expense: 250000 },
    { name: "এপ্রিল", income: 610000, expense: 220000 },
    { name: "মে", income: 590000, expense: 240000 },
    { name: "জুন", income: 650000, expense: 230000 },
  ];

  return (
    <div className="flex h-screen bg-muted/30 overflow-hidden">
      <div className="hidden md:block w-64 flex-shrink-0">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Topbar />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-6">
            
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl p-6 md:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="relative z-10">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">স্বাগতম, ঢাকা আইডিয়াল স্কুল! 👋</h1>
                <p className="text-violet-100 font-medium text-sm md:text-base">স্কুলের সার্বিক পরিস্থিতির আজকের সারসংক্ষেপ নিচে দেওয়া হলো।</p>
              </div>
              <div className="flex gap-3 w-full md:w-auto relative z-10">
                <Link href="/dashboard/premium/students/add">
                  <Button className="w-full md:w-auto bg-white text-violet-600 hover:bg-white/90 shadow-sm font-semibold">
                    <UserPlus className="w-4 h-4 mr-2" />
                    নতুন শিক্ষার্থী ভর্তি
                  </Button>
                </Link>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-border shadow-sm flex items-center gap-4 hover:shadow-md hover:border-violet-200 transition-all group">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${stat.bg} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium mb-1">{stat.label}</p>
                      <div className="flex items-baseline gap-2">
                        <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
                        <span className="text-xs font-semibold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">{stat.change}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Revenue Chart */}
              <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">আয় ও ব্যয়ের হিসাব</h3>
                    <p className="text-sm text-muted-foreground">বিগত ৬ মাসের আর্থিক বিবরণী</p>
                  </div>
                  <select className="bg-muted/50 border-none text-sm rounded-lg px-3 py-1.5 outline-none cursor-pointer">
                    <option>২০২৬</option>
                    <option>২০২৫</option>
                  </select>
                </div>
                <div className="h-[280px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} tickFormatter={(value) => `${value / 1000}k`} />
                      <Tooltip 
                        cursor={{ fill: '#F3F4F6' }}
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      />
                      <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                      <Bar dataKey="income" name="আয়" fill="#10B981" radius={[4, 4, 0, 0]} maxBarSize={40} />
                      <Bar dataKey="expense" name="ব্যয়" fill="#F43F5E" radius={[4, 4, 0, 0]} maxBarSize={40} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Attendance Trend */}
              <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">শিক্ষার্থী উপস্থিতির হার</h3>
                    <p className="text-sm text-muted-foreground">চলতি সপ্তাহের দৈনিক গড় উপস্থিতি</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-violet-600">৯১.৫%</div>
                    <p className="text-xs text-muted-foreground">গড় উপস্থিতি</p>
                  </div>
                </div>
                <div className="h-[280px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={attendanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#7C3AED" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} domain={['dataMin - 5', 'dataMax + 5']} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        formatter={(value) => [`${value}%`, 'উপস্থিতি']}
                      />
                      <Area type="monotone" dataKey="value" stroke="#7C3AED" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Recent Activities / Timeline */}
              <div className="bg-white rounded-2xl border border-border shadow-sm p-6 col-span-1 lg:col-span-2">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg text-foreground">সাম্প্রতিক কার্যক্রম</h3>
                  <Button variant="ghost" size="sm" className="text-violet-600">সব দেখুন</Button>
                </div>
                <div className="space-y-6">
                  {[
                    { title: "বেতন সংগ্রহ", desc: "রাকিব হাসান (১০ম শ্রেণি) এর বেতন জমা হয়েছে ৳১,২০০", time: "১০ মিনিট আগে", icon: Wallet, color: "text-emerald-500", bg: "bg-emerald-50" },
                    { title: "নতুন নোটিশ", desc: "'অর্ধবার্ষিক পরীক্ষার রুটিন' নোটিশ বোর্ডে প্রকাশিত হয়েছে", time: "১ ঘণ্টা আগে", icon: BellRing, color: "text-blue-500", bg: "bg-blue-50" },
                    { title: "শিক্ষার্থী ভর্তি", desc: "২ জন নতুন শিক্ষার্থী ভর্তি হয়েছে ৬ষ্ঠ শ্রেণিতে", time: "গতকাল", icon: UserPlus, color: "text-violet-500", bg: "bg-violet-50" },
                    { title: "স্টাফ আপডেট", desc: "নতুন ইংরেজি শিক্ষক হিসেবে যোগদান করেছেন ফাতেমা বেগম", time: "২ দিন আগে", icon: Users, color: "text-amber-500", bg: "bg-amber-50" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 relative">
                      {i !== 3 && <div className="absolute left-6 top-10 bottom-[-20px] w-px bg-border"></div>}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 ${item.bg}`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div className="flex-1 pb-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                          <span className="text-xs text-muted-foreground font-medium">{item.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Management Shortcuts & Mini Calendar */}
              <div className="space-y-6">
                
                {/* Upcoming Events */}
                <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
                  <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                    <CalendarDays className="w-5 h-5 text-violet-600" />
                    আসন্ন ইভেন্ট
                  </h3>
                  <div className="space-y-3">
                    <div className="flex gap-3 items-center p-3 rounded-xl bg-violet-50 border border-violet-100">
                      <div className="bg-white rounded-lg p-2 text-center min-w-[50px] shadow-sm">
                        <span className="block text-xs font-bold text-red-500">মে</span>
                        <span className="block text-lg font-bold text-foreground leading-none mt-1">১৫</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-foreground">অর্ধবার্ষিক পরীক্ষা শুরু</h4>
                        <p className="text-xs text-muted-foreground mt-0.5">৬ষ্ঠ - ১০ম শ্রেণি</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center p-3 rounded-xl hover:bg-muted/50 transition-colors border border-transparent">
                      <div className="bg-muted rounded-lg p-2 text-center min-w-[50px]">
                        <span className="block text-xs font-bold text-red-500">মে</span>
                        <span className="block text-lg font-bold text-foreground leading-none mt-1">২৬</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-foreground">অভিভাবক সমাবেশ</h4>
                        <p className="text-xs text-muted-foreground mt-0.5">সকাল ১০:০০ টা</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                  <div className="p-5 border-b border-border bg-muted/10">
                    <h3 className="font-bold text-foreground">কুইক অ্যাকশন</h3>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-y divide-border">
                    {[
                      { title: "ফি কালেকশন", icon: CreditCard, color: "text-emerald-600" },
                      { title: "রেজাল্ট তৈরি", icon: FileText, color: "text-blue-600" },
                      { title: "উপস্থিতি", icon: Users, color: "text-amber-600" },
                      { title: "একাডেমিক", icon: GraduationCap, color: "text-fuchsia-600" },
                    ].map((action, i) => {
                      const Icon = action.icon;
                      return (
                        <div key={i} className="flex flex-col items-center justify-center p-5 gap-2 hover:bg-muted/50 transition-colors cursor-pointer group">
                          <Icon className={`w-6 h-6 ${action.color} group-hover:scale-110 transition-transform`} />
                          <span className="text-sm font-medium text-foreground">{action.title}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}