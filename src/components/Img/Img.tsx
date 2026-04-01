import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{ w?: string; h?: string }>`
  width: ${({ w }) => w || '100%'};
  height: ${({ h }) => h || 'auto'};
`;
const Img: React.FC<ImgProps> = ({ src, alt, width, height }) => (
  <StyledImg src={src} alt={alt} w={width} h={height} />
);
export default Img;
