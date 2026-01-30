import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";
import Link from "next/link";

const AccountCreated = () => {
  return (
    <div>
      <div className="size-46 bg-secondary rounded-full flex items-center justify-center mb-4">
        <ThumbsUp className="size-20" />
      </div>

      <p>Your account successfully created.</p>

      <Button asChild>
        <Link href="/">Go to Home</Link>
      </Button>
    </div>
  );
};

export default AccountCreated;
