import Link from "next/link";
import Chevron from "../Icons/Chevron";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/classnameMerge";

type Props = {
  href?: string;
  title: string;
  color?: "brand" | "accent";
  isOpened?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  className?: string;
};

export default function NavigationItem({
  title,
  href,
  onClick,
  onMouseEnter,
  color = "brand",
  isOpened = false,
  className,
}: Props) {
  const style = cn([itemStyle({ color }), className]);

  if (!href) {
    return (
      <button className={style} onClick={onClick} onMouseEnter={onMouseEnter}>
        {title}
        <Chevron color={color} direction={isOpened ? "up" : "down"} />
      </button>
    );
  }

  return (
    <Link className={style} href={href || "#"} onMouseEnter={onMouseEnter}>
      {title}
    </Link>
  );
}

const itemStyle = cva(
  "flex items-center gap-2 paragraph-1 bold cursor-pointer",
  {
    variants: {
      color: {
        accent: "text-white-100",
        brand: "text-teal-400",
      },
    },
  },
);

export type NavigationItemProps = Props;
