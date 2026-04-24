import { 
  Palette, 
  Image as ImageIcon, 
  MousePointerClick,
  Smartphone,
  Monitor,
  Edit3,
  FileText,
  Phone,
  Trash2,
  Plus,
  MenuSquare,
  Info,
  Layers,
  ChevronRight,
  GraduationCap,
  Layout as LayoutIcon,
  ArrowLeft,
  Save,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Link } from "wouter";

export default function WebsiteEditor() {
  const [activeSection, setActiveSection] = useState("theme");

  const sections = [
    { id: "theme", name: "থিম ও ডিজাইন", icon: Palette },
    { id: "header", name: "হেডার ও লোগো", icon: MenuSquare },
    { id: "hero", name: "ব্যানার (Hero)", icon: ImageIcon },
    { id: "about", name: "প্রতিষ্ঠান পরিচিতি", icon: Info },
    { id: "notices", name: "নোটিশ বোর্ড", icon: FileText },
    { id: "gallery", name: "গ্যালারি", icon: Layers },
    { id: "admissions", name: "ভর্তি সংক্রান্ত", icon: GraduationCap },
    { id: "footer", name: "ফুটার ও যোগাযোগ", icon: Phone },
    { id: "advanced", name: "অ্যাডভান্সড বিল্ডার", icon: LayoutIcon },
  ];

  const activeSectionName = sections.find(s => s.id === activeSection)?.name;

  const renderOptions = () => {
    switch(activeSection) {
      case "theme":
        return (
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-sm mb-3 text-foreground">কালার থিম</h4>
              <div className="grid grid-cols-4 gap-3">
                {['bg-[#00A8FF]', 'bg-green-600', 'bg-purple-600', 'bg-red-600', 'bg-indigo-600', 'bg-teal-600', 'bg-orange-600', 'bg-slate-800'].map((color, i) => (
                  <button key={i} className={`w-full aspect-square rounded-lg ${color} ring-2 ring-offset-2 ${i === 0 ? 'ring-primary' : 'ring-transparent'} hover:scale-105 transition-transform shadow-sm`} />
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-3 text-foreground">ফন্ট স্টাইল</h4>
              <select className="w-full text-sm p-2.5 border border-border rounded-lg bg-white shadow-sm outline-none focus:border-primary">
                <option>Hind Siliguri (ডিফল্ট)</option>
                <option>Kalpurush</option>
                <option>Bangla Sangam MN</option>
              </select>
            </div>
          </div>
        );
      case "header":
        return (
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-sm mb-3 text-foreground">লোগো</h4>
              <div className="border-2 border-dashed border-border rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-primary/5 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 text-primary">
                  DI
                </div>
                <span className="text-sm font-medium text-foreground">লোগো পরিবর্তন করুন</span>
                <span className="text-xs text-muted-foreground mt-1">PNG বা SVG (Max 1MB)</span>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-3 text-foreground">স্কুলের নাম ও স্লোগান</h4>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">স্কুলের নাম</Label>
                  <Input defaultValue="ঢাকা আইডিয়াল স্কুল" className="h-10" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">স্লোগান</Label>
                  <Input defaultValue="শিক্ষাই জাতির মেরুদণ্ড" className="h-10" />
                </div>
              </div>
            </div>
          </div>
        );
      case "hero":
        return (
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-sm mb-3 text-foreground">ব্যানার ছবি</h4>
              <div className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-primary/5 hover:border-primary/50 transition-colors bg-muted/20 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                  alt="Banner preview"
                />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center mb-2">
                    <ImageIcon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">নতুন ব্যানার আপলোড</span>
                  <span className="text-xs text-muted-foreground mt-1">১৯২০ x ৮০0 পিক্সেল প্রস্তাবিত</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-3 text-foreground">ব্যানার কন্টেন্ট</h4>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">প্রধান শিরোনাম</Label>
                  <Input defaultValue="আধুনিক শিক্ষার বিশ্বস্ত প্রতিষ্ঠান" className="h-10" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">সাব-টাইটেল</Label>
                  <Textarea defaultValue="সুশিক্ষিত, নীতিবান ও আধুনিক বিশ্বের উপযোগী নাগরিক গড়ে তোলাই আমাদের লক্ষ্য।" className="h-24 resize-none leading-relaxed" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">বাটন টেক্সট</Label>
                  <Input defaultValue="অনলাইন অ্যাডমিশন" className="h-10" />
                </div>
              </div>
            </div>
          </div>
        );
      case "about":
        return (
          <div className="space-y-8">
            <div>
              <h4 className="font-medium text-sm mb-3 text-foreground">প্রতিষ্ঠান পরিচিতি</h4>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">শিরোনাম</Label>
                  <Input defaultValue="আমাদের সম্পর্কে" className="h-10" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">বিস্তারিত বিবরণ</Label>
                  <Textarea defaultValue="ঢাকা আইডিয়াল স্কুল একটি আধুনিক ও যুগোপযোগী শিক্ষাপ্রতিষ্ঠান। শিক্ষার্থীদের সুপ্ত প্রতিভার বিকাশ এবং তাদের সুনাগরিক হিসেবে গড়ে তোলার লক্ষ্যে আমরা নিরলস কাজ করে যাচ্ছি।" className="h-32 resize-none leading-relaxed" />
                </div>
              </div>
            </div>
            <div className="border-t border-border pt-6">
              <h4 className="font-medium text-sm mb-3 text-foreground">অধ্যক্ষের বাণী</h4>
              <div className="space-y-4">
                <div className="flex gap-4 items-center mb-2">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80" alt="Principal" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" />
                  <Button variant="outline" size="sm" className="h-9">ছবি পরিবর্তন</Button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">নাম</Label>
                    <Input defaultValue="ড. মো. আব্দুর রহমান" className="h-10" />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">পদবী</Label>
                    <Input defaultValue="অধ্যক্ষ" className="h-10" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">বাণী</Label>
                  <Textarea defaultValue="শিক্ষার্থীদের প্রকৃত মানুষ হিসেবে গড়ে তোলাই আমাদের ব্রত।" className="h-24 resize-none leading-relaxed" />
                </div>
              </div>
            </div>
          </div>
        );
      case "notices":
        return (
          <div className="space-y-4 flex flex-col h-full">
            <Button className="w-full bg-[#00A8FF] hover:bg-[#0090DF] text-white shadow-sm" size="sm">
              <Plus className="w-4 h-4 mr-2" /> নতুন নোটিশ যোগ করুন
            </Button>
            <div className="space-y-3 overflow-y-auto pr-1 pb-4">
              {[
                { title: "৬ষ্ঠ থেকে ৯ম শ্রেণির বার্ষিক পরীক্ষার রুটিন", date: "১৫ মার্চ, ২০২৬", tag: "পরীক্ষা" },
                { title: "পবিত্র রমজান উপলক্ষে ছুটির নোটিশ", date: "১০ মার্চ, ২০২৬", tag: "ছুটি" },
                { title: "বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৬", date: "০৫ মার্চ, ২০২৬", tag: "ইভেন্ট" },
                { title: "নতুন বই বিতরণ সংক্রান্ত বিজ্ঞপ্তি", date: "০১ মার্চ, ২০২৬", tag: "সাধারণ" }
              ].map((notice, i) => (
                <div key={i} className="bg-white p-3.5 rounded-xl border border-border shadow-sm flex flex-col gap-2 group hover:border-primary/40 transition-colors">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold bg-[#00A8FF]/10 text-[#00A8FF] px-2 py-0.5 rounded uppercase tracking-wider">{notice.tag}</span>
                    <div className="flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="icon" variant="ghost" className="h-7 w-7 text-muted-foreground hover:text-primary"><Edit3 className="w-3.5 h-3.5" /></Button>
                      <Button size="icon" variant="ghost" className="h-7 w-7 text-muted-foreground hover:text-destructive"><Trash2 className="w-3.5 h-3.5" /></Button>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-foreground leading-tight mb-1">{notice.title}</h5>
                    <p className="text-xs text-muted-foreground">{notice.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "gallery":
        return (
          <div className="space-y-4">
            <Button className="w-full bg-white border-dashed border-2 border-border text-foreground hover:border-[#00A8FF] hover:text-[#00A8FF] hover:bg-[#00A8FF]/5 h-12 shadow-none transition-colors mb-2">
              <Plus className="w-4 h-4 mr-2" /> নতুন ছবি আপলোড
            </Button>
            <div className="grid grid-cols-2 gap-3">
              {[
                "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              ].map((img, i) => (
                <div key={i} className="relative group rounded-lg overflow-hidden aspect-[4/3] border border-border shadow-sm">
                  <img src={img} alt="Gallery" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:bg-white/20 hover:text-destructive"><Trash2 className="w-4 h-4" /></Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "admissions":
        return (
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-sm mb-3 text-foreground">ভর্তি সংক্রান্ত তথ্য</h4>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">ভর্তির অবস্থা</Label>
                  <select className="w-full text-sm p-2.5 border border-border rounded-lg bg-white shadow-sm outline-none focus:border-primary">
                    <option>ভর্তি চলছে</option>
                    <option>ভর্তি বন্ধ</option>
                    <option>শীঘ্রই শুরু হবে</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">সেশন/বর্ষ</Label>
                  <Input defaultValue="২০২৬" className="h-10" />
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-[#00A8FF]/5 border border-[#00A8FF]/20 rounded-xl mt-6">
              <h4 className="text-sm font-bold text-[#00A8FF] flex items-center gap-2 mb-2">
                <Layers className="w-4 h-4" />
                বেসিক প্যাকেজ 
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                বর্তমানে আপনি বেসিক প্যাকেজের (ট্রায়াল) আওতায় ওয়েবসাইট এডিট করছেন।
              </p>
            </div>
          </div>
        );
      case "footer":
        return (
          <div className="space-y-8 flex flex-col h-full">
            <div>
              <h4 className="font-medium text-sm mb-4 text-foreground">যোগাযোগের তথ্য</h4>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">প্রাথমিক ফোন নম্বর</Label>
                  <Input defaultValue="+880 1712-345678" className="h-10" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">ইমেইল ঠিকানা</Label>
                  <Input defaultValue="info@dhakaideal.edu.bd" className="h-10" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">বিস্তারিত ঠিকানা</Label>
                  <Textarea defaultValue="১২২/এ, মিরপুর রোড, ঢাকা-১২০০, বাংলাদেশ" className="h-20 resize-none leading-relaxed" />
                </div>
              </div>
            </div>
            <div className="border-t border-border pt-6">
              <h4 className="font-medium text-sm mb-4 text-foreground">সোশ্যাল মিডিয়া লিংক</h4>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">ফেসবুক পেইজ</Label>
                  <Input placeholder="https://facebook.com/..." className="h-10 bg-muted/30" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">ইউটিউব চ্যানেল</Label>
                  <Input placeholder="https://youtube.com/..." className="h-10 bg-muted/30" />
                </div>
              </div>
              
              <div className="p-4 bg-[#00A8FF]/5 border border-[#00A8FF]/20 rounded-xl mt-6">
                <h4 className="text-sm font-bold text-[#00A8FF] flex items-center gap-2 mb-2">
                  <Layers className="w-4 h-4" />
                  বেসিক প্যাকেজ 
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  বর্তমানে আপনি বেসিক প্যাকেজের (ট্রায়াল) আওতায় ওয়েবসাইট এডিট করছেন।
                </p>
              </div>
            </div>
          </div>
        );
      case "advanced":
        return (
          <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-4">
            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-2">
              <LayoutIcon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-foreground">অ্যাডভান্সড পেইজ বিল্ডার</h3>
            <p className="text-sm text-muted-foreground">
              নতুন পেইজ তৈরি, সেকশন যোগ/রিমুভ করা এবং ড্র্যাগ-এন্ড-ড্রপ লেআউট ডিজাইনের জন্য আপনার প্যাকেজ আপগ্রেড করুন।
            </p>
            <Button className="bg-amber-500 hover:bg-amber-600 text-white mt-4 w-full">
              প্লাস প্যাকেজে আপগ্রেড করুন
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-muted/30 overflow-hidden font-hind">
      
      {/* Editor Top Navbar */}
      <div className="h-14 bg-white border-b border-border flex items-center justify-between px-4 shrink-0 shadow-sm z-20">
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              ড্যাশবোর্ডে ফিরে যান
            </Button>
          </Link>
          <div className="h-5 w-px bg-border hidden sm:block"></div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-sm font-semibold text-foreground">ঢাকা আইডিয়াল স্কুল</span>
            <span className="text-xs bg-[#00A8FF]/10 text-[#00A8FF] px-2 py-0.5 rounded-full font-medium">এডিটর মোড</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden sm:flex h-9 border-border">
            <Eye className="w-4 h-4 mr-2" />
            প্রিভিউ দেখুন
          </Button>
          <Button size="sm" className="h-9 bg-[#00A8FF] hover:bg-[#0090DF] text-white">
            <Save className="w-4 h-4 mr-2" />
            পরিবর্তন সেভ করুন
          </Button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        
        {/* Main Editor Sidebar */}
        <div className="flex h-full border-r border-border shrink-0 z-10 bg-white shadow-sm">
          {/* Icons/Sections Column */}
          <div className="w-20 border-r border-border flex flex-col items-center py-4 gap-2 bg-muted/10">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 group relative ${
                    isActive 
                      ? "bg-[#00A8FF] text-white shadow-md shadow-[#00A8FF]/20" 
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  
                  {/* Tooltip on hover */}
                  <div className="absolute left-full ml-3 px-2.5 py-1.5 bg-zinc-800 text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity">
                    {section.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Options Column */}
          <div className="w-72 flex flex-col h-full bg-white relative">
            <div className="p-5 border-b border-border bg-white flex justify-between items-center shrink-0">
              <h2 className="font-bold text-foreground text-base">
                {activeSectionName}
              </h2>
            </div>
            <div className="flex-1 overflow-y-auto p-5 custom-scrollbar">
              {renderOptions()}
            </div>
          </div>
        </div>

        {/* Preview Area */}
        <div className="flex-1 bg-zinc-100/80 p-4 md:p-6 lg:p-8 overflow-hidden flex flex-col items-center">
          
          {/* Responsive Controls */}
          <div className="bg-white rounded-full border border-border shadow-sm p-1.5 mb-4 flex items-center gap-1">
            <Button variant="ghost" size="sm" className="px-4 rounded-full bg-muted h-8 text-sm font-medium text-foreground">
              <Monitor className="w-4 h-4 mr-2" />
              ডেস্কটপ
            </Button>
            <Button variant="ghost" size="sm" className="px-4 rounded-full text-muted-foreground h-8 text-sm hover:bg-muted/50">
              <Smartphone className="w-4 h-4 mr-2" />
              মোবাইল
            </Button>
          </div>
          
          <div className="w-full max-w-5xl flex-1 bg-white rounded-t-xl border border-border border-b-0 shadow-lg overflow-hidden flex flex-col ring-1 ring-black/5">
            {/* Browser mock header */}
            <div className="h-12 bg-muted/50 border-b border-border flex items-center px-4 gap-4 shrink-0">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 max-w-md mx-auto bg-white rounded-md border border-border h-7 flex items-center px-3 text-xs text-muted-foreground shadow-sm">
                <span className="truncate">dhakaideal.schoolsheba.com</span>
              </div>
            </div>
            
            {/* Fake Website Content */}
            <div className="flex-1 overflow-y-auto p-0 relative">
              <div className="absolute inset-0 bg-white">
                {/* Minimal mockup of the website preview */}
                <div className="bg-white text-slate-800 p-4 flex justify-between items-center px-8 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#00A8FF] rounded-full flex items-center justify-center font-bold text-white">DI</div>
                    <div className="flex flex-col">
                      <span className="font-bold text-lg leading-tight">ঢাকা আইডিয়াল স্কুল</span>
                      <span className="text-xs text-slate-500">শিক্ষাই জাতির মেরুদণ্ড</span>
                    </div>
                  </div>
                  <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
                    <span className="text-[#00A8FF]">হোম</span>
                    <span>আমাদের সম্পর্কে</span>
                    <span>ভর্তি তথ্য</span>
                    <span>নোটিশ বোর্ড</span>
                    <span>যোগাযোগ</span>
                  </div>
                  <Button className="bg-[#00A8FF] hover:bg-[#0090DF] text-white rounded-full px-6">অনলাইন অ্যাডমিশন</Button>
                </div>
                
                <div className="h-[400px] bg-slate-900 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10"></div>
                  <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Hero" />
                  <div className="relative z-20 text-center space-y-6 px-4 max-w-3xl mx-auto">
                    <div className="inline-block bg-[#00A8FF] text-white px-4 py-1.5 rounded-full text-sm font-medium mb-2">ভর্তি চলছে ২০২৬</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">আধুনিক শিক্ষার বিশ্বস্ত প্রতিষ্ঠান</h1>
                    <p className="text-slate-300 text-lg">সুশিক্ষিত, নীতিবান ও আধুনিক বিশ্বের উপযোগী নাগরিক গড়ে তোলাই আমাদের লক্ষ্য।</p>
                    <Button className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8 py-6 text-lg font-bold mt-4 shadow-lg">ভর্তি ফর্ম পূরণ করুন</Button>
                  </div>
                </div>
                
                {/* Features Grid Overlaying Hero */}
                <div className="max-w-5xl mx-auto px-8 relative -mt-16 z-30 mb-16">
                  <div className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                    <div className="p-8 text-center bg-[#00A8FF] text-white border-r border-[#0090DF]">
                      <Monitor className="w-8 h-8 mx-auto mb-4 opacity-80" />
                      <h3 className="font-bold text-lg">ডিজিটাল ক্লাসরুম</h3>
                    </div>
                    <div className="p-8 text-center bg-[#00A8FF] text-white border-r border-[#0090DF]">
                      <Layers className="w-8 h-8 mx-auto mb-4 opacity-80" />
                      <h3 className="font-bold text-lg">অভিজ্ঞ শিক্ষক</h3>
                    </div>
                    <div className="p-8 text-center bg-[#00A8FF] text-white">
                      <FileText className="w-8 h-8 mx-auto mb-4 opacity-80" />
                      <h3 className="font-bold text-lg">সেরা ফলাফল</h3>
                    </div>
                  </div>
                </div>

                <div className="p-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-4 bg-slate-50/50 p-8 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-1 bg-[#00A8FF] rounded-full"></div>
                      <h3 className="text-2xl font-bold">আমাদের সম্পর্কে</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      ঢাকা আইডিয়াল স্কুল একটি আধুনিক ও যুগোপযোগী শিক্ষাপ্রতিষ্ঠান। শিক্ষার্থীদের সুপ্ত প্রতিভার বিকাশ এবং তাদের সুনাগরিক হিসেবে গড়ে তোলার লক্ষ্যে আমরা নিরলস কাজ করে যাচ্ছি।
                    </p>
                    <Button variant="outline" className="mt-4 border-[#00A8FF]/20 text-[#00A8FF] hover:bg-[#00A8FF]/5">আরও জানুন</Button>
                  </div>
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                    <div className="bg-[#00A8FF] text-white p-4 flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      <h3 className="font-bold text-lg">নোটিশ বোর্ড</h3>
                    </div>
                    <div className="p-4 space-y-4 flex-1">
                      <div className="flex gap-4 p-3 rounded-xl border border-slate-100 hover:border-[#00A8FF]/20 transition-colors">
                        <div className="text-center shrink-0">
                          <div className="text-[#00A8FF] font-bold text-xl leading-none">১৫</div>
                          <div className="text-xs text-slate-500 font-medium">মার্চ</div>
                        </div>
                        <div>
                          <p className="font-medium text-slate-800 text-sm leading-snug hover:text-[#00A8FF] cursor-pointer">বার্ষিক পরীক্ষার রুটিন প্রকাশিত হয়েছে</p>
                        </div>
                      </div>
                      <div className="flex gap-4 p-3 rounded-xl border border-slate-100 hover:border-[#00A8FF]/20 transition-colors">
                        <div className="text-center shrink-0">
                          <div className="text-[#00A8FF] font-bold text-xl leading-none">১০</div>
                          <div className="text-xs text-slate-500 font-medium">মার্চ</div>
                        </div>
                        <div>
                          <p className="font-medium text-slate-800 text-sm leading-snug hover:text-[#00A8FF] cursor-pointer">পবিত্র রমজান উপলক্ষে ছুটির নোটিশ</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}