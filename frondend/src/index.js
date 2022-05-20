import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { reducers } from "./reducers";
import "./index.css";
import App from "./App";

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
