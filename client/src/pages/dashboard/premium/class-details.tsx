import { Sidebar, Topbar } from "@/components/dashboard/Layout";
import { Link, useRoute } from "wouter";
import { 
  ArrowLeft,
  Users,
  BookMarked,
  Calendar,
  Layers,
  GraduationCap
} from "lucide-react";

export default function ClassDetails() {
  const [, params] = useRoute("/dashboard/premium/academic/class/:id");
  const classId = params?.id || "1";
  
  // In a real app, you'd fetch the class details using the ID
  // Mock data for this specific class
  const classData = {
    id: classId,
    name: classId === "1" ? "৬ষ্ঠ শ্রেণি" : "১০ম শ্রেণি",
    sections: ["ক", "খ"],
    studentsCount: 120,
    classTeacher: "রহিম উদ্দিন",
    
    subjects: [
      { id: 1, name: "বাংলা ১ম পত্র", code: "101", teacher: "রহিম উদ্দিন" },
      { id: 2, name: "ইংরেজি ১ম পত্র", code: "107", teacher: "ফাতেমা বেগম" },
      { id: 3, name: "সাধারণ গণিত", code: "109", teacher: "আনিসুর রহমান" },
      { id: 4, name: "বিজ্ঞান", code: "127", teacher: "জুবায়ের হোসেন" },
    ],
    
    students: [
      { id: "ST-2026-001", name: "রাকিব হাসান", roll: "১", section: "ক", phone: "01711000001", status: "Active" },
      { id: "ST-2026-002", name: "ফাতেমা আক্তার", roll: "২", section: "ক", phone: "01711000002", status: "Active" },
      { id: "ST-2026-003", name: "মেহেদী হাসান", roll: "৩", section: "খ", phone: "01711000003", status: "Active" },
    ]
  };

  return (
    <div className="flex h-screen bg-muted/30 overflow-hidden">
      <div className="hidden md:block w-64 flex-shrink-0">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Topbar />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-6">
            
            {/* Header & Back Button */}
            <div className="flex flex-col gap-4">
              <Link href="/dashboard/premium/academic">
                <a className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-violet-600 transition-colors w-fit">
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  একাডেমিক ম্যানেজমেন্টে ফিরে যান
                </a>
              </Link>
              
              <div className="bg-white rounded-2xl border border-border shadow-sm p-6 lg:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-violet-50 rounded-full blur-3xl -mr-20 -mt-20"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold text-foreground">{classData.name}</h1>
                      <p className="text-muted-foreground font-medium flex items-center gap-2">
                        <span>শাখা: {classData.sections.join(", ")}</span>
                        <span>•</span>
                        <span>শ্রেণি শিক্ষক: {classData.classTeacher}</span>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 relative z-10 w-full md:w-auto">
                  <div className="bg-blue-50 px-4 py-3 rounded-xl border border-blue-100 flex-1 md:flex-none text-center min-w-[120px]">
                    <p className="text-xs text-blue-600 font-bold uppercase mb-1">মোট শিক্ষার্থী</p>
                    <p className="text-2xl font-black text-blue-700">{classData.studentsCount}</p>
                  </div>
                  <div className="bg-amber-50 px-4 py-3 rounded-xl border border-amber-100 flex-1 md:flex-none text-center min-w-[120px]">
                    <p className="text-xs text-amber-600 font-bold uppercase mb-1">মোট বিষয়</p>
                    <p className="text-2xl font-black text-amber-700">{classData.subjects.length}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Subjects List */}
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden col-span-1">
                <div className="p-5 border-b border-border bg-muted/10 flex items-center gap-2">
                  <BookMarked className="w-5 h-5 text-violet-600" />
                  <h3 className="font-bold text-foreground">বিষয়সমূহ</h3>
                </div>
                <div className="divide-y divide-border">
                  {classData.subjects.map((subject, idx) => (
                    <div key={idx} className="p-4 hover:bg-muted/30 transition-colors">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-foreground">{subject.name}</h4>
                        <span className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">{subject.code}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">শিক্ষক: {subject.teacher}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Students Preview List */}
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden col-span-1 lg:col-span-2">
                <div className="p-5 border-b border-border bg-muted/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-violet-600" />
                    <h3 className="font-bold text-foreground">শিক্ষার্থীদের তালিকা</h3>
                  </div>
                  <Link href="/dashboard/premium/students">
                    <a className="text-sm text-violet-600 font-medium hover:underline">সব দেখুন</a>
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-muted/30 text-muted-foreground border-b border-border">
                      <tr>
                        <th className="px-6 py-3 font-medium">আইডি</th>
                        <th className="px-6 py-3 font-medium">রোল</th>
                        <th className="px-6 py-3 font-medium">নাম</th>
                        <th className="px-6 py-3 font-medium">শাখা</th>
                        <th className="px-6 py-3 font-medium">স্ট্যাটাস</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {classData.students.map((student, index) => (
                        <tr key={index} className="hover:bg-muted/20 transition-colors">
                          <td className="px-6 py-4 font-mono text-xs text-muted-foreground">{student.id}</td>
                          <td className="px-6 py-4 font-semibold text-center">{student.roll}</td>
                          <td className="px-6 py-4 font-bold text-foreground">{student.name}</td>
                          <td className="px-6 py-4">
                            <span className="bg-muted px-2 py-1 rounded text-xs">{student.section}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                              {student.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}