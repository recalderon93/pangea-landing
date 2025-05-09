import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type Props = {
  image: string | StaticImport;
  description: string;
};

export default function MenuServicePreview({ image, description }: Props) {
  return (
    <div className="flex flex-1 flex-col items-center gap-7 px-8 lg:px-0">
      <div className="bg-shade-200 max-w- relative aspect-[1.75] w-full max-w-[360px] overflow-hidden rounded-3xl md:max-w-[456px]">
        <Image alt="" src={image} fill className="object-cover" />
      </div>
      <p className="paragraph-1 max-w-[400px] text-center font-semibold text-teal-700 sm:max-w-[456px] lg:text-start lg:font-normal">
        {description}
      </p>
      <button className="paragraph-1 bolder cursor-pointer text-teal-700 underline lg:hidden">
        Learn More
      </button>
    </div>
  );
}
