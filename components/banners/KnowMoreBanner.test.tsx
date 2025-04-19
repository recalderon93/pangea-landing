import { render } from "@testing-library/react";
import KnowMoreBanner from "./KnowMoreBanner";

describe("Banners/KnowMoreBanner", () => {
  it("Should Render Paragraph", () => {
    const { getByText } = render(<KnowMoreBanner />);
    const paragraph = getByText(/Want to know more about our pricing?/i);
    expect(paragraph).toBeInTheDocument();
  });

  it("Should Render Button", () => {
    const { getByRole } = render(<KnowMoreBanner />);
    const button = getByRole("button", { name: "BOOK A CALL" });
    expect(button).toBeInTheDocument();
  });
});
