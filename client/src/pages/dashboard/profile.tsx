import { Sidebar, Topbar } from "@/components/dashboard/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Profile() {
  return (
    <div className="flex h-screen bg-muted/30 overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 flex-shrink-0">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Topbar />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto space-y-6">
            
            <div>
              <h1 className="text-2xl font-bold text-foreground">প্রোফাইল সেটিংস</h1>
              <p className="text-muted-foreground text-sm">আপনার এবং আপনার স্কুলের তথ্য আপডেট করুন</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Left Column (User Info) */}
              <div className="md:col-span-1 space-y-6">
                <div className="bg-white rounded-2xl border border-border shadow-sm p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 border-4 border-white shadow-sm mx-auto mb-4 flex items-center justify-center text-primary font-bold text-2xl">
                    DI
                  </div>
                  <h3 className="font-bold text-lg">ঢাকা আইডিয়াল স্কুল</h3>
                  <p className="text-muted-foreground text-sm mb-4">প্রতিষ্ঠাতা / অ্যাডমিন</p>
                  <Button variant="outline" size="sm" className="w-full">ছবি পরিবর্তন করুন</Button>
                </div>
              </div>

              {/* Right Column (Forms) */}
              <div className="md:col-span-2 space-y-6">
                
                {/* Personal Info Form */}
                <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
                  <h3 className="font-bold text-lg mb-4 pb-2 border-b border-border">ব্যক্তিগত তথ্য</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">নাম</Label>
                        <Input id="firstName" defaultValue="মো. আব্দুর রহমান" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">মোবাইল নম্বর</Label>
                        <Input id="phone" defaultValue="+880 1712-345678" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">ইমেইল ঠিকানা</Label>
                      <Input id="email" type="email" defaultValue="admin@dhakaideal.edu.bd" disabled className="bg-muted" />
                      <p className="text-xs text-muted-foreground">লগইন ইমেইল পরিবর্তন করতে সাপোর্টে যোগাযোগ করুন।</p>
                    </div>
                  </div>
                </div>

                {/* School Info Form */}
                <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
                  <h3 className="font-bold text-lg mb-4 pb-2 border-b border-border">স্কুলের তথ্য</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="schoolName">স্কুলের নাম</Label>
                      <Input id="schoolName" defaultValue="ঢাকা আইডিয়াল স্কুল" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="schoolAddress">ঠিকানা</Label>
                      <Input id="schoolAddress" defaultValue="১২২/এ, মিরপুর রোড, ঢাকা-১২০০" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="eiin">EIIN নম্বর</Label>
                        <Input id="eiin" defaultValue="107900" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="established">প্রতিষ্ঠাকাল</Label>
                        <Input id="established" defaultValue="১৯৯২" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end gap-4">
                  <Button variant="outline">বাতিল করুন</Button>
                  <Button className="bg-primary hover:bg-primary/90 text-white">সেভ পরিবর্তন</Button>
                </div>

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
