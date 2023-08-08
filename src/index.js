import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { createStore, combineReducers } from "redux";
import { v4 as uuid } from "uuid";

// const state = {
//   blogs : [
//     {
//       id:uuid(),
//       title:"Title 1",
//       description:"Desc 1",
//       dataAdded:undefined
//     }
//   ],

//   auth:{
//     userId:uuid(),
//     userName:"Cahangir Asgerov",
//     email:"cahangirAsgerli2003@gmail.com"
//   }
// };

const blogsState = [];
const authState = {};

const addBlog = ({
  id = uuid(),
  title = "",
  description = "",
  dataAdded = undefined,
}) => {
  return {
    type: "ADD_BLOG",
    blog: {
      id,
      title,
      description,
      dataAdded,
    },
  };
};

const removeBlog = (id) => {
  return {
    type: "REMOVE_BLOG",
    id,
  };
};

const blogReducer = (state = blogsState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.blog];
    case "REMOVE_BLOG":
      return state.filter((blog) => {
        return blog.id !== action.id;
      });
    default:
      return state;
  }
};

const authReducer = (state = authState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    blogs: blogReducer,
    auth: authReducer,
  })
);

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

store.dispatch(
  addBlog({
    id: uuid(),
    title: "Title 2",
    description: "Desc 2",
    dataAdded: Date.now(),
  })
);

store.dispatch(removeBlog(blog1.blog.id));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
