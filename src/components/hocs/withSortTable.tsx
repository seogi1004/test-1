import { Transaction } from "@/models/transaction";
import { TransactionSort } from "@/models/transactionSort";
import { setTransactionList } from "@/stores/transactionSlice";
import { setSortOrder, sortBy } from "@/utils/sort.util";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { ITransactionList } from "./withTransactionList";

export interface ISortTable {
  sortInfo: TransactionSort;
  sortTableBy: (key: keyof typeof Transaction["nameMap"]) => void;
}

export default function withSortTable<T>(Component: React.FC<T & ISortTable>) {
  return (props: T & ITransactionList) => {
    const [sortInfo, setSortInfo] = useState<TransactionSort>(
      new TransactionSort()
    );

    const dispatch = useDispatch();

    const sortTableBy = useCallback(
      (key: keyof typeof Transaction["nameMap"]) => {
        const newSortInfo = sortInfo.toggleOrder(key);
        setSortInfo(newSortInfo);
        const sortFn = setSortOrder(newSortInfo.currentOrder);
        const sortedList = [...props.transactionList].sort(sortBy(key, sortFn));
        dispatch(setTransactionList(sortedList));
      },
      [sortInfo, props.transactionList]
    );

    const wrappedProps: T & ISortTable = {
      ...props,
      ...{ sortInfo, sortTableBy },
    };
    return <Component {...wrappedProps} />;
  };
}
