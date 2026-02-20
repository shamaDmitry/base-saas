"use client";

import {
  Calendar,
  dateFnsLocalizer,
  ToolbarProps,
  EventProps,
  View,
} from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  useCalendarStore,
  CalendarEvent,
  ViewType,
} from "@/lib/stores/useCalendarStore";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CustomToolbar = (toolbar: ToolbarProps<CalendarEvent>) => {
  const goToBack = () => toolbar.onNavigate("PREV");
  const goToNext = () => toolbar.onNavigate("NEXT");

  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-lg font-semibold text-gray-900">
        {format(toolbar.date, "MMMM d, yyyy")}
      </h2>
      <div className="flex items-center gap-2 text-gray-400">
        <button
          onClick={goToBack}
          className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Previous day"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goToNext}
          className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Next day"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const CustomEvent = ({ event }: EventProps<CalendarEvent>) => {
  return (
    <div
      className={`w-full h-full p-2 rounded-lg flex items-center justify-center text-white text-sm font-medium shadow-sm ${event.color}`}
    >
      {event.title}
    </div>
  );
};

export function DayViewCalendar() {
  const { currentDate, events, setCurrentDate, view, setView } =
    useCalendarStore();

  const handleViewChange = (newView: View) => {
    setView(newView as ViewType);
  };

  return (
    <div className="grow bg-white p-6 rounded-2xl shadow-sm h-[calc(100vh-120px)] overflow-hidden">
      <Calendar<CalendarEvent>
        localizer={localizer}
        events={events}
        date={currentDate}
        view={view as View}
        onNavigate={(newDate: Date) => setCurrentDate(newDate)}
        onView={handleViewChange}
        components={{
          toolbar: CustomToolbar,
          event: CustomEvent,
        }}
        step={60}
        timeslots={1}
        min={new Date(0, 0, 0, 9, 0, 0)} // Starts at 09:00 AM
        formats={{
          timeGutterFormat: "hh.mm a",
        }}
        className="custom-rbc"
      />
    </div>
  );
}
