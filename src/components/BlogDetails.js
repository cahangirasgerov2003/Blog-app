import React from "react";
import "./blogDetails.css";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import BlogDetailsElement from "./BlogDetailsElement";

const BlogDetails = (props) => {
  const params = useParams();
  return (
    <BlogDetailsElement
      {...props.blogs.find((blog) => blog.id === params.id)}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  };
};

export default connect(mapStateToProps)(BlogDetails);
