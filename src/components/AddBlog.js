import React from "react";
import "./addBlog.css";
import Form from "./Form";
import { connect } from "react-redux";
import { addBlogToDb } from "../actions/blogActions";
// import { useNavigate } from "react-router-dom";

const AddBlog = (props) => {
  // const navigate = useNavigate();
  console.log(props);
  return (
    <>
      <h1>Add Blog</h1>
      <Form
        addForm={(newBlog) => {
          props.dispatch(addBlogToDb(newBlog));
          // navigate("/blogs");
          props.history.push("/");
        }}
      />
    </>
  );
};

export default connect()(AddBlog);
