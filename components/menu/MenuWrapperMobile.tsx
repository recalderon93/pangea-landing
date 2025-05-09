"use client";
import { type PropsWithChildren } from "react";
import useAvoidScroll from "../../hooks/useAvoidScroll";
import MenuHeader from "./MenuHeader";

type Props = {
  isOpened?: boolean;
  onCloseMenu?: () => void;
  onClickCTA?: () => void;
} & PropsWithChildren;

export default function MenuMobile({
  isOpened = false,
  children,
  onCloseMenu,
}: Props) {
  useAvoidScroll(isOpened);

  return (
    <div
      className={`${isOpened ? "animate-fade-in" : "animate-fade-out"} fixed top-18 bottom-0 w-full backdrop-blur-xs sm:top-26 md:top-30 lg:hidden`}>
      <div
        className={`${isOpened ? "animate-slide-in-left" : "animate-slide-out-left"} flex h-full w-full flex-col bg-white`}>
        <div className="flex flex-1 flex-col justify-end px-3 py-10">
          <MenuHeader onClose={onCloseMenu} />
          {children}
        </div>
      </div>
    </div>
  );
}
