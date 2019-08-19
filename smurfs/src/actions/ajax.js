import axios from "axios";
import {
  fetchRequest,
  fetchSuccess,
  saveRequest,
  saveSuccess
} from "./actions";
import { REQUEST_ERROR, SET_SMURFS, SMURFS, SMURF } from "./actionTypes";

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
      dispatch({ type: REQUEST_ERROR, payload: err.message });
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
      dispatch({ type: REQUEST_ERROR, payload: err.message });
    });
};
