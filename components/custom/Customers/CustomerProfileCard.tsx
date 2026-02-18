"use client";

import React from "react";
import { Mail, Phone, MapPin, MoreVertical, LucideIcon, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Label,
  Rectangle,
  Sector,
} from "recharts";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PerformanceDataPoint {
  month: string;
  value: number;
  label: string | null;
}

interface StatsDataPoint {
  label: string;
  value: number;
  color: string;
}

interface ContactItemProps {
  icon: LucideIcon;
  text: string;
}

interface CustomBarLabelProps {
  x?: number;
  y?: number;
  width?: number;
  value?: number;
  index?: number;
}

interface CustomBarShapeProps {
  fill?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  index?: number;
}

interface CustomPieSectorProps {
  cx?: number;
  cy?: number;
  innerRadius?: number;
  outerRadius?: number;
  startAngle?: number;
  endAngle?: number;
  fill?: string;
  payload?: {
    fill?: string;
  };
}

const performanceData: PerformanceDataPoint[] = [
  { month: "Jan", value: 40, label: null },
  { month: "Feb", value: 75, label: "2.33k" }, // Highlighted Month
  { month: "Mar", value: 55, label: null },
  { month: "Apr", value: 45, label: null },
  { month: "May", value: 65, label: null },
  { month: "Jun", value: 85, label: null },
];

const statsData: StatsDataPoint[] = [
  { label: "70%", value: 70, color: "#FDD366" }, // Yellow
  { label: "60%", value: 60, color: "#558EFF" }, // Blue
];

const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, text }) => (
  <div className="flex items-start gap-4 mb-4 last:mb-0">
    <div className="flex-shrink-0 mt-1">
      <Icon className="h-5 w-5 text-gray-400" />
    </div>
    <span className="text-sm text-gray-600 font-medium leading-relaxed">
      {text}
    </span>
  </div>
);

// REPLACED 'any' with CustomBarShapeProps
const CustomBarShape = (props: CustomBarShapeProps) => {
  const { fill, x, y, width, height, index } = props;

  // Guard clause for safety
  if (index === undefined) return <Rectangle {...props} />;

  const dataItem = performanceData[index];
  const fillColor = dataItem?.label ? "#FF8F6B" : "#FFF0E6";

  return (
    <Rectangle
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fillColor}
      radius={[4, 4, 4, 4]}
    />
  );
};

// REPLACED 'any' with CustomPieSectorProps
const CustomPieSector = (props: CustomPieSectorProps) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, payload } =
    props;

  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={payload?.fill}
      cornerRadius={10}
    />
  );
};

const CustomBarLabel = (props: CustomBarLabelProps) => {
  const { x, y, width, index } = props;

  if (
    typeof x !== "number" ||
    typeof y !== "number" ||
    typeof width !== "number" ||
    typeof index !== "number"
  )
    return null;

  const dataItem = performanceData[index];
  if (!dataItem?.label) return null;

  return (
    <g>
      <rect
        x={x + width / 2 - 20}
        y={y - 25}
        width="40"
        height="20"
        rx="4"
        fill="#FF8F6B"
      />
      <path
        d={`M${x + width / 2 - 4},${y - 6} L${x + width / 2},${y} L${x + width / 2 + 4},${y - 6} Z`}
        fill="#FF8F6B"
      />
      <text
        x={x + width / 2}
        y={y - 11}
        fill="#fff"
        textAnchor="middle"
        fontSize="10"
        fontWeight="bold"
      >
        {dataItem.label}
      </text>
    </g>
  );
};

const CircularProgress: React.FC<{
  value: number;
  color: string;
  label: string;
}> = ({ value, color, label }) => {
  const data = [
    { value: value, fill: color },
    { value: 100 - value, fill: "#F3F4F6" },
  ];

  return (
    <Card className="flex items-center justify-center p-4 border border-gray-100 shadow-sm rounded-xl">
      <div className="h-24 w-24 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={35}
              outerRadius={42}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              stroke="none"
              activeShape={CustomPieSector}
              shape={CustomPieSector}
            >
              <Label
                value={label}
                position="center"
                className="text-lg font-bold fill-gray-800"
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

const CustomerProfileCard: React.FC = () => {
  return (
    <Card className="w-full max-w-75.5 mx-auto bg-white border-none shadow-none rounded-[10px] overflow-hidden">
      <CardContent className="p-8 flex flex-col gap-8">
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 size-8 rounded-full bg-red-50 hover:bg-red-100 text-red-500"
        >
          <Link href="/customers">
            <X className="h-4 w-4" />
          </Link>
        </Button>

        <div className="flex flex-col items-center text-center">
          <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
            <Image
              src="https://placehold.co/150x150/e2e8f0/475569.png?text=JD"
              alt="John Deo"
              className="h-full w-full object-cover"
              width={96}
              height={96}
            />
          </div>
          <h2 className="text-xl font-bold text-slate-900">John Deo</h2>
          <p className="text-gray-500 text-sm font-medium">UI/UX Designer</p>
        </div>

        <div className="h-px bg-gray-100 w-full" />

        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            Contact Info
          </h3>

          <div className="flex flex-col">
            <ContactItem icon={Mail} text="kajope5182@ummoh.com" />
            <ContactItem icon={Phone} text="33757005467" />
            <ContactItem icon={MapPin} text="2239 Hog Camp Road Schaumburg" />
          </div>
        </div>

        <Card className="border border-gray-100 shadow-sm rounded-xl">
          <div className="p-4 pb-0 flex items-center justify-between">
            <h4 className="font-bold text-slate-900">Performance</h4>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
          <div className="h-48 w-full mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={performanceData}
                margin={{ top: 30, right: 10, left: 10, bottom: 0 }}
              >
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                  dy={10}
                />
                <Bar
                  dataKey="value"
                  barSize={12}
                  shape={<CustomBarShape />}
                  label={<CustomBarLabel />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          {statsData.map((stat, idx) => (
            <CircularProgress
              key={idx}
              value={stat.value}
              color={stat.color}
              label={stat.label}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomerProfileCard;
