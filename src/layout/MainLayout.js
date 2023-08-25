import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { logout } from "../actions/authActions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const MainLayout = () => {
  const state = useSelector(state => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if(state.isLoggedIn) navigate("/blogs")
  },[state.isLoggedIn])

  return (
    <header>
      <h1>Blog App</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
      <NavLink to="/create">Create</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <button
        onClick={() => {
          logout();
          navigate('/')
        }}
      >
        Logout
      </button>
      <div>
        <Outlet />
      </div>
    </header>
  );
};

export default MainLayout;
