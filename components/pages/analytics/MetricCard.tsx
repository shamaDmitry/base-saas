import React from "react";
import { LucideIcon } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";

export interface ChartDataPoint {
  value: number;
  [key: string]: string | number | undefined;
}

export interface ColorTheme {
  iconBg: string; // Tailwind class (e.g., "bg-blue-50")
  iconColor: string; // Tailwind class (e.g., "text-blue-500")
  stroke: string; // Hex color (e.g., "#3b82f6")
  fill: string; // Hex color (e.g., "#eff6ff")
  gradientStart?: string; // Optional custom gradient opacity start
  gradientEnd?: string; // Optional custom gradient opacity end
}

export interface MetricCardProps {
  title: string;
  value: string | number;
  trendText?: string;
  icon?: LucideIcon;
  chartData: ChartDataPoint[];
  colorTheme?: ColorTheme;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  trendText,
  icon: Icon,
  chartData,
  colorTheme = {
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    stroke: "#3b82f6",
    fill: "#eff6ff",
  },
  className,
}) => {
  const gradientId = `gradient-${title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;

  return (
    <div className={cn("bg-white rounded-[10px]", className)}>
      <div className="p-6 pb-0">
        <div className="flex justify-between items-start">
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-full transition-colors",
              colorTheme.iconBg,
            )}
          >
            {Icon && <Icon className={cn("h-6 w-6", colorTheme.iconColor)} />}
          </div>

          <div className="text-right">
            <p className="text-sm font-medium text-gray-500">{title}</p>

            {trendText && (
              <p className="text-xs font-semibold text-green-500 mt-1">
                {trendText}
              </p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-2xl font-bold text-gray-800 tracking-tight">
            {value}
          </h3>
        </div>
      </div>

      <div className="h-24 w-full mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={colorTheme.stroke}
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor={colorTheme.stroke}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke={colorTheme.stroke}
              strokeWidth={3}
              fill={`url(#${gradientId})`}
              fillOpacity={1}
              isAnimationActive={true}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MetricCard;
