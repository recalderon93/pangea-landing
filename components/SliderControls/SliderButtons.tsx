import { cva } from "class-variance-authority";
import Chevron from "../Icons/Chevron";

type Props = {
  onGoNext: () => void;
  onGoPrevious: () => void;
  showControls?: boolean;
  nextDisabled?: boolean;
  previousDisabled?: boolean;
  color: "brand" | "accent";
};

export default function SliderButtons({
  onGoNext,
  onGoPrevious,
  showControls = true,
  nextDisabled = false,
  previousDisabled = false,
  color,
}: Props) {
  if (!showControls) return <div className="hidden" />;

  return (
    <div className="flex gap-2">
      <button
        disabled={previousDisabled}
        onClick={onGoPrevious}
        className={buttonVariants({ color, direction: "left" })}>
        <Chevron direction="left" width={18} height={9} color="accent" />
      </button>
      <button
        disabled={nextDisabled}
        onClick={onGoNext}
        className={buttonVariants({ color, direction: "right" })}>
        <Chevron direction="right" width={18} height={9} color="accent" />
      </button>
    </div>
  );
}

const buttonVariants = cva(
  "border-white-50 flex aspect-square w-10 items-center justify-center rounded-full border-[3px] bg-teal-400 pr-1 shadow hover:shadow-none disabled:opacity-70",
  {
    variants: {
      color: {
        brand: " border-white-50 bg-teal-400",
        accent: "border-teal-500 bg-white-50",
      },
      direction: {
        left: "",
        right: "pl-1",
      },
    },
  },
);
