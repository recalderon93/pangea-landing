import type { ButtonHTMLAttributes, KeyboardEvent } from "react";

type Props = {
  /** The text displayed inside the button */
  title?: string;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * # Button
 *
 * @description Component that extend the basic <button> HTML element.
 * @example```
 * <Button title="Submit" />
 * ```
 */

export default function Button({ title, onClick, ...props }: Props) {
  function handleOnKeyUp(e: KeyboardEvent<HTMLButtonElement>) {
    if ((e.key === "Enter" || e.key === " ") && onClick) {
      onClick(); // Manually call onClick for keyboard events
    }
  }

  return (
    <button onClick={onClick} onKeyUp={handleOnKeyUp} {...props}>
      {title}
    </button>
  );
}

export type BaseButtonProps = Props;
