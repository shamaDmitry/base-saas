"use client";

import CustomCard from "@/components/custom/CustomCard";
import Heading from "@/components/custom/Heading";
import ProductAddChart from "@/components/pages/dashboard/ProductAddChart";
import { Button } from "@/components/ui/button";
import { DateRange, DateRangePicker } from "@/components/ui/date-range-picker";
import { Plus } from "lucide-react";
import { useState } from "react";

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

      <div className="flex justify-between gap-4 items-center mb-4">
        <div className="flex items-center">
          <Button>Product</Button>
          <Button variant="secondary">Customer</Button>
        </div>

        <Button>
          <Plus />
          Add Product
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-7.5 mb-7.5">
        <CustomCard title="Recent Orders">graphs</CustomCard>

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
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-7.5 mb-7.5">
        <CustomCard title="Top Selling Products">table</CustomCard>

        <CustomCard title="Product Sales Analytics">chart</CustomCard>
      </div>
    </div>
  );
};

export default AnalyticsPage;
