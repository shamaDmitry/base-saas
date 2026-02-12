import AnalyticCard, { IconVariant } from "@/components/AnalyticCard";
import Heading from "@/components/custom/Heading";
import BagIcon from "@/components/icons/BagIcon";
import GameIcon from "@/components/icons/GameIcon";
import HeartIcon from "@/components/icons/HeartIcon";
import WorkIcon from "@/components/icons/WorkIcon";
import { v4 as uuidv4 } from "uuid";

const cardData = [
  {
    iconVariant: "default",
    id: uuidv4(),
    title: "Save Products",
    value: "178+",
    icon: <HeartIcon />,
  },
  {
    iconVariant: "warning",
    id: uuidv4(),
    title: "Stock Products",
    value: "20+",
    icon: <GameIcon />,
  },
  {
    iconVariant: "destructive",
    id: uuidv4(),
    title: "Sales Products",
    value: "190+",
    icon: <BagIcon />,
  },
  {
    iconVariant: "secondary",
    id: uuidv4(),
    title: "Job Application",
    value: "12+",
    icon: <WorkIcon />,
  },
];

const DashboardPage = () => {
  return (
    <div>
      <Heading className="mb-7.5">Dashboard</Heading>

      <div className="flex w-full *:flex-1 gap-7.5">
        {cardData.map((item) => {
          return (
            <AnalyticCard
              key={item.id}
              iconVariant={item.iconVariant as IconVariant}
              data={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DashboardPage;
