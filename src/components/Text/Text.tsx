import React from 'react';
import type { TextProps } from './Text.types';

const Text: React.FC<TextProps> = ({
  value,
  color = 'black',
  fontSize = '16px',
}) => {
  return <span style={{ color, fontSize }}>{value}</span>;
};

export default Text;
