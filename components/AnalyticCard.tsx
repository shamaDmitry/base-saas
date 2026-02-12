import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { FC } from "react";

const iconVariants = cva(
  "flex items-center justify-center rounded-full size-12 shrink-0",
  {
    variants: {
      variant: {
        default: "text-action-blue bg-action-blue/10",
        warning: "text-warning-gold bg-warning-gold/10",
        destructive: "text-coral-accent bg-coral-accent/10",
        secondary: "text-deep-indigo bg-deep-indigo/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type IconVariant = VariantProps<typeof iconVariants>["variant"];

export interface AnalyticCardProps {
  data: {
    id: string;

    title: string;
    value: string | number;
    icon?: React.ReactNode;
  };
  iconVariant?: IconVariant;
}

const AnalyticCard: FC<AnalyticCardProps> = ({ data, iconVariant }) => {
  const IconElement = data.icon ? data.icon : "📊";

  return (
    <Card className="bg-white shadow-none border-0 rounded-[10px] flex flex-col sm:flex-row items-center justify-center gap-5.75 p-7">
      <div
        className={cn(
          "size-15 flex items-center justify-center rounded-full",
          iconVariants({ variant: iconVariant }),
        )}
      >
        {IconElement}
      </div>

      <div className="flex flex-col gap-px">
        <h3 className="text-[22px] font-extrabold">{data.value}</h3>
        <p className="text-sm text-foreground">{data.title}</p>
      </div>
    </Card>
  );
};

export default AnalyticCard;
