import React, { createContext, useReducer } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import App from "./components/App";
import { Provider } from "./Store";


ReactDOM.render(
  <Provider>
  <App />
  </Provider>,

  document.getElementById("root")
);
