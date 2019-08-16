import React, { createContext, useReducer } from "react";
import App from "../components/App";
import axios from "axios";
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
  SET_SMURFS,
  POST_REQUEST,
  POST_SUCCESS,
  SAVE_SMURF,
  SAVE_SMURF_SUCCESS
} from "../actions/actions";

export const initialState = {
  smurfs: [],
  error: null,
  fetching: false,
  savingSmurf: false,
  deletingSmurf: false
};

export const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
    case FETCH_SUCCESS:
    case FETCH_ERROR:
      return {
        ...state,
        [action.key]: {
          isFetching: action.isFetching,
          error: action.error
        }
      };
    case SET_SMURFS: {
      return {
        ...state,
        smurfs: {
          ...state.smurfs,
          data: action.smurfs
        }
      };
    }
    case POST_REQUEST:
    case POST_SUCCESS:
    case SAVE_SMURF:
      return {
        ...state,
        savingSmurf: true
      };
    case SAVE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: {
          ...state.smurfs,
          data: action.smurfs
        }
      };

    default:
      return state;
  }
};

export default reducer;
