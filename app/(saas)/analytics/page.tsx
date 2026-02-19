"use client";

import CustomCard from "@/components/custom/CustomCard";
import Heading from "@/components/custom/Heading";
import AddProductSheet from "@/components/custom/Products/AddProductSheet";
import MetricCard from "@/components/pages/analytics/MetricCard";
import ProductSalesAnalyticsChart from "@/components/pages/analytics/ProductSalesAnalyticsChart";
import ProductAddChart from "@/components/pages/dashboard/ProductAddChart";
import RecentOrdersDataTable from "@/components/pages/dashboard/RecentOrdersDataTable";
import { Button } from "@/components/ui/button";
import { DateRange, DateRangePicker } from "@/components/ui/date-range-picker";
import { openAddProductDrawer } from "@/lib/stores/products-drawer-store";
import { Box, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";

const blueWaveData = [
  { value: 40 },
  { value: 30 },
  { value: 60 },
  { value: 45 },
  { value: 70 },
  { value: 65 },
  { value: 85 },
];

const yellowWaveData = [
  { value: 30 },
  { value: 50 },
  { value: 40 },
  { value: 60 },
  { value: 50 },
  { value: 70 },
  { value: 60 },
];

const AnalyticsPage = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: undefined,
    to: undefined,
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-7.5">
        <Heading className="">Product Analytics</Heading>

        <div className="">
          <DateRangePicker value={dateRange} onChange={setDateRange} />
        </div>
      </div>

      <div className="flex justify-end gap-4 items-center mb-4">
        <Button onClick={openAddProductDrawer}>
          <Plus />
          Add Product
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-7.5 mb-7.5">
        <div className="flex flex-col gap-7.5">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-2 lg:gap-[29.5px]">
            <MetricCard
              title="Total Product"
              value="5,00,874"
              trendText="+1400 New Added"
              icon={Box}
              chartData={blueWaveData}
              colorTheme={{
                iconBg: "bg-blue-50",
                iconColor: "text-blue-500",
                stroke: "#3B82F6",
                fill: "#EFF6FF",
              }}
            />

            <MetricCard
              title="Total Sales"
              value="2,34,888"
              trendText="+1000 Sales Today"
              icon={ShoppingCart}
              chartData={yellowWaveData}
              colorTheme={{
                iconBg: "bg-yellow-50",
                iconColor: "text-yellow-500",
                stroke: "#FBBF24",
                fill: "#FFFBEB",
              }}
            />
          </div>

          <CustomCard title="Top Selling Products">
            <RecentOrdersDataTable />
          </CustomCard>
        </div>

        <div>
          <ProductAddChart
            chartData={[
              { month: "Jan", value: 23400 },
              { month: "Feb", value: 15000 },
              { month: "Mar", value: 30000 },
              { month: "Apr", value: 22000 },
              { month: "May", value: 10000 },
              { month: "Jun", value: 23400 },
              { month: "Jul", value: 5000 },
            ]}
          />

          <CustomCard title="Product Sales Analytics">
            <ProductSalesAnalyticsChart />
          </CustomCard>
        </div>
      </div>

      <AddProductSheet />
    </div>
  );
};

export default AnalyticsPage;
