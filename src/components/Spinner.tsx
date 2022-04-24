import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const rotate = keyframes`
    0% {
        transform: rotate(-180deg);
        box-shadow: inset -5px 0 0 5px currentColor;
    }
    50% {
        transform: rotate(0deg);
        box-shadow: inset -1px 0 0 1px currentColor;
    }
    100% {
        transform: rotate(180deg);
        box-shadow: inset -5px 0 0 5px currentColor;
    }
`;

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 64px;
  height: 64px;
  border-radius: 64px;

  ::before {
    position: absolute;
    content: "";
    width: 64px;
    height: 64px;
    border-radius: 64px;
    color: black;
    box-shadow: inset -5px 0 0 5px currentColor;
    clip: rect(0, 64px, 32px, 0);
    animation: ${rotate} 1s infinite linear;
  }
`;

type Props = {
  isLoading?: boolean;
  children?: React.ReactNode;
};

export const Spinner: React.FC<Props> = ({ isLoading = true, children }) =>
  isLoading ? <Wrapper role="spinner" className="spinner" /> : <>{children}</>;
