import React, { createContext, useReducer } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import App from "./components/App";
//import { SmurfProvider } from "./reducers/smurfReducer";

//const Store = createContext(initialState);
//const [smurfs, dispatch] = useReducer(reducer);

ReactDOM.render(
  <App />,

  document.getElementById("root")
);
