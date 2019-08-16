import axios from "axios";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_ERROR = "FETCH_ERROR";

export const SMURFS = "smurfs";
export const SET_SMURFS = "SET_SMURFS";

export const POST_REQUEST = "POST_REQUEST";
export const POST_SUCCESS = "POST_SUCCESS";

export const GET_SMURFS = "GET_SMURFS";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";
export const SMURF = "SMURF";
export const SAVE_SMURF_SUCCESS = "SAVE_SMURF_SUCCESS";
export const DELETE_SMURF = "DELETE_SMURF";
export const REQUEST_ERROR = "REQUEST_ERROR";

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
    type: FETCH_ERROR,
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

export const getSmurfs = dispatch => {
  fetchRequest(dispatch, SMURFS);
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      fetchSuccess(dispatch, SMURFS);
      dispatch({ type: SET_SMURFS, smurfs: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_SMURFS_FAILURE, payload: err.message });
    });
};

export const saveSmurf = (dispatch, smurf) => {
  console.log(smurf);
  saveRequest(dispatch, SMURF);
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      saveSuccess(dispatch, SMURF);
      dispatch({ type: SET_SMURFS, smurfs: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_SMURFS_FAILURE, payload: err.message });
    });
};
