import axios from "axios";
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  REQUEST_ERROR,
  SET_SMURFS,
  POST_REQUEST,
  POST_SUCCESS
} from "./actionTypes";

export const fetchRequest = (dispatch, key) => {
  dispatch({
    type: FETCH_REQUEST,
    isFetching: true,
    error: null,
    key
  });
};

export const fetchSuccess = (dispatch, key) => {
  dispatch({
    type: FETCH_SUCCESS,
    isFetching: false,
    error: null,
    key
  });
};

export const fetchError = (dispatch, key, error) => {
  dispatch({
    type: REQUEST_ERROR,
    isFetching: false,
    error,
    key
  });
};

export const saveRequest = (dispatch, key) => {
  dispatch({
    type: POST_REQUEST,
    savingSmurf: true,
    error: null,
    key
  });
};

export const saveSuccess = (dispatch, key) => {
  dispatch({
    type: POST_SUCCESS,
    savingSmurf: false,
    error: null,
    key
  });
};
