import axios from "axios";

export const FETCH_REQUEST = "FETCH_REQUEST";
export const RECEIVE_REQUEST = "RECEIVE_REQUEST";
export const REQUEST_ERROR = "REQUEST_ERROR";
export const POST = "POST";
export const POST_SUCCESS = "POST_SUCCESS";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_REQUEST });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: RECEIVE_REQUEST, payload: res.data });
    })
    .catch(err => dispatch({ type: REQUEST_ERROR, payload: err }));
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: POST });
  return axios()
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch({
        type: POST_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: REQUEST_ERROR,
        payload: err
      });
    });
};
