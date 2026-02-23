"use client";

import React from "react";
import {
  Calendar,
  dateFnsLocalizer,
  ToolbarProps,
  EventProps,
  View,
  NavigateAction,
  ViewProps,
  ViewsProps,
} from "react-big-calendar";
import {
  format,
  parse,
  startOfWeek,
  getDay,
  addYears,
  startOfYear,
  endOfYear,
  eachMonthOfInterval,
  endOfMonth,
  eachDayOfInterval,
  endOfWeek,
  isSameMonth,
  isSameDay,
} from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  useCalendarStore,
  CalendarEvent,
  ViewType,
} from "@/lib/stores/useCalendarStore";
import { cn } from "@/lib/utils";

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

interface CustomViewComponent extends React.FC<ViewProps<CalendarEvent>> {
  title: (date: Date) => string;
  navigate: (date: Date, action: NavigateAction) => Date;
}

const CustomToolbar = (toolbar: ToolbarProps<CalendarEvent>) => {
  const goToBack = () => toolbar.onNavigate("PREV");
  const goToNext = () => toolbar.onNavigate("NEXT");

  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-lg font-semibold text-gray-900">{toolbar.label}</h2>
      <div className="flex items-center gap-2 text-gray-400">
        <button
          onClick={goToBack}
          className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goToNext}
          className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Next"
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
      className={cn(
        "w-full h-full p-2 rounded-lg flex items-center justify-center text-white text-sm font-medium shadow-sm",
        event.color,
      )}
    >
      {event.title}
    </div>
  );
};

const YearView: CustomViewComponent = ({ date }) => {
  const { currentDate, setCurrentDate, setView, events } = useCalendarStore();

  const yearStart = startOfYear(date);
  const yearEnd = endOfYear(date);
  const months = eachMonthOfInterval({ start: yearStart, end: yearEnd });

  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-8 overflow-y-auto pb-8 h-full pr-4 custom-scrollbar">
      {months.map((monthDate) => {
        const monthStart = monthDate;
        const monthEnd = endOfMonth(monthDate);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const days = eachDayOfInterval({ start: startDate, end: endDate });

        return (
          <div key={monthDate.toString()} className="flex flex-col">
            <h3 className="text-[15px] font-medium text-gray-900 mb-4">
              {format(monthDate, "MMMM yyyy")}
            </h3>

            <div className="grid grid-cols-7 mb-2">
              {weekDays.map((d, i) => {
                return (
                  <div
                    key={i}
                    className="text-xs text-gray-400 text-center font-medium"
                  >
                    {d}
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-7 gap-y-1">
              {days.map((day, i) => {
                const isCurrentMonth = isSameMonth(day, monthDate);
                const isSelected = isSameDay(day, currentDate);

                const hasEvents = events.some((event) =>
                  isSameDay(event.start, day),
                );

                return (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentDate(day);
                      setView("day");
                    }}
                    disabled={!isCurrentMonth}
                    className={cn(
                      "relative h-8 w-8 flex flex-col items-center justify-center text-[13px] rounded-full mx-auto transition-colors",
                      !isCurrentMonth ? "text-gray-300" : "text-gray-700",
                      isSelected &&
                        isCurrentMonth &&
                        "bg-indigo-500 text-white font-medium shadow-sm shadow-indigo-200",
                      !isSelected && isCurrentMonth && "hover:bg-gray-100",
                    )}
                  >
                    <span className={cn(hasEvents && "mb-1")}>
                      {format(day, "d")}
                    </span>

                    {hasEvents && isCurrentMonth && (
                      <span
                        className={cn(
                          "absolute bottom-1 w-1 h-1 rounded-full",
                          isSelected ? "bg-white" : "bg-indigo-400",
                        )}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

YearView.title = (date: Date) => format(date, "yyyy");
YearView.navigate = (date: Date, action: NavigateAction) => {
  switch (action) {
    case "PREV":
      return addYears(date, -1);
    case "NEXT":
      return addYears(date, 1);
    default:
      return date;
  }
};

const isValidView = (viewString: string): viewString is ViewType => {
  return ["day", "month", "year"].includes(viewString);
};

export function DayViewCalendar() {
  const { currentDate, events, setCurrentDate, view, setView } =
    useCalendarStore();

  const handleViewChange = (newView: View) => {
    const viewString = String(newView);

    if (isValidView(viewString)) {
      setView(viewString);
    }
  };

  const customRbcViews = {
    day: true,
    month: true,
    year: YearView,
  } as unknown as ViewsProps<CalendarEvent>;

  const currentRbcView = view as unknown as View;

  return (
    <div className="grow bg-white p-8 rounded-2xl shadow-sm h-[calc(100vh-120px)] flex flex-col overflow-hidden min-h-[630px]">
      <Calendar<CalendarEvent>
        localizer={localizer}
        events={events}
        date={currentDate}
        view={currentRbcView}
        onNavigate={(newDate: Date) => setCurrentDate(newDate)}
        onView={handleViewChange}
        views={customRbcViews}
        components={{
          toolbar: CustomToolbar,
          event: CustomEvent,
        }}
        step={60}
        timeslots={1}
        min={new Date(0, 0, 0, 9, 0, 0)}
        formats={{
          timeGutterFormat: "hh.mm a",
        }}
        className="custom-rbc grow"
      />
    </div>
  );
}
