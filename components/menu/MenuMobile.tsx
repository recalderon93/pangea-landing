import { cva } from "class-variance-authority";
import { cn } from "../../lib/classnameMerge";
import MenuWrapperMobile from "./MenuWrapperMobile";
import NavigationItem from "../Navigation/NavigationItem";

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
  return (
    <MenuWrapperMobile
      isOpened={isOpened}
      onCloseMenu={onCloseMenu}
      onClickCTA={onClickCTA}>
      <nav data-testid="mobile-navigation">
        <NavigationItem
          title="Solutions"
          className={cn(styles({ showBottomBorder: true }))}
        />
        <NavigationItem
          title="Who We Are"
          href="/"
          className={cn(styles({ showBottomBorder: true }))}
        />
        <NavigationItem
          title="Our Work"
          href="/"
          className={cn(styles({ showBottomBorder: true }))}
        />
      </nav>
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
