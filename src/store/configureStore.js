import { createStore, combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import blogReducer from "../reducers/blogReducer";

const store = createStore(
  combineReducers({
    blogs: blogReducer,
    auth: authReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
