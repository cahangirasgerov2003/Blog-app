import { createStore, combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import blogReducer from "../reducers/blogReducer";

const store = createStore(
  combineReducers({
    blogs: blogReducer,
    auth: authReducer,
  })
);

export default store;
