import React from "react";
import styled from "styled-components";

const TD = styled.td`
  padding: 8px;
  border-bottom: 1px solid #eee;
`;
export const TableCell: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <TD>{children}</TD>;
export default TableCell;
