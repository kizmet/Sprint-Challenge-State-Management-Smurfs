import axios from "axios";

export const GET_SMURFS = "GET_SMURFS";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";
export const SAVE_SMURF = "SAVE_SMURF";
export const SAVE_SMURF_SUCCESS = "SAVE_SMURF_SUCCESS";
export const DELETE_SMURF = "DELETE_SMURF";
export const REQUEST_ERROR = "REQUEST_ERROR";

export const getSmurfs = dispatch => {
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_SMURFS_FAILURE, payload: err.message });
    });
};

export const saveSmurf = smurf => dispatch => {
  dispatch({ type: SAVE_SMURF });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(({ data }) => dispatch({ type: SAVE_SMURF_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: REQUEST_ERROR, payload: err }));
};
