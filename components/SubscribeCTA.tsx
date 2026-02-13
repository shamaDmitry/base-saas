import { Button } from "@/components/ui/button";
import SubscribeCTAImg from "@/components/SubscribeCTAImg";

const SubscribeCTA = () => {
  return (
    <div className="h-40.25 mt-9.25 relative rounded-4xl bg-[#80ABFF]/10 p-3.75 flex items-center justify-end flex-col">
      <SubscribeCTAImg className="h-37.5 shrink-0" />

      <Button size="sm" className="w-full">
        Upgrade Now
      </Button>
    </div>
  );
};

export default SubscribeCTA;
