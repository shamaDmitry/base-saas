import SuccessConfetti from "@/components/auth/SuccessConfetti";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThumbsUp } from "lucide-react";
import Link from "next/link";

const AccountCreated = () => {
  return (
    <section className="bg-background min-h-screen flex-col items-center justify-center flex p-5">
      <Card className="w-full border-none shadow-none rounded-[10px] aspect-square max-w-181.5 flex items-center justify-center">
        <CardContent className="px-19.5 flex flex-col items-center justify-center">
          <SuccessConfetti />

          <div className="size-46 bg-primary/5 rounded-full flex items-center justify-center mb-4">
            <ThumbsUp className="size-20 text-primary" />
          </div>

          <p>Your account successfully created.</p>

          <Button asChild size="lg">
            <Link href="/">Go to Home</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default AccountCreated;
