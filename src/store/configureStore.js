import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import authReducer from "../reducers/authReducer";
import blogReducer from "../reducers/blogReducer";

import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    blogs: blogReducer,
    auth: authReducer,
  }),

  //applyMiddleWare - uygulama yazilimi
  //composeEnhancers - iyilesdiriciler olusdur
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
