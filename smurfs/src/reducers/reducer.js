import React, { createContext, useReducer } from "react";
import App from "../components/App";
import axios from "axios";
import {
  SAVE_SMURF,
  SAVE_SMURF_SUCCESS,
  DELETE_SMURF,
  REQUEST_ERROR
} from "../actions/actions";

export const initialState = {
  smurfs: [],
  error: null,
  fetching: false,
  savingSmurf: false,
  deletingSmurf: false
};

export const getSmurfs = dispatch => {
  dispatch({ type: "GET_SMURFS" });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      dispatch({ type: "GET_SMURFS_SUCCESS", payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: "GET_SMURFS_FAILURE", payload: err.message });
    });
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_SMURFS":
      return {
        ...state,
        fetching: true
      };
    case "GET_SMURFS_SUCCESS":
      return {
        ...state,
        smurfs: action.payload,
        fetching: false
      };
    case "GET_SMURFS_FAILURE":
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case SAVE_SMURF:
      return {
        ...state,
        savingSmurf: true
      };
    case SAVE_SMURF_SUCCESS:
      return { ...state, smurfs: action.payload, savingSmurf: false };
    case DELETE_SMURF:
      return {
        ...state,
        deletingSmurf: true
      };
    case REQUEST_ERROR:
      return {
        ...initialState,
        smurfs: state.smurfs,
        error: action.payload
      };

    default:
      return state;
  }
};

//export const Store = createContext(initialState);
