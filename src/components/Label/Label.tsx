import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ color: string }>`
  color: ${({ color }) => color};
  font-weight: bold;
`;

const Label: React.FC<LabelProps> = ({ text, color = 'black' }) => (
  <StyledLabel color={color}>{text}</StyledLabel>
);
export default Label;
