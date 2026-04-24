import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "SchoolSheba ব্যবহার করতে কি কোনো কোডিং জানা লাগবে?",
      answer: "না! SchoolSheba সম্পূর্ণ কোডিং-মুক্ত। আপনি ড্র্যাগ অ্যান্ড ড্রপ পদ্ধতিতে খুব সহজেই আপনার স্কুলের ওয়েবসাইট তৈরি ও পরিচালনা করতে পারবেন।"
    },
    {
      question: "ফ্রি ট্রায়াল কতদিনের এবং এর পর কী হবে?",
      answer: "SchoolSheba-তে আপনি ৩০ দিনের ফ্রি ট্রায়াল পাবেন। এই সময়ে আপনি আমাদের সব বেসিক ফিচার ব্যবহার করে দেখতে পারবেন। ৩০ দিন পর আপনাকে আপনার সুবিধা অনুযায়ী যেকোনো একটি প্যাকেজ বেছে নিতে হবে।"
    },
    {
      question: "আমি কি আমার নিজস্ব ডোমেইন ব্যবহার করতে পারবো?",
      answer: "হ্যাঁ! আমাদের 'প্লাস' এবং 'প্রিমিয়াম' প্যাকেজে আপনি আপনার নিজস্ব ডোমেইন (যেমন- yourschool.com) যুক্ত করতে পারবেন। 'বেসিক' প্যাকেজে আপনি একটি ফ্রি সাব-ডোমেইন পাবেন।"
    },
    {
      question: "পেমেন্ট কী মাসিক না বাৎসরিক?",
      answer: "আমাদের প্যাকেজগুলোর পেমেন্ট মাসিক ভিত্তিতে নেওয়া হয়। তবে আপনি চাইলে একবারে কয়েক মাসের বা এক বছরের পেমেন্ট অগ্রিম করে রাখতে পারবেন।"
    },
    {
      question: "আমি কি পরে আমার প্যাকেজ পরিবর্তন করতে পারবো?",
      answer: "অবশ্যই! আপনি যেকোনো সময় আপনার ড্যাশবোর্ড থেকে আপনার প্যাকেজ আপগ্রেড বা ডাউনগ্রেড করতে পারবেন।"
    },
    {
      question: "আপনাদের সাপোর্ট টিম কি সাহায্য করবে?",
      answer: "হ্যাঁ, আমাদের ডেডিকেটেড সাপোর্ট টিম সব সময় আপনার যেকোনো সমস্যা সমাধানে প্রস্তুত আছে। আপনি ড্যাশবোর্ড থেকে বা ইমেইলের মাধ্যমে আমাদের সাথে যোগাযোগ করতে পারবেন।"
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            SchoolSheba সম্পর্কে কিছু প্রশ্ন
          </h2>
          <p className="text-lg text-muted-foreground">
            আপনার মনে থাকা সাধারণ কিছু প্রশ্নের উত্তর এখানে দেওয়া হলো।
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
