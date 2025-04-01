import { render } from "@testing-library/react";
import FAQItem from "./FAQItem";

describe("Components/FAQItem", () => {
  const question = "What is the purpose of this FAQ?";
  const answer = "This FAQ provides answers to common questions.";
  const onToggle = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the question and answer correctly", () => {
    const { getByText } = render(
      <FAQItem question={question} answer={answer} />,
    );

    expect(getByText(question)).toBeInTheDocument();
    expect(getByText(answer)).toBeInTheDocument();
  });

  it("calls onToggle when clicked", () => {
    const { getByRole } = render(
      <FAQItem question={question} answer={answer} onToggle={onToggle} />,
    );

    const button = getByRole("button");
    button.click();

    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it("toggles the height of the answer when isOpen changes", () => {
    const { getByRole, rerender } = render(
      <FAQItem question={question} answer={answer} isOpen={false} />,
    );

    const button = getByRole("button");

    expect(button).toHaveAttribute("aria-expanded", "false");

    rerender(<FAQItem question={question} answer={answer} isOpen={true} />);

    expect(button).toHaveAttribute("aria-expanded", "true");
  });
});
