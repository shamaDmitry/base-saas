"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { useCalendarStore } from "@/lib/stores/useCalendarStore";
import Image from "next/image";

const DUMMY_PEOPLE = [
  {
    name: "Eddie Lobanovskiy",
    email: "laboanovskiy@gmail.com",
    avatar: "https://i.pravatar.cc/150?u=1",
  },
  {
    name: "Alexey Stave",
    email: "alexeyst@gmail.com",
    avatar: "https://i.pravatar.cc/150?u=2",
  },
  {
    name: "Anton Tkacheve",
    email: "tkacheveanton@gmail.com",
    avatar: "https://i.pravatar.cc/150?u=3",
  },
];

export function LeftSidebar() {
  const { currentDate, setCurrentDate } = useCalendarStore();

  return (
    <div className="w-75 shrink-0 bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-6 h-[calc(100vh-120px)] overflow-y-auto">
      <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl py-6 shadow-md shadow-indigo-200">
        + Create Schedule
      </Button>

      <div className="flex justify-center">
        <Calendar
          mode="single"
          selected={currentDate}
          onSelect={(date) => date && setCurrentDate(date)}
          className="rounded-md"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-gray-900 text-lg">People</h3>
        <Input
          placeholder="Search for People"
          className="bg-gray-50/50 border-gray-100 rounded-xl"
        />

        <div className="flex flex-col gap-5 mt-2">
          {DUMMY_PEOPLE.map((p) => {
            return (
              <div key={p.email} className="flex items-center gap-3">
                <Image
                  src={p.avatar}
                  alt={p.name}
                  className="w-10 h-10 rounded-full object-cover"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">
                    {p.name}
                  </span>

                  <span className="text-xs text-gray-400">{p.email}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full mt-auto rounded-xl py-6 text-indigo-500 border-indigo-100 hover:bg-indigo-50"
      >
        My Schedule
      </Button>
    </div>
  );
}
