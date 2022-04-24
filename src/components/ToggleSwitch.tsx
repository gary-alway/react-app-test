import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";

type Props = {
  htmlFor?: string;
  checked?: boolean;
  onClick: (event: React.MouseEvent) => void;
};

const Container = styled.div`
  display: inline-block;

  input {
    display: none;
  }

  span {
    position: relative;
    display: inline-block;
    font-size: 1rem;
    line-height: 20px;
    border-radius: 5px;
    width: 80px;
    height: 28px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  span > span {
    width: fit-content;
    position: absolute;
    top: 5px;
    left: 40px;
    display: inline-block;
    background-color: white;
    color: red;
    height: 18px;
    padding: 0 3px;
    transition: all 0.3s ease;
    border-radius: 5px;
    user-select: none;
  }

  input + span {
    background-color: red;
    border: solid 1px #0a5757;
  }

  input:checked + span {
    background-color: green;
  }

  input:checked + span > span {
    left: 5px;
    color: green;
  }
`;

export const ToggleSwitch: FunctionComponent<Props> = ({
  htmlFor,
  checked,
  onClick,
}) => (
  <Container>
    <label htmlFor={htmlFor}>
      <input
        type="checkbox"
        checked={Boolean(checked)}
        onClick={onClick}
        id={htmlFor}
      />
      <span>
        <span>{checked ? "ON" : "OFF"}</span>
      </span>
    </label>
  </Container>
);
