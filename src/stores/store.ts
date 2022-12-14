import { combineReducers, configureStore } from "@reduxjs/toolkit";
import transactionReducer from "@/stores/transactionSlice";
import tableReducer from "@/stores/tableSlice";

const reducer = combineReducers({
  transaction: transactionReducer,
  table: tableReducer,
});

const store = configureStore({
  reducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
