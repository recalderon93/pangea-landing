import { render } from "@testing-library/react";
import GreatSolutionsBanner from "./GreatSolutionBanner";

describe("Banners/GreatSolutionsBanner", () => {
  it("Should Render Heading", () => {
    const { getByRole } = render(<GreatSolutionsBanner />);
    const heading = getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it("Should Render Button", () => {
    const { getByRole } = render(<GreatSolutionsBanner />);
    const button = getByRole("button", { name: "GET STARTED" });
    expect(button).toBeInTheDocument();
  });
});
