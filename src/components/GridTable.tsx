import styled from "@emotion/styled";
import React from "react";
import TableScrollBox from "./table/TableScrollBox";
import TableHeader from "./table/TableHeader";
import TransactionList from "./table/TransactionList";

export default function GridTable() {
  return (
    <GridTableWrapper>
      <TableHeader />
      <TableScrollBox>
        <TransactionList />
      </TableScrollBox>
    </GridTableWrapper>
  );
}

const GridTableWrapper = styled.article`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;
