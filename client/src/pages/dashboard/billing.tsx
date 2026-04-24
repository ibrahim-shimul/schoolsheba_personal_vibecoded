import { Sidebar, Topbar } from "@/components/dashboard/Layout";
import { Button } from "@/components/ui/button";
import { Check, CreditCard, Download, Clock } from "lucide-react";

export default function Billing() {
  return (
    <div className="flex h-screen bg-muted/30 overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 flex-shrink-0">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Topbar />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-5xl mx-auto space-y-6">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-foreground">প্যাকেজ ও বিলিং</h1>
                <p className="text-muted-foreground text-sm">আপনার সাবস্ক্রিপশন ও পেমেন্ট হিস্ট্রি</p>
              </div>
            </div>

            {/* Current Plan Overview */}
            <div className="bg-white rounded-2xl border border-primary/30 shadow-md p-6 lg:p-8 relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                <div>
                  <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4">
                    বর্তমান প্যাকেজ
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">ফ্রি ট্রায়াল <span className="text-lg text-primary bg-primary/10 px-2 py-0.5 rounded font-semibold ml-2">বেসিক</span></h2>
                  <p className="text-muted-foreground mb-6">৩০ দিনের ফ্রি ট্রায়াল পিরিয়ড চলছে</p>
                  
                  <div className="space-y-4 max-w-sm">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">মেয়াদ শেষ হবে:</span>
                      <span className="text-muted-foreground">০৫ এপ্রিল, ২০২৬</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>২ দিন ব্যবহৃত</span>
                      <span className="text-amber-600 font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" /> ২৮ দিন বাকি
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-8">
                  <h3 className="font-bold text-lg mb-4">প্যাকেজ আপগ্রেড করুন</h3>
                  <p className="text-sm text-muted-foreground mb-6">ট্রায়াল শেষে আপনার একাউন্ট নিষ্ক্রিয় হয়ে যাবে। নিরবচ্ছিন্ন সেবার জন্য এখনই প্যাকেজ বেছে নিন।</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
                      প্যাকেজ দেখুন
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Available Plans */}
            <div>
              <h3 className="font-bold text-lg mb-4">প্যাকেজসমূহ</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Basic */}
                <div className="bg-white rounded-2xl border border-primary border-2 shadow-sm p-6 flex flex-col relative">
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">বর্তমান ট্রায়াল</div>
                  <h4 className="text-xl font-bold mb-1 mt-2">বেসিক</h4>
                  <div className="text-3xl font-extrabold mb-4">১৯৯৳<span className="text-sm font-normal text-muted-foreground">/মাস</span></div>
                  <ul className="space-y-3 mb-6 flex-1 text-sm text-muted-foreground">
                    <li className="flex gap-2"><Check className="w-4 h-4 text-primary shrink-0" /> বেসিক এডিটিং অপশন</li>
                    <li className="flex gap-2"><Check className="w-4 h-4 text-primary shrink-0" /> ফ্রি সাব-ডোমেইন</li>
                    <li className="flex gap-2"><Check className="w-4 h-4 text-primary shrink-0" /> ডাইনামিক নোটিশ বোর্ড</li>
                    <li className="flex gap-2"><Check className="w-4 h-4 text-primary shrink-0" /> গ্যালারি ম্যানেজমেন্ট</li>
                  </ul>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">সাবস্ক্রাইব করুন</Button>
                </div>
                
                {/* Plus */}
                <div className="bg-white rounded-2xl border border-border shadow-sm p-6 flex flex-col relative overflow-hidden">
                  <h4 className="text-xl font-bold mb-1">প্লাস</h4>
                  <div className="text-3xl font-extrabold mb-4">৩৯৯৳<span className="text-sm font-normal text-muted-foreground">/মাস</span></div>
                  <ul className="space-y-3 mb-6 flex-1 text-sm text-muted-foreground">
                    <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> বেসিক প্যাকেজের সবকিছু</li>
                    <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> অ্যাডভান্সড এডিটিং</li>
                    <li className="flex gap-2"><Check className="w-4 h-4 text-emerald-500 shrink-0" /> কাস্টম ডোমেইন (amar-school.com)</li>
                  </ul>
                  <Button variant="outline" className="w-full">আপগ্রেড করুন</Button>
                </div>

                {/* Premium */}
                <div className="bg-slate-50 rounded-2xl border border-border shadow-sm p-6 flex flex-col opacity-75">
                  <div className="inline-block bg-slate-200 text-slate-600 text-xs font-bold px-2 py-0.5 rounded w-fit mb-2">শীঘ্রই আসছে</div>
                  <h4 className="text-xl font-bold mb-1">প্রিমিয়াম</h4>
                  <div className="text-3xl font-extrabold mb-4">৬৯৯৳<span className="text-sm font-normal text-muted-foreground">/মাস</span></div>
                  <ul className="space-y-3 mb-6 flex-1 text-sm text-muted-foreground">
                    <li className="flex gap-2"><Check className="w-4 h-4 text-slate-400 shrink-0" /> সম্পূর্ণ স্কুল ম্যানেজমেন্ট সিস্টেম</li>
                    <li className="flex gap-2"><Check className="w-4 h-4 text-slate-400 shrink-0" /> প্লাস প্যাকেজের সবকিছু</li>
                  </ul>
                  <Button variant="outline" className="w-full" disabled>অপেক্ষায় থাকুন</Button>
                </div>
              </div>
            </div>

            {/* Billing History */}
            <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
              <div className="p-6 border-b border-border">
                <h3 className="font-bold text-lg">পেমেন্ট হিস্ট্রি</h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-muted/50 text-muted-foreground">
                    <tr>
                      <th className="px-6 py-3 font-medium">তারিখ</th>
                      <th className="px-6 py-3 font-medium">বিবরণ</th>
                      <th className="px-6 py-3 font-medium">অ্যামাউন্ট</th>
                      <th className="px-6 py-3 font-medium">স্ট্যাটাস</th>
                      <th className="px-6 py-3 font-medium text-right">ইনভয়েস</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4">০৫ মার্চ, ২০২৬</td>
                      <td className="px-6 py-4 font-medium">অ্যাকাউন্ট তৈরি (ফ্রি ট্রায়াল)</td>
                      <td className="px-6 py-4">০৳</td>
                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">সফল</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground hover:text-primary">
                          <Download className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                    {/* Empty state for other rows */}
                    <tr>
                      <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                        আর কোনো পেমেন্ট হিস্ট্রি নেই
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
