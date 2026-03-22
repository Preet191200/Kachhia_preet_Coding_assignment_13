import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const Label = styled.label<{ disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  margin-right: 8px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  checked,
  onChange,
  disabled = false,
}) => (
  <Label disabled={disabled}>
    <Input
      type="radio"
      value={value}
      checked={checked}
      onChange={() => onChange?.(value)}
      disabled={disabled}
    />
    {label}
  </Label>
);

export default RadioButton;
