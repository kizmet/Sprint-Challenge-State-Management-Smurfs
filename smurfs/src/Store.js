import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducers/reducer";


const Context = createContext();

const Provider = ({ children }) => {
  const contextValue = React.useReducer(reducer, initialState);
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export { Context, Provider };
