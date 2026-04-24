import { Sidebar, Topbar } from "@/components/dashboard/Layout";
import { Button } from "@/components/ui/button";
import { 
  Briefcase,
  Search,
  Plus,
  Mail,
  Phone,
  X
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function HRManagement() {
  const [isAddStaffModalOpen, setIsAddStaffModalOpen] = useState(false);
  const staff = [
    { id: "T-001", name: "রহিম উদ্দিন", role: "সিনিয়র শিক্ষক (বাংলা)", phone: "01711000000", email: "rahim@school.com", status: "Active" },
    { id: "T-002", name: "ফাতেমা বেগম", role: "সহকারী শিক্ষক (ইংরেজি)", phone: "01711000001", email: "fatema@school.com", status: "Active" },
    { id: "T-003", name: "আনিসুর রহমান", role: "সহকারী শিক্ষক (গণিত)", phone: "01711000002", email: "anisur@school.com", status: "Active" },
    { id: "S-001", name: "জুবায়ের হোসেন", role: "অফিস সহকারী", phone: "01711000003", email: "jubayer@school.com", status: "Active" },
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
            
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-violet-600" />
                  শিক্ষক ও স্টাফ
                </h1>
                <p className="text-muted-foreground mt-1">প্রতিষ্ঠানের সকল শিক্ষক ও কর্মচারীর তথ্য পরিচালনা</p>
              </div>
              <Button className="bg-violet-600 hover:bg-violet-700 text-white" onClick={() => setIsAddStaffModalOpen(true)}>
                <Plus className="w-4 h-4 mr-2" /> নতুন স্টাফ যুক্ত করুন
              </Button>
            </div>

            {/* List */}
            <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
              <div className="p-4 border-b border-border bg-muted/10">
                <div className="relative max-w-sm">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="নাম বা পদবী দিয়ে খুঁজুন..." className="pl-9 h-10 bg-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
                {staff.map((member, index) => (
                  <div key={index} className="border border-border rounded-xl p-5 hover:shadow-md transition-shadow relative">
                    <div className="w-16 h-16 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 font-bold text-xl mb-4">
                      {member.name.charAt(0)}
                    </div>
                    <div className="absolute top-4 right-4 px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] rounded-full font-medium">
                      Active
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-violet-600 font-medium mb-4">{member.role}</p>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> {member.phone}</p>
                      <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> {member.email}</p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-border flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 h-8 text-xs">প্রোফাইল</Button>
                      <Button variant="outline" size="sm" className="flex-1 h-8 text-xs text-violet-600 border-violet-200">মেসেজ</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </main>
      </div>

      {/* Add Staff Modal */}
      {isAddStaffModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
            <div className="p-6 border-b border-border flex justify-between items-center bg-muted/10 shrink-0">
              <h2 className="text-xl font-bold text-foreground">নতুন স্টাফ যুক্ত করুন</h2>
              <button onClick={() => setIsAddStaffModalOpen(false)} className="p-2 text-muted-foreground hover:bg-muted rounded-full transition-colors"><X className="w-5 h-5"/></button>
            </div>
            <div className="p-6 space-y-4 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>নাম <span className="text-red-500">*</span></Label>
                  <Input placeholder="স্টাফের পূর্ণ নাম" />
                </div>
                <div className="space-y-2">
                  <Label>মোবাইল নম্বর <span className="text-red-500">*</span></Label>
                  <Input placeholder="01XXXXXXXXX" />
                </div>
                <div className="space-y-2">
                  <Label>ইমেইল</Label>
                  <Input type="email" placeholder="example@email.com" />
                </div>
                <div className="space-y-2">
                  <Label>স্টাফের ধরন <span className="text-red-500">*</span></Label>
                  <select className="w-full h-10 px-3 border border-input rounded-md text-sm outline-none focus:border-violet-500 bg-white">
                    <option>শিক্ষক</option>
                    <option>অফিস স্টাফ</option>
                    <option>ম্যানেজমেন্ট</option>
                    <option>অন্যান্য</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label>পদবী <span className="text-red-500">*</span></Label>
                  <Input placeholder="যেমন: সিনিয়র শিক্ষক (বাংলা) বা অফিস সহকারী" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label>বর্তমান ঠিকানা</Label>
                  <Input placeholder="বিস্তারিত ঠিকানা..." />
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-border bg-muted/10 flex justify-end gap-3 shrink-0">
              <Button variant="outline" onClick={() => setIsAddStaffModalOpen(false)}>বাতিল</Button>
              <Button className="bg-violet-600 hover:bg-violet-700 text-white" onClick={() => setIsAddStaffModalOpen(false)}>সংরক্ষণ করুন</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}