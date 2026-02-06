"use client";

import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import FormLabel from "@/components/auth/FormLabel";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="w-full">
      <div className="space-y-5 mb-6.25">
        <Field>
          <FormLabel htmlFor="email">Email Address</FormLabel>

          <Input
            inputSize="lg"
            id="email"
            type="text"
            placeholder="example@gmail.com"
          />
        </Field>

        <Field>
          <FormLabel htmlFor="password">Password</FormLabel>

          <div className="relative flex items-center">
            <Input
              inputSize="lg"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="pr-10"
            />

            <Button
              className="absolute right-2"
              type="button"
              variant="ghost"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </Button>
          </div>
        </Field>
      </div>

      <Field
        orientation={"horizontal"}
        className="mb-5 justify-between gap-4 flex-col md:flex-row"
      >
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="cursor-pointer font-normal">
            Remember me
          </Label>
        </div>

        <Link href="/reset-password" className="text-primary">
          Reset Password?
        </Link>
      </Field>

      <Button size="lg" className="w-full mb-7.5">
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
