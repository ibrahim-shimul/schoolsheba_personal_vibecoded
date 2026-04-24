import { Sidebar, Topbar } from "@/components/dashboard/Layout";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  BookOpen,
  Plus,
  Edit,
  Trash2,
  Calendar,
  Clock,
  Layers,
  BookMarked,
  X
} from "lucide-react";

export default function AcademicManagement() {
  const [activeTab, setActiveTab] = useState("classes");
  const [isAddClassModalOpen, setIsAddClassModalOpen] = useState(false);
  const [isAddSubjectModalOpen, setIsAddSubjectModalOpen] = useState(false);
  const [isAddRoutineModalOpen, setIsAddRoutineModalOpen] = useState(false);
  
  const [isEditClassModalOpen, setIsEditClassModalOpen] = useState(false);
  const [isEditSubjectModalOpen, setIsEditSubjectModalOpen] = useState(false);
  const [isEditRoutineModalOpen, setIsEditRoutineModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<any>(null);

  const closeAllModals = () => {
    setIsAddClassModalOpen(false);
    setIsAddSubjectModalOpen(false);
    setIsAddRoutineModalOpen(false);
    setIsEditClassModalOpen(false);
    setIsEditSubjectModalOpen(false);
    setIsEditRoutineModalOpen(false);
    setIsDeleteModalOpen(false);
    setCurrentItem(null);
  };

  // Mock data states
  const [classes, setClasses] = useState([
    { id: 1, name: "৬ষ্ঠ শ্রেণি", sections: ["ক", "খ"], subjects: 8, students: 120 },
    { id: 2, name: "৭ম শ্রেণি", sections: ["ক", "খ", "গ"], subjects: 8, students: 180 },
    { id: 3, name: "৮ম শ্রেণি", sections: ["ক", "খ"], subjects: 10, students: 145 },
    { id: 4, name: "৯ম শ্রেণি (বিজ্ঞান)", sections: ["ক"], subjects: 12, students: 60 },
    { id: 5, name: "৯ম শ্রেণি (মানবিক)", sections: ["খ"], subjects: 11, students: 85 },
  ]);

  const [subjects, setSubjects] = useState([
    { id: 1, name: "বাংলা ১ম পত্র", code: "101", class: "১০ম শ্রেণি" },
    { id: 2, name: "বাংলা ২য় পত্র", code: "102", class: "১০ম শ্রেণি" },
    { id: 3, name: "ইংরেজি ১ম পত্র", code: "107", class: "১০ম শ্রেণি" },
    { id: 4, name: "সাধারণ গণিত", code: "109", class: "১০ম শ্রেণি" },
    { id: 5, name: "বিজ্ঞান", code: "127", class: "১০ম শ্রেণি" },
  ]);

  const [routines, setRoutines] = useState([
    { id: 1, time: "09:00 AM - 09:45 AM", subject: "বাংলা ১ম পত্র", teacher: "রহিম উদ্দিন", room: "Room 101" },
    { id: 2, time: "09:45 AM - 10:30 AM", subject: "ইংরেজি ১ম পত্র", teacher: "ফাতেমা বেগম", room: "Room 101" },
    { id: 3, time: "10:30 AM - 11:15 AM", subject: "সাধারণ গণিত", teacher: "আনিসুর রহমান", room: "Room 101" },
    { id: 4, time: "11:15 AM - 11:45 AM", subject: "টিফিন ব্রেক", teacher: "-", room: "-" },
    { id: 5, time: "11:45 AM - 12:30 PM", subject: "বিজ্ঞান", teacher: "জুবায়ের হোসেন", room: "Room 102" },
  ]);

  const [formData, setFormData] = useState<any>({});

  const handleDelete = () => {
    if (!currentItem) return;
    
    if (activeTab === "classes") {
      setClasses(classes.filter(c => c.id !== currentItem.id));
    } else if (activeTab === "subjects") {
      setSubjects(subjects.filter(s => s.id !== currentItem.id));
    } else if (activeTab === "routines") {
      setRoutines(routines.filter(r => r.id !== currentItem.id));
    }
    
    closeAllModals();
  };

  const handleSaveClass = () => {
    if (isEditClassModalOpen) {
      setClasses(classes.map(c => c.id === currentItem.id ? { ...c, ...formData, sections: formData.sections ? formData.sections.split(',').map((s: string) => s.trim()) : c.sections } : c));
    } else {
      const newClass = {
        id: Date.now(),
        name: formData.name || "নতুন ক্লাস",
        sections: formData.sections ? formData.sections.split(',').map((s: string) => s.trim()) : ["ক"],
        subjects: 0,
        students: 0
      };
      setClasses([...classes, newClass]);
    }
    closeAllModals();
  };

  const handleSaveSubject = () => {
    if (isEditSubjectModalOpen) {
      setSubjects(subjects.map(s => s.id === currentItem.id ? { ...s, ...formData } : s));
    } else {
      const newSubject = {
        id: Date.now(),
        name: formData.name || "নতুন বিষয়",
        code: formData.code || "-",
        class: formData.class || "১০ম শ্রেণি"
      };
      setSubjects([...subjects, newSubject]);
    }
    closeAllModals();
  };

  const handleSaveRoutine = () => {
    if (isEditRoutineModalOpen) {
      setRoutines(routines.map(r => r.id === currentItem.id ? { ...r, ...formData } : r));
    } else {
      const newRoutine = {
        id: Date.now(),
        time: `${formData.startTime || "09:00"} - ${formData.endTime || "09:45"}`,
        subject: formData.subject || "বাংলা ১ম পত্র",
        teacher: formData.teacher || "রহিম উদ্দিন",
        room: "Room " + Math.floor(Math.random() * 100 + 100)
      };
      setRoutines([...routines, newRoutine]);
    }
    closeAllModals();
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
            
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-violet-600" />
                  একাডেমিক ম্যানেজমেন্ট
                </h1>
                <p className="text-muted-foreground mt-1">ক্লাস, বিষয় এবং রুটিন পরিচালনা করুন</p>
              </div>
            </div>

            {/* Custom Tabs */}
            <div className="flex border-b border-border mb-6 overflow-x-auto no-scrollbar">
              <button 
                onClick={() => setActiveTab("classes")}
                className={`px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${activeTab === 'classes' ? 'border-violet-600 text-violet-700' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
              >
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4" /> ক্লাস ও শাখা
                </div>
              </button>
              <button 
                onClick={() => setActiveTab("subjects")}
                className={`px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${activeTab === 'subjects' ? 'border-violet-600 text-violet-700' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
              >
                <div className="flex items-center gap-2">
                  <BookMarked className="w-4 h-4" /> বিষয়সমূহ
                </div>
              </button>
              <button 
                onClick={() => setActiveTab("routines")}
                className={`px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${activeTab === 'routines' ? 'border-violet-600 text-violet-700' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> ক্লাস রুটিন
                </div>
              </button>
            </div>

            {/* Tab Content: Classes & Sections */}
            {activeTab === "classes" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">সকল ক্লাস</h3>
                  <Button className="bg-violet-600 hover:bg-violet-700 text-white" onClick={() => setIsAddClassModalOpen(true)}>
                    <Plus className="w-4 h-4 mr-2" /> নতুন ক্লাস যোগ করুন
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {classes.map((cls) => (
                    <div key={cls.id} className="bg-white rounded-2xl border border-border shadow-sm p-5 hover:border-violet-200 transition-colors">
                      <div className="flex justify-between items-start mb-4">
                        <Link href={`/dashboard/premium/academic/class/${cls.id}`}>
                          <a className="text-xl font-bold text-foreground hover:text-violet-600 transition-colors">{cls.name}</a>
                        </Link>
                        <div className="flex gap-1">
                          <button 
                            onClick={() => {
                              setCurrentItem(cls);
                              setIsEditClassModalOpen(true);
                            }}
                            className="p-1.5 text-muted-foreground hover:text-violet-600 hover:bg-violet-50 rounded"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => {
                              setCurrentItem(cls);
                              setIsDeleteModalOpen(true);
                            }}
                            className="p-1.5 text-muted-foreground hover:text-red-600 hover:bg-red-50 rounded"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">শাখা:</span>
                          <span className="font-medium text-foreground flex gap-1">
                            {cls.sections.map(sec => (
                              <span key={sec} className="bg-muted px-2 py-0.5 rounded text-xs">{sec}</span>
                            ))}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">মোট বিষয়:</span>
                          <span className="font-medium">{cls.subjects} টি</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">শিক্ষার্থী সংখ্যা:</span>
                          <span className="font-medium text-blue-600">{cls.students} জন</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab Content: Subjects */}
            {activeTab === "subjects" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">সকল বিষয়</h3>
                  <Button className="bg-violet-600 hover:bg-violet-700 text-white" onClick={() => setIsAddSubjectModalOpen(true)}>
                    <Plus className="w-4 h-4 mr-2" /> নতুন বিষয় যোগ করুন
                  </Button>
                </div>
                
                <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                  <div className="p-4 border-b border-border bg-muted/10 flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <div className="flex gap-3 w-full sm:w-auto">
                      <select className="h-10 px-3 bg-white border border-input rounded-md text-sm shadow-sm outline-none focus:ring-1 focus:ring-violet-500">
                        <option>১০ম শ্রেণি</option>
                        <option>৯ম শ্রেণি</option>
                        <option>৮ম শ্রেণি</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-muted/30 text-muted-foreground">
                        <tr>
                          <th className="px-6 py-4 font-medium">বিষয়ের নাম</th>
                          <th className="px-6 py-4 font-medium">বিষয় কোড</th>
                          <th className="px-6 py-4 font-medium">ক্লাস</th>
                          <th className="px-6 py-4 font-medium text-right">অ্যাকশন</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {subjects.map((sub, index) => (
                          <tr key={index} className="hover:bg-muted/20 transition-colors">
                            <td className="px-6 py-4 font-bold text-foreground">{sub.name}</td>
                            <td className="px-6 py-4 font-mono text-xs">{sub.code}</td>
                            <td className="px-6 py-4">{sub.class}</td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex gap-1 justify-end">
                                <button 
                                  onClick={() => {
                                    setCurrentItem(sub);
                                    setIsEditSubjectModalOpen(true);
                                  }}
                                  className="p-1.5 text-muted-foreground hover:text-violet-600 rounded"
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button 
                                  onClick={() => {
                                    setCurrentItem(sub);
                                    setIsDeleteModalOpen(true);
                                  }}
                                  className="p-1.5 text-muted-foreground hover:text-red-600 rounded"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Tab Content: Class Routines */}
            {activeTab === "routines" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                  <div className="p-4 border-b border-border bg-muted/10 flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <div className="flex gap-3 w-full sm:w-auto">
                      <select className="h-10 px-3 bg-white border border-input rounded-md text-sm shadow-sm outline-none focus:ring-1 focus:ring-violet-500">
                        <option>১০ম শ্রেণি</option>
                        <option>৯ম শ্রেণি</option>
                        <option>৮ম শ্রেণি</option>
                      </select>
                      <select className="h-10 px-3 bg-white border border-input rounded-md text-sm shadow-sm outline-none focus:ring-1 focus:ring-violet-500">
                        <option>ক শাখা</option>
                        <option>খ শাখা</option>
                      </select>
                      <select className="h-10 px-3 bg-white border border-input rounded-md text-sm shadow-sm outline-none focus:ring-1 focus:ring-violet-500">
                        <option>রবিবার</option>
                        <option>সোমবার</option>
                        <option>মঙ্গলবার</option>
                      </select>
                    </div>
                    <Button className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 text-white" onClick={() => setIsAddRoutineModalOpen(true)}>
                      <Plus className="w-4 h-4 mr-2" /> ক্লাস যোগ করুন
                    </Button>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-6 text-center text-foreground border-b pb-4">
                      ১০ম শ্রেণি - ক শাখা (রবিবার)
                    </h3>
                    <div className="space-y-3">
                      {routines.map((routine, i) => (
                        <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border ${routine.subject === 'টিফিন ব্রেক' ? 'bg-orange-50/50 border-orange-100 border-dashed' : 'bg-white border-border hover:shadow-md transition-shadow'}`}>
                          <div className="flex items-center gap-2 text-violet-600 font-mono text-sm w-48 shrink-0">
                            <Clock className="w-4 h-4" /> {routine.time}
                          </div>
                          <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-2">
                            <div>
                              <p className={`font-bold ${routine.subject === 'টিফিন ব্রেক' ? 'text-orange-600' : 'text-foreground'}`}>{routine.subject}</p>
                              {routine.teacher !== '-' && <p className="text-sm text-muted-foreground mt-0.5">{routine.teacher}</p>}
                            </div>
                            {routine.room !== '-' && (
                              <div className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground font-medium w-fit">
                                {routine.room}
                              </div>
                            )}
                          </div>
                          {routine.subject !== 'টিফিন ব্রেক' && (
                            <div className="flex gap-1">
                              <button 
                                onClick={() => {
                                  setCurrentItem(routine);
                                  setIsEditRoutineModalOpen(true);
                                }}
                                className="p-1.5 text-muted-foreground hover:text-amber-600 rounded"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => {
                                  setCurrentItem(routine);
                                  setIsDeleteModalOpen(true);
                                }}
                                className="p-1.5 text-muted-foreground hover:text-red-600 rounded"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </main>
      </div>

      {/* Modals Overlay */}
      {(isAddClassModalOpen || isAddSubjectModalOpen || isAddRoutineModalOpen || isEditClassModalOpen || isEditSubjectModalOpen || isEditRoutineModalOpen || isDeleteModalOpen) && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
          
          {/* Delete Confirmation Modal */}
          {isDeleteModalOpen && (
            <div className="bg-white rounded-2xl max-w-sm w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 p-6 text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-foreground mb-2">আপনি কি নিশ্চিত?</h2>
              <p className="text-muted-foreground mb-6">
                এই তথ্য মুছে ফেললে তা আর ফিরে পাওয়া যাবে না। আপনি কি সত্যিই এটি ডিলিট করতে চান?
              </p>
              <div className="flex gap-3 justify-center">
                <Button variant="outline" className="w-full" onClick={closeAllModals}>বাতিল</Button>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white" onClick={handleDelete}>ডিলিট করুন</Button>
              </div>
            </div>
          )}

          {/* Add/Edit Class Modal */}
          {(isAddClassModalOpen || isEditClassModalOpen) && (
            <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
              <div className="p-6 border-b border-border flex justify-between items-center bg-muted/10">
                <h2 className="text-xl font-bold text-foreground">{isEditClassModalOpen ? "ক্লাস আপডেট করুন" : "নতুন ক্লাস যোগ করুন"}</h2>
                <button onClick={closeAllModals} className="p-2 text-muted-foreground hover:bg-muted rounded-full transition-colors"><X className="w-5 h-5"/></button>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label>ক্লাসের নাম</Label>
                  <Input 
                    defaultValue={isEditClassModalOpen && currentItem ? currentItem.name : ""} 
                    placeholder="যেমন: ৬ষ্ঠ শ্রেণি" 
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label>শাখা (কমা দিয়ে লিখুন)</Label>
                  <Input 
                    defaultValue={isEditClassModalOpen && currentItem ? currentItem.sections?.join(", ") : ""} 
                    placeholder="ক, খ, গ" 
                    onChange={(e) => setFormData({...formData, sections: e.target.value})}
                  />
                </div>
              </div>
              <div className="p-4 border-t border-border bg-muted/10 flex justify-end gap-3">
                <Button variant="outline" onClick={closeAllModals}>বাতিল</Button>
                <Button className="bg-violet-600 hover:bg-violet-700 text-white" onClick={handleSaveClass}>সংরক্ষণ করুন</Button>
              </div>
            </div>
          )}

          {/* Add/Edit Subject Modal */}
          {(isAddSubjectModalOpen || isEditSubjectModalOpen) && (
            <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
              <div className="p-6 border-b border-border flex justify-between items-center bg-muted/10">
                <h2 className="text-xl font-bold text-foreground">{isEditSubjectModalOpen ? "বিষয় আপডেট করুন" : "নতুন বিষয় যোগ করুন"}</h2>
                <button onClick={closeAllModals} className="p-2 text-muted-foreground hover:bg-muted rounded-full transition-colors"><X className="w-5 h-5"/></button>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label>বিষয়ের নাম</Label>
                  <Input 
                    defaultValue={isEditSubjectModalOpen && currentItem ? currentItem.name : ""} 
                    placeholder="যেমন: বাংলা ১ম পত্র" 
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label>বিষয় কোড</Label>
                  <Input 
                    defaultValue={isEditSubjectModalOpen && currentItem ? currentItem.code : ""} 
                    placeholder="যেমন: 101" 
                    onChange={(e) => setFormData({...formData, code: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label>ক্লাস নির্বাচন করুন</Label>
                  <select 
                    className="w-full h-10 px-3 border border-input rounded-md text-sm outline-none focus:border-violet-500 bg-white"
                    onChange={(e) => setFormData({...formData, class: e.target.value})}
                  >
                    <option selected={isEditSubjectModalOpen && currentItem?.class === "১০ম শ্রেণি"}>১০ম শ্রেণি</option>
                    <option selected={isEditSubjectModalOpen && currentItem?.class === "৯ম শ্রেণি"}>৯ম শ্রেণি</option>
                    <option selected={isEditSubjectModalOpen && currentItem?.class === "৮ম শ্রেণি"}>৮ম শ্রেণি</option>
                  </select>
                </div>
              </div>
              <div className="p-4 border-t border-border bg-muted/10 flex justify-end gap-3">
                <Button variant="outline" onClick={closeAllModals}>বাতিল</Button>
                <Button className="bg-violet-600 hover:bg-violet-700 text-white" onClick={handleSaveSubject}>সংরক্ষণ করুন</Button>
              </div>
            </div>
          )}

          {/* Add/Edit Routine Modal */}
          {(isAddRoutineModalOpen || isEditRoutineModalOpen) && (
            <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
              <div className="p-6 border-b border-border flex justify-between items-center bg-muted/10">
                <h2 className="text-xl font-bold text-foreground">{isEditRoutineModalOpen ? "রুটিন আপডেট করুন" : "নতুন রুটিন যোগ করুন"}</h2>
                <button onClick={closeAllModals} className="p-2 text-muted-foreground hover:bg-muted rounded-full transition-colors"><X className="w-5 h-5"/></button>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>ক্লাস</Label>
                    <select className="w-full h-10 px-3 border border-input rounded-md text-sm outline-none focus:border-violet-500 bg-white">
                      <option>১০ম শ্রেণি</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>শাখা</Label>
                    <select className="w-full h-10 px-3 border border-input rounded-md text-sm outline-none focus:border-violet-500 bg-white">
                      <option>ক শাখা</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>বিষয়</Label>
                  <select 
                    className="w-full h-10 px-3 border border-input rounded-md text-sm outline-none focus:border-violet-500 bg-white"
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option selected={isEditRoutineModalOpen && currentItem?.subject === "বাংলা ১ম পত্র"}>বাংলা ১ম পত্র</option>
                    <option selected={isEditRoutineModalOpen && currentItem?.subject === "ইংরেজি ১ম পত্র"}>ইংরেজি ১ম পত্র</option>
                    <option selected={isEditRoutineModalOpen && currentItem?.subject === "সাধারণ গণিত"}>সাধারণ গণিত</option>
                    <option selected={isEditRoutineModalOpen && currentItem?.subject === "বিজ্ঞান"}>বিজ্ঞান</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>শুরুর সময়</Label>
                    <Input 
                      type="time" 
                      defaultValue={isEditRoutineModalOpen && currentItem ? currentItem.time.split(" - ")[0].replace(/ AM| PM/g, "").padStart(5, '0') : "09:00"} 
                      onChange={(e) => setFormData({...formData, startTime: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>শেষের সময়</Label>
                    <Input 
                      type="time" 
                      defaultValue={isEditRoutineModalOpen && currentItem ? currentItem.time.split(" - ")[1].replace(/ AM| PM/g, "").padStart(5, '0') : "09:45"} 
                      onChange={(e) => setFormData({...formData, endTime: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>শিক্ষক</Label>
                  <select 
                    className="w-full h-10 px-3 border border-input rounded-md text-sm outline-none focus:border-violet-500 bg-white"
                    onChange={(e) => setFormData({...formData, teacher: e.target.value})}
                  >
                    <option selected={isEditRoutineModalOpen && currentItem?.teacher === "রহিম উদ্দিন"}>রহিম উদ্দিন</option>
                    <option selected={isEditRoutineModalOpen && currentItem?.teacher === "ফাতেমা বেগম"}>ফাতেমা বেগম</option>
                    <option selected={isEditRoutineModalOpen && currentItem?.teacher === "আনিসুর রহমান"}>আনিসুর রহমান</option>
                    <option selected={isEditRoutineModalOpen && currentItem?.teacher === "জুবায়ের হোসেন"}>জুবায়ের হোসেন</option>
                  </select>
                </div>
              </div>
              <div className="p-4 border-t border-border bg-muted/10 flex justify-end gap-3">
                <Button variant="outline" onClick={closeAllModals}>বাতিল</Button>
                <Button className="bg-violet-600 hover:bg-violet-700 text-white" onClick={handleSaveRoutine}>সংরক্ষণ করুন</Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}