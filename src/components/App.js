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
import { firebase } from "../firebase/configFirebase";
import { useNavigate } from "react-router-dom"; // Import useHistory
import createHistory from "history/createBrowserHistory";
import { useDispatch, useSelector } from "react-redux";

export const history = createHistory();

const App = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.auth)
  console.log(state,'state in App')

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('successfully logged in')
        dispatch({type: 'login/success'})
      } else {
        console.log("succesfully logged out");
       dispatch({type: 'logout/success'})
      }
    });
  },[])

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
