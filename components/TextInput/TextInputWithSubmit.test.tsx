import { fireEvent, render } from "@testing-library/react";
import TextInputWithSubmit from "./TextInputWithSubmit";

describe("Components/TextInputBase", () => {
  const buttonTitle = "GO";
  const onButtonClick = jest.fn();
  const inputTestId = "text field";
  const buttonTestId = "field-button";
  const iconTestId = "icon-field-button";
  const onChangeText = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should render all elements", () => {
    const { getByTestId } = render(
      <TextInputWithSubmit data-testid={inputTestId} buttonTitle="Submit" />,
    );

    const input = getByTestId(inputTestId);
    const button = getByTestId(buttonTestId);
    const iconButton = getByTestId(iconTestId);

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(iconButton).toBeInTheDocument();
  });

  it("Should call onButtonClick when button is clicked", () => {
    const { getByTestId } = render(
      <TextInputWithSubmit
        data-testid={inputTestId}
        buttonTitle={buttonTitle}
        onButtonClick={onButtonClick}
      />,
    );

    const button = getByTestId(buttonTestId);
    fireEvent.click(button);

    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });

  it("Should call onChangeText when input is changed", () => {
    const { getByTestId } = render(
      <TextInputWithSubmit
        data-testid={inputTestId}
        buttonTitle={buttonTitle}
        onButtonClick={onButtonClick}
        onChange={onChangeText}
      />,
    );

    const input = getByTestId(inputTestId);
    fireEvent.change(input, { target: { value: "Hello" } });

    expect(onChangeText).toHaveBeenCalledTimes(1);
  });
});
