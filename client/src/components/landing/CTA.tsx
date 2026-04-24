import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-foreground rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              আজই শুরু করুন আপনার স্কুলের ডিজিটাল যাত্রা
            </h2>
            <p className="text-white/80 text-lg mb-10">
              মাত্র কয়েক মিনিটে তৈরি করুন আপনার স্কুলের ওয়েবসাইট – কোনো কোডিং ছাড়াই।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium h-12 px-8 text-base">
                ফ্রি তৈরি করুন
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base font-medium text-white border-white/20 hover:bg-white/10 hover:text-white">
                যোগাযোগ করুন
              </Button>
            </div>
            <p className="text-white/60 text-sm mt-6">
              ৩০ দিনের ফ্রি ট্রায়াল • ক্রেডিট কার্ডের প্রয়োজন নেই
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
