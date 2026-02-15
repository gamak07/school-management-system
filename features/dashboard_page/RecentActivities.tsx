import { UserPlus, FileSignature, ShieldCheck, Calendar, CircleDollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ActivityItemProps {
  icon: LucideIcon;
  color: string;
  bgColor: string;
  title: string;
  time: string;
  desc: string;
  sub: string;
  hasLine?: boolean;
}

function ActivityItem({ icon: Icon, color, bgColor, title, time, desc, sub, hasLine }: ActivityItemProps) {
  return (
    <div className="flex gap-4">
      <div className="relative">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${bgColor}`}>
          <Icon className={`w-5 h-5 ${color}`} />
        </div>
        {hasLine && <div className="absolute top-10 left-5 w-px h-full bg-gray-200 -z-10" />}
      </div>
      <div className="flex-1 pb-4">
        <div className="flex items-start justify-between mb-1">
          <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
          <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{time}</span>
        </div>
        <p className="text-sm text-gray-600 mb-1">{desc}</p>
        <p className="text-xs text-gray-500">{sub}</p>
      </div>
    </div>
  );
}

export default function RecentActivities() {
  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-gray-900">Recent Activities</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 relative">
        <ActivityItem 
          icon={UserPlus} color="text-emerald-600" bgColor="bg-emerald-50"
          title="New Student Admission" time="11:30"
          desc="Emily Rodriguez admitted to Grade 10-A" sub="by Sarah Johnson" hasLine
        />
        <ActivityItem 
          icon={FileSignature} color="text-blue-600" bgColor="bg-blue-50"
          title="Grade Updated" time="10:15"
          desc="Mathematics grades published for Grade 9-B" sub="by Prof. Michael Chen" hasLine
        />
        <ActivityItem 
          icon={ShieldCheck} color="text-violet-600" bgColor="bg-violet-50"
          title="New Teacher Onboarded" time="15:20"
          desc="Dr. Amanda Williams joined as Physics Teacher" sub="by HR Department" hasLine
        />
        <ActivityItem 
          icon={Calendar} color="text-amber-600" bgColor="bg-amber-50"
          title="Event Scheduled" time="12:00"
          desc="Parent-Teacher Meeting scheduled for Jan 25" sub="by Sarah Johnson" hasLine
        />
        <ActivityItem 
          icon={CircleDollarSign} color="text-teal-600" bgColor="bg-teal-50"
          title="Fee Payment Received" time="09:45"
          desc="15 students completed semester fee payment" sub="by Finance Department"
        />
        <Button variant="ghost" className="w-full text-teal-600 hover:text-teal-700 hover:bg-teal-50 mt-4 border-t pt-6 h-auto">
          View All Activities
        </Button>
      </CardContent>
    </Card>
  );
}