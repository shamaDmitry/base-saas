import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ellipsis } from "lucide-react";
import { FC, PropsWithChildren } from "react";

interface CustomCardProps extends PropsWithChildren {
  title: string;
  action?: React.ReactNode;
}

const CustomCard: FC<CustomCardProps> = ({
  action = (
    <Button variant="ghost" className="btn">
      <Ellipsis />
    </Button>
  ),
  title,
  children,
}) => {
  return (
    <Card className="w-full shadow-none border-none rounded-[10px]">
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="text-lg font-bold text-foreground/70">
            {title}
          </CardTitle>

          {action}
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">{children}</CardContent>
    </Card>
  );
};

export default CustomCard;
