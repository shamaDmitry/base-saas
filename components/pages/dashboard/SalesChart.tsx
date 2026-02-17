"use client";

import { cn } from "@/lib/utils";
import {
  Area,
  AreaChart,
  CartesianGrid,
  DotProps,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

interface ChartData {
  time: string;
  value: number;
  sales: number;
}

const data: ChartData[] = [
  { time: "10am", value: 55, sales: 1500 },
  { time: "11am", value: 32, sales: 1200 },
  { time: "12am", value: 58, sales: 1800 },
  { time: "01am", value: 36, sales: 1300 },
  { time: "02am", value: 22, sales: 900 },
  { time: "02:30am", value: 50, sales: 2678 },
  { time: "03am", value: 38, sales: 1400 },
  { time: "04am", value: 14, sales: 600 },
  { time: "05am", value: 34, sales: 1350 },
  { time: "06am", value: 66, sales: 2100 },
  { time: "07am", value: 72, sales: 2300 },
];

interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
  active?: boolean;
  payload?: { payload: ChartData }[];
  label?: string;
  coordinate?: { x: number; y: number };
}

const CustomTooltip = ({
  active,
  payload,
  label,
  coordinate,
}: CustomTooltipProps) => {
  console.log("label", label);
  console.log("payload", payload);
  console.log("active", active);
  console.log("coordinate", coordinate);

  if (active && payload && payload.length) {
    return (
      <div className={cn("relative flex flex-col items-center")}>
        <div className="z-10 rounded-[10px] bg-foreground px-4 py-2 text-center text-white shadow-lg">
          <p className="text-xs text-white/80">Sales</p>

          <p className="text-xl font-bold">
            {payload[0].payload.sales.toLocaleString()}
          </p>
        </div>

        {/*  triangle  */}
        <div className="z-0 -mt-2 h-3 w-3 rotate-45 bg-foreground"></div>
      </div>
    );
  }

  return null;
};

const CustomDot = (props: DotProps) => {
  const { cx, cy } = props;

  if (cx === undefined || cy === undefined) return null;

  return (
    <circle
      cx={cx}
      cy={cy}
      r={5}
      stroke="currentColor"
      strokeWidth={3}
      fill="white"
      className="text-[#AE8FF7]"
    />
  );
};

const CustomActiveDot = (props: DotProps) => {
  const { cx, cy } = props;

  return (
    <circle
      cx={cx}
      cy={cy}
      r={6}
      stroke="currentColor"
      strokeWidth={5}
      fill="white"
      className="text-[#AE8FF7]"
    />
  );
};

const CustomActiveDotWithTooltip = (
  props: DotProps & { payload?: ChartData },
) => {
  const { cx, cy, payload } = props;

  if (!cx || !cy || !payload) return null;

  const formattedSales = payload.sales?.toLocaleString() || "0";

  const width = 140;
  const height = 80;
  const yOffset = 15;

  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={6}
        stroke="#6366f1" // Indigo-500
        strokeWidth={4}
        fill="white"
      />

      <foreignObject
        x={cx - width / 2}
        y={cy - height - yOffset}
        width={width}
        height={height}
        className="overflow-visible fixed z-50"
      >
        <div className="flex h-full w-full flex-col items-center justify-end">
          <div className="z-10 rounded-[10px] bg-foreground px-4 py-2 text-center text-white shadow-lg">
            <p className="text-xs text-white/80">Sales</p>

            <p className="text-xl font-bold">{formattedSales}</p>
          </div>

          {/*  triangle  */}
          <div className="z-0 -mt-2 h-3 w-3 rotate-45 bg-foreground"></div>
        </div>
      </foreignObject>
    </g>
  );
};

const CustomCursor = (
  props: Partial<{ points: Array<{ x: number; y: number }>; height: number }>,
  // props,
) => {
  const { points, height } = props;

  if (!points || !points.length || height === undefined) {
    return null;
  }

  const { x, y } = points[0];

  return (
    <g>
      <line
        x1={x}
        y1={y}
        x2={x}
        y2={height}
        stroke="#B5B5B5"
        strokeWidth={1}
        strokeDasharray="3 3"
      />
    </g>
  );
};

const SalesChart = () => {
  return (
    <ResponsiveContainer
      width="100%"
      height={300}
      className="focus:outline-0! outline-0!"
    >
      <AreaChart
        className="focus:outline-0! outline-0! overflow-visible"
        data={data}
        margin={{
          top: 20,
          right: 20,
          left: -20,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.8} />{" "}
            {/* blue-400 */}
            <stop offset="100%" stopColor="#e879f9" stopOpacity={0.8} />{" "}
            {/* fuchsia-400 */}
          </linearGradient>
          <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#e879f9" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <CartesianGrid
          vertical={false}
          strokeDasharray="3 3"
          stroke="#e5e7eb"
        />

        <XAxis
          dataKey="time"
          tickLine={false}
          axisLine={false}
          tick={{ fill: "#9ca3af", fontSize: 12 }}
          interval="preserveStartEnd"
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fill: "#9ca3af", fontSize: 12 }}
          domain={[0, 100]}
          ticks={[0, 20, 40, 60, 80, 100]}
        />

        <Tooltip
          // content={<CustomTooltip />}
          // content={() => null}
          // cursor={<CustomCursor />}
          cursor={{ stroke: "#6366f1", strokeWidth: 2, strokeDasharray: "5 5" }}
          wrapperStyle={{ outline: "none" }}
          isAnimationActive={false}
        />

        <Area
          type="monotone"
          dataKey="value"
          stroke="url(#colorValue)"
          strokeWidth={4}
          fill="url(#colorFill)"
          dot={<CustomDot />}
          // activeDot={<CustomActiveDot />}
          activeDot={<CustomActiveDotWithTooltip />}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
