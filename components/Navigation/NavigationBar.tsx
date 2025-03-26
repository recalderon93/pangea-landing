import NavigationItem from "./NavigationItem";

export type Props = {
  color?: "brand" | "accent";
  onHoverOption?: (input: string) => void;
  onClickOption?: (input: string) => void;
  options: {
    title: string;
    href?: string;
  }[];
  currentOption: string | null;
};

const NavigationBar = ({
  onHoverOption,
  onClickOption,
  color = "brand",
  options,
  currentOption,
}: Props) => (
  <nav
    className="hidden h-full grow items-center justify-center gap-8 lg:flex xl:gap-14"
    data-testid="desktop-navigation">
    {options.map((option) => (
      <NavigationItem
        key={option.title}
        onMouseEnter={() => onHoverOption?.(option.title)}
        onClick={() => onClickOption?.(option.title)}
        href={option.href}
        color={color}
        title={option.title}
        isOpened={option.title === currentOption}
        className="min-h-full"
      />
    ))}
  </nav>
);

export default NavigationBar;
