import { cva } from "class-variance-authority";
import ImagePlaceholder from "@/public/project-item-placeholder.png";
import Image from "next/image";
import { cn } from "../../lib/classnameMerge";
import ArrowIcon from "../Icons/Arrow";

type Props = {
  projectId: string;
  name?: string;
  description?: string;
  image?: string;
  className?: string;
  isSquare?: boolean;
};

export default function ProjectItem({
  isSquare = true,
  image = "",
  className = "",
}: Props) {
  const style = cn(wrapperStyle({ isSquare }), className);

  return (
    <div className={style}>
      <Image
        src={image || ImagePlaceholder}
        alt=""
        fill
        // style={{ objectFit: "cover" }}
      />
      <button className={buttonStyle}>
        <p className="caption bold text-white-50">View Project</p>
        <div className="bg-white-100 flex aspect-square w-8 items-center justify-center rounded-full">
          <ArrowIcon className="fill-shade-200" />
        </div>
      </button>
    </div>
  );
}

const buttonStyle =
  "p-1 md:p-[6px] rounded-full pl-4 md:pl-5 absolute right-6 bottom-6 flex items-center gap-4 md:right-8 md:bottom-8 backdrop-blur shadow-[-1px_2px_4px_0px_rgba(0,0,0,0.4)] bg-[linear-gradient(91deg,rgba(52,59,58,0.20)_0%,rgba(52,59,58,0.10)_100%)] active:shadow-none";

const wrapperStyle = cva(
  "rounded-3xl shadow-md lg:max-w-[624px] overflow-hidden relative max-w-[400] w-full",
  {
    variants: {
      isSquare: {
        true: "aspect-square",
        false: "",
      },
    },
    defaultVariants: {
      isSquare: true,
    },
  },
);
