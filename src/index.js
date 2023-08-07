import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

// import { createStore } from "redux";

// const initialState = {
//   count: 10,
// };

// const store = createStore((state = initialState) => {
//   return state;
// });

// console.log(store.getState());

// //INCREMENT DECREMENT RESET => ACTIONS (Object)

// //DISPATCH

// // REDUCERS

import { createStore } from "redux";

const initialState = {
  count: 20,
};

const store = createStore((state = initialState) => {
  return state;
});

console.log(store.getState());

// DISPATCH (Object)

// Reducers

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
