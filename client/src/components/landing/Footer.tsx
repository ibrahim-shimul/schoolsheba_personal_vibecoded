import { Link } from "wouter";
import logo from "@assets/image_1773012002142.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer mb-4">
                <img src={logo} alt="SchoolSheba Logo" className="h-8 object-contain" />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              বাংলাদেশের স্কুলগুলোর জন্য সম্পূর্ণ বাংলা ভাষায় তৈরি একটি স্বয়ংক্রিয় ওয়েবসাইট বিল্ডার ও ম্যানেজমেন্ট প্ল্যাটফর্ম।
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">কোম্পানি</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">আমাদের সম্পর্কে</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">যোগাযোগ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">ক্যারিয়ার</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">প্রোডাক্ট</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-muted-foreground hover:text-primary text-sm transition-colors">ফিচারসমূহ</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary text-sm transition-colors">মূল্য তালিকা</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary text-sm transition-colors">প্রশ্নোত্তর</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">পলিসি</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">শর্তাবলী</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">গোপনীয়তা নীতি</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">রিফান্ড পলিসি</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} SchoolSheba. সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors">
              <span className="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
