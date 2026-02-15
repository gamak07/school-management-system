import {
  User,
  ShieldCheck,
  BookOpen,
  CalendarCheck,
  UserPlus,
  Calendar,
  BarChart3,
} from "lucide-react";
import  StatsCard  from "@/features/dashboard_page/StatsCard";
import  RecentActivities  from "@/features/dashboard_page/RecentActivities";
import  ClassPerformance  from "@/features/dashboard_page/ClassPerformance";
import  QuickActions  from "@/features/dashboard_page/QuickActions";
import  UpcomingEvents  from "@/features/dashboard_page/UpcomingEvents";
import  MiniStatCard  from "@/features/dashboard_page/MiniStatCard";

export default function DashboardPage() {
  return (
    <main className="pt-20 p-4 lg:p-6 space-y-6">
      
      {/* 1. TOP STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard 
          title="Total Students" 
          value="1,247" 
          trend="+8.2%" 
          trendLabel="vs last month" 
          icon={User} 
          iconColor="text-emerald-600" 
          bgColor="bg-emerald-50" 
        />
        <StatsCard 
          title="Total Teachers" 
          value="89" 
          trend="+3.1%" 
          trendLabel="vs last month" 
          icon={ShieldCheck} 
          iconColor="text-blue-600" 
          bgColor="bg-blue-50" 
        />
        <StatsCard 
          title="Active Classes" 
          value="42" 
          icon={BookOpen} 
          iconColor="text-violet-600" 
          bgColor="bg-violet-50" 
        />
        <StatsCard 
          title="Attendance Rate" 
          value="94.5%" 
          trend="+2.4%" 
          trendLabel="vs last month" 
          icon={CalendarCheck} 
          iconColor="text-teal-600" 
          bgColor="bg-teal-50" 
        />
      </div>

      {/* 2. MAIN CONTENT GRID (2/3 Split) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN (2/3 width) */}
        <div className="lg:col-span-2 space-y-6">
          <RecentActivities />
          <ClassPerformance />
        </div>

        {/* RIGHT COLUMN (1/3 width) */}
        <div className="space-y-6">
          <QuickActions />
          <UpcomingEvents />
        </div>
      </div>

      {/* 3. BOTTOM STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MiniStatCard 
          title="Pending Admissions" 
          value="23" 
          sub="Awaiting review" 
          icon={UserPlus} 
          iconColor="text-orange-500" 
        />
        <MiniStatCard 
          title="Upcoming Events" 
          value="8" 
          sub="This month" 
          icon={Calendar} 
          iconColor="text-purple-500" 
        />
        <MiniStatCard 
          title="Average Grade" 
          value="82.3%" 
          sub="School-wide" 
          icon={BarChart3} 
          iconColor="text-green-500" 
        />
      </div>

    </main>
  );
}