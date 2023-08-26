import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./blogList.css";
import BlogListElement from "./BlogListElement";
import { pullDb } from "../actions/blogActions";

const BlogList = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { auth, blogs } = state;
  useEffect(() => {
    if (auth.isLoggin) {
      dispatch(pullDb());
    }
  }, []);
  return (
    <>
      {blogs?.length}
      {blogs?.map((blog) => {
        return <BlogListElement {...blog} key={blog.id} />;
      })}
    </>
  );
};

// const mapStateToProps = (state /*ownProps*/) => {
//   return {
//     blogs: state.blogs,
//   };
// };

export default BlogList;
