import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  widthRatioList: number[];
  tableHeight: number;
  selectedRowId: string | null;
} = {
  widthRatioList: [],
  tableHeight: 350,
  selectedRowId: null,
};

export const transactionSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setWidthRatioList: (state, action) => {
      state.widthRatioList = action.payload;
    },
    setTableHeight: (state, action) => {
      state.tableHeight = Math.max(0, action.payload);
    },
    setSelectedRowId: (state, action) => {
      state.selectedRowId = action.payload;
    },
  },
});

export const { setWidthRatioList, setTableHeight, setSelectedRowId } =
  transactionSlice.actions;

export default transactionSlice.reducer;
