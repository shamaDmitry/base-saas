import CustomCard from "@/components/custom/CustomCard";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const barVariants = cva(
  "h-3 rounded-full transition-all duration-500 ease-out",
  {
    variants: {
      intent: {
        low: "bg-blue-500", // Blue for < 23k
        high: "bg-orange-400", // Orange for >= 23k
      },
    },
    defaultVariants: {
      intent: "low",
    },
  },
);

interface ProductAddChartProps {
  chartData: { month: string; value: number }[];
}

const ProductAddChart: React.FC<ProductAddChartProps> = ({ chartData }) => {
  const maxVal = Math.max(...chartData.map((d) => d.value));

  return (
    <CustomCard title="Product Add by Month">
      {chartData.map((item) => {
        const intent = item.value < 23000 ? "low" : "high";

        const widthPercent = Math.max((item.value / maxVal) * 100, 2);

        return (
          <div key={item.month} className="flex items-center gap-4">
            <span className="w-8 text-sm font-medium text-gray-500">
              {item.month}
            </span>

            <div className="flex-1">
              <div
                className={cn(barVariants({ intent }))}
                style={{ width: `${widthPercent}%` }}
              />
            </div>

            <span className="w-16 text-right text-sm font-semibold text-gray-700">
              {item.value.toLocaleString()}
            </span>
          </div>
        );
      })}
    </CustomCard>
  );
};

export default ProductAddChart;
