import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";
import { Transaction } from "@/models/transaction";

export interface ITransactionList {
  transactionList: Transaction[];
}

export default function withTransactionList<T>(
  ChildComponent: React.FC<T & ITransactionList>
) {
  return React.memo((props: T) => {
    const transactionList = useSelector(
      (state: RootState) => state.transaction.list
    );

    const wrappedProps: T & ITransactionList = {
      ...props,
      ...{ transactionList },
    };

    return <ChildComponent {...wrappedProps} />;
  });
}
