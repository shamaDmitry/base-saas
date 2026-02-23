import { create } from "zustand";

export type ViewType = "day" | "month" | "year";

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  color: string;
}

interface CalendarState {
  currentDate: Date;
  view: ViewType;
  events: CalendarEvent[];
  setCurrentDate: (date: Date) => void;
  setView: (view: ViewType) => void;
}

export const useCalendarStore = create<CalendarState>((set) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  return {
    currentDate: now,
    view: "day",
    events: [
      {
        id: "0",
        title: "Invited",
        start: new Date(currentYear, 2, 2, 9, 0),
        end: new Date(currentYear, 2, 2, 10, 0),
        color: "bg-orange-400",
      },
      {
        id: "1",
        title: "Invited by friends",
        start: new Date(currentYear, currentMonth, 2, 9, 0),
        end: new Date(currentYear, currentMonth, 2, 10, 0),
        color: "bg-orange-400",
      },
      {
        id: "2",
        title: "Prayer Time",
        start: new Date(currentYear, currentMonth, 2, 12, 0),
        end: new Date(currentYear, currentMonth, 2, 13, 0),
        color: "bg-cyan-400",
      },
      {
        id: "3",
        title: "lunch Time",
        start: new Date(currentYear, currentMonth, 2, 14, 0),
        end: new Date(currentYear, currentMonth, 2, 15, 0),
        color: "bg-orange-400",
      },
      {
        id: "4",
        title: "Prayer Time",
        start: new Date(currentYear, currentMonth, 2, 18, 0),
        end: new Date(currentYear, currentMonth, 2, 19, 0),
        color: "bg-green-500",
      },
      {
        id: "5",
        title: "Dinner Time",
        start: new Date(currentYear, currentMonth, 2, 21, 0),
        end: new Date(currentYear, currentMonth, 2, 22, 0),
        color: "bg-indigo-500",
      },
    ],
    setCurrentDate: (date) => set({ currentDate: date }),
    setView: (view) => set({ view }),
  };
});
