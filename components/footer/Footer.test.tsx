import { render } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Components/Footer", () => {
  it("Should render the Pangea Logo", () => {
    const { getByTestId } = render(<Footer />);

    const logo = getByTestId("pangea-logo");
    expect(logo).toBeInTheDocument();
  });

  it("Should render the footer headings", () => {
    const { getAllByRole } = render(<Footer />);

    const headings = getAllByRole("heading", { level: 2 });

    expect(headings).toHaveLength(3);
  });

  it("Should render the footer links", () => {
    const { getAllByRole } = render(<Footer />);

    const links = getAllByRole("link");

    expect(links).toHaveLength(8);
  });
});
