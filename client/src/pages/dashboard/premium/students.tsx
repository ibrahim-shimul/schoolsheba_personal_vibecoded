import { Sidebar, Topbar } from "@/components/dashboard/Layout";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Users, 
  Search,
  Plus,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  GraduationCap,
  X,
  MapPin,
  Phone,
  Calendar,
  User
} from "lucide-react";

export default function StudentsDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("all");

  // Modal states
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState<any>(null);

  // Mock data for students
  const students = [
    { id: "ST-2026-001", name: "রাকিব হাসান", class: "১০ম", section: "ক", roll: "১", phone: "01711000001", status: "Active", avatar: "https://i.pravatar.cc/150?u=1", fathersName: "আব্দুল করিম", mothersName: "রহিমা বেগম", dob: "15 Jan 2010", address: "মিরপুর-১০, ঢাকা" },
    { id: "ST-2026-002", name: "ফাতেমা আক্তার", class: "১০ম", section: "খ", roll: "২", phone: "01711000002", status: "Active", avatar: "https://i.pravatar.cc/150?u=2", fathersName: "শফিকুল ইসলাম", mothersName: "ফরিদা ইয়াসমিন", dob: "22 Mar 2010", address: "ধানমন্ডি, ঢাকা" },
    { id: "ST-2026-003", name: "মেহেদী হাসান", class: "৯ম", section: "ক", roll: "১৫", phone: "01711000003", status: "Active", avatar: "https://i.pravatar.cc/150?u=3", fathersName: "কবির হোসেন", mothersName: "সালমা খাতুন", dob: "10 Nov 2011", address: "উত্তরা, ঢাকা" },
    { id: "ST-2026-004", name: "সুমাইয়া ইসলাম", class: "৯ম", section: "খ", roll: "৭", phone: "01711000004", status: "Active", avatar: "https://i.pravatar.cc/150?u=4", fathersName: "নুরুল আমিন", mothersName: "তাসলিমা আক্তার", dob: "05 Feb 2011", address: "গুলশান, ঢাকা" },
    { id: "ST-2026-005", name: "আহমেদ জুবায়ের", class: "৮ম", section: "ক", roll: "১২", phone: "01711000005", status: "Inactive", avatar: "https://i.pravatar.cc/150?u=5", fathersName: "জিয়াউর রহমান", mothersName: "রোকসানা পারভীন", dob: "30 Aug 2012", address: "বনানী, ঢাকা" },
    { id: "ST-2026-006", name: "তাসনিম রহমান", class: "১০ম", section: "ক", roll: "৩", phone: "01711000006", status: "Active", avatar: "https://i.pravatar.cc/150?u=6", fathersName: "আতাউর রহমান", mothersName: "শিরিন সুলতানা", dob: "12 Dec 2010", address: "মোহাম্মদপুর, ঢাকা" },
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.includes(searchTerm) || student.id.includes(searchTerm);
    const matchesClass = selectedClass === "all" || student.class === selectedClass;
    return matchesSearch && matchesClass;
  });

  const handleAction = (action: string, student: any = null) => {
    setCurrentStudent(student);
    if (action === 'view') setIsViewModalOpen(true);
    if (action === 'edit') setIsEditModalOpen(true);
    if (action === 'delete') setIsDeleteModalOpen(true);
  };

  const closeModals = () => {
    setIsViewModalOpen(false);
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
    setCurrentStudent(null);
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
                  <Users className="w-6 h-6 text-violet-600" />
                  শিক্ষার্থী ম্যানেজমেন্ট
                </h1>
                <p className="text-muted-foreground mt-1">আপনার প্রতিষ্ঠানের সকল শিক্ষার্থীর তথ্য পরিচালনা করুন</p>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <Button variant="outline" className="flex-1 sm:flex-none border-violet-200 text-violet-700 hover:bg-violet-50">
                  <Download className="w-4 h-4 mr-2" />
                  এক্সপোর্ট
                </Button>
                <Button asChild className="flex-1 sm:flex-none bg-violet-600 hover:bg-violet-700 text-white shadow-sm cursor-pointer">
                  <Link href="/dashboard/premium/students/add">
                    <Plus className="w-4 h-4 mr-2" />
                    নতুন শিক্ষার্থী
                  </Link>
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-border shadow-sm flex items-center gap-4 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-24 h-24 bg-blue-50 rounded-full -mr-12 -mt-12 blur-2xl"></div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-100 text-blue-600 relative z-10">
                  <Users className="w-6 h-6" />
                </div>
                <div className="relative z-10">
                  <p className="text-sm text-muted-foreground font-medium mb-1">মোট শিক্ষার্থী</p>
                  <h3 className="text-2xl font-bold text-foreground">১,২৪৩</h3>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-border shadow-sm flex items-center gap-4 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-24 h-24 bg-emerald-50 rounded-full -mr-12 -mt-12 blur-2xl"></div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-100 text-emerald-600 relative z-10">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="relative z-10">
                  <p className="text-sm text-muted-foreground font-medium mb-1">নতুন ভর্তি (এই মাসে)</p>
                  <h3 className="text-2xl font-bold text-foreground">৪৫</h3>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-border shadow-sm flex items-center gap-4 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-24 h-24 bg-amber-50 rounded-full -mr-12 -mt-12 blur-2xl"></div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-amber-100 text-amber-600 relative z-10">
                  <Users className="w-6 h-6" />
                </div>
                <div className="relative z-10">
                  <p className="text-sm text-muted-foreground font-medium mb-1">ছাত্র / ছাত্রী অনুপাত</p>
                  <h3 className="text-xl font-bold text-foreground mt-1">৫২% / ৪৮%</h3>
                </div>
              </div>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
              {/* Filters Bar */}
              <div className="p-4 border-b border-border flex flex-col md:flex-row gap-4 items-center justify-between bg-muted/10">
                <div className="relative w-full md:max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    placeholder="নাম বা আইডি দিয়ে খুঁজুন..." 
                    className="pl-9 h-10 bg-white"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                  <select 
                    className="h-10 px-3 py-2 bg-white border border-input rounded-md text-sm shadow-sm flex-1 md:w-40 outline-none focus:ring-1 focus:ring-violet-500"
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                  >
                    <option value="all">সকল ক্লাস</option>
                    <option value="৬ষ্ঠ">৬ষ্ঠ শ্রেণি</option>
                    <option value="৭ম">৭ম শ্রেণি</option>
                    <option value="৮ম">৮ম শ্রেণি</option>
                    <option value="৯ম">৯ম শ্রেণি</option>
                    <option value="১০ম">১০ম শ্রেণি</option>
                  </select>
                  <Button variant="outline" className="h-10 px-3 bg-white">
                    <Filter className="w-4 h-4 mr-2" />
                    ফিল্টার
                  </Button>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-muted/30 text-muted-foreground">
                    <tr>
                      <th className="px-6 py-4 font-medium">শিক্ষার্থী</th>
                      <th className="px-6 py-4 font-medium">স্টুডেন্ট আইডি</th>
                      <th className="px-6 py-4 font-medium">ক্লাস ও শাখা</th>
                      <th className="px-6 py-4 font-medium">রোল নং</th>
                      <th className="px-6 py-4 font-medium">অভিভাবকের ফোন</th>
                      <th className="px-6 py-4 font-medium">স্ট্যাটাস</th>
                      <th className="px-6 py-4 font-medium text-right">অ্যাকশন</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {filteredStudents.map((student, index) => (
                      <tr key={index} className="hover:bg-muted/20 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img src={student.avatar} alt={student.name} className="w-10 h-10 rounded-full border border-border object-cover" />
                            <div>
                              <p className="font-semibold text-foreground">{student.name}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-mono text-xs">{student.id}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2 py-1 rounded-md bg-muted text-xs font-medium">
                            {student.class} - {student.section}
                          </span>
                        </td>
                        <td className="px-6 py-4">{student.roll}</td>
                        <td className="px-6 py-4 text-muted-foreground">{student.phone}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            student.status === "Active" ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                          }`}>
                            {student.status === "Active" ? "সক্রিয়" : "নিষ্ক্রিয়"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <button onClick={() => handleAction('view', student)} className="p-1.5 text-muted-foreground hover:text-blue-600 hover:bg-blue-50 rounded transition-colors">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button onClick={() => handleAction('edit', student)} className="p-1.5 text-muted-foreground hover:text-amber-600 hover:bg-amber-50 rounded transition-colors">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button onClick={() => handleAction('delete', student)} className="p-1.5 text-muted-foreground hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="p-4 border-t border-border flex items-center justify-between text-sm">
                <p className="text-muted-foreground">মোট {filteredStudents.length} জনের মধ্যে ১-{filteredStudents.length} দেখানো হচ্ছে</p>
                <div className="flex gap-1">
                  <Button variant="outline" size="sm" disabled>পূর্ববর্তী</Button>
                  <Button variant="outline" size="sm" className="bg-violet-50 text-violet-700 border-violet-200">১</Button>
                  <Button variant="outline" size="sm">২</Button>
                  <Button variant="outline" size="sm">৩</Button>
                  <Button variant="outline" size="sm">পরবর্তী</Button>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>

      {/* Modals Overlay */}
      {(isViewModalOpen || isEditModalOpen || isDeleteModalOpen) && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
          
          {/* View Modal */}
          {isViewModalOpen && currentStudent && (
            <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
              <div className="p-6 border-b border-border flex justify-between items-start bg-violet-50/50">
                <div className="flex gap-4 items-center">
                  <img src={currentStudent.avatar} alt={currentStudent.name} className="w-20 h-20 rounded-full border-4 border-white shadow-sm object-cover" />
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{currentStudent.name}</h2>
                    <p className="text-muted-foreground font-mono text-sm mt-1">{currentStudent.id}</p>
                    <span className={`inline-flex mt-2 items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      currentStudent.status === "Active" ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                    }`}>
                      {currentStudent.status === "Active" ? "সক্রিয়" : "নিষ্ক্রিয়"}
                    </span>
                  </div>
                </div>
                <button onClick={closeModals} className="p-2 text-muted-foreground hover:bg-muted rounded-full transition-colors"><X className="w-5 h-5"/></button>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider border-b pb-2">একাডেমিক তথ্য</h4>
                    <div className="space-y-3">
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">ক্লাস ও শাখা</span>
                        <span className="font-medium">{currentStudent.class} - {currentStudent.section} শাখা</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">রোল নং</span>
                        <span className="font-medium">{currentStudent.roll}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider border-b pb-2">ব্যক্তিগত তথ্য</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <User className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                        <div className="flex flex-col">
                          <span className="text-xs text-muted-foreground">পিতার নাম</span>
                          <span className="text-sm font-medium">{currentStudent.fathersName}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <User className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                        <div className="flex flex-col">
                          <span className="text-xs text-muted-foreground">মাতার নাম</span>
                          <span className="text-sm font-medium">{currentStudent.mothersName}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Calendar className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                        <div className="flex flex-col">
                          <span className="text-xs text-muted-foreground">জন্ম তারিখ</span>
                          <span className="text-sm font-medium">{currentStudent.dob}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                        <div className="flex flex-col">
                          <span className="text-xs text-muted-foreground">যোগাযোগ (অভিভাবক)</span>
                          <span className="text-sm font-medium">{currentStudent.phone}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                        <div className="flex flex-col">
                          <span className="text-xs text-muted-foreground">ঠিকানা</span>
                          <span className="text-sm font-medium">{currentStudent.address}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-border bg-muted/10 flex justify-end gap-3">
                <Button variant="outline" onClick={() => { setIsViewModalOpen(false); setIsEditModalOpen(true); }}>এডিট করুন</Button>
                <Button className="bg-violet-600 hover:bg-violet-700 text-white" onClick={closeModals}>বন্ধ করুন</Button>
              </div>
            </div>
          )}

          {/* Edit Modal */}
          {isEditModalOpen && currentStudent && (
            <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
              <div className="p-6 border-b border-border flex justify-between items-center bg-muted/10">
                <h2 className="text-xl font-bold text-foreground">
                  শিক্ষার্থীর তথ্য আপডেট করুন
                </h2>
                <button onClick={closeModals} className="p-2 text-muted-foreground hover:bg-muted rounded-full transition-colors"><X className="w-5 h-5"/></button>
              </div>
              <div className="p-6 overflow-y-auto space-y-6">
                
                {/* Photo Upload Placeholder */}
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full border-2 border-dashed border-border bg-muted/30 flex items-center justify-center flex-col shrink-0 overflow-hidden">
                    <img src={currentStudent.avatar} alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <Label>শিক্ষার্থীর নাম <span className="text-red-500">*</span></Label>
                    <Input defaultValue={currentStudent?.name} placeholder="শিক্ষার্থীর পূর্ণ নাম" className="mt-1.5" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Academic Info */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">একাডেমিক তথ্য</h4>
                    
                    <div className="space-y-2">
                      <Label>স্টুডেন্ট আইডি <span className="text-red-500">*</span></Label>
                      <Input defaultValue={currentStudent?.id} disabled className="bg-muted/50" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label>ক্লাস <span className="text-red-500">*</span></Label>
                        <select className="w-full h-10 px-3 border border-input rounded-md text-sm outline-none focus:border-violet-500 bg-white" defaultValue={currentStudent?.class}>
                          <option value="৬ষ্ঠ">৬ষ্ঠ</option>
                          <option value="৭ম">৭ম</option>
                          <option value="৮ম">৮ম</option>
                          <option value="৯ম">৯ম</option>
                          <option value="১০ম">১০ম</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label>শাখা</Label>
                        <select className="w-full h-10 px-3 border border-input rounded-md text-sm outline-none focus:border-violet-500 bg-white" defaultValue={currentStudent?.section}>
                          <option value="ক">ক</option>
                          <option value="খ">খ</option>
                          <option value="গ">গ</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>রোল নম্বর</Label>
                      <Input defaultValue={currentStudent?.roll} type="number" />
                    </div>

                    <div className="space-y-2">
                      <Label>স্ট্যাটাস</Label>
                      <select className="w-full h-10 px-3 border border-input rounded-md text-sm outline-none focus:border-violet-500 bg-white" defaultValue={currentStudent?.status}>
                        <option value="Active">সক্রিয়</option>
                        <option value="Inactive">নিষ্ক্রিয়</option>
                      </select>
                    </div>
                  </div>

                  {/* Personal Info */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">ব্যক্তিগত ও অভিভাবকের তথ্য</h4>
                    
                    <div className="space-y-2">
                      <Label>পিতার নাম</Label>
                      <Input defaultValue={currentStudent?.fathersName} />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>মাতার নাম</Label>
                      <Input defaultValue={currentStudent?.mothersName} />
                    </div>

                    <div className="space-y-2">
                      <Label>অভিভাবকের মোবাইল <span className="text-red-500">*</span></Label>
                      <Input defaultValue={currentStudent?.phone} placeholder="01XXXXXXXXX" />
                    </div>

                    <div className="space-y-2">
                      <Label>বর্তমান ঠিকানা</Label>
                      <Input defaultValue={currentStudent?.address} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-border bg-muted/10 flex justify-end gap-3 shrink-0">
                <Button variant="outline" onClick={closeModals}>বাতিল</Button>
                <Button className="bg-violet-600 hover:bg-violet-700 text-white" onClick={closeModals}>
                  আপডেট করুন
                </Button>
              </div>
            </div>
          )}

          {/* Delete Confirmation Modal */}
          {isDeleteModalOpen && currentStudent && (
            <div className="bg-white rounded-2xl max-w-sm w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trash2 className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-2">শিক্ষার্থী মুছে ফেলবেন?</h2>
                <p className="text-muted-foreground text-sm">
                  আপনি কি নিশ্চিত যে আপনি <strong>{currentStudent.name}</strong> (আইডি: {currentStudent.id}) এর সমস্ত তথ্য মুছে ফেলতে চান? এই অ্যাকশনটি ফেরানো যাবে না।
                </p>
              </div>
              <div className="p-4 border-t border-border bg-muted/10 flex justify-end gap-3">
                <Button variant="outline" className="flex-1" onClick={closeModals}>বাতিল</Button>
                <Button variant="destructive" className="flex-1 bg-red-600 hover:bg-red-700 text-white" onClick={closeModals}>মুছে ফেলুন</Button>
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}