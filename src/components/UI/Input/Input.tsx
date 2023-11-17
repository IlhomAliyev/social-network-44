import React from "react";
import { ErrorMessage, InputContainer } from "./Input.style";
import { StyledInput } from "./Input.style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isDisabled?: boolean;
  hasError?: boolean;
  errorText?: string;
}

export const AppInput = ({
  type,
  placeholder,
  isDisabled = false,
  hasError = false,
  errorText,
  ...props
}: InputProps) => {
  return (
    <InputContainer>
      {hasError && <ErrorMessage>{errorText}</ErrorMessage>}
      <StyledInput
        type={type}
        placeholder={placeholder}
        disabled={isDisabled}
        hasError={hasError}
        {...props}
      />
    </InputContainer>
  );
};
