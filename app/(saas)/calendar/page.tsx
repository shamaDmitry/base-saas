"use client";

import { DayViewCalendar } from "@/components/custom/Calendar/DayViewCalendar";
import Heading from "@/components/custom/Heading";
import { LeftSidebar } from "@/components/pages/calendar/LeftSidebar";
import { useCalendarStore, ViewType } from "@/lib/stores/useCalendarStore";

const CalendarPage = () => {
  const { view, setView } = useCalendarStore();
  const views: ViewType[] = ["day", "month", "year"];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="flex justify-between items-center mb-8">
        <Heading className="mb-7.5">Calendar</Heading>

        <div className="flex bg-white rounded-xl p-1.5 shadow-sm gap-1">
          {views.map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-6 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                view === v
                  ? "bg-indigo-500 text-white shadow-md shadow-indigo-200"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-8">
        <LeftSidebar />

        <DayViewCalendar />
      </div>
    </div>
  );
};

export default CalendarPage;
