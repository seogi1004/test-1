import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";

export interface ITableHeight {
  tableHeight: number;
}

export default function withTableHeight<T>(
  Component: React.FC<T & ITableHeight>
) {
  return (props: T) => {
    const height = useSelector((state: RootState) => state.table.tableHeight);

    const wrappedProps: T & ITableHeight = {
      ...props,
      tableHeight: height,
    };
    return <Component {...wrappedProps} />;
  };
}
