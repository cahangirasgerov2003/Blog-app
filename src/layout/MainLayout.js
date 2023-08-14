import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { logout } from "../actions/authActions";

const MainLayout = () => {
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
