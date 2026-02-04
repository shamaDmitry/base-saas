import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      inputSize: {
        default: "h-[42px] px-5 pt-3 pb-4 text-base",
        lg: "h-[50px] text-base p-4",
      },
    },
    defaultVariants: {
      inputSize: "default",
    },
  },
);

function Input({
  className,
  type = "text",
  inputSize = "default",
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-size={inputSize}
      data-slot="input"
      className={cn(inputVariants({ inputSize, className }))}
      {...props}
    />
  );
}

export { Input, inputVariants };
