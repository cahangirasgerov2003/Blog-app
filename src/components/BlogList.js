import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./blogList.css";
import BlogListElement from "./BlogListElement";
import { useSelector, useDispatch } from "react-redux";
import { pullDb } from "../actions/blogActions";
const BlogList = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const {auth,blogs} = state;

  useEffect(() => {
    if(auth.isLoggedIn) dispatch(pullDb())
  },[])

  console.log(blogs,'blogs')

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
