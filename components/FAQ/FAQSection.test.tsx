import { fireEvent, render } from "@testing-library/react";
import FAQSection from "./FAQSection";

describe("Sections/FAQSection", () => {
  it("Should render the Section Heading", async () => {
    const { getByRole } = render(<FAQSection />);
    const heading = getByRole("heading", {
      level: 2,
    });

    expect(heading).toHaveTextContent(/Get Clarity/i);
  });

  it("Should render the selected FAQ items", async () => {
    const { getAllByRole } = render(<FAQSection />);

    const faqItems = getAllByRole("heading", {
      level: 3,
    });

    expect(faqItems).toHaveLength(6);
  });

  it("Should interact with the FAQ items", async () => {
    const { getAllByRole } = render(<FAQSection />);
    const faqItems = getAllByRole("button");

    expect(faqItems).toHaveLength(6);

    faqItems.forEach((item, index) => {
      expect(item).toHaveAttribute("aria-expanded", "false");

      fireEvent.click(item);

      faqItems.forEach((innerItem, i) => {
        if (i === index) {
          expect(innerItem).toHaveAttribute("aria-expanded", "true");
        } else {
          expect(innerItem).toHaveAttribute("aria-expanded", "false");
        }
      });

      fireEvent.click(item);

      expect(item).toHaveAttribute("aria-expanded", "false");
    });
  });
});
