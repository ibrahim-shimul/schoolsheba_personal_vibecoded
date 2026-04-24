import { Sidebar, Topbar } from "@/components/dashboard/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Search,
  Download,
  Filter,
  X
} from "lucide-react";
import { Label } from "@/components/ui/label";

export default function AccountsManagement() {
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [isFeeModalOpen, setIsFeeModalOpen] = useState(false);

  const transactions = [
    { id: "TRX-1001", date: "০৯ মার্চ, ২০২৬", student: "রাকিব হাসান (১০ম)", amount: "১,২০০", type: "Income", category: "টিউশন ফি" },
    { id: "TRX-1002", date: "০৯ মার্চ, ২০২৬", student: "ফাতেমা আক্তার (১০ম)", amount: "১,২০০", type: "Income", category: "টিউশন ফি" },
    { id: "TRX-1003", date: "০৮ মার্চ, ২০২৬", student: "-", amount: "৩,৫০০", type: "Expense", category: "বিদ্যুৎ বিল" },
    { id: "TRX-1004", date: "০৮ মার্চ, ২০২৬", student: "মেহেদী হাসান (৯ম)", amount: "২,৫০০", type: "Income", category: "ভর্তি ফি" },
    { id: "TRX-1005", date: "০৭ মার্চ, ২০২৬", student: "-", amount: "১,২০০", type: "Expense", category: "অফিস খরচ" },
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
                  <Wallet className="w-6 h-6 text-violet-600" />
                  হিসাব ও ফি কালেকশন
                </h1>
                <p className="text-muted-foreground mt-1">শিক্ষার্থীদের ফি এবং স্কুলের আয়-ব্যয়ের হিসাব</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50" onClick={() => setIsExpenseModalOpen(true)}>
                  <ArrowDownRight className="w-4 h-4 mr-2" /> নতুন ব্যয়
                </Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" onClick={() => setIsFeeModalOpen(true)}>
                  <ArrowUpRight className="w-4 h-4 mr-2" /> ফি কালেকশন
                </Button>
              </div>
            </div>

            {/* Financial Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 w-24 h-24 bg-emerald-50 rounded-full -mr-12 -mt-12 blur-2xl"></div>
                <p className="text-sm text-muted-foreground font-medium mb-1">মোট আয় (এই মাসে)</p>
                <h3 className="text-2xl font-bold text-emerald-600">৳ ১,৪৫,২০০</h3>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-red-100 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 w-24 h-24 bg-red-50 rounded-full -mr-12 -mt-12 blur-2xl"></div>
                <p className="text-sm text-muted-foreground font-medium mb-1">মোট ব্যয় (এই মাসে)</p>
                <h3 className="text-2xl font-bold text-red-600">৳ ৩২,৫০০</h3>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-blue-100 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 w-24 h-24 bg-blue-50 rounded-full -mr-12 -mt-12 blur-2xl"></div>
                <p className="text-sm text-muted-foreground font-medium mb-1">নিট ব্যালেন্স</p>
                <h3 className="text-2xl font-bold text-blue-600">৳ ১,১২,৭০০</h3>
              </div>
            </div>

            {/* Transactions List */}
            <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
              <div className="p-4 border-b border-border flex flex-col md:flex-row gap-4 items-center justify-between bg-muted/10">
                <div className="relative w-full md:max-w-xs">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="ট্রানজেকশন খুঁজুন..." className="pl-9 h-10 bg-white" />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                  <Button variant="outline" className="h-10 bg-white">
                    <Filter className="w-4 h-4 mr-2" /> ফিল্টার
                  </Button>
                  <Button variant="outline" className="h-10 bg-white border-violet-200 text-violet-700">
                    <Download className="w-4 h-4 mr-2" /> এক্সপোর্ট
                  </Button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-muted/30 text-muted-foreground">
                    <tr>
                      <th className="px-6 py-4 font-medium">তারিখ</th>
                      <th className="px-6 py-4 font-medium">ট্রানজেকশন আইডি</th>
                      <th className="px-6 py-4 font-medium">বিবরণ / শিক্ষার্থী</th>
                      <th className="px-6 py-4 font-medium">ক্যাটাগরি</th>
                      <th className="px-6 py-4 font-medium text-right">পরিমাণ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {transactions.map((trx, index) => (
                      <tr key={index} className="hover:bg-muted/20 transition-colors">
                        <td className="px-6 py-4 text-muted-foreground">{trx.date}</td>
                        <td className="px-6 py-4 font-mono text-xs text-muted-foreground">{trx.id}</td>
                        <td className="px-6 py-4 font-medium text-foreground">{trx.student}</td>
                        <td className="px-6 py-4">
                          <span className="bg-muted px-2 py-1 rounded text-xs">{trx.category}</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className={`font-bold flex items-center justify-end gap-1 ${trx.type === 'Income' ? 'text-emerald-600' : 'text-red-600'}`}>
                            {trx.type === 'Income' ? '+' : '-'} ৳ {trx.amount}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </main>
      </div>

      {/* Modals Overlay */}
      {(isExpenseModalOpen || isFeeModalOpen) && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
          
          {/* Expense Modal */}
          {isExpenseModalOpen && (
            <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
              <div className="p-6 border-b border-border flex justify-between items-center bg-red-50">
                <h2 className="text-xl font-bold text-red-700">নতুন ব্যয় এন্ট্রি</h2>
                <button onClick={() => setIsExpenseModalOpen(false)} className="p-2 text-muted-foreground hover:bg-red-100 rounded-full transition-colors"><X className="w-5 h-5"/></button>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label>ক্যাটাগরি</Label>
                  <select className="w-full h-10 px-3 border border-input rounded-md text-sm outline-none focus:border-red-500 bg-white">
                    <option>বিদ্যুৎ বিল</option>
                    <option>অফিস খরচ</option>
                    <option>স্টাফ বেতন</option>
                    <option>রক্ষণাবেক্ষণ</option>
                    <option>অন্যান্য</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>বিবরণ</Label>
                  <Input placeholder="ব্যয়ের বিস্তারিত বিবরণ..." />
                </div>
                <div className="space-y-2">
                  <Label>পরিমাণ (৳)</Label>
                  <Input type="number" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <Label>তারিখ</Label>
                  <Input type="date" defaultValue="2026-03-09" />
                </div>
              </div>
              <div className="p-4 border-t border-border bg-muted/10 flex justify-end gap-3">
                <Button variant="outline" onClick={() => setIsExpenseModalOpen(false)}>বাতিল</Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={() => setIsExpenseModalOpen(false)}>সংরক্ষণ করুন</Button>
              </div>
            </div>
          )}

          {/* Fee Collection Modal */}
          {isFeeModalOpen && (
            <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
              <div className="p-6 border-b border-border flex justify-between items-center bg-emerald-50">
                <h2 className="text-xl font-bold text-emerald-700">ফি কালেকশন</h2>
                <button onClick={() => setIsFeeModalOpen(false)} className="p-2 text-muted-foreground hover:bg-emerald-100 rounded-full transition-colors"><X className="w-5 h-5"/></button>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label>স্টুডেন্ট আইডি / রোল নম্বর</Label>
                  <div className="flex gap-2">
                    <Input placeholder="যেমন: ST-2026-001" />
                    <Button variant="outline">খুঁজুন</Button>
                  </div>
                </div>
                <div className="p-3 bg-muted/30 rounded-lg border border-border">
                  <p className="text-sm font-medium">রাকিব হাসান</p>
                  <p className="text-xs text-muted-foreground">১০ম শ্রেণি, ক শাখা, রোল: ১</p>
                </div>
                <div className="space-y-2">
                  <Label>ফি এর ধরন</Label>
                  <select className="w-full h-10 px-3 border border-input rounded-md text-sm outline-none focus:border-emerald-500 bg-white">
                    <option>মাসিক টিউশন ফি (মার্চ)</option>
                    <option>ভর্তি ফি</option>
                    <option>পরীক্ষার ফি</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>পরিমাণ (৳)</Label>
                  <Input type="number" defaultValue="1200" />
                </div>
              </div>
              <div className="p-4 border-t border-border bg-muted/10 flex justify-end gap-3">
                <Button variant="outline" onClick={() => setIsFeeModalOpen(false)}>বাতিল</Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" onClick={() => setIsFeeModalOpen(false)}>ফি সংগ্রহ করুন</Button>
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}