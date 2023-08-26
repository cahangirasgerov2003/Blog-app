import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import "./blogList.css";
import BlogListElement from "./BlogListElement";
import { pullDb } from "../actions/blogActions";

const BlogList = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (props.auth.isLoggin === true) {
      console.log("pullDb");
      dispatch(pullDb());
    }
  }, [dispatch, props.auth.isLoggin]);
  return (
    <>
      {props.blogs?.length}
      {props.blogs?.map((blog) => {
        return <BlogListElement {...blog} key={blog.id} />;
      })}
    </>
  );
};

const mapStateToProps = (state /*ownProps*/) => {
  return {
    blogs: state.blogs,
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(BlogList);
