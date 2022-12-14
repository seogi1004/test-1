import { createSlice } from "@reduxjs/toolkit";
import { Transaction } from "@/models/transaction";

const initialState: { maxResponse: number; list: Transaction[] } = {
  maxResponse: 0,
  list: [],
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setMaxResponse: (state, action) => {
      state.maxResponse = action.payload;
    },
    setTransactionList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setMaxResponse, setTransactionList } = transactionSlice.actions;

export default transactionSlice.reducer;
