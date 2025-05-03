import { PropsWithChildren, useState } from "react";
import Button from "../buttons/Button";
import PangeaLogo from "../Icons/PangeLogo";
import useAvoidScroll from "../../hooks/useAvoidScroll";
import ArrowIcon from "../Icons/Arrow";
import data from "../Services/data";
import Image from "next/image";

type Props = {
  onCloseMenu?: () => void;
  isOpened?: boolean;
} & PropsWithChildren;

export default function MenuWrapperDesktop({
  isOpened = false,
  onCloseMenu,
}: Props) {
  const [selectedService, setSelectedService] = useState<(typeof data)[0]>(
    data[0],
  );
  useAvoidScroll(isOpened);

  if (!isOpened) return null;

  return (
    <div
      className={`${isOpened ? "animate-fade-in" : "animate-fade-out"} fixed bottom-0 hidden w-full overflow-clip sm:top-26 md:top-30 lg:flex`}>
      <div
        className={`bg-white-50 ${isOpened ? "animate-slide-down" : "animate-slide-up"} flex w-full flex-1 flex-col px-20 pt-20`}>
        <div className="mb-10 flex w-full justify-between">
          <PangeaLogo color="green" />
          <button
            className="h5 text-shade-200 hover:text-shade-400 active:text-shade-400 cursor-pointer p-2"
            onClick={onCloseMenu}>
            Close
          </button>
        </div>
        <div className="flex flex-1">
          <div className="flex flex-1/3 flex-col gap-7">
            <div className="bg-shade-200 relative aspect-[1.75] w-full max-w-[456px] overflow-hidden rounded-3xl">
              <Image
                alt=""
                src={selectedService.image}
                fill
                className="object-cover"
              />
            </div>
            <p className="paragraph-2 xl:pa max-w-[456px]">
              {selectedService.description}
            </p>
          </div>
          <div className="flex flex-2/3 pl-10">
            <div className="flex w-full flex-col gap-3">
              {data.map((service) => (
                <div
                  key={service.title}
                  aria-selected={selectedService.id === service.id}
                  onMouseEnter={() => setSelectedService(service)}
                  className="group flex h-20 w-full cursor-pointer items-center justify-between rounded-3xl px-9 hover:bg-teal-700 aria-selected:bg-teal-700 xl:h-22">
                  <p
                    key={service.title}
                    className="group-hover:text-white-50 group-aria-selected:text-white-50 font-semibold text-teal-700 lg:text-[28px] lg:leading-[40px] xl:text-[40px] xl:leading-[48px]">
                    {service.title}
                  </p>
                  <ArrowIcon className="fill-white-100 hidden aspect-square w-7 -rotate-45 group-hover:block group-aria-selected:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t-shade-50 flex h-54 w-full items-center justify-between border-t-3">
          <h2 className="text-shade-100 text-[40px] leading-[48px] xl:text-[56px] xl:leading-[64px]">
            Solutions
          </h2>
          <div className="flex items-center gap-6">
            <p className="h5 text-teal-700">
              Want to know more about our pricing?
            </p>
            <Button title="BOOK A CALL" variant="brand" />
          </div>
        </div>
      </div>
    </div>
  );
}
