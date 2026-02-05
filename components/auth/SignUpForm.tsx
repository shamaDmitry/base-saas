"use client";

import { useState } from "react";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Eye, EyeOff } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="w-full">
      <div className="space-y-5 mb-6.25">
        <Field>
          <FieldLabel htmlFor="email">Email Address</FieldLabel>

          <Input
            inputSize="lg"
            id="email"
            type="text"
            placeholder="example@gmail.com"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>

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
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="cursor-pointer font-normal">
            By creating an account you agree to the terms of use and our privacy
            policy.
          </Label>
        </div>
      </Field>

      <Button size="lg" className="w-full mb-7.5">
        Create account
      </Button>
    </form>
  );
};

export default SignUpForm;
