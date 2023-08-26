import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./scss/custom.scss";

import store from "./store/configureStore";

// import { pullDb } from "./actions/blogActions";
import { Provider } from "react-redux";
import "./firebase/configFirebase";
// import { firebase } from "./firebase/configFirebase";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// store.dispatch(pullDb()).then(() => {});
