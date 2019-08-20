import react from "react";
import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  reducer
});

export default function Store() {
  return createStore(rootReducer, applyMiddleware(thunk));
}
