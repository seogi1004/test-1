import React from "react";
import withTransactionList, {
  ITransactionList,
} from "@/components/hocs/withTransactionList";
import TransactionSplitList from "@/components/table/TransactionSplitList";

interface Props {}

function TransactionList({ transactionList }: Props & ITransactionList) {
  const allLength = transactionList.length;
  const splitter = 30;
  const splitArrays = [];
  for (let i = 0; i < allLength; i += splitter) {
    splitArrays.push(transactionList.slice(i, i + splitter));
  }
  return (
    <>
      {splitArrays.map((splitArray, index) => {
        return (
          // @ts-ignore
          <TransactionSplitList
            key={`${splitArray[0].id} ${index}`}
            splitList={splitArray}
          />
        );
      })}
    </>
  );
}

export default React.memo(withTransactionList(TransactionList));
