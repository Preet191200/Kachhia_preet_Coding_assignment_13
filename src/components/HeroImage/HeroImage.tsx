import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledHero = styled.img<{ h?: string }>`
  width: 100%;
  height: ${({ h }) => h || '400px'};
  object-fit: cover;
`;
const HeroImage: React.FC<HeroImageProps> = ({ src, alt, height }) => (
  <StyledHero src={src} alt={alt} h={height} />
);
export default HeroImage;
