import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer";

const Context = createContext();

const SmurfProvider = ({ children }) => {
  const contextValue = useReducer(reducer, initialState);
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export { Context, SmurfProvider };
