import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./scss/custom.scss";

import store from "./store/configureStore";

import { pullDb } from "./actions/blogActions";
import { Provider } from "react-redux";
import "./firebase/configFirebase";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<p className="text-center text-danger h1 mt-3">Loading...</p>);

store
  .dispatch(pullDb())
  .then(() => {
    root.render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  })
  .catch((e) => {
    console.log("Error : ", e);
  });
