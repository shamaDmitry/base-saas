import LoginForm from "@/components/auth/LoginForm";
import Logo from "@/components/logo";
import Image from "next/image";

const LoginPage = () => {
  return (
    <section className="container flex min-h-screen w-full bg-[#FAFAFA]">
      <div className="flex-1 max-w-md min-h-screen bg-white">
        <Logo className="text-primary size-23" />

        <LoginForm />
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
