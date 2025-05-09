import { cva } from "class-variance-authority";
import { cn } from "../../lib/classnameMerge";
import MenuWrapperMobile from "./MenuWrapperMobile";
import NavigationItem from "../Navigation/NavigationItem";
import MenuNavbarMobile from "./MenuNavbarMobile";
import MenuServicePreview from "./MenuServicePreview";
import MenuServiceMobile from "./MenuServiceMobile";

type Props = {
  isOpened?: boolean;
  onCloseMenu?: () => void;
  onClickCTA?: () => void;
};

export default function MenuMobile({
  onCloseMenu,
  onClickCTA,
  isOpened = false,
}: Props) {
  if (!isOpened) return null;

  return (
    <MenuWrapperMobile
      isOpened={isOpened}
      onCloseMenu={onCloseMenu}
      onClickCTA={onClickCTA}>
      {/* <MenuNavbarMobile /> */}
      <MenuServiceMobile />
    </MenuWrapperMobile>
  );
}

const styles = cva("h-12 w-full", {
  variants: {
    showBottomBorder: {
      true: "border-b-[1px] border-shade-100",
      false: "",
    },
  },
});
