import React from "react";
import "./blogDetails.css";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const params = useParams();
  return (
    <div>
      <p>Blog Details {params.id}</p>
    </div>
  );
};

export default BlogDetails;
