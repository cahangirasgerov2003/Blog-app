import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import store from "./store/configureStore";

import { v4 as uuid } from "uuid";

import { addBlog, removeBlog, updateBlog } from "./actions/blogActions";

console.log(store);

store.subscribe(() => {
  console.log(store.getState());
});

// Action Creater
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

store.dispatch(removeBlog(blog1.blog.id));

store.dispatch(
  updateBlog(blog2.blog.id, {
    title: "Update title 2",
  })
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
