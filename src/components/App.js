import React, { useEffect } from "react";
import "./app.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
// import Home from "./Home";
import BlogListPage from "./BlogListPage";
import BlogDetails from "./BlogDetails";
import Contact from "./Contact";
import NotFound from "./NotFound";
import AddBlog from "./AddBlog";
import EditBlog from "./EditBlog";
import Login from "./Login";

import createHistory from "history/createBrowserHistory";
import firebase from "firebase";
import { useDispatch } from "react-redux";

export const history = createHistory();

const App = () => {
  const dispatch = useDispatch();
  // const dispatchRef = useRef(dispatch);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("Success Login !");
        dispatch({
          type: "LOGIN",
        });
      } else {
        console.log("Success Logout !");
        dispatch({
          type: "LOGOUT",
        });
      }
    });
  }, []);

  const router = createBrowserRouter([
    {
      index: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "/blogs",
          element: <BlogListPage />,
        },
        {
          path: "/blogs/:id",
          element: <BlogDetails />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/create",
          element: <AddBlog />,
        },
        {
          path: "/edit/:id",
          element: <EditBlog />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider history={history} router={router} />;
};

export default App;
