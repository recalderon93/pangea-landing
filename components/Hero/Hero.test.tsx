import HeroSection from "./Hero";

import { render } from "@testing-library/react";

describe("Sections/Hero", () => {
  it("Should render the Hero Heading", () => {
    const { getByRole } = render(<HeroSection />);

    const heroSection = getByRole("heading");

    expect(heroSection).toBeDefined();
  });

  it("Should render the Hero Description", () => {
    const { getByTestId } = render(<HeroSection />);

    const heroDescription = getByTestId("hero-description");

    expect(heroDescription).toBeDefined();
  });

  it("Should render the Hero TextInput", () => {
    const { getByPlaceholderText } = render(<HeroSection />);

    const heroTextInput = getByPlaceholderText("Your Email");

    expect(heroTextInput).toBeDefined();
  });
});
