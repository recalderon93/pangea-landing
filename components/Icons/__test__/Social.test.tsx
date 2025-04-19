import SocialIcon from "@/components/Icons/Social";
import { render } from "@testing-library/react";

describe("SocialIcon", () => {
  it("renders the X icon", () => {
    const { getByTestId } = render(<SocialIcon social="x" />);
    expect(getByTestId("x-icon")).toBeInTheDocument();
  });

  it("renders the LinkedIn icon", () => {
    const { getByTestId } = render(<SocialIcon social="linkedIn" />);
    expect(getByTestId("linkedin-icon")).toBeInTheDocument();
  });

  it("renders the Instagram icon", () => {
    const { getByTestId } = render(<SocialIcon social="instagram" />);
    expect(getByTestId("instagram-icon")).toBeInTheDocument();
  });

  it("renders the Facebook icon", () => {
    const { getByTestId } = render(<SocialIcon social="facebook" />);
    expect(getByTestId("facebook-icon")).toBeInTheDocument();
  });

  it("throws an error for an invalid social icon", () => {
    // @ts-expect-error Provided an invalid social prop
    const { container } = render(<SocialIcon social="invalid" />);

    expect(container).toBeEmptyDOMElement();
  });
});
