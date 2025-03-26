"use client";
import { cva } from "class-variance-authority";
import { useScrollThreshold } from "../../hooks/useScrolledThreshold";
import { cn } from "../../lib/classnameMerge";
import Menu from "../menu/Menu";
import PangeaLogo from "../Icons/PangeLogo";
import BurgerMenu from "../Icons/BurgerMenu";
import Button from "../buttons/Button";
import { useState } from "react";
import NavigationBar from "../Navigation/NavigationBar";

export default function Header() {
  const isScrolled = useScrollThreshold(50); // Detects scrolling past 50px
  const [currentOption, setCurrentOption] = useState<string | null>(null);
  const color = isScrolled ? "brand" : "accent";

  function onCloseMenu() {
    setCurrentOption(null);
  }

  const navigationOptions = [
    { title: "Solutions" },
    { title: "Who We Are", href: "#" },
    { title: "Our Work", href: "#" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full">
      <header className={cn(headerStyles({ isScrolled }))}>
        <div className="sm:w-46" onMouseEnter={onCloseMenu}>
          <PangeaLogo color={isScrolled ? "green" : "white"} />
        </div>
        <NavigationBar
          color={color}
          onClickOption={setCurrentOption}
          onHoverOption={setCurrentOption}
          options={navigationOptions}
          currentOption={currentOption}
        />
        <div className="flex justify-end sm:w-44" onMouseEnter={onCloseMenu}>
          <BurgerMenu
            isActive={currentOption === "Menu"}
            color={isScrolled ? "green" : "white"}
            className="lg:hidden"
            onClick={() => setCurrentOption("Menu")}
          />
          <Button
            className="hidden lg:block"
            title="GET STARTED"
            variant={color}
          />
        </div>
      </header>
      <Menu currentMenu={currentOption} onCloseMenu={onCloseMenu} />
    </div>
  );
}

const headerStyles = cva(
  "sticky top-0 w-full h-18 sm:h-26 md:h-30 px-6 flex items-center sm:px-8 lg:px-20 transition-all duration-500 ease-in-out justify-between z-50 -mb-18 sm:-mb-26 md:-mb-30 ",
  {
    variants: {
      isScrolled: {
        true: "bg-white-100 elevation-1 backdrop-blur-md", // Background change & subtle shadow
        false: "bg-transparent shadow-none", // Default transparent header
      },
    },
  },
);
