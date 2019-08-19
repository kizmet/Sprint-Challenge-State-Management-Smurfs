import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  REQUEST_ERROR,
  SET_SMURFS,
  POST_REQUEST,
  POST_SUCCESS
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
    case REQUEST_ERROR:
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
    default:
      return state;
  }
};

export default reducer;
