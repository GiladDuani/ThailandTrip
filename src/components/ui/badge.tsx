import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B4F4A] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#0B4F4A] text-[#FAF7F2]",
        secondary:
          "border-[#E2D9C8] bg-[#F5F0E6] text-[#1D3532]",
        destructive:
          "border-[#FECACA] bg-[#FEF2F2] text-[#991B1B]",
        warning:
          "border-[#FDE68A] bg-[#FFFBEB] text-[#92400E]",
        success:
          "border-[#A7F3D0] bg-[#ECFDF5] text-[#065F46]",
        outline:
          "border-[#D8CFC0] text-[#142321] bg-white",
        shabbat:
          "border-[#F59E0B] bg-[#FEF3C7] text-[#92400E]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
