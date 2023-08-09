import React from "react";
import { connect } from "react-redux";
import "./blogList.css";
import BlogListElement from "./BlogListElement";

const BlogList = (props) => {
  return (
    <>
      {props.blogs.length}
      {props.blogs.map((blog) => {
        return <BlogListElement {...blog} key={blog.id} />;
      })}
    </>
  );
};

const mapStateToProps = (state /*ownProps*/) => {
  return {
    blogs: state.blogs,
  };
};

export default connect(mapStateToProps)(BlogList);
