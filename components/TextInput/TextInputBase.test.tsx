import { render } from "@testing-library/react";
import TextInputBase from "./TextInputBase";
describe("Component/TextInputBase", () => {
  it("Should render TextInput", () => {
    const { getByRole } = render(<TextInputBase />);

    const input = getByRole("textbox");

    expect(input).toBeDefined();
  });

  it("Check Input tailwind classes related to color are applied (Accent)", () => {
    const { getByRole } = render(<TextInputBase color="accent" />);

    const input = getByRole("textbox");

    expect(input).toHaveClass("text-white-50");
    expect(input).toHaveClass("border-white-100");
  });

  it("Check Input tailwind classes related to color are applied (Brand)", () => {
    const { getByRole } = render(<TextInputBase color="brand" />);

    const input = getByRole("textbox");

    expect(input).toHaveClass("text-teal-400");
    expect(input).toHaveClass("border-teal-400");
  });

  it("Should add extra className", () => {
    const className = "test";
    const { getByRole } = render(<TextInputBase className={className} />);

    const input = getByRole("textbox");

    expect(input).toHaveClass(className);
  });
});
