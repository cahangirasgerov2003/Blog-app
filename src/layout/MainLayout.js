import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <header>
      <h1>Blog App</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
      <NavLink to="/create">Create</NavLink>
      <NavLink to="/contact">Contact</NavLink>

      <div>
        <Outlet />
      </div>
    </header>
  );
};

export default MainLayout;
