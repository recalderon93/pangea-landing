import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string | StaticImport;
};

export default function ServiceItem({ description, image, title }: Props) {
  return (
    <div className="relative flex h-[552px] min-w-[320px] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-2xl">
      <div className="absolute top-0 right-0 left-0 z-10 min-h-[240] rounded-2xl bg-teal-400 px-6 py-10">
        <h3 className="h4 bold text-green-400">{title}</h3>
        <p className="paragraph-2 text-white-50">{description}</p>
      </div>
      <div className="relative h-[65%]">
        <Image
          src={image}
          alt={title}
          className="object-cover object-[60%_10%]"
          fill
        />
      </div>
    </div>
  );
}

export type ServiceItemProps = Props;
