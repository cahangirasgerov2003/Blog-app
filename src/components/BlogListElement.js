import { Link } from "react-router-dom";
import "./blogListElement.css";

import React from "react";

const BlogListElement = ({ title, id }) => {
  return (
    <ul>
      <li>
        {title} -{" "}
        <Link to={`${id}`} style={{ textDecorationLine: "underline" }}>
          Details
        </Link>
      </li>
    </ul>
  );
};

export default BlogListElement;
