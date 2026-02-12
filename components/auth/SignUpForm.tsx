"use client";

import { useState } from "react";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Eye, EyeOff } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import FormLabel from "./FormLabel";
import Link from "next/link";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="w-full">
      <div className="space-y-5 mb-6.25">
        <Field>
          <FormLabel htmlFor="name">Full Name</FormLabel>

          <Input
            inputSize="lg"
            id="name"
            type="text"
            placeholder="Enter your full name"
          />
        </Field>

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
          <FormLabel htmlFor="username">Username</FormLabel>

          <Input
            inputSize="lg"
            id="name"
            type="text"
            placeholder="Enter your full name"
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
        <div className="flex gap-2">
          <Checkbox id="agree" className="size-3.75 mt-1.5 mr-0.75" />

          <Label
            htmlFor="agree"
            className="cursor-pointer font-normal block leading-tight text-base"
          >
            By creating an account you agree to the
            <Link
              href="#"
              className="text-primary mx-1 underline hover:no-underline"
            >
              terms of use
            </Link>
            and our
            <Link
              href="#"
              className="text-primary mx-1 underline hover:no-underline"
            >
              privacy policy.
            </Link>
          </Label>
        </div>
      </Field>

      <Button size="2xl" className="w-full mb-7.5">
        Create account
      </Button>
    </form>
  );
};

export default SignUpForm;
