import React from 'react';
import styled from 'styled-components';

const TH = styled.th`
  padding: 8px;
  border-bottom: 2px solid #ccc;
  text-align: left;
`;
export const TableHeader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <TH>{children}</TH>;
export default TableHeader;
