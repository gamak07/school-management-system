
import Breadcrum from "@/features/student_page/Breadcrum";
import Stats from "@/features/student_page/Stats";
import StudentContainer from "@/features/student_page/StudentContainer";

export default function StudentPage() {
  return (
    <main className="pt-20 p-4 lg:p-6 space-y-6">
      {/* HEADER */}
      <Breadcrum />

      {/* STATS GRID */}
      <Stats />

      <StudentContainer />
    </main>
  );
}

