import React from "react";
import { cn } from "@/lib/utils"; // Adjust this path based on your project structure

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}

const Heading = ({
  level = "h1",
  children,
  className,
  ...props
}: HeadingProps) => {
  const baseStyles = {
    h1: "text-2xl font-bold", // 24px
    h2: "text-xl font-bold", // 20px
    h3: "text-lg font-semibold", // 18px
    h4: "text-base font-semibold", // 16px
    h5: "text-sm font-medium", // 14px
    h6: "text-xs font-medium uppercase tracking-wider", // 12px
  };

  const Tag = level;

  return (
    <Tag className={cn(baseStyles[level], className)} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
