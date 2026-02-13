"use client";

import AnalyticCard, { IconVariant } from "@/components/AnalyticCard";
import Heading from "@/components/custom/Heading";
import BagIcon from "@/components/icons/BagIcon";
import GameIcon from "@/components/icons/GameIcon";
import HeartIcon from "@/components/icons/HeartIcon";
import WorkIcon from "@/components/icons/WorkIcon";
import { DateRangePicker, DateRange } from "@/components/ui/date-range-picker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const cardData = [
  {
    iconVariant: "default",
    id: uuidv4(),
    title: "Save Products",
    value: "178+",
    icon: <HeartIcon />,
  },
  {
    iconVariant: "warning",
    id: uuidv4(),
    title: "Stock Products",
    value: "20+",
    icon: <GameIcon />,
  },
  {
    iconVariant: "destructive",
    id: uuidv4(),
    title: "Sales Products",
    value: "190+",
    icon: <BagIcon />,
  },
  {
    iconVariant: "secondary",
    id: uuidv4(),
    title: "Job Application",
    value: "12+",
    icon: <WorkIcon />,
  },
];

const DashboardPage = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: undefined,
    to: undefined,
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-7.5">
        <Heading className="">Dashboard</Heading>

        <div className="max-w-68.75">
          <DateRangePicker
            value={dateRange}
            onChange={setDateRange}
            orientation="vertical"
          />
        </div>
      </div>

      <Card className="mb-7.5">
        <CardHeader>
          <CardTitle>Date Range Filter</CardTitle>
        </CardHeader>

        <CardContent>
          <DateRangePicker
            value={dateRange}
            onChange={setDateRange}
            fromLabel="Start Date"
            toLabel="End Date"
            orientation="horizontal"
          />

          {(dateRange.from || dateRange.to) && (
            <p className="mt-4 text-sm text-muted-foreground">
              Selected range:{" "}
              {dateRange.from ? dateRange.from.toLocaleDateString() : "Not set"}{" "}
              - {dateRange.to ? dateRange.to.toLocaleDateString() : "Not set"}
            </p>
          )}
        </CardContent>
      </Card>

      <div className="flex w-full *:flex-1 gap-7.5">
        {cardData.map((item) => {
          return (
            <AnalyticCard
              key={item.id}
              iconVariant={item.iconVariant as IconVariant}
              data={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DashboardPage;
