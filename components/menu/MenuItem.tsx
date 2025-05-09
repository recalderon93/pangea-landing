import { cva } from "class-variance-authority";
import ArrowIcon from "../Icons/Arrow";
import Link from "next/link";

type Props =
  | {
      showArrow?: boolean;
      isSelected?: boolean;
      title: string;
      onMouseEnter?: () => void;
      onClick: () => void;
      role: "button";
    }
  | {
      showArrow?: boolean;
      isSelected?: boolean;
      title: string;
      onMouseEnter?: () => void;
      role: "link";
      href: string;
    };

export default function MenuItem(input: Props) {
  if (input.role === "link") {
    const { href, title, isSelected, onMouseEnter, showArrow } = input;

    return (
      <Link
        href={href}
        className={wrapper({ isSelected })}
        onMouseEnter={onMouseEnter}>
        <p key={title} className={text({ isSelected })}>
          {title}
        </p>
        {showArrow ? <ArrowIcon className={arrow({ isSelected })} /> : <div />}
      </Link>
    );
  }

  const { isSelected, title, onMouseEnter, showArrow, onClick } = input;

  return (
    <button
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className={wrapper({ isSelected })}>
      <p key={input.title} className={text({ isSelected })}>
        {title}
      </p>
      {showArrow ? (
        <ArrowIcon className="fill-white-100 hidden aspect-square w-7 -rotate-45 group-hover:block group-active:block" />
      ) : (
        <div className="grow-0" />
      )}
    </button>
  );
}

const wrapper = cva(
  "group flex h-12 sm:h-20 w-full cursor-pointer rounded-lg sm:rounded-xl items-center justify-between lg:rounded-2xl xl:rounded-3xl px-3 sm:px-6 md:px-9 hover:bg-teal-700 xl:h-22",
  {
    variants: {
      isSelected: {
        true: "bg-teal-700",
        false: "",
      },
    },
  },
);

const text = cva(
  "group-hover:text-white-50 group-aria-selected:text-white-50 font-semibold text-teal-700 text-[24px] leading-[32px] lg:text-[28px] lg:leading-[40px] xl:text-[40px] xl:leading-[48px]",
  {
    variants: {
      isSelected: {
        true: "text-white-50",
        false: "",
      },
    },
  },
);

const arrow = cva(
  "fill-white-100 aspect-square w-7 -rotate-45  hidden group-hover:block group-active:block",
);
