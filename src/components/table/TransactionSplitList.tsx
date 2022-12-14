import React from "react";
import styled from "@emotion/styled";
import { Transaction } from "@/models/transaction";
import withIsInViewPort, { IIsInViewPort } from "../hocs/withIsInViewport";
import TableRow from "./TableRow";

interface Props {
  splitList: Transaction[];
}

function TransactionSplitList({
  splitList,
  elemRef,
  isInViewport,
}: Props & IIsInViewPort<HTMLDivElement>) {
  const style: React.CSSProperties = isInViewport
    ? { height: "auto", opacity: 1 }
    : { height: "700px", opacity: 0, pointerEvents: "none" };
  return (
    <Wrapper ref={elemRef} style={style}>
      {isInViewport && (
        <>
          {splitList.map((transaction) => {
            return (
              // @ts-ignore
              <TableRow key={transaction.id} transaction={transaction} />
            );
          })}
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex-shrink: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  user-select: none;
`;

export default withIsInViewPort(TransactionSplitList, 0);
