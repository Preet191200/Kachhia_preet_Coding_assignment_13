import React from "react";
import styled from "styled-components";

const TFOOT = styled.tfoot`
  font-weight: bold;
`;
export const TableFooter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <TFOOT>{children}</TFOOT>;
export default TableFooter;
