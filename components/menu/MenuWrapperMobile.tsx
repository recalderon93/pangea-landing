"use client";
import { type PropsWithChildren } from "react";
import Button from "../buttons/Button";
import useAvoidScroll from "../../hooks/useAvoidScroll";
import CloseIcon from "../Icons/Close";

type Props = {
  isOpened?: boolean;
  onCloseMenu?: () => void;
  onClickCTA?: () => void;
} & PropsWithChildren;

export default function MenuWrapperMobile({
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
        <div className="flex justify-end px-3 py-10">
          <button
            className="hover:bg-shade-50 flex aspect-square w-8 items-center justify-center rounded-full active:inset-shadow-sm"
            onClick={onCloseMenu}>
            <CloseIcon />
          </button>
        </div>
        <div className="h-full overflow-y-scroll px-6">{children}</div>
        <div className="flex items-center justify-center px-10 py-5">
          <Button title="GET STARTED" variant="brand" className="w-full" />
        </div>
      </div>
    </div>
  );
}
