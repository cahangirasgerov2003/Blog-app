import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import "./blogList.css";
import BlogListElement from "./BlogListElement";
import { pullDb } from "../actions/blogActions";

const BlogList = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (props.auth.isLoggin === true) {
      dispatch(pullDb());
    }
  }, [dispatch, props.auth.isLoggin]);
  return (
    <div>
      {props.blogs?.map((blog) => {
        return (
          <div className="my-4">
            <BlogListElement {...blog} key={blog.id} />
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state /*ownProps*/) => {
  return {
    blogs: state.blogs,
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(BlogList);
