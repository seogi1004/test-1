import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { Transaction } from "@/models/transaction";
import { RootState } from "@/stores/store";
import { useDispatch } from "react-redux";
import { setSelectedRowId } from "@/stores/tableSlice";

export interface IIsSelectedRow {
  isSelectedRow: boolean;
  selectRow: () => void;
}

export default function withIsSelectedRow<
  T extends { transaction: Transaction }
>(Component: React.FC<T & IIsSelectedRow>) {
  return React.memo((props: T) => {
    const isSelectedRow = useSelector(
      (state: RootState) => state.table.selectedRowId === props.transaction.id
    );

    const dispatch = useDispatch();
    const selectRow = useCallback(() => {
      const newRowId = isSelectedRow ? null : props.transaction.id;
      dispatch(setSelectedRowId(newRowId));
    }, [dispatch, isSelectedRow, props.transaction.id]);

    const wrappedProps: T & IIsSelectedRow = {
      ...props,
      ...{ isSelectedRow, selectRow },
    };
    return <Component {...wrappedProps} />;
  });
}
