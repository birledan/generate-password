import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import password from "./password";

const store = createStore(
  combineReducers({
    password,
  }),
  applyMiddleware(thunk)
);

export default store;
