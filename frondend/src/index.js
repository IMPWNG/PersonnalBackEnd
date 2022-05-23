import React from "react";
import { createRoot } from "react-dom/client";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter as Router } from "react-router-dom";


import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
