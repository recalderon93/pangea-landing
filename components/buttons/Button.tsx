import type { ButtonHTMLAttributes, KeyboardEvent } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/classnameMerge";

type Props = {
  /** The text displayed inside the button */
  title?: string;
  onClick?: () => void;
  variant?: "brand" | "accent";
} & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * # Button
 *
 * @description Component that extend the basic <button> HTML element.
 * @example```
 * <Button title="Submit" />
 * ```
 */

export default function Button({
  title,
  onClick,
  variant = "brand",
  className = "",
  ...props
}: Props) {
  function handleOnKeyUp(e: KeyboardEvent<HTMLButtonElement>) {
    if ((e.key === "Enter" || e.key === " ") && onClick) {
      onClick(); // Manually call onClick for keyboard events
    }
  }
  return (
    <button
      onClick={onClick}
      onKeyUp={handleOnKeyUp}
      {...props}
      className={cn([buttonVariants({ variant }), className])}>
      {title}
    </button>
  );
}

/* tailwind */
const buttonVariants = cva(
  "rounded-full disabled:bg-shade-200 px-4 py-3 sm:px-6 sm:py-4 elevation-1 active:shadow-none heading-1 caption",
  {
    variants: {
      variant: {
        brand: "bg-teal-400 hover:bg-teal-500 active:bg-teal-500 text-white-50",
        accent: "bg-white-100 hover:bg-shade-100 text-teal-400",
      },
    },
  },
);

export type BaseButtonProps = Props;
