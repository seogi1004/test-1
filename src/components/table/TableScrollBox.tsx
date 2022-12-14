import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";
import colors from "@/styles/colors";
import styled from "@emotion/styled";
import withTableHeight from "@/components/hocs/withTableHeight";
import TableResizeBar from "@/components/table/TableResizeBar";

interface Props {
  children: React.ReactNode;
}

function TableScrollBox({ children }: Props) {
  const height = useSelector((state: RootState) => state.table.tableHeight);

  return (
    <Wrapper draggable={false} style={{ height: `${height}px` }}>
      {children}
      <TableResizeBar />
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
  width: 100%;
  padding: 10px;
  border-bottom: 2px solid ${colors.gray40()};
  user-select: none;
`;

export default React.memo(withTableHeight(TableScrollBox));
