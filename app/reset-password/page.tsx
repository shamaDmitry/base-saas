import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const ResetPasswordPage = () => {
  return (
    <section className="bg-background min-h-screen flex-col items-center justify-center flex p-5">
      <Card className="w-full max-w-164.5 min-h-164.5 border-none shadow-none rounded-[10px]">
        <CardHeader className="text-center pt-26">
          <Logo className="size-23 mb-14.5 m-auto text-primary" />

          <h1 className="text-[25px] font-semibold">Recover</h1>
        </CardHeader>

        <CardContent className="px-19.5">
          <form className="w-full">
            <div className="space-y-5 mb-6.25">
              <Field>
                <FieldLabel htmlFor="email" className="text-base font-normal">
                  Email Address
                </FieldLabel>

                <Input
                  inputSize="lg"
                  id="email"
                  type="text"
                  placeholder="example@gmail.com"
                />
              </Field>
            </div>

            <Button size="2xl" className="w-full mb-7.5">
              Reset Your Password
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default ResetPasswordPage;
