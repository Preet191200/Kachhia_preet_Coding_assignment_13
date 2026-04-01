import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 8px 12px;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled }) => (disabled ? 'grey' : 'white')};
  width: 100%;
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selected,
  onChange,
  disabled = false,
}) => (
  <StyledSelect
    value={selected}
    onChange={(e) => onChange?.(e.target.value)}
    disabled={disabled}
  >
    {options.map((opt) => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ))}
  </StyledSelect>
);

export default Dropdown;
