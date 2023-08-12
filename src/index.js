import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import store from "./store/configureStore";

import { v4 as uuid } from "uuid";

import { addBlog, removeBlog, updateBlog } from "./actions/blogActions";
import { Provider } from "react-redux";
import "./firebase/configFirebase";

// store.subscribe(() => {
//   console.log(store.getState());
// });

const blog1 = store.dispatch(
  addBlog({
    id: uuid(),
    title: "Title 1",
    description: "Desc 1",
    dataAdded: undefined,
  })
);

const blog2 = store.dispatch(
  addBlog({
    id: uuid(),
    title: "Title 2",
    description: "Desc 2",
    dataAdded: Date.now(),
  })
);

store.dispatch(
  addBlog({
    id: uuid(),
    title: "Title 3",
    description: "Desc 3",
    dataAdded: undefined,
  })
);

store.dispatch(
  addBlog({
    id: uuid(),
    title: "Title 4",
    description: "Desc 4",
    dataAdded: undefined,
  })
);

store.dispatch(removeBlog(blog1.blog.id));

store.dispatch(
  updateBlog(blog2.blog.id, {
    title: "Update title 2",
  })
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
