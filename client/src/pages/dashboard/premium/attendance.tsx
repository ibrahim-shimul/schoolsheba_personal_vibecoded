import { Sidebar, Topbar } from "@/components/dashboard/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  CalendarCheck,
  Search,
  CheckCircle2,
  XCircle,
  Clock,
  Save,
  Download,
  Users,
  ChevronRight,
  ArrowLeft
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function AttendanceSystem() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [view, setView] = useState<"classes" | "take_attendance">("classes");
  const [selectedClass, setSelectedClass] = useState<any>(null);
  
  // Mock classes data
  const classesList = [
    { id: 1, name: "৬ষ্ঠ শ্রেণি", section: "ক", total: 40, present: 35, absent: 5, status: "completed" },
    { id: 2, name: "৬ষ্ঠ শ্রেণি", section: "খ", total: 42, present: 0, absent: 0, status: "pending" },
    { id: 3, name: "৭ম শ্রেণি", section: "ক", total: 45, present: 42, absent: 3, status: "completed" },
    { id: 4, name: "৮ম শ্রেণি", section: "ক", total: 38, present: 0, absent: 0, status: "pending" },
    { id: 5, name: "৯ম শ্রেণি", section: "বিজ্ঞান", total: 30, present: 28, absent: 2, status: "completed" },
    { id: 6, name: "১০ম শ্রেণি", section: "মানবিক", total: 40, present: 32, absent: 8, status: "completed" },
  ];

  // Mock student data
  const students = [
    { id: 1, roll: "১", name: "রাকিব হাসান", status: "present" },
    { id: 2, roll: "২", name: "ফাতেমা আক্তার", status: "present" },
    { id: 3, roll: "৩", name: "মেহেদী হাসান", status: "absent" },
    { id: 4, roll: "৪", name: "সুমাইয়া ইসলাম", status: "present" },
    { id: 5, roll: "৫", name: "আহমেদ জুবায়ের", status: "late" },
    { id: 6, roll: "৬", name: "তাসনিম রহমান", status: "none" },
    { id: 7, roll: "৭", name: "সাকিব আল হাসান", status: "none" },
  ];

  const handleTakeAttendance = (cls: any) => {
    setSelectedClass(cls);
    setView("take_attendance");
  };

  return (
    <div className="flex h-screen bg-muted/30 overflow-hidden">
      <div className="hidden md:block w-64 flex-shrink-0">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Topbar />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-5xl mx-auto space-y-6">
            
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <CalendarCheck className="w-6 h-6 text-violet-600" />
                  দৈনন্দিন উপস্থিতি
                </h1>
                <p className="text-muted-foreground mt-1">শিক্ষার্থীদের হাজিরা গ্রহণ এবং রিপোর্ট দেখুন</p>
              </div>
              <Button variant="outline" className="border-violet-200 text-violet-700">
                <Download className="w-4 h-4 mr-2" /> মাসিক রিপোর্ট
              </Button>
            </div>

            {view === "classes" ? (
              <>
                {/* Date Selection */}
                <div className="bg-white rounded-2xl border border-border shadow-sm p-4 flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <label className="text-sm font-semibold text-muted-foreground whitespace-nowrap">তারিখ নির্বাচন:</label>
                    <Input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="h-10 w-full sm:w-48" />
                  </div>
                  <div className="flex gap-4 text-sm w-full sm:w-auto justify-between sm:justify-end">
                    <div className="flex flex-col items-center px-4 py-2 bg-emerald-50 rounded-lg">
                      <span className="text-xs text-emerald-600 font-bold">মোট উপস্থিত</span>
                      <span className="text-xl font-bold text-emerald-700">১৩৭</span>
                    </div>
                    <div className="flex flex-col items-center px-4 py-2 bg-red-50 rounded-lg">
                      <span className="text-xs text-red-600 font-bold">মোট অনুপস্থিত</span>
                      <span className="text-xl font-bold text-red-700">১৮</span>
                    </div>
                  </div>
                </div>

                {/* Classes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {classesList.map((cls) => (
                    <div key={cls.id} className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden hover:border-violet-200 transition-colors">
                      <div className="p-5 border-b border-border flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold text-foreground">{cls.name}</h3>
                          <span className="text-sm text-muted-foreground">শাখা: <span className="font-semibold text-violet-600">{cls.section}</span></span>
                        </div>
                        {cls.status === "completed" ? (
                          <span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> সম্পন্ন
                          </span>
                        ) : (
                          <span className="bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                            <Clock className="w-3 h-3" /> বাকি আছে
                          </span>
                        )}
                      </div>
                      
                      <div className="p-5 flex justify-between items-center bg-muted/5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <Users className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">মোট শিক্ষার্থী</p>
                            <p className="text-lg font-bold text-foreground">{cls.total}</p>
                          </div>
                        </div>
                        
                        {cls.status === "completed" ? (
                          <div className="text-right">
                            <p className="text-sm"><span className="text-emerald-600 font-bold">{cls.present}</span> উপস্থিত</p>
                            <p className="text-sm"><span className="text-red-600 font-bold">{cls.absent}</span> অনুপস্থিত</p>
                          </div>
                        ) : (
                          <div className="text-right text-sm text-muted-foreground italic">
                            হাজিরা নেওয়া হয়নি
                          </div>
                        )}
                      </div>
                      
                      <div className="p-4 border-t border-border">
                        <Button 
                          className={`w-full justify-between ${cls.status === 'completed' ? 'bg-white border border-border text-foreground hover:bg-muted' : 'bg-violet-600 text-white hover:bg-violet-700'}`}
                          variant={cls.status === 'completed' ? 'outline' : 'default'}
                          onClick={() => handleTakeAttendance(cls)}
                        >
                          {cls.status === 'completed' ? 'হাজিরা দেখুন/এডিট করুন' : 'হাজিরা নিন'}
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <button 
                  onClick={() => setView("classes")}
                  className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-violet-600 transition-colors mb-2 w-fit"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  ক্লাস তালিকায় ফিরে যান
                </button>

                {/* Attendance Sheet */}
                <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <div className="p-5 border-b border-border flex flex-col md:flex-row gap-4 justify-between items-start md:items-center bg-violet-50">
                    <div>
                      <h3 className="text-xl font-bold text-violet-900">{selectedClass?.name} - {selectedClass?.section} শাখা</h3>
                      <p className="text-sm text-violet-600/80 font-medium mt-1">তারিখ: {new Date(selectedDate).toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })} • মোট শিক্ষার্থী: {selectedClass?.total} জন</p>
                    </div>
                    <div className="flex gap-3 text-sm font-medium bg-white px-4 py-2 rounded-xl shadow-sm border border-violet-100">
                      <span className="flex items-center gap-1.5 text-emerald-600"><CheckCircle2 className="w-4 h-4"/> উপস্থিত: ৩২</span>
                      <span className="flex items-center gap-1.5 text-red-600"><XCircle className="w-4 h-4"/> অনুপস্থিত: ২</span>
                      <span className="flex items-center gap-1.5 text-amber-600"><Clock className="w-4 h-4"/> বিলম্ব: ১</span>
                    </div>
                  </div>

                  <div className="p-4 border-b border-border flex justify-between items-center bg-muted/10">
                    <div className="relative w-full max-w-xs">
                      <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                      <Input placeholder="শিক্ষার্থীর নাম বা রোল খুঁজুন..." className="pl-9 h-10 bg-white" />
                    </div>
                    <Button variant="outline" className="text-emerald-600 border-emerald-200 hover:bg-emerald-50">
                      সবাইকে উপস্থিত মার্ক করুন
                    </Button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-muted/30 text-muted-foreground border-b border-border">
                        <tr>
                          <th className="px-6 py-3 font-medium w-16 text-center">রোল</th>
                          <th className="px-6 py-3 font-medium">শিক্ষার্থীর নাম</th>
                          <th className="px-6 py-3 font-medium text-center">উপস্থিতি মার্ক করুন</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {students.map((student) => (
                          <tr key={student.id} className="hover:bg-muted/20 transition-colors">
                            <td className="px-6 py-4 text-center font-semibold text-foreground">{student.roll}</td>
                            <td className="px-6 py-4 font-medium">{student.name}</td>
                            <td className="px-6 py-4 text-center">
                              <div className="inline-flex rounded-lg border border-border p-1 bg-muted/30">
                                <button className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${student.status === 'present' ? 'bg-emerald-500 text-white shadow-sm' : 'text-muted-foreground hover:bg-muted'}`}>
                                  উপস্থিত
                                </button>
                                <button className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${student.status === 'absent' ? 'bg-red-500 text-white shadow-sm' : 'text-muted-foreground hover:bg-muted'}`}>
                                  অনুপস্থিত
                                </button>
                                <button className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${student.status === 'late' ? 'bg-amber-500 text-white shadow-sm' : 'text-muted-foreground hover:bg-muted'}`}>
                                  বিলম্ব
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 border-t border-border bg-muted/10 flex justify-end gap-3">
                    <Button variant="outline" onClick={() => setView("classes")}>বাতিল</Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" onClick={() => setView("classes")}>
                      <Save className="w-4 h-4 mr-2" /> হাজিরা সেভ করুন
                    </Button>
                  </div>
                </div>
              </>
            )}

          </div>
        </main>
      </div>
    </div>
  );
}