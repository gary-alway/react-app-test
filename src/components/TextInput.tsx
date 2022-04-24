import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { FunctionComponent, useEffect, useRef } from "react";
import { ErrorIcon } from "../icons/ErrorIcon";
import { LockIcon } from "../icons/LockIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { WarningIcon } from "../icons/WarningIcon";

const Container = styled.div`
  display: flex;

  & input {
    border: 1px solid #585858;
    border-radius: 4px;

    ${({ isInvalid }: { isInvalid: boolean }) =>
      isInvalid &&
      css`
        color: #ff0000;
        border: 1px solid #ff0000;
      `}

    font-size: large;
    text-indent: 0.3rem;
    height: 2rem;
    padding-top: 0.3rem;
    padding-bottom: 0.2rem;
  }

  & input:focus {
    outline: none;
  }

  .clickable {
    cursor: pointer;
  }

  & span > svg {
    position: relative;
    margin-left: -1.8rem;
    top: 0.7rem;
  }
`;

type Props = {
  isSearch?: boolean;
  isInvalid?: boolean;
  onClear?: () => void;
} & React.HTMLProps<HTMLInputElement>;

export const TextInput: FunctionComponent<Props> = ({
  isSearch,
  disabled,
  onClear,
  isInvalid,
  className,
  ...inputProps
}) => {
  useEffect(() => {
    (inputRef.current as any)!.focus();
  }, []);

  const inputRef = useRef(null);
  const handleClick = () => {
    (inputRef.current as any)!.focus();
    onClear && onClear();
  };
  const icon = disabled ? (
    <span>
      <LockIcon size="21px" />
    </span>
  ) : isSearch ? (
    <span>
      <SearchIcon size="21px" />
    </span>
  ) : isInvalid ? (
    <span className="clickable" onClick={handleClick}>
      <WarningIcon size="21px" />
    </span>
  ) : onClear ? (
    <span className="clickable" onClick={handleClick}>
      <ErrorIcon size="21px" fill="black" />
    </span>
  ) : null;
  const _disabled = Boolean(disabled);
  const _invalid = Boolean(isInvalid);
  return (
    <Container isInvalid={_invalid}>
      <input
        ref={inputRef}
        type="text"
        className={className}
        disabled={_disabled}
        {...inputProps}
      />
      {icon}
    </Container>
  );
};
