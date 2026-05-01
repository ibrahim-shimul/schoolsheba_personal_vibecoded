import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight } from "lucide-react";
import logo from "@assets/image_1773012002142.png";
import { apiFetch } from "@/lib/api";
import { setAuthTokens } from "@/lib/auth";

type Tier = "free" | "premium";

export default function AuthPage() {
  const [, setLocation] = useLocation();
  const [isLogin, setIsLogin] = useState(false);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    schoolName: "",
    schoolSlug: "",
    tier: "free" as Tier,
  });
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const result = await apiFetch<{
        accessToken: string;
        refreshToken: string;
      }>("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(loginData),
      });
      setAuthTokens(result.accessToken, result.refreshToken);
      setLocation("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "লগইন ব্যর্থ হয়েছে");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const result = await apiFetch<{
        accessToken: string;
        refreshToken: string;
      }>("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(registerData),
      });
      setAuthTokens(result.accessToken, result.refreshToken);
      if (registerData.tier === "premium") {
        await apiFetch("/api/billing/payments/initiate", {
          method: "POST",
          body: JSON.stringify({ packageTier: "premium", months: 1 }),
        });
      }
      setLocation("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "রেজিস্ট্রেশন ব্যর্থ হয়েছে");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
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
            setError(null);
          }}
          className="font-semibold text-foreground hover:text-primary transition-colors text-base"
        >
          {isLogin ? "রেজিস্টার" : "লগইন"}
        </button>
      </header>

      <div className="flex-1 flex flex-col md:flex-row px-4 md:px-8 lg:px-12 pb-8 gap-8 lg:gap-16">
        <div className="hidden md:block w-1/2 relative rounded-[2rem] overflow-hidden shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Library"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center lg:justify-start lg:pl-12">
          <div className="w-full max-w-[440px] space-y-4">
            {error ? <p className="text-sm text-red-500">{error}</p> : null}

            {isLogin ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <h1 className="text-3xl font-bold text-[#003057]">লগইন</h1>
                <div className="space-y-2">
                  <Label htmlFor="login-email">ইমেইল ঠিকানা</Label>
                  <Input
                    id="login-email"
                    type="email"
                    value={loginData.email}
                    onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">পাসওয়ার্ড</Label>
                  <Input
                    id="login-password"
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
                  />
                </div>
                <Button type="submit" className="w-full h-12" disabled={loading}>
                  {loading ? "প্রসেস হচ্ছে..." : "লগইন করুন"}
                </Button>
              </form>
            ) : (
              <>
                {step === 1 ? (
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setStep(2);
                    }}
                  >
                    <h1 className="text-3xl font-bold text-[#003057]">অ্যাকাউন্ট তৈরি করুন</h1>
                    <div className="space-y-2">
                      <Label htmlFor="name">আপনার নাম</Label>
                      <Input
                        id="name"
                        value={registerData.name}
                        onChange={(e) => setRegisterData((prev) => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">ইমেইল ঠিকানা</Label>
                      <Input
                        id="email"
                        type="email"
                        value={registerData.email}
                        onChange={(e) => setRegisterData((prev) => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">পাসওয়ার্ড</Label>
                      <Input
                        id="password"
                        type="password"
                        value={registerData.password}
                        onChange={(e) => setRegisterData((prev) => ({ ...prev, password: e.target.value }))}
                      />
                    </div>
                    <Button type="submit" className="w-full h-12 gap-2">
                      পরবর্তী ধাপ <ArrowRight className="w-4 h-4" />
                    </Button>
                  </form>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-4">
                    <button type="button" onClick={() => setStep(1)} className="text-sm flex items-center gap-1 text-muted-foreground">
                      <ArrowLeft className="w-4 h-4" /> পেছনে যান
                    </button>
                    <h1 className="text-3xl font-bold text-[#003057]">স্কুল তথ্য</h1>
                    <div className="space-y-2">
                      <Label htmlFor="schoolName">প্রতিষ্ঠানের নাম</Label>
                      <Input
                        id="schoolName"
                        value={registerData.schoolName}
                        onChange={(e) => setRegisterData((prev) => ({ ...prev, schoolName: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="schoolSlug">স্কুল স্লাগ (উদাহরণ: amar-school)</Label>
                      <Input
                        id="schoolSlug"
                        value={registerData.schoolSlug}
                        onChange={(e) => setRegisterData((prev) => ({ ...prev, schoolSlug: e.target.value.toLowerCase() }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tier">প্যাকেজ</Label>
                      <select
                        id="tier"
                        className="w-full h-10 border rounded-md px-3"
                        value={registerData.tier}
                        onChange={(e) => setRegisterData((prev) => ({ ...prev, tier: e.target.value as Tier }))}
                      >
                        <option value="free">ফ্রি (৩০ দিনের ট্রায়াল)</option>
                        <option value="premium">প্রিমিয়াম</option>
                      </select>
                    </div>
                    <Button type="submit" className="w-full h-12" disabled={loading}>
                      {loading ? "প্রসেস হচ্ছে..." : "রেজিস্টার করুন"}
                    </Button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
