import React from "react";
import ReactDOM from "react-dom/client";
import App, { history } from "./components/App";
import "./scss/custom.scss";

import store from "./store/configureStore";

import { Provider } from "react-redux";
import "./firebase/configFirebase";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Provider store={store}>
  <App />
</Provider>);






 // store.dispatch(pullDb()).then(() => {
    //   root.render(renderContent);
    // });
    // if (history.location.pathname === "/") {
    //   history.push("/blogs");
    // }