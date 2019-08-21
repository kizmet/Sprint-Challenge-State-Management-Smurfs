import axios from "axios";
import produce from "immer";

export const smurfReducer = (state, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case "init":
        draft.data = action.data;
        draft.loading = false;
        break;
      case "loading":
        draft.loading = true;
        break;      
      case "REQUESTING_SMURFS":
        return {
          ...state,
          fetching: true
        };
      case "RECEIVE_SMURFS": {
        return {
          ...state,
          smurfs: action.smurfs,
          fetching: false
        };
      }
      case "ERROR":
        return {
          ...state,
          fetching: false,
          savingSmurf: false,
          error: action.error
        };

      case "ADD_SMURF":
        return {
          ...state,
          savingSmurf: true
        };
      case "ADD_SUCCESS":
        return {
          ...state,
          savingSmurf: false,
          smurfs: action.smurfs
        };
      default:
        return state;
    }
  });
};
export default smurfReducer;


const fetchData = () => {
  const res = axios.get("http://localhost:3333/smurfs")
}
  

export const loadData = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "loading" });
    const data = await fetchData();
    dispatch({ type: "init", data });
  };
};


export const getSmurfs = dispatch => {
  dispatch({ type: "REQUESTING_SMURFS" });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: "RECEIVE_SMURFS", smurfs: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: "ERROR", error: err.message });
    });
};

export const saveSmurf = (dispatch, smurf) => {
  dispatch({ type: "ADD_SMURF" });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch({ type: "ADD_SUCCESS", smurfs: res.data });
    })
    .catch(err => {
      dispatch({ type: "ERROR", error: err.message });
    });
};
