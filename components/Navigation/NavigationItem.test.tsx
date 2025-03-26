// Write unit testing for NavigationItem component

import { render, fireEvent } from "@testing-library/react";
import NavigationItem from "./NavigationItem";

describe("Component/NavigationItem", () => {
  const title = "Navigation Option";
  const href = "/";
  const onClick = jest.fn();
  const onMouseEnter = jest.fn();

  beforeEach(() => {
    onClick.mockClear();
    onMouseEnter.mockClear();
  });

  it("Should render NavigationItem correctly", () => {
    const { getByText } = render(<NavigationItem title={title} />);
    const navigationItem = getByText(title);

    expect(navigationItem).toBeDefined();
  });

  it("Should render a link component if href is provided", () => {
    const { getByRole } = render(<NavigationItem title={title} href={href} />);
    const navigationItem = getByRole("link");

    expect(navigationItem).toBeDefined();
  });

  it("Should render a button component if href is not provided", () => {
    const { getByRole } = render(<NavigationItem title={title} />);

    const navigationItem = getByRole("button");

    expect(navigationItem).toBeDefined();
  });

  it('Should handle onClick events if the component has role="button"', () => {
    const { getByRole } = render(
      <NavigationItem title={title} onClick={onClick} />,
    );
    const navigationItem = getByRole("button");

    fireEvent.click(navigationItem);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Should handle onMouseEnter events if the element has role="link"', () => {
    const { getByRole } = render(
      <NavigationItem title={title} href={href} onMouseEnter={onMouseEnter} />,
    );

    const navigationItem = getByRole("link");
    fireEvent.mouseEnter(navigationItem);

    expect(onMouseEnter).toHaveBeenCalledTimes(1);
  });

  it("Should render a chevron icon if the component has role='button' with default state='down'", () => {
    const { getByTestId } = render(<NavigationItem title={title} />);

    const chevron = getByTestId("chevron-down");

    expect(chevron).toBeDefined();
  });

  it("Should render a chevron icon if the component has role='button' with state='up' if isOpened='true'", () => {
    const { getByTestId } = render(
      <NavigationItem title={title} isOpened={true} />,
    );
    const chevron = getByTestId("chevron-up");

    expect(chevron).toBeDefined();
  });
});
