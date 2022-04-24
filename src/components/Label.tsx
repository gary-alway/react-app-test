import React from "react";

type Props = {
  text: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

export const Label: React.FC<Props> = ({ text, ...props }) => (
  <label {...props}>{text}</label>
);
