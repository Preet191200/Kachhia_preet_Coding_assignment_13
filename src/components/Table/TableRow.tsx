import React from "react";
import styled from "styled-components";

const TR = styled.tr``;
export const TableRow: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <TR>{children}</TR>;
export default TableRow;
