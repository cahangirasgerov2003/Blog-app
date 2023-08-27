import React, { useEffect, useRef } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../actions/authActions";
import { useSelector } from "react-redux";
import "./mainLayout.css";

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
    <div className="mainLayout">
      <header className="d-flex justify-content-between">
        <h1 className="mainTitle">Blog App</h1>
        <nav className="d-flex align-context-center ms-auto navLinkContainer">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/create">Create</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="logoutButton"
        >
          Logout
        </button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
