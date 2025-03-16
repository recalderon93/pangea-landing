import { render, fireEvent } from "@testing-library/react";
import Button, { type BaseButtonProps } from "./Button";

function createButton(props: BaseButtonProps) {
  return <Button {...props} />;
}

describe("Components/BaseButton", () => {
  const title = "Button Title";
  const label = "Button Label";
  const onClick = jest.fn();

  beforeEach(() => {
    onClick.mockClear();
  });

  it("Should render button correctly", () => {
    const { getByText } = render(createButton({ title }));
    const button = getByText(title);

    expect(button).toBeDefined();
  });

  it("Should handle onClick events", () => {
    const { getByText } = render(createButton({ title, onClick }));
    const button = getByText(title);

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("Should not trigger onClick events in disabled state", () => {
    const { getByText } = render(
      createButton({ title, onClick, disabled: true }),
    );
    const button = getByText(title);

    expect(button).toBeDisabled();
    expect(onClick).not.toHaveBeenCalled();
  });

  it("Should apply correctly ARIA props", () => {
    const { getByLabelText } = render(
      createButton({ title, "aria-label": label }),
    );
    const button = getByLabelText(label);

    expect(button).toBeDefined();
  });

  it("Should handle keyboard navigation (Enter & Space keys)", () => {
    const { getByRole } = render(createButton({ title, onClick }));
    const button = getByRole("button");

    fireEvent.keyUp(button, { key: "Enter" });
    expect(onClick).toHaveBeenCalledTimes(1);
    fireEvent.keyUp(button, { key: " " });
    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
