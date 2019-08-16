import React, { createContext, useReducer } from "react";
import { initialState } from "./reducers/reducer";

const Store = createContext(initialState);

export default Store;
