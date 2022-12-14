import React, { useCallback } from "react";
import css from "@emotion/css";
import styled from "@emotion/styled";
import { Transaction } from "@/models/transaction";
import colors from "@/styles/colors";
import useInViewport from "@/hooks/useInViewport";
import TableCell from "@/components/table/TableCell";
import CellContent from "./CellContent";
import withIsSelectedRow, {
  IIsSelectedRow,
} from "@/components/hocs/withIsSelectedRow";
import withIsInViewPort, { IIsInViewPort } from "../hocs/withIsInViewport";

interface Props {
  transaction: Transaction;
}

function TableRow({
  transaction,
  isSelectedRow,
  selectRow,
  isInViewport,
  elemRef,
}: Props & IIsSelectedRow & IIsInViewPort<HTMLLIElement>) {
  const handleTableRowClick: React.MouseEventHandler = useCallback(
    (e) => {
      e.stopPropagation;
      selectRow();
    },
    [selectRow]
  );

  return (
    <Wrapper
      ref={elemRef}
      isSelected={isSelectedRow}
      onClick={handleTableRowClick}
    >
      {isInViewport ? (
        <>
          {Transaction.keyOrder.map((name, idx) => {
            const isLastOne = idx === Transaction.keyOrder.length - 1;
            return (
              <TableCell
                key={name + transaction[name]}
                index={idx}
                isLastOne={isLastOne}
              >
                <CellContent transaction={transaction} contentKey={name} />
              </TableCell>
            );
          })}
        </>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.li<{ isSelected?: boolean }>`
  flex-shrink: 0;
  display: flex;
  position: relative;
  width: 100%;
  height: 58px;
  border: 1px solid ${colors.gray40()};
  border-radius: 3px;
  cursor: pointer;

  ::before {
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    border: 2px solid transparent;
    border-radius: 3px;
    background: transparent;
    pointer-events: none;
    content: "";
  }
  ${({ isSelected }) =>
    isSelected
      ? css`
          ::before {
            border: 2px solid ${colors.gray10()};
          }
        `
      : css`
          :hover::before {
            border: 2px solid ${colors.jennifer100()};
          }
        `}

  :active {
    background: ${colors.gray0(0.04)};
  }
`;

export default React.memo(withIsSelectedRow(withIsInViewPort(TableRow, 0)));
