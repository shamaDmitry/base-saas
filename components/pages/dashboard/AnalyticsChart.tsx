"use client";

import {
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  PieSectorDataItem,
} from "recharts";

const data = [
  { name: "Sale", value: 45, color: "#558EFF" }, // Blue
  { name: "Distribute", value: 35, color: "#FDD366" }, // Yellow
  { name: "Return", value: 20, color: "#FF8F6B" }, // Orange
];

const totalPercentage = 80;

const renderCustomShape = (props: PieSectorDataItem) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    cornerRadius,
    payload,
  } = props;

  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      cornerRadius={cornerRadius}
      fill={payload.color}
      stroke="none"
    />
  );
};

const AnalyticsChart = () => {
  return (
    <div className="flex flex-col items-center pb-6">
      <div className="relative w-56 h-56">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={85}
              paddingAngle={0}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              cornerRadius={10}
              shape={renderCustomShape}
              isAnimationActive={true}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-3xl font-extrabold text-gray-900">
            {totalPercentage}%
          </span>
          <span className="text-sm text-gray-500 font-medium">
            Transactions
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mt-4">
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

export default AnalyticsChart;
