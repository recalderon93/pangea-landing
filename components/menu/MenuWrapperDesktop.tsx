import { PropsWithChildren } from "react";

type Props = {
  onCloseMenu?: () => void;
  isOpened?: boolean;
} & PropsWithChildren;

export default function MenuWrapperDesktop({
  isOpened = false,
  onCloseMenu,
  children,
}: Props) {
  return (
    <div
      className={`${isOpened ? "animate-fade-in" : "animate-fade-out"} fixed hidden h-screen w-screen overflow-clip backdrop-blur-xs sm:top-26 md:top-30 lg:block`}>
      <div
        className={`bg-white-50 ${isOpened ? "animate-slide-down" : "animate-slide-up"} w-full p-30`}>
        {children}
      </div>
      <div onMouseEnter={onCloseMenu} className="h-full w-full" />
    </div>
  );
}
