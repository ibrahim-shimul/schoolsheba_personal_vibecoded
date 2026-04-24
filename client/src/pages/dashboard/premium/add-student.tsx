import { Sidebar, Topbar } from "@/components/dashboard/Layout";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowLeft,
  Upload,
  Save,
  Users
} from "lucide-react";
import { useState } from "react";

export default function AddStudent() {
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setLocation("/dashboard/premium/students");
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-muted/30 overflow-hidden">
      <div className="hidden md:block w-64 flex-shrink-0">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Topbar />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
            
            {/* Page Header */}
            <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" onClick={() => setLocation("/dashboard/premium/students")} className="shrink-0 rounded-full w-8 h-8">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">নতুন শিক্ষার্থী ভর্তি</h1>
                  <p className="text-sm text-muted-foreground mt-0.5">শিক্ষার্থীর সকল তথ্য সাবধানে পূরণ করুন</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Photo Upload Card */}
              <div className="bg-white rounded-2xl border border-border shadow-sm p-6 flex flex-col sm:flex-row items-center gap-6">
                <div className="w-32 h-32 rounded-full border-2 border-dashed border-border bg-muted/30 flex items-center justify-center flex-col shrink-0 hover:border-violet-400 hover:bg-violet-50 transition-colors cursor-pointer">
                  <Users className="w-10 h-10 text-muted-foreground mb-2" />
                  <span className="text-xs text-muted-foreground font-medium">ছবি আপলোড</span>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-bold text-lg mb-1">শিক্ষার্থীর ছবি</h3>
                  <p className="text-sm text-muted-foreground mb-3">পাসপোর্ট সাইজের ছবি আপলোড করুন। সাইজ সর্বোচ্চ ২MB।</p>
                  <Button type="button" variant="outline" className="border-violet-200 text-violet-700">
                    <Upload className="w-4 h-4 mr-2" /> ছবি নির্বাচন করুন
                  </Button>
                </div>
              </div>

              {/* Form Grid */}
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                <div className="p-6 border-b border-border bg-violet-50/30">
                  <h3 className="font-bold text-foreground flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center text-xs">1</span> 
                    একাডেমিক তথ্য
                  </h3>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label>স্টুডেন্ট আইডি (অটো-জেনারেটেড)</Label>
                    <Input defaultValue="ST-2026-007" disabled className="bg-muted/50 font-mono text-sm" />
                  </div>
                  <div className="space-y-2">
                    <Label>ভর্তির সেশন <span className="text-red-500">*</span></Label>
                    <select className="w-full h-10 px-3 border border-input rounded-md text-sm outline-none focus:border-violet-500 bg-white">
                      <option>২০২৬</option>
                      <option>২০২৫</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>ভর্তির তারিখ <span className="text-red-500">*</span></Label>
                    <Input type="date" className="h-10" required />
                  </div>

                  <div className="space-y-2">
                    <Label>ক্লাস <span className="text-red-500">*</span></Label>
                    <select className="w-full h-10 px-3 border border-input rounded-md text-sm outline-none focus:border-violet-500 bg-white" required>
                      <option value="">নির্বাচন করুন</option>
                      <option>৬ষ্ঠ</option>
                      <option>৭ম</option>
                      <option>৮ম</option>
                      <option>৯ম</option>
                      <option>১০ম</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>শাখা</Label>
                    <select className="w-full h-10 px-3 border border-input rounded-md text-sm outline-none focus:border-violet-500 bg-white">
                      <option value="">নির্বাচন করুন</option>
                      <option>ক</option>
                      <option>খ</option>
                      <option>গ</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>রোল নম্বর</Label>
                    <Input type="number" placeholder="উদা: ০১" className="h-10" />
                  </div>
                </div>
              </div>

              {/* Personal Info */}
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                <div className="p-6 border-b border-border bg-violet-50/30">
                  <h3 className="font-bold text-foreground flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center text-xs">2</span> 
                    শিক্ষার্থীর ব্যক্তিগত তথ্য
                  </h3>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <Label>শিক্ষার্থীর পূর্ণ নাম (বাংলায়) <span className="text-red-500">*</span></Label>
                    <Input placeholder="উদা: রাকিব হাসান" className="h-10" required />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label>শিক্ষার্থীর পূর্ণ নাম (ইংরেজিতে) <span className="text-red-500">*</span></Label>
                    <Input placeholder="e.g. Rakib Hasan" className="h-10" required />
                  </div>

                  <div className="space-y-2">
                    <Label>জন্ম তারিখ <span className="text-red-500">*</span></Label>
                    <Input type="date" className="h-10" required />
                  </div>
                  <div className="space-y-2">
                    <Label>লিঙ্গ <span className="text-red-500">*</span></Label>
                    <select className="w-full h-10 px-3 border border-input rounded-md text-sm outline-none focus:border-violet-500 bg-white" required>
                      <option value="">নির্বাচন করুন</option>
                      <option>ছাত্র</option>
                      <option>ছাত্রী</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label>ধর্ম <span className="text-red-500">*</span></Label>
                    <select className="w-full h-10 px-3 border border-input rounded-md text-sm outline-none focus:border-violet-500 bg-white" required>
                      <option value="">নির্বাচন করুন</option>
                      <option>ইসলাম</option>
                      <option>হিন্দু</option>
                      <option>বৌদ্ধ</option>
                      <option>খ্রিষ্টান</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>রক্তের গ্রুপ</Label>
                    <select className="w-full h-10 px-3 border border-input rounded-md text-sm outline-none focus:border-violet-500 bg-white">
                      <option value="">নির্বাচন করুন</option>
                      <option>A+</option>
                      <option>A-</option>
                      <option>B+</option>
                      <option>B-</option>
                      <option>O+</option>
                      <option>O-</option>
                      <option>AB+</option>
                      <option>AB-</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Guardian Info */}
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                <div className="p-6 border-b border-border bg-violet-50/30">
                  <h3 className="font-bold text-foreground flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center text-xs">3</span> 
                    অভিভাবকের তথ্য ও ঠিকানা
                  </h3>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>পিতার নাম <span className="text-red-500">*</span></Label>
                    <Input placeholder="পিতার পূর্ণ নাম" className="h-10" required />
                  </div>
                  <div className="space-y-2">
                    <Label>পিতার পেশা</Label>
                    <Input placeholder="উদা: ব্যবসায়ী" className="h-10" />
                  </div>

                  <div className="space-y-2">
                    <Label>মাতার নাম <span className="text-red-500">*</span></Label>
                    <Input placeholder="মাতার পূর্ণ নাম" className="h-10" required />
                  </div>
                  <div className="space-y-2">
                    <Label>মাতার পেশা</Label>
                    <Input placeholder="উদা: গৃহিণী" className="h-10" />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label>অভিভাবকের মোবাইল নম্বর <span className="text-red-500">*</span></Label>
                    <Input placeholder="01XXXXXXXXX" className="h-10" required />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label>বর্তমান ঠিকানা <span className="text-red-500">*</span></Label>
                    <Textarea placeholder="বাসা, রাস্তা, এলাকা..." className="resize-none h-24" required />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label>স্থায়ী ঠিকানা</Label>
                    <Textarea placeholder="গ্রাম, ডাকঘর, থানা, জেলা..." className="resize-none h-24" />
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex items-center justify-end gap-4 pt-4">
                <Button type="button" variant="outline" className="h-12 px-6" onClick={() => setLocation("/dashboard/premium/students")}>
                  বাতিল করুন
                </Button>
                <Button type="submit" disabled={isLoading} className="h-12 px-8 bg-violet-600 hover:bg-violet-700 text-white text-base">
                  {isLoading ? "সেভ হচ্ছে..." : <><Save className="w-5 h-5 mr-2" /> ভর্তি সম্পন্ন করুন</>}
                </Button>
              </div>

            </form>
          </div>
        </main>
      </div>
    </div>
  );
}