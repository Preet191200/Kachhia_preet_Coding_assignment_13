import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{ bg: string }>`
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ bg }) => bg};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const Card: React.FC<CardProps> = ({
  title,
  description,
  backgroundColor = '#f0f0f0',
}) => (
  <StyledCard bg={backgroundColor}>
    <h3>{title}</h3>
    <p>{description}</p>
  </StyledCard>
);

export default Card;
