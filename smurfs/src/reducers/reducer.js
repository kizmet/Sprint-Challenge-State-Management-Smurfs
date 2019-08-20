import {
  FETCH_REQUEST,
  RECEIVE_REQUEST,
  REQUEST_ERROR,
  POST,
  POST_SUCCESS
} from "../actions/actions";

const initialState = {
  smurfs: [],
  error: null,
  fetching: false,
  savingSmurf: false,
  deletingSmurf: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        fetching: true,
        error: "You have not successfully fetched the smurfs!"
      };
    case RECEIVE_REQUEST: {
      return {
        ...state,
        smurfs: action.payload,
        fetching: false,
        error: ""
      };
    }
    case REQUEST_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case POST:
      return {
        ...state,
        savingSmurf: true,
        error: action.payload
      };
    case POST_SUCCESS:
      return {
        ...state,
        savingSmurf: false
      };
    default:
      return state;
  }
};

export default reducer;
