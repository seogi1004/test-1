import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { extractMaxResponse } from "@/utils/table.util";
import { setMaxResponse, setTransactionList } from "@/stores/transactionSlice";
import { getList } from "@/api/transaction.api";

export default function useInitializeTransitionList() {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    getList().then((list) => {
      dispatch(setTransactionList(list));
      const maxRes = extractMaxResponse(list);
      dispatch(setMaxResponse(maxRes));
    });
  }, []);
}
