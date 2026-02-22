"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LayoutDashboard,
  BookOpen,
  CalendarCheck,
  CircleDollarSign,
  Shield,
  FileText,
  History,
} from "lucide-react";
import  OverviewTab from "./OverviewTab";
import AcademicTab from "./AcademicTab";
import AttendanceTab from "./AttendanceTab";
import FinancialTab from "./FinancialTab";
import DisciplinaryTab from "./DisciplinaryTabs";
import DocumentsTab from "./DocumentsTab";
import AuditTab from "./AuditTab";

// 1. Define the props to accept the student data
interface StudentTabsWrapperProps {
  student: any;
}

export function StudentTabsWrapper({ student }: StudentTabsWrapperProps) {
  if (!student) return null;

  return (
    <div className="bg-white rounded-lg border border-gray-200 mb-6">
      <Tabs defaultValue="overview" className="w-full">
        {/* TAB HEADERS */}
        <div className="border-b border-gray-200 overflow-x-auto hide-scrollbar">
          <TabsList className="flex h-auto p-0 bg-transparent justify-start rounded-none w-max min-w-full">
            <TabTrigger
              value="overview"
              icon={LayoutDashboard}
              label="Overview"
            />
            <TabTrigger
              value="academic"
              icon={BookOpen}
              label="Academic History"
            />
            <TabTrigger
              value="attendance"
              icon={CalendarCheck}
              label="Attendance"
            />
            <TabTrigger
              value="financial"
              icon={CircleDollarSign}
              label="Financial"
            />
            <TabTrigger
              value="disciplinary"
              icon={Shield}
              label="Disciplinary"
            />
            <TabTrigger value="documents" icon={FileText} label="Documents" />
            <TabTrigger value="audit" icon={History} label="Audit Log" />
          </TabsList>
        </div>

        {/* TAB CONTENTS */}
        {/* 2. Pass the student data down as props to each child tab */}

        <TabsContent
          value="overview"
          className="m-0 border-none p-0 outline-none"
        >
          <OverviewTab student={student} />
        </TabsContent>

        <TabsContent
          value="academic"
          className="m-0 border-none p-0 outline-none"
        >
          <AcademicTab student={student} />
        </TabsContent>

        <TabsContent
          value="attendance"
          className="m-0 border-none p-0 outline-none"
        >
          <AttendanceTab student={student} />
        </TabsContent>

        <TabsContent
          value="financial"
          className="m-0 border-none p-0 outline-none"
        >
          <FinancialTab student={student} />
        </TabsContent>

        <TabsContent
          value="disciplinary"
          className="m-0 border-none p-0 outline-none"
        >
          {/* Dynamically check if there are disciplinary records */}
          <DisciplinaryTab
            student={student}
            hasRecords={student.disciplinary && student.disciplinary.length > 0}
          />
        </TabsContent>

        <TabsContent
          value="documents"
          className="m-0 border-none p-0 outline-none"
        >
          <DocumentsTab student={student} />
        </TabsContent>

        <TabsContent value="audit" className="m-0 border-none p-0 outline-none">
          <AuditTab student={student} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Reusable Helper for the exact styling you requested
function TabTrigger({
  value,
  icon: Icon,
  label,
}: {
  value: string;
  icon: any;
  label: string;
}) {
  return (
    <TabsTrigger
      value={value}
      className="flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 border-x-0 border-t-0 transition-colors cursor-pointer whitespace-nowrap rounded-none border-transparent text-gray-600 hover:text-gray-900 data-[state=active]:border-teal-600 data-[state=active]:text-teal-600 data-[state=active]:shadow-none data-[state=active]:bg-transparent"
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </TabsTrigger>
  );
}
