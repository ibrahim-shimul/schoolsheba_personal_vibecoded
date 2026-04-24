import { Sidebar, Topbar } from "@/components/dashboard/Layout";
import { Link } from "wouter";
import { 
  Globe, 
  FileText, 
  Eye,
  Edit,
  Image as ImageIcon,
  HardDrive
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardHome() {
  const stats = [
    { label: "ওয়েবসাইট ভিজিটর", value: "১,২৪৩", change: "+১২%", icon: Eye, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "প্রকাশিত নোটিশ", value: "২৪", change: "+৩", icon: FileText, color: "text-amber-500", bg: "bg-amber-500/10" },
    { label: "গ্যালারি ছবি", value: "১৮", change: "+২", icon: ImageIcon, color: "text-green-500", bg: "bg-green-500/10" },
    { label: "স্টোরেজ ব্যবহৃত", value: "৪৫%", change: "২ GB", icon: HardDrive, color: "text-purple-500", bg: "bg-purple-500/10" },
  ];

  return (
    <div className="flex h-screen bg-muted/30 overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 flex-shrink-0">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Topbar />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-6">
            
            {/* Welcome Banner */}
            <div className="bg-white rounded-2xl p-6 border border-border shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h1 className="text-2xl font-bold text-foreground mb-2">স্বাগতম, ঢাকা আইডিয়াল স্কুল! 👋</h1>
                <p className="text-muted-foreground">আপনার স্কুলের ওয়েবসাইট এখান থেকে নিয়ন্ত্রণ করুন।</p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <Button variant="outline" className="flex-1 md:flex-none bg-white hover:bg-muted/50 text-foreground" asChild>
                  <Link href="/portfolio/demo">
                    <Globe className="w-4 h-4 mr-2" />
                    লাইভ ওয়েবসাইট
                  </Link>
                </Button>
                <Button className="flex-1 md:flex-none bg-primary hover:bg-primary/90 text-white gap-2" asChild>
                  <Link href="/dashboard/edit">
                    <Edit className="w-4 h-4" />
                    এডিট ওয়েবসাইট
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-border shadow-sm flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg}`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium mb-1">{stat.label}</p>
                      <div className="flex items-baseline gap-2">
                        <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
                        <span className="text-xs font-medium text-emerald-500">{stat.change}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-2xl border border-border shadow-sm col-span-1 lg:col-span-2 overflow-hidden">
                <div className="p-5 border-b border-border flex items-center justify-between">
                  <h3 className="font-bold text-lg">দ্রুত কাজসমূহ</h3>
                </div>
                <div className="p-2 grid grid-cols-2 md:grid-cols-3 gap-2">
                  {[
                    { title: "নতুন নোটিশ যোগ", icon: FileText, color: "bg-orange-50 text-orange-600", link: "/dashboard/edit" },
                    { title: "ওয়েবসাইট এডিট", icon: Globe, color: "bg-blue-50 text-blue-600", link: "/dashboard/edit" },
                    { title: "গ্যালারি আপডেট", icon: Eye, color: "bg-green-50 text-green-600", link: "/dashboard/edit" },
                  ].map((action, i) => {
                    const Icon = action.icon;
                    return (
                      <Link key={i} href={action.link}>
                        <a className="flex flex-col items-center justify-center p-6 gap-3 rounded-xl hover:bg-muted transition-colors border border-transparent hover:border-border h-full">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${action.color}`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="text-sm font-medium text-foreground">{action.title}</span>
                        </a>
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Package Info */}
              <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
                <h3 className="font-bold text-lg mb-4">প্যাকেজ তথ্য</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-primary/20 bg-primary/5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-primary">বেসিক প্যাকেজ</span>
                      <span className="text-xs bg-primary text-white px-2 py-1 rounded-full font-medium">ট্রায়াল</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">আপনার ৩০ দিনের ফ্রি ট্রায়াল চলছে।</p>
                    
                    <div className="w-full bg-muted rounded-full h-2 mb-2 overflow-hidden">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>২ দিন ব্যবহৃত</span>
                      <span>২৮ দিন বাকি</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full text-primary border-primary/30 hover:bg-primary/5" asChild>
                    <Link href="/dashboard/billing">
                      প্যাকেজ আপগ্রেড করুন
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
