import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "@/components/App";
import globalStyles from "@/styles/globalStyles";
import basicStyles from "@/styles/basicStyles";
import { Global } from "@emotion/core";
import store from "@/stores/store";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!);

root.render(
  <>
    <Provider store={store}>
      <Global styles={globalStyles} />
      <Global styles={basicStyles} />
      <App />
    </Provider>
  </>
);
