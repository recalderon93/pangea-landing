import { fireEvent, render } from "@testing-library/react";
import Header from "./Header";

describe("Components/Header", () => {
  const testID = {
    desktopNav: "desktop-navigation",
    mobileNav: "mobile-navigation",
  };

  const navigationRoutes = ["Solutions", "Who We Are", "Our Work"];

  it("Should render the Desktop Navigation", async () => {
    const { findByTestId } = render(<Header />);
    const desktopNav = await findByTestId(testID.desktopNav);

    expect(desktopNav).toBeDefined();
  });

  it("Should render Desktop Navigation Routes", async () => {
    const { findByTestId } = render(<Header />);
    const desktopNav = await findByTestId(testID.desktopNav);

    expect(desktopNav).toHaveTextContent("Solutions");
    navigationRoutes.forEach((route) =>
      expect(desktopNav).toHaveTextContent(route),
    );
  });

  it("Should render the Mobile Navigation", async () => {
    const { findByTestId, findByLabelText } = render(<Header />);

    // Simulate a click on the mobile menu button
    const mobileMenuButton = await findByLabelText("burger-menu");
    fireEvent.click(mobileMenuButton);

    const mobileNav = await findByTestId(testID.mobileNav);

    expect(mobileNav).toBeDefined();
  });
  it("Should render Mobile Navigation Routes", async () => {
    const { findByTestId, findByLabelText } = render(<Header />);
    const desktopNav = await findByTestId(testID.desktopNav);

    // Simulate a click on the mobile menu button
    const mobileMenuButton = await findByLabelText("burger-menu");
    fireEvent.click(mobileMenuButton);

    expect(desktopNav).toHaveTextContent("Solutions");
    navigationRoutes.forEach((route) =>
      expect(desktopNav).toHaveTextContent(route),
    );
  });
});
