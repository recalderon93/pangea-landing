import { InputHTMLAttributes } from "react";
import SubmitIcon from "../Icons/Submit";
import Button from "../buttons/Button";
import TextInputBase from "./TextInputBase";

type Props = {
  color?: "brand" | "accent";
  buttonTitle?: string;
  // Callback executed when the text field button is clicked
  onButtonClick?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

export default function TextInputWithSubmit({
  color,
  buttonTitle,
  onButtonClick,
  ...props
}: Props) {
  return (
    <div className="relative gap-4 lg:flex">
      <TextInputBase color={color} {...props} />
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 lg:hidden"
        data-testid="icon-field-button"
        aria-label={buttonTitle}
        onClick={onButtonClick}>
        <SubmitIcon color={color} />
      </button>
      <Button
        variant={color}
        className="hidden lg:block"
        title={buttonTitle}
        data-testid="field-button"
        onClick={onButtonClick}
      />
    </div>
  );
}
