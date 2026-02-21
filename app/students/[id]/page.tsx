// "use client";

// import Link from "next/link";
// import { 
//   ArrowLeft, Mail, MessageCircle, CreditCard, AlertTriangle 
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// // Import Tab Content Components
// import { OverviewTab } from "@/components/students/tabs/overview-tab";
// import { AcademicTab } from "@/components/students/tabs/academic-tab";
// import { AttendanceTab } from "@/components/students/tabs/attendance-tab";
// import { FinancialTab } from "@/components/students/tabs/financial-tab";
// import { DisciplinaryTab } from "@/components/students/tabs/disciplinary-tab";
// import { DocumentsTab } from "@/components/students/tabs/documents-tab";
// import { AuditTab } from "@/components/students/tabs/audit-tab";

// export default function StudentDetailsPage() {
//   return (
//     <main className="pt-20 p-4 lg:p-6 space-y-6">
      
//       {/* BACK BUTTON */}
//       <Link href="/students" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
//         <ArrowLeft className="w-4 h-4" />
//         <span className="text-sm font-medium">Back to Students</span>
//       </Link>

//       {/* PROFILE HEADER CARD */}
//       <Card>
//         <CardContent className="p-6">
//           <div className="flex flex-col lg:flex-row gap-6">
            
//             {/* Left: Avatar & Basic Info */}
//             <div className="flex items-start gap-4 flex-1">
//               <Avatar className="w-24 h-24 rounded-lg">
//                 <AvatarImage src="/student-james.jpg" className="object-cover" />
//                 <AvatarFallback className="rounded-lg text-2xl">JT</AvatarFallback>
//               </Avatar>
              
//               <div>
//                 <div className="flex items-center gap-3 mb-2">
//                   <h1 className="text-2xl font-bold text-gray-900">James Thompson</h1>
//                   <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-none">Active</Badge>
//                 </div>
//                 <div className="space-y-1 text-sm text-gray-600">
//                   <p>Admission No: <span className="font-medium text-gray-900">SMS/2026/002</span></p>
//                   <p>Class: <span className="font-medium text-gray-900">SSS 1 - Blue Arm</span></p>
//                   <p>Gender: <span className="font-medium text-gray-900">Male</span></p>
//                 </div>
//               </div>
//             </div>

//             {/* Middle: Medical Alert */}
//             <div className="flex-1 bg-red-50 border border-red-200 rounded-lg p-4">
//               <div className="flex items-start gap-3">
//                 <AlertTriangle className="text-red-600 w-5 h-5 mt-0.5" />
//                 <div>
//                   <h4 className="text-sm font-semibold text-red-900 mb-2">Medical Alerts</h4>
//                   <div className="space-y-1 text-xs text-red-800">
//                     <p>Blood Group: <span className="font-medium">A+</span></p>
//                     <p>Genotype: <span className="font-medium">AS</span></p>
//                     <p>Allergies: <span className="font-medium">Peanuts</span></p>
//                     <p>Conditions: <span className="font-medium">Asthma</span></p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right: Actions */}
//             <div className="flex flex-col gap-2 min-w-[160px]">
//               <Button className="bg-teal-600 hover:bg-teal-700 w-full justify-start gap-2">
//                 <Mail className="w-4 h-4" /> Email Parent
//               </Button>
//               <Button className="bg-green-600 hover:bg-green-700 w-full justify-start gap-2">
//                 <MessageCircle className="w-4 h-4" /> WhatsApp
//               </Button>
//               <Button className="bg-blue-600 hover:bg-blue-700 w-full justify-start gap-2">
//                 <CreditCard className="w-4 h-4" /> Generate ID
//               </Button>
//             </div>

//           </div>
//         </CardContent>
//       </Card>

//       {/* TABS NAVIGATION */}
//       <Tabs defaultValue="overview" className="space-y-6">
//         <Card>
//           <div className="border-b border-gray-200 overflow-x-auto">
//             <TabsList className="h-auto p-0 bg-transparent gap-0 w-full justify-start rounded-none">
//               <StudentTabTrigger value="overview" label="Overview" icon="ri-dashboard-line" />
//               <StudentTabTrigger value="academic" label="Academic History" icon="ri-book-line" />
//               <StudentTabTrigger value="attendance" label="Attendance" icon="ri-calendar-check-line" />
//               <StudentTabTrigger value="financial" label="Financial" icon="ri-money-dollar-circle-line" />
//               <StudentTabTrigger value="disciplinary" label="Disciplinary" icon="ri-shield-line" />
//               <StudentTabTrigger value="documents" label="Documents" icon="ri-file-list-line" />
//               <StudentTabTrigger value="audit" label="Audit Log" icon="ri-history-line" />
//             </TabsList>
//           </div>
//         </Card>

//         {/* TAB CONTENTS */}
//         <TabsContent value="overview"> <OverviewTab /> </TabsContent>
//         <TabsContent value="academic"> <AcademicTab /> </TabsContent>
//         <TabsContent value="attendance"> <AttendanceTab /> </TabsContent>
//         <TabsContent value="financial"> <FinancialTab /> </TabsContent>
//         <TabsContent value="disciplinary"> <DisciplinaryTab /> </TabsContent>
//         <TabsContent value="documents"> <DocumentsTab /> </TabsContent>
//         <TabsContent value="audit"> <AuditTab /> </TabsContent>
//       </Tabs>

//     </main>
//   );
// }

// // Helper for Tab Triggers to keep code clean
// function StudentTabTrigger({ value, label, icon }: any) {
//   return (
//     <TabsTrigger 
//       value={value}
//       className="data-[state=active]:border-b-2 data-[state=active]:border-teal-600 data-[state=active]:text-teal-600 data-[state=active]:shadow-none rounded-none px-6 py-4 h-auto bg-transparent border-b-2 border-transparent text-gray-600 hover:text-gray-900"
//     >
//       <i className={`${icon} text-lg mr-2`}></i> {/* Using Remix Icon class passed as string */}
//       {label}
//     </TabsTrigger>
//   );
// }

export default function StudentDetailsPage() {
  return null;
}