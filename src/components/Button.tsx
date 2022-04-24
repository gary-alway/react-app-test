import classNames from "classnames";
import React from "react";
import "./button.css";

interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "size" | "type"> {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => (
  <button
    type="button"
    className={classNames(
      "storybook-button",
      `storybook-button--${size}`,
      `storybook-button--${primary ? "primary" : "secondary"}`
    )}
    style={{ backgroundColor }}
    {...props}
  >
    {label}
  </button>
);
