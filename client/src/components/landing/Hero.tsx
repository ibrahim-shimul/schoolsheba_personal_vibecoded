import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-primary/10 blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              বাংলাদেশের সেরা স্কুল ম্যানেজমেন্ট সিস্টেম
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.2] mb-6">
              আপনার স্কুলের ওয়েবসাইট এখন তৈরি হবে মাত্র কয়েক মিনিটে <span className="text-primary">কোনো কোডিং ছাড়াই!</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              SchoolSheba দিয়ে সহজে আপনার তৈরি করুন স্কুল ওয়েবসাইট, যুক্ত করুন আপনার লোগো, আর পরিচালনা করুন সবকিছু এক জায়গা থেকে।
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/auth">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium h-12 px-8 text-base">
                  ফ্রি তৈরি করুন
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base font-medium">
                কীভাবে কাজ করে?
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-white flex items-center justify-center text-[10px] overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p>ইতিমধ্যেই <span className="font-semibold text-foreground">১০০+</span> স্কুল আমাদের সাথে যুক্ত হয়েছে</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-white/50 backdrop-blur-sm p-2">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-primary/5 to-transparent z-0 pointer-events-none" />
              
              <div className="relative z-10 grid grid-cols-3 grid-rows-2 gap-4 p-4 aspect-[4/3]">
                {/* Mockup UI blocks */}
                <div className="col-span-3 row-span-1 bg-muted rounded-xl border border-border shadow-sm overflow-hidden flex flex-col">
                  <div className="h-8 border-b border-border bg-white/50 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="w-1/3 h-4 bg-primary/20 rounded mb-4" />
                    <div className="space-y-2">
                      <div className="w-full h-2 bg-muted-foreground/20 rounded" />
                      <div className="w-5/6 h-2 bg-muted-foreground/20 rounded" />
                      <div className="w-4/6 h-2 bg-muted-foreground/20 rounded" />
                    </div>
                  </div>
                </div>
                
                <div className="col-span-1 row-span-1 bg-primary/10 rounded-xl border border-primary/20 p-4">
                   <div className="w-8 h-8 rounded-full bg-primary/20 mb-3" />
                   <div className="w-2/3 h-3 bg-primary/40 rounded mb-2" />
                   <div className="w-1/2 h-2 bg-primary/20 rounded" />
                </div>
                
                <div className="col-span-2 row-span-1 bg-white rounded-xl border border-border shadow-sm p-4 flex flex-col justify-between">
                   <div>
                     <div className="w-1/3 h-3 bg-muted-foreground/30 rounded mb-2" />
                     <div className="w-full h-16 bg-muted rounded-lg mt-2" />
                   </div>
                   <div className="flex justify-end mt-2">
                     <div className="w-16 h-6 bg-primary rounded" />
                   </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements around mockup */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
