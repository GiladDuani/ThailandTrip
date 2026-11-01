import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-lg border border-[#D8CFC0] bg-white px-3.5 py-2 text-sm text-[#142321] placeholder:text-[#6B7E7A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4F4A] focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
