"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  PieSectorDataItem,
} from "recharts";
import { MoreHorizontal } from "lucide-react";

const data = [
  { name: "Total Sales", value: 55, color: "#558EFF" }, // Blue
  { name: "Total Order", value: 25, color: "#FDD366" }, // Yellow
  { name: "Order Cancel", value: 20, color: "#FF8F6B" }, // Orange
];

const renderActiveShape = (props: PieSectorDataItem) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
    props;

  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fill}
      cornerRadius={6}
    />
  );
};

const ProductSalesAnalyticsChart = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-64 h-64 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              stroke="none"
              // Pass the custom renderer here
              activeShape={renderActiveShape}
              // We use 'shape' for static rendering instead of 'activeShape' if no hover interaction is needed
              shape={(props) =>
                renderActiveShape({ ...props, fill: props.payload.color })
              }
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-6 mt-6">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: item.color }}
            ></span>
            <span className="text-sm font-medium text-gray-600">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSalesAnalyticsChart;
