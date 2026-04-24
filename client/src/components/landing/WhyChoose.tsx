import { Shield, Smartphone, Code, Heart, Layers, Clock } from "lucide-react";

export default function WhyChoose() {
  const reasons = [
    {
      title: "বাংলাদেশের জন্য বিশেষভাবে তৈরি",
      description: "SchoolSheba তৈরি করা হয়েছে বাংলাদেশের স্কুল ও শিক্ষাপ্রতিষ্ঠানগুলোর কথা মাথায় রেখে সম্পূর্ণ বাংলায়।",
      icon: <Heart className="w-5 h-5 text-primary" />
    },
    {
      title: "স্কুলগুলোর জন্য ওয়েবসাইট প্রস্তুত",
      description: "রেজিস্ট্রেশনের পর এক ক্লিকেই পেয়ে যান আপনার স্কুলের ওয়েবসাইট।",
      icon: <Clock className="w-5 h-5 text-primary" />
    },
    {
      title: "কোডিং ছাড়াই সহজ ব্যবহার",
      description: "ওয়েবসাইট বা অ্যাপ্লিকেশন আপগ্রেড করার জন্য কোনো ধরনের টেকনিক্যাল জ্ঞান বা কোডিং জানার প্রয়োজন নেই।",
      icon: <Code className="w-5 h-5 text-primary" />
    },
    {
      title: "সাশ্রয়ী ও স্বচ্ছ মূল্য",
      description: "বড় অংকের কোনো ডেভেলপমেন্ট চার্জ নেই, সাশ্রয়ী মাসিক সাবস্ক্রিপশনে সব সুবিধা।",
      icon: <Layers className="w-5 h-5 text-primary" />
    },
    {
      title: "নিরাপত্তা ও সাপোর্ট - বিনামূল্যে",
      description: "লাইফটাইম হোস্টিং, সর্বোচ্চ ডেটা সিকিউরিটি ও নিয়মিত আপডেট বিনামূল্যে।",
      icon: <Shield className="w-5 h-5 text-primary" />
    },
    {
      title: "এক প্ল্যাটফর্মে সব সমাধান",
      description: "ওয়েবসাইট, ম্যানেজমেন্ট, নোটিশ বোর্ড - সবকিছু এক জায়গা থেকে নিয়ন্ত্রণ করুন।",
      icon: <Smartphone className="w-5 h-5 text-primary" />
    }
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            কেন SchoolSheba বেছে নেবেন?
          </h2>
          <p className="text-lg text-muted-foreground">
            আমরা শুধু একটি ওয়েবসাইট বানাতে টুল নই, আমরা আপনার স্কুলের সম্পূর্ণ ডিজিটাল পার্টনার।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 flex gap-4 border border-border/50 shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
