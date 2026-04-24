import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Upload, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import logo from "@assets/image_1773012002142.png";

export default function AuthPage() {
  const [, setLocation] = useLocation();
  const [isLogin, setIsLogin] = useState(false);
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleNextStep = (e: React.MouseEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep(3); // Success step
    }, 1000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLocation("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Navigation */}
      <header className="flex items-center justify-between p-6 md:px-12 lg:px-16 w-full">
        <Link href="/">
          <div className="cursor-pointer">
            <img src={logo} alt="SchoolSheba Logo" className="h-8 md:h-10 object-contain" />
          </div>
        </Link>
        <button 
          onClick={() => {
            setIsLogin(!isLogin);
            setStep(1);
          }}
          className="font-semibold text-foreground hover:text-primary transition-colors text-base"
        >
          {isLogin ? "রেজিস্টার" : "লগইন"}
        </button>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row px-4 md:px-8 lg:px-12 pb-8 gap-8 lg:gap-16">
        
        {/* Left side - Image */}
        <div className="hidden md:block w-1/2 relative rounded-[2rem] overflow-hidden shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Library" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center lg:justify-start lg:pl-12">
          <div className="w-full max-w-[440px]">
            {isLogin ? (
              <>
                <h1 className="text-3xl md:text-[2rem] font-bold text-[#003057] mb-3 font-sans tracking-tight">
                  লগইন
                </h1>
                <p className="text-muted-foreground mb-8 text-[15px]">
                  আপনার স্কুলের ড্যাশবোর্ডে প্রবেশ করতে লগইন করুন
                </p>

                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2.5">
                    <Label htmlFor="login-email" className="text-[15px] font-medium text-[#003057]">ইমেইল ঠিকানা</Label>
                    <Input 
                      id="login-email" 
                      type="email" 
                      placeholder="name@school.com" 
                      className="h-12 bg-[#F3F4F6] border-transparent focus:border-primary focus:bg-white text-[15px] placeholder:text-muted-foreground/70"
                    />
                  </div>

                  <div className="space-y-2.5">
                    <Label htmlFor="login-password" className="text-[15px] font-medium text-[#003057]">পাসওয়ার্ড</Label>
                    <Input 
                      id="login-password" 
                      type="password" 
                      placeholder="••••••••••" 
                      className="h-12 bg-[#F3F4F6] border-transparent focus:border-primary focus:bg-white text-[15px] placeholder:text-muted-foreground/70"
                    />
                    <div className="flex justify-end mt-2">
                      <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        পাসওয়ার্ড ভুলে গেছেন?
                      </a>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" className="w-full h-12 md:h-14 bg-[#00A8FF] hover:bg-[#00A8FF]/90 text-white font-semibold text-base rounded-xl">
                      লগইন করুন
                    </Button>
                  </div>
                </form>
              </>
            ) : (
              <>
                {step === 1 && (
                  <>
                    <h1 className="text-3xl md:text-[2rem] font-bold text-[#003057] mb-3 font-sans tracking-tight">
                      অ্যাকাউন্ট তৈরি করুন
                    </h1>
                    <p className="text-muted-foreground mb-8 text-[15px]">
                      ধাপ ১: আপনার বেসিক তথ্য দিয়ে শুরু করুন
                    </p>

                    <form className="space-y-6">
                      <div className="space-y-2.5">
                        <Label htmlFor="adminName" className="text-[15px] font-medium text-[#003057]">আপনার নাম</Label>
                        <Input 
                          id="adminName" 
                          placeholder="উদাহরণ: মোঃ রহিম উদ্দিন" 
                          className="h-12 bg-[#F3F4F6] border-transparent focus:border-primary focus:bg-white text-[15px] placeholder:text-muted-foreground/70"
                        />
                      </div>

                      <div className="space-y-2.5">
                        <Label htmlFor="reg-email" className="text-[15px] font-medium text-[#003057]">ইমেইল ঠিকানা</Label>
                        <Input 
                          id="reg-email" 
                          type="email" 
                          placeholder="name@school.com" 
                          className="h-12 bg-[#F3F4F6] border-transparent focus:border-primary focus:bg-white text-[15px] placeholder:text-muted-foreground/70"
                        />
                      </div>

                      <div className="space-y-2.5">
                        <Label htmlFor="reg-password" className="text-[15px] font-medium text-[#003057]">পাসওয়ার্ড</Label>
                        <Input 
                          id="reg-password" 
                          type="password" 
                          placeholder="••••••••••" 
                          className="h-12 bg-[#F3F4F6] border-transparent focus:border-primary focus:bg-white text-[15px] placeholder:text-muted-foreground/70"
                        />
                      </div>

                      <div className="pt-4">
                        <Button 
                          onClick={handleNextStep}
                          className="w-full h-12 md:h-14 bg-[#00A8FF] hover:bg-[#00A8FF]/90 text-white font-semibold text-base rounded-xl gap-2"
                        >
                          পরবর্তী ধাপ <ArrowRight className="w-5 h-5" />
                        </Button>
                        <p className="text-center text-[13px] text-muted-foreground mt-4 font-medium">
                          ৩০ দিন ফ্রি • কোনো ক্রেডিট কার্ড লাগবে না
                        </p>
                      </div>
                    </form>
                  </>
                )}

                {step === 2 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                    <button 
                      onClick={() => setStep(1)}
                      className="flex items-center text-sm font-medium text-muted-foreground hover:text-[#00A8FF] mb-6 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4 mr-1" />
                      পেছনে যান
                    </button>
                    <h1 className="text-3xl md:text-[2rem] font-bold text-[#003057] mb-3 font-sans tracking-tight">
                      প্রতিষ্ঠানের তথ্য
                    </h1>
                    <p className="text-muted-foreground mb-8 text-[15px]">
                      ধাপ ২: আপনার স্কুল বা কলেজের তথ্য প্রদান করুন
                    </p>

                    <form onSubmit={handleRegister} className="space-y-6">
                      <div className="space-y-2.5">
                        <Label htmlFor="schoolName" className="text-[15px] font-medium text-[#003057]">প্রতিষ্ঠানের নাম</Label>
                        <Input 
                          id="schoolName" 
                          placeholder="উদাহরণ: ঢাকা আইডিয়াল স্কুল" 
                          className="h-12 bg-[#F3F4F6] border-transparent focus:border-primary focus:bg-white text-[15px] placeholder:text-muted-foreground/70"
                        />
                      </div>

                      <div className="space-y-2.5">
                        <Label htmlFor="phone" className="text-[15px] font-medium text-[#003057]">ফোন নম্বর</Label>
                        <Input 
                          id="phone" 
                          placeholder="+8801XXXXXXXXX" 
                          className="h-12 bg-[#F3F4F6] border-transparent focus:border-primary focus:bg-white text-[15px] placeholder:text-muted-foreground/70"
                        />
                      </div>

                      <div className="space-y-2.5">
                        <Label className="text-[15px] font-medium text-[#003057]">প্রতিষ্ঠানের লোগো</Label>
                        <div className="border-2 border-dashed border-[#E5E7EB] rounded-xl p-6 flex flex-col items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer">
                          <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                          <p className="text-sm font-medium text-foreground">লোগো আপলোড করুন</p>
                          <p className="text-xs text-muted-foreground mt-1">PNG, JPG, সর্বচ্চ ২MB</p>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button 
                          type="submit"
                          disabled={isLoading}
                          className="w-full h-12 md:h-14 bg-[#00A8FF] hover:bg-[#00A8FF]/90 text-white font-semibold text-base rounded-xl"
                        >
                          {isLoading ? "প্রসেস হচ্ছে..." : "পরবর্তী ধাপ"}
                        </Button>
                      </div>
                    </form>
                  </div>
                )}

                {step === 3 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                    <h1 className="text-3xl md:text-[2rem] font-bold text-[#003057] mb-3 font-sans tracking-tight">
                      প্যাকেজ নির্বাচন করুন
                    </h1>
                    <p className="text-muted-foreground mb-6 text-[15px]">
                      ধাপ ৩: আপনার স্কুলের জন্য উপযুক্ত প্যাকেজটি বেছে নিন
                    </p>

                    <div className="space-y-4 mb-6">
                      {/* Basic Package */}
                      <div className="border border-border rounded-xl p-4 cursor-pointer hover:border-primary transition-colors bg-white relative">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-bold text-lg text-foreground">বেসিক</h3>
                            <p className="text-sm text-muted-foreground">প্রাথমিক ওয়েবসাইট</p>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-xl text-primary">৳১৯৯</span>
                            <span className="text-sm text-muted-foreground">/মাস</span>
                          </div>
                        </div>
                        <ul className="text-sm text-muted-foreground space-y-1.5 mt-3">
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> ফ্রি সাব-ডোমেইন</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> বেসিক এডিটিং</li>
                        </ul>
                      </div>

                      {/* Plus Package */}
                      <div className="border-2 border-primary rounded-xl p-4 cursor-pointer relative bg-primary/5">
                        <div className="absolute -top-3 right-4 bg-primary text-white text-xs px-2 py-0.5 rounded-full font-medium">
                          জনপ্রিয়
                        </div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-bold text-lg text-foreground">প্লাস</h3>
                            <p className="text-sm text-muted-foreground">প্রফেশনাল ওয়েবসাইট</p>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-xl text-primary">৳৩৯৯</span>
                            <span className="text-sm text-muted-foreground">/মাস</span>
                          </div>
                        </div>
                        <ul className="text-sm text-muted-foreground space-y-1.5 mt-3">
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> কাস্টম ডোমেইন (.edu.bd)</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> অ্যাডভান্সড বিল্ডার</li>
                        </ul>
                      </div>
                    </div>

                    <div className="pt-2 space-y-3">
                      <Button 
                        onClick={() => setStep(4)}
                        className="w-full h-12 md:h-14 bg-[#00A8FF] hover:bg-[#00A8FF]/90 text-white font-semibold text-base rounded-xl"
                      >
                        প্যাকেজ সাবস্ক্রাইব করুন
                      </Button>
                      <Button 
                        variant="ghost"
                        onClick={() => setStep(4)}
                        className="w-full h-12 text-muted-foreground hover:text-foreground font-medium"
                      >
                        স্কিপ করুন (৩০ দিনের ফ্রি ট্রায়াল)
                      </Button>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="text-center py-8 animate-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#003057] mb-3">
                      অভিনন্দন!
                    </h2>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      আপনার স্কুল ওয়েবসাইট সফলভাবে তৈরি হয়েছে। আপনার ড্যাশবোর্ড এখন ব্যবহারের জন্য প্রস্তুত।
                    </p>
                    <Button 
                      onClick={() => setLocation("/dashboard")}
                      className="w-full h-12 md:h-14 bg-[#00A8FF] hover:bg-[#00A8FF]/90 text-white font-semibold text-base rounded-xl"
                    >
                      ড্যাশবোর্ডে প্রবেশ করুন
                    </Button>
                  </div>
                )}
              </>
            )}

            {(isLogin || step === 1) && (
              <div className="mt-8 text-center text-[15px]">
                <span className="text-muted-foreground">
                  {isLogin ? "অ্যাকাউন্ট নেই? " : "আগে থেকেই অ্যাকাউন্ট আছে? "}
                </span>
                <button 
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setStep(1);
                  }}
                  className="font-semibold text-[#003057] hover:text-primary transition-colors"
                >
                  {isLogin ? "রেজিস্টার করুন" : "লগইন করুন"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
