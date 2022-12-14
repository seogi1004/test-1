import React, { useCallback } from "react";
import { Transaction } from "@/models/transaction";
import colors from "@/styles/colors";
import styled from "@emotion/styled";
import ColumnResizeBar from "@/components/table/ColumnResizeBar";
import upward from "@/assets/arrow-upward.svg";
import downward from "@/assets/arrow-downward.svg";
import withTransactionList, {
  ITransactionList,
} from "@/components/hocs/withTransactionList";
import ColumnName from "@/components/table/ColumnName";
import withSortTable, { ISortTable } from "@/components/hocs/withSortTable";

interface Props {}

function TableHeader({
  sortInfo,
  sortTableBy,
}: Props & ITransactionList & ISortTable) {
  const handleClickColumnName = useCallback(
    (key: keyof typeof Transaction["nameMap"]) => () => {
      sortTableBy(key);
    },
    [sortTableBy]
  );

  return (
    <ColumnNameBox>
      {Transaction.keyOrder
        .map(Transaction.getName)
        .map((displayName, index) => {
          const columnKey = Transaction.keyOrder[index];
          return (
            <React.Fragment key={displayName + columnKey}>
              {index < Transaction.keyOrder.length - 1 && (
                <ColumnResizeBar index={index} />
              )}
              <ColumnName
                isLastOne={index === Transaction.keyOrder.length - 1}
                index={index}
                displayName={displayName}
                onClick={handleClickColumnName(columnKey)}
              >
                <NameContent>{displayName}</NameContent>
                {sortInfo.isSortedBy(columnKey) && (
                  <img src={sortInfo.isAsc ? upward : downward} />
                )}
              </ColumnName>
            </React.Fragment>
          );
        })}
    </ColumnNameBox>
  );
}

const ColumnNameBox = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  height: 34px;
  border-top: 1px solid ${colors.gray40()};
  border-bottom: 1px solid ${colors.gray40()};
  padding-left: 11px;
`;

const NameContent = styled.span`
  overflow: hidden;
  width: 100%;
  padding: 0 8px;
  font-size: 12px;
  line-height: 1.5;
  color: ${colors.gray20()};
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
`;

export default withTransactionList(withSortTable(TableHeader));
