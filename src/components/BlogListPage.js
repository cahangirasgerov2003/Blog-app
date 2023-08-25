import React from "react";
import "./blogListPage.css";
// import { NavLink } from "react-router-dom";
import BlogList from "./BlogList";

const BlogListPage = () => {
  return (
    <div>
      <h2>
        {/* buraya goz gezdir uzunlugu vermek ucun componenti verirsen
        normalda ola biler bilmirem :d */}
        Blog Lists Length : <BlogList />
      </h2>
      {/* <NavLink to="/blogs/1">Blog 1</NavLink>
      <NavLink to="/blogs/2">Blog 2</NavLink> */}
    </div>
  );
};

export default BlogListPage;
