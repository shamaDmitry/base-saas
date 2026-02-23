"use client";

import AnalyticCard, { IconVariant } from "@/components/AnalyticCard";
import Heading from "@/components/custom/Heading";
import BagIcon from "@/components/icons/BagIcon";
import GameIcon from "@/components/icons/GameIcon";
import HeartIcon from "@/components/icons/HeartIcon";
import WorkIcon from "@/components/icons/WorkIcon";
import { DateRangePicker, DateRange } from "@/components/ui/date-range-picker";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import TopSellingProducts from "@/components/pages/dashboard/TopSellingProducts";
import CustomCard from "@/components/custom/CustomCard";
import SalesChart from "@/components/pages/dashboard/SalesChart";
import AnalyticsChart from "@/components/pages/dashboard/AnalyticsChart";
import RecentOrdersDataTable from "@/components/pages/dashboard/RecentOrdersDataTable";

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

const products = [
  {
    id: uuidv4(),
    name: "NIKE Shoes Black Pattern",
    rating: 4,
    price: 87,
    image: "https://placehold.co/100x100/ADD8E6/FFFFFF.png/?text=Nike+Shoe",
  },
  {
    id: uuidv4(),
    name: "iPhone 12",
    rating: 4,
    price: 987,
    image: "https://placehold.co/100x100/ADD8E6/FFFFFF.png/?text=iPhone+12",
  },
];

const DashboardPage = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: undefined,
    to: undefined,
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-7.5 flex-col md:flex-row">
        <Heading className="">Dashboard</Heading>

        <div className="">
          <DateRangePicker value={dateRange} onChange={setDateRange} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7.5 mb-7.5">
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

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-7.5 mb-7.5">
        <CustomCard title="Reports">
          <SalesChart />
        </CustomCard>

        <CustomCard title="Analytics">
          <AnalyticsChart />
        </CustomCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-7.5">
        <CustomCard title="Recent Orders">
          <RecentOrdersDataTable />
        </CustomCard>

        <TopSellingProducts products={products} />
      </div>
    </div>
  );
};

export default DashboardPage;
