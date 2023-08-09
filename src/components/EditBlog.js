import React from "react";
import "./editBlog.css";
import Form from "./Form";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { updateBlog } from "../actions/blogActions";

const EditBlog = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Edit Blog</h1>
      <Form
        blog={props.blogs.find((blog) => blog.id === params.id)}
        addForm={(blog) => {
          props.dispatch(updateBlog(params.id, { ...blog }));
          navigate("/blogs");
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  };
};

export default connect(mapStateToProps)(EditBlog);
