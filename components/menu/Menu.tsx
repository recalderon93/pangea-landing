import MenuMobile from "./MenuMobile";
import MenuWrapperDesktop from "./MenuWrapperDesktop";

type Props = {
  onCloseMenu?: () => void;
  currentMenu?: string | null;
};
const Menu = ({ currentMenu, onCloseMenu }: Props) => (
  <>
    <MenuWrapperDesktop
      onCloseMenu={onCloseMenu}
      isOpened={currentMenu === "Solutions"}
    />
    <MenuMobile isOpened={currentMenu === "Menu"} onCloseMenu={onCloseMenu} />
  </>
);

export default Menu;
