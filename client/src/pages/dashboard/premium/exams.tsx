import { Sidebar, Topbar } from "@/components/dashboard/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  FileText,
  Plus,
  Download,
  Filter,
  X,
  Calendar,
  Save,
  Printer,
  Eye,
  CheckCircle
} from "lucide-react";
import { Label } from "@/components/ui/label";

export default function ExamsManagement() {
  const [activeTab, setActiveTab] = useState("routines");
  const [isAddExamModalOpen, setIsAddExamModalOpen] = useState(false);
  const [viewRoutineExam, setViewRoutineExam] = useState<any>(null);
  const [viewMarksheetStudent, setViewMarksheetStudent] = useState<any>(null);
  const [isMarksSaved, setIsMarksSaved] = useState(false);

  // Mock Data
  const exams = [
    { id: 1, name: "অর্ধবার্ষিক পরীক্ষা ২০২৬", status: "Upcoming", date: "১৫ জুন, ২০২৬", classes: "৬ষ্ঠ - ১০ম" },
    { id: 2, name: "১ম সাময়িক পরীক্ষা", status: "Completed", date: "১০ মার্চ, ২০২৬", classes: "৬ষ্ঠ - ১০ম" },
    { id: 3, name: "প্রি-টেস্ট পরীক্ষা", status: "Ongoing", date: "চলমান", classes: "১০ম" },
  ];

  const routineData = [
    { date: "১৫ জুন, ২০২৬", day: "রবিবার", time: "সকাল ১০:০০ - ১:০০", subject: "বাংলা ১ম পত্র" },
    { date: "১৬ জুন, ২০২৬", day: "সোমবার", time: "সকাল ১০:০০ - ১:০০", subject: "বাংলা ২য় পত্র" },
    { date: "১৭ জুন, ২০২৬", day: "মঙ্গলবার", time: "সকাল ১০:০০ - ১:০০", subject: "ইংরেজি ১ম পত্র" },
    { date: "১৮ জুন, ২০২৬", day: "বুধবার", time: "সকাল ১০:০০ - ১:০০", subject: "ইংরেজি ২য় পত্র" },
    { date: "২০ জুন, ২০২৬", day: "বৃহস্পতিবার", time: "সকাল ১০:০০ - ১:০০", subject: "গণিত" },
  ];

  const [marksData, setMarksData] = useState([
    { roll: "১", name: "রাকিব হাসান", bangla: 85, english: 88, math: 95, science: 90 },
    { roll: "২", name: "ফাতেমা আক্তার", bangla: 90, english: 92, math: 85, science: 95 },
    { roll: "৩", name: "মেহেদী হাসান", bangla: 75, english: 68, math: 80, science: 72 },
    { roll: "৪", name: "সাকিব আল হাসান", bangla: 82, english: 79, math: 88, science: 85 },
    { roll: "৫", name: "নুসরাত জাহান", bangla: 95, english: 94, math: 98, science: 92 },
  ]);

  const getGradeInfo = (marks: number) => {
    if (marks >= 80) return { grade: "A+", gpa: 5.0 };
    if (marks >= 70) return { grade: "A", gpa: 4.0 };
    if (marks >= 60) return { grade: "A-", gpa: 3.5 };
    if (marks >= 50) return { grade: "B", gpa: 3.0 };
    if (marks >= 40) return { grade: "C", gpa: 2.0 };
    if (marks >= 33) return { grade: "D", gpa: 1.0 };
    return { grade: "F", gpa: 0.0 };
  };

  const calculateResult = (student: any) => {
    const total = student.bangla + student.english + student.math + student.science;
    const subjects = 4;
    const gpas = [
      getGradeInfo(student.bangla).gpa,
      getGradeInfo(student.english).gpa,
      getGradeInfo(student.math).gpa,
      getGradeInfo(student.science).gpa
    ];
    
    const hasFail = gpas.includes(0.0);
    const avgGpa = hasFail ? 0.0 : (gpas.reduce((a, b) => a + b, 0) / subjects).toFixed(2);
    const finalGrade = hasFail ? "F" : 
                       avgGpa === "5.00" ? "A+" : 
                       Number(avgGpa) >= 4.0 ? "A" : 
                       Number(avgGpa) >= 3.5 ? "A-" : "B";
                       
    return { total, gpa: avgGpa, grade: finalGrade };
  };

  const handleMarkChange = (index: number, field: string, value: string) => {
    const updated = [...marksData];
    updated[index] = { ...updated[index], [field]: value === '' ? '' : parseInt(value) || 0 };
    setMarksData(updated);
    setIsMarksSaved(false);
  };

  const handleSaveMarks = () => {
    setIsMarksSaved(true);
    setTimeout(() => setIsMarksSaved(false), 3000);
  };

  return (
    <div className="flex h-screen bg-muted/30 overflow-hidden font-hind">
      <div className="hidden md:block w-64 flex-shrink-0">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Topbar />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-6">
            
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <FileText className="w-6 h-6 text-violet-600" />
                  পরীক্ষা ও ফলাফল
                </h1>
                <p className="text-muted-foreground mt-1">পরীক্ষার রুটিন, মার্কস এন্ট্রি এবং ফলাফল প্রকাশ</p>
              </div>
            </div>

            {/* Custom Tabs */}
            <div className="flex border-b border-border mb-6 overflow-x-auto no-scrollbar">
              <button 
                onClick={() => setActiveTab("routines")}
                className={`px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${activeTab === 'routines' ? 'border-violet-600 text-violet-700' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
              >
                পরীক্ষার রুটিন
              </button>
              <button 
                onClick={() => setActiveTab("marks")}
                className={`px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${activeTab === 'marks' ? 'border-violet-600 text-violet-700' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
              >
                মার্কস এন্ট্রি
              </button>
              <button 
                onClick={() => setActiveTab("reports")}
                className={`px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${activeTab === 'reports' ? 'border-violet-600 text-violet-700' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
              >
                ফলাফল ও মার্কশিট
              </button>
            </div>

            {/* Tab: Exams / Routines */}
            {activeTab === "routines" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">পরীক্ষার তালিকা</h3>
                  <Button className="bg-violet-600 hover:bg-violet-700 text-white" onClick={() => setIsAddExamModalOpen(true)}>
                    <Plus className="w-4 h-4 mr-2" /> নতুন পরীক্ষা
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {exams.map((exam) => (
                    <div key={exam.id} className="bg-white rounded-2xl border border-border shadow-sm p-5 hover:shadow-md transition-all group">
                      <div className="flex justify-between items-start mb-4">
                        <div className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          exam.status === 'Upcoming' ? 'bg-blue-100 text-blue-700' :
                          exam.status === 'Ongoing' ? 'bg-amber-100 text-amber-700' :
                          'bg-emerald-100 text-emerald-700'
                        }`}>
                          {exam.status === 'Upcoming' ? 'আসন্ন' : exam.status === 'Ongoing' ? 'চলমান' : 'সম্পন্ন'}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{exam.name}</h4>
                      <p className="text-sm text-muted-foreground mb-4 flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" /> তারিখ: {exam.date}
                      </p>
                      
                      <div className="pt-4 border-t border-border flex justify-between items-center">
                        <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded">ক্লাস: {exam.classes}</span>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="h-8 text-xs border-violet-200 text-violet-700 hover:bg-violet-50"
                          onClick={() => setViewRoutineExam(exam)}
                        >
                          রুটিন দেখুন
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Top Area for Class View Navigation */}
            {(activeTab === "marks" || activeTab === "reports") && (
              <div className="flex items-center gap-4 mb-6 animate-in fade-in duration-300">
                <div className="flex-1">
                  <Input 
                    placeholder="ক্লাস বা শাখা খুঁজুন..." 
                    className="max-w-xs bg-white"
                  />
                </div>
                <div className="flex gap-2">
                  <select className="h-10 px-3 border border-input rounded-md text-sm outline-none focus:border-violet-500 bg-white">
                    <option>অর্ধবার্ষিক পরীক্ষা ২০২৬</option>
                    <option>১ম সাময়িক পরীক্ষা</option>
                  </select>
                </div>
              </div>
            )}

            {/* Tab: Marks Entry Placeholder */}
            {activeTab === "marks" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">মার্কস এন্ট্রির জন্য ক্লাস নির্বাচন করুন</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { id: 1, name: "৬ষ্ঠ শ্রেণি", section: "ক", students: 45, exam: "অর্ধবার্ষিক পরীক্ষা", status: "pending" },
                    { id: 2, name: "৭ম শ্রেণি", section: "খ", students: 42, exam: "অর্ধবার্ষিক পরীক্ষা", status: "completed" },
                    { id: 3, name: "৮ম শ্রেণি", section: "ক", students: 50, exam: "অর্ধবার্ষিক পরীক্ষা", status: "pending" },
                    { id: 4, name: "৯ম শ্রেণি", section: "বিজ্ঞান", students: 35, exam: "অর্ধবার্ষিক পরীক্ষা", status: "pending" },
                    { id: 5, name: "১০ম শ্রেণি", section: "মানবিক", students: 30, exam: "অর্ধবার্ষিক পরীক্ষা", status: "completed" },
                  ].map((cls) => (
                    <div key={cls.id} className="bg-white rounded-2xl border border-border shadow-sm p-5 hover:shadow-md transition-all group">
                      <div className="flex justify-between items-start mb-4">
                        <div className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          cls.status === 'completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {cls.status === 'completed' ? 'সম্পন্ন' : 'বাকি আছে'}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-1">{cls.name}</h4>
                      <p className="text-sm text-muted-foreground mb-4">শাখা: {cls.section} • শিক্ষার্থী: {cls.students} জন</p>
                      
                      <div className="pt-4 border-t border-border flex justify-between items-center">
                        <span className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded">{cls.exam}</span>
                        <Button 
                          size="sm" 
                          className="h-8 text-xs bg-violet-600 hover:bg-violet-700 text-white"
                          onClick={() => setActiveTab("marks-entry-active")}
                        >
                          মার্কস এন্ট্রি করুন
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Active Marks Entry View */}
            {activeTab === "marks-entry-active" && (
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden animate-in fade-in duration-300">
                <div className="p-4 border-b border-border flex justify-between items-center bg-violet-50/50">
                  <div className="flex items-center gap-3">
                    <Button variant="ghost" size="icon" onClick={() => setActiveTab("marks")} className="h-8 w-8">
                      <X className="w-4 h-4" />
                    </Button>
                    <div>
                      <h3 className="font-bold text-foreground">মার্কস এন্ট্রি: ৬ষ্ঠ শ্রেণি - ক শাখা</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">অর্ধবার্ষিক পরীক্ষা ২০২৬ (সকল বিষয়)</p>
                    </div>
                  </div>
                  <Button 
                    className={`${isMarksSaved ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-violet-600 hover:bg-violet-700'} text-white transition-colors`}
                    onClick={handleSaveMarks}
                  >
                    {isMarksSaved ? (
                      <><CheckCircle className="w-4 h-4 mr-2" /> সেভ হয়েছে</>
                    ) : (
                      <><Save className="w-4 h-4 mr-2" /> মার্কস সেভ করুন</>
                    )}
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-muted/30 text-muted-foreground border-b border-border">
                      <tr>
                        <th className="px-6 py-3 font-medium w-20">রোল</th>
                        <th className="px-6 py-3 font-medium min-w-[200px]">শিক্ষার্থীর নাম</th>
                        <th className="px-4 py-3 font-medium text-center">বাংলা (১০০)</th>
                        <th className="px-4 py-3 font-medium text-center">ইংরেজি (১০০)</th>
                        <th className="px-4 py-3 font-medium text-center">গণিত (১০০)</th>
                        <th className="px-4 py-3 font-medium text-center">বিজ্ঞান (১০০)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {marksData.map((student, index) => (
                        <tr key={index} className="hover:bg-muted/10 transition-colors">
                          <td className="px-6 py-3 font-semibold">{student.roll}</td>
                          <td className="px-6 py-3 font-medium">{student.name}</td>
                          <td className="px-4 py-3">
                            <Input 
                              value={student.bangla} 
                              onChange={(e) => handleMarkChange(index, 'bangla', e.target.value)}
                              className="w-20 text-center mx-auto h-9"
                              type="number"
                            />
                          </td>
                          <td className="px-4 py-3">
                            <Input 
                              value={student.english} 
                              onChange={(e) => handleMarkChange(index, 'english', e.target.value)}
                              className="w-20 text-center mx-auto h-9"
                              type="number"
                            />
                          </td>
                          <td className="px-4 py-3">
                            <Input 
                              value={student.math} 
                              onChange={(e) => handleMarkChange(index, 'math', e.target.value)}
                              className="w-20 text-center mx-auto h-9"
                              type="number"
                            />
                          </td>
                          <td className="px-4 py-3">
                            <Input 
                              value={student.science} 
                              onChange={(e) => handleMarkChange(index, 'science', e.target.value)}
                              className="w-20 text-center mx-auto h-9"
                              type="number"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Tab: Reports Class Selection Placeholder */}
            {activeTab === "reports" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">ফলাফল দেখার জন্য ক্লাস নির্বাচন করুন</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { id: 1, name: "৬ষ্ঠ শ্রেণি", section: "ক", students: 45, exam: "অর্ধবার্ষিক পরীক্ষা", status: "published" },
                    { id: 2, name: "৭ম শ্রেণি", section: "খ", students: 42, exam: "অর্ধবার্ষিক পরীক্ষা", status: "processing" },
                    { id: 3, name: "৮ম শ্রেণি", section: "ক", students: 50, exam: "অর্ধবার্ষিক পরীক্ষা", status: "processing" },
                    { id: 4, name: "৯ম শ্রেণি", section: "বিজ্ঞান", students: 35, exam: "অর্ধবার্ষিক পরীক্ষা", status: "published" },
                    { id: 5, name: "১০ম শ্রেণি", section: "মানবিক", students: 30, exam: "অর্ধবার্ষিক পরীক্ষা", status: "published" },
                  ].map((cls) => (
                    <div key={cls.id} className="bg-white rounded-2xl border border-border shadow-sm p-5 hover:shadow-md transition-all group">
                      <div className="flex justify-between items-start mb-4">
                        <div className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          cls.status === 'published' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {cls.status === 'published' ? 'প্রকাশিত' : 'প্রক্রিয়াধীন'}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-1">{cls.name}</h4>
                      <p className="text-sm text-muted-foreground mb-4">শাখা: {cls.section} • শিক্ষার্থী: {cls.students} জন</p>
                      
                      <div className="pt-4 border-t border-border flex justify-between items-center">
                        <span className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded">{cls.exam}</span>
                        <Button 
                          size="sm" 
                          className="h-8 text-xs border-violet-200 text-violet-700 bg-violet-50 hover:bg-violet-100"
                          variant="outline"
                          onClick={() => setActiveTab("reports-view-active")}
                        >
                          ফলাফল দেখুন
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Active Reports / Marksheets View */}
            {activeTab === "reports-view-active" && (
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden animate-in fade-in duration-300">
                <div className="p-4 border-b border-border flex justify-between items-center bg-violet-50/50">
                  <div className="flex items-center gap-3">
                    <Button variant="ghost" size="icon" onClick={() => setActiveTab("reports")} className="h-8 w-8">
                      <X className="w-4 h-4" />
                    </Button>
                    <div>
                      <h3 className="font-bold text-foreground">ফলাফল ও মার্কশিট: ৬ষ্ঠ শ্রেণি - ক শাখা</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">অর্ধবার্ষিক পরীক্ষা ২০২৬</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-violet-200 text-violet-700 bg-white">
                      <Download className="w-4 h-4 mr-2" /> সব মার্কশিট পিডিএফ
                    </Button>
                    <Button variant="outline" size="sm" className="border-violet-200 text-violet-700 bg-white hidden sm:flex">
                      <Download className="w-4 h-4 mr-2" /> এক্সেল এক্সপোর্ট
                    </Button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-muted/30 text-muted-foreground border-b border-border">
                      <tr>
                        <th className="px-6 py-3 font-medium">রোল</th>
                        <th className="px-6 py-3 font-medium">নাম</th>
                        <th className="px-4 py-3 font-medium text-center text-violet-700">প্রাপ্ত মোট নম্বর</th>
                        <th className="px-4 py-3 font-medium text-center">গ্রেড</th>
                        <th className="px-4 py-3 font-medium text-center">GPA</th>
                        <th className="px-6 py-3 font-medium text-right">অ্যাকশন</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {marksData.map((student, index) => {
                        const result = calculateResult(student);
                        return (
                          <tr key={index} className="hover:bg-muted/20 transition-colors">
                            <td className="px-6 py-4 font-semibold text-center w-20">{student.roll}</td>
                            <td className="px-6 py-4 font-medium">{student.name}</td>
                            <td className="px-4 py-4 text-center font-bold text-violet-700">{result.total}</td>
                            <td className={`px-4 py-4 text-center font-bold ${result.grade === 'F' ? 'text-red-600' : 'text-emerald-600'}`}>
                              {result.grade}
                            </td>
                            <td className="px-4 py-4 text-center font-bold">{result.gpa}</td>
                            <td className="px-6 py-4 text-right">
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-violet-600 hover:text-violet-800 hover:bg-violet-50"
                                onClick={() => setViewMarksheetStudent({ ...student, ...result })}
                              >
                                <Eye className="w-4 h-4 mr-1.5" /> মার্কশিট দেখুন
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>
        </main>
      </div>

      {/* Add Exam Modal */}
      {isAddExamModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-border flex justify-between items-center bg-muted/10">
              <h2 className="text-xl font-bold text-foreground">নতুন পরীক্ষা যোগ করুন</h2>
              <button onClick={() => setIsAddExamModalOpen(false)} className="p-2 text-muted-foreground hover:bg-muted rounded-full transition-colors"><X className="w-5 h-5"/></button>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <Label>পরীক্ষার নাম</Label>
                <Input placeholder="যেমন: অর্ধবার্ষিক পরীক্ষা ২০২৬" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>শুরুর তারিখ</Label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <Label>শেষের তারিখ</Label>
                  <Input type="date" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>প্রযোজ্য ক্লাস (একাধিক হতে পারে)</Label>
                <Input placeholder="যেমন: ৬ষ্ঠ - ১০ম" />
              </div>
            </div>
            <div className="p-4 border-t border-border bg-muted/10 flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsAddExamModalOpen(false)}>বাতিল</Button>
              <Button className="bg-violet-600 hover:bg-violet-700 text-white" onClick={() => setIsAddExamModalOpen(false)}>সংরক্ষণ করুন</Button>
            </div>
          </div>
        </div>
      )}

      {/* View Routine Modal */}
      {viewRoutineExam && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-border flex justify-between items-center bg-violet-600 text-white">
              <div>
                <h2 className="text-xl font-bold">{viewRoutineExam.name}</h2>
                <p className="text-violet-200 text-sm mt-1">শ্রেণি: {viewRoutineExam.classes} | পরীক্ষার রুটিন</p>
              </div>
              <button onClick={() => setViewRoutineExam(null)} className="p-2 text-white hover:bg-white/20 rounded-full transition-colors"><X className="w-5 h-5"/></button>
            </div>
            <div className="p-0 max-h-[60vh] overflow-y-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted/50 text-muted-foreground border-b border-border sticky top-0">
                  <tr>
                    <th className="px-6 py-3 font-medium">তারিখ ও বার</th>
                    <th className="px-6 py-3 font-medium">বিষয়</th>
                    <th className="px-6 py-3 font-medium">সময়</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {routineData.map((item, idx) => (
                    <tr key={idx} className="hover:bg-muted/20">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-foreground">{item.date}</div>
                        <div className="text-xs text-muted-foreground">{item.day}</div>
                      </td>
                      <td className="px-6 py-4 font-medium text-violet-700">{item.subject}</td>
                      <td className="px-6 py-4 text-muted-foreground">{item.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-border bg-muted/10 flex justify-between items-center">
              <Button variant="outline" className="text-violet-600 border-violet-200 bg-white">
                <Download className="w-4 h-4 mr-2" /> রুটিন ডাউনলোড
              </Button>
              <Button onClick={() => setViewRoutineExam(null)} variant="ghost">বন্ধ করুন</Button>
            </div>
          </div>
        </div>
      )}

      {/* View Marksheet Modal */}
      {viewMarksheetStudent && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
            <div className="p-4 border-b border-border flex justify-between items-center bg-muted/10 shrink-0">
              <h2 className="text-lg font-bold text-foreground">একাডেমিক ট্রান্সক্রিপ্ট</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="h-8">
                  <Printer className="w-4 h-4 mr-2" /> প্রিন্ট
                </Button>
                <button onClick={() => setViewMarksheetStudent(null)} className="p-1.5 text-muted-foreground hover:bg-muted rounded-full transition-colors"><X className="w-5 h-5"/></button>
              </div>
            </div>
            
            <div className="p-8 overflow-y-auto flex-1 bg-white print:p-0">
              {/* Marksheet Design */}
              <div className="border-4 border-double border-violet-200 p-8 rounded-xl relative">
                {/* Watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                  <div className="w-64 h-64 bg-violet-600 rounded-full blur-3xl"></div>
                </div>

                {/* Header */}
                <div className="text-center border-b-2 border-violet-100 pb-6 mb-6">
                  <h1 className="text-3xl font-bold text-violet-800 mb-2">ঢাকা আইডিয়াল স্কুল</h1>
                  <p className="text-muted-foreground text-sm">১২২/এ, মিরপুর রোড, ঢাকা-১২০০</p>
                  <div className="inline-block bg-violet-600 text-white px-6 py-1.5 rounded-full font-bold text-sm mt-4 uppercase tracking-widest">
                    অর্ধবার্ষিক পরীক্ষা - ২০২৬
                  </div>
                </div>

                {/* Student Info */}
                <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                  <div className="space-y-2">
                    <div className="flex"><span className="w-32 text-muted-foreground">শিক্ষার্থীর নাম</span> <span className="font-bold border-b border-dotted border-border flex-1 pb-1">{viewMarksheetStudent.name}</span></div>
                    <div className="flex"><span className="w-32 text-muted-foreground">শ্রেণি</span> <span className="font-bold border-b border-dotted border-border flex-1 pb-1">১০ম</span></div>
                    <div className="flex"><span className="w-32 text-muted-foreground">শাখা</span> <span className="font-bold border-b border-dotted border-border flex-1 pb-1">ক</span></div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex"><span className="w-32 text-muted-foreground">রোল নম্বর</span> <span className="font-bold border-b border-dotted border-border flex-1 pb-1">{viewMarksheetStudent.roll}</span></div>
                    <div className="flex"><span className="w-32 text-muted-foreground">শিফট</span> <span className="font-bold border-b border-dotted border-border flex-1 pb-1">প্রভাতি</span></div>
                    <div className="flex"><span className="w-32 text-muted-foreground">সেশন</span> <span className="font-bold border-b border-dotted border-border flex-1 pb-1">২০২৫-২০২৬</span></div>
                  </div>
                </div>

                {/* Marks Table */}
                <table className="w-full text-sm text-center border-collapse border border-border mb-8">
                  <thead className="bg-violet-50 font-bold text-violet-900">
                    <tr>
                      <th className="border border-border py-2 px-4 text-left">বিষয়ের নাম</th>
                      <th className="border border-border py-2 px-4 w-24">পূর্ণমান</th>
                      <th className="border border-border py-2 px-4 w-24">প্রাপ্ত নম্বর</th>
                      <th className="border border-border py-2 px-4 w-24">লেটার গ্রেড</th>
                      <th className="border border-border py-2 px-4 w-24">গ্রেড পয়েন্ট</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "বাংলা", mark: viewMarksheetStudent.bangla },
                      { name: "ইংরেজি", mark: viewMarksheetStudent.english },
                      { name: "গণিত", mark: viewMarksheetStudent.math },
                      { name: "বিজ্ঞান", mark: viewMarksheetStudent.science },
                    ].map((subj, i) => {
                      const gi = getGradeInfo(subj.mark);
                      return (
                        <tr key={i}>
                          <td className="border border-border py-2 px-4 text-left font-medium">{subj.name}</td>
                          <td className="border border-border py-2 px-4">১০০</td>
                          <td className="border border-border py-2 px-4 font-bold">{subj.mark}</td>
                          <td className={`border border-border py-2 px-4 font-bold ${gi.grade === 'F' ? 'text-red-600' : ''}`}>{gi.grade}</td>
                          <td className="border border-border py-2 px-4">{gi.gpa.toFixed(2)}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                  <tfoot className="bg-muted/30 font-bold">
                    <tr>
                      <td colSpan={2} className="border border-border py-3 px-4 text-right">সর্বমোট:</td>
                      <td className="border border-border py-3 px-4 text-violet-700 text-lg">{viewMarksheetStudent.total}</td>
                      <td className={`border border-border py-3 px-4 text-lg ${viewMarksheetStudent.grade === 'F' ? 'text-red-600' : 'text-emerald-600'}`}>{viewMarksheetStudent.grade}</td>
                      <td className="border border-border py-3 px-4 text-lg">{viewMarksheetStudent.gpa}</td>
                    </tr>
                  </tfoot>
                </table>

                {/* Signatures */}
                <div className="flex justify-between items-end mt-16 pt-4 px-4">
                  <div className="text-center border-t border-dashed border-border pt-2 w-40">
                    <span className="text-sm text-muted-foreground font-medium">শ্রেণি শিক্ষক</span>
                  </div>
                  <div className="text-center border-t border-dashed border-border pt-2 w-40">
                    <span className="text-sm text-muted-foreground font-medium">অধ্যক্ষ / প্রধান শিক্ষক</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}