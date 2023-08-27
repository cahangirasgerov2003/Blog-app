import React from "react";
import "./blogListPage.css";
// import { NavLink } from "react-router-dom";
import BlogList from "./BlogList";
import { useSelector } from "react-redux";

const BlogListPage = () => {
  const state = useSelector((state) => state.blogs);
  return (
    <div>
      <p>
        {state.length > 0 ? "Blog Lists Length : " + state.length : "Blogs"}
      </p>
      <BlogList />
      {/* <NavLink to="/blogs/1">Blog 1</NavLink>
      <NavLink to="/blogs/2">Blog 2</NavLink> */}
    </div>
  );
};

export default BlogListPage;
