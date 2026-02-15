import { Clock, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EventCardProps {
  day: string;
  month: string;
  title: string;
  tag: string;
  tagColor: string;
  time: string;
  location: string;
  attendees: string;
}

function EventCard({ day, month, title, tag, tagColor, time, location, attendees }: EventCardProps) {
  return (
    <div className="flex gap-4 p-4 rounded-lg border border-gray-200 hover:border-teal-200 hover:bg-teal-50/30 transition-all cursor-pointer">
      <div className="flex flex-col items-center justify-center min-w-[60px] p-3 rounded-lg bg-gray-50">
        <span className="text-2xl font-bold text-gray-900">{day}</span>
        <span className="text-xs text-gray-600 uppercase">{month}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between mb-2">
          <h4 className="text-sm font-semibold text-gray-900 truncate pr-2">{title}</h4>
          <span className={`px-2 py-1 text-xs font-medium rounded-full capitalize whitespace-nowrap ${tagColor}`}>
            {tag}
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-600 flex-wrap">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span className="truncate max-w-[80px]">{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span>{attendees}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UpcomingEvents() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
         <CardTitle className="text-lg font-semibold text-gray-900">Upcoming Events</CardTitle>
         <Button variant="link" className="text-teal-600 h-auto p-0">View Calendar</Button>
      </CardHeader>
      <CardContent className="space-y-3 pt-4">
        <EventCard 
          day="25" month="Jan" 
          title="Parent-Teacher Meeting" 
          tag="Meeting" tagColor="bg-blue-50 text-blue-600"
          time="14:00" location="Main Auditorium" attendees="156"
        />
        <EventCard 
          day="01" month="Feb" 
          title="Mid-Term Examinations" 
          tag="Exam" tagColor="bg-red-50 text-red-600"
          time="09:00" location="All Classrooms" attendees="1247"
        />
        <EventCard 
          day="10" month="Feb" 
          title="Science Fair" 
          tag="Event" tagColor="bg-emerald-50 text-emerald-600"
          time="10:00" location="School Grounds" attendees="450"
        />
        <EventCard 
          day="15" month="Feb" 
          title="Staff Training Workshop" 
          tag="Training" tagColor="bg-violet-50 text-violet-600"
          time="13:00" location="Conference Room" attendees="89"
        />
      </CardContent>
    </Card>
  );
}