import { PropsWithChildren, useState } from "react";
import useAvoidScroll from "../../hooks/useAvoidScroll";
import data from "../Services/data";
import MenuItem from "./MenuItem";
import MenuServicePreview from "./MenuServicePreview";
import MenuFooterDesktop from "./Footer/MenuFooterDesktop";
import MenuHeader from "./MenuHeader";

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
        <MenuHeader onClose={onCloseMenu} />
        <div className="flex flex-1">
          <div className="flex flex-1/3 flex-col gap-7">
            <MenuServicePreview
              image={selectedService.image}
              description={selectedService.description}
            />
          </div>
          <div className="flex flex-2/3 pl-10">
            <div className="flex w-full flex-col gap-3">
              {data.map((service) => (
                <MenuItem
                  key={service.title}
                  title={service.title}
                  isSelected={selectedService.id === service.id}
                  onMouseEnter={() => setSelectedService(service)}
                  href={service.href}
                  showArrow
                  role="link"
                />
              ))}
            </div>
          </div>
        </div>
        <MenuFooterDesktop />
      </div>
    </div>
  );
}
