import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4F4A] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer min-h-[44px]",
  {
    variants: {
      variant: {
        default:
          "bg-[#0B4F4A] text-[#FAF7F2] shadow-sm hover:bg-[#083B37]",
        destructive:
          "bg-[#B91C1C] text-white shadow-sm hover:bg-[#991B1B]",
        outline:
          "border border-[#D8CFC0] bg-white text-[#142321] shadow-xs hover:bg-[#F3EFE6] hover:border-[#B8AD9B]",
        secondary:
          "bg-[#EFE9DC] text-[#142321] hover:bg-[#E4DCCB]",
        ghost:
          "text-[#142321] hover:bg-[#EFE9DC]",
        gold:
          "bg-[#B45309] text-white shadow-sm hover:bg-[#92400E]",
        link: "text-[#0B4F4A] underline-offset-4 hover:underline min-h-0",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs min-h-[38px]",
        lg: "h-12 rounded-xl px-6 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
