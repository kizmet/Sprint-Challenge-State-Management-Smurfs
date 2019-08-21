import {
  GET_SMURFS,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE,
  SAVE_SMURF,
  SAVE_SMURF_SUCCESS,
  DELETE_SMURF,
  REQUEST_ERROR
} from "../actions";

const initialState = {
  smurfs: [],
  error: null,
  fetching: false,
  savingSmurf: false,
  deletingSmurf: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        fetching: true
      };
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetching: false
      };
    case GET_SMURFS_FAILURE:
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

export default reducer;
