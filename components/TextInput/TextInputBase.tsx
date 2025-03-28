"use client";
import { cva } from "class-variance-authority";
import { InputHTMLAttributes } from "react";
import { cn } from "../../lib/classnameMerge";

type Props = {
  color?: "brand" | "accent";
} & InputHTMLAttributes<HTMLInputElement>;

export default function TextInputBase({
  className = "",
  color = "brand",
  ...props
}: Props) {
  const styles = cn([baseStyles({ color }), className]);

  return <input type="email" className={styles} {...props} />;
}

const baseStyles = cva(
  "border-[2px] placeholder-shade-50 rounded-full h-10 sm:h-14 paragraph-1 px-6 sm:px-8 min-w-66 sm:min-w-86",
  {
    variants: {
      color: {
        brand:
          "border-teal-400 text-teal-400 placeholder-shade-300 outline-teal-600",
        accent:
          "border-white-100 text-white-50 placeholder-shade-50 outline-shade-50",
      },
    },
  },
);
