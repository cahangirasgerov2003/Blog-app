import React from "react";
import "./addBlog.css";
import Form from "./Form";
import { connect } from "react-redux";
import { addBlog } from "../actions/blogActions";
import { useNavigate } from "react-router-dom";

const AddBlog = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Add Blog</h1>
      <Form
        addForm={(newBlog) => {
          props.dispatch(addBlog(newBlog));
          navigate("/blogs");
        }}
      />
    </>
  );
};

export default connect()(AddBlog);
