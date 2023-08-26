import React, { useEffect, useRef } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../actions/authActions";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const navigate = useNavigate();
  const stateAuth = useSelector((state) => state.auth);
  const navigateRef = useRef(navigate);
  useEffect(() => {
    if (stateAuth.isLoggin) {
      navigateRef.current("/blogs");
    }
  }, [stateAuth.isLoggin]);

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
          navigate("/");
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
