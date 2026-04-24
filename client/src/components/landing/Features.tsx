import { Globe, LayoutTemplate, Settings, MousePointerClick, Zap, Layers } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "এক ক্লিকে ওয়েবসাইট তৈরি",
      description: "রেজিস্ট্রেশনের পরই স্বয়ংক্রিয়ভাবে একটি বেসিক স্কুল ওয়েবসাইট তৈরি হয়ে যাবে।",
      icon: <MousePointerClick className="w-6 h-6 text-primary" />,
      delay: "0",
    },
    {
      title: "সহজ কাস্টমাইজেশন",
      description: "কোনো কোডিং ছাড়াই ড্র্যাগ অ্যান্ড ড্রপ পদ্ধতিতে ওয়েবসাইট সহজেই সাজিয়ে নিন।",
      icon: <Settings className="w-6 h-6 text-primary" />,
      delay: "100",
    },
    {
      title: "অ্যাডভান্সড কাস্টমাইজেশন",
      description: "পেইজ, সেকশন যোগ করা বা বাদ দেওয়া – সবকিছুই আপনার হাতের মুঠোয়।",
      icon: <Layers className="w-6 h-6 text-primary" />,
      delay: "200",
    },
    {
      title: "নিজস্ব ডোমেইন যুক্ত করুন",
      description: "আপনার স্কুলের জন্য নিজস্ব কাস্টম ডোমেইন (যেমন- amar-school.com) যুক্ত করুন।",
      icon: <Globe className="w-6 h-6 text-primary" />,
      delay: "300",
    },
    {
      title: "পছন্দের টেমপ্লেট বেছে নিন",
      description: "বহু আকর্ষণীয় থিম ও ডিজাইন থেকে আপনার স্কুলের জন্য মানানসই একটি বেছে নিন।",
      icon: <LayoutTemplate className="w-6 h-6 text-primary" />,
      delay: "400",
    },
    {
      title: "সব ফিচার এক প্ল্যাটফর্মে",
      description: "নোটিশ বোর্ড, কন্টাক্টস, অ্যাডমিশন – সবকিছুই এক জায়গা থেকে পরিচালনা করুন।",
      icon: <Zap className="w-6 h-6 text-primary" />,
      delay: "500",
    },
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            আপনার স্কুলের ডিজিটাল উপস্থিতি তৈরির<br />
            <span className="text-primary">সব টুল এক জায়গায়</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            SchoolSheba আপনাকে দিচ্ছে ওয়েবসাইট তৈরি এবং পরিচালনার জন্য প্রয়োজনীয় সব ফিচার।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
