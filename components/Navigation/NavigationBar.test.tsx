import { render, fireEvent } from "@testing-library/react";
import NavigationBar from "./NavigationBar";

describe("Component/NavigationBar", () => {
  const option1 = {
    title: "Option 1",
    href: "/option1",
  };
  const option2 = {
    title: "Option 2",
    href: "/option2",
  };
  const option3 = {
    title: "Option 3",
    href: undefined,
  };

  const onHoverOption = jest.fn();
  const onClickOption = jest.fn();

  const options = [option1, option2, option3];

  it("Should render NavigationBar correctly", () => {
    const { getByRole } = render(
      <NavigationBar options={options} currentOption={null} />,
    );

    const navigationBar = getByRole("navigation");

    expect(navigationBar).toBeDefined();
  });

  it("Should render the correct number of NavigationItem components", () => {
    const { getByText } = render(
      <NavigationBar options={options} currentOption={null} />,
    );

    options.forEach((option) => {
      expect(getByText(option.title)).toBeDefined();
    });
  });

  it("Should call onHoverOption when the mouse enters an option", () => {
    const { getByText } = render(
      <NavigationBar
        options={options}
        currentOption={null}
        onHoverOption={onHoverOption}
      />,
    );

    options.forEach((option) => {
      fireEvent.mouseEnter(getByText(option.title));
    });

    expect(onHoverOption).toHaveBeenCalledTimes(options.length);
  });

  it("Should render and call onClickOption when an option with role='button' is clicked", () => {
    const { getByText } = render(
      <NavigationBar
        options={options}
        currentOption={null}
        onClickOption={onClickOption}
      />,
    );

    let counter = 0;

    options.forEach((option) => {
      if (option.href) {
        return;
      }

      counter++;
      fireEvent.click(getByText(option.title));
    });

    expect(onClickOption).toHaveBeenCalledTimes(counter);
  });

  it("Should render a button with a chevron icon if the current Item has the same title that the button option", () => {
    const { getByTestId } = render(
      <NavigationBar options={options} currentOption={option3.title} />,
    );
    const chevron = getByTestId("chevron-up");

    expect(chevron).toBeDefined();
  });
});
