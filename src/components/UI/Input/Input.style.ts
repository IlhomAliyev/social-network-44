import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
`;

export const StyledInput = styled.input<{ disabled: boolean; hasError: boolean }>`
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 2px solid ${(props) => (props.hasError ? "red" : props.theme.colors.disabledBgc)};
  background-color: transparent;

  &:last-child {
    margin-bottom: 40px;
  }

  &:hover,
  &:focus {
    border-color: ${(props) => props.theme.colors.primeColor};
  }

  ${(props) =>
    props.disabled &&
    `
    opacity: 0.5;
    pointer-events: none;
  `}
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;
