import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { StudentProfileHeader } from "@/features/student_details_page/StudentProfileHeader";
import { StudentTabsWrapper } from "@/features/student_details_page/StudentTabsWrapper";
import { students } from "@/mock_datas/students";

export default async function StudentDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  
  const resolvedParams = await params;
  const student = students.find((s) => s.id === resolvedParams.id);

  return (
    <main className="pt-16 p-4 lg:p-6">
      <div>
        <div className="mb-6">
          <Link
            href="/students"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 cursor-pointer whitespace-nowrap w-fit"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back to Students</span>
          </Link>

          {/* Profile Header Component */}
          <StudentProfileHeader student={student} />
        </div>

        {/* Client Component for Interactive Tabs */}
        <StudentTabsWrapper student={student} />
      </div>
    </main>
  );
}
