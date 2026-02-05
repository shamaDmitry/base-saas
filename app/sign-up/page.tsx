import SignUpForm from "@/components/auth/SignUpForm";
import FacebookIcon from "@/components/icons/Facebook";
import GoogleIcon from "@/components/icons/Google";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { FieldSeparator } from "@/components/ui/field";
import Image from "next/image";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <section className="container flex min-h-screen w-full bg-background flex-col md:flex-row">
      <div className="flex-1 md:max-w-md min-h-screen bg-white flex flex-col justify-center items-center md:p-12 p-4">
        <Logo className="text-primary size-23 mb-10" />

        <h1 className="text-2xl font-semibold mb-10">Sign Up</h1>

        <div className="flex gap-5.5 items-center justify-between w-full mb-6.25">
          <Button variant="secondary" className="flex-1">
            <GoogleIcon />
            Google
          </Button>

          <Button variant="secondary" className="flex-1">
            <FacebookIcon />
            Facebook
          </Button>
        </div>

        <FieldSeparator className="w-full mb-7.5">Or</FieldSeparator>

        <SignUpForm />

        <p className="text-center flex flex-wrap gap-2">
          Already have an account?
          <Link href="/login" className="text-primary">
            Log in
          </Link>
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center md:p-12 p-4">
        <Image
          src="/images/signup-bg.svg"
          alt="signup-bg"
          width={694}
          height={427}
        />
      </div>
    </section>
  );
};

export default SignUpPage;
