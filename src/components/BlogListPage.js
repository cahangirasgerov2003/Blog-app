import React from "react";
import "./blogListPage.css";
import { NavLink } from "react-router-dom";

const BlogListPage = () => {
  return (
    <div>
      <h2>Blog Lists</h2>
      <NavLink to="/blogs/1">Blog 1</NavLink>
      <NavLink to="/blogs/2">Blog 2</NavLink>
    </div>
  );
};

export default BlogListPage;
