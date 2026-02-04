import LoginForm from "@/components/auth/LoginForm";
import FacebookIcon from "@/components/icons/Facebook";
import GoogleIcon from "@/components/icons/Google";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { FieldSeparator } from "@/components/ui/field";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <section className="container flex min-h-screen w-full bg-[#FAFAFA] flex-col md:flex-row">
      <div className="flex-1 md:max-w-md min-h-screen bg-white flex flex-col justify-center items-center p-12">
        <Logo className="text-primary size-23 mb-10" />

        <h1 className="text-2xl font-semibold mb-10">Log in</h1>

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

        <LoginForm />

        <p className="text-center flex flex-wrap gap-2">
          Don’t have account yet?
          <Link href="sign-up" className="text-primary">
            New Account
          </Link>
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <Image
          src="/images/login-bg.svg"
          alt="login-bg"
          width={647}
          height={602}
        />
      </div>
    </section>
  );
};

export default LoginPage;
