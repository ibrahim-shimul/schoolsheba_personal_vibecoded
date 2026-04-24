import { Link } from "wouter";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Download,
  BookOpen,
  Users,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PortfolioTemplate() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone className="w-3 h-3" /> +880 1712-345678</span>
            <span className="flex items-center gap-2"><Mail className="w-3 h-3" /> info@dhakaideal.edu.bd</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">EIIN: 107900</a>
            <a href="#" className="hover:text-white transition-colors">স্টুডেন্ট লগইন</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Logo & Title */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-inner border-2 border-blue-100">
                DI
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 leading-tight">ঢাকা আইডিয়াল স্কুল</h1>
                <p className="text-blue-600 text-sm font-medium">স্থাপিত: ১৯৯২ • শিক্ষাই জাতির মেরুদণ্ড</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex gap-6 items-center">
              <a href="#" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">হোম</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">আমাদের সম্পর্কে</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">ভর্তি তথ্য</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">নোটিশ বোর্ড</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">ফলাফল</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">যোগাযোগ</a>
            </nav>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
              অনলাইন অ্যাডমিশন
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="School Campus" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 h-full relative z-10 flex flex-col justify-center text-white">
          <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-fit mb-4">
            ভর্তি চলছে ২০২৬
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-2xl leading-tight">
            আধুনিক শিক্ষার বিশ্বস্ত প্রতিষ্ঠান
          </h2>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl">
            সুশিক্ষিত, নীতিবান ও আধুনিক বিশ্বের উপযোগী নাগরিক গড়ে তোলাই আমাদের লক্ষ্য।
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 font-bold">
              ভর্তি ফর্ম ডাউনলোড
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold">
              ক্যাম্পাস ট্যুর
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <div className="bg-blue-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-blue-500/50">
            <div className="p-6 flex items-center gap-4 justify-center">
              <BookOpen className="w-8 h-8 opacity-80" />
              <div>
                <div className="font-bold text-lg">ডিজিটাল ক্লাসরুম</div>
                <div className="text-blue-200 text-sm">মাল্টিমিডিয়া প্রজেক্টর সমৃদ্ধ</div>
              </div>
            </div>
            <div className="p-6 flex items-center gap-4 justify-center">
              <Users className="w-8 h-8 opacity-80" />
              <div>
                <div className="font-bold text-lg">অভিজ্ঞ শিক্ষকমণ্ডলী</div>
                <div className="text-blue-200 text-sm">উচ্চ শিক্ষিত ও প্রশিক্ষণপ্রাপ্ত</div>
              </div>
            </div>
            <div className="p-6 flex items-center gap-4 justify-center">
              <Award className="w-8 h-8 opacity-80" />
              <div>
                <div className="font-bold text-lg">সেরা ফলাফল</div>
                <div className="text-blue-200 text-sm">বোর্ড পরীক্ষায় শতভাগ সাফল্য</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (Content) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* About Section */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-blue-600 inline-block rounded-full"></span>
                প্রতিষ্ঠান পরিচিতি
              </h3>
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                <p className="text-slate-600 leading-relaxed mb-4">
                  ঢাকা আইডিয়াল স্কুল একটি আধুনিক ও যুগোপযোগী শিক্ষাপ্রতিষ্ঠান। শিক্ষার্থীদের সুপ্ত প্রতিভার বিকাশ এবং তাদের সুনাগরিক হিসেবে গড়ে তোলার লক্ষ্যে আমরা নিরলস কাজ করে যাচ্ছি। আমাদের রয়েছে একদল অভিজ্ঞ ও নিবেদিতপ্রাণ শিক্ষকমণ্ডলী। 
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  পুঁথিগত বিদ্যার পাশাপাশি সহশিক্ষা কার্যক্রমে আমরা বিশেষ গুরুত্ব দিয়ে থাকি। খেলাধুলা, বিতর্ক প্রতিযোগিতা, সাংস্কৃতিক অনুষ্ঠান ইত্যাদিতে আমাদের শিক্ষার্থীদের নিয়মিত অংশগ্রহণ রয়েছে।
                </p>
                <a href="#" className="text-blue-600 font-semibold hover:underline flex items-center gap-1">
                  আরও পড়ুন <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </section>

            {/* Gallery Section */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-blue-600 inline-block rounded-full"></span>
                ফটো গ্যালারি
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Classroom" className="rounded-xl w-full h-40 object-cover hover:shadow-md transition-shadow" />
                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Students" className="rounded-xl w-full h-40 object-cover hover:shadow-md transition-shadow" />
                <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Campus" className="rounded-xl w-full h-40 object-cover hover:shadow-md transition-shadow hidden md:block" />
              </div>
            </section>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-8">
            
            {/* Notice Board widget */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-blue-600 text-white p-4 font-bold text-lg flex items-center justify-between">
                নোটিশ বোর্ড
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              </div>
              <div className="p-0">
                <div className="divide-y divide-slate-100">
                  
                  {[
                    { title: "৬ষ্ঠ থেকে ৯ম শ্রেণির বার্ষিক পরীক্ষার রুটিন প্রকাশ", date: "১৫ মার্চ, ২০২৬", tag: "পরীক্ষা" },
                    { title: "পবিত্র রমজান উপলক্ষে ছুটির নোটিশ", date: "১০ মার্চ, ২০২৬", tag: "ছুটি" },
                    { title: "বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৬ এর চূড়ান্ত তালিকা", date: "০৫ মার্চ, ২০২৬", tag: "ইভেন্ট" },
                    { title: "২০২৬ শিক্ষাবর্ষের নতুন বই বিতরণ সংক্রান্ত বিজ্ঞপ্তি", date: "০১ মার্চ, ২০২৬", tag: "সাধারণ" }
                  ].map((notice, idx) => (
                    <a href="#" key={idx} className="block p-4 hover:bg-slate-50 transition-colors group">
                      <div className="flex gap-4">
                        <div className="bg-slate-100 text-slate-600 rounded-lg p-2 text-center shrink-0 w-14 h-14 flex flex-col justify-center border border-slate-200 group-hover:border-blue-300 group-hover:bg-blue-50 transition-colors">
                          <span className="text-lg font-bold leading-none">{notice.date.split(" ")[0]}</span>
                          <span className="text-[10px]">{notice.date.split(" ")[1]}</span>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded inline-block mb-1">
                            {notice.tag}
                          </span>
                          <h4 className="font-semibold text-slate-800 text-sm group-hover:text-blue-600 transition-colors line-clamp-2">
                            {notice.title}
                          </h4>
                        </div>
                      </div>
                    </a>
                  ))}

                </div>
                <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
                  <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">সকল নোটিশ দেখুন</a>
                </div>
              </div>
            </div>

            {/* Principal's Message */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="font-bold text-lg mb-4 border-b pb-2">অধ্যক্ষের বাণী</h3>
              <div className="flex flex-col items-center text-center">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                  alt="Principal" 
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-slate-100"
                />
                <p className="text-sm text-slate-600 italic mb-4">
                  "শিক্ষার্থীদের প্রকৃত মানুষ হিসেবে গড়ে তোলাই আমাদের ব্রত। আমরা পুথিগত বিদ্যার পাশাপাশি নৈতিক শিক্ষায় জোর দিই।"
                </p>
                <div className="font-bold text-slate-800">ড. মো. আব্দুর রহমান</div>
                <div className="text-xs text-slate-500">অধ্যক্ষ, ঢাকা আইডিয়াল স্কুল</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t-4 border-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">DI</div>
                <h3 className="text-white font-bold text-lg">ঢাকা আইডিয়াল স্কুল</h3>
              </div>
              <p className="text-sm mb-4 leading-relaxed">
                একটি আদর্শ ও আধুনিক শিক্ষা প্রতিষ্ঠান যেখানে আপনার সন্তানের ভবিষ্যৎ গড়ার নিশ্চয়তা রয়েছে।
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">গুরুত্বপূর্ণ লিংক</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">শিক্ষা মন্ত্রণালয়</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">ঢাকা শিক্ষা বোর্ড</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">যোগাযোগ</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>১২২/এ, মিরপুর রোড, ঢাকা-১২০০, বাংলাদেশ</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>+880 1712-345678</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>© ২০২৬ ঢাকা আইডিয়াল স্কুল। সর্বস্বত্ব সংরক্ষিত।</p>
            <p className="mt-2 md:mt-0 flex items-center gap-1">
              Powered by <span className="font-bold text-blue-400">SchoolSheba</span>
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

// Arrow icon for the Read More link
function ArrowRight({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  );
}