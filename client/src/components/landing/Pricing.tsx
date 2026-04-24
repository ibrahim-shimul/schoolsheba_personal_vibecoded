import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            আপনার স্কুলের জন্য বেছে নিন<br />
            <span className="text-primary">সঠিক প্ল্যান</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            প্রথম ৩০ দিন ফ্রি! এর পরে মাসিক সাবস্ক্রিপশন সুবিধা।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-3xl border border-border shadow-sm p-8 flex flex-col relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-2">বেসিক</h3>
            <p className="text-sm text-muted-foreground mb-6 h-10">ছোট স্কুল বা কোচিং সেন্টারের জন্য</p>
            <div className="mb-6 flex items-baseline">
              <span className="text-4xl font-extrabold">১৯৯৳</span>
              <span className="text-muted-foreground ml-2">/মাস</span>
            </div>
            
            <Button className="w-full mb-8" variant="outline">
              ফ্রি শুরু করুন
            </Button>
            
            <div className="space-y-4 flex-1">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/80">বেসিক এডিটিং অপশন</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/80">নির্দিষ্ট কালার থিম</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/80">ফ্রি সাব-ডোমেইন</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/80">নোটিশ বোর্ড, কন্টাক্টস ও অ্যাডমিশন কন্ট্রোল</span>
              </div>
            </div>
          </div>

          {/* Plus Plan */}
          <div className="bg-primary text-white rounded-3xl shadow-xl p-8 flex flex-col relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white/10 rounded-tr-full" />
            
            <div className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4 backdrop-blur-sm">
              সবচেয়ে জনপ্রিয়
            </div>
            <h3 className="text-2xl font-bold mb-2">প্লাস</h3>
            <p className="text-primary-foreground/80 text-sm mb-6 h-10">মাঝারি থেকে বড় স্কুলের জন্য সব সুবিধা</p>
            <div className="mb-6 flex items-baseline">
              <span className="text-4xl font-extrabold">৩৯৯৳</span>
              <span className="text-primary-foreground/80 ml-2">/মাস</span>
            </div>
            
            <Button className="w-full mb-8 bg-white text-primary hover:bg-white/90">
              ফ্রি শুরু করুন
            </Button>
            
            <div className="space-y-4 flex-1 relative z-10">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span className="font-medium">বেসিক প্ল্যানের সব সুবিধা</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span>অ্যাডভান্সড এডিটিং অপশন</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span>কাস্টম ডোমেইন সংযোগ (amar-school.com)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span>কাস্টম সেকশন ও পেইজ যোগ</span>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-3xl border border-border shadow-sm p-8 flex flex-col relative overflow-hidden">
            <div className="inline-block bg-muted text-muted-foreground text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
              শীঘ্রই আসছে
            </div>
            <h3 className="text-2xl font-bold mb-2 text-muted-foreground">প্রিমিয়াম</h3>
            <p className="text-sm text-muted-foreground mb-6 h-10">সম্পূর্ণ স্কুল ম্যানেজমেন্ট সিস্টেম</p>
            <div className="mb-6 flex items-baseline">
              <span className="text-4xl font-extrabold text-muted-foreground">৬৯৯৳</span>
              <span className="text-muted-foreground ml-2">/মাস</span>
            </div>
            
            <Button className="w-full mb-8" variant="outline" disabled>
              অপেক্ষায় থাকুন
            </Button>
            
            <div className="space-y-4 flex-1">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-muted-foreground">প্লাস প্ল্যানের সব সুবিধা</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-muted-foreground">সম্পূর্ণ অল-ইন-ওয়ান স্কুল ম্যানেজমেন্ট সিস্টেম</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-muted-foreground">স্টুডেন্ট, টিচার ও স্টাফ ম্যানেজমেন্ট</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-muted-foreground">অনলাইন ফি কালেকশন</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
