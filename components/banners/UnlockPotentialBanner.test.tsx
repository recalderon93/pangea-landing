import { render } from "@testing-library/react";
import UnlockPotentialBanner from "./UnlockPotentialBanner";

describe("Banners/UnlockPotentialBanner", () => {
  it("Should Render Heading", () => {
    const { getByRole } = render(<UnlockPotentialBanner />);
    const heading = getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it("Should Render Paragraph", () => {
    const { getByText } = render(<UnlockPotentialBanner />);
    const paragraph = getByText(
      /Don't let technology get in the way of your growth/i,
    );
    expect(paragraph).toBeInTheDocument();
  });

  it("Should Render Button", () => {
    const { getByRole } = render(<UnlockPotentialBanner />);
    const button = getByRole("button", { name: "Get Started" });
    expect(button).toBeInTheDocument();
  });
});
