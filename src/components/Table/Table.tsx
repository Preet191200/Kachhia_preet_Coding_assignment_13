import React from 'react';
import styled from 'styled-components';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableFooter from './TableFooter';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Table: React.FC<{ headers: string[]; data: string[][] }> = ({
  headers,
  data,
}) => (
  <StyledTable>
    <thead>
      <TableRow>
        {headers.map((h) => (
          <TableHeader key={h}>{h}</TableHeader>
        ))}
      </TableRow>
    </thead>
    <tbody>
      {data.map((row, idx) => (
        <TableRow key={idx}>
          {row.map((cell, i) => (
            <TableCell key={i}>{cell}</TableCell>
          ))}
        </TableRow>
      ))}
    </tbody>
    <TableFooter>Footer</TableFooter>
  </StyledTable>
);

export default Table;
