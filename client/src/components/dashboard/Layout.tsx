import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  Globe, 
  User, 
  CreditCard,
  LogOut,
  Bell,
  Menu,
  X,
  AlertTriangle,
  Clock,
  Users,
  BookOpen,
  CalendarCheck,
  FileText,
  Wallet,
  Briefcase,
  ArrowLeftRight
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@assets/image_1773012002142.png";

interface SidebarProps {
  onClose?: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  const [location, setLocation] = useLocation();
  const isPremiumMode = location.startsWith("/dashboard/premium");

  const websiteLinks = [
    { name: "ড্যাশবোর্ড", path: "/dashboard", icon: LayoutDashboard },
    { name: "ওয়েবসাইট এডিটিং", path: "/dashboard/edit", icon: Globe, target: "_self" },
    { name: "প্রোফাইল", path: "/dashboard/profile", icon: User, target: "_self" },
    { name: "প্যাকেজ ও বিলিং", path: "/dashboard/billing", icon: CreditCard, target: "_self" },
  ];

  const premiumLinks = [
    { name: "ওভারভিউ", path: "/dashboard/premium", icon: LayoutDashboard, target: "_self" },
    { name: "শিক্ষার্থী", path: "/dashboard/premium/students", icon: Users, target: "_self" },
    { name: "একাডেমিক", path: "/dashboard/premium/academic", icon: BookOpen, target: "_self" },
    { name: "উপস্থিতি", path: "/dashboard/premium/attendance", icon: CalendarCheck, target: "_self" },
    { name: "পরীক্ষা ও ফলাফল", path: "/dashboard/premium/exams", icon: FileText, target: "_self" },
    { name: "হিসাব ও ফি", path: "/dashboard/premium/accounts", icon: Wallet, target: "_self" },
    { name: "শিক্ষক ও স্টাফ", path: "/dashboard/premium/hr", icon: Briefcase, target: "_self" },
  ];

  const links = isPremiumMode ? premiumLinks : websiteLinks;

  const toggleMode = () => {
    if (isPremiumMode) {
      setLocation("/dashboard");
    } else {
      setLocation("/dashboard/premium");
    }
  };

  return (
    <div className="flex flex-col h-full bg-white border-r border-border">
      <div className="p-6 flex items-center justify-between">
        <Link href="/">
          <img src={logo} alt="SchoolSheba Logo" className="h-8 object-contain cursor-pointer" />
        </Link>
        {onClose && (
          <button onClick={onClose} className="md:hidden">
            <X className="w-6 h-6 text-muted-foreground" />
          </button>
        )}
      </div>

      <div className="px-4 mb-4">
        <div className="bg-muted rounded-xl p-1 flex relative">
          <button 
            onClick={() => setLocation("/dashboard")}
            className={`flex-1 text-xs font-medium py-2 px-2 rounded-lg z-10 transition-colors ${!isPremiumMode ? 'bg-white shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            ওয়েবসাইট বিল্ডার
          </button>
          <button 
            onClick={() => setLocation("/dashboard/premium")}
            className={`flex-1 text-xs font-medium py-2 px-2 rounded-lg z-10 transition-colors ${isPremiumMode ? 'bg-primary text-white shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
          >
            ম্যানেজমেন্ট <span className="ml-1 bg-amber-400 text-amber-950 text-[9px] px-1 py-0.5 rounded uppercase font-bold">Pro</span>
          </button>
        </div>
      </div>

      {!isPremiumMode && (
        <div className="px-4 mb-6">
          <div className="bg-primary/10 rounded-xl p-4">
            <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">বর্তমান প্যাকেজ</div>
            <div className="font-bold text-foreground flex items-center gap-1.5">
              ফ্রি ট্রায়াল <span className="bg-primary text-white text-[10px] px-1.5 py-0.5 rounded uppercase">Basic</span>
            </div>
            <div className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> মেয়াদ: ২৮ দিন বাকি
            </div>
            <Button size="sm" className="w-full mt-3 h-8 text-xs bg-primary hover:bg-primary/90" asChild>
              <Link href="/dashboard/billing">প্যাকেজ আপগ্রেড করুন</Link>
            </Button>
          </div>
        </div>
      )}

      {isPremiumMode && (
        <div className="px-4 mb-6">
          <div className="bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 rounded-xl p-4">
            <div className="text-xs font-semibold text-violet-600 uppercase tracking-wider mb-1">বর্তমান প্যাকেজ</div>
            <div className="font-bold text-foreground flex items-center gap-1.5">
              প্রিমিয়াম <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-[10px] px-1.5 py-0.5 rounded uppercase shadow-sm">Pro</span>
            </div>
            <div className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
              সকল এক্সেস চালু আছে
            </div>
          </div>
        </div>
      )}

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        {links.map((link) => {
          const Icon = link.icon;
          // exact match for overview, startsWith for others
          const isActive = link.path === "/dashboard" || link.path === "/dashboard/premium" 
            ? location === link.path 
            : location.startsWith(link.path);
          
          if (link.target === "_blank") {
            return (
              <a 
                key={link.path}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive 
                    ? (isPremiumMode ? "bg-violet-500/10 text-violet-600" : "bg-primary/10 text-primary") 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
                onClick={onClose}
              >
                <Icon className={`w-5 h-5 ${isActive ? (isPremiumMode ? "text-violet-600" : "text-primary") : "text-muted-foreground"}`} />
                {link.name}
              </a>
            );
          }

          return (
            <Link key={link.path} href={link.path}>
              <a 
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive 
                    ? (isPremiumMode ? "bg-violet-500/10 text-violet-600" : "bg-primary/10 text-primary") 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
                onClick={onClose}
              >
                <Icon className={`w-5 h-5 ${isActive ? (isPremiumMode ? "text-violet-600" : "text-primary") : "text-muted-foreground"}`} />
                {link.name}
              </a>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <Link href="/auth">
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors">
            <LogOut className="w-5 h-5" />
            লগআউট
          </a>
        </Link>
      </div>
    </div>
  );
}

export function Topbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTrialPopup, setShowTrialPopup] = useState(false);

  // Show the trial popup once per session
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("trialPopupSeen");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowTrialPopup(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismissPopup = () => {
    setShowTrialPopup(false);
    sessionStorage.setItem("trialPopupSeen", "true");
  };

  return (
    <>
      <header className="bg-white border-b border-border h-16 flex items-center justify-between px-4 md:px-6 sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden p-2 -ml-2 text-muted-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="hidden md:block">
            <h2 className="text-lg font-bold text-foreground">ঢাকা আইডিয়াল স্কুল</h2>
            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              amar-school.schoolsheba.com
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex gap-2 h-9" asChild>
            <Link href="/portfolio/demo" target="_blank">
              <Globe className="w-4 h-4" />
              ওয়েবসাইট দেখুন
            </Link>
          </Button>

          <button className="relative p-2 text-muted-foreground hover:bg-muted rounded-full transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
          </button>

          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm border border-primary/30">
            DI
          </div>
        </div>
      </header>

      {/* Trial Reminder Popup Overlay */}
      {showTrialPopup && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-primary/10 p-6 flex flex-col items-center text-center border-b border-primary/10">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-primary">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground">৩০ দিনের ফ্রি ট্রায়াল চলছে</h3>
              <p className="text-sm text-muted-foreground mt-2">আপনার অ্যাকাউন্টের মেয়াদ শেষ হতে ২৮ দিন বাকি আছে</p>
            </div>
            <div className="p-6">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800 mb-6 flex gap-3 items-start">
                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                <p>ট্রায়াল পিরিয়ড শেষ হওয়ার পর আপনার অ্যাকাউন্টটি নিষ্ক্রিয় হয়ে যাবে এবং ওয়েবসাইটটি আর্কাইভ করা হবে। নিরবচ্ছিন্ন সেবা পেতে আজই প্যাকেজ আপগ্রেড করুন।</p>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={dismissPopup}>
                  পরে দেখবো
                </Button>
                <Button className="flex-1 bg-primary text-white" onClick={dismissPopup} asChild>
                  <Link href="/dashboard/billing">
                    প্যাকেজ দেখুন
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="absolute top-0 left-0 w-64 h-full bg-white shadow-xl animate-in slide-in-from-left-full duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar onClose={() => setMobileMenuOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
