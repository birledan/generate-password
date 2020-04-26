import password from "../services/password";

// Actions
const SET_ID = "app/password/SET_ID";
const SET_ERROR = "app/password/SET_ERROR";
const SET_LOADING = "app/password/SET_LOADING";
const GET_PASSWORD = "app/password/GET_PASSWORD";

// initial state
const INITIAL_STATE = {
  error: null,
  userId: null,
  loading: false,
  generatedPassword: "",
};

// Reducer
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case SET_ID:
      return {
        ...state,
        userId: action.payload,
      };
    case GET_PASSWORD:
      return {
        ...state,
        generatedPassword: action.payload,
      };
    default:
      return state;
  }
}

// Action Creators
export function getPassword(payload) {
  return function (dispatch) {
    dispatch({ type: SET_LOADING, payload: true });

    password
      .generate(payload)
      .then((data) => {
        dispatch({ type: GET_PASSWORD, payload: data });
        dispatch({ type: SET_LOADING, payload: false });
        dispatch({ type: SET_ID, payload: payload.userId });
      })
      .catch((err) => {
        dispatch({ type: SET_ERROR, payload: err });
        dispatch({ type: SET_LOADING, payload: false });
      });
  };
}
